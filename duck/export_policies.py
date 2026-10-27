"""Export the 61-512-256-128-14 ELU MLP policies from ONNX to a flat float32 .bin.

Layout (little endian float32): obs mean[61], obs std[61], then for each of the
4 layers W[out][in] row-major followed by b[out]. Used by src/policy.js.
"""
import sys, numpy as np, onnx
from onnx import numpy_helper

DIMS = [61, 512, 256, 128, 14]

def export(src, dst):
    m = onnx.load(src)
    t = {i.name: numpy_helper.to_array(i).astype(np.float32) for i in m.graph.initializer}
    for n in m.graph.node:
        if n.op_type == 'Gemm':
            assert dict((a.name, a.i) for a in n.attribute if a.name == 'transB').get('transB', 0) == 1
    parts = [t['obs_normalizer._mean'].ravel(), t['onnx::Div_24'].ravel()]
    for k in (0, 2, 4, 6):
        w, b = t[f'mlp.{k}.weight'], t[f'mlp.{k}.bias']
        assert w.shape == (DIMS[k // 2 + 1], DIMS[k // 2]), w.shape
        parts += [w.ravel(), b.ravel()]
    np.concatenate(parts).astype('<f4').tofile(dst)

if __name__ == '__main__':
    export(sys.argv[1], sys.argv[2])
