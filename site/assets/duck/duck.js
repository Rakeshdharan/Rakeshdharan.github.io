var hv=0,eh=1,dv=2;var Gd=1,pl=2,pi=3,ti=0,vn=1,Gn=2,Pi=0,Ur=1,th=2,nh=3,ih=4,fv=5,ir=100,pv=101,mv=102,gv=103,_v=104,vv=200,yv=201,xv=202,Sv=203,Nc=204,Fc=205,Mv=206,wv=207,bv=208,Ev=209,Av=210,Tv=211,Rv=212,Cv=213,Pv=214,Iv=0,Lv=1,Dv=2,Uo=3,Nv=4,Fv=5,Uv=6,Ov=7,Wd=0,kv=1,Bv=2,Ii=0,zv=1,Hv=2,Vv=3,ml=4,Gv=5,Wv=6,Xv=7,rh="attached",$v="detached",Xd=300,Hr=301,Vr=302,Uc=303,Oc=304,_a=306,_i=1e3,mi=1001,Ms=1002,dn=1003,gl=1004;var Nr=1005;var _n=1006,ys=1007;var Qn=1008;var Li=1009,qv=1010,Yv=1011,$d=1012,qd=1013,Gr=1014,ei=1015,va=1016,Yd=1017,jd=1018,Fs=1020,jv=35902,Kv=1021,Zv=1022,Xn=1023,Jv=1024,Qv=1025,Or=1026,ws=1027,Kd=1028,Zd=1029,ey=1030,Jd=1031,Qd=1033,Ja=33776,Qa=33777,ec=33778,tc=33779,sh=35840,oh=35841,ah=35842,ch=35843,lh=36196,uh=37492,hh=37496,dh=37808,fh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,yh=37815,xh=37816,Sh=37817,Mh=37818,wh=37819,bh=37820,Eh=37821,nc=36492,Ah=36494,Th=36495,ty=36283,Rh=36284,Ch=36285,Ph=36286;var Wr=2300,or=2301,ic=2302,Ih=2400,Lh=2401,Dh=2402,ny=2500;var ef=0,ya=1,Us=2,iy=3200,ry=3201,tf=0,sy=1,Ri="",un="srgb",rn="srgb-linear",_l="display-p3",xa="display-p3-linear",Oo="linear",Ut="srgb",ko="rec709",Bo="p3";var gr=7680;var Nh=519,oy=512,ay=513,cy=514,nf=515,ly=516,uy=517,hy=518,dy=519,kc=35044;var Fh="300 es",gi=2e3,zo=2001,Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let o=0,c=i.length;o<c;o++)i[o].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=1234567,kr=Math.PI/180,Xr=180/Math.PI;function $n(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function hn(r,e,t){return Math.max(e,Math.min(t,r))}function vl(r,e){return(r%e+e)%e}function fy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function py(r,e,t){return r!==e?(t-r)/(e-r):0}function xs(r,e,t){return(1-t)*r+t*e}function my(r,e,t,n){return xs(r,e,1-Math.exp(-t*n))}function gy(r,e=1){return e-Math.abs(vl(r,e*2)-e)}function _y(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function yy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xy(r,e){return r+Math.random()*(e-r)}function Sy(r){return r*(.5-Math.random())}function My(r){r!==void 0&&(Uh=r);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wy(r){return r*kr}function by(r){return r*Xr}function Ey(r){return(r&r-1)===0&&r!==0}function Ay(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ty(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ry(r,e,t,n,i){let o=Math.cos,c=Math.sin,l=o(t/2),d=c(t/2),h=o((e+n)/2),f=c((e+n)/2),m=o((e-n)/2),g=c((e-n)/2),x=o((n-e)/2),M=c((n-e)/2);switch(i){case"XYX":r.set(l*f,d*m,d*g,l*h);break;case"YZY":r.set(d*g,l*f,d*m,l*h);break;case"ZXZ":r.set(d*m,d*g,l*f,l*h);break;case"XZX":r.set(l*f,d*M,d*x,l*h);break;case"YXY":r.set(d*x,l*f,d*M,l*h);break;case"ZYZ":r.set(d*M,d*x,l*f,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var rf={DEG2RAD:kr,RAD2DEG:Xr,generateUUID:$n,clamp:hn,euclideanModulo:vl,mapLinear:fy,inverseLerp:py,lerp:xs,damp:my,pingpong:gy,smoothstep:_y,smootherstep:vy,randInt:yy,randFloat:xy,randFloatSpread:Sy,seededRandom:My,degToRad:wy,radToDeg:by,isPowerOfTwo:Ey,ceilPowerOfTwo:Ay,floorPowerOfTwo:Ty,setQuaternionFromProperEuler:Ry,normalize:Ct,denormalize:Wn},ct=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*i+e.x,this.y=o*i+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class r{constructor(e,t,n,i,o,c,l,d,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,c,l,d,h)}set(e,t,n,i,o,c,l,d,h){let f=this.elements;return f[0]=e,f[1]=i,f[2]=l,f[3]=t,f[4]=o,f[5]=d,f[6]=n,f[7]=c,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,o=this.elements,c=n[0],l=n[3],d=n[6],h=n[1],f=n[4],m=n[7],g=n[2],x=n[5],M=n[8],w=i[0],y=i[3],v=i[6],L=i[1],C=i[4],P=i[7],O=i[2],N=i[5],U=i[8];return o[0]=c*w+l*L+d*O,o[3]=c*y+l*C+d*N,o[6]=c*v+l*P+d*U,o[1]=h*w+f*L+m*O,o[4]=h*y+f*C+m*N,o[7]=h*v+f*P+m*U,o[2]=g*w+x*L+M*O,o[5]=g*y+x*C+M*N,o[8]=g*v+x*P+M*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],c=e[4],l=e[5],d=e[6],h=e[7],f=e[8];return t*c*f-t*l*h-n*o*f+n*l*d+i*o*h-i*c*d}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],c=e[4],l=e[5],d=e[6],h=e[7],f=e[8],m=f*c-l*h,g=l*d-f*o,x=h*o-c*d,M=t*m+n*g+i*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=m*w,e[1]=(i*h-f*n)*w,e[2]=(l*n-i*c)*w,e[3]=g*w,e[4]=(f*t-i*d)*w,e[5]=(i*o-l*t)*w,e[6]=x*w,e[7]=(n*d-h*t)*w,e[8]=(c*t-n*o)*w,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,c,l){let d=Math.cos(o),h=Math.sin(o);return this.set(n*d,n*h,-n*(d*c+h*l)+c+e,-i*h,i*d,-i*(-h*c+d*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new pt;function sf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cy(){let r=bs("canvas");return r.style.display="block",r}var Oh={};function of(r){r in Oh||(Oh[r]=!0,console.warn(r))}var kh=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bh=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[rn]:{transfer:Oo,primaries:ko,toReference:r=>r,fromReference:r=>r},[un]:{transfer:Ut,primaries:ko,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[xa]:{transfer:Oo,primaries:Bo,toReference:r=>r.applyMatrix3(Bh),fromReference:r=>r.applyMatrix3(kh)},[_l]:{transfer:Ut,primaries:Bo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Bh),fromReference:r=>r.applyMatrix3(kh).convertLinearToSRGB()}},Py=new Set([rn,xa]),At={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Py.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=ro[e].toReference,i=ro[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ro[r].primaries},getTransfer:function(r){return r===Ri?Oo:ro[r].transfer}};function Br(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var _r,Bc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=bs("canvas")),_r.width=e.width,_r.height=e.height;let n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let c=0;c<o.length;c++)o[c]=Br(o[c]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Br(t[n]/255)*255):t[n]=Br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iy=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let c=0,l=i.length;c<l;c++)i[c].isDataTexture?o.push(oc(i[c].image)):o.push(oc(i[c]))}else o=oc(i);n.url=o}return t||(e.images[this.uuid]=n),n}};function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ly=0,tn=class r extends Di{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=mi,i=mi,o=_n,c=Qn,l=Xn,d=Li,h=r.DEFAULT_ANISOTROPY,f=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=$n(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=d,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Xd;tn.DEFAULT_ANISOTROPY=1;var Dt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*i+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*i+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*i+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*i+c[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o,d=e.elements,h=d[0],f=d[4],m=d[8],g=d[1],x=d[5],M=d[9],w=d[2],y=d[6],v=d[10];if(Math.abs(f-g)<.01&&Math.abs(m-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(f+g)<.1&&Math.abs(m+w)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(h+1)/2,P=(x+1)/2,O=(v+1)/2,N=(f+g)/4,U=(m+w)/4,X=(M+y)/4;return C>P&&C>O?C<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(C),i=N/n,o=U/n):P>O?P<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(P),n=N/i,o=X/i):O<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(O),n=U/o,i=X/o),this.set(n,i,o,t),this}let L=Math.sqrt((y-M)*(y-M)+(m-w)*(m-w)+(g-f)*(g-f));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(m-w)/L,this.z=(g-f)/L,this.w=Math.acos((h+x+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zc=class extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let o=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];let c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hc=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,c,l){let d=n[i+0],h=n[i+1],f=n[i+2],m=n[i+3],g=o[c+0],x=o[c+1],M=o[c+2],w=o[c+3];if(l===0){e[t+0]=d,e[t+1]=h,e[t+2]=f,e[t+3]=m;return}if(l===1){e[t+0]=g,e[t+1]=x,e[t+2]=M,e[t+3]=w;return}if(m!==w||d!==g||h!==x||f!==M){let y=1-l,v=d*g+h*x+f*M+m*w,L=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){let O=Math.sqrt(C),N=Math.atan2(O,v*L);y=Math.sin(y*N)/O,l=Math.sin(l*N)/O}let P=l*L;if(d=d*y+g*P,h=h*y+x*P,f=f*y+M*P,m=m*y+w*P,y===1-l){let O=1/Math.sqrt(d*d+h*h+f*f+m*m);d*=O,h*=O,f*=O,m*=O}}e[t]=d,e[t+1]=h,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,o,c){let l=n[i],d=n[i+1],h=n[i+2],f=n[i+3],m=o[c],g=o[c+1],x=o[c+2],M=o[c+3];return e[t]=l*M+f*m+d*x-h*g,e[t+1]=d*M+f*g+h*m-l*x,e[t+2]=h*M+f*x+l*g-d*m,e[t+3]=f*M-l*m-d*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,o=e._z,c=e._order,l=Math.cos,d=Math.sin,h=l(n/2),f=l(i/2),m=l(o/2),g=d(n/2),x=d(i/2),M=d(o/2);switch(c){case"XYZ":this._x=g*f*m+h*x*M,this._y=h*x*m-g*f*M,this._z=h*f*M+g*x*m,this._w=h*f*m-g*x*M;break;case"YXZ":this._x=g*f*m+h*x*M,this._y=h*x*m-g*f*M,this._z=h*f*M-g*x*m,this._w=h*f*m+g*x*M;break;case"ZXY":this._x=g*f*m-h*x*M,this._y=h*x*m+g*f*M,this._z=h*f*M+g*x*m,this._w=h*f*m-g*x*M;break;case"ZYX":this._x=g*f*m-h*x*M,this._y=h*x*m+g*f*M,this._z=h*f*M-g*x*m,this._w=h*f*m+g*x*M;break;case"YZX":this._x=g*f*m+h*x*M,this._y=h*x*m+g*f*M,this._z=h*f*M-g*x*m,this._w=h*f*m-g*x*M;break;case"XZY":this._x=g*f*m-h*x*M,this._y=h*x*m-g*f*M,this._z=h*f*M+g*x*m,this._w=h*f*m+g*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],o=t[8],c=t[1],l=t[5],d=t[9],h=t[2],f=t[6],m=t[10],g=n+l+m;if(g>0){let x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(f-d)*x,this._y=(o-h)*x,this._z=(c-i)*x}else if(n>l&&n>m){let x=2*Math.sqrt(1+n-l-m);this._w=(f-d)/x,this._x=.25*x,this._y=(i+c)/x,this._z=(o+h)/x}else if(l>m){let x=2*Math.sqrt(1+l-n-m);this._w=(o-h)/x,this._x=(i+c)/x,this._y=.25*x,this._z=(d+f)/x}else{let x=2*Math.sqrt(1+m-n-l);this._w=(c-i)/x,this._x=(o+h)/x,this._y=(d+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,o=e._z,c=e._w,l=t._x,d=t._y,h=t._z,f=t._w;return this._x=n*f+c*l+i*h-o*d,this._y=i*f+c*d+o*l-n*h,this._z=o*f+c*h+n*d-i*l,this._w=c*f-n*l-i*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,o=this._z,c=this._w,l=c*e._w+n*e._x+i*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=i,this._z=o,this;let d=1-l*l;if(d<=Number.EPSILON){let x=1-t;return this._w=x*c+t*this._w,this._x=x*n+t*this._x,this._y=x*i+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}let h=Math.sqrt(d),f=Math.atan2(h,l),m=Math.sin((1-t)*f)/h,g=Math.sin(t*f)/h;return this._w=c*m+this._w*g,this._x=n*m+this._x*g,this._y=i*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*c,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,o=e.x,c=e.y,l=e.z,d=e.w,h=2*(c*i-l*n),f=2*(l*t-o*i),m=2*(o*n-c*t);return this.x=t+d*h+c*m-l*f,this.y=n+d*f+l*h-o*m,this.z=i+d*m+o*f-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,o=e.z,c=t.x,l=t.y,d=t.z;return this.x=i*d-o*l,this.y=o*c-n*d,this.z=n*l-i*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ac=new H,zh=new yn,xn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Bn):Bn.fromBufferAttribute(o,c),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}let i=e.children;for(let o=0,c=i.length;o<c;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),oo.subVectors(this.max,us),vr.subVectors(e.a,us),yr.subVectors(e.b,us),xr.subVectors(e.c,us),Mi.subVectors(yr,vr),wi.subVectors(xr,yr),Ki.subVectors(vr,xr);let t=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-Ki.z,Ki.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,Ki.z,0,-Ki.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-Ki.y,Ki.x,0];return!cc(t,vr,yr,xr,oo)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,vr,yr,xr,oo))?!1:(ao.crossVectors(Mi,wi),t=[ao.x,ao.y,ao.z],cc(t,vr,yr,xr,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new H,new H,new H,new H,new H,new H,new H,new H],Bn=new H,so=new xn,vr=new H,yr=new H,xr=new H,Mi=new H,wi=new H,Ki=new H,us=new H,oo=new H,ao=new H,Zi=new H;function cc(r,e,t,n,i){for(let o=0,c=r.length-3;o<=c;o+=3){Zi.fromArray(r,o);let l=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),d=e.dot(Zi),h=t.dot(Zi),f=n.dot(Zi);if(Math.max(-Math.max(d,h,f),Math.min(d,h,f))>l)return!1}return!0}var Dy=new xn,hs=new H,lc=new H,Tn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dy.setFromPoints(e).getCenter(n);let i=0;for(let o=0,c=e.length;o<c;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(lc)),this.expandByPoint(hs.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new H,uc=new H,co=new H,bi=new H,hc=new H,lo=new H,dc=new H,ar=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(uc);let o=e.distanceTo(t)*.5,c=-this.direction.dot(co),l=bi.dot(this.direction),d=-bi.dot(co),h=bi.lengthSq(),f=Math.abs(1-c*c),m,g,x,M;if(f>0)if(m=c*d-l,g=c*l-d,M=o*f,m>=0)if(g>=-M)if(g<=M){let w=1/f;m*=w,g*=w,x=m*(m+c*g+2*l)+g*(c*m+g+2*d)+h}else g=o,m=Math.max(0,-(c*g+l)),x=-m*m+g*(g+2*d)+h;else g=-o,m=Math.max(0,-(c*g+l)),x=-m*m+g*(g+2*d)+h;else g<=-M?(m=Math.max(0,-(-c*o+l)),g=m>0?-o:Math.min(Math.max(-o,-d),o),x=-m*m+g*(g+2*d)+h):g<=M?(m=0,g=Math.min(Math.max(-o,-d),o),x=g*(g+2*d)+h):(m=Math.max(0,-(c*o+l)),g=m>0?o:Math.min(Math.max(-o,-d),o),x=-m*m+g*(g+2*d)+h);else g=c>0?-o:o,m=Math.max(0,-(c*g+l)),x=-m*m+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(uc).addScaledVector(co,g),x}intersectSphere(e,t){li.subVectors(e.center,this.origin);let n=li.dot(this.direction),i=li.dot(li)-n*n,o=e.radius*e.radius;if(i>o)return null;let c=Math.sqrt(o-i),l=n-c,d=n+c;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,c,l,d,h=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,i=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,i=(e.min.x-g.x)*h),f>=0?(o=(e.min.y-g.y)*f,c=(e.max.y-g.y)*f):(o=(e.max.y-g.y)*f,c=(e.min.y-g.y)*f),n>c||o>i||((o>n||isNaN(n))&&(n=o),(c<i||isNaN(i))&&(i=c),m>=0?(l=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(l=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),n>d||l>i)||((l>n||n!==n)&&(n=l),(d<i||i!==i)&&(i=d),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,o){hc.subVectors(t,e),lo.subVectors(n,e),dc.crossVectors(hc,lo);let c=this.direction.dot(dc),l;if(c>0){if(i)return null;l=1}else if(c<0)l=-1,c=-c;else return null;bi.subVectors(this.origin,e);let d=l*this.direction.dot(lo.crossVectors(bi,lo));if(d<0)return null;let h=l*this.direction.dot(hc.cross(bi));if(h<0||d+h>c)return null;let f=-l*bi.dot(dc);return f<0?null:this.at(f/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class r{constructor(e,t,n,i,o,c,l,d,h,f,m,g,x,M,w,y){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,c,l,d,h,f,m,g,x,M,w,y)}set(e,t,n,i,o,c,l,d,h,f,m,g,x,M,w,y){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=o,v[5]=c,v[9]=l,v[13]=d,v[2]=h,v[6]=f,v[10]=m,v[14]=g,v[3]=x,v[7]=M,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Sr.setFromMatrixColumn(e,0).length(),o=1/Sr.setFromMatrixColumn(e,1).length(),c=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),d=Math.cos(i),h=Math.sin(i),f=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){let g=c*f,x=c*m,M=l*f,w=l*m;t[0]=d*f,t[4]=-d*m,t[8]=h,t[1]=x+M*h,t[5]=g-w*h,t[9]=-l*d,t[2]=w-g*h,t[6]=M+x*h,t[10]=c*d}else if(e.order==="YXZ"){let g=d*f,x=d*m,M=h*f,w=h*m;t[0]=g+w*l,t[4]=M*l-x,t[8]=c*h,t[1]=c*m,t[5]=c*f,t[9]=-l,t[2]=x*l-M,t[6]=w+g*l,t[10]=c*d}else if(e.order==="ZXY"){let g=d*f,x=d*m,M=h*f,w=h*m;t[0]=g-w*l,t[4]=-c*m,t[8]=M+x*l,t[1]=x+M*l,t[5]=c*f,t[9]=w-g*l,t[2]=-c*h,t[6]=l,t[10]=c*d}else if(e.order==="ZYX"){let g=c*f,x=c*m,M=l*f,w=l*m;t[0]=d*f,t[4]=M*h-x,t[8]=g*h+w,t[1]=d*m,t[5]=w*h+g,t[9]=x*h-M,t[2]=-h,t[6]=l*d,t[10]=c*d}else if(e.order==="YZX"){let g=c*d,x=c*h,M=l*d,w=l*h;t[0]=d*f,t[4]=w-g*m,t[8]=M*m+x,t[1]=m,t[5]=c*f,t[9]=-l*f,t[2]=-h*f,t[6]=x*m+M,t[10]=g-w*m}else if(e.order==="XZY"){let g=c*d,x=c*h,M=l*d,w=l*h;t[0]=d*f,t[4]=-m,t[8]=h*f,t[1]=g*m+w,t[5]=c*f,t[9]=x*m-M,t[2]=M*m-x,t[6]=l*f,t[10]=w*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ny,e,Fy)}lookAt(e,t,n){let i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ei.crossVectors(n,En),Ei.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ei.crossVectors(n,En)),Ei.normalize(),uo.crossVectors(En,Ei),i[0]=Ei.x,i[4]=uo.x,i[8]=En.x,i[1]=Ei.y,i[5]=uo.y,i[9]=En.y,i[2]=Ei.z,i[6]=uo.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,o=this.elements,c=n[0],l=n[4],d=n[8],h=n[12],f=n[1],m=n[5],g=n[9],x=n[13],M=n[2],w=n[6],y=n[10],v=n[14],L=n[3],C=n[7],P=n[11],O=n[15],N=i[0],U=i[4],X=i[8],I=i[12],R=i[1],q=i[5],ee=i[9],B=i[13],Z=i[2],oe=i[6],z=i[10],Se=i[14],te=i[3],xe=i[7],W=i[11],Le=i[15];return o[0]=c*N+l*R+d*Z+h*te,o[4]=c*U+l*q+d*oe+h*xe,o[8]=c*X+l*ee+d*z+h*W,o[12]=c*I+l*B+d*Se+h*Le,o[1]=f*N+m*R+g*Z+x*te,o[5]=f*U+m*q+g*oe+x*xe,o[9]=f*X+m*ee+g*z+x*W,o[13]=f*I+m*B+g*Se+x*Le,o[2]=M*N+w*R+y*Z+v*te,o[6]=M*U+w*q+y*oe+v*xe,o[10]=M*X+w*ee+y*z+v*W,o[14]=M*I+w*B+y*Se+v*Le,o[3]=L*N+C*R+P*Z+O*te,o[7]=L*U+C*q+P*oe+O*xe,o[11]=L*X+C*ee+P*z+O*W,o[15]=L*I+C*B+P*Se+O*Le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],c=e[1],l=e[5],d=e[9],h=e[13],f=e[2],m=e[6],g=e[10],x=e[14],M=e[3],w=e[7],y=e[11],v=e[15];return M*(+o*d*m-i*h*m-o*l*g+n*h*g+i*l*x-n*d*x)+w*(+t*d*x-t*h*g+o*c*g-i*c*x+i*h*f-o*d*f)+y*(+t*h*m-t*l*x-o*c*m+n*c*x+o*l*f-n*h*f)+v*(-i*l*f-t*d*m+t*l*g+i*c*m-n*c*g+n*d*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],c=e[4],l=e[5],d=e[6],h=e[7],f=e[8],m=e[9],g=e[10],x=e[11],M=e[12],w=e[13],y=e[14],v=e[15],L=m*y*h-w*g*h+w*d*x-l*y*x-m*d*v+l*g*v,C=M*g*h-f*y*h-M*d*x+c*y*x+f*d*v-c*g*v,P=f*w*h-M*m*h+M*l*x-c*w*x-f*l*v+c*m*v,O=M*m*d-f*w*d-M*l*g+c*w*g+f*l*y-c*m*y,N=t*L+n*C+i*P+o*O;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/N;return e[0]=L*U,e[1]=(w*g*o-m*y*o-w*i*x+n*y*x+m*i*v-n*g*v)*U,e[2]=(l*y*o-w*d*o+w*i*h-n*y*h-l*i*v+n*d*v)*U,e[3]=(m*d*o-l*g*o-m*i*h+n*g*h+l*i*x-n*d*x)*U,e[4]=C*U,e[5]=(f*y*o-M*g*o+M*i*x-t*y*x-f*i*v+t*g*v)*U,e[6]=(M*d*o-c*y*o-M*i*h+t*y*h+c*i*v-t*d*v)*U,e[7]=(c*g*o-f*d*o+f*i*h-t*g*h-c*i*x+t*d*x)*U,e[8]=P*U,e[9]=(M*m*o-f*w*o-M*n*x+t*w*x+f*n*v-t*m*v)*U,e[10]=(c*w*o-M*l*o+M*n*h-t*w*h-c*n*v+t*l*v)*U,e[11]=(f*l*o-c*m*o-f*n*h+t*m*h+c*n*x-t*l*x)*U,e[12]=O*U,e[13]=(f*w*i-M*m*i+M*n*g-t*w*g-f*n*y+t*m*y)*U,e[14]=(M*l*i-c*w*i-M*n*d+t*w*d+c*n*y-t*l*y)*U,e[15]=(c*m*i-f*l*i+f*n*d-t*m*d-c*n*g+t*l*g)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),o=1-n,c=e.x,l=e.y,d=e.z,h=o*c,f=o*l;return this.set(h*c+n,h*l-i*d,h*d+i*l,0,h*l+i*d,f*l+n,f*d-i*c,0,h*d-i*l,f*d+i*c,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,c){return this.set(1,n,o,0,e,1,c,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,o=t._x,c=t._y,l=t._z,d=t._w,h=o+o,f=c+c,m=l+l,g=o*h,x=o*f,M=o*m,w=c*f,y=c*m,v=l*m,L=d*h,C=d*f,P=d*m,O=n.x,N=n.y,U=n.z;return i[0]=(1-(w+v))*O,i[1]=(x+P)*O,i[2]=(M-C)*O,i[3]=0,i[4]=(x-P)*N,i[5]=(1-(g+v))*N,i[6]=(y+L)*N,i[7]=0,i[8]=(M+C)*U,i[9]=(y-L)*U,i[10]=(1-(g+w))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,o=Sr.set(i[0],i[1],i[2]).length(),c=Sr.set(i[4],i[5],i[6]).length(),l=Sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);let h=1/o,f=1/c,m=1/l;return zn.elements[0]*=h,zn.elements[1]*=h,zn.elements[2]*=h,zn.elements[4]*=f,zn.elements[5]*=f,zn.elements[6]*=f,zn.elements[8]*=m,zn.elements[9]*=m,zn.elements[10]*=m,t.setFromRotationMatrix(zn),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,i,o,c,l=gi){let d=this.elements,h=2*o/(t-e),f=2*o/(n-i),m=(t+e)/(t-e),g=(n+i)/(n-i),x,M;if(l===gi)x=-(c+o)/(c-o),M=-2*c*o/(c-o);else if(l===zo)x=-c/(c-o),M=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=f,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,i,o,c,l=gi){let d=this.elements,h=1/(t-e),f=1/(n-i),m=1/(c-o),g=(t+e)*h,x=(n+i)*f,M,w;if(l===gi)M=(c+o)*m,w=-2*m;else if(l===zo)M=o*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*f,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=w,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new H,zn=new ht,Ny=new H(0,0,0),Fy=new H(1,1,1),Ei=new H,uo=new H,En=new H,Hh=new ht,Vh=new yn,ni=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,o=i[0],c=i[4],l=i[8],d=i[1],h=i[5],f=i[9],m=i[2],g=i[6],x=i[10];switch(t){case"XYZ":this._y=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-hn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uy=0,Gh=new H,Mr=new yn,ui=new ht,ho=new H,ds=new H,Oy=new H,ky=new yn,Wh=new H(1,0,0),Xh=new H(0,1,0),$h=new H(0,0,1),qh={type:"added"},By={type:"removed"},wr={type:"childadded",child:null},fc={type:"childremoved",child:null},zt=class r extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new ni,n=new yn,i=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new pt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(ds,ho,this.up):ui.lookAt(ho,ds,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Mr.setFromRotationMatrix(ui),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(By),fc.child=e,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let o=0,c=i.length;o<c;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let o=0,c=i.length;o<c;o++){let l=i[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let d=l.shapes;if(Array.isArray(d))for(let h=0,f=d.length;h<f;h++){let m=d[h];o(e.shapes,m)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let d=0,h=this.material.length;d<h;d++)l.push(o(e.materials,this.material[d]));i.material=l}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){let d=this.animations[l];i.animations.push(o(e.animations,d))}}if(t){let l=c(e.geometries),d=c(e.materials),h=c(e.textures),f=c(e.images),m=c(e.shapes),g=c(e.skeletons),x=c(e.animations),M=c(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=i,n;function c(l){let d=[];for(let h in l){let f=l[h];delete f.metadata,d.push(f)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};zt.DEFAULT_UP=new H(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new H,hi=new H,pc=new H,di=new H,br=new H,Er=new H,Yh=new H,mc=new H,gc=new H,_c=new H,sr=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){Hn.subVectors(i,t),hi.subVectors(n,t),pc.subVectors(e,t);let c=Hn.dot(Hn),l=Hn.dot(hi),d=Hn.dot(pc),h=hi.dot(hi),f=hi.dot(pc),m=c*h-l*l;if(m===0)return o.set(0,0,0),null;let g=1/m,x=(h*d-l*f)*g,M=(c*f-l*d)*g;return o.set(1-x-M,M,x)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,i,o,c,l,d){return this.getBarycoord(e,t,n,i,di)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,di.x),d.addScaledVector(c,di.y),d.addScaledVector(l,di.z),d)}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),hi.subVectors(e,t),Hn.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Hn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,o=this.c,c,l;br.subVectors(i,n),Er.subVectors(o,n),mc.subVectors(e,n);let d=br.dot(mc),h=Er.dot(mc);if(d<=0&&h<=0)return t.copy(n);gc.subVectors(e,i);let f=br.dot(gc),m=Er.dot(gc);if(f>=0&&m<=f)return t.copy(i);let g=d*m-f*h;if(g<=0&&d>=0&&f<=0)return c=d/(d-f),t.copy(n).addScaledVector(br,c);_c.subVectors(e,o);let x=br.dot(_c),M=Er.dot(_c);if(M>=0&&x<=M)return t.copy(o);let w=x*h-d*M;if(w<=0&&h>=0&&M<=0)return l=h/(h-M),t.copy(n).addScaledVector(Er,l);let y=f*M-x*m;if(y<=0&&m-f>=0&&x-M>=0)return Yh.subVectors(o,i),l=(m-f)/(m-f+(x-M)),t.copy(i).addScaledVector(Yh,l);let v=1/(y+w+g);return c=w*v,l=g*v,t.copy(n).addScaledVector(br,c).addScaledVector(Er,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},fo={h:0,s:0,l:0};function vc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=At.workingColorSpace){if(e=vl(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=vc(c,o,e+1/3),this.g=vc(c,o,e),this.b=vc(c,o,e-1/3)}return At.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,c=i[1],l=i[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=i[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=sc(e.r),this.g=sc(e.g),this.b=sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return At.fromWorkingColorSpace(ln.copy(this),e),Math.round(hn(ln.r*255,0,255))*65536+Math.round(hn(ln.g*255,0,255))*256+Math.round(hn(ln.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,i=ln.g,o=ln.b,c=Math.max(n,i,o),l=Math.min(n,i,o),d,h,f=(l+c)/2;if(l===c)d=0,h=0;else{let m=c-l;switch(h=f<=.5?m/(c+l):m/(2-c-l),c){case n:d=(i-o)/m+(i<o?6:0);break;case i:d=(o-n)/m+2;break;case o:d=(n-i)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=f,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=un){At.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,i=ln.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(fo);let n=xs(Ai.h,fo.h,t),i=xs(Ai.s,fo.s,t),o=xs(Ai.l,fo.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new $e;$e.NAMES=af;var zy=0,Sn=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ur,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Fc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Fc&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}if(t){let o=i(e.textures),c=i(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mn=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new H,po=new ct,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return of("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),o=Ct(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}};var Go=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wo=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Gt=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hy=0,In=new ht,yc=new zt,Ar=new H,An=new xn,fs=new xn,en=new H,nn=class r extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?Wo:Go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new pt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let o=t[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){let l=t[o];fs.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(An.min,fs.min),An.expandByPoint(en),en.addVectors(An.max,fs.max),An.expandByPoint(en)):(An.expandByPoint(fs.min),An.expandByPoint(fs.max))}An.getCenter(n);let i=0;for(let o=0,c=e.count;o<c;o++)en.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(en));if(t)for(let o=0,c=t.length;o<c;o++){let l=t[o],d=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)en.fromBufferAttribute(l,h),d&&(Ar.fromBufferAttribute(e,h),en.add(Ar)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let c=this.getAttribute("tangent"),l=[],d=[];for(let X=0;X<n.count;X++)l[X]=new H,d[X]=new H;let h=new H,f=new H,m=new H,g=new ct,x=new ct,M=new ct,w=new H,y=new H;function v(X,I,R){h.fromBufferAttribute(n,X),f.fromBufferAttribute(n,I),m.fromBufferAttribute(n,R),g.fromBufferAttribute(o,X),x.fromBufferAttribute(o,I),M.fromBufferAttribute(o,R),f.sub(h),m.sub(h),x.sub(g),M.sub(g);let q=1/(x.x*M.y-M.x*x.y);isFinite(q)&&(w.copy(f).multiplyScalar(M.y).addScaledVector(m,-x.y).multiplyScalar(q),y.copy(m).multiplyScalar(x.x).addScaledVector(f,-M.x).multiplyScalar(q),l[X].add(w),l[I].add(w),l[R].add(w),d[X].add(y),d[I].add(y),d[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,I=L.length;X<I;++X){let R=L[X],q=R.start,ee=R.count;for(let B=q,Z=q+ee;B<Z;B+=3)v(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let C=new H,P=new H,O=new H,N=new H;function U(X){O.fromBufferAttribute(i,X),N.copy(O);let I=l[X];C.copy(I),C.sub(O.multiplyScalar(O.dot(I))).normalize(),P.crossVectors(N,I);let q=P.dot(d[X])<0?-1:1;c.setXYZW(X,C.x,C.y,C.z,q)}for(let X=0,I=L.length;X<I;++X){let R=L[X],q=R.start,ee=R.count;for(let B=q,Z=q+ee;B<Z;B+=3)U(e.getX(B+0)),U(e.getX(B+1)),U(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);let i=new H,o=new H,c=new H,l=new H,d=new H,h=new H,f=new H,m=new H;if(e)for(let g=0,x=e.count;g<x;g+=3){let M=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);i.fromBufferAttribute(t,M),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),f.subVectors(c,o),m.subVectors(i,o),f.cross(m),l.fromBufferAttribute(n,M),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),l.add(f),d.add(f),h.add(f),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(w,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)i.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),f.subVectors(c,o),m.subVectors(i,o),f.cross(m),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(l,d){let h=l.array,f=l.itemSize,m=l.normalized,g=new h.constructor(d.length*f),x=0,M=0;for(let w=0,y=d.length;w<y;w++){l.isInterleavedBufferAttribute?x=d[w]*l.data.stride+l.offset:x=d[w]*f;for(let v=0;v<f;v++)g[M++]=h[x++]}return new It(g,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let l in i){let d=i[l],h=e(d,n);t.setAttribute(l,h)}let o=this.morphAttributes;for(let l in o){let d=[],h=o[l];for(let f=0,m=h.length;f<m;f++){let g=h[f],x=e(g,n);d.push(x)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let l=0,d=c.length;l<d;l++){let h=c[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let d=this.parameters;for(let h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let d in n){let h=n[d];e.data.attributes[d]=h.toJSON(e.data)}let i={},o=!1;for(let d in this.morphAttributes){let h=this.morphAttributes[d],f=[];for(let m=0,g=h.length;m<g;m++){let x=h[m];f.push(x.toJSON(e.data))}f.length>0&&(i[d]=f,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let h in i){let f=i[h];this.setAttribute(h,f.clone(t))}let o=e.morphAttributes;for(let h in o){let f=[],m=o[h];for(let g=0,x=m.length;g<x;g++)f.push(m[g].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let h=0,f=c.length;h<f;h++){let m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jh=new ht,Ji=new ar,mo=new Tn,Kh=new H,Tr=new H,Rr=new H,Cr=new H,xc=new H,go=new H,_o=new ct,vo=new ct,yo=new ct,Zh=new H,Jh=new H,Qh=new H,xo=new H,So=new H,kt=class extends zt{constructor(e=new nn,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=i.length;o<c;o++){let l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let l=this.morphTargetInfluences;if(o&&l){go.set(0,0,0);for(let d=0,h=o.length;d<h;d++){let f=l[d],m=o[d];f!==0&&(xc.fromBufferAttribute(m,e),c?go.addScaledVector(xc,f):go.addScaledVector(xc.sub(t),f))}t.add(go)}return t}raycast(e,t){let n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(o),Ji.copy(e.ray).recast(e.near),!(mo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(mo,Kh)===null||Ji.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(jh.copy(o).invert(),Ji.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i,o=this.geometry,c=this.material,l=o.index,d=o.attributes.position,h=o.attributes.uv,f=o.attributes.uv1,m=o.attributes.normal,g=o.groups,x=o.drawRange;if(l!==null)if(Array.isArray(c))for(let M=0,w=g.length;M<w;M++){let y=g[M],v=c[y.materialIndex],L=Math.max(y.start,x.start),C=Math.min(l.count,Math.min(y.start+y.count,x.start+x.count));for(let P=L,O=C;P<O;P+=3){let N=l.getX(P),U=l.getX(P+1),X=l.getX(P+2);i=Mo(this,v,e,n,h,f,m,N,U,X),i&&(i.faceIndex=Math.floor(P/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let M=Math.max(0,x.start),w=Math.min(l.count,x.start+x.count);for(let y=M,v=w;y<v;y+=3){let L=l.getX(y),C=l.getX(y+1),P=l.getX(y+2);i=Mo(this,c,e,n,h,f,m,L,C,P),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,w=g.length;M<w;M++){let y=g[M],v=c[y.materialIndex],L=Math.max(y.start,x.start),C=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let P=L,O=C;P<O;P+=3){let N=P,U=P+1,X=P+2;i=Mo(this,v,e,n,h,f,m,N,U,X),i&&(i.faceIndex=Math.floor(P/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let M=Math.max(0,x.start),w=Math.min(d.count,x.start+x.count);for(let y=M,v=w;y<v;y+=3){let L=y,C=y+1,P=y+2;i=Mo(this,c,e,n,h,f,m,L,C,P),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}};function Vy(r,e,t,n,i,o,c,l){let d;if(e.side===vn?d=n.intersectTriangle(c,o,i,!0,l):d=n.intersectTriangle(i,o,c,e.side===ti,l),d===null)return null;So.copy(l),So.applyMatrix4(r.matrixWorld);let h=t.ray.origin.distanceTo(So);return h<t.near||h>t.far?null:{distance:h,point:So.clone(),object:r}}function Mo(r,e,t,n,i,o,c,l,d,h){r.getVertexPosition(l,Tr),r.getVertexPosition(d,Rr),r.getVertexPosition(h,Cr);let f=Vy(r,e,t,n,Tr,Rr,Cr,xo);if(f){i&&(_o.fromBufferAttribute(i,l),vo.fromBufferAttribute(i,d),yo.fromBufferAttribute(i,h),f.uv=sr.getInterpolation(xo,Tr,Rr,Cr,_o,vo,yo,new ct)),o&&(_o.fromBufferAttribute(o,l),vo.fromBufferAttribute(o,d),yo.fromBufferAttribute(o,h),f.uv1=sr.getInterpolation(xo,Tr,Rr,Cr,_o,vo,yo,new ct)),c&&(Zh.fromBufferAttribute(c,l),Jh.fromBufferAttribute(c,d),Qh.fromBufferAttribute(c,h),f.normal=sr.getInterpolation(xo,Tr,Rr,Cr,Zh,Jh,Qh,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a:l,b:d,c:h,normal:new H,materialIndex:0};sr.getNormal(Tr,Rr,Cr,m.normal),f.face=m}return f}var As=class r extends nn{constructor(e=1,t=1,n=1,i=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:c};let l=this;i=Math.floor(i),o=Math.floor(o),c=Math.floor(c);let d=[],h=[],f=[],m=[],g=0,x=0;M("z","y","x",-1,-1,n,t,e,c,o,0),M("z","y","x",1,-1,n,t,-e,c,o,1),M("x","z","y",1,1,e,n,t,i,c,2),M("x","z","y",1,-1,e,n,-t,i,c,3),M("x","y","z",1,-1,e,t,n,i,o,4),M("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(d),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(m,2));function M(w,y,v,L,C,P,O,N,U,X,I){let R=P/U,q=O/X,ee=P/2,B=O/2,Z=N/2,oe=U+1,z=X+1,Se=0,te=0,xe=new H;for(let W=0;W<z;W++){let Le=W*q-B;for(let qe=0;qe<oe;qe++){let Ye=qe*R-ee;xe[w]=Ye*L,xe[y]=Le*C,xe[v]=Z,h.push(xe.x,xe.y,xe.z),xe[w]=0,xe[y]=0,xe[v]=N>0?1:-1,f.push(xe.x,xe.y,xe.z),m.push(qe/U),m.push(1-W/X),Se+=1}}for(let W=0;W<X;W++)for(let Le=0;Le<U;Le++){let qe=g+Le+oe*W,Ye=g+Le+oe*(W+1),re=g+(Le+1)+oe*(W+1),ye=g+(Le+1)+oe*W;d.push(qe,Ye,ye),d.push(Ye,re,ye),te+=6}l.addGroup(x,te,I),x+=te,g+=Se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $r(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){let e={};for(let t=0;t<r.length;t++){let n=$r(r[t]);for(let i in n)e[i]=n[i]}return e}function Gy(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var Wy={clone:$r,merge:mn},Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=$y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let c=this.uniforms[i].value;c&&c.isTexture?t.uniforms[i]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[i]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[i]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[i]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[i]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[i]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[i]={type:"m4",value:c.toArray()}:t.uniforms[i]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xo=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new H,ed=new ct,td=new ct,Kt=class extends Xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,i,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i,c=this.view;if(this.view!==null&&this.view.enabled){let d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*i/d,t-=c.offsetY*n/h,i*=c.width/d,n*=c.height/h}let l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pr=-90,Ir=1,Vc=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Kt(Pr,Ir,e,t);i.layers=this.layers,this.add(i);let o=new Kt(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let c=new Kt(Pr,Ir,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Pr,Ir,e,t);l.layers=this.layers,this.add(l);let d=new Kt(Pr,Ir,e,t);d.layers=this.layers,this.add(d);let h=new Kt(Pr,Ir,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,o,c,l,d]=t;for(let h of t)this.remove(h);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,c,l,d,h,f]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,c),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,d),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(m,g,x),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},$o=class extends tn{constructor(e,t,n,i,o,c,l,d,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,n,i,o,c,l,d,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gc=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $o(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new As(5,5,5),o=new ii({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Pi});o.uniforms.tEquirect.value=t;let c=new kt(i,o),l=t.minFilter;return t.minFilter===Qn&&(t.minFilter=_n),new Vc(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,i){let o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,i);e.setRenderTarget(o)}},Sc=new H,qy=new H,Yy=new pt,Vn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sc.subVectors(n,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yy.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Tn,wo=new H,Ts=class{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,o=new Vn,c=new Vn){this.planes=[e,t,n,i,o,c]}set(e,t,n,i,o,c){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(o),l[5].copy(c),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,i=e.elements,o=i[0],c=i[1],l=i[2],d=i[3],h=i[4],f=i[5],m=i[6],g=i[7],x=i[8],M=i[9],w=i[10],y=i[11],v=i[12],L=i[13],C=i[14],P=i[15];if(n[0].setComponents(d-o,g-h,y-x,P-v).normalize(),n[1].setComponents(d+o,g+h,y+x,P+v).normalize(),n[2].setComponents(d+c,g+f,y+M,P+L).normalize(),n[3].setComponents(d-c,g-f,y-M,P-L).normalize(),n[4].setComponents(d-l,g-m,y-w,P-C).normalize(),t===gi)n[5].setComponents(d+l,g+m,y+w,P+C).normalize();else if(t===zo)n[5].setComponents(l,m,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lf(){let r=null,e=!1,t=null,n=null;function i(o,c){t(o,c),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function jy(r){let e=new WeakMap;function t(l,d){let h=l.array,f=l.usage,m=h.byteLength,g=r.createBuffer();r.bindBuffer(d,g),r.bufferData(d,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,d,h){let f=d.array,m=d._updateRange,g=d.updateRanges;if(r.bindBuffer(h,l),m.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let x=0,M=g.length;x<M;x++){let w=g[x];r.bufferSubData(h,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}d.clearUpdateRanges()}m.count!==-1&&(r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count),m.count=-1),d.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let d=e.get(l);d&&(r.deleteBuffer(d.buffer),e.delete(l))}function c(l,d){if(l.isGLBufferAttribute){let f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=e.get(l);if(h===void 0)e.set(l,t(l,d));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,d),h.version=l.version}}return{get:i,remove:o,update:c}}var cr=class r extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let o=e/2,c=t/2,l=Math.floor(n),d=Math.floor(i),h=l+1,f=d+1,m=e/l,g=t/d,x=[],M=[],w=[],y=[];for(let v=0;v<f;v++){let L=v*g-c;for(let C=0;C<h;C++){let P=C*m-o;M.push(P,-L,0),w.push(0,0,1),y.push(C/l),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let L=0;L<l;L++){let C=L+h*v,P=L+h*(v+1),O=L+1+h*(v+1),N=L+1+h*v;x.push(C,P,N),x.push(P,O,N)}this.setIndex(x),this.setAttribute("position",new Gt(M,3)),this.setAttribute("normal",new Gt(w,3)),this.setAttribute("uv",new Gt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ux=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,US=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_M=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Ky,alphahash_pars_fragment:Zy,alphamap_fragment:Jy,alphamap_pars_fragment:Qy,alphatest_fragment:ex,alphatest_pars_fragment:tx,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:rx,batching_vertex:sx,begin_vertex:ox,beginnormal_vertex:ax,bsdfs:cx,iridescence_fragment:lx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:_x,color_vertex:vx,common:yx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:Mx,displacementmap_vertex:wx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ex,colorspace_fragment:Ax,colorspace_pars_fragment:Tx,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Vx,envmap_vertex:Lx,fog_vertex:Dx,fog_pars_vertex:Nx,fog_fragment:Fx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:kx,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:zx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:$x,lights_physical_fragment:qx,lights_physical_pars_fragment:Yx,lights_fragment_begin:jx,lights_fragment_maps:Kx,lights_fragment_end:Zx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:Qx,logdepthbuf_pars_vertex:eS,logdepthbuf_vertex:tS,map_fragment:nS,map_pars_fragment:iS,map_particle_fragment:rS,map_particle_pars_fragment:sS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:aS,morphinstance_vertex:cS,morphcolor_vertex:lS,morphnormal_vertex:uS,morphtarget_pars_vertex:hS,morphtarget_vertex:dS,normal_fragment_begin:fS,normal_fragment_maps:pS,normal_pars_fragment:mS,normal_pars_vertex:gS,normal_vertex:_S,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:SS,iridescence_pars_fragment:MS,opaque_fragment:wS,packing:bS,premultiplied_alpha_fragment:ES,project_vertex:AS,dithering_fragment:TS,dithering_pars_fragment:RS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:IS,shadowmap_pars_vertex:LS,shadowmap_vertex:DS,shadowmask_pars_fragment:NS,skinbase_vertex:FS,skinning_pars_vertex:US,skinning_vertex:OS,skinnormal_vertex:kS,specularmap_fragment:BS,specularmap_pars_fragment:zS,tonemapping_fragment:HS,tonemapping_pars_fragment:VS,transmission_fragment:GS,transmission_pars_fragment:WS,uv_pars_fragment:XS,uv_pars_vertex:$S,uv_vertex:qS,worldpos_vertex:YS,background_vert:jS,background_frag:KS,backgroundCube_vert:ZS,backgroundCube_frag:JS,cube_vert:QS,cube_frag:eM,depth_vert:tM,depth_frag:nM,distanceRGBA_vert:iM,distanceRGBA_frag:rM,equirect_vert:sM,equirect_frag:oM,linedashed_vert:aM,linedashed_frag:cM,meshbasic_vert:lM,meshbasic_frag:uM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:fM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:gM,meshphong_vert:_M,meshphong_frag:vM,meshphysical_vert:yM,meshphysical_frag:xM,meshtoon_vert:SM,meshtoon_frag:MM,points_vert:wM,points_frag:bM,shadow_vert:EM,shadow_frag:AM,sprite_vert:TM,sprite_frag:RM},Ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Jn={basic:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:mn([Ce.points,Ce.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:mn([Ce.common,Ce.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:mn([Ce.sprite,Ce.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:mn([Ce.lights,Ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Jn.physical={uniforms:mn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var bo={r:0,b:0,g:0},er=new ni,CM=new ht;function PM(r,e,t,n,i,o,c){let l=new $e(0),d=o===!0?0:1,h,f,m=null,g=0,x=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function w(L){let C=!1,P=M(L);P===null?v(l,d):P&&P.isColor&&(v(P,1),C=!0);let O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function y(L,C){let P=M(C);P&&(P.isCubeTexture||P.mapping===_a)?(f===void 0&&(f=new kt(new As(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:$r(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),er.copy(C.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(er)),f.material.toneMapped=At.getTransfer(P.colorSpace)!==Ut,(m!==P||g!==P.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,m=P,g=P.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new kt(new cr(2,2),new ii({name:"BackgroundMaterial",uniforms:$r(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=At.getTransfer(P.colorSpace)!==Ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||g!==P.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,m=P,g=P.version,x=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function v(L,C){L.getRGB(bo,cf(r)),n.buffers.color.setClear(bo.r,bo.g,bo.b,C,c)}return{getClearColor:function(){return l},setClearColor:function(L,C=1){l.set(L),d=C,v(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,v(l,d)},render:w,addToRenderList:y}}function IM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null),o=i,c=!1;function l(R,q,ee,B,Z){let oe=!1,z=m(B,ee,q);o!==z&&(o=z,h(o.object)),oe=x(R,B,ee,Z),oe&&M(R,B,ee,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,P(R,q,ee,B),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function f(R){return r.deleteVertexArray(R)}function m(R,q,ee){let B=ee.wireframe===!0,Z=n[R.id];Z===void 0&&(Z={},n[R.id]=Z);let oe=Z[q.id];oe===void 0&&(oe={},Z[q.id]=oe);let z=oe[B];return z===void 0&&(z=g(d()),oe[B]=z),z}function g(R){let q=[],ee=[],B=[];for(let Z=0;Z<t;Z++)q[Z]=0,ee[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:B,object:R,attributes:{},index:null}}function x(R,q,ee,B){let Z=o.attributes,oe=q.attributes,z=0,Se=ee.getAttributes();for(let te in Se)if(Se[te].location>=0){let W=Z[te],Le=oe[te];if(Le===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(Le=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(Le=R.instanceColor)),W===void 0||W.attribute!==Le||Le&&W.data!==Le.data)return!0;z++}return o.attributesNum!==z||o.index!==B}function M(R,q,ee,B){let Z={},oe=q.attributes,z=0,Se=ee.getAttributes();for(let te in Se)if(Se[te].location>=0){let W=oe[te];W===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));let Le={};Le.attribute=W,W&&W.data&&(Le.data=W.data),Z[te]=Le,z++}o.attributes=Z,o.attributesNum=z,o.index=B}function w(){let R=o.newAttributes;for(let q=0,ee=R.length;q<ee;q++)R[q]=0}function y(R){v(R,0)}function v(R,q){let ee=o.newAttributes,B=o.enabledAttributes,Z=o.attributeDivisors;ee[R]=1,B[R]===0&&(r.enableVertexAttribArray(R),B[R]=1),Z[R]!==q&&(r.vertexAttribDivisor(R,q),Z[R]=q)}function L(){let R=o.newAttributes,q=o.enabledAttributes;for(let ee=0,B=q.length;ee<B;ee++)q[ee]!==R[ee]&&(r.disableVertexAttribArray(ee),q[ee]=0)}function C(R,q,ee,B,Z,oe,z){z===!0?r.vertexAttribIPointer(R,q,ee,Z,oe):r.vertexAttribPointer(R,q,ee,B,Z,oe)}function P(R,q,ee,B){w();let Z=B.attributes,oe=ee.getAttributes(),z=q.defaultAttributeValues;for(let Se in oe){let te=oe[Se];if(te.location>=0){let xe=Z[Se];if(xe===void 0&&(Se==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),Se==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor)),xe!==void 0){let W=xe.normalized,Le=xe.itemSize,qe=e.get(xe);if(qe===void 0)continue;let Ye=qe.buffer,re=qe.type,ye=qe.bytesPerElement,Me=re===r.INT||re===r.UNSIGNED_INT||xe.gpuType===qd;if(xe.isInterleavedBufferAttribute){let be=xe.data,Ve=be.stride,lt=xe.offset;if(be.isInstancedInterleavedBuffer){for(let K=0;K<te.locationSize;K++)v(te.location+K,be.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let K=0;K<te.locationSize;K++)y(te.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let K=0;K<te.locationSize;K++)C(te.location+K,Le/te.locationSize,re,W,Ve*ye,(lt+Le/te.locationSize*K)*ye,Me)}else{if(xe.isInstancedBufferAttribute){for(let be=0;be<te.locationSize;be++)v(te.location+be,xe.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let be=0;be<te.locationSize;be++)y(te.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let be=0;be<te.locationSize;be++)C(te.location+be,Le/te.locationSize,re,W,Le*ye,Le/te.locationSize*be*ye,Me)}}else if(z!==void 0){let W=z[Se];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(te.location,W);break;case 3:r.vertexAttrib3fv(te.location,W);break;case 4:r.vertexAttrib4fv(te.location,W);break;default:r.vertexAttrib1fv(te.location,W)}}}}L()}function O(){X();for(let R in n){let q=n[R];for(let ee in q){let B=q[ee];for(let Z in B)f(B[Z].object),delete B[Z];delete q[ee]}delete n[R]}}function N(R){if(n[R.id]===void 0)return;let q=n[R.id];for(let ee in q){let B=q[ee];for(let Z in B)f(B[Z].object),delete B[Z];delete q[ee]}delete n[R.id]}function U(R){for(let q in n){let ee=n[q];if(ee[R.id]===void 0)continue;let B=ee[R.id];for(let Z in B)f(B[Z].object),delete B[Z];delete ee[R.id]}}function X(){I(),c=!0,o!==i&&(o=i,h(o.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:X,resetDefaultState:I,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function LM(r,e,t){let n;function i(h){n=h}function o(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function c(h,f,m){m!==0&&(r.drawArraysInstanced(n,h,f,m),t.update(f,n,m))}function l(h,f,m){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<m;x++)this.render(h[x],f[x]);else{g.multiDrawArraysWEBGL(n,h,0,f,0,m);let x=0;for(let M=0;M<m;M++)x+=f[M];t.update(x,n,1)}}function d(h,f,m,g){if(m===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)c(h[M],f[M],g[M]);else{x.multiDrawArraysInstancedWEBGL(n,h,0,f,0,g,0,m);let M=0;for(let w=0;w<m;w++)M+=f[w];for(let w=0;w<g.length;w++)t.update(M,n,g[w])}}this.setMode=i,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function DM(r,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function c(N){return!(N!==Xn&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){let U=N===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Li&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ei&&!U)}function d(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",f=d(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let m=t.logarithmicDepthBuffer===!0,g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:v,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:P,maxSamples:O}}function NM(r){let e=this,t=null,n=0,i=!1,o=!1,c=new Vn,l=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){let x=m.length!==0||g||n!==0||i;return i=g,n=m.length,x},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=f(m,g,0)},this.setState=function(m,g,x){let M=m.clippingPlanes,w=m.clipIntersection,y=m.clipShadows,v=r.get(m);if(!i||M===null||M.length===0||o&&!y)o?f(null):h();else{let L=o?0:n,C=L*4,P=v.clippingState||null;d.value=P,P=f(M,g,C,x);for(let O=0;O!==C;++O)P[O]=t[O];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,g,x,M){let w=m!==null?m.length:0,y=null;if(w!==0){if(y=d.value,M!==!0||y===null){let v=x+w*4,L=g.matrixWorldInverse;l.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let C=0,P=x;C!==w;++C,P+=4)c.copy(m[C]).applyMatrix4(L,l),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function FM(r){let e=new WeakMap;function t(c,l){return l===Uc?c.mapping=Hr:l===Oc&&(c.mapping=Vr),c}function n(c){if(c&&c.isTexture){let l=c.mapping;if(l===Uc||l===Oc)if(e.has(c)){let d=e.get(c).texture;return t(d,c.mapping)}else{let d=c.image;if(d&&d.height>0){let h=new Gc(d.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",i),t(h.texture,c.mapping)}else return null}}return c}function i(c){let l=c.target;l.removeEventListener("dispose",i);let d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}var qr=class extends Xo{constructor(e=-1,t=1,n=1,i=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=n-e,c=n+e,l=i+t,d=i-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,l-=f*this.view.offsetY,d=l-f*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fr=4,nd=[.125,.215,.35,.446,.526,.582],rr=20,Mc=new qr,id=new $e,wc=null,bc=0,Ec=0,Ac=!1,nr=(1+Math.sqrt(5))/2,Lr=1/nr,rd=[new H(-nr,Lr,0),new H(nr,Lr,0),new H(-Lr,0,nr),new H(Lr,0,nr),new H(0,nr,-Lr),new H(0,nr,Lr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,bc,Ec),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:va,format:Xn,colorSpace:rn,depthBuffer:!1},i=sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(o)),this._blurMaterial=OM(o,e,t)}return i}_compileMaterial(e){let t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,i){let l=new Kt(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,g=f.toneMapping;f.getClearColor(id),f.toneMapping=Ii,f.autoClear=!1;let x=new Mn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),M=new kt(new As,x),w=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,w=!0):(x.color.copy(id),w=!0);for(let v=0;v<6;v++){let L=v%3;L===0?(l.up.set(0,d[v],0),l.lookAt(h[v],0,0)):L===1?(l.up.set(0,0,d[v]),l.lookAt(0,h[v],0)):(l.up.set(0,d[v],0),l.lookAt(0,0,h[v]));let C=this._cubeSize;Eo(i,L*C,v>2?C:0,C,C),f.setRenderTarget(i),w&&f.render(M,l),f.render(e,l)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=g,f.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Hr||e.mapping===Vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let o=i?this._cubemapMaterial:this._equirectMaterial,c=new kt(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;let d=this._cubeSize;Eo(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,Mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let o=1;o<i;o++){let c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=rd[(i-o-1)%rd.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,i,o){let c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,i,"latitudinal",o),this._halfBlur(c,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,c,l){let d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,m=new kt(this._lodPlanes[i],h),g=h.uniforms,x=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*rr-1),w=o/M,y=isFinite(o)?1+Math.floor(f*w):rr;y>rr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rr}`);let v=[],L=0;for(let U=0;U<rr;++U){let X=U/w,I=Math.exp(-X*X/2);v.push(I),U===0?L+=I:U<y&&(L+=2*I)}for(let U=0;U<v.length;U++)v[U]=v[U]/L;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=c==="latitudinal",l&&(g.poleAxis.value=l);let{_lodMax:C}=this;g.dTheta.value=M,g.mipInt.value=C-n;let P=this._sizeLods[i],O=3*P*(i>C-Fr?i-C+Fr:0),N=4*(this._cubeSize-P);Eo(t,O,N,3*P,2*P),d.setRenderTarget(t),d.render(m,Mc)}};function UM(r){let e=[],t=[],n=[],i=r,o=r-Fr+1+nd.length;for(let c=0;c<o;c++){let l=Math.pow(2,i);t.push(l);let d=1/l;c>r-Fr?d=nd[c-r+Fr-1]:c===0&&(d=0),n.push(d);let h=1/(l-2),f=-h,m=1+h,g=[f,f,m,f,m,m,f,f,m,m,f,m],x=6,M=6,w=3,y=2,v=1,L=new Float32Array(w*M*x),C=new Float32Array(y*M*x),P=new Float32Array(v*M*x);for(let N=0;N<x;N++){let U=N%3*2/3-1,X=N>2?0:-1,I=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];L.set(I,w*M*N),C.set(g,y*M*N);let R=[N,N,N,N,N,N];P.set(R,v*M*N)}let O=new nn;O.setAttribute("position",new It(L,w)),O.setAttribute("uv",new It(C,y)),O.setAttribute("faceIndex",new It(P,v)),e.push(O),i>Fr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sd(r,e,t){let n=new vi(r,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function OM(r,e,t){let n=new Float32Array(rr),i=new H(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function od(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ad(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kM(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){let d=l.mapping,h=d===Uc||d===Oc,f=d===Hr||d===Vr;if(h||f){let m=e.get(l),g=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new qo(r)),m=h?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{let x=l.image;return h&&x&&x.height>0||f&&x&&i(x)?(t===null&&(t=new qo(r)),m=h?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",o),m.texture):null}}}return l}function i(l){let d=0,h=6;for(let f=0;f<h;f++)l[f]!==void 0&&d++;return d===h}function o(l){let d=l.target;d.removeEventListener("dispose",o);let h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function BM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zM(r,e,t,n){let i={},o=new WeakMap;function c(m){let g=m.target;g.index!==null&&e.remove(g.index);for(let M in g.attributes)e.remove(g.attributes[M]);for(let M in g.morphAttributes){let w=g.morphAttributes[M];for(let y=0,v=w.length;y<v;y++)e.remove(w[y])}g.removeEventListener("dispose",c),delete i[g.id];let x=o.get(g);x&&(e.remove(x),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(m,g){return i[g.id]===!0||(g.addEventListener("dispose",c),i[g.id]=!0,t.memory.geometries++),g}function d(m){let g=m.attributes;for(let M in g)e.update(g[M],r.ARRAY_BUFFER);let x=m.morphAttributes;for(let M in x){let w=x[M];for(let y=0,v=w.length;y<v;y++)e.update(w[y],r.ARRAY_BUFFER)}}function h(m){let g=[],x=m.index,M=m.attributes.position,w=0;if(x!==null){let L=x.array;w=x.version;for(let C=0,P=L.length;C<P;C+=3){let O=L[C+0],N=L[C+1],U=L[C+2];g.push(O,N,N,U,U,O)}}else if(M!==void 0){let L=M.array;w=M.version;for(let C=0,P=L.length/3-1;C<P;C+=3){let O=C+0,N=C+1,U=C+2;g.push(O,N,N,U,U,O)}}else return;let y=new(sf(g)?Wo:Go)(g,1);y.version=w;let v=o.get(m);v&&e.remove(v),o.set(m,y)}function f(m){let g=o.get(m);if(g){let x=m.index;x!==null&&g.version<x.version&&h(m)}else h(m);return o.get(m)}return{get:l,update:d,getWireframeAttribute:f}}function HM(r,e,t){let n;function i(g){n=g}let o,c;function l(g){o=g.type,c=g.bytesPerElement}function d(g,x){r.drawElements(n,x,o,g*c),t.update(x,n,1)}function h(g,x,M){M!==0&&(r.drawElementsInstanced(n,x,o,g*c,M),t.update(x,n,M))}function f(g,x,M){if(M===0)return;let w=e.get("WEBGL_multi_draw");if(w===null)for(let y=0;y<M;y++)this.render(g[y]/c,x[y]);else{w.multiDrawElementsWEBGL(n,x,0,o,g,0,M);let y=0;for(let v=0;v<M;v++)y+=x[v];t.update(y,n,1)}}function m(g,x,M,w){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)h(g[v]/c,x[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(n,x,0,o,g,0,w,0,M);let v=0;for(let L=0;L<M;L++)v+=x[L];for(let L=0;L<w.length;L++)t.update(v,n,w[L])}}this.setMode=i,this.setIndex=l,this.render=d,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function VM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=l*(o/3);break;case r.LINES:t.lines+=l*(o/2);break;case r.LINE_STRIP:t.lines+=l*(o-1);break;case r.LINE_LOOP:t.lines+=l*o;break;case r.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function GM(r,e,t){let n=new WeakMap,i=new Dt;function o(c,l,d){let h=c.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0,g=n.get(l);if(g===void 0||g.count!==m){let I=function(){U.dispose(),n.delete(l),l.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();let x=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],L=l.morphAttributes.color||[],C=0;x===!0&&(C=1),M===!0&&(C=2),w===!0&&(C=3);let P=l.attributes.position.count*C,O=1;P>e.maxTextureSize&&(O=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let N=new Float32Array(P*O*4*m),U=new Vo(N,P,O,m);U.type=ei,U.needsUpdate=!0;let X=C*4;for(let R=0;R<m;R++){let q=y[R],ee=v[R],B=L[R],Z=P*O*4*R;for(let oe=0;oe<q.count;oe++){let z=oe*X;x===!0&&(i.fromBufferAttribute(q,oe),N[Z+z+0]=i.x,N[Z+z+1]=i.y,N[Z+z+2]=i.z,N[Z+z+3]=0),M===!0&&(i.fromBufferAttribute(ee,oe),N[Z+z+4]=i.x,N[Z+z+5]=i.y,N[Z+z+6]=i.z,N[Z+z+7]=0),w===!0&&(i.fromBufferAttribute(B,oe),N[Z+z+8]=i.x,N[Z+z+9]=i.y,N[Z+z+10]=i.z,N[Z+z+11]=B.itemSize===4?i.w:1)}}g={count:m,texture:U,size:new ct(P,O)},n.set(l,g),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let x=0;for(let w=0;w<h.length;w++)x+=h[w];let M=l.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:o}}function WM(r,e,t,n){let i=new WeakMap;function o(d){let h=n.render.frame,f=d.geometry,m=e.get(d,f);if(i.get(m)!==h&&(e.update(m),i.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),i.get(d)!==h&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),i.set(d,h))),d.isSkinnedMesh){let g=d.skeleton;i.get(g)!==h&&(g.update(),i.set(g,h))}return m}function c(){i=new WeakMap}function l(d){let h=d.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}var Yo=class extends tn{constructor(e,t,n,i,o,c,l,d,h,f){if(f=f!==void 0?f:Or,f!==Or&&f!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Or&&(n=Gr),n===void 0&&f===ws&&(n=Fs),super(null,i,o,c,l,d,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:dn,this.minFilter=d!==void 0?d:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uf=new tn,hf=new Yo(1,1);hf.compareFunction=nf;var df=new Vo,ff=new Hc,pf=new $o,cd=[],ld=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Zr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,o=cd[i];if(o===void 0&&(o=new Float32Array(i),cd[i]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,r[c].toArray(o,l)}return o}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sa(r,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function XM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $M(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function YM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function jM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;dd.set(n),r.uniformMatrix2fv(this.addr,!1,dd),Jt(t,n)}}function KM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;hd.set(n),r.uniformMatrix3fv(this.addr,!1,hd),Jt(t,n)}}function ZM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;ud.set(n),r.uniformMatrix4fv(this.addr,!1,ud),Jt(t,n)}}function JM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function QM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function ew(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function tw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function nw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function iw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function rw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function sw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function ow(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let o=this.type===r.SAMPLER_2D_SHADOW?hf:uf;t.setTexture2D(e||o,i)}function aw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ff,i)}function cw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pf,i)}function lw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||df,i)}function uw(r){switch(r){case 5126:return XM;case 35664:return $M;case 35665:return qM;case 35666:return YM;case 35674:return jM;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return lw}}function hw(r,e){r.uniform1fv(this.addr,e)}function dw(r,e){let t=Zr(e,this.size,2);r.uniform2fv(this.addr,t)}function fw(r,e){let t=Zr(e,this.size,3);r.uniform3fv(this.addr,t)}function pw(r,e){let t=Zr(e,this.size,4);r.uniform4fv(this.addr,t)}function mw(r,e){let t=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gw(r,e){let t=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _w(r,e){let t=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vw(r,e){r.uniform1iv(this.addr,e)}function yw(r,e){r.uniform2iv(this.addr,e)}function xw(r,e){r.uniform3iv(this.addr,e)}function Sw(r,e){r.uniform4iv(this.addr,e)}function Mw(r,e){r.uniform1uiv(this.addr,e)}function ww(r,e){r.uniform2uiv(this.addr,e)}function bw(r,e){r.uniform3uiv(this.addr,e)}function Ew(r,e){r.uniform4uiv(this.addr,e)}function Aw(r,e,t){let n=this.cache,i=e.length,o=Sa(t,i);Zt(n,o)||(r.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==i;++c)t.setTexture2D(e[c]||uf,o[c])}function Tw(r,e,t){let n=this.cache,i=e.length,o=Sa(t,i);Zt(n,o)||(r.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==i;++c)t.setTexture3D(e[c]||ff,o[c])}function Rw(r,e,t){let n=this.cache,i=e.length,o=Sa(t,i);Zt(n,o)||(r.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==i;++c)t.setTextureCube(e[c]||pf,o[c])}function Cw(r,e,t){let n=this.cache,i=e.length,o=Sa(t,i);Zt(n,o)||(r.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==i;++c)t.setTexture2DArray(e[c]||df,o[c])}function Pw(r){switch(r){case 5126:return hw;case 35664:return dw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return vw;case 35667:case 35671:return yw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return ww;case 36295:return bw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Cw}}var Wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uw(t.type)}},Xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pw(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let o=0,c=i.length;o!==c;++o){let l=i[o];l.setValue(e,t[l.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function fd(r,e){r.seq.push(e),r.map[e.id]=e}function Iw(r,e,t){let n=r.name,i=n.length;for(Tc.lastIndex=0;;){let o=Tc.exec(n),c=Tc.lastIndex,l=o[1],d=o[2]==="]",h=o[3];if(d&&(l=l|0),h===void 0||h==="["&&c+2===i){fd(t,h===void 0?new Wc(l,r,e):new Xc(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new $c(l),fd(t,m)),t=m}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let o=e.getActiveUniform(t,i),c=e.getUniformLocation(t,o.name);Iw(o,c,this)}}setValue(e,t,n,i){let o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,c=t.length;o!==c;++o){let l=t[o],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,o=e.length;i!==o;++i){let c=e[i];c.id in t&&n.push(c)}return n}};function pd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Lw=37297,Dw=0;function Nw(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=i;c<o;c++){let l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Fw(r){let e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(r),n;switch(e===t?n="":e===Bo&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Bo&&(n="LinearSRGBToLinearDisplayP3"),r){case rn:case xa:return[n,"LinearTransferOETF"];case un:case _l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function md(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let o=/ERROR: 0:(\d+)/.exec(i);if(o){let c=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+Nw(r.getShaderSource(e),c)}else return i}function Uw(r,e){let t=Fw(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ow(r,e){let t;switch(e){case zv:t="Linear";break;case Hv:t="Reinhard";break;case Vv:t="OptimizedCineon";break;case ml:t="ACESFilmic";break;case Wv:t="AgX";break;case Xv:t="Neutral";break;case Gv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Bw(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zw(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let o=r.getActiveAttrib(e,i),c=o.name,l=1;o.type===r.FLOAT_MAT2&&(l=2),o.type===r.FLOAT_MAT3&&(l=3),o.type===r.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:r.getAttribLocation(e,c),locationSize:l}}return t}function vs(r){return r!==""}function gd(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(r){return r.replace(Hw,Gw)}var Vw=new Map;function Gw(r,e){let t=ft[e];if(t===void 0){let n=Vw.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qc(t)}var Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(r){return r.replace(Ww,Xw)}function Xw(r,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function yd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $w(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function qw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Vr:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case kv:e="ENVMAP_BLENDING_MIX";break;case Bv:e="ENVMAP_BLENDING_ADD";break}return e}function Kw(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zw(r,e,t,n){let i=r.getContext(),o=t.defines,c=t.vertexShader,l=t.fragmentShader,d=$w(t),h=qw(t),f=Yw(t),m=jw(t),g=Kw(t),x=kw(t),M=Bw(o),w=i.createProgram(),y,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(vs).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(vs).join(`
`),v.length>0&&(v+=`
`)):(y=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),v=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Ow("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Uw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),c=qc(c),c=gd(c,t),c=_d(c,t),l=qc(l),l=gd(l,t),l=_d(l,t),c=vd(c),l=vd(l),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let C=L+y+c,P=L+v+l,O=pd(i,i.VERTEX_SHADER,C),N=pd(i,i.FRAGMENT_SHADER,P);i.attachShader(w,O),i.attachShader(w,N),t.index0AttributeName!==void 0?i.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function U(q){if(r.debug.checkShaderErrors){let ee=i.getProgramInfoLog(w).trim(),B=i.getShaderInfoLog(O).trim(),Z=i.getShaderInfoLog(N).trim(),oe=!0,z=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,w,O,N);else{let Se=md(i,O,"vertex"),te=md(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+ee+`
`+Se+`
`+te)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(B===""||Z==="")&&(z=!1);z&&(q.diagnostics={runnable:oe,programLog:ee,vertexShader:{log:B,prefix:y},fragmentShader:{log:Z,prefix:v}})}i.deleteShader(O),i.deleteShader(N),X=new zr(i,w),I=zw(i,w)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(w,Lw)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=N,this}var Jw=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}};function Qw(r,e,t,n,i,o,c){let l=new Es,d=new Yc,h=new Set,f=[],m=i.logarithmicDepthBuffer,g=i.vertexTextures,x=i.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(I){return h.add(I),I===0?"uv":`uv${I}`}function y(I,R,q,ee,B){let Z=ee.fog,oe=B.geometry,z=I.isMeshStandardMaterial?ee.environment:null,Se=(I.isMeshStandardMaterial?t:e).get(I.envMap||z),te=Se&&Se.mapping===_a?Se.image.height:null,xe=M[I.type];I.precision!==null&&(x=i.getMaxPrecision(I.precision),x!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",x,"instead."));let W=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Le=W!==void 0?W.length:0,qe=0;oe.morphAttributes.position!==void 0&&(qe=1),oe.morphAttributes.normal!==void 0&&(qe=2),oe.morphAttributes.color!==void 0&&(qe=3);let Ye,re,ye,Me;if(xe){let de=Jn[xe];Ye=de.vertexShader,re=de.fragmentShader}else Ye=I.vertexShader,re=I.fragmentShader,d.update(I),ye=d.getVertexShaderID(I),Me=d.getFragmentShaderID(I);let be=r.getRenderTarget(),Ve=B.isInstancedMesh===!0,lt=B.isBatchedMesh===!0,K=!!I.map,wt=!!I.matcap,Be=!!Se,Qe=!!I.aoMap,We=!!I.lightMap,it=!!I.bumpMap,Ne=!!I.normalMap,je=!!I.displacementMap,yt=!!I.emissiveMap,k=!!I.metalnessMap,A=!!I.roughnessMap,$=I.anisotropy>0,le=I.clearcoat>0,me=I.dispersion>0,he=I.iridescence>0,ze=I.sheen>0,Ee=I.transmission>0,Te=$&&!!I.anisotropyMap,tt=le&&!!I.clearcoatMap,we=le&&!!I.clearcoatNormalMap,Oe=le&&!!I.clearcoatRoughnessMap,rt=he&&!!I.iridescenceMap,He=he&&!!I.iridescenceThicknessMap,Re=ze&&!!I.sheenColorMap,Ke=ze&&!!I.sheenRoughnessMap,at=!!I.specularMap,Rt=!!I.specularColorMap,Fe=!!I.specularIntensityMap,G=Ee&&!!I.transmissionMap,ue=Ee&&!!I.thicknessMap,ce=!!I.gradientMap,Ae=!!I.alphaMap,Pe=I.alphaTest>0,gt=!!I.alphaHash,Tt=!!I.extensions,Lt=Ii;I.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Lt=r.toneMapping);let Wt={shaderID:xe,shaderType:I.type,shaderName:I.name,vertexShader:Ye,fragmentShader:re,defines:I.defines,customVertexShaderID:ye,customFragmentShaderID:Me,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:x,batching:lt,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:rn,alphaToCoverage:!!I.alphaToCoverage,map:K,matcap:wt,envMap:Be,envMapMode:Be&&Se.mapping,envMapCubeUVHeight:te,aoMap:Qe,lightMap:We,bumpMap:it,normalMap:Ne,displacementMap:g&&je,emissiveMap:yt,normalMapObjectSpace:Ne&&I.normalMapType===sy,normalMapTangentSpace:Ne&&I.normalMapType===tf,metalnessMap:k,roughnessMap:A,anisotropy:$,anisotropyMap:Te,clearcoat:le,clearcoatMap:tt,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:me,iridescence:he,iridescenceMap:rt,iridescenceThicknessMap:He,sheen:ze,sheenColorMap:Re,sheenRoughnessMap:Ke,specularMap:at,specularColorMap:Rt,specularIntensityMap:Fe,transmission:Ee,transmissionMap:G,thicknessMap:ue,gradientMap:ce,opaque:I.transparent===!1&&I.blending===Ur&&I.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Pe,alphaHash:gt,combine:I.combine,mapUv:K&&w(I.map.channel),aoMapUv:Qe&&w(I.aoMap.channel),lightMapUv:We&&w(I.lightMap.channel),bumpMapUv:it&&w(I.bumpMap.channel),normalMapUv:Ne&&w(I.normalMap.channel),displacementMapUv:je&&w(I.displacementMap.channel),emissiveMapUv:yt&&w(I.emissiveMap.channel),metalnessMapUv:k&&w(I.metalnessMap.channel),roughnessMapUv:A&&w(I.roughnessMap.channel),anisotropyMapUv:Te&&w(I.anisotropyMap.channel),clearcoatMapUv:tt&&w(I.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&w(I.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&w(I.iridescenceMap.channel),iridescenceThicknessMapUv:He&&w(I.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&w(I.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&w(I.sheenRoughnessMap.channel),specularMapUv:at&&w(I.specularMap.channel),specularColorMapUv:Rt&&w(I.specularColorMap.channel),specularIntensityMapUv:Fe&&w(I.specularIntensityMap.channel),transmissionMapUv:G&&w(I.transmissionMap.channel),thicknessMapUv:ue&&w(I.thicknessMap.channel),alphaMapUv:Ae&&w(I.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Ne||$),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!oe.attributes.uv&&(K||Ae),fog:!!Z,useFog:I.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:B.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:qe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Lt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:K&&I.map.isVideoTexture===!0&&At.getTransfer(I.map.colorSpace)===Ut,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Gn,flipSided:I.side===vn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Tt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Tt&&I.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Wt.vertexUv1s=h.has(1),Wt.vertexUv2s=h.has(2),Wt.vertexUv3s=h.has(3),h.clear(),Wt}function v(I){let R=[];if(I.shaderID?R.push(I.shaderID):(R.push(I.customVertexShaderID),R.push(I.customFragmentShaderID)),I.defines!==void 0)for(let q in I.defines)R.push(q),R.push(I.defines[q]);return I.isRawShaderMaterial===!1&&(L(R,I),C(R,I),R.push(r.outputColorSpace)),R.push(I.customProgramCacheKey),R.join()}function L(I,R){I.push(R.precision),I.push(R.outputColorSpace),I.push(R.envMapMode),I.push(R.envMapCubeUVHeight),I.push(R.mapUv),I.push(R.alphaMapUv),I.push(R.lightMapUv),I.push(R.aoMapUv),I.push(R.bumpMapUv),I.push(R.normalMapUv),I.push(R.displacementMapUv),I.push(R.emissiveMapUv),I.push(R.metalnessMapUv),I.push(R.roughnessMapUv),I.push(R.anisotropyMapUv),I.push(R.clearcoatMapUv),I.push(R.clearcoatNormalMapUv),I.push(R.clearcoatRoughnessMapUv),I.push(R.iridescenceMapUv),I.push(R.iridescenceThicknessMapUv),I.push(R.sheenColorMapUv),I.push(R.sheenRoughnessMapUv),I.push(R.specularMapUv),I.push(R.specularColorMapUv),I.push(R.specularIntensityMapUv),I.push(R.transmissionMapUv),I.push(R.thicknessMapUv),I.push(R.combine),I.push(R.fogExp2),I.push(R.sizeAttenuation),I.push(R.morphTargetsCount),I.push(R.morphAttributeCount),I.push(R.numDirLights),I.push(R.numPointLights),I.push(R.numSpotLights),I.push(R.numSpotLightMaps),I.push(R.numHemiLights),I.push(R.numRectAreaLights),I.push(R.numDirLightShadows),I.push(R.numPointLightShadows),I.push(R.numSpotLightShadows),I.push(R.numSpotLightShadowsWithMaps),I.push(R.numLightProbes),I.push(R.shadowMapType),I.push(R.toneMapping),I.push(R.numClippingPlanes),I.push(R.numClipIntersection),I.push(R.depthPacking)}function C(I,R){l.disableAll(),R.supportsVertexTextures&&l.enable(0),R.instancing&&l.enable(1),R.instancingColor&&l.enable(2),R.instancingMorph&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),R.dispersion&&l.enable(20),I.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.skinning&&l.enable(4),R.morphTargets&&l.enable(5),R.morphNormals&&l.enable(6),R.morphColors&&l.enable(7),R.premultipliedAlpha&&l.enable(8),R.shadowMapEnabled&&l.enable(9),R.useLegacyLights&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.alphaToCoverage&&l.enable(20),I.push(l.mask)}function P(I){let R=M[I.type],q;if(R){let ee=Jn[R];q=Wy.clone(ee.uniforms)}else q=I.uniforms;return q}function O(I,R){let q;for(let ee=0,B=f.length;ee<B;ee++){let Z=f[ee];if(Z.cacheKey===R){q=Z,++q.usedTimes;break}}return q===void 0&&(q=new Zw(r,R,I,o),f.push(q)),q}function N(I){if(--I.usedTimes===0){let R=f.indexOf(I);f[R]=f[f.length-1],f.pop(),I.destroy()}}function U(I){d.remove(I)}function X(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:O,releaseProgram:N,releaseShaderCache:U,programs:f,dispose:X}}function eb(){let r=new WeakMap;function e(o){let c=r.get(o);return c===void 0&&(c={},r.set(o,c)),c}function t(o){r.delete(o)}function n(o,c,l){r.get(o)[c]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sd(){let r=[],e=0,t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function c(m,g,x,M,w,y){let v=r[e];return v===void 0?(v={id:m.id,object:m,geometry:g,material:x,groupOrder:M,renderOrder:m.renderOrder,z:w,group:y},r[e]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=x,v.groupOrder=M,v.renderOrder=m.renderOrder,v.z=w,v.group=y),e++,v}function l(m,g,x,M,w,y){let v=c(m,g,x,M,w,y);x.transmission>0?n.push(v):x.transparent===!0?i.push(v):t.push(v)}function d(m,g,x,M,w,y){let v=c(m,g,x,M,w,y);x.transmission>0?n.unshift(v):x.transparent===!0?i.unshift(v):t.unshift(v)}function h(m,g){t.length>1&&t.sort(m||tb),n.length>1&&n.sort(g||xd),i.length>1&&i.sort(g||xd)}function f(){for(let m=e,g=r.length;m<g;m++){let x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:l,unshift:d,finish:f,sort:h}}function nb(){let r=new WeakMap;function e(n,i){let o=r.get(n),c;return o===void 0?(c=new Sd,r.set(n,[c])):i>=o.length?(c=new Sd,o.push(c)):c=o[i],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function ib(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function rb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var sb=0;function ob(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ab(r){let e=new ib,t=rb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new H);let i=new H,o=new ht,c=new ht;function l(h,f){let m=0,g=0,x=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let M=0,w=0,y=0,v=0,L=0,C=0,P=0,O=0,N=0,U=0,X=0;h.sort(ob);let I=f===!0?Math.PI:1;for(let q=0,ee=h.length;q<ee;q++){let B=h[q],Z=B.color,oe=B.intensity,z=B.distance,Se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=Z.r*oe*I,g+=Z.g*oe*I,x+=Z.b*oe*I;else if(B.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(B.sh.coefficients[te],oe);X++}else if(B.isDirectionalLight){let te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*I),B.castShadow){let xe=B.shadow,W=t.get(B);W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize=xe.mapSize,n.directionalShadow[M]=W,n.directionalShadowMap[M]=Se,n.directionalShadowMatrix[M]=B.shadow.matrix,C++}n.directional[M]=te,M++}else if(B.isSpotLight){let te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(Z).multiplyScalar(oe*I),te.distance=z,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,n.spot[y]=te;let xe=B.shadow;if(B.map&&(n.spotLightMap[N]=B.map,N++,xe.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[y]=xe.matrix,B.castShadow){let W=t.get(B);W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize=xe.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=Se,O++}y++}else if(B.isRectAreaLight){let te=e.get(B);te.color.copy(Z).multiplyScalar(oe),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),n.rectArea[v]=te,v++}else if(B.isPointLight){let te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*I),te.distance=B.distance,te.decay=B.decay,B.castShadow){let xe=B.shadow,W=t.get(B);W.shadowBias=xe.bias,W.shadowNormalBias=xe.normalBias,W.shadowRadius=xe.radius,W.shadowMapSize=xe.mapSize,W.shadowCameraNear=xe.camera.near,W.shadowCameraFar=xe.camera.far,n.pointShadow[w]=W,n.pointShadowMap[w]=Se,n.pointShadowMatrix[w]=B.shadow.matrix,P++}n.point[w]=te,w++}else if(B.isHemisphereLight){let te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(oe*I),te.groundColor.copy(B.groundColor).multiplyScalar(oe*I),n.hemi[L]=te,L++}}v>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=x;let R=n.hash;(R.directionalLength!==M||R.pointLength!==w||R.spotLength!==y||R.rectAreaLength!==v||R.hemiLength!==L||R.numDirectionalShadows!==C||R.numPointShadows!==P||R.numSpotShadows!==O||R.numSpotMaps!==N||R.numLightProbes!==X)&&(n.directional.length=M,n.spot.length=y,n.rectArea.length=v,n.point.length=w,n.hemi.length=L,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=O,n.spotShadowMap.length=O,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=O+N-U,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=X,R.directionalLength=M,R.pointLength=w,R.spotLength=y,R.rectAreaLength=v,R.hemiLength=L,R.numDirectionalShadows=C,R.numPointShadows=P,R.numSpotShadows=O,R.numSpotMaps=N,R.numLightProbes=X,n.version=sb++)}function d(h,f){let m=0,g=0,x=0,M=0,w=0,y=f.matrixWorldInverse;for(let v=0,L=h.length;v<L;v++){let C=h[v];if(C.isDirectionalLight){let P=n.directional[m];P.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(y),m++}else if(C.isSpotLight){let P=n.spot[x];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(y),x++}else if(C.isRectAreaLight){let P=n.rectArea[M];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(y),c.identity(),o.copy(C.matrixWorld),o.premultiply(y),c.extractRotation(o),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){let P=n.point[g];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(y),g++}else if(C.isHemisphereLight){let P=n.hemi[w];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:l,setupView:d,state:n}}function Md(r){let e=new ab(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function o(f){t.push(f)}function c(f){n.push(f)}function l(f){e.setup(t,f)}function d(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:c}}function cb(r){let e=new WeakMap;function t(i,o=0){let c=e.get(i),l;return c===void 0?(l=new Md(r),e.set(i,[l])):o>=c.length?(l=new Md(r),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kc=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hb(r,e,t){let n=new Ts,i=new ct,o=new ct,c=new Dt,l=new Kc({depthPacking:ry}),d=new Zc,h={},f=t.maxTextureSize,m={[ti]:vn,[vn]:ti,[Gn]:Gn},g=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:lb,fragmentShader:ub}),x=g.clone();x.defines.HORIZONTAL_PASS=1;let M=new nn;M.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new kt(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let v=this.type;this.render=function(N,U,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;let I=r.getRenderTarget(),R=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),ee=r.state;ee.setBlending(Pi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);let B=v!==pi&&this.type===pi,Z=v===pi&&this.type!==pi;for(let oe=0,z=N.length;oe<z;oe++){let Se=N[oe],te=Se.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);let xe=te.getFrameExtents();if(i.multiply(xe),o.copy(te.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/xe.x),i.x=o.x*xe.x,te.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/xe.y),i.y=o.y*xe.y,te.mapSize.y=o.y)),te.map===null||B===!0||Z===!0){let Le=this.type!==pi?{minFilter:dn,magFilter:dn}:{};te.map!==null&&te.map.dispose(),te.map=new vi(i.x,i.y,Le),te.map.texture.name=Se.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();let W=te.getViewportCount();for(let Le=0;Le<W;Le++){let qe=te.getViewport(Le);c.set(o.x*qe.x,o.y*qe.y,o.x*qe.z,o.y*qe.w),ee.viewport(c),te.updateMatrices(Se,Le),n=te.getFrustum(),P(U,X,te.camera,Se,this.type)}te.isPointLightShadow!==!0&&this.type===pi&&L(te,X),te.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(I,R,q)};function L(N,U){let X=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new vi(i.x,i.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(U,null,X,g,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(U,null,X,x,w,null)}function C(N,U,X,I){let R=null,q=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(q!==void 0)R=q;else if(R=X.isPointLight===!0?d:l,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let ee=R.uuid,B=U.uuid,Z=h[ee];Z===void 0&&(Z={},h[ee]=Z);let oe=Z[B];oe===void 0&&(oe=R.clone(),Z[B]=oe,U.addEventListener("dispose",O)),R=oe}if(R.visible=U.visible,R.wireframe=U.wireframe,I===pi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:m[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ee=r.properties.get(R);ee.light=X}return R}function P(N,U,X,I,R){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===pi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);let B=e.update(N),Z=N.material;if(Array.isArray(Z)){let oe=B.groups;for(let z=0,Se=oe.length;z<Se;z++){let te=oe[z],xe=Z[te.materialIndex];if(xe&&xe.visible){let W=C(N,xe,I,R);N.onBeforeShadow(r,N,U,X,B,W,te),r.renderBufferDirect(X,null,B,W,N,te),N.onAfterShadow(r,N,U,X,B,W,te)}}}else if(Z.visible){let oe=C(N,Z,I,R);N.onBeforeShadow(r,N,U,X,B,oe,null),r.renderBufferDirect(X,null,B,oe,N,null),N.onAfterShadow(r,N,U,X,B,oe,null)}}let ee=N.children;for(let B=0,Z=ee.length;B<Z;B++)P(ee[B],U,X,I,R)}function O(N){N.target.removeEventListener("dispose",O);for(let X in h){let I=h[X],R=N.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function db(r){function e(){let G=!1,ue=new Dt,ce=null,Ae=new Dt(0,0,0,0);return{setMask:function(Pe){ce!==Pe&&!G&&(r.colorMask(Pe,Pe,Pe,Pe),ce=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,gt,Tt,Lt,Wt){Wt===!0&&(Pe*=Lt,gt*=Lt,Tt*=Lt),ue.set(Pe,gt,Tt,Lt),Ae.equals(ue)===!1&&(r.clearColor(Pe,gt,Tt,Lt),Ae.copy(ue))},reset:function(){G=!1,ce=null,Ae.set(-1,0,0,0)}}}function t(){let G=!1,ue=null,ce=null,Ae=null;return{setTest:function(Pe){Pe?Me(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Pe){ue!==Pe&&!G&&(r.depthMask(Pe),ue=Pe)},setFunc:function(Pe){if(ce!==Pe){switch(Pe){case Iv:r.depthFunc(r.NEVER);break;case Lv:r.depthFunc(r.ALWAYS);break;case Dv:r.depthFunc(r.LESS);break;case Uo:r.depthFunc(r.LEQUAL);break;case Nv:r.depthFunc(r.EQUAL);break;case Fv:r.depthFunc(r.GEQUAL);break;case Uv:r.depthFunc(r.GREATER);break;case Ov:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Ae!==Pe&&(r.clearDepth(Pe),Ae=Pe)},reset:function(){G=!1,ue=null,ce=null,Ae=null}}}function n(){let G=!1,ue=null,ce=null,Ae=null,Pe=null,gt=null,Tt=null,Lt=null,Wt=null;return{setTest:function(de){G||(de?Me(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(de){ue!==de&&!G&&(r.stencilMask(de),ue=de)},setFunc:function(de,ke,Ze){(ce!==de||Ae!==ke||Pe!==Ze)&&(r.stencilFunc(de,ke,Ze),ce=de,Ae=ke,Pe=Ze)},setOp:function(de,ke,Ze){(gt!==de||Tt!==ke||Lt!==Ze)&&(r.stencilOp(de,ke,Ze),gt=de,Tt=ke,Lt=Ze)},setLocked:function(de){G=de},setClear:function(de){Wt!==de&&(r.clearStencil(de),Wt=de)},reset:function(){G=!1,ue=null,ce=null,Ae=null,Pe=null,gt=null,Tt=null,Lt=null,Wt=null}}}let i=new e,o=new t,c=new n,l=new WeakMap,d=new WeakMap,h={},f={},m=new WeakMap,g=[],x=null,M=!1,w=null,y=null,v=null,L=null,C=null,P=null,O=null,N=new $e(0,0,0),U=0,X=!1,I=null,R=null,q=null,ee=null,B=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,z=0,Se=r.getParameter(r.VERSION);Se.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Se)[1]),oe=z>=1):Se.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),oe=z>=2);let te=null,xe={},W=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),qe=new Dt().fromArray(W),Ye=new Dt().fromArray(Le);function re(G,ue,ce,Ae){let Pe=new Uint8Array(4),gt=r.createTexture();r.bindTexture(G,gt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Tt=0;Tt<ce;Tt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(ue+Tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return gt}let ye={};ye[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),c.setClear(0),Me(r.DEPTH_TEST),o.setFunc(Uo),it(!1),Ne(eh),Me(r.CULL_FACE),Qe(Pi);function Me(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function be(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function Ve(G,ue){return f[G]!==ue?(r.bindFramebuffer(G,ue),f[G]=ue,G===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),G===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function lt(G,ue){let ce=g,Ae=!1;if(G){ce=m.get(ue),ce===void 0&&(ce=[],m.set(ue,ce));let Pe=G.textures;if(ce.length!==Pe.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Tt=Pe.length;gt<Tt;gt++)ce[gt]=r.COLOR_ATTACHMENT0+gt;ce.length=Pe.length,Ae=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,Ae=!0);Ae&&r.drawBuffers(ce)}function K(G){return x!==G?(r.useProgram(G),x=G,!0):!1}let wt={[ir]:r.FUNC_ADD,[pv]:r.FUNC_SUBTRACT,[mv]:r.FUNC_REVERSE_SUBTRACT};wt[gv]=r.MIN,wt[_v]=r.MAX;let Be={[vv]:r.ZERO,[yv]:r.ONE,[xv]:r.SRC_COLOR,[Nc]:r.SRC_ALPHA,[Av]:r.SRC_ALPHA_SATURATE,[bv]:r.DST_COLOR,[Mv]:r.DST_ALPHA,[Sv]:r.ONE_MINUS_SRC_COLOR,[Fc]:r.ONE_MINUS_SRC_ALPHA,[Ev]:r.ONE_MINUS_DST_COLOR,[wv]:r.ONE_MINUS_DST_ALPHA,[Tv]:r.CONSTANT_COLOR,[Rv]:r.ONE_MINUS_CONSTANT_COLOR,[Cv]:r.CONSTANT_ALPHA,[Pv]:r.ONE_MINUS_CONSTANT_ALPHA};function Qe(G,ue,ce,Ae,Pe,gt,Tt,Lt,Wt,de){if(G===Pi){M===!0&&(be(r.BLEND),M=!1);return}if(M===!1&&(Me(r.BLEND),M=!0),G!==fv){if(G!==w||de!==X){if((y!==ir||C!==ir)&&(r.blendEquation(r.FUNC_ADD),y=ir,C=ir),de)switch(G){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case th:r.blendFunc(r.ONE,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case th:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,L=null,P=null,O=null,N.set(0,0,0),U=0,w=G,X=de}return}Pe=Pe||ue,gt=gt||ce,Tt=Tt||Ae,(ue!==y||Pe!==C)&&(r.blendEquationSeparate(wt[ue],wt[Pe]),y=ue,C=Pe),(ce!==v||Ae!==L||gt!==P||Tt!==O)&&(r.blendFuncSeparate(Be[ce],Be[Ae],Be[gt],Be[Tt]),v=ce,L=Ae,P=gt,O=Tt),(Lt.equals(N)===!1||Wt!==U)&&(r.blendColor(Lt.r,Lt.g,Lt.b,Wt),N.copy(Lt),U=Wt),w=G,X=!1}function We(G,ue){G.side===Gn?be(r.CULL_FACE):Me(r.CULL_FACE);let ce=G.side===vn;ue&&(ce=!ce),it(ce),G.blending===Ur&&G.transparent===!1?Qe(Pi):Qe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),i.setMask(G.colorWrite);let Ae=G.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),yt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(G){I!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),I=G)}function Ne(G){G!==hv?(Me(r.CULL_FACE),G!==R&&(G===eh?r.cullFace(r.BACK):G===dv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),R=G}function je(G){G!==q&&(oe&&r.lineWidth(G),q=G)}function yt(G,ue,ce){G?(Me(r.POLYGON_OFFSET_FILL),(ee!==ue||B!==ce)&&(r.polygonOffset(ue,ce),ee=ue,B=ce)):be(r.POLYGON_OFFSET_FILL)}function k(G){G?Me(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function A(G){G===void 0&&(G=r.TEXTURE0+Z-1),te!==G&&(r.activeTexture(G),te=G)}function $(G,ue,ce){ce===void 0&&(te===null?ce=r.TEXTURE0+Z-1:ce=te);let Ae=xe[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},xe[ce]=Ae),(Ae.type!==G||Ae.texture!==ue)&&(te!==ce&&(r.activeTexture(ce),te=ce),r.bindTexture(G,ue||ye[G]),Ae.type=G,Ae.texture=ue)}function le(){let G=xe[te];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(G){qe.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),qe.copy(G))}function Ke(G){Ye.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ye.copy(G))}function at(G,ue){let ce=d.get(ue);ce===void 0&&(ce=new WeakMap,d.set(ue,ce));let Ae=ce.get(G);Ae===void 0&&(Ae=r.getUniformBlockIndex(ue,G.name),ce.set(G,Ae))}function Rt(G,ue){let Ae=d.get(ue).get(G);l.get(ue)!==Ae&&(r.uniformBlockBinding(ue,Ae,G.__bindingPointIndex),l.set(ue,Ae))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,xe={},f={},m=new WeakMap,g=[],x=null,M=!1,w=null,y=null,v=null,L=null,C=null,P=null,O=null,N=new $e(0,0,0),U=0,X=!1,I=null,R=null,q=null,ee=null,B=null,qe.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),i.reset(),o.reset(),c.reset()}return{buffers:{color:i,depth:o,stencil:c},enable:Me,disable:be,bindFramebuffer:Ve,drawBuffers:lt,useProgram:K,setBlending:Qe,setMaterial:We,setFlipSided:it,setCullFace:Ne,setLineWidth:je,setPolygonOffset:yt,setScissorTest:k,activeTexture:A,bindTexture:$,unbindTexture:le,compressedTexImage2D:me,compressedTexImage3D:he,texImage2D:rt,texImage3D:He,updateUBOMapping:at,uniformBlockBinding:Rt,texStorage2D:we,texStorage3D:Oe,texSubImage2D:ze,texSubImage3D:Ee,compressedTexSubImage2D:Te,compressedTexSubImage3D:tt,scissor:Re,viewport:Ke,reset:Fe}}function fb(r,e,t,n,i,o,c){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,f=new WeakMap,m,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(k,A){return x?new OffscreenCanvas(k,A):bs("canvas")}function w(k,A,$){let le=1,me=yt(k);if((me.width>$||me.height>$)&&(le=$/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let he=Math.floor(le*me.width),ze=Math.floor(le*me.height);m===void 0&&(m=M(he,ze));let Ee=A?M(he,ze):m;return Ee.width=he,Ee.height=ze,Ee.getContext("2d").drawImage(k,0,0,he,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+he+"x"+ze+")."),Ee}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),k;return k}function y(k){return k.generateMipmaps&&k.minFilter!==dn&&k.minFilter!==_n}function v(k){r.generateMipmap(k)}function L(k,A,$,le,me=!1){if(k!==null){if(r[k]!==void 0)return r[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let he=A;if(A===r.RED&&($===r.FLOAT&&(he=r.R32F),$===r.HALF_FLOAT&&(he=r.R16F),$===r.UNSIGNED_BYTE&&(he=r.R8)),A===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(he=r.R8UI),$===r.UNSIGNED_SHORT&&(he=r.R16UI),$===r.UNSIGNED_INT&&(he=r.R32UI),$===r.BYTE&&(he=r.R8I),$===r.SHORT&&(he=r.R16I),$===r.INT&&(he=r.R32I)),A===r.RG&&($===r.FLOAT&&(he=r.RG32F),$===r.HALF_FLOAT&&(he=r.RG16F),$===r.UNSIGNED_BYTE&&(he=r.RG8)),A===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(he=r.RG8UI),$===r.UNSIGNED_SHORT&&(he=r.RG16UI),$===r.UNSIGNED_INT&&(he=r.RG32UI),$===r.BYTE&&(he=r.RG8I),$===r.SHORT&&(he=r.RG16I),$===r.INT&&(he=r.RG32I)),A===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),A===r.RGBA){let ze=me?Oo:At.getTransfer(le);$===r.FLOAT&&(he=r.RGBA32F),$===r.HALF_FLOAT&&(he=r.RGBA16F),$===r.UNSIGNED_BYTE&&(he=ze===Ut?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(k,A){return y(k)===!0||k.isFramebufferTexture&&k.minFilter!==dn&&k.minFilter!==_n?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function P(k){let A=k.target;A.removeEventListener("dispose",P),N(A),A.isVideoTexture&&f.delete(A)}function O(k){let A=k.target;A.removeEventListener("dispose",O),X(A)}function N(k){let A=n.get(k);if(A.__webglInit===void 0)return;let $=k.source,le=g.get($);if(le){let me=le[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&U(k),Object.keys(le).length===0&&g.delete($)}n.remove(k)}function U(k){let A=n.get(k);r.deleteTexture(A.__webglTexture);let $=k.source,le=g.get($);delete le[A.__cacheKey],c.memory.textures--}function X(k){let A=n.get(k);if(k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let me=0;me<A.__webglFramebuffer[le].length;me++)r.deleteFramebuffer(A.__webglFramebuffer[le][me]);else r.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)r.deleteFramebuffer(A.__webglFramebuffer[le]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let $=k.textures;for(let le=0,me=$.length;le<me;le++){let he=n.get($[le]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),n.remove($[le])}n.remove(k)}let I=0;function R(){I=0}function q(){let k=I;return k>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+i.maxTextures),I+=1,k}function ee(k){let A=[];return A.push(k.wrapS),A.push(k.wrapT),A.push(k.wrapR||0),A.push(k.magFilter),A.push(k.minFilter),A.push(k.anisotropy),A.push(k.internalFormat),A.push(k.format),A.push(k.type),A.push(k.generateMipmaps),A.push(k.premultiplyAlpha),A.push(k.flipY),A.push(k.unpackAlignment),A.push(k.colorSpace),A.join()}function B(k,A){let $=n.get(k);if(k.isVideoTexture&&Ne(k),k.isRenderTargetTexture===!1&&k.version>0&&$.__version!==k.version){let le=k.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe($,k,A);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+A)}function Z(k,A){let $=n.get(k);if(k.version>0&&$.__version!==k.version){qe($,k,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+A)}function oe(k,A){let $=n.get(k);if(k.version>0&&$.__version!==k.version){qe($,k,A);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+A)}function z(k,A){let $=n.get(k);if(k.version>0&&$.__version!==k.version){Ye($,k,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+A)}let Se={[_i]:r.REPEAT,[mi]:r.CLAMP_TO_EDGE,[Ms]:r.MIRRORED_REPEAT},te={[dn]:r.NEAREST,[gl]:r.NEAREST_MIPMAP_NEAREST,[Nr]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[ys]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},xe={[oy]:r.NEVER,[dy]:r.ALWAYS,[ay]:r.LESS,[nf]:r.LEQUAL,[cy]:r.EQUAL,[hy]:r.GEQUAL,[ly]:r.GREATER,[uy]:r.NOTEQUAL};function W(k,A){if(A.type===ei&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===_n||A.magFilter===ys||A.magFilter===Nr||A.magFilter===Qn||A.minFilter===_n||A.minFilter===ys||A.minFilter===Nr||A.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,Se[A.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,Se[A.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,Se[A.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,te[A.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,te[A.minFilter]),A.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,xe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===dn||A.minFilter!==Nr&&A.minFilter!==Qn||A.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Le(k,A){let $=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",P));let le=A.source,me=g.get(le);me===void 0&&(me={},g.set(le,me));let he=ee(A);if(he!==k.__cacheKey){me[he]===void 0&&(me[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),me[he].usedTimes++;let ze=me[k.__cacheKey];ze!==void 0&&(me[k.__cacheKey].usedTimes--,ze.usedTimes===0&&U(A)),k.__cacheKey=he,k.__webglTexture=me[he].texture}return $}function qe(k,A,$){let le=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=r.TEXTURE_3D);let me=Le(k,A),he=A.source;t.bindTexture(le,k.__webglTexture,r.TEXTURE0+$);let ze=n.get(he);if(he.version!==ze.__version||me===!0){t.activeTexture(r.TEXTURE0+$);let Ee=At.getPrimaries(At.workingColorSpace),Te=A.colorSpace===Ri?null:At.getPrimaries(A.colorSpace),tt=A.colorSpace===Ri||Ee===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let we=w(A.image,!1,i.maxTextureSize);we=je(A,we);let Oe=o.convert(A.format,A.colorSpace),rt=o.convert(A.type),He=L(A.internalFormat,Oe,rt,A.colorSpace,A.isVideoTexture);W(le,A);let Re,Ke=A.mipmaps,at=A.isVideoTexture!==!0,Rt=ze.__version===void 0||me===!0,Fe=he.dataReady,G=C(A,we);if(A.isDepthTexture)He=r.DEPTH_COMPONENT16,A.type===ei?He=r.DEPTH_COMPONENT32F:A.type===Gr?He=r.DEPTH_COMPONENT24:A.type===Fs&&(He=r.DEPTH24_STENCIL8),Rt&&(at?t.texStorage2D(r.TEXTURE_2D,1,He,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,He,we.width,we.height,0,Oe,rt,null));else if(A.isDataTexture)if(Ke.length>0){at&&Rt&&t.texStorage2D(r.TEXTURE_2D,G,He,Ke[0].width,Ke[0].height);for(let ue=0,ce=Ke.length;ue<ce;ue++)Re=Ke[ue],at?Fe&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Re.width,Re.height,Oe,rt,Re.data):t.texImage2D(r.TEXTURE_2D,ue,He,Re.width,Re.height,0,Oe,rt,Re.data);A.generateMipmaps=!1}else at?(Rt&&t.texStorage2D(r.TEXTURE_2D,G,He,we.width,we.height),Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,Oe,rt,we.data)):t.texImage2D(r.TEXTURE_2D,0,He,we.width,we.height,0,Oe,rt,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&Rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,G,He,Ke[0].width,Ke[0].height,we.depth);for(let ue=0,ce=Ke.length;ue<ce;ue++)Re=Ke[ue],A.format!==Xn?Oe!==null?at?Fe&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Re.width,Re.height,we.depth,Oe,Re.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,He,Re.width,Re.height,we.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Re.width,Re.height,we.depth,Oe,rt,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,He,Re.width,Re.height,we.depth,0,Oe,rt,Re.data)}else{at&&Rt&&t.texStorage2D(r.TEXTURE_2D,G,He,Ke[0].width,Ke[0].height);for(let ue=0,ce=Ke.length;ue<ce;ue++)Re=Ke[ue],A.format!==Xn?Oe!==null?at?Fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Re.width,Re.height,Oe,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,He,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Fe&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Re.width,Re.height,Oe,rt,Re.data):t.texImage2D(r.TEXTURE_2D,ue,He,Re.width,Re.height,0,Oe,rt,Re.data)}else if(A.isDataArrayTexture)at?(Rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,G,He,we.width,we.height,we.depth),Fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Oe,rt,we.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,He,we.width,we.height,we.depth,0,Oe,rt,we.data);else if(A.isData3DTexture)at?(Rt&&t.texStorage3D(r.TEXTURE_3D,G,He,we.width,we.height,we.depth),Fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Oe,rt,we.data)):t.texImage3D(r.TEXTURE_3D,0,He,we.width,we.height,we.depth,0,Oe,rt,we.data);else if(A.isFramebufferTexture){if(Rt)if(at)t.texStorage2D(r.TEXTURE_2D,G,He,we.width,we.height);else{let ue=we.width,ce=we.height;for(let Ae=0;Ae<G;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,He,ue,ce,0,Oe,rt,null),ue>>=1,ce>>=1}}else if(Ke.length>0){if(at&&Rt){let ue=yt(Ke[0]);t.texStorage2D(r.TEXTURE_2D,G,He,ue.width,ue.height)}for(let ue=0,ce=Ke.length;ue<ce;ue++)Re=Ke[ue],at?Fe&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe,rt,Re):t.texImage2D(r.TEXTURE_2D,ue,He,Oe,rt,Re);A.generateMipmaps=!1}else if(at){if(Rt){let ue=yt(we);t.texStorage2D(r.TEXTURE_2D,G,He,ue.width,ue.height)}Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,rt,we)}else t.texImage2D(r.TEXTURE_2D,0,He,Oe,rt,we);y(A)&&v(le),ze.__version=he.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function Ye(k,A,$){if(A.image.length!==6)return;let le=Le(k,A),me=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+$);let he=n.get(me);if(me.version!==he.__version||le===!0){t.activeTexture(r.TEXTURE0+$);let ze=At.getPrimaries(At.workingColorSpace),Ee=A.colorSpace===Ri?null:At.getPrimaries(A.colorSpace),Te=A.colorSpace===Ri||ze===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let tt=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let ce=0;ce<6;ce++)!tt&&!we?Oe[ce]=w(A.image[ce],!0,i.maxCubemapSize):Oe[ce]=we?A.image[ce].image:A.image[ce],Oe[ce]=je(A,Oe[ce]);let rt=Oe[0],He=o.convert(A.format,A.colorSpace),Re=o.convert(A.type),Ke=L(A.internalFormat,He,Re,A.colorSpace),at=A.isVideoTexture!==!0,Rt=he.__version===void 0||le===!0,Fe=me.dataReady,G=C(A,rt);W(r.TEXTURE_CUBE_MAP,A);let ue;if(tt){at&&Rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,G,Ke,rt.width,rt.height);for(let ce=0;ce<6;ce++){ue=Oe[ce].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){let Pe=ue[Ae];A.format!==Xn?He!==null?at?Fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Pe.width,Pe.height,He,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Pe.width,Pe.height,He,Re,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,Ke,Pe.width,Pe.height,0,He,Re,Pe.data)}}}else{if(ue=A.mipmaps,at&&Rt){ue.length>0&&G++;let ce=yt(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,G,Ke,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(we){at?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Oe[ce].width,Oe[ce].height,He,Re,Oe[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Oe[ce].width,Oe[ce].height,0,He,Re,Oe[ce].data);for(let Ae=0;Ae<ue.length;Ae++){let gt=ue[Ae].image[ce].image;at?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,gt.width,gt.height,He,Re,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,Ke,gt.width,gt.height,0,He,Re,gt.data)}}else{at?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,He,Re,Oe[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,He,Re,Oe[ce]);for(let Ae=0;Ae<ue.length;Ae++){let Pe=ue[Ae];at?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,He,Re,Pe.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,Ke,He,Re,Pe.image[ce])}}}y(A)&&v(r.TEXTURE_CUBE_MAP),he.__version=me.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function re(k,A,$,le,me,he){let ze=o.convert($.format,$.colorSpace),Ee=o.convert($.type),Te=L($.internalFormat,ze,Ee,$.colorSpace);if(!n.get(A).__hasExternalTextures){let we=Math.max(1,A.width>>he),Oe=Math.max(1,A.height>>he);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,he,Te,we,Oe,A.depth,0,ze,Ee,null):t.texImage2D(me,he,Te,we,Oe,0,ze,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),it(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,me,n.get($).__webglTexture,0,We(A)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,me,n.get($).__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(k,A,$){if(r.bindRenderbuffer(r.RENDERBUFFER,k),A.depthBuffer&&!A.stencilBuffer){let le=r.DEPTH_COMPONENT24;if($||it(A)){let me=A.depthTexture;me&&me.isDepthTexture&&(me.type===ei?le=r.DEPTH_COMPONENT32F:me.type===Gr&&(le=r.DEPTH_COMPONENT24));let he=We(A);it(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,le,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,he,le,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,k)}else if(A.depthBuffer&&A.stencilBuffer){let le=We(A);$&&it(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,A.width,A.height):it(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,k)}else{let le=A.textures;for(let me=0;me<le.length;me++){let he=le[me],ze=o.convert(he.format,he.colorSpace),Ee=o.convert(he.type),Te=L(he.internalFormat,ze,Ee,he.colorSpace),tt=We(A);$&&it(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Te,A.width,A.height):it(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Te,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Te,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(k,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);let le=n.get(A.depthTexture).__webglTexture,me=We(A);if(A.depthTexture.format===Or)it(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(A.depthTexture.format===ws)it(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function be(k){let A=n.get(k),$=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Me(A.__webglFramebuffer,k)}else if($){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=r.createRenderbuffer(),ye(A.__webglDepthbuffer[le],k,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),ye(A.__webglDepthbuffer,k,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(k,A,$){let le=n.get(k);A!==void 0&&re(le.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&be(k)}function lt(k){let A=k.texture,$=n.get(k),le=n.get(A);k.addEventListener("dispose",O);let me=k.textures,he=k.isWebGLCubeRenderTarget===!0,ze=me.length>1;if(ze||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=A.version,c.memory.textures++),he){$.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ee]=[];for(let Te=0;Te<A.mipmaps.length;Te++)$.__webglFramebuffer[Ee][Te]=r.createFramebuffer()}else $.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)$.__webglFramebuffer[Ee]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(ze)for(let Ee=0,Te=me.length;Ee<Te;Ee++){let tt=n.get(me[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),c.memory.textures++)}if(k.samples>0&&it(k)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){let Te=me[Ee];$.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ee]);let tt=o.convert(Te.format,Te.colorSpace),we=o.convert(Te.type),Oe=L(Te.internalFormat,tt,we,Te.colorSpace,k.isXRRenderTarget===!0),rt=We(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Oe,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),ye($.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),W(r.TEXTURE_CUBE_MAP,A);for(let Ee=0;Ee<6;Ee++)if(A.mipmaps&&A.mipmaps.length>0)for(let Te=0;Te<A.mipmaps.length;Te++)re($.__webglFramebuffer[Ee][Te],k,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Te);else re($.__webglFramebuffer[Ee],k,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);y(A)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ee=0,Te=me.length;Ee<Te;Ee++){let tt=me[Ee],we=n.get(tt);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),W(r.TEXTURE_2D,tt),re($.__webglFramebuffer,k,tt,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),y(tt)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ee=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,le.__webglTexture),W(Ee,A),A.mipmaps&&A.mipmaps.length>0)for(let Te=0;Te<A.mipmaps.length;Te++)re($.__webglFramebuffer[Te],k,A,r.COLOR_ATTACHMENT0,Ee,Te);else re($.__webglFramebuffer,k,A,r.COLOR_ATTACHMENT0,Ee,0);y(A)&&v(Ee),t.unbindTexture()}k.depthBuffer&&be(k)}function K(k){let A=k.textures;for(let $=0,le=A.length;$<le;$++){let me=A[$];if(y(me)){let he=k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ze=n.get(me).__webglTexture;t.bindTexture(he,ze),v(he),t.unbindTexture()}}}let wt=[],Be=[];function Qe(k){if(k.samples>0){if(it(k)===!1){let A=k.textures,$=k.width,le=k.height,me=r.COLOR_BUFFER_BIT,he=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=n.get(k),Ee=A.length>1;if(Ee)for(let Te=0;Te<A.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Te=0;Te<A.length;Te++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Te]);let tt=n.get(A[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,$,le,0,0,$,le,me,r.NEAREST),d===!0&&(wt.length=0,Be.length=0,wt.push(r.COLOR_ATTACHMENT0+Te),k.depthBuffer&&k.resolveDepthBuffer===!1&&(wt.push(he),Be.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let Te=0;Te<A.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Te]);let tt=n.get(A[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,tt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&d){let A=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function We(k){return Math.min(i.maxSamples,k.samples)}function it(k){let A=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(k){let A=c.render.frame;f.get(k)!==A&&(f.set(k,A),k.update())}function je(k,A){let $=k.colorSpace,le=k.format,me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||$!==rn&&$!==Ri&&(At.getTransfer($)===Ut?(le!==Xn||me!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function yt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=z,this.rebindTextures=Ve,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=it}function pb(r,e){function t(n,i=Ri){let o,c=At.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===Yd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qv)return r.BYTE;if(n===Yv)return r.SHORT;if(n===$d)return r.UNSIGNED_SHORT;if(n===qd)return r.INT;if(n===Gr)return r.UNSIGNED_INT;if(n===ei)return r.FLOAT;if(n===va)return r.HALF_FLOAT;if(n===Kv)return r.ALPHA;if(n===Zv)return r.RGB;if(n===Xn)return r.RGBA;if(n===Jv)return r.LUMINANCE;if(n===Qv)return r.LUMINANCE_ALPHA;if(n===Or)return r.DEPTH_COMPONENT;if(n===ws)return r.DEPTH_STENCIL;if(n===Kd)return r.RED;if(n===Zd)return r.RED_INTEGER;if(n===ey)return r.RG;if(n===Jd)return r.RG_INTEGER;if(n===Qd)return r.RGBA_INTEGER;if(n===Ja||n===Qa||n===ec||n===tc)if(c===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sh||n===oh||n===ah||n===ch)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ch)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lh||n===uh||n===hh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===lh||n===uh)return c===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===hh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===vh||n===yh||n===xh||n===Sh||n===Mh||n===wh||n===bh||n===Eh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===dh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ph)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_h)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eh)return c===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===Ah||n===Th)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===nc)return c===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ah)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ty||n===Rh||n===Ch||n===Ph)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===nc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Rh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Jc=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},sn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mb={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,c=null,l=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(let w of e.hand.values()){let y=t.getJointPose(w,n),v=this._getHandJoint(h,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}let f=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=f.position.distanceTo(m.position),x=.02,M=.005;h.inputState.pinching&&g>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return l!==null&&(l.visible=i!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new tn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new ii({vertexShader:gb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kt(new cr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},el=class extends Di{constructor(e,t){super();let n=this,i=null,o=1,c=null,l="local-floor",d=1,h=null,f=null,m=null,g=null,x=null,M=null,w=new Qc,y=t.getContextAttributes(),v=null,L=null,C=[],P=[],O=new ct,N=null,U=new Kt;U.layers.enable(1),U.viewport=new Dt;let X=new Kt;X.layers.enable(2),X.viewport=new Dt;let I=[U,X],R=new Jc;R.layers.enable(1),R.layers.enable(2);let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=C[re];return ye===void 0&&(ye=new Ss,C[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=C[re];return ye===void 0&&(ye=new Ss,C[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=C[re];return ye===void 0&&(ye=new Ss,C[re]=ye),ye.getHandSpace()};function B(re){let ye=P.indexOf(re.inputSource);if(ye===-1)return;let Me=C[ye];Me!==void 0&&(Me.update(re.inputSource,re.frame,h||c),Me.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",oe);for(let re=0;re<C.length;re++){let ye=P[re];ye!==null&&(P[re]=null,C[re].disconnect(ye))}q=null,ee=null,w.reset(),e.setRenderTarget(v),x=null,g=null,m=null,i=null,L=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){l=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){let ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new vi(x.framebufferWidth,x.framebufferHeight,{format:Xn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ye=null,Me=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?ws:Or,Me=y.stencil?Fs:Gr);let Ve={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};m=new XRWebGLBinding(i,t),g=m.createProjectionLayer(Ve),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new vi(g.textureWidth,g.textureHeight,{format:Xn,type:Li,depthTexture:new Yo(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await i.requestReferenceSpace(l),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function oe(re){for(let ye=0;ye<re.removed.length;ye++){let Me=re.removed[ye],be=P.indexOf(Me);be>=0&&(P[be]=null,C[be].disconnect(Me))}for(let ye=0;ye<re.added.length;ye++){let Me=re.added[ye],be=P.indexOf(Me);if(be===-1){for(let lt=0;lt<C.length;lt++)if(lt>=P.length){P.push(Me),be=lt;break}else if(P[lt]===null){P[lt]=Me,be=lt;break}if(be===-1)break}let Ve=C[be];Ve&&Ve.connect(Me)}}let z=new H,Se=new H;function te(re,ye,Me){z.setFromMatrixPosition(ye.matrixWorld),Se.setFromMatrixPosition(Me.matrixWorld);let be=z.distanceTo(Se),Ve=ye.projectionMatrix.elements,lt=Me.projectionMatrix.elements,K=Ve[14]/(Ve[10]-1),wt=Ve[14]/(Ve[10]+1),Be=(Ve[9]+1)/Ve[5],Qe=(Ve[9]-1)/Ve[5],We=(Ve[8]-1)/Ve[0],it=(lt[8]+1)/lt[0],Ne=K*We,je=K*it,yt=be/(-We+it),k=yt*-We;ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(k),re.translateZ(yt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();let A=K+yt,$=wt+yt,le=Ne-k,me=je+(be-k),he=Be*wt/$*A,ze=Qe*wt/$*A;re.projectionMatrix.makePerspective(le,me,he,ze,A,$),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function xe(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;w.texture!==null&&(re.near=w.depthNear,re.far=w.depthFar),R.near=X.near=U.near=re.near,R.far=X.far=U.far=re.far,(q!==R.near||ee!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),q=R.near,ee=R.far,U.near=q,U.far=ee,X.near=q,X.far=ee,U.updateProjectionMatrix(),X.updateProjectionMatrix(),re.updateProjectionMatrix());let ye=re.parent,Me=R.cameras;xe(R,ye);for(let be=0;be<Me.length;be++)xe(Me[be],ye);Me.length===2?te(R,U,X):R.projectionMatrix.copy(U.projectionMatrix),W(re,R,ye)};function W(re,ye,Me){Me===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Me.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Xr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(re){d=re,g!==null&&(g.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return w.texture!==null};let Le=null;function qe(re,ye){if(f=ye.getViewerPose(h||c),M=ye,f!==null){let Me=f.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let be=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,be=!0);for(let lt=0;lt<Me.length;lt++){let K=Me[lt],wt=null;if(x!==null)wt=x.getViewport(K);else{let Qe=m.getViewSubImage(g,K);wt=Qe.viewport,lt===0&&(e.setRenderTargetTextures(L,Qe.colorTexture,g.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(L))}let Be=I[lt];Be===void 0&&(Be=new Kt,Be.layers.enable(lt),Be.viewport=new Dt,I[lt]=Be),Be.matrix.fromArray(K.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(K.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(wt.x,wt.y,wt.width,wt.height),lt===0&&(R.matrix.copy(Be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),be===!0&&R.cameras.push(Be)}let Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let lt=m.getDepthInformation(Me[0]);lt&&lt.isValid&&lt.texture&&w.init(e,lt,i.renderState)}}for(let Me=0;Me<C.length;Me++){let be=P[Me],Ve=C[Me];be!==null&&Ve!==void 0&&Ve.update(be,ye,h||c)}w.render(e,R),Le&&Le(re,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),M=null}let Ye=new lf;Ye.setAnimationLoop(qe),this.setAnimationLoop=function(re){Le=re},this.dispose=function(){}}},tr=new ni,vb=new ht;function yb(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,cf(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function i(y,v,L,C,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(y,v):v.isMeshToonMaterial?(o(y,v),m(y,v)):v.isMeshPhongMaterial?(o(y,v),f(y,v)):v.isMeshStandardMaterial?(o(y,v),g(y,v),v.isMeshPhysicalMaterial&&x(y,v,P)):v.isMeshMatcapMaterial?(o(y,v),M(y,v)):v.isMeshDepthMaterial?o(y,v):v.isMeshDistanceMaterial?(o(y,v),w(y,v)):v.isMeshNormalMaterial?o(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&l(y,v)):v.isPointsMaterial?d(y,v,L,C):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let L=e.get(v),C=L.envMap,P=L.envMapRotation;if(C&&(y.envMap.value=C,tr.copy(P),tr.x*=-1,tr.y*=-1,tr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),y.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(tr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;let O=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*O,t(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function l(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,L,C){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=C*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function m(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function x(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){let L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xb(r,e,t,n){let i={},o={},c=[],l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,C){let P=C.program;n.uniformBlockBinding(L,P)}function h(L,C){let P=i[L.id];P===void 0&&(M(L),P=f(L),i[L.id]=P,L.addEventListener("dispose",y));let O=C.program;n.updateUBOMapping(L,O);let N=e.render.frame;o[L.id]!==N&&(g(L),o[L.id]=N)}function f(L){let C=m();L.__bindingPointIndex=C;let P=r.createBuffer(),O=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,O,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,P),P}function m(){for(let L=0;L<l;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){let C=i[L.id],P=L.uniforms,O=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let N=0,U=P.length;N<U;N++){let X=Array.isArray(P[N])?P[N]:[P[N]];for(let I=0,R=X.length;I<R;I++){let q=X[I];if(x(q,N,I,O)===!0){let ee=q.__offset,B=Array.isArray(q.value)?q.value:[q.value],Z=0;for(let oe=0;oe<B.length;oe++){let z=B[oe],Se=w(z);typeof z=="number"||typeof z=="boolean"?(q.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,ee+Z,q.__data)):z.isMatrix3?(q.__data[0]=z.elements[0],q.__data[1]=z.elements[1],q.__data[2]=z.elements[2],q.__data[3]=0,q.__data[4]=z.elements[3],q.__data[5]=z.elements[4],q.__data[6]=z.elements[5],q.__data[7]=0,q.__data[8]=z.elements[6],q.__data[9]=z.elements[7],q.__data[10]=z.elements[8],q.__data[11]=0):(z.toArray(q.__data,Z),Z+=Se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ee,q.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,C,P,O){let N=L.value,U=C+"_"+P;if(O[U]===void 0)return typeof N=="number"||typeof N=="boolean"?O[U]=N:O[U]=N.clone(),!0;{let X=O[U];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return O[U]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function M(L){let C=L.uniforms,P=0,O=16;for(let U=0,X=C.length;U<X;U++){let I=Array.isArray(C[U])?C[U]:[C[U]];for(let R=0,q=I.length;R<q;R++){let ee=I[R],B=Array.isArray(ee.value)?ee.value:[ee.value];for(let Z=0,oe=B.length;Z<oe;Z++){let z=B[Z],Se=w(z),te=P%O;te!==0&&O-te<Se.boundary&&(P+=O-te),ee.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=P,P+=Se.storage}}}let N=P%O;return N>0&&(P+=O-N),L.__size=P,L.__cache={},this}function w(L){let C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function y(L){let C=L.target;C.removeEventListener("dispose",y);let P=c.indexOf(C.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(i[C.id]),delete i[C.id],delete o[C.id]}function v(){for(let L in i)r.deleteBuffer(i[L]);c=[],i={},o={}}return{bind:d,update:h,dispose:v}}var jo=class{constructor(e={}){let{canvas:t=Cy(),context:n=null,depth:i=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=c;let x=new Uint32Array(4),M=new Int32Array(4),w=null,y=null,v=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;let C=this,P=!1,O=0,N=0,U=null,X=-1,I=null,R=new Dt,q=new Dt,ee=null,B=new $e(0),Z=0,oe=t.width,z=t.height,Se=1,te=null,xe=null,W=new Dt(0,0,oe,z),Le=new Dt(0,0,oe,z),qe=!1,Ye=new Ts,re=!1,ye=!1,Me=new ht,be=new H,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return U===null?Se:1}let K=n;function wt(D,Y){return t.getContext(D,Y)}try{let D={alpha:!0,depth:i,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),K===null){let Y="webgl2";if(K=wt(Y,D),K===null)throw wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Be,Qe,We,it,Ne,je,yt,k,A,$,le,me,he,ze,Ee,Te,tt,we,Oe,rt,He,Re,Ke,at;function Rt(){Be=new BM(K),Be.init(),Re=new pb(K,Be),Qe=new DM(K,Be,e,Re),We=new db(K),it=new VM(K),Ne=new eb,je=new fb(K,Be,We,Ne,Qe,Re,it),yt=new FM(C),k=new kM(C),A=new jy(K),Ke=new IM(K,A),$=new zM(K,A,it,Ke),le=new WM(K,$,A,it),Oe=new GM(K,Qe,je),Te=new NM(Ne),me=new Qw(C,yt,k,Be,Qe,Ke,Te),he=new yb(C,Ne),ze=new nb,Ee=new cb(Be),we=new PM(C,yt,k,We,le,g,d),tt=new hb(C,le,Qe),at=new xb(K,it,Qe,We),rt=new LM(K,Be,it),He=new HM(K,Be,it),it.programs=me.programs,C.capabilities=Qe,C.extensions=Be,C.properties=Ne,C.renderLists=ze,C.shadowMap=tt,C.state=We,C.info=it}Rt();let Fe=new el(C,K);this.xr=Fe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let D=Be.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Be.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(D){D!==void 0&&(Se=D,this.setSize(oe,z,!1))},this.getSize=function(D){return D.set(oe,z)},this.setSize=function(D,Y,ie=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=D,z=Y,t.width=Math.floor(D*Se),t.height=Math.floor(Y*Se),ie===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(oe*Se,z*Se).floor()},this.setDrawingBufferSize=function(D,Y,ie){oe=D,z=Y,Se=ie,t.width=Math.floor(D*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(W)},this.setViewport=function(D,Y,ie,J){D.isVector4?W.set(D.x,D.y,D.z,D.w):W.set(D,Y,ie,J),We.viewport(R.copy(W).multiplyScalar(Se).round())},this.getScissor=function(D){return D.copy(Le)},this.setScissor=function(D,Y,ie,J){D.isVector4?Le.set(D.x,D.y,D.z,D.w):Le.set(D,Y,ie,J),We.scissor(q.copy(Le).multiplyScalar(Se).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){We.setScissorTest(qe=D)},this.setOpaqueSort=function(D){te=D},this.setTransparentSort=function(D){xe=D},this.getClearColor=function(D){return D.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(D=!0,Y=!0,ie=!0){let J=0;if(D){let Q=!1;if(U!==null){let Ie=U.texture.format;Q=Ie===Qd||Ie===Jd||Ie===Zd}if(Q){let Ie=U.texture.type,Ue=Ie===Li||Ie===Gr||Ie===$d||Ie===Fs||Ie===Yd||Ie===jd,De=we.getClearColor(),Je=we.getClearAlpha(),et=De.r,nt=De.g,ut=De.b;Ue?(x[0]=et,x[1]=nt,x[2]=ut,x[3]=Je,K.clearBufferuiv(K.COLOR,0,x)):(M[0]=et,M[1]=nt,M[2]=ut,M[3]=Je,K.clearBufferiv(K.COLOR,0,M))}else J|=K.COLOR_BUFFER_BIT}Y&&(J|=K.DEPTH_BUFFER_BIT),ie&&(J|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ze.dispose(),Ee.dispose(),Ne.dispose(),yt.dispose(),k.dispose(),le.dispose(),Ke.dispose(),at.dispose(),me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",de),Fe.removeEventListener("sessionend",ke),Ze.stop()};function G(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let D=it.autoReset,Y=tt.enabled,ie=tt.autoUpdate,J=tt.needsUpdate,Q=tt.type;Rt(),it.autoReset=D,tt.enabled=Y,tt.autoUpdate=ie,tt.needsUpdate=J,tt.type=Q}function ce(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ae(D){let Y=D.target;Y.removeEventListener("dispose",Ae),Pe(Y)}function Pe(D){gt(D),Ne.remove(D)}function gt(D){let Y=Ne.get(D).programs;Y!==void 0&&(Y.forEach(function(ie){me.releaseProgram(ie)}),D.isShaderMaterial&&me.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,ie,J,Q,Ie){Y===null&&(Y=Ve);let Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,De=pe(D,Y,ie,J,Q);We.setMaterial(J,Ue);let Je=ie.index,et=1;if(J.wireframe===!0){if(Je=$.getWireframeAttribute(ie),Je===void 0)return;et=2}let nt=ie.drawRange,ut=ie.attributes.position,Vt=nt.start*et,Qt=(nt.start+nt.count)*et;Ie!==null&&(Vt=Math.max(Vt,Ie.start*et),Qt=Math.min(Qt,(Ie.start+Ie.count)*et)),Je!==null?(Vt=Math.max(Vt,0),Qt=Math.min(Qt,Je.count)):ut!=null&&(Vt=Math.max(Vt,0),Qt=Math.min(Qt,ut.count));let on=Qt-Vt;if(on<0||on===1/0)return;Ke.setup(Q,J,De,ie,Je);let Fn,bt=rt;if(Je!==null&&(Fn=A.get(Je),bt=He,bt.setIndex(Fn)),Q.isMesh)J.wireframe===!0?(We.setLineWidth(J.wireframeLinewidth*lt()),bt.setMode(K.LINES)):bt.setMode(K.TRIANGLES);else if(Q.isLine){let st=J.linewidth;st===void 0&&(st=1),We.setLineWidth(st*lt()),Q.isLineSegments?bt.setMode(K.LINES):Q.isLineLoop?bt.setMode(K.LINE_LOOP):bt.setMode(K.LINE_STRIP)}else Q.isPoints?bt.setMode(K.POINTS):Q.isSprite&&bt.setMode(K.TRIANGLES);if(Q.isBatchedMesh)Q._multiDrawInstances!==null?bt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances):bt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)bt.renderInstances(Vt,on,Q.count);else if(ie.isInstancedBufferGeometry){let st=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Hi=Math.min(ie.instanceCount,st);bt.renderInstances(Vt,on,Hi)}else bt.render(Vt,on)};function Tt(D,Y,ie){D.transparent===!0&&D.side===Gn&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,wn(D,Y,ie),D.side=ti,D.needsUpdate=!0,wn(D,Y,ie),D.side=Gn):wn(D,Y,ie)}this.compile=function(D,Y,ie=null){ie===null&&(ie=D),y=Ee.get(ie),y.init(Y),L.push(y),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),D!==ie&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights(C._useLegacyLights);let J=new Set;return D.traverse(function(Q){let Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Ue=0;Ue<Ie.length;Ue++){let De=Ie[Ue];Tt(De,ie,Q),J.add(De)}else Tt(Ie,ie,Q),J.add(Ie)}),L.pop(),y=null,J},this.compileAsync=function(D,Y,ie=null){let J=this.compile(D,Y,ie);return new Promise(Q=>{function Ie(){if(J.forEach(function(Ue){Ne.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){Q(D);return}setTimeout(Ie,10)}Be.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Lt=null;function Wt(D){Lt&&Lt(D)}function de(){Ze.stop()}function ke(){Ze.start()}let Ze=new lf;Ze.setAnimationLoop(Wt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(D){Lt=D,Fe.setAnimationLoop(D),D===null?Ze.stop():Ze.start()},Fe.addEventListener("sessionstart",de),Fe.addEventListener("sessionend",ke),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(Y),Y=Fe.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,Y,U),y=Ee.get(D,L.length),y.init(Y),L.push(y),Me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ye.setFromProjectionMatrix(Me),ye=this.localClippingEnabled,re=Te.init(this.clippingPlanes,ye),w=ze.get(D,v.length),w.init(),v.push(w),xt(D,Y,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(te,xe);let ie=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1;ie&&we.addToRenderList(w,D),this.info.render.frame++,re===!0&&Te.beginShadows();let J=y.state.shadowsArray;tt.render(J,D,Y),re===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=w.opaque,Ie=w.transmissive;if(y.setupLights(C._useLegacyLights),Y.isArrayCamera){let Ue=Y.cameras;if(Ie.length>0)for(let De=0,Je=Ue.length;De<Je;De++){let et=Ue[De];St(Q,Ie,D,et)}ie&&we.render(D);for(let De=0,Je=Ue.length;De<Je;De++){let et=Ue[De];Ht(w,D,et,et.viewport)}}else Ie.length>0&&St(Q,Ie,D,Y),ie&&we.render(D),Ht(w,D,Y);U!==null&&(je.updateMultisampleRenderTarget(U),je.updateRenderTargetMipmap(U)),D.isScene===!0&&D.onAfterRender(C,D,Y),Ke.resetDefaultState(),X=-1,I=null,L.pop(),L.length>0?(y=L[L.length-1],re===!0&&Te.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function xt(D,Y,ie,J){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)ie=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ye.intersectsSprite(D)){J&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Me);let Ue=le.update(D),De=D.material;De.visible&&w.push(D,Ue,De,ie,be.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ye.intersectsObject(D))){let Ue=le.update(D),De=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),be.copy(D.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),be.copy(Ue.boundingSphere.center)),be.applyMatrix4(D.matrixWorld).applyMatrix4(Me)),Array.isArray(De)){let Je=Ue.groups;for(let et=0,nt=Je.length;et<nt;et++){let ut=Je[et],Vt=De[ut.materialIndex];Vt&&Vt.visible&&w.push(D,Ue,Vt,ie,be.z,ut)}}else De.visible&&w.push(D,Ue,De,ie,be.z,null)}}let Ie=D.children;for(let Ue=0,De=Ie.length;Ue<De;Ue++)xt(Ie[Ue],Y,ie,J)}function Ht(D,Y,ie,J){let Q=D.opaque,Ie=D.transmissive,Ue=D.transparent;y.setupLightsView(ie),re===!0&&Te.setGlobalState(C.clippingPlanes,ie),J&&We.viewport(R.copy(J)),Q.length>0&&Xt(Q,Y,ie),Ie.length>0&&Xt(Ie,Y,ie),Ue.length>0&&Xt(Ue,Y,ie),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function St(D,Y,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[J.id]===void 0&&(y.state.transmissionRenderTarget[J.id]=new vi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?va:Li,minFilter:Qn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let Ie=y.state.transmissionRenderTarget[J.id],Ue=J.viewport||R;Ie.setSize(Ue.z,Ue.w);let De=C.getRenderTarget();C.setRenderTarget(Ie),C.getClearColor(B),Z=C.getClearAlpha(),Z<1&&C.setClearColor(16777215,.5),C.clear();let Je=C.toneMapping;C.toneMapping=Ii;let et=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),re===!0&&Te.setGlobalState(C.clippingPlanes,J),Xt(D,ie,J),je.updateMultisampleRenderTarget(Ie),je.updateRenderTargetMipmap(Ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ut=0,Vt=Y.length;ut<Vt;ut++){let Qt=Y[ut],on=Qt.object,Fn=Qt.geometry,bt=Qt.material,st=Qt.group;if(bt.side===Gn&&on.layers.test(J.layers)){let Hi=bt.side;bt.side=vn,bt.needsUpdate=!0,Et(on,ie,J,Fn,bt,st),bt.side=Hi,bt.needsUpdate=!0,nt=!0}}nt===!0&&(je.updateMultisampleRenderTarget(Ie),je.updateRenderTargetMipmap(Ie))}C.setRenderTarget(De),C.setClearColor(B,Z),et!==void 0&&(J.viewport=et),C.toneMapping=Je}function Xt(D,Y,ie){let J=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ie=D.length;Q<Ie;Q++){let Ue=D[Q],De=Ue.object,Je=Ue.geometry,et=J===null?Ue.material:J,nt=Ue.group;De.layers.test(ie.layers)&&Et(De,Y,ie,Je,et,nt)}}function Et(D,Y,ie,J,Q,Ie){D.onBeforeRender(C,Y,ie,J,Q,Ie),D.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(C,Y,ie,J,D,Ie),Q.transparent===!0&&Q.side===Gn&&Q.forceSinglePass===!1?(Q.side=vn,Q.needsUpdate=!0,C.renderBufferDirect(ie,Y,J,Q,D,Ie),Q.side=ti,Q.needsUpdate=!0,C.renderBufferDirect(ie,Y,J,Q,D,Ie),Q.side=Gn):C.renderBufferDirect(ie,Y,J,Q,D,Ie),D.onAfterRender(C,Y,ie,J,Q,Ie)}function wn(D,Y,ie){Y.isScene!==!0&&(Y=Ve);let J=Ne.get(D),Q=y.state.lights,Ie=y.state.shadowsArray,Ue=Q.state.version,De=me.getParameters(D,Q.state,Ie,Y,ie),Je=me.getProgramCacheKey(De),et=J.programs;J.environment=D.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(D.isMeshStandardMaterial?k:yt).get(D.envMap||J.environment),J.envMapRotation=J.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,et===void 0&&(D.addEventListener("dispose",Ae),et=new Map,J.programs=et);let nt=et.get(Je);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Ue)return fe(D,De),nt}else De.uniforms=me.getUniforms(D),D.onBuild(ie,De,C),D.onBeforeCompile(De,C),nt=me.acquireProgram(De,Je),et.set(Je,nt),J.uniforms=De.uniforms;let ut=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ut.clippingPlanes=Te.uniform),fe(D,De),J.needsLights=Bs(D),J.lightsStateVersion=Ue,J.needsLights&&(ut.ambientLightColor.value=Q.state.ambient,ut.lightProbe.value=Q.state.probe,ut.directionalLights.value=Q.state.directional,ut.directionalLightShadows.value=Q.state.directionalShadow,ut.spotLights.value=Q.state.spot,ut.spotLightShadows.value=Q.state.spotShadow,ut.rectAreaLights.value=Q.state.rectArea,ut.ltc_1.value=Q.state.rectAreaLTC1,ut.ltc_2.value=Q.state.rectAreaLTC2,ut.pointLights.value=Q.state.point,ut.pointLightShadows.value=Q.state.pointShadow,ut.hemisphereLights.value=Q.state.hemi,ut.directionalShadowMap.value=Q.state.directionalShadowMap,ut.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ut.spotShadowMap.value=Q.state.spotShadowMap,ut.spotLightMatrix.value=Q.state.spotLightMatrix,ut.spotLightMap.value=Q.state.spotLightMap,ut.pointShadowMap.value=Q.state.pointShadowMap,ut.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function oi(D){if(D.uniformsList===null){let Y=D.currentProgram.getUniforms();D.uniformsList=zr.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function fe(D,Y){let ie=Ne.get(D);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function pe(D,Y,ie,J,Q){Y.isScene!==!0&&(Y=Ve),je.resetTextureUnits();let Ie=Y.fog,Ue=J.isMeshStandardMaterial?Y.environment:null,De=U===null?C.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:rn,Je=(J.isMeshStandardMaterial?k:yt).get(J.envMap||Ue),et=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ut=!!ie.morphAttributes.position,Vt=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color,on=Ii;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(on=C.toneMapping);let Fn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,bt=Fn!==void 0?Fn.length:0,st=Ne.get(J),Hi=y.state.lights;if(re===!0&&(ye===!0||D!==I)){let gn=D===I&&J.id===X;Te.setState(J,D,gn)}let Xe=!1;J.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Hi.state.version||st.outputColorSpace!==De||Q.isBatchedMesh&&st.batching===!1||!Q.isBatchedMesh&&st.batching===!0||Q.isInstancedMesh&&st.instancing===!1||!Q.isInstancedMesh&&st.instancing===!0||Q.isSkinnedMesh&&st.skinning===!1||!Q.isSkinnedMesh&&st.skinning===!0||Q.isInstancedMesh&&st.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&st.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&st.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&st.instancingMorph===!1&&Q.morphTexture!==null||st.envMap!==Je||J.fog===!0&&st.fog!==Ie||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Te.numPlanes||st.numIntersection!==Te.numIntersection)||st.vertexAlphas!==et||st.vertexTangents!==nt||st.morphTargets!==ut||st.morphNormals!==Vt||st.morphColors!==Qt||st.toneMapping!==on||st.morphTargetsCount!==bt)&&(Xe=!0):(Xe=!0,st.__version=J.version);let ai=st.currentProgram;Xe===!0&&(ai=wn(J,Y,Q));let ss=!1,Cn=!1,Vi=!1,Bt=ai.getUniforms(),Un=st.uniforms;if(We.useProgram(ai.program)&&(ss=!0,Cn=!0,Vi=!0),J.id!==X&&(X=J.id,Cn=!0),ss||I!==D){Bt.setValue(K,"projectionMatrix",D.projectionMatrix),Bt.setValue(K,"viewMatrix",D.matrixWorldInverse);let gn=Bt.map.cameraPosition;gn!==void 0&&gn.setValue(K,be.setFromMatrixPosition(D.matrixWorld)),Qe.logarithmicDepthBuffer&&Bt.setValue(K,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Bt.setValue(K,"isOrthographic",D.isOrthographicCamera===!0),I!==D&&(I=D,Cn=!0,Vi=!0)}if(Q.isSkinnedMesh){Bt.setOptional(K,Q,"bindMatrix"),Bt.setOptional(K,Q,"bindMatrixInverse");let gn=Q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Bt.setValue(K,"boneTexture",gn.boneTexture,je))}Q.isBatchedMesh&&(Bt.setOptional(K,Q,"batchingTexture"),Bt.setValue(K,"batchingTexture",Q._matricesTexture,je));let Gi=ie.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Oe.update(Q,ie,ai),(Cn||st.receiveShadow!==Q.receiveShadow)&&(st.receiveShadow=Q.receiveShadow,Bt.setValue(K,"receiveShadow",Q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Un.envMap.value=Je,Un.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Cn&&(Bt.setValue(K,"toneMappingExposure",C.toneMappingExposure),st.needsLights&&Yn(Un,Vi),Ie&&J.fog===!0&&he.refreshFogUniforms(Un,Ie),he.refreshMaterialUniforms(Un,J,Se,z,y.state.transmissionRenderTarget[D.id]),zr.upload(K,oi(st),Un,je)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(zr.upload(K,oi(st),Un,je),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Bt.setValue(K,"center",Q.center),Bt.setValue(K,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(K,"normalMatrix",Q.normalMatrix),Bt.setValue(K,"modelMatrix",Q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let gn=J.uniformsGroups;for(let bn=0,zs=gn.length;bn<zs;bn++){let ot=gn[bn];at.update(ot,ai),at.bind(ot,ai)}}return ai}function Yn(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Bs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(D,Y,ie){Ne.get(D.texture).__webglTexture=Y,Ne.get(D.depthTexture).__webglTexture=ie;let J=Ne.get(D);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ie===void 0,J.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Y){let ie=Ne.get(D);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,ie=0){U=D,O=Y,N=ie;let J=!0,Q=null,Ie=!1,Ue=!1;if(D){let Je=Ne.get(D);Je.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(K.FRAMEBUFFER,null),J=!1):Je.__webglFramebuffer===void 0?je.setupRenderTarget(D):Je.__hasExternalTextures&&je.rebindTextures(D,Ne.get(D.texture).__webglTexture,Ne.get(D.depthTexture).__webglTexture);let et=D.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);let nt=Ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?Q=nt[Y][ie]:Q=nt[Y],Ie=!0):D.samples>0&&je.useMultisampledRTT(D)===!1?Q=Ne.get(D).__webglMultisampledFramebuffer:Array.isArray(nt)?Q=nt[ie]:Q=nt,R.copy(D.viewport),q.copy(D.scissor),ee=D.scissorTest}else R.copy(W).multiplyScalar(Se).floor(),q.copy(Le).multiplyScalar(Se).floor(),ee=qe;if(We.bindFramebuffer(K.FRAMEBUFFER,Q)&&J&&We.drawBuffers(D,Q),We.viewport(R),We.scissor(q),We.setScissorTest(ee),Ie){let Je=Ne.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Je.__webglTexture,ie)}else if(Ue){let Je=Ne.get(D.texture),et=Y||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Je.__webglTexture,ie||0,et)}X=-1},this.readRenderTargetPixels=function(D,Y,ie,J,Q,Ie,Ue){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De){We.bindFramebuffer(K.FRAMEBUFFER,De);try{let Je=D.texture,et=Je.format,nt=Je.type;if(!Qe.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-J&&ie>=0&&ie<=D.height-Q&&K.readPixels(Y,ie,J,Q,Re.convert(et),Re.convert(nt),Ie)}finally{let Je=U!==null?Ne.get(U).__webglFramebuffer:null;We.bindFramebuffer(K.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(D,Y,ie=0){let J=Math.pow(2,-ie),Q=Math.floor(Y.image.width*J),Ie=Math.floor(Y.image.height*J);je.setTexture2D(Y,0),K.copyTexSubImage2D(K.TEXTURE_2D,ie,0,0,D.x,D.y,Q,Ie),We.unbindTexture()},this.copyTextureToTexture=function(D,Y,ie,J=0){let Q=Y.image.width,Ie=Y.image.height,Ue=Re.convert(ie.format),De=Re.convert(ie.type);je.setTexture2D(ie,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ie.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ie.unpackAlignment),Y.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,J,D.x,D.y,Q,Ie,Ue,De,Y.image.data):Y.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,J,D.x,D.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ue,Y.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,J,D.x,D.y,Ue,De,Y.image),J===0&&ie.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,ie,J,Q=0){let Ie=D.max.x-D.min.x,Ue=D.max.y-D.min.y,De=D.max.z-D.min.z,Je=Re.convert(J.format),et=Re.convert(J.type),nt;if(J.isData3DTexture)je.setTexture3D(J,0),nt=K.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)je.setTexture2DArray(J,0),nt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,J.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,J.unpackAlignment);let ut=K.getParameter(K.UNPACK_ROW_LENGTH),Vt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Qt=K.getParameter(K.UNPACK_SKIP_PIXELS),on=K.getParameter(K.UNPACK_SKIP_ROWS),Fn=K.getParameter(K.UNPACK_SKIP_IMAGES),bt=ie.isCompressedTexture?ie.mipmaps[Q]:ie.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,bt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,bt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,D.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,D.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,D.min.z),ie.isDataTexture||ie.isData3DTexture?K.texSubImage3D(nt,Q,Y.x,Y.y,Y.z,Ie,Ue,De,Je,et,bt.data):J.isCompressedArrayTexture?K.compressedTexSubImage3D(nt,Q,Y.x,Y.y,Y.z,Ie,Ue,De,Je,bt.data):K.texSubImage3D(nt,Q,Y.x,Y.y,Y.z,Ie,Ue,De,Je,et,bt),K.pixelStorei(K.UNPACK_ROW_LENGTH,ut),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Vt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Qt),K.pixelStorei(K.UNPACK_SKIP_ROWS,on),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Fn),Q===0&&J.generateMipmaps&&K.generateMipmap(nt),We.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?je.setTextureCube(D,0):D.isData3DTexture?je.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?je.setTexture2DArray(D,0):je.setTexture2D(D,0),We.unbindTexture()},this.resetState=function(){O=0,N=0,U=null,We.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_l?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===xa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var Ko=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return of("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new H,Cs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),o=Ct(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wd=new H,bd=new Dt,Ed=new Dt,Sb=new H,Ad=new ht,Ao=new H,Rc=new Tn,Td=new ht,Cc=new ar,Zo=class extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rh,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rc.copy(this.boundingSphere),Rc.applyMatrix4(i),e.ray.intersectsSphere(Rc)!==!1&&(Td.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&Cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$v?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;bd.fromBufferAttribute(i.attributes.skinIndex,e),Ed.fromBufferAttribute(i.attributes.skinWeight,e),wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){let c=Ed.getComponent(o);if(c!==0){let l=bd.getComponent(o);Ad.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Sb.copy(wd).applyMatrix4(Ad),c)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ps=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Jo=class extends tn{constructor(e=null,t=1,n=1,i,o,c,l,d,h=dn,f=dn,m,g){super(null,c,l,d,h,f,i,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rd=new ht,Mb=new ht,Qo=class r{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,c=e.length;o<c;o++){let l=e[o]?e[o].matrixWorld:Mb;Rd.multiplyMatrices(l,t[o]),Rd.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Jo(t,e,e,Xn,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let o=e.bones[n],c=t[o];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),c=new Ps),this.bones.push(c),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,o=t.length;i<o;i++){let c=t[i];e.bones.push(c.uuid);let l=n[i];e.boneInverses.push(l.toArray())}return e}},lr=class extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Dr=new ht,Cd=new ht,To=[],Pd=new xn,wb=new ht,ps=new kt,ms=new Tn,ea=class extends kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Pd.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),ms.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let l=0;l<n.length;l++)n[l]=i[c+l]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),e.ray.intersectsSphere(ms)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Dr),Cd.multiplyMatrices(n,Dr),ps.matrixWorld=Cd,ps.raycast(e,To);for(let c=0,l=To.length;c<l;c++){let d=To[c];d.instanceId=o,d.object=this,t.push(d)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jo(new Float32Array(i*this.count),i,this.count,Kd,ei));let o=this.morphTexture.source.data.data,c=0;for(let h=0;h<n.length;h++)c+=n[h];let l=this.geometry.morphTargetsRelative?1:1-c,d=i*e;o[d]=l,o.set(n,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ur=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ta=new H,na=new H,Id=new ht,gs=new ar,Ro=new Tn,Pc=new H,Ld=new H,Yr=class extends zt{constructor(e=new nn,t=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)ta.fromBufferAttribute(t,i-1),na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ta.distanceTo(na);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=o,e.ray.intersectsSphere(Ro)===!1)return;Id.copy(i).invert(),gs.copy(e.ray).applyMatrix4(Id);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,h=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null){let x=Math.max(0,c.start),M=Math.min(f.count,c.start+c.count);for(let w=x,y=M-1;w<y;w+=h){let v=f.getX(w),L=f.getX(w+1),C=Co(this,e,gs,d,v,L);C&&t.push(C)}if(this.isLineLoop){let w=f.getX(M-1),y=f.getX(x),v=Co(this,e,gs,d,w,y);v&&t.push(v)}}else{let x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let w=x,y=M-1;w<y;w+=h){let v=Co(this,e,gs,d,w,w+1);v&&t.push(v)}if(this.isLineLoop){let w=Co(this,e,gs,d,M-1,x);w&&t.push(w)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=i.length;o<c;o++){let l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};function Co(r,e,t,n,i,o){let c=r.geometry.attributes.position;if(ta.fromBufferAttribute(c,i),na.fromBufferAttribute(c,o),t.distanceSqToSegment(ta,na,Pc,Ld)>n)return;Pc.applyMatrix4(r.matrixWorld);let d=e.ray.origin.distanceTo(Pc);if(!(d<e.near||d>e.far))return{distance:d,point:Ld.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}var Dd=new H,Nd=new H,jr=class extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,o=t.count;i<o;i+=2)Dd.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dd.distanceTo(Nd);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ia=class extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fd=new ht,tl=new ar,Po=new Tn,Io=new H,ra=class extends zt{constructor(e=new nn,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=o,e.ray.intersectsSphere(Po)===!1)return;Fd.copy(i).invert(),tl.copy(e.ray).applyMatrix4(Fd);let l=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,h=n.index,m=n.attributes.position;if(h!==null){let g=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let M=g,w=x;M<w;M++){let y=h.getX(M);Io.fromBufferAttribute(m,y),Ud(Io,y,d,i,e,t,this)}}else{let g=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let M=g,w=x;M<w;M++)Io.fromBufferAttribute(m,M),Ud(Io,M,d,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=i.length;o<c;o++){let l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}};function Ud(r,e,t,n,i,o,c){let l=tl.distanceSqToPoint(r);if(l<t){let d=new H;tl.closestPointToPoint(r,d),d.applyMatrix4(n);let h=i.ray.origin.distanceTo(d);if(h<i.near||h>i.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:d,index:e,face:null,object:c})}}var Ls=class extends tn{constructor(e,t,n,i,o,c,l,d,h){super(e,t,n,i,o,c,l,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ds=class r extends nn{constructor(e=1,t=1,n=1,i=32,o=1,c=!1,l=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:c,thetaStart:l,thetaLength:d};let h=this;i=Math.floor(i),o=Math.floor(o);let f=[],m=[],g=[],x=[],M=0,w=[],y=n/2,v=0;L(),c===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(x,2));function L(){let P=new H,O=new H,N=0,U=(t-e)/n;for(let X=0;X<=o;X++){let I=[],R=X/o,q=R*(t-e)+e;for(let ee=0;ee<=i;ee++){let B=ee/i,Z=B*d+l,oe=Math.sin(Z),z=Math.cos(Z);O.x=q*oe,O.y=-R*n+y,O.z=q*z,m.push(O.x,O.y,O.z),P.set(oe,U,z).normalize(),g.push(P.x,P.y,P.z),x.push(B,1-R),I.push(M++)}w.push(I)}for(let X=0;X<i;X++)for(let I=0;I<o;I++){let R=w[I][X],q=w[I+1][X],ee=w[I+1][X+1],B=w[I][X+1];f.push(R,q,B),f.push(q,ee,B),N+=6}h.addGroup(v,N,0),v+=N}function C(P){let O=M,N=new ct,U=new H,X=0,I=P===!0?e:t,R=P===!0?1:-1;for(let ee=1;ee<=i;ee++)m.push(0,y*R,0),g.push(0,R,0),x.push(.5,.5),M++;let q=M;for(let ee=0;ee<=i;ee++){let Z=ee/i*d+l,oe=Math.cos(Z),z=Math.sin(Z);U.x=I*z,U.y=y*R,U.z=I*oe,m.push(U.x,U.y,U.z),g.push(0,R,0),N.x=oe*.5+.5,N.y=z*.5*R+.5,x.push(N.x,N.y),M++}for(let ee=0;ee<i;ee++){let B=O+ee,Z=q+ee;P===!0?f.push(Z,Z+1,B):f.push(Z+1,Z,B),X+=3}h.addGroup(v,X,P===!0?1:2),v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sa=class r extends Ds{constructor(e=1,t=1,n=32,i=1,o=!1,c=0,l=Math.PI*2){super(0,e,t,n,i,o,c,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:c,thetaLength:l}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Lo=new H,Do=new H,Ic=new H,No=new sr,oa=class extends nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),o=Math.cos(kr*t),c=e.getIndex(),l=e.getAttribute("position"),d=c?c.count:l.count,h=[0,0,0],f=["a","b","c"],m=new Array(3),g={},x=[];for(let M=0;M<d;M+=3){c?(h[0]=c.getX(M),h[1]=c.getX(M+1),h[2]=c.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);let{a:w,b:y,c:v}=No;if(w.fromBufferAttribute(l,h[0]),y.fromBufferAttribute(l,h[1]),v.fromBufferAttribute(l,h[2]),No.getNormal(Ic),m[0]=`${Math.round(w.x*i)},${Math.round(w.y*i)},${Math.round(w.z*i)}`,m[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,m[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let L=0;L<3;L++){let C=(L+1)%3,P=m[L],O=m[C],N=No[f[L]],U=No[f[C]],X=`${P}_${O}`,I=`${O}_${P}`;I in g&&g[I]?(Ic.dot(g[I].normal)<=o&&(x.push(N.x,N.y,N.z),x.push(U.x,U.y,U.z)),g[I]=null):X in g||(g[X]={index0:h[L],index1:h[C],normal:Ic.clone()})}}for(let M in g)if(g[M]){let{index0:w,index1:y}=g[M];Lo.fromBufferAttribute(l,w),Do.fromBufferAttribute(l,y),x.push(Lo.x,Lo.y,Lo.z),x.push(Do.x,Do.y,Do.z)}this.setAttribute("position",new Gt(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var aa=class r extends nn{constructor(e=.5,t=1,n=32,i=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:c},n=Math.max(3,n),i=Math.max(1,i);let l=[],d=[],h=[],f=[],m=e,g=(t-e)/i,x=new H,M=new ct;for(let w=0;w<=i;w++){for(let y=0;y<=n;y++){let v=o+y/n*c;x.x=m*Math.cos(v),x.y=m*Math.sin(v),d.push(x.x,x.y,x.z),h.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,f.push(M.x,M.y)}m+=g}for(let w=0;w<i;w++){let y=w*(n+1);for(let v=0;v<n;v++){let L=v+y,C=L,P=L+n+1,O=L+n+2,N=L+1;l.push(C,P,N),l.push(P,O,N)}}this.setIndex(l),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ca=class extends Sn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ni=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Ni{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Fo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Eb(r){function e(i,o){return r[i]-r[o]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Od(r,e,t){let n=r.length,i=new r.constructor(n);for(let o=0,c=0;c!==n;++o){let l=t[o]*e;for(let d=0;d!==e;++d)i[c++]=r[l+d]}return i}function mf(r,e,t,n){let i=1,o=r[0];for(;o!==void 0&&o[n]===void 0;)o=r[i++];if(o===void 0)return;let c=o[n];if(c!==void 0)if(Array.isArray(c))do c=o[n],c!==void 0&&(e.push(o.time),t.push.apply(t,c)),o=r[i++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[n],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=r[i++];while(o!==void 0);else do c=o[n],c!==void 0&&(e.push(o.time),t.push(c)),o=r[i++];while(o!==void 0)}var Fi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=i,i=t[++n],e<i)break t}c=t.length;break n}if(!(e>=o)){let l=t[1];e<l&&(n=2,o=l);for(let d=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(i=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){let l=n+c>>>1;e<t[l]?c=l:n=l+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let c=0;c!==i;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nl=class extends Fi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,n){let i=this.parameterPositions,o=e-2,c=e+1,l=i[o],d=i[c];if(l===void 0)switch(this.getSettings_().endingStart){case Lh:o=e,l=2*t-n;break;case Dh:o=i.length-2,l=t+i[o]-i[o+1];break;default:o=e,l=n}if(d===void 0)switch(this.getSettings_().endingEnd){case Lh:c=e,d=2*n-t;break;case Dh:c=1,d=n+i[1]-i[0];break;default:c=e-1,d=t}let h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(d-n),this._offsetPrev=o*f,this._offsetNext=c*f}interpolate_(e,t,n,i){let o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=e*l,h=d-l,f=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,x=this._weightNext,M=(n-t)/(i-t),w=M*M,y=w*M,v=-g*y+2*g*w-g*M,L=(1+g)*y+(-1.5-2*g)*w+(-.5+g)*M+1,C=(-1-x)*y+(1.5+x)*w+.5*M,P=x*y-x*w;for(let O=0;O!==l;++O)o[O]=v*c[f+O]+L*c[h+O]+C*c[d+O]+P*c[m+O];return o}},il=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=e*l,h=d-l,f=(n-t)/(i-t),m=1-f;for(let g=0;g!==l;++g)o[g]=c[h+g]*m+c[d+g]*f;return o}},rl=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,o=0,c=i-1;for(;o!==i&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==i){o>=c&&(c=Math.max(c,1),o=c-1);let l=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*l,c*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==o;l++){let d=n[l];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,d,c),e=!1;break}c=d}if(i!==void 0&&bb(i))for(let l=0,d=i.length;l!==d;++l){let h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ic,o=e.length-1,c=1;for(let l=1;l<o;++l){let d=!1,h=e[l],f=e[l+1];if(h!==f&&(l!==1||h!==e[0]))if(i)d=!0;else{let m=l*n,g=m-n,x=m+n;for(let M=0;M!==n;++M){let w=t[m+M];if(w!==t[g+M]||w!==t[x+M]){d=!0;break}}}if(d){if(l!==c){e[c]=e[l];let m=l*n,g=c*n;for(let x=0;x!==n;++x)t[g+x]=t[m+x]}++c}}if(o>0){e[c]=e[o];for(let l=o*n,d=c*n,h=0;h!==n;++h)t[d+h]=t[l+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=or;var Ui=class extends Ln{};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Wr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Ln{};la.prototype.ValueTypeName="color";var yi=class extends Ln{};yi.prototype.ValueTypeName="number";var sl=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=(n-t)/(i-t),h=e*l;for(let f=h+l;h!==f;h+=4)yn.slerpFlat(o,0,c,h-l,c,h,d);return o}},ri=class extends Ln{InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=or;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Ln{};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Wr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends Ln{};xi.prototype.ValueTypeName="vector";var ua=class{constructor(e="",t=-1,n=[],i=ny){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(Tb(n[c]).scale(i));let o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,c=n.length;o!==c;++o)t.push(Ln.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let o=t.length,c=[];for(let l=0;l<o;l++){let d=[],h=[];d.push((l+o-1)%o,l,(l+1)%o),h.push(0,1,0);let f=Eb(d);d=Od(d,1,f),h=Od(h,1,f),!i&&d[0]===0&&(d.push(o),h.push(h[0])),c.push(new yi(".morphTargetInfluences["+t[l].name+"]",d,h).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,d=e.length;l<d;l++){let h=e[l],f=h.name.match(o);if(f&&f.length>1){let m=f[1],g=i[m];g||(i[m]=g=[]),g.push(h)}}let c=[];for(let l in i)c.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(m,g,x,M,w){if(x.length!==0){let y=[],v=[];mf(x,y,v,M),y.length!==0&&w.push(new m(g,y,v))}},i=[],o=e.name||"default",c=e.fps||30,l=e.blendMode,d=e.length||-1,h=e.hierarchy||[];for(let m=0;m<h.length;m++){let g=h[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){let x={},M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let w=0;w<g[M].morphTargets.length;w++)x[g[M].morphTargets[w]]=-1;for(let w in x){let y=[],v=[];for(let L=0;L!==g[M].morphTargets.length;++L){let C=g[M];y.push(C.time),v.push(C.morphTarget===w?1:0)}i.push(new yi(".morphTargetInfluence["+w+"]",y,v))}d=x.length*c}else{let x=".bones["+t[m].name+"]";n(xi,x+".position",g,"pos",i),n(ri,x+".quaternion",g,"rot",i),n(xi,x+".scale",g,"scl",i)}}return i.length===0?null:new this(o,d,i,l)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ab(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return xi;case"color":return la;case"quaternion":return ri;case"bool":case"boolean":return Ui;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Tb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ab(r.type);if(r.times===void 0){let t=[],n=[];mf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Ci={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ol=class{constructor(e,t,n){let i=this,o=!1,c=0,l=0,d,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){l++,o===!1&&i.onStart!==void 0&&i.onStart(f,c,l),o=!0},this.itemEnd=function(f){c++,i.onProgress!==void 0&&i.onProgress(f,c,l),c===l&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return d?d(f):f},this.setURLModifier=function(f){return d=f,this},this.addHandler=function(f,m){return h.push(f,m),this},this.removeHandler=function(f){let m=h.indexOf(f);return m!==-1&&h.splice(m,2),this},this.getHandler=function(f){for(let m=0,g=h.length;m<g;m+=2){let x=h[m],M=h[m+1];if(x.global&&(x.lastIndex=0),x.test(f))return M}return null}}},Rb=new ol,qn=class{constructor(e){this.manager=e!==void 0?e:Rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},al=class extends Error{constructor(e,t){super(e),this.response=t}},hr=class extends qn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=Ci.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});let c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let f=fi[e],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=g?parseInt(g):0,M=x!==0,w=0,y=new ReadableStream({start(v){L();function L(){m.read().then(({done:C,value:P})=>{if(C)v.close();else{w+=P.byteLength;let O=new ProgressEvent("progress",{lengthComputable:M,loaded:w,total:x});for(let N=0,U=f.length;N<U;N++){let X=f[N];X.onProgress&&X.onProgress(O)}v.enqueue(P),L()}})}}});return new Response(y)}else throw new al(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,l));case"json":return h.json();default:if(l===void 0)return h.text();{let m=/charset="?([^;"\s]*)"?/i.exec(l),g=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(g);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{Ci.add(e,h);let f=fi[e];delete fi[e];for(let m=0,g=f.length;m<g;m++){let x=f[m];x.onLoad&&x.onLoad(h)}}).catch(h=>{let f=fi[e];if(f===void 0)throw this.manager.itemError(e),h;delete fi[e];for(let m=0,g=f.length;m<g;m++){let x=f[m];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var cl=class extends qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,c=Ci.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;let l=bs("img");function d(){f(),Ci.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(m){f(),i&&i(m),o.manager.itemError(e),o.manager.itemEnd(e)}function f(){l.removeEventListener("load",d,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",d,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}};var ha=class extends qn{constructor(e){super(e)}load(e,t,n,i){let o=new tn,c=new cl(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}},Kr=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},da=class extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lc=new ht,kd=new H,Bd=new H,Ns=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ll=class extends Ns{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fa=class extends Kr{constructor(e,t,n=0,i=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new ll}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zd=new ht,_s=new H,Dc=new H,ul=class extends Ns{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),i.makeTranslation(-_s.x,-_s.y,-_s.z),zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd)}},pa=class extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ul}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hl=class extends Ns{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new hl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ki=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ma=class extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,c=Ci.get(e);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),o.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;let d=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ci.add(e,h),t&&t(h),o.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Ci.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Ci.add(e,d),o.manager.itemStart(e)}};var xl="\\[\\]\\.:\\/",Cb=new RegExp("["+xl+"]","g"),Sl="[^"+xl+"]",Pb="[^"+xl.replace("\\.","")+"]",Ib=/((?:WC+[\/:])*)/.source.replace("WC",Sl),Lb=/(WCOD+)?/.source.replace("WCOD",Pb),Db=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),Nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),Fb=new RegExp("^"+Ib+Lb+Db+Nb+"$"),Ub=["material","materials","bones","map"],dl=class{constructor(e,t,n){let i=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){let t=Fb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let o=n.nodeName.substring(i+1);Ub.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let c=0;c<o.length;c++){let l=o[c];if(l.name===t||l.uuid===t)return l;let d=n(l.children);if(d)return d}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,o=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let c=e[i];if(c===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=i;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=dl;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hE=new Float32Array(1);var Hd=new ht,ga=class{constructor(e,t,n=0,i=1/0){this.ray=new ar(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(e,t=!0,n=[]){return fl(e,this,n,t),n.sort(Vd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)fl(e[i],this,n,t);return n.sort(Vd),n}};function Vd(r,e){return r.distance-e.distance}function fl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let o=0,c=i.length;o<c;o++)fl(i[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");var Ob=(async function(r={}){var e,t=r,n=typeof window=="object",i=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!i;if(o){let{createRequire:s}=await import("module");var l=s(import.meta.url)}var d=[],h="./this.program",f=(s,a)=>{throw a},m=import.meta.url,g="";function x(s){return t.locateFile?t.locateFile(s,g):g+s}var M,w;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var y=process.versions.node,v=y.split(".").slice(0,3);if(v=v[0]*1e4+v[1]*100+v[2].split("-")[0]*1,v<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+y+")");var L=l("fs");m.startsWith("file:")&&(g=l("path").dirname(l("url").fileURLToPath(m))+"/"),w=a=>{a=Se(a)?new URL(a):a;var u=L.readFileSync(a);return z(Buffer.isBuffer(u)),u},M=async(a,u=!0)=>{a=Se(a)?new URL(a):a;var p=L.readFileSync(a,u?void 0:"utf8");return z(u?Buffer.isBuffer(p):typeof p=="string"),p},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),d=process.argv.slice(2),f=(a,u)=>{throw process.exitCode=a,u}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||i){try{g=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");i&&(w=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),M=async s=>{if(Se(s))return new Promise((u,p)=>{var _=new XMLHttpRequest;_.open("GET",s,!0),_.responseType="arraybuffer",_.onload=()=>{if(_.status==200||_.status==0&&_.response){u(_.response);return}p(_.status)},_.onerror=p,_.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var C=console.log.bind(console),P=console.error.bind(console),O="IDBFS is no longer included by default; build with -lidbfs.js",N="PROXYFS is no longer included by default; build with -lproxyfs.js",U="WORKERFS is no longer included by default; build with -lworkerfs.js",X="FETCHFS is no longer included by default; build with -lfetchfs.js",I="ICASEFS is no longer included by default; build with -licasefs.js",R="JSFILEFS is no longer included by default; build with -ljsfilefs.js",q="OPFS is no longer included by default; build with -lopfs.js",ee="NODEFS is no longer included by default; build with -lnodefs.js";z(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var B;typeof WebAssembly!="object"&&P("no native wasm support detected");var Z=!1,oe;function z(s,a){s||Fe("Assertion failed"+(a?": "+a:""))}var Se=s=>s.startsWith("file://");function te(){var s=ja();z((s&3)==0),s==0&&(s+=4),$[s>>2]=34821223,$[s+4>>2]=2310721022,$[0]=1668509029}function xe(){if(!Z){var s=ja();s==0&&(s+=4);var a=$[s>>2],u=$[s+4>>2];(a!=34821223||u!=2310721022)&&Fe(`Stack overflow! Stack cookie has been overwritten at ${wn(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${wn(u)} ${wn(a)}`),$[0]!=1668509029&&Fe("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class W extends Error{}class Le extends W{}class qe extends W{constructor(a){super(a),this.excPtr=a;let u=Bu(a);this.name=u[0],this.message=u[1]}}var Ye=!0;function re(...s){!Ye&&typeof Ye<"u"||console.warn(...s)}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ye(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){Fe(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Me(s){return()=>z(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function be(s){Object.getOwnPropertyDescriptor(t,s)&&Fe(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function Ve(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function lt(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function K(s,a){lt(s,()=>{Yn(`\`${s}\` is not longer defined by emscripten. ${a}`)})}K("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),K("asm","Please use wasmExports instead");function wt(s){lt(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,Ve(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Yn(a)}),Be(s)}function Be(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Ve(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Fe(a)}})}var Qe,We,it,Ne,je,yt,k,A,$,le,me,he,ze,Ee=!1;function Te(){var s=it.buffer;Ne=new Int8Array(s),yt=new Int16Array(s),je=new Uint8Array(s),k=new Uint16Array(s),A=new Int32Array(s),$=new Uint32Array(s),le=new Float32Array(s),me=new Float64Array(s),he=new BigInt64Array(s),ze=new BigUint64Array(s)}z(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function tt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)St(t.preRun.shift());ye("preRun"),ke(Ht)}function we(){z(!Ee),Ee=!0,xe(),!t.noFSInit&&!E.initialized&&E.init(),bn.init(),Yi.__wasm_call_ctors(),E.ignorePermissions=!1}function Oe(){if(xe(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)xt(t.postRun.shift());ye("postRun"),ke(Ze)}var rt=0,He=null,Re={},Ke=null;function at(s){rt++,t.monitorRunDependencies?.(rt),s?(z(!Re[s]),Re[s]=1,Ke===null&&typeof setInterval<"u"&&(Ke=setInterval(()=>{if(Z){clearInterval(Ke),Ke=null;return}var a=!1;for(var u in Re)a||(a=!0,P("still waiting on run dependencies:")),P(`dependency: ${u}`);a&&P("(end of list)")},1e4))):P("warning: run dependency added without ID")}function Rt(s){if(rt--,t.monitorRunDependencies?.(rt),s?(z(Re[s]),delete Re[s]):P("warning: run dependency removed without ID"),rt==0&&(Ke!==null&&(clearInterval(Ke),Ke=null),He)){var a=He;He=null,a()}}function Fe(s){t.onAbort?.(s),s="Aborted("+s+")",P(s),Z=!0;var a=new WebAssembly.RuntimeError(s);throw We?.(a),a}function G(s,a){return(...u)=>{z(Ee,`native function \`${s}\` called before runtime initialization`);var p=Yi[s];return z(p,`exported native function \`${s}\` not found`),z(u.length<=a,`native function \`${s}\` called with ${u.length} args but expects ${a}`),p(...u)}}var ue;function ce(){return t.locateFile?x("mujoco.wasm"):new URL("mujoco.wasm",import.meta.url).href}function Ae(s){if(s==ue&&B)return new Uint8Array(B);if(w)return w(s);throw"both async and sync fetching of the wasm failed"}async function Pe(s){if(!B)try{var a=await M(s);return new Uint8Array(a)}catch{}return Ae(s)}async function gt(s,a){try{var u=await Pe(s),p=await WebAssembly.instantiate(u,a);return p}catch(_){P(`failed to asynchronously prepare wasm: ${_}`),Se(ue)&&P(`warning: Loading from a file URI (${ue}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Fe(_)}}async function Tt(s,a,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!Se(a)&&!o)try{var p=fetch(a,{credentials:"same-origin"}),_=await WebAssembly.instantiateStreaming(p,u);return _}catch(S){P(`wasm streaming compile failed: ${S}`),P("falling back to ArrayBuffer instantiation")}return gt(a,u)}function Lt(){return{env:Zu,wasi_snapshot_preview1:Zu}}async function Wt(){function s(b,T){return Yi=b.exports,it=Yi.memory,z(it,"memory not found in wasm exports"),Te(),Zs=Yi.__indirect_function_table,z(Zs,"table not found in wasm exports"),cg(Yi),Rt("wasm-instantiate"),Yi}at("wasm-instantiate");var a=t;function u(b){return z(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(b.instance)}var p=Lt();if(t.instantiateWasm)return new Promise((b,T)=>{try{t.instantiateWasm(p,(F,V)=>{b(s(F,V))})}catch(F){P(`Module.instantiateWasm callback failed with error: ${F}`),T(F)}});ue??=ce();var _=await Tt(B,ue,p),S=u(_);return S}class de{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var ke=s=>{for(;s.length>0;)s.shift()(t)},Ze=[],xt=s=>Ze.push(s),Ht=[],St=s=>Ht.push(s);function Xt(s,a="i8"){switch(a.endsWith("*")&&(a="*"),a){case"i1":return Ne[s];case"i8":return Ne[s];case"i16":return yt[s>>1];case"i32":return A[s>>2];case"i64":return he[s>>3];case"float":return le[s>>2];case"double":return me[s>>3];case"*":return $[s>>2];default:Fe(`invalid type for getValue: ${a}`)}}var Et=!0,wn=s=>(z(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0"));function oi(s,a,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":Ne[s]=a;break;case"i8":Ne[s]=a;break;case"i16":yt[s>>1]=a;break;case"i32":A[s>>2]=a;break;case"i64":he[s>>3]=BigInt(a);break;case"float":le[s>>2]=a;break;case"double":me[s>>3]=a;break;case"*":$[s>>2]=a;break;default:Fe(`invalid type for setValue: ${u}`)}}var fe=s=>Xu(s),pe=()=>qu(),Yn=s=>{Yn.shown||={},Yn.shown[s]||(Yn.shown[s]=1,o&&(s="warning: "+s),P(s))},Bs=typeof TextDecoder<"u"?new TextDecoder:void 0,D=(s,a=0,u=NaN)=>{for(var p=a+u,_=a;s[_]&&!(_>=p);)++_;if(_-a>16&&s.buffer&&Bs)return Bs.decode(s.subarray(a,_));for(var S="";a<_;){var b=s[a++];if(!(b&128)){S+=String.fromCharCode(b);continue}var T=s[a++]&63;if((b&224)==192){S+=String.fromCharCode((b&31)<<6|T);continue}var F=s[a++]&63;if((b&240)==224?b=(b&15)<<12|T<<6|F:((b&248)!=240&&Yn("Invalid UTF-8 leading byte "+wn(b)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),b=(b&7)<<18|T<<12|F<<6|s[a++]&63),b<65536)S+=String.fromCharCode(b);else{var V=b-65536;S+=String.fromCharCode(55296|V>>10,56320|V&1023)}}return S},Y=(s,a)=>(z(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?D(je,s,a):""),ie=(s,a,u,p)=>Fe(`Assertion failed: ${Y(s)}, at: `+[a?Y(a):"unknown filename",u,p?Y(p):"unknown function"]),J=[],Q=0,Ie=s=>{var a=new et(s);return a.get_caught()||(a.set_caught(!0),Q--),a.set_rethrown(!1),J.push(a),io(s),Ku(s)},Ue=()=>{if(!J.length)return 0;var s=J[J.length-1];return io(s.excPtr),s.excPtr},De=0,Je=()=>{_e(0,0),z(J.length>0);var s=J.pop();Ka(s.excPtr),De=0};class et{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){$[this.ptr+4>>2]=a}get_type(){return $[this.ptr+4>>2]}set_destructor(a){$[this.ptr+8>>2]=a}get_destructor(){return $[this.ptr+8>>2]}set_caught(a){a=a?1:0,Ne[this.ptr+12]=a}get_caught(){return Ne[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,Ne[this.ptr+13]=a}get_rethrown(){return Ne[this.ptr+13]!=0}init(a,u){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(u)}set_adjusted_ptr(a){$[this.ptr+16>>2]=a}get_adjusted_ptr(){return $[this.ptr+16>>2]}}var nt=s=>Gu(s),ut=s=>{var a=De?.excPtr;if(!a)return nt(0),0;var u=new et(a);u.set_adjusted_ptr(a);var p=u.get_type();if(!p)return nt(0),a;for(var _ of s){if(_===0||_===p)break;var S=u.ptr+16;if(ju(_,p,S))return nt(_),a}return nt(p),a},Vt=()=>ut([]),Qt=s=>ut([s]),on=()=>{var s=J.pop();s||Fe("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(J.push(s),s.set_rethrown(!0),s.set_caught(!1),Q++),De=new qe(a),De},Fn=s=>{if(s){var a=new et(s);J.push(a),a.set_rethrown(!0),on()}},bt=(s,a,u)=>{var p=new et(s);throw p.init(a,u),De=new qe(s),Q++,De},st=()=>Q,Hi=s=>{throw De||(De=new qe(s)),De},Xe={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var u=0,p=s.length-1;p>=0;p--){var _=s[p];_==="."?s.splice(p,1):_===".."?(s.splice(p,1),u++):u&&(s.splice(p,1),u--)}if(a)for(;u;u--)s.unshift("..");return s},normalize:s=>{var a=Xe.isAbs(s),u=s.slice(-1)==="/";return s=Xe.normalizeArray(s.split("/").filter(p=>!!p),!a).join("/"),!s&&!a&&(s="."),s&&u&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=Xe.splitPath(s),u=a[0],p=a[1];return!u&&!p?".":(p&&(p=p.slice(0,-1)),u+p)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Xe.normalize(s.join("/")),join2:(s,a)=>Xe.normalize(s+"/"+a)},ai=()=>{if(o){var s=l("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},ss=s=>{(ss=ai())(s)},Cn={resolve:(...s)=>{for(var a="",u=!1,p=s.length-1;p>=-1&&!u;p--){var _=p>=0?s[p]:E.cwd();if(typeof _!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!_)return"";a=_+"/"+a,u=Xe.isAbs(_)}return a=Xe.normalizeArray(a.split("/").filter(S=>!!S),!u).join("/"),(u?"/":"")+a||"."},relative:(s,a)=>{s=Cn.resolve(s).slice(1),a=Cn.resolve(a).slice(1);function u(V){for(var j=0;j<V.length&&V[j]==="";j++);for(var ne=V.length-1;ne>=0&&V[ne]==="";ne--);return j>ne?[]:V.slice(j,ne-j+1)}for(var p=u(s.split("/")),_=u(a.split("/")),S=Math.min(p.length,_.length),b=S,T=0;T<S;T++)if(p[T]!==_[T]){b=T;break}for(var F=[],T=b;T<p.length;T++)F.push("..");return F=F.concat(_.slice(b)),F.join("/")}},Vi=[],Bt=s=>{for(var a=0,u=0;u<s.length;++u){var p=s.charCodeAt(u);p<=127?a++:p<=2047?a+=2:p>=55296&&p<=57343?(a+=4,++u):a+=3}return a},Un=(s,a,u,p)=>{if(z(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(p>0))return 0;for(var _=u,S=u+p-1,b=0;b<s.length;++b){var T=s.codePointAt(b);if(T<=127){if(u>=S)break;a[u++]=T}else if(T<=2047){if(u+1>=S)break;a[u++]=192|T>>6,a[u++]=128|T&63}else if(T<=65535){if(u+2>=S)break;a[u++]=224|T>>12,a[u++]=128|T>>6&63,a[u++]=128|T&63}else{if(u+3>=S)break;T>1114111&&Yn("Invalid Unicode code point "+wn(T)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[u++]=240|T>>18,a[u++]=128|T>>12&63,a[u++]=128|T>>6&63,a[u++]=128|T&63,b++}}return a[u]=0,u-_},Gi=(s,a,u)=>{var p=u>0?u:Bt(s)+1,_=new Array(p),S=Un(s,_,0,_.length);return a&&(_.length=S),_},gn=()=>{if(!Vi.length){var s=null;if(o){var a=256,u=Buffer.alloc(a),p=0,_=process.stdin.fd;try{p=L.readSync(_,u,0,a)}catch(S){if(S.toString().includes("EOF"))p=0;else throw S}p>0&&(s=u.slice(0,p).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Vi=Gi(s,!0)}return Vi.shift()},bn={ttys:[],init(){},shutdown(){},register(s,a){bn.ttys[s]={input:[],output:[],ops:a},E.registerDevice(s,bn.stream_ops)},stream_ops:{open(s){var a=bn.ttys[s.node.rdev];if(!a)throw new E.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,u,p,_){if(!s.tty||!s.tty.ops.get_char)throw new E.ErrnoError(60);for(var S=0,b=0;b<p;b++){var T;try{T=s.tty.ops.get_char(s.tty)}catch{throw new E.ErrnoError(29)}if(T===void 0&&S===0)throw new E.ErrnoError(6);if(T==null)break;S++,a[u+b]=T}return S&&(s.node.atime=Date.now()),S},write(s,a,u,p,_){if(!s.tty||!s.tty.ops.put_char)throw new E.ErrnoError(60);try{for(var S=0;S<p;S++)s.tty.ops.put_char(s.tty,a[u+S])}catch{throw new E.ErrnoError(29)}return p&&(s.node.mtime=s.node.ctime=Date.now()),S}},default_tty_ops:{get_char(s){return gn()},put_char(s,a){a===null||a===10?(C(D(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){s.output?.length>0&&(C(D(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(P(D(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){s.output?.length>0&&(P(D(s.output)),s.output=[])}}},zs=s=>{Fe("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},ot={ops_table:null,mount(s){return ot.createNode(null,"/",16895,0)},createNode(s,a,u,p){if(E.isBlkdev(u)||E.isFIFO(u))throw new E.ErrnoError(63);ot.ops_table||={dir:{node:{getattr:ot.node_ops.getattr,setattr:ot.node_ops.setattr,lookup:ot.node_ops.lookup,mknod:ot.node_ops.mknod,rename:ot.node_ops.rename,unlink:ot.node_ops.unlink,rmdir:ot.node_ops.rmdir,readdir:ot.node_ops.readdir,symlink:ot.node_ops.symlink},stream:{llseek:ot.stream_ops.llseek}},file:{node:{getattr:ot.node_ops.getattr,setattr:ot.node_ops.setattr},stream:{llseek:ot.stream_ops.llseek,read:ot.stream_ops.read,write:ot.stream_ops.write,mmap:ot.stream_ops.mmap,msync:ot.stream_ops.msync}},link:{node:{getattr:ot.node_ops.getattr,setattr:ot.node_ops.setattr,readlink:ot.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ot.node_ops.getattr,setattr:ot.node_ops.setattr},stream:E.chrdev_stream_ops}};var _=E.createNode(s,a,u,p);return E.isDir(_.mode)?(_.node_ops=ot.ops_table.dir.node,_.stream_ops=ot.ops_table.dir.stream,_.contents={}):E.isFile(_.mode)?(_.node_ops=ot.ops_table.file.node,_.stream_ops=ot.ops_table.file.stream,_.usedBytes=0,_.contents=null):E.isLink(_.mode)?(_.node_ops=ot.ops_table.link.node,_.stream_ops=ot.ops_table.link.stream):E.isChrdev(_.mode)&&(_.node_ops=ot.ops_table.chrdev.node,_.stream_ops=ot.ops_table.chrdev.stream),_.atime=_.mtime=_.ctime=Date.now(),s&&(s.contents[a]=_,s.atime=s.mtime=s.ctime=_.atime),_},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var u=s.contents?s.contents.length:0;if(!(u>=a)){var p=1024*1024;a=Math.max(a,u*(u<p?2:1.125)>>>0),u!=0&&(a=Math.max(a,256));var _=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(_.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(a),u&&s.contents.set(u.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=E.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,E.isDir(s.mode)?a.size=4096:E.isFile(s.mode)?a.size=s.usedBytes:E.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(let u of["mode","atime","mtime","ctime"])a[u]!=null&&(s[u]=a[u]);a.size!==void 0&&ot.resizeFileStorage(s,a.size)},lookup(s,a){throw new E.ErrnoError(44)},mknod(s,a,u,p){return ot.createNode(s,a,u,p)},rename(s,a,u){var p;try{p=E.lookupNode(a,u)}catch{}if(p){if(E.isDir(s.mode))for(var _ in p.contents)throw new E.ErrnoError(55);E.hashRemoveNode(p)}delete s.parent.contents[s.name],a.contents[u]=s,s.name=u,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var u=E.lookupNode(s,a);for(var p in u.contents)throw new E.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,u){var p=ot.createNode(s,a,41471,0);return p.link=u,p},readlink(s){if(!E.isLink(s.mode))throw new E.ErrnoError(28);return s.link}},stream_ops:{read(s,a,u,p,_){var S=s.node.contents;if(_>=s.node.usedBytes)return 0;var b=Math.min(s.node.usedBytes-_,p);if(z(b>=0),b>8&&S.subarray)a.set(S.subarray(_,_+b),u);else for(var T=0;T<b;T++)a[u+T]=S[_+T];return b},write(s,a,u,p,_,S){if(z(!(a instanceof ArrayBuffer)),a.buffer===Ne.buffer&&(S=!1),!p)return 0;var b=s.node;if(b.mtime=b.ctime=Date.now(),a.subarray&&(!b.contents||b.contents.subarray)){if(S)return z(_===0,"canOwn must imply no weird position inside the file"),b.contents=a.subarray(u,u+p),b.usedBytes=p,p;if(b.usedBytes===0&&_===0)return b.contents=a.slice(u,u+p),b.usedBytes=p,p;if(_+p<=b.usedBytes)return b.contents.set(a.subarray(u,u+p),_),p}if(ot.expandFileStorage(b,_+p),b.contents.subarray&&a.subarray)b.contents.set(a.subarray(u,u+p),_);else for(var T=0;T<p;T++)b.contents[_+T]=a[u+T];return b.usedBytes=Math.max(b.usedBytes,_+p),p},llseek(s,a,u){var p=a;if(u===1?p+=s.position:u===2&&E.isFile(s.node.mode)&&(p+=s.node.usedBytes),p<0)throw new E.ErrnoError(28);return p},mmap(s,a,u,p,_){if(!E.isFile(s.node.mode))throw new E.ErrnoError(43);var S,b,T=s.node.contents;if(!(_&2)&&T&&T.buffer===Ne.buffer)b=!1,S=T.byteOffset;else{if(b=!0,S=zs(a),!S)throw new E.ErrnoError(48);T&&((u>0||u+a<T.length)&&(T.subarray?T=T.subarray(u,u+a):T=Array.prototype.slice.call(T,u,u+a)),Ne.set(T,S))}return{ptr:S,allocated:b}},msync(s,a,u,p,_){return ot.stream_ops.write(s,a,0,p,u,!1),0}}},zf=async s=>{var a=await M(s);return z(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},lu=(...s)=>E.createDataFile(...s),Hf=s=>{for(var a=s;;){if(!Re[s])return s;s=a+Math.random()}},uu=[],Vf=(s,a,u,p)=>{typeof Browser<"u"&&Browser.init();var _=!1;return uu.forEach(S=>{_||S.canHandle(a)&&(S.handle(s,a,u,p),_=!0)}),_},hu=(s,a,u,p,_,S,b,T,F,V)=>{var j=a?Cn.resolve(Xe.join2(s,a)):s,ne=Hf(`cp ${j}`);function ae(se){function ge(Ge){V?.(),T||lu(s,a,Ge,p,_,F),S?.(),Rt(ne)}Vf(se,j,ge,()=>{b?.(),Rt(ne)})||ge(se)}at(ne),typeof u=="string"?zf(u).then(ae,b):ae(u)},Gf=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=a[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},Ua=(s,a)=>{var u=0;return s&&(u|=365),a&&(u|=146),u},Wf=s=>Y(Vu(s)),du={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},E={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(s){super(Ee?Wf(s):""),this.errno=s;for(var a in du)if(du[a]===s){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,a,u,p){s||(s=this),this.parent=s,this.mount=s.mount,this.id=E.nextInode++,this.name=a,this.mode=u,this.rdev=p,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return E.isDir(this.mode)}get isDevice(){return E.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new E.ErrnoError(44);a.follow_mount??=!0,Xe.isAbs(s)||(s=E.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var p=s.split("/").filter(V=>!!V),_=E.root,S="/",b=0;b<p.length;b++){var T=b===p.length-1;if(T&&a.parent)break;if(p[b]!=="."){if(p[b]===".."){if(S=Xe.dirname(S),E.isRoot(_)){s=S+"/"+p.slice(b+1).join("/");continue e}else _=_.parent;continue}S=Xe.join2(S,p[b]);try{_=E.lookupNode(_,p[b])}catch(V){if(V?.errno===44&&T&&a.noent_okay)return{path:S};throw V}if(E.isMountpoint(_)&&(!T||a.follow_mount)&&(_=_.mounted.root),E.isLink(_.mode)&&(!T||a.follow)){if(!_.node_ops.readlink)throw new E.ErrnoError(52);var F=_.node_ops.readlink(_);Xe.isAbs(F)||(F=Xe.dirname(S)+"/"+F),s=F+"/"+p.slice(b+1).join("/");continue e}}}return{path:S,node:_}}throw new E.ErrnoError(32)},getPath(s){for(var a;;){if(E.isRoot(s)){var u=s.mount.mountpoint;return a?u[u.length-1]!=="/"?`${u}/${a}`:u+a:u}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var u=0,p=0;p<a.length;p++)u=(u<<5)-u+a.charCodeAt(p)|0;return(s+u>>>0)%E.nameTable.length},hashAddNode(s){var a=E.hashName(s.parent.id,s.name);s.name_next=E.nameTable[a],E.nameTable[a]=s},hashRemoveNode(s){var a=E.hashName(s.parent.id,s.name);if(E.nameTable[a]===s)E.nameTable[a]=s.name_next;else for(var u=E.nameTable[a];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,a){var u=E.mayLookup(s);if(u)throw new E.ErrnoError(u);for(var p=E.hashName(s.id,a),_=E.nameTable[p];_;_=_.name_next){var S=_.name;if(_.parent.id===s.id&&S===a)return _}return E.lookup(s,a)},createNode(s,a,u,p){z(typeof s=="object");var _=new E.FSNode(s,a,u,p);return E.hashAddNode(_),_},destroyNode(s){E.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return E.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!E.isDir(s.mode))return 54;var a=E.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!E.isDir(s.mode))return 54;try{var u=E.lookupNode(s,a);return 20}catch{}return E.nodePermissions(s,"wx")},mayDelete(s,a,u){var p;try{p=E.lookupNode(s,a)}catch(S){return S.errno}var _=E.nodePermissions(s,"wx");if(_)return _;if(u){if(!E.isDir(p.mode))return 54;if(E.isRoot(p)||E.getPath(p)===E.cwd())return 10}else if(E.isDir(p.mode))return 31;return 0},mayOpen(s,a){return s?E.isLink(s.mode)?32:E.isDir(s.mode)&&(E.flagsToPermissionString(a)!=="r"||a&576)?31:E.nodePermissions(s,E.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new E.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=E.MAX_OPEN_FDS;s++)if(!E.streams[s])return s;throw new E.ErrnoError(33)},getStreamChecked(s){var a=E.getStream(s);if(!a)throw new E.ErrnoError(8);return a},getStream:s=>E.streams[s],createStream(s,a=-1){return z(a>=-1),s=Object.assign(new E.FSStream,s),a==-1&&(a=E.nextfd()),s.fd=a,E.streams[a]=s,s},closeStream(s){E.streams[s]=null},dupStream(s,a=-1){var u=E.createStream(s,a);return u.stream_ops?.dup?.(u),u},doSetAttr(s,a,u){var p=s?.stream_ops.setattr,_=p?s:a;p??=a.node_ops.setattr,E.checkOpExists(p,63),p(_,u)},chrdev_stream_ops:{open(s){var a=E.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new E.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){E.devices[s]={stream_ops:a}},getDevice:s=>E.devices[s],getMounts(s){for(var a=[],u=[s];u.length;){var p=u.pop();a.push(p),u.push(...p.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),E.syncFSRequests++,E.syncFSRequests>1&&P(`warning: ${E.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=E.getMounts(E.root.mount),p=0;function _(b){return z(E.syncFSRequests>0),E.syncFSRequests--,a(b)}function S(b){if(b)return S.errored?void 0:(S.errored=!0,_(b));++p>=u.length&&_(null)}u.forEach(b=>{if(!b.type.syncfs)return S(null);b.type.syncfs(b,s,S)})},mount(s,a,u){if(typeof s=="string")throw s;var p=u==="/",_=!u,S;if(p&&E.root)throw new E.ErrnoError(10);if(!p&&!_){var b=E.lookupPath(u,{follow_mount:!1});if(u=b.path,S=b.node,E.isMountpoint(S))throw new E.ErrnoError(10);if(!E.isDir(S.mode))throw new E.ErrnoError(54)}var T={type:s,opts:a,mountpoint:u,mounts:[]},F=s.mount(T);return F.mount=T,T.root=F,p?E.root=F:S&&(S.mounted=T,S.mount&&S.mount.mounts.push(T)),F},unmount(s){var a=E.lookupPath(s,{follow_mount:!1});if(!E.isMountpoint(a.node))throw new E.ErrnoError(28);var u=a.node,p=u.mounted,_=E.getMounts(p);Object.keys(E.nameTable).forEach(b=>{for(var T=E.nameTable[b];T;){var F=T.name_next;_.includes(T.mount)&&E.destroyNode(T),T=F}}),u.mounted=null;var S=u.mount.mounts.indexOf(p);z(S!==-1),u.mount.mounts.splice(S,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,u){var p=E.lookupPath(s,{parent:!0}),_=p.node,S=Xe.basename(s);if(!S)throw new E.ErrnoError(28);if(S==="."||S==="..")throw new E.ErrnoError(20);var b=E.mayCreate(_,S);if(b)throw new E.ErrnoError(b);if(!_.node_ops.mknod)throw new E.ErrnoError(63);return _.node_ops.mknod(_,S,a,u)},statfs(s){return E.statfsNode(E.lookupPath(s,{follow:!0}).node)},statfsStream(s){return E.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:E.nextInode,ffree:E.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,E.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,E.mknod(s,a,0)},mkdirTree(s,a){var u=s.split("/"),p="";for(var _ of u)if(_){(p||Xe.isAbs(s))&&(p+="/"),p+=_;try{E.mkdir(p,a)}catch(S){if(S.errno!=20)throw S}}},mkdev(s,a,u){return typeof u>"u"&&(u=a,a=438),a|=8192,E.mknod(s,a,u)},symlink(s,a){if(!Cn.resolve(s))throw new E.ErrnoError(44);var u=E.lookupPath(a,{parent:!0}),p=u.node;if(!p)throw new E.ErrnoError(44);var _=Xe.basename(a),S=E.mayCreate(p,_);if(S)throw new E.ErrnoError(S);if(!p.node_ops.symlink)throw new E.ErrnoError(63);return p.node_ops.symlink(p,_,s)},rename(s,a){var u=Xe.dirname(s),p=Xe.dirname(a),_=Xe.basename(s),S=Xe.basename(a),b,T,F;if(b=E.lookupPath(s,{parent:!0}),T=b.node,b=E.lookupPath(a,{parent:!0}),F=b.node,!T||!F)throw new E.ErrnoError(44);if(T.mount!==F.mount)throw new E.ErrnoError(75);var V=E.lookupNode(T,_),j=Cn.relative(s,p);if(j.charAt(0)!==".")throw new E.ErrnoError(28);if(j=Cn.relative(a,u),j.charAt(0)!==".")throw new E.ErrnoError(55);var ne;try{ne=E.lookupNode(F,S)}catch{}if(V!==ne){var ae=E.isDir(V.mode),se=E.mayDelete(T,_,ae);if(se)throw new E.ErrnoError(se);if(se=ne?E.mayDelete(F,S,ae):E.mayCreate(F,S),se)throw new E.ErrnoError(se);if(!T.node_ops.rename)throw new E.ErrnoError(63);if(E.isMountpoint(V)||ne&&E.isMountpoint(ne))throw new E.ErrnoError(10);if(F!==T&&(se=E.nodePermissions(T,"w"),se))throw new E.ErrnoError(se);E.hashRemoveNode(V);try{T.node_ops.rename(V,F,S),V.parent=F}catch(ge){throw ge}finally{E.hashAddNode(V)}}},rmdir(s){var a=E.lookupPath(s,{parent:!0}),u=a.node,p=Xe.basename(s),_=E.lookupNode(u,p),S=E.mayDelete(u,p,!0);if(S)throw new E.ErrnoError(S);if(!u.node_ops.rmdir)throw new E.ErrnoError(63);if(E.isMountpoint(_))throw new E.ErrnoError(10);u.node_ops.rmdir(u,p),E.destroyNode(_)},readdir(s){var a=E.lookupPath(s,{follow:!0}),u=a.node,p=E.checkOpExists(u.node_ops.readdir,54);return p(u)},unlink(s){var a=E.lookupPath(s,{parent:!0}),u=a.node;if(!u)throw new E.ErrnoError(44);var p=Xe.basename(s),_=E.lookupNode(u,p),S=E.mayDelete(u,p,!1);if(S)throw new E.ErrnoError(S);if(!u.node_ops.unlink)throw new E.ErrnoError(63);if(E.isMountpoint(_))throw new E.ErrnoError(10);u.node_ops.unlink(u,p),E.destroyNode(_)},readlink(s){var a=E.lookupPath(s),u=a.node;if(!u)throw new E.ErrnoError(44);if(!u.node_ops.readlink)throw new E.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,a){var u=E.lookupPath(s,{follow:!a}),p=u.node,_=E.checkOpExists(p.node_ops.getattr,63);return _(p)},fstat(s){var a=E.getStreamChecked(s),u=a.node,p=a.stream_ops.getattr,_=p?a:u;return p??=u.node_ops.getattr,E.checkOpExists(p,63),p(_)},lstat(s){return E.stat(s,!0)},doChmod(s,a,u,p){E.doSetAttr(s,a,{mode:u&4095|a.mode&-4096,ctime:Date.now(),dontFollow:p})},chmod(s,a,u){var p;if(typeof s=="string"){var _=E.lookupPath(s,{follow:!u});p=_.node}else p=s;E.doChmod(null,p,a,u)},lchmod(s,a){E.chmod(s,a,!0)},fchmod(s,a){var u=E.getStreamChecked(s);E.doChmod(u,u.node,a,!1)},doChown(s,a,u){E.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:u})},chown(s,a,u,p){var _;if(typeof s=="string"){var S=E.lookupPath(s,{follow:!p});_=S.node}else _=s;E.doChown(null,_,p)},lchown(s,a,u){E.chown(s,a,u,!0)},fchown(s,a,u){var p=E.getStreamChecked(s);E.doChown(p,p.node,!1)},doTruncate(s,a,u){if(E.isDir(a.mode))throw new E.ErrnoError(31);if(!E.isFile(a.mode))throw new E.ErrnoError(28);var p=E.nodePermissions(a,"w");if(p)throw new E.ErrnoError(p);E.doSetAttr(s,a,{size:u,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new E.ErrnoError(28);var u;if(typeof s=="string"){var p=E.lookupPath(s,{follow:!0});u=p.node}else u=s;E.doTruncate(null,u,a)},ftruncate(s,a){var u=E.getStreamChecked(s);if(a<0||(u.flags&2097155)===0)throw new E.ErrnoError(28);E.doTruncate(u,u.node,a)},utime(s,a,u){var p=E.lookupPath(s,{follow:!0}),_=p.node,S=E.checkOpExists(_.node_ops.setattr,63);S(_,{atime:a,mtime:u})},open(s,a,u=438){if(s==="")throw new E.ErrnoError(44);a=typeof a=="string"?Gf(a):a,a&64?u=u&4095|32768:u=0;var p,_;if(typeof s=="object")p=s;else{_=s.endsWith("/");var S=E.lookupPath(s,{follow:!(a&131072),noent_okay:!0});p=S.node,s=S.path}var b=!1;if(a&64)if(p){if(a&128)throw new E.ErrnoError(20)}else{if(_)throw new E.ErrnoError(31);p=E.mknod(s,u|511,0),b=!0}if(!p)throw new E.ErrnoError(44);if(E.isChrdev(p.mode)&&(a&=-513),a&65536&&!E.isDir(p.mode))throw new E.ErrnoError(54);if(!b){var T=E.mayOpen(p,a);if(T)throw new E.ErrnoError(T)}a&512&&!b&&E.truncate(p,0),a&=-131713;var F=E.createStream({node:p,path:E.getPath(p),flags:a,seekable:!0,position:0,stream_ops:p.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),b&&E.chmod(p,u&511),t.logReadFiles&&!(a&1)&&(s in E.readFiles||(E.readFiles[s]=1)),F},close(s){if(E.isClosed(s))throw new E.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{E.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,u){if(E.isClosed(s))throw new E.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new E.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new E.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,u),s.ungotten=[],s.position},read(s,a,u,p,_){if(z(u>=0),p<0||_<0)throw new E.ErrnoError(28);if(E.isClosed(s))throw new E.ErrnoError(8);if((s.flags&2097155)===1)throw new E.ErrnoError(8);if(E.isDir(s.node.mode))throw new E.ErrnoError(31);if(!s.stream_ops.read)throw new E.ErrnoError(28);var S=typeof _<"u";if(!S)_=s.position;else if(!s.seekable)throw new E.ErrnoError(70);var b=s.stream_ops.read(s,a,u,p,_);return S||(s.position+=b),b},write(s,a,u,p,_,S){if(z(u>=0),p<0||_<0)throw new E.ErrnoError(28);if(E.isClosed(s))throw new E.ErrnoError(8);if((s.flags&2097155)===0)throw new E.ErrnoError(8);if(E.isDir(s.node.mode))throw new E.ErrnoError(31);if(!s.stream_ops.write)throw new E.ErrnoError(28);s.seekable&&s.flags&1024&&E.llseek(s,0,2);var b=typeof _<"u";if(!b)_=s.position;else if(!s.seekable)throw new E.ErrnoError(70);var T=s.stream_ops.write(s,a,u,p,_,S);return b||(s.position+=T),T},mmap(s,a,u,p,_){if((p&2)!==0&&(_&2)===0&&(s.flags&2097155)!==2)throw new E.ErrnoError(2);if((s.flags&2097155)===1)throw new E.ErrnoError(2);if(!s.stream_ops.mmap)throw new E.ErrnoError(43);if(!a)throw new E.ErrnoError(28);return s.stream_ops.mmap(s,a,u,p,_)},msync(s,a,u,p,_){return z(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,u,p,_):0},ioctl(s,a,u){if(!s.stream_ops.ioctl)throw new E.ErrnoError(59);return s.stream_ops.ioctl(s,a,u)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var u=E.open(s,a.flags),p=E.stat(s),_=p.size,S=new Uint8Array(_);return E.read(u,S,0,_,0),a.encoding==="utf8"&&(S=D(S)),E.close(u),S},writeFile(s,a,u={}){u.flags=u.flags||577;var p=E.open(s,u.flags,u.mode);if(typeof a=="string"&&(a=new Uint8Array(Gi(a,!0))),ArrayBuffer.isView(a))E.write(p,a,0,a.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");E.close(p)},cwd:()=>E.currentPath,chdir(s){var a=E.lookupPath(s,{follow:!0});if(a.node===null)throw new E.ErrnoError(44);if(!E.isDir(a.node.mode))throw new E.ErrnoError(54);var u=E.nodePermissions(a.node,"x");if(u)throw new E.ErrnoError(u);E.currentPath=a.path},createDefaultDirectories(){E.mkdir("/tmp"),E.mkdir("/home"),E.mkdir("/home/web_user")},createDefaultDevices(){E.mkdir("/dev"),E.registerDevice(E.makedev(1,3),{read:()=>0,write:(p,_,S,b,T)=>b,llseek:()=>0}),E.mkdev("/dev/null",E.makedev(1,3)),bn.register(E.makedev(5,0),bn.default_tty_ops),bn.register(E.makedev(6,0),bn.default_tty1_ops),E.mkdev("/dev/tty",E.makedev(5,0)),E.mkdev("/dev/tty1",E.makedev(6,0));var s=new Uint8Array(1024),a=0,u=()=>(a===0&&(ss(s),a=s.byteLength),s[--a]);E.createDevice("/dev","random",u),E.createDevice("/dev","urandom",u),E.mkdir("/dev/shm"),E.mkdir("/dev/shm/tmp")},createSpecialDirectories(){E.mkdir("/proc");var s=E.mkdir("/proc/self");E.mkdir("/proc/self/fd"),E.mount({mount(){var a=E.createNode(s,"fd",16895,73);return a.stream_ops={llseek:ot.stream_ops.llseek},a.node_ops={lookup(u,p){var _=+p,S=E.getStreamChecked(_),b={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>S.path},id:_+1};return b.parent=b,b},readdir(){return Array.from(E.streams.entries()).filter(([u,p])=>p).map(([u,p])=>u.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,u){s?E.createDevice("/dev","stdin",s):E.symlink("/dev/tty","/dev/stdin"),a?E.createDevice("/dev","stdout",null,a):E.symlink("/dev/tty","/dev/stdout"),u?E.createDevice("/dev","stderr",null,u):E.symlink("/dev/tty1","/dev/stderr");var p=E.open("/dev/stdin",0),_=E.open("/dev/stdout",1),S=E.open("/dev/stderr",1);z(p.fd===0,`invalid handle for stdin (${p.fd})`),z(_.fd===1,`invalid handle for stdout (${_.fd})`),z(S.fd===2,`invalid handle for stderr (${S.fd})`)},staticInit(){E.nameTable=new Array(4096),E.mount(ot,{},"/"),E.createDefaultDirectories(),E.createDefaultDevices(),E.createSpecialDirectories(),E.filesystems={MEMFS:ot}},init(s,a,u){z(!E.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),E.initialized=!0,s??=t.stdin,a??=t.stdout,u??=t.stderr,E.createStandardStreams(s,a,u)},quit(){E.initialized=!1,Ya(0);for(var s of E.streams)s&&E.close(s)},findObject(s,a){var u=E.analyzePath(s,a);return u.exists?u.object:null},analyzePath(s,a){try{var u=E.lookupPath(s,{follow:!a});s=u.path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=E.lookupPath(s,{parent:!0});p.parentExists=!0,p.parentPath=u.path,p.parentObject=u.node,p.name=Xe.basename(s),u=E.lookupPath(s,{follow:!a}),p.exists=!0,p.path=u.path,p.object=u.node,p.name=u.node.name,p.isRoot=u.path==="/"}catch(_){p.error=_.errno}return p},createPath(s,a,u,p){s=typeof s=="string"?s:E.getPath(s);for(var _=a.split("/").reverse();_.length;){var S=_.pop();if(S){var b=Xe.join2(s,S);try{E.mkdir(b)}catch(T){if(T.errno!=20)throw T}s=b}}return b},createFile(s,a,u,p,_){var S=Xe.join2(typeof s=="string"?s:E.getPath(s),a),b=Ua(p,_);return E.create(S,b)},createDataFile(s,a,u,p,_,S){var b=a;s&&(s=typeof s=="string"?s:E.getPath(s),b=a?Xe.join2(s,a):s);var T=Ua(p,_),F=E.create(b,T);if(u){if(typeof u=="string"){for(var V=new Array(u.length),j=0,ne=u.length;j<ne;++j)V[j]=u.charCodeAt(j);u=V}E.chmod(F,T|146);var ae=E.open(F,577);E.write(ae,u,0,u.length,0,S),E.close(ae),E.chmod(F,T)}},createDevice(s,a,u,p){var _=Xe.join2(typeof s=="string"?s:E.getPath(s),a),S=Ua(!!u,!!p);E.createDevice.major??=64;var b=E.makedev(E.createDevice.major++,0);return E.registerDevice(b,{open(T){T.seekable=!1},close(T){p?.buffer?.length&&p(10)},read(T,F,V,j,ne){for(var ae=0,se=0;se<j;se++){var ge;try{ge=u()}catch{throw new E.ErrnoError(29)}if(ge===void 0&&ae===0)throw new E.ErrnoError(6);if(ge==null)break;ae++,F[V+se]=ge}return ae&&(T.node.atime=Date.now()),ae},write(T,F,V,j,ne){for(var ae=0;ae<j;ae++)try{p(F[V+ae])}catch{throw new E.ErrnoError(29)}return j&&(T.node.mtime=T.node.ctime=Date.now()),ae}}),E.mkdev(_,S,b)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=w(s.url),s.usedBytes=s.contents.length}catch{throw new E.ErrnoError(29)}},createLazyFile(s,a,u,p,_){class S{lengthKnown=!1;chunks=[];get(se){if(!(se>this.length-1||se<0)){var ge=se%this.chunkSize,Ge=se/this.chunkSize|0;return this.getter(Ge)[ge]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",u,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+u+". Status: "+se.status);var ge=Number(se.getResponseHeader("Content-length")),Ge,mt=(Ge=se.getResponseHeader("Accept-Ranges"))&&Ge==="bytes",dt=(Ge=se.getResponseHeader("Content-Encoding"))&&Ge==="gzip",Nt=1024*1024;mt||(Nt=ge);var Mt=(jt,fn)=>{if(jt>fn)throw new Error("invalid range ("+jt+", "+fn+") or no bytes requested!");if(fn>ge-1)throw new Error("only "+ge+" bytes available! programmer error!");var Pt=new XMLHttpRequest;if(Pt.open("GET",u,!1),ge!==Nt&&Pt.setRequestHeader("Range","bytes="+jt+"-"+fn),Pt.responseType="arraybuffer",Pt.overrideMimeType&&Pt.overrideMimeType("text/plain; charset=x-user-defined"),Pt.send(null),!(Pt.status>=200&&Pt.status<300||Pt.status===304))throw new Error("Couldn't load "+u+". Status: "+Pt.status);return Pt.response!==void 0?new Uint8Array(Pt.response||[]):Gi(Pt.responseText||"",!0)},an=this;an.setDataGetter(jt=>{var fn=jt*Nt,Pt=(jt+1)*Nt-1;if(Pt=Math.min(Pt,ge-1),typeof an.chunks[jt]>"u"&&(an.chunks[jt]=Mt(fn,Pt)),typeof an.chunks[jt]>"u")throw new Error("doXHR failed!");return an.chunks[jt]}),(dt||!ge)&&(Nt=ge=1,ge=this.getter(0).length,Nt=ge,C("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ge,this._chunkSize=Nt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!i)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var b=new S,T={isDevice:!1,contents:b}}else var T={isDevice:!1,url:u};var F=E.createFile(s,a,T,p,_);T.contents?F.contents=T.contents:T.url&&(F.contents=null,F.url=T.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var V={},j=Object.keys(F.stream_ops);j.forEach(ae=>{var se=F.stream_ops[ae];V[ae]=(...ge)=>(E.forceLoadFile(F),se(...ge))});function ne(ae,se,ge,Ge,mt){var dt=ae.node.contents;if(mt>=dt.length)return 0;var Nt=Math.min(dt.length-mt,Ge);if(z(Nt>=0),dt.slice)for(var Mt=0;Mt<Nt;Mt++)se[ge+Mt]=dt[mt+Mt];else for(var Mt=0;Mt<Nt;Mt++)se[ge+Mt]=dt.get(mt+Mt);return Nt}return V.read=(ae,se,ge,Ge,mt)=>(E.forceLoadFile(F),ne(ae,se,ge,Ge,mt)),V.mmap=(ae,se,ge,Ge,mt)=>{E.forceLoadFile(F);var dt=zs(se);if(!dt)throw new E.ErrnoError(48);return ne(ae,Ne,dt,se,ge),{ptr:dt,allocated:!0}},F.stream_ops=V,F},absolutePath(){Fe("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){Fe("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){Fe("FS.createLink has been removed; use FS.symlink instead")},joinPath(){Fe("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){Fe("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){Fe("FS.standardizePath has been removed; use PATH.normalize instead")}},Ot={DEFAULT_POLLMASK:5,calculateAt(s,a,u){if(Xe.isAbs(a))return a;var p;if(s===-100)p=E.cwd();else{var _=Ot.getStreamFromFD(s);p=_.path}if(a.length==0){if(!u)throw new E.ErrnoError(44);return p}return p+"/"+a},writeStat(s,a){A[s>>2]=a.dev,A[s+4>>2]=a.mode,$[s+8>>2]=a.nlink,A[s+12>>2]=a.uid,A[s+16>>2]=a.gid,A[s+20>>2]=a.rdev,he[s+24>>3]=BigInt(a.size),A[s+32>>2]=4096,A[s+36>>2]=a.blocks;var u=a.atime.getTime(),p=a.mtime.getTime(),_=a.ctime.getTime();return he[s+40>>3]=BigInt(Math.floor(u/1e3)),$[s+48>>2]=u%1e3*1e3*1e3,he[s+56>>3]=BigInt(Math.floor(p/1e3)),$[s+64>>2]=p%1e3*1e3*1e3,he[s+72>>3]=BigInt(Math.floor(_/1e3)),$[s+80>>2]=_%1e3*1e3*1e3,he[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){A[s+4>>2]=a.bsize,A[s+40>>2]=a.bsize,A[s+8>>2]=a.blocks,A[s+12>>2]=a.bfree,A[s+16>>2]=a.bavail,A[s+20>>2]=a.files,A[s+24>>2]=a.ffree,A[s+28>>2]=a.fsid,A[s+44>>2]=a.flags,A[s+36>>2]=a.namelen},doMsync(s,a,u,p,_){if(!E.isFile(a.node.mode))throw new E.ErrnoError(43);if(p&2)return 0;var S=je.slice(s,s+u);E.msync(a,S,_,u,p)},getStreamFromFD(s){var a=E.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=Y(s);return a}};function Xf(s,a,u){try{var p=Ot.getStreamFromFD(s);if(z(!u),p.fd===a)return-28;if(a<0||a>=E.MAX_OPEN_FDS)return-8;var _=E.getStream(a);return _&&E.close(_),E.dupStream(p,a).fd}catch(S){if(typeof E>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var Hs=()=>{z(Ot.varargs!=null);var s=A[+Ot.varargs>>2];return Ot.varargs+=4,s},pr=Hs;function $f(s,a,u){Ot.varargs=u;try{var p=Ot.getStreamFromFD(s);switch(a){case 0:{var _=Hs();if(_<0)return-28;for(;E.streams[_];)_++;var S;return S=E.dupStream(p,_),S.fd}case 1:case 2:return 0;case 3:return p.flags;case 4:{var _=Hs();return p.flags|=_,0}case 12:{var _=pr(),b=0;return yt[_+b>>1]=2,0}case 13:case 14:return 0}return-28}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function qf(s,a){try{return Ot.writeStat(a,E.fstat(s))}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Yf(s,a,u){Ot.varargs=u;try{var p=Ot.getStreamFromFD(s);switch(a){case 21509:return p.tty?0:-59;case 21505:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcgets){var _=p.tty.ops.ioctl_tcgets(p),S=pr();A[S>>2]=_.c_iflag||0,A[S+4>>2]=_.c_oflag||0,A[S+8>>2]=_.c_cflag||0,A[S+12>>2]=_.c_lflag||0;for(var b=0;b<32;b++)Ne[S+b+17]=_.c_cc[b]||0;return 0}return 0}case 21510:case 21511:case 21512:return p.tty?0:-59;case 21506:case 21507:case 21508:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcsets){for(var S=pr(),T=A[S>>2],F=A[S+4>>2],V=A[S+8>>2],j=A[S+12>>2],ne=[],b=0;b<32;b++)ne.push(Ne[S+b+17]);return p.tty.ops.ioctl_tcsets(p.tty,a,{c_iflag:T,c_oflag:F,c_cflag:V,c_lflag:j,c_cc:ne})}return 0}case 21519:{if(!p.tty)return-59;var S=pr();return A[S>>2]=0,0}case 21520:return p.tty?-28:-59;case 21531:{var S=pr();return E.ioctl(p,a,S)}case 21523:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tiocgwinsz){var ae=p.tty.ops.ioctl_tiocgwinsz(p.tty),S=pr();yt[S>>1]=ae[0],yt[S+2>>1]=ae[1]}return 0}case 21524:return p.tty?0:-59;case 21515:return p.tty?0:-59;default:return-28}}catch(se){if(typeof E>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function jf(s,a){try{return s=Ot.getStr(s),Ot.writeStat(a,E.lstat(s))}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Kf(s,a,u,p){try{a=Ot.getStr(a);var _=p&256,S=p&4096;return p=p&-6401,z(!p,`unknown flags in __syscall_newfstatat: ${p}`),a=Ot.calculateAt(s,a,S),Ot.writeStat(u,_?E.lstat(a):E.stat(a))}catch(b){if(typeof E>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}function Zf(s,a,u,p){Ot.varargs=p;try{a=Ot.getStr(a),a=Ot.calculateAt(s,a);var _=p?Hs():0;return E.open(a,u,_).fd}catch(S){if(typeof E>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Jf(s,a){try{return s=Ot.getStr(s),Ot.writeStat(a,E.stat(s))}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var Qf=()=>Fe("native code called abort()"),Yt=s=>{for(var a="";;){var u=je[s++];if(!u)return a;a+=String.fromCharCode(u)}},mr={},Wi={},Vs={},os=class extends Error{constructor(a){super(a),this.name="BindingError"}},vt=s=>{throw new os(s)};function ep(s,a,u={}){var p=a.name;if(s||vt(`type "${p}" must have a positive integer typeid pointer`),Wi.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${p}' twice`)}if(Wi[s]=a,delete Vs[s],mr.hasOwnProperty(s)){var _=mr[s];delete mr[s],_.forEach(S=>S())}}function Pn(s,a,u={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ep(s,a,u)}var fu=(s,a,u)=>{switch(a){case 1:return u?p=>Ne[p]:p=>je[p];case 2:return u?p=>yt[p>>1]:p=>k[p>>1];case 4:return u?p=>A[p>>2]:p=>$[p>>2];case 8:return u?p=>he[p>>3]:p=>ze[p>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Xi=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},pu=(s,a,u,p)=>{if(a<u||a>p)throw new TypeError(`Passing a number "${Xi(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${p}]!`)},tp=(s,a,u,p,_)=>{a=Yt(a);let S=p===0n,b=T=>T;if(S){let T=u*8;b=F=>BigInt.asUintN(T,F),_=b(_)}Pn(s,{name:a,fromWireType:b,toWireType:(T,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${Xi(F)}" to ${this.name}`);return pu(a,F,p,_),F},argPackAdvance:jn,readValueFromPointer:fu(a,u,!S),destructorFunction:null})},jn=8,np=(s,a,u,p)=>{a=Yt(a),Pn(s,{name:a,fromWireType:function(_){return!!_},toWireType:function(_,S){return S?u:p},argPackAdvance:jn,readValueFromPointer:function(_){return this.fromWireType(je[_])},destructorFunction:null})},ip=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Oa=s=>{function a(u){return u.$$.ptrType.registeredClass.name}vt(a(s)+" instance already deleted")},ka=!1,mu=s=>{},rp=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},gu=s=>{s.count.value-=1;var a=s.count.value===0;a&&rp(s)},_u=(s,a,u)=>{if(a===u)return s;if(u.baseClass===void 0)return null;var p=_u(s,a,u.baseClass);return p===null?null:u.downcast(p)},vu={},sp={},op=(s,a)=>{for(a===void 0&&vt("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},ap=(s,a)=>(a=op(s,a),sp[a]),cp=class extends Error{constructor(a){super(a),this.name="InternalError"}},Gs=s=>{throw new cp(s)},Ws=(s,a)=>{(!a.ptrType||!a.ptr)&&Gs("makeClassHandle requires ptr and ptrType");var u=!!a.smartPtrType,p=!!a.smartPtr;return u!==p&&Gs("Both smartPtrType and smartPtr must be specified"),a.count={value:1},as(Object.create(s,{$$:{value:a,writable:!0}}))};function yu(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var u=ap(this.registeredClass,a);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=a,u.$$.smartPtr=s,u.clone();var p=u.clone();return this.destructor(s),p}function _(){return this.isSmartPointer?Ws(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):Ws(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var S=this.registeredClass.getActualType(a),b=vu[S];if(!b)return _.call(this);var T;this.isConst?T=b.constPointerType:T=b.pointerType;var F=_u(a,this.registeredClass,T.registeredClass);return F===null?_.call(this):this.isSmartPointer?Ws(T.registeredClass.instancePrototype,{ptrType:T,ptr:F,smartPtrType:this,smartPtr:s}):Ws(T.registeredClass.instancePrototype,{ptrType:T,ptr:F})}var as=s=>typeof FinalizationRegistry>"u"?(as=a=>a,s):(ka=new FinalizationRegistry(a=>{console.warn(a.leakWarning),gu(a.$$)}),as=a=>{var u=a.$$,p=!!u.smartPtr;if(p){var _={$$:u},S=u.ptrType.registeredClass,b=new Error(`Embind found a leaked C++ instance ${S.name} <${wn(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(b,yu),_.leakWarning=b.stack.replace(/^Error: /,""),ka.register(a,_,a)}return a},mu=a=>ka.unregister(a),as(s)),Xs=[],lp=()=>{for(;Xs.length;){var s=Xs.pop();s.$$.deleteScheduled=!1,s.delete()}},xu,up=()=>{let s=$s.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof $s)||!(u instanceof $s))return!1;var p=this.$$.ptrType.registeredClass,_=this.$$.ptr;u.$$=u.$$;for(var S=u.$$.ptrType.registeredClass,b=u.$$.ptr;p.baseClass;)_=p.upcast(_),p=p.baseClass;for(;S.baseClass;)b=S.upcast(b),S=S.baseClass;return p===S&&_===b},clone(){if(this.$$.ptr||Oa(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=as(Object.create(Object.getPrototypeOf(this),{$$:{value:ip(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Oa(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),mu(this),gu(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Oa(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),Xs.push(this),Xs.length===1&&xu&&xu(lp),this.$$.deleteScheduled=!0,this}});let a=Symbol.dispose;a&&(s[a]=s.delete)};function $s(){}var qs=(s,a)=>Object.defineProperty(a,"name",{value:s}),Ba=(s,a,u)=>{if(s[a].overloadTable===void 0){var p=s[a];s[a]=function(..._){return s[a].overloadTable.hasOwnProperty(_.length)||vt(`Function '${u}' called with an invalid number of arguments (${_.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[_.length].apply(this,_)},s[a].overloadTable=[],s[a].overloadTable[p.argCount]=p}},za=(s,a,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&vt(`Cannot register public name '${s}' twice`),Ba(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=a):(t[s]=a,t[s].argCount=u)},hp=48,dp=57,fp=s=>{z(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=hp&&a<=dp?`_${s}`:s};function pp(s,a,u,p,_,S,b,T){this.name=s,this.constructor=a,this.instancePrototype=u,this.rawDestructor=p,this.baseClass=_,this.getActualType=S,this.upcast=b,this.downcast=T,this.pureVirtualFunctions=[]}var Ys=(s,a,u)=>{for(;a!==u;)a.upcast||vt(`Expected null or instance of ${u.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function mp(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Xi(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=a.$$.ptrType.registeredClass,p=Ys(a.$$.ptr,u,this.registeredClass);return p}function gp(s,a){var u;if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!a||!a.$$)&&vt(`Cannot pass "${Xi(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var p=a.$$.ptrType.registeredClass;if(u=Ys(a.$$.ptr,p,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?u=a.$$.smartPtr:vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)u=a.$$.smartPtr;else{var _=a.clone();u=this.rawShare(u,$t.toHandle(()=>_.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:vt("Unsupporting sharing policy")}return u}function _p(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Xi(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass,p=Ys(a.$$.ptr,u,this.registeredClass);return p}function js(s){return this.fromWireType($[s>>2])}var vp=()=>{Object.assign(Ks.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:jn,readValueFromPointer:js,fromWireType:yu})};function Ks(s,a,u,p,_,S,b,T,F,V,j){this.name=s,this.registeredClass=a,this.isReference=u,this.isConst=p,this.isSmartPointer=_,this.pointeeType=S,this.sharingPolicy=b,this.rawGetPointee=T,this.rawConstructor=F,this.rawShare=V,this.rawDestructor=j,!_&&a.baseClass===void 0?p?(this.toWireType=mp,this.destructorFunction=null):(this.toWireType=_p,this.destructorFunction=null):this.toWireType=gp}var Su=(s,a,u)=>{t.hasOwnProperty(s)||Gs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=a:(t[s]=a,t[s].argCount=u)},Mu=[],Zs,ve=s=>{var a=Mu[s];return a||(Mu[s]=a=Zs.get(s)),z(Zs.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},Kn=(s,a,u=!1)=>{z(!u,"Async bindings are only supported with JSPI."),s=Yt(s);function p(){var S=ve(a);return S}var _=p();return typeof _!="function"&&vt(`unknown function pointer with signature ${s}: ${a}`),_};class yp extends Error{}var wu=s=>{var a=Hu(s),u=Yt(a);return kn(a),u},$i=(s,a)=>{var u=[],p={};function _(S){if(!p[S]&&!Wi[S]){if(Vs[S]){Vs[S].forEach(_);return}u.push(S),p[S]=!0}}throw a.forEach(_),new yp(`${s}: `+u.map(wu).join([", "]))},On=(s,a,u)=>{s.forEach(T=>Vs[T]=a);function p(T){var F=u(T);F.length!==s.length&&Gs("Mismatched type converter count");for(var V=0;V<s.length;++V)Pn(s[V],F[V])}var _=new Array(a.length),S=[],b=0;a.forEach((T,F)=>{Wi.hasOwnProperty(T)?_[F]=Wi[T]:(S.push(T),mr.hasOwnProperty(T)||(mr[T]=[]),mr[T].push(()=>{_[F]=Wi[T],++b,b===S.length&&p(_)}))}),S.length===0&&p(_)},xp=(s,a,u,p,_,S,b,T,F,V,j,ne,ae)=>{j=Yt(j),S=Kn(_,S),T&&=Kn(b,T),V&&=Kn(F,V),ae=Kn(ne,ae);var se=fp(j);za(se,function(){$i(`Cannot construct ${j} due to unbound types`,[p])}),On([s,a,u],p?[p]:[],ge=>{ge=ge[0];var Ge,mt;p?(Ge=ge.registeredClass,mt=Ge.instancePrototype):mt=$s.prototype;var dt=qs(j,function(...Pt){if(Object.getPrototypeOf(this)!==Nt)throw new os(`Use 'new' to construct ${j}`);if(Mt.constructor_body===void 0)throw new os(`${j} has no accessible constructor`);var ji=Mt.constructor_body[Pt.length];if(ji===void 0)throw new os(`Tried to invoke ctor of ${j} with invalid number of parameters (${Pt.length}) - expected (${Object.keys(Mt.constructor_body).toString()}) parameters instead!`);return ji.apply(this,Pt)}),Nt=Object.create(mt,{constructor:{value:dt}});dt.prototype=Nt;var Mt=new pp(j,dt,Nt,ae,Ge,S,T,V);Mt.baseClass&&(Mt.baseClass.__derivedClasses??=[],Mt.baseClass.__derivedClasses.push(Mt));var an=new Ks(j,Mt,!0,!1,!1),jt=new Ks(j+"*",Mt,!1,!1,!1),fn=new Ks(j+" const*",Mt,!1,!0,!1);return vu[s]={pointerType:jt,constPointerType:fn},Su(se,dt),[an,jt,fn]})},Ha=s=>{for(;s.length;){var a=s.pop(),u=s.pop();u(a)}};function bu(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function Sp(s,a,u,p,_){if(s<a||s>u){var S=a==u?a:`${a} to ${u}`;_(`function ${p} called with ${s} arguments, expected ${S}`)}}function Mp(s,a,u,p){var _=bu(s),S=s.length-2,b=[],T=["fn"];a&&T.push("thisWired");for(var F=0;F<S;++F)b.push(`arg${F}`),T.push(`arg${F}Wired`);b=b.join(","),T=T.join(",");var V=`return function (${b}) {
`;V+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,_&&(V+=`var destructors = [];
`);var j=_?"destructors":"null",ne=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(V+=`var thisWired = classParam['toWireType'](${j}, this);
`);for(var F=0;F<S;++F)V+=`var arg${F}Wired = argType${F}['toWireType'](${j}, arg${F});
`,ne.push(`argType${F}`);V+=(u||p?"var rv = ":"")+`invoker(${T});
`;var ae=u?"rv":"";if(_)V+=`runDestructors(destructors);
`;else for(var F=a?1:2;F<s.length;++F){var se=F===1?"thisWired":"arg"+(F-2)+"Wired";s[F].destructorFunction!==null&&(V+=`${se}_dtor(${se});
`,ne.push(`${se}_dtor`))}return u&&(V+=`var ret = retType['fromWireType'](rv);
return ret;
`),V+=`}
`,ne.push("checkArgCount","minArgs","maxArgs"),V=`if (arguments.length !== ${ne.length}){ throw new Error(humanName + "Expected ${ne.length} closure arguments " + arguments.length + " given."); }
${V}`,[ne,V]}function wp(s){for(var a=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)a--;return a}function Js(s,a,u,p,_,S){var b=a.length;b<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),z(!S,"Async bindings are only supported with JSPI.");for(var T=a[1]!==null&&u!==null,F=bu(a),V=a[0].name!=="void",j=b-2,ne=wp(a),ae=[s,vt,p,_,Ha,a[0],a[1]],se=0;se<b-2;++se)ae.push(a[se+2]);if(!F)for(var se=T?1:2;se<a.length;++se)a[se].destructorFunction!==null&&ae.push(a[se].destructorFunction);ae.push(Sp,ne,j);let[ge,Ge]=Mp(a,T,V,S);var mt=new Function(...ge,Ge)(...ae);return qs(s,mt)}var Qs=(s,a)=>{for(var u=[],p=0;p<s;p++)u.push($[a+p*4>>2]);return u},Va=s=>{s=s.trim();let a=s.indexOf("(");return a===-1?s:(z(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},bp=(s,a,u,p,_,S,b,T,F)=>{var V=Qs(u,p);a=Yt(a),a=Va(a),S=Kn(_,S,T),On([],[s],j=>{j=j[0];var ne=`${j.name}.${a}`;function ae(){$i(`Cannot call ${ne} due to unbound types`,V)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var se=j.registeredClass.constructor;return se[a]===void 0?(ae.argCount=u-1,se[a]=ae):(Ba(se,a,ne),se[a].overloadTable[u-1]=ae),On([],V,ge=>{var Ge=[ge[0],null].concat(ge.slice(1)),mt=Js(ne,Ge,null,S,b,T);if(se[a].overloadTable===void 0?(mt.argCount=u-1,se[a]=mt):se[a].overloadTable[u-1]=mt,j.registeredClass.__derivedClasses)for(let dt of j.registeredClass.__derivedClasses)dt.constructor.hasOwnProperty(a)||(dt.constructor[a]=mt);return[]}),[]})},Ep=(s,a,u,p,_,S)=>{z(a>0);var b=Qs(a,u);_=Kn(p,_);var T=[S],F=[];On([],[s],V=>{V=V[0];var j=`constructor ${V.name}`;if(V.registeredClass.constructor_body===void 0&&(V.registeredClass.constructor_body=[]),V.registeredClass.constructor_body[a-1]!==void 0)throw new os(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${V.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return V.registeredClass.constructor_body[a-1]=()=>{$i(`Cannot construct ${V.name} due to unbound types`,b)},On([],b,ne=>(ne.splice(1,0,null),V.registeredClass.constructor_body[a-1]=Js(j,ne,null,_,S),[])),[]})},Ap=(s,a,u,p,_,S,b,T,F,V)=>{var j=Qs(u,p);a=Yt(a),a=Va(a),S=Kn(_,S,F),On([],[s],ne=>{ne=ne[0];var ae=`${ne.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),T&&ne.registeredClass.pureVirtualFunctions.push(a);function se(){$i(`Cannot call ${ae} due to unbound types`,j)}var ge=ne.registeredClass.instancePrototype,Ge=ge[a];return Ge===void 0||Ge.overloadTable===void 0&&Ge.className!==ne.name&&Ge.argCount===u-2?(se.argCount=u-2,se.className=ne.name,ge[a]=se):(Ba(ge,a,ae),ge[a].overloadTable[u-2]=se),On([],j,mt=>{var dt=Js(ae,mt,ne,S,b,F);return ge[a].overloadTable===void 0?(dt.argCount=u-2,ge[a]=dt):ge[a].overloadTable[u-2]=dt,[]}),[]})},Eu=(s,a,u)=>(s instanceof Object||vt(`${u} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||vt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||vt(`cannot call emscripten binding method ${u} on deleted object`),Ys(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),Tp=(s,a,u,p,_,S,b,T,F,V)=>{a=Yt(a),_=Kn(p,_),On([],[s],j=>{j=j[0];var ne=`${j.name}.${a}`,ae={get(){$i(`Cannot access ${ne} due to unbound types`,[u,b])},enumerable:!0,configurable:!0};return F?ae.set=()=>$i(`Cannot access ${ne} due to unbound types`,[u,b]):ae.set=se=>vt(ne+" is a read-only property"),Object.defineProperty(j.registeredClass.instancePrototype,a,ae),On([],F?[u,b]:[u],se=>{var ge=se[0],Ge={get(){var dt=Eu(this,j,ne+" getter");return ge.fromWireType(_(S,dt))},enumerable:!0};if(F){F=Kn(T,F);var mt=se[1];Ge.set=function(dt){var Nt=Eu(this,j,ne+" setter"),Mt=[];F(V,Nt,mt.toWireType(Mt,dt)),Ha(Mt)}}return Object.defineProperty(j.registeredClass.instancePrototype,a,Ge),[]}),[]})},Rp=(s,a,u)=>{s=Yt(s),On([],[a],p=>(p=p[0],t[s]=p.fromWireType(u),[]))},Au=[],Zn=[0,1,,1,null,1,!0,1,!1,1],Ga=s=>{s>9&&--Zn[s+1]===0&&(z(Zn[s]!==void 0,"Decref for unallocated handle."),Zn[s]=void 0,Au.push(s))},$t={toValue:s=>(s||vt(`Cannot use deleted val. handle = ${s}`),z(s===2||Zn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),Zn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let a=Au.pop()||Zn.length;return Zn[a]=s,Zn[a+1]=1,a}}}},Tu={name:"emscripten::val",fromWireType:s=>{var a=$t.toValue(s);return Ga(s),a},toWireType:(s,a)=>$t.toHandle(a),argPackAdvance:jn,readValueFromPointer:js,destructorFunction:null},Ru=s=>Pn(s,Tu),Cp=(s,a,u)=>{switch(a){case 1:return u?function(p){return this.fromWireType(Ne[p])}:function(p){return this.fromWireType(je[p])};case 2:return u?function(p){return this.fromWireType(yt[p>>1])}:function(p){return this.fromWireType(k[p>>1])};case 4:return u?function(p){return this.fromWireType(A[p>>2])}:function(p){return this.fromWireType($[p>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Pp=(s,a,u,p)=>{a=Yt(a);function _(){}_.values={},Pn(s,{name:a,constructor:_,fromWireType:function(S){return this.constructor.values[S]},toWireType:(S,b)=>b.value,argPackAdvance:jn,readValueFromPointer:Cp(a,u,p),destructorFunction:null}),za(a,_)},cs=(s,a)=>{var u=Wi[s];return u===void 0&&vt(`${a} has unknown type ${wu(s)}`),u},Ip=(s,a,u)=>{var p=cs(s,"enum");a=Yt(a);var _=p.constructor,S=Object.create(p.constructor.prototype,{value:{value:u},constructor:{value:qs(`${p.name}_${a}`,function(){})}});_.values[u]=S,_[a]=S},Lp=(s,a)=>{switch(a){case 4:return function(u){return this.fromWireType(le[u>>2])};case 8:return function(u){return this.fromWireType(me[u>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},Dp=(s,a,u)=>{a=Yt(a),Pn(s,{name:a,fromWireType:p=>p,toWireType:(p,_)=>{if(typeof _!="number"&&typeof _!="boolean")throw new TypeError(`Cannot convert ${Xi(_)} to ${this.name}`);return _},argPackAdvance:jn,readValueFromPointer:Lp(a,u),destructorFunction:null})},Np=(s,a,u,p,_,S,b,T)=>{var F=Qs(a,u);s=Yt(s),s=Va(s),_=Kn(p,_,b),za(s,function(){$i(`Cannot call ${s} due to unbound types`,F)},a-1),On([],F,V=>{var j=[V[0],null].concat(V.slice(1));return Su(s,Js(s,j,null,_,S,b),a-1),[]})},Fp=(s,a,u,p,_)=>{a=Yt(a);let S=p===0,b=F=>F;if(S){var T=32-8*u;b=F=>F<<T>>>T,_=b(_)}Pn(s,{name:a,fromWireType:b,toWireType:(F,V)=>{if(typeof V!="number"&&typeof V!="boolean")throw new TypeError(`Cannot convert "${Xi(V)}" to ${a}`);return pu(a,V,p,_),V},argPackAdvance:jn,readValueFromPointer:fu(a,u,p!==0),destructorFunction:null})},Up=(s,a,u)=>{var p=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],_=p[a];function S(b){var T=$[b>>2],F=$[b+4>>2];return new _(Ne.buffer,F,T)}u=Yt(u),Pn(s,{name:u,fromWireType:S,argPackAdvance:jn,readValueFromPointer:S},{ignoreDuplicateRegistrations:!0})},Op=Object.assign({optional:!0},Tu),kp=(s,a)=>{Pn(s,Op)},qi=(s,a,u)=>(z(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Un(s,je,a,u)),Bp=(s,a)=>{a=Yt(a);var u=!0;Pn(s,{name:a,fromWireType(p){var _=$[p>>2],S=p+4,b;if(u)for(var T=S,F=0;F<=_;++F){var V=S+F;if(F==_||je[V]==0){var j=V-T,ne=Y(T,j);b===void 0?b=ne:(b+="\0",b+=ne),T=V+1}}else{for(var ae=new Array(_),F=0;F<_;++F)ae[F]=String.fromCharCode(je[S+F]);b=ae.join("")}return kn(p),b},toWireType(p,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var S,b=typeof _=="string";b||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),u&&b?S=Bt(_):S=_.length;var T=qa(4+S+1),F=T+4;if($[T>>2]=S,b)if(u)qi(_,F,S+1);else for(var V=0;V<S;++V){var j=_.charCodeAt(V);j>255&&(kn(T),vt("String has UTF-16 code units that do not fit in 8 bits")),je[F+V]=j}else je.set(_,F);return p!==null&&p.push(kn,T),T},argPackAdvance:jn,readValueFromPointer:js,destructorFunction(p){kn(p)}})},Cu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,zp=(s,a)=>{z(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,p=u+a/2,_=u;!(_>=p)&&k[_];)++_;if(_-u>16&&Cu)return Cu.decode(k.subarray(u,_));for(var S="",b=u;!(b>=p);++b){var T=k[b];if(T==0)break;S+=String.fromCharCode(T)}return S},Hp=(s,a,u)=>{if(z(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),z(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<2)return 0;u-=2;for(var p=a,_=u<s.length*2?u/2:s.length,S=0;S<_;++S){var b=s.charCodeAt(S);yt[a>>1]=b,a+=2}return yt[a>>1]=0,a-p},Vp=s=>s.length*2,Gp=(s,a)=>{z(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",p=0;!(p>=a/4);p++){var _=A[s+p*4>>2];if(!_)break;u+=String.fromCodePoint(_)}return u},Wp=(s,a,u)=>{if(z(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),z(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<4)return 0;for(var p=a,_=p+u-4,S=0;S<s.length;++S){var b=s.codePointAt(S);if(b>65535&&S++,A[a>>2]=b,a+=4,a+4>_)break}return A[a>>2]=0,a-p},Xp=s=>{for(var a=0,u=0;u<s.length;++u){var p=s.codePointAt(u);p>65535&&u++,a+=4}return a},$p=(s,a,u)=>{u=Yt(u);var p,_,S,b;a===2?(p=zp,_=Hp,b=Vp,S=T=>k[T>>1]):a===4&&(p=Gp,_=Wp,b=Xp,S=T=>$[T>>2]),Pn(s,{name:u,fromWireType:T=>{for(var F=$[T>>2],V,j=T+4,ne=0;ne<=F;++ne){var ae=T+4+ne*a;if(ne==F||S(ae)==0){var se=ae-j,ge=p(j,se);V===void 0?V=ge:(V+="\0",V+=ge),j=ae+a}}return kn(T),V},toWireType:(T,F)=>{typeof F!="string"&&vt(`Cannot pass non-string to C++ string type ${u}`);var V=b(F),j=qa(4+V+a);return $[j>>2]=V/a,_(F,j+4,V+a),T!==null&&T.push(kn,j),j},argPackAdvance:jn,readValueFromPointer:js,destructorFunction(T){kn(T)}})},qp=(s,a)=>{Ru(s)},Yp=(s,a)=>{a=Yt(a),Pn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,p)=>{}})},jp=()=>{throw new Le},Pu=(s,a,u)=>{var p=[],_=s.toWireType(p,u);return p.length&&($[a>>2]=$t.toHandle(p)),_},Kp=(s,a,u)=>(s=$t.toValue(s),a=cs(a,"emval::as"),Pu(a,u,s)),Zp=(s,a)=>(s=$t.toValue(s),a=cs(a,"emval::as"),a.toWireType(null,s)),eo=[],Jp=(s,a,u,p)=>(s=eo[s],a=$t.toValue(a),s(null,a,u,p)),Qp={},Wa=s=>{var a=Qp[s];return a===void 0?Yt(s):a},em=(s,a,u,p,_)=>(s=eo[s],a=$t.toValue(a),u=Wa(u),s(a,a[u],p,_)),Iu=()=>globalThis,tm=s=>s===0?$t.toHandle(Iu()):(s=Wa(s),$t.toHandle(Iu()[s])),nm=s=>{var a=eo.length;return eo.push(s),a},im=(s,a)=>{for(var u=new Array(s),p=0;p<s;++p)u[p]=cs($[a+p*4>>2],`parameter ${p}`);return u},rm=(s,a,u)=>{var p=im(s,a),_=p.shift();s--;var S=`return function (obj, func, destructorsRef, args) {
`,b=0,T=[];u===0&&T.push("obj");for(var F=["retType"],V=[_],j=0;j<s;++j)T.push(`arg${j}`),F.push(`argType${j}`),V.push(p[j]),S+=`  var arg${j} = argType${j}.readValueFromPointer(args${b?"+"+b:""});
`,b+=p[j].argPackAdvance;var ne=u===1?"new func":"func.call";S+=`  var rv = ${ne}(${T.join(", ")});
`,_.isVoid||(F.push("emval_returnValue"),V.push(Pu),S+=`  return emval_returnValue(retType, destructorsRef, rv);
`),S+=`};
`;var ae=new Function(...F,S)(...V),se=`methodCaller<(${p.map(ge=>ge.name).join(", ")}) => ${_.name}>`;return nm(qs(se,ae))},sm=(s,a)=>(s=$t.toValue(s),a=$t.toValue(a),$t.toHandle(s[a])),om=s=>{s>9&&(Zn[s+1]+=1)},am=s=>(s=$t.toValue(s),typeof s=="number"),cm=s=>(s=$t.toValue(s),typeof s=="string"),lm=()=>$t.toHandle([]),um=s=>$t.toHandle(Wa(s)),hm=s=>{var a=$t.toValue(s);Ha(a),Ga(s)},dm=(s,a)=>{s=cs(s,"_emval_take_value");var u=s.readValueFromPointer(a);return $t.toHandle(u)},fm=s=>{throw s=$t.toValue(s),s},pm=s=>s%4===0&&(s%100!==0||s%400===0),mm=[0,31,60,91,121,152,182,213,244,274,305,335],gm=[0,31,59,90,120,151,181,212,243,273,304,334],Lu=s=>{var a=pm(s.getFullYear()),u=a?mm:gm,p=u[s.getMonth()]+s.getDate()-1;return p},_m=9007199254740992,vm=-9007199254740992,Xa=s=>s<vm||s>_m?NaN:Number(s);function ym(s,a){s=Xa(s);var u=new Date(s*1e3);A[a>>2]=u.getSeconds(),A[a+4>>2]=u.getMinutes(),A[a+8>>2]=u.getHours(),A[a+12>>2]=u.getDate(),A[a+16>>2]=u.getMonth(),A[a+20>>2]=u.getFullYear()-1900,A[a+24>>2]=u.getDay();var p=Lu(u)|0;A[a+28>>2]=p,A[a+36>>2]=-(u.getTimezoneOffset()*60);var _=new Date(u.getFullYear(),0,1),S=new Date(u.getFullYear(),6,1).getTimezoneOffset(),b=_.getTimezoneOffset(),T=(S!=b&&u.getTimezoneOffset()==Math.min(b,S))|0;A[a+32>>2]=T}var xm=function(s){var a=(()=>{var u=new Date(A[s+20>>2]+1900,A[s+16>>2],A[s+12>>2],A[s+8>>2],A[s+4>>2],A[s>>2],0),p=A[s+32>>2],_=u.getTimezoneOffset(),S=new Date(u.getFullYear(),0,1),b=new Date(u.getFullYear(),6,1).getTimezoneOffset(),T=S.getTimezoneOffset(),F=Math.min(T,b);if(p<0)A[s+32>>2]=+(b!=T&&F==_);else if(p>0!=(F==_)){var V=Math.max(T,b),j=p>0?F:V;u.setTime(u.getTime()+(j-_)*6e4)}A[s+24>>2]=u.getDay();var ne=Lu(u)|0;A[s+28>>2]=ne,A[s>>2]=u.getSeconds(),A[s+4>>2]=u.getMinutes(),A[s+8>>2]=u.getHours(),A[s+12>>2]=u.getDate(),A[s+16>>2]=u.getMonth(),A[s+20>>2]=u.getYear();var ae=u.getTime();return isNaN(ae)?-1:ae/1e3})();return BigInt(a)},Sm=(s,a,u,p)=>{var _=new Date().getFullYear(),S=new Date(_,0,1),b=new Date(_,6,1),T=S.getTimezoneOffset(),F=b.getTimezoneOffset(),V=Math.max(T,F);$[s>>2]=V*60,A[a>>2]=+(T!=F);var j=se=>{var ge=se>=0?"-":"+",Ge=Math.abs(se),mt=String(Math.floor(Ge/60)).padStart(2,"0"),dt=String(Ge%60).padStart(2,"0");return`UTC${ge}${mt}${dt}`},ne=j(T),ae=j(F);z(ne),z(ae),z(Bt(ne)<=16,`timezone name truncated to fit in TZNAME_MAX (${ne})`),z(Bt(ae)<=16,`timezone name truncated to fit in TZNAME_MAX (${ae})`),F<T?(qi(ne,u,17),qi(ae,p,17)):(qi(ne,p,17),qi(ae,u,17))},Du=()=>performance.now(),Nu=()=>Date.now(),Mm=1,wm=s=>s>=0&&s<=3;function bm(s,a,u){if(a=Xa(a),!wm(s))return 28;var p;if(s===0)p=Nu();else if(Mm)p=Du();else return 52;var _=Math.round(p*1e3*1e3);return he[u>>3]=BigInt(_),0}var to=[],Em=(s,a)=>{z(Array.isArray(to)),z(a%16==0),to.length=0;for(var u;u=je[s++];){var p=String.fromCharCode(u),_=["d","f","i","p"];_.push("j"),z(_.includes(p),`Invalid character ${u}("${p}") in readEmAsmArgs! Use only [${_}], and do not specify "v" for void return argument.`);var S=u!=105;S&=u!=112,a+=S&&a%8?4:0,to.push(u==112?$[a>>2]:u==106?he[a>>3]:u==105?A[a>>2]:me[a>>3]),a+=S?8:4}return to},Am=(s,a,u)=>{var p=Em(a,u);return z(zu.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),zu[s](...p)},Tm=(s,a,u)=>Am(s,a,u),Fu=()=>2147483648,Rm=()=>Fu(),Cm=(s,a)=>(z(a,"alignment argument is required"),Math.ceil(s/a)*a),Pm=s=>{var a=it.buffer,u=(s-a.byteLength+65535)/65536|0;try{return it.grow(u),Te(),1}catch(p){P(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${p}`)}},Im=s=>{var a=je.length;s>>>=0,z(s>a);var u=Fu();if(s>u)return P(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var p=1;p<=4;p*=2){var _=a*(1+.2/p);_=Math.min(_,s+100663296);var S=Math.min(u,Cm(Math.max(s,_),65536)),b=Pm(S);if(b)return!0}return P(`Failed to grow the heap from ${a} bytes to ${S} bytes, not enough memory!`),!1},$a={},Lm=()=>h||"./this.program",ls=()=>{if(!ls.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Lm()};for(var u in $a)$a[u]===void 0?delete a[u]:a[u]=$a[u];var p=[];for(var u in a)p.push(`${u}=${a[u]}`);ls.strings=p}return ls.strings},Dm=(s,a)=>{var u=0,p=0;for(var _ of ls()){var S=a+u;$[s+p>>2]=S,u+=qi(_,S,1/0)+1,p+=4}return 0},Nm=(s,a)=>{var u=ls();$[s>>2]=u.length;var p=0;for(var _ of u)p+=Bt(_)+1;return $[a>>2]=p,0},Uu=0,Ou=()=>Et||Uu>0,Fm=s=>{oe=s,Ou()||(t.onExit?.(s),Z=!0),f(s,new de(s))},Um=(s,a)=>{if(oe=s,t0(),Ou()&&!a){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Uu}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;We?.(u),P(u)}Fm(s)},Om=Um;function km(s){try{var a=Ot.getStreamFromFD(s);return E.close(a),0}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Bm=(s,a,u,p)=>{for(var _=0,S=0;S<u;S++){var b=$[a>>2],T=$[a+4>>2];a+=8;var F=E.read(s,Ne,b,T,p);if(F<0)return-1;if(_+=F,F<T)break;typeof p<"u"&&(p+=F)}return _};function zm(s,a,u,p){try{var _=Ot.getStreamFromFD(s),S=Bm(_,a,u);return $[p>>2]=S,0}catch(b){if(typeof E>"u"||b.name!=="ErrnoError")throw b;return b.errno}}function Hm(s,a,u,p){a=Xa(a);try{if(isNaN(a))return 61;var _=Ot.getStreamFromFD(s);return E.llseek(_,a,u),he[p>>3]=BigInt(_.position),_.getdents&&a===0&&u===0&&(_.getdents=null),0}catch(S){if(typeof E>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Vm=(s,a,u,p)=>{for(var _=0,S=0;S<u;S++){var b=$[a>>2],T=$[a+4>>2];a+=8;var F=E.write(s,Ne,b,T,p);if(F<0)return-1;if(_+=F,F<T)break;typeof p<"u"&&(p+=F)}return _};function Gm(s,a,u,p){try{var _=Ot.getStreamFromFD(s),S=Vm(_,a,u);return $[p>>2]=S,0}catch(b){if(typeof E>"u"||b.name!=="ErrnoError")throw b;return b.errno}}var Wm=s=>s,Xm=s=>{var a=t["_"+s];return z(a,"Cannot call unknown function "+s+", make sure it is exported"),a},$m=(s,a)=>{z(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ne.set(s,a)},no=s=>$u(s),qm=s=>{var a=Bt(s)+1,u=no(a);return qi(s,u,a),u},ku=(s,a,u,p,_)=>{var S={string:ge=>{var Ge=0;return ge!=null&&ge!==0&&(Ge=qm(ge)),Ge},array:ge=>{var Ge=no(ge.length);return $m(ge,Ge),Ge}};function b(ge){return a==="string"?Y(ge):a==="boolean"?!!ge:ge}var T=Xm(s),F=[],V=0;if(z(a!=="array",'Return type should not be "array".'),p)for(var j=0;j<p.length;j++){var ne=S[u[j]];ne?(V===0&&(V=pe()),F[j]=ne(p[j])):F[j]=p[j]}var ae=T(...F);function se(ge){return V!==0&&fe(V),b(ge)}return ae=se(ae),ae},Ym=(s,a,u,p)=>(..._)=>ku(s,a,u,_,p),jm=(...s)=>E.createPath(...s),Km=(...s)=>E.unlink(...s),Zm=(...s)=>E.createLazyFile(...s),Jm=(...s)=>E.createDevice(...s),Qm=s=>io(s),eg=s=>Ka(s),tg=s=>{var a=pe(),u=no(4),p=no(4);Yu(s,u,p);var _=$[u>>2],S=$[p>>2],b=Y(_);kn(_);var T;return S&&(T=Y(S),kn(S)),fe(a),[b,T]},Bu=s=>tg(s);E.createPreloadedFile=hu,E.staticInit(),up(),vp(),z(Zn.length===10),t.noExitRuntime&&(Et=t.noExitRuntime),t.preloadPlugins&&(uu=t.preloadPlugins),t.print&&(C=t.print),t.printErr&&(P=t.printErr),t.wasmBinary&&(B=t.wasmBinary),rg(),t.arguments&&(d=t.arguments),t.thisProgram&&(h=t.thisProgram),z(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),z(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),z(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),z(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),z(typeof t.read>"u","Module.read option was removed"),z(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),z(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),z(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),z(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),z(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),z(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),z(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),z(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=at,t.removeRunDependency=Rt,t.ccall=ku,t.cwrap=Ym,t.FS_createPreloadedFile=hu,t.FS_unlink=Km,t.FS_createPath=jm,t.FS_createDevice=Jm,t.FS=E,t.FS_createDataFile=lu,t.FS_createLazyFile=Zm,t.MEMFS=ot;var ng=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];ng.forEach(wt);var ig=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];ig.forEach(Be),t.incrementExceptionRefcount=Qm,t.decrementExceptionRefcount=eg,t.getExceptionMessage=Bu;function rg(){be("fetchSettings")}var zu={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},Hu=Me("___getTypeName"),qa=Me("_malloc"),sg=Me("___cxa_free_exception"),Ya=Me("_fflush"),kn=Me("_free"),ja=Me("_emscripten_stack_get_end"),og=Me("_emscripten_stack_get_base"),Vu=Me("_strerror"),_e=Me("_setThrew"),Gu=Me("__emscripten_tempret_set"),Wu=Me("_emscripten_stack_init"),ag=Me("_emscripten_stack_get_free"),Xu=Me("__emscripten_stack_restore"),$u=Me("__emscripten_stack_alloc"),qu=Me("_emscripten_stack_get_current"),Ka=Me("___cxa_decrement_exception_refcount"),io=Me("___cxa_increment_exception_refcount"),Yu=Me("___get_exception_message"),ju=Me("___cxa_can_catch"),Ku=Me("___cxa_get_exception_ptr");function cg(s){Hu=G("__getTypeName",1),qa=G("malloc",1),sg=G("__cxa_free_exception",1),Ya=G("fflush",1),kn=G("free",1),ja=s.emscripten_stack_get_end,og=s.emscripten_stack_get_base,Vu=G("strerror",1),_e=G("setThrew",2),Gu=G("_emscripten_tempret_set",1),Wu=s.emscripten_stack_init,ag=s.emscripten_stack_get_free,Xu=s._emscripten_stack_restore,$u=s._emscripten_stack_alloc,qu=s.emscripten_stack_get_current,Ka=G("__cxa_decrement_exception_refcount",1),io=G("__cxa_increment_exception_refcount",1),Yu=G("__get_exception_message",3),ju=G("__cxa_can_catch",3),Ku=G("__cxa_get_exception_ptr",1)}var Zu={__assert_fail:ie,__cxa_begin_catch:Ie,__cxa_current_primary_exception:Ue,__cxa_end_catch:Je,__cxa_find_matching_catch_2:Vt,__cxa_find_matching_catch_3:Qt,__cxa_rethrow:on,__cxa_rethrow_primary_exception:Fn,__cxa_throw:bt,__cxa_uncaught_exceptions:st,__resumeException:Hi,__syscall_dup3:Xf,__syscall_fcntl64:$f,__syscall_fstat64:qf,__syscall_ioctl:Yf,__syscall_lstat64:jf,__syscall_newfstatat:Kf,__syscall_openat:Zf,__syscall_stat64:Jf,_abort_js:Qf,_embind_register_bigint:tp,_embind_register_bool:np,_embind_register_class:xp,_embind_register_class_class_function:bp,_embind_register_class_constructor:Ep,_embind_register_class_function:Ap,_embind_register_class_property:Tp,_embind_register_constant:Rp,_embind_register_emval:Ru,_embind_register_enum:Pp,_embind_register_enum_value:Ip,_embind_register_float:Dp,_embind_register_function:Np,_embind_register_integer:Fp,_embind_register_memory_view:Up,_embind_register_optional:kp,_embind_register_std_string:Bp,_embind_register_std_wstring:$p,_embind_register_user_type:qp,_embind_register_void:Yp,_emscripten_throw_longjmp:jp,_emval_as:Kp,_emval_as_int64:Zp,_emval_call:Jp,_emval_call_method:em,_emval_decref:Ga,_emval_get_global:tm,_emval_get_method_caller:rm,_emval_get_property:sm,_emval_incref:om,_emval_is_number:am,_emval_is_string:cm,_emval_new_array:lm,_emval_new_cstring:um,_emval_run_destructors:hm,_emval_take_value:dm,_emval_throw:fm,_localtime_js:ym,_mktime_js:xm,_tzset_js:Sm,clock_time_get:bm,emscripten_asm_const_int:Tm,emscripten_date_now:Nu,emscripten_get_heap_max:Rm,emscripten_get_now:Du,emscripten_resize_heap:Im,environ_get:Dm,environ_sizes_get:Nm,exit:Om,fd_close:km,fd_read:zm,fd_seek:Hm,fd_write:Gm,invoke_ddd:G_,invoke_dddi:Qg,invoke_dddidi:e_,invoke_ddidi:Jg,invoke_di:t_,invoke_didd:L_,invoke_dii:Gg,invoke_diii:wg,invoke_diiii:Zg,invoke_diiiidd:jg,invoke_diiiidi:Ag,invoke_diiiii:_g,invoke_diiiiii:Lg,invoke_diiiiiii:n_,invoke_diiiiiiiii:Pg,invoke_diiiiiiiiiiii:Ig,invoke_fiii:Z_,invoke_i:vg,invoke_id:m_,invoke_ii:hg,invoke_iid:d_,invoke_iidiii:zg,invoke_iidiiid:kg,invoke_iidiiiiidi:Hg,invoke_iii:lg,invoke_iiid:Vg,invoke_iiididdddddd:Bg,invoke_iiidiiiiiiii:Og,invoke_iiii:pg,invoke_iiiidddiiiii:r_,invoke_iiiii:Mg,invoke_iiiiid:C_,invoke_iiiiii:x_,invoke_iiiiiii:p_,invoke_iiiiiiii:h_,invoke_iiiiiiiidd:P_,invoke_iiiiiiiii:Yg,invoke_iiiiiiiiid:V_,invoke_iiiiiiiiii:v_,invoke_iiiiiiiiiidddiiiiiiiii:Ug,invoke_iiiiiiiiiii:g_,invoke_iiiiiiiiiiii:J_,invoke_iiiiiiiiiiiii:D_,invoke_iiij:y_,invoke_iiji:__,invoke_j:j_,invoke_ji:z_,invoke_jiiii:S_,invoke_jij:N_,invoke_v:fg,invoke_vi:dg,invoke_vid:f_,invoke_viddd:w_,invoke_vidddd:b_,invoke_vidi:Kg,invoke_vidiii:Ng,invoke_vif:$_,invoke_vii:gg,invoke_viid:$g,invoke_viiddi:R_,invoke_viiddidi:T_,invoke_viiddii:i_,invoke_viidi:Xg,invoke_viidii:Eg,invoke_viidiii:l_,invoke_viidiiid:a_,invoke_viidiiiii:Fg,invoke_viidiiiiidi:u_,invoke_viidiiiiiiii:Dg,invoke_viii:ug,invoke_viiid:Rg,invoke_viiidd:A_,invoke_viiidi:Wg,invoke_viiididdddddd:c_,invoke_viiidiiiiiiii:o_,invoke_viiii:xg,invoke_viiiiddd:E_,invoke_viiiidi:W_,invoke_viiiifi:X_,invoke_viiiii:mg,invoke_viiiiid:Tg,invoke_viiiiii:yg,invoke_viiiiiii:bg,invoke_viiiiiiii:qg,invoke_viiiiiiiii:I_,invoke_viiiiiiiiii:k_,invoke_viiiiiiiiiidddiiiiiiiii:s_,invoke_viiiiiiiiiii:H_,invoke_viiiiiiiiiiid:Cg,invoke_viiiiiiiiiiiii:U_,invoke_viiiiiiiiiiiiii:O_,invoke_viiiiiiiiiiiiiii:Q_,invoke_viiiiiiiiiiiiiiiiii:B_,invoke_viiiij:q_,invoke_viiij:Sg,invoke_viij:Y_,invoke_viijii:K_,invoke_vij:F_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:M_,llvm_eh_typeid_for:Wm},Yi=await Wt();function lg(s,a,u){var p=pe();try{return ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function ug(s,a,u,p){var _=pe();try{ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function hg(s,a){var u=pe();try{return ve(s)(a)}catch(p){if(fe(u),!(p instanceof W))throw p;_e(1,0)}}function dg(s,a){var u=pe();try{ve(s)(a)}catch(p){if(fe(u),!(p instanceof W))throw p;_e(1,0)}}function fg(s){var a=pe();try{ve(s)()}catch(u){if(fe(a),!(u instanceof W))throw u;_e(1,0)}}function pg(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function mg(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function gg(s,a,u){var p=pe();try{ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function _g(s,a,u,p,_,S){var b=pe();try{return ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function vg(s){var a=pe();try{return ve(s)()}catch(u){if(fe(a),!(u instanceof W))throw u;_e(1,0)}}function yg(s,a,u,p,_,S,b){var T=pe();try{ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function xg(s,a,u,p,_){var S=pe();try{ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function Sg(s,a,u,p,_){var S=pe();try{ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function Mg(s,a,u,p,_){var S=pe();try{return ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function wg(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function bg(s,a,u,p,_,S,b,T){var F=pe();try{ve(s)(a,u,p,_,S,b,T)}catch(V){if(fe(F),!(V instanceof W))throw V;_e(1,0)}}function Eg(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function Ag(s,a,u,p,_,S,b){var T=pe();try{return ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function Tg(s,a,u,p,_,S,b){var T=pe();try{ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function Rg(s,a,u,p,_){var S=pe();try{ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function Cg(s,a,u,p,_,S,b,T,F,V,j,ne,ae){var se=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae)}catch(ge){if(fe(se),!(ge instanceof W))throw ge;_e(1,0)}}function Pg(s,a,u,p,_,S,b,T,F,V){var j=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V)}catch(ne){if(fe(j),!(ne instanceof W))throw ne;_e(1,0)}}function Ig(s,a,u,p,_,S,b,T,F,V,j,ne,ae){var se=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae)}catch(ge){if(fe(se),!(ge instanceof W))throw ge;_e(1,0)}}function Lg(s,a,u,p,_,S,b){var T=pe();try{return ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function Dg(s,a,u,p,_,S,b,T,F,V,j,ne){var ae=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne)}catch(se){if(fe(ae),!(se instanceof W))throw se;_e(1,0)}}function Ng(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function Fg(s,a,u,p,_,S,b,T,F){var V=pe();try{ve(s)(a,u,p,_,S,b,T,F)}catch(j){if(fe(V),!(j instanceof W))throw j;_e(1,0)}}function Ug(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt,Mt,an,jt){var fn=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt,Mt,an,jt)}catch(Pt){if(fe(fn),!(Pt instanceof W))throw Pt;_e(1,0)}}function Og(s,a,u,p,_,S,b,T,F,V,j,ne){var ae=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne)}catch(se){if(fe(ae),!(se instanceof W))throw se;_e(1,0)}}function kg(s,a,u,p,_,S,b){var T=pe();try{return ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function Bg(s,a,u,p,_,S,b,T,F,V,j,ne){var ae=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne)}catch(se){if(fe(ae),!(se instanceof W))throw se;_e(1,0)}}function zg(s,a,u,p,_,S){var b=pe();try{return ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function Hg(s,a,u,p,_,S,b,T,F,V){var j=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V)}catch(ne){if(fe(j),!(ne instanceof W))throw ne;_e(1,0)}}function Vg(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function Gg(s,a,u){var p=pe();try{return ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function Wg(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function Xg(s,a,u,p,_){var S=pe();try{ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function $g(s,a,u,p){var _=pe();try{ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function qg(s,a,u,p,_,S,b,T,F){var V=pe();try{ve(s)(a,u,p,_,S,b,T,F)}catch(j){if(fe(V),!(j instanceof W))throw j;_e(1,0)}}function Yg(s,a,u,p,_,S,b,T,F){var V=pe();try{return ve(s)(a,u,p,_,S,b,T,F)}catch(j){if(fe(V),!(j instanceof W))throw j;_e(1,0)}}function jg(s,a,u,p,_,S,b){var T=pe();try{return ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function Kg(s,a,u,p){var _=pe();try{ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function Zg(s,a,u,p,_){var S=pe();try{return ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function Jg(s,a,u,p,_){var S=pe();try{return ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function Qg(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function e_(s,a,u,p,_,S){var b=pe();try{return ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function t_(s,a){var u=pe();try{return ve(s)(a)}catch(p){if(fe(u),!(p instanceof W))throw p;_e(1,0)}}function n_(s,a,u,p,_,S,b,T){var F=pe();try{return ve(s)(a,u,p,_,S,b,T)}catch(V){if(fe(F),!(V instanceof W))throw V;_e(1,0)}}function i_(s,a,u,p,_,S,b){var T=pe();try{ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function r_(s,a,u,p,_,S,b,T,F,V,j,ne){var ae=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne)}catch(se){if(fe(ae),!(se instanceof W))throw se;_e(1,0)}}function s_(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt,Mt,an,jt,fn){var Pt=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt,Mt,an,jt,fn)}catch(ji){if(fe(Pt),!(ji instanceof W))throw ji;_e(1,0)}}function o_(s,a,u,p,_,S,b,T,F,V,j,ne,ae){var se=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae)}catch(ge){if(fe(se),!(ge instanceof W))throw ge;_e(1,0)}}function a_(s,a,u,p,_,S,b,T){var F=pe();try{ve(s)(a,u,p,_,S,b,T)}catch(V){if(fe(F),!(V instanceof W))throw V;_e(1,0)}}function c_(s,a,u,p,_,S,b,T,F,V,j,ne,ae){var se=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae)}catch(ge){if(fe(se),!(ge instanceof W))throw ge;_e(1,0)}}function l_(s,a,u,p,_,S,b){var T=pe();try{ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function u_(s,a,u,p,_,S,b,T,F,V,j){var ne=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j)}catch(ae){if(fe(ne),!(ae instanceof W))throw ae;_e(1,0)}}function h_(s,a,u,p,_,S,b,T){var F=pe();try{return ve(s)(a,u,p,_,S,b,T)}catch(V){if(fe(F),!(V instanceof W))throw V;_e(1,0)}}function d_(s,a,u){var p=pe();try{return ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function f_(s,a,u){var p=pe();try{ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function p_(s,a,u,p,_,S,b){var T=pe();try{return ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function m_(s,a){var u=pe();try{return ve(s)(a)}catch(p){if(fe(u),!(p instanceof W))throw p;_e(1,0)}}function g_(s,a,u,p,_,S,b,T,F,V,j){var ne=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j)}catch(ae){if(fe(ne),!(ae instanceof W))throw ae;_e(1,0)}}function __(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function v_(s,a,u,p,_,S,b,T,F,V){var j=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V)}catch(ne){if(fe(j),!(ne instanceof W))throw ne;_e(1,0)}}function y_(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function x_(s,a,u,p,_,S){var b=pe();try{return ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function S_(s,a,u,p,_){var S=pe();try{return ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;return _e(1,0),0n}}function M_(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt,Mt,an,jt,fn,Pt,ji,i0,r0,s0,o0,a0,c0,l0,u0,h0,d0,f0,p0,m0,g0,_0,v0,y0,x0,S0,M0,w0,b0,E0,A0,T0,R0,C0,P0,I0,L0,D0,N0,F0,U0,O0,k0,B0,z0,H0,V0,G0,W0,X0,$0,q0,Y0,j0,K0,Z0,J0,Q0,ev,tv,nv,iv,rv,sv,ov,av,cv,lv){var uv=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt,Mt,an,jt,fn,Pt,ji,i0,r0,s0,o0,a0,c0,l0,u0,h0,d0,f0,p0,m0,g0,_0,v0,y0,x0,S0,M0,w0,b0,E0,A0,T0,R0,C0,P0,I0,L0,D0,N0,F0,U0,O0,k0,B0,z0,H0,V0,G0,W0,X0,$0,q0,Y0,j0,K0,Z0,J0,Q0,ev,tv,nv,iv,rv,sv,ov,av,cv,lv)}catch(Qu){if(fe(uv),!(Qu instanceof W))throw Qu;_e(1,0)}}function w_(s,a,u,p,_){var S=pe();try{ve(s)(a,u,p,_)}catch(b){if(fe(S),!(b instanceof W))throw b;_e(1,0)}}function b_(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function E_(s,a,u,p,_,S,b,T){var F=pe();try{ve(s)(a,u,p,_,S,b,T)}catch(V){if(fe(F),!(V instanceof W))throw V;_e(1,0)}}function A_(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function T_(s,a,u,p,_,S,b,T){var F=pe();try{ve(s)(a,u,p,_,S,b,T)}catch(V){if(fe(F),!(V instanceof W))throw V;_e(1,0)}}function R_(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function C_(s,a,u,p,_,S){var b=pe();try{return ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function P_(s,a,u,p,_,S,b,T,F,V){var j=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V)}catch(ne){if(fe(j),!(ne instanceof W))throw ne;_e(1,0)}}function I_(s,a,u,p,_,S,b,T,F,V){var j=pe();try{ve(s)(a,u,p,_,S,b,T,F,V)}catch(ne){if(fe(j),!(ne instanceof W))throw ne;_e(1,0)}}function L_(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function D_(s,a,u,p,_,S,b,T,F,V,j,ne,ae){var se=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae)}catch(ge){if(fe(se),!(ge instanceof W))throw ge;_e(1,0)}}function N_(s,a,u){var p=pe();try{return ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;return _e(1,0),0n}}function F_(s,a,u){var p=pe();try{ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function U_(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se){var ge=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se)}catch(Ge){if(fe(ge),!(Ge instanceof W))throw Ge;_e(1,0)}}function O_(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge){var Ge=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge)}catch(mt){if(fe(Ge),!(mt instanceof W))throw mt;_e(1,0)}}function k_(s,a,u,p,_,S,b,T,F,V,j){var ne=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j)}catch(ae){if(fe(ne),!(ae instanceof W))throw ae;_e(1,0)}}function B_(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt){var Mt=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge,mt,dt,Nt)}catch(an){if(fe(Mt),!(an instanceof W))throw an;_e(1,0)}}function z_(s,a){var u=pe();try{return ve(s)(a)}catch(p){if(fe(u),!(p instanceof W))throw p;return _e(1,0),0n}}function H_(s,a,u,p,_,S,b,T,F,V,j,ne){var ae=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne)}catch(se){if(fe(ae),!(se instanceof W))throw se;_e(1,0)}}function V_(s,a,u,p,_,S,b,T,F,V){var j=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V)}catch(ne){if(fe(j),!(ne instanceof W))throw ne;_e(1,0)}}function G_(s,a,u){var p=pe();try{return ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function W_(s,a,u,p,_,S,b){var T=pe();try{ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function X_(s,a,u,p,_,S,b){var T=pe();try{ve(s)(a,u,p,_,S,b)}catch(F){if(fe(T),!(F instanceof W))throw F;_e(1,0)}}function $_(s,a,u){var p=pe();try{ve(s)(a,u)}catch(_){if(fe(p),!(_ instanceof W))throw _;_e(1,0)}}function q_(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function Y_(s,a,u,p){var _=pe();try{ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function j_(s){var a=pe();try{return ve(s)()}catch(u){if(fe(a),!(u instanceof W))throw u;return _e(1,0),0n}}function K_(s,a,u,p,_,S){var b=pe();try{ve(s)(a,u,p,_,S)}catch(T){if(fe(b),!(T instanceof W))throw T;_e(1,0)}}function Z_(s,a,u,p){var _=pe();try{return ve(s)(a,u,p)}catch(S){if(fe(_),!(S instanceof W))throw S;_e(1,0)}}function J_(s,a,u,p,_,S,b,T,F,V,j,ne){var ae=pe();try{return ve(s)(a,u,p,_,S,b,T,F,V,j,ne)}catch(se){if(fe(ae),!(se instanceof W))throw se;_e(1,0)}}function Q_(s,a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge){var mt=pe();try{ve(s)(a,u,p,_,S,b,T,F,V,j,ne,ae,se,ge,Ge)}catch(dt){if(fe(mt),!(dt instanceof W))throw dt;_e(1,0)}}var Ju;function e0(){Wu(),te()}function Za(){if(rt>0){He=Za;return}if(e0(),tt(),rt>0){He=Za;return}function s(){z(!Ju),Ju=!0,t.calledRun=!0,!Z&&(we(),Qe?.(t),t.onRuntimeInitialized?.(),ye("onRuntimeInitialized"),z(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Oe())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),xe()}function t0(){var s=C,a=P,u=!1;C=P=p=>{u=!0};try{Ya(0),["stdout","stderr"].forEach(p=>{var _=E.analyzePath("/dev/"+p);if(_){var S=_.object,b=S.rdev,T=bn.ttys[b];T?.output?.length&&(u=!0)}})}catch{}C=s,P=a,u&&Yn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function n0(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ye("preInit")}n0(),Za(),Ee?e=t:e=new Promise((s,a)=>{Qe=s,We=a});for(let s of Object.keys(t))s in r||Object.defineProperty(r,s,{configurable:!0,get(){Fe(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e}),_f=Ob;var Si=[61,512,256,128,14];async function vf(r){let e=new Float32Array(await(await fetch(r)).arrayBuffer()),t=0,n=h=>e.subarray(t,t+=h),i=n(Si[0]),o=n(Si[0]),c=[];for(let h=0;h<4;h++)c.push({n:Si[h],m:Si[h+1],w:n(Si[h]*Si[h+1]),b:n(Si[h+1])});let l=Si.slice(1).map(h=>new Float32Array(h)),d=new Float32Array(Si[0]);return{run(h){for(let m=0;m<d.length;m++)d[m]=(h[m]-i[m])/o[m];let f=d;for(let m=0;m<4;m++){let{n:g,m:x,w:M,b:w}=c[m],y=l[m];for(let v=0;v<x;v++){let L=w[v],C=v*g;for(let P=0;P<g;P++)L+=M[C+P]*f[P];y[v]=m<3&&L<0?Math.expm1(L):L}f=y}return f}}}function yf(r,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=r.getIndex(),i=r.getAttribute("position"),o=n?n.count:i.count,c=0,l=Object.keys(r.attributes),d={},h={},f=[],m=["getX","getY","getZ","getW"],g=["setX","setY","setZ","setW"];for(let L=0,C=l.length;L<C;L++){let P=l[L],O=r.attributes[P];d[P]=new It(new O.array.constructor(O.count*O.itemSize),O.itemSize,O.normalized);let N=r.morphAttributes[P];N&&(h[P]=new It(new N.array.constructor(N.count*N.itemSize),N.itemSize,N.normalized))}let x=e*.5,M=Math.log10(1/e),w=Math.pow(10,M),y=x*w;for(let L=0;L<o;L++){let C=n?n.getX(L):L,P="";for(let O=0,N=l.length;O<N;O++){let U=l[O],X=r.getAttribute(U),I=X.itemSize;for(let R=0;R<I;R++)P+=`${~~(X[m[R]](C)*w+y)},`}if(P in t)f.push(t[P]);else{for(let O=0,N=l.length;O<N;O++){let U=l[O],X=r.getAttribute(U),I=r.morphAttributes[U],R=X.itemSize,q=d[U],ee=h[U];for(let B=0;B<R;B++){let Z=m[B],oe=g[B];if(q[oe](c,X[Z](C)),I)for(let z=0,Se=I.length;z<Se;z++)ee[z][oe](c,I[z][Z](C))}}t[P]=c,f.push(c),c++}}let v=r.clone();for(let L in r.attributes){let C=d[L];if(v.setAttribute(L,new It(C.array.slice(0,c*C.itemSize),C.itemSize,C.normalized)),L in h)for(let P=0;P<h[L].length;P++){let O=h[L][P];v.morphAttributes[L][P]=new It(O.array.slice(0,c*O.itemSize),O.itemSize,O.normalized)}}return v.setIndex(f),v}function Ml(r,e){if(e===ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Us||e===ya){let t=r.getIndex();if(t===null){let c=[],l=r.getAttribute("position");if(l!==void 0){for(let d=0;d<l.count;d++)c.push(d);r.setIndex(c),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Us)for(let c=1;c<=n;c++)i.push(t.getX(0)),i.push(t.getX(c)),i.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(i.push(t.getX(c)),i.push(t.getX(c+1)),i.push(t.getX(c+2))):(i.push(t.getX(c+2)),i.push(t.getX(c+1)),i.push(t.getX(c)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let o=r.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function wl(r,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,i=[new H,new H,new H],o=new H,c=new H,l=new H,d=new H;function h(w){let y=~~(w.x*n),v=~~(w.y*n),L=~~(w.z*n);return`${y},${v},${L}`}let f=r.index?r.toNonIndexed():r,m=f.attributes.position,g={};for(let w=0,y=m.count/3;w<y;w++){let v=3*w,L=i[0].fromBufferAttribute(m,v+0),C=i[1].fromBufferAttribute(m,v+1),P=i[2].fromBufferAttribute(m,v+2);o.subVectors(P,C),c.subVectors(L,C);let O=new H().crossVectors(o,c).normalize();for(let N=0;N<3;N++){let U=i[N],X=h(U);X in g||(g[X]=[]),g[X].push(O)}}let x=new Float32Array(m.count*3),M=new It(x,3,!1);for(let w=0,y=m.count/3;w<y;w++){let v=3*w,L=i[0].fromBufferAttribute(m,v+0),C=i[1].fromBufferAttribute(m,v+1),P=i[2].fromBufferAttribute(m,v+2);o.subVectors(P,C),c.subVectors(L,C),l.crossVectors(o,c).normalize();for(let O=0;O<3;O++){let N=i[O],U=h(N),X=g[U];d.set(0,0,0);for(let I=0,R=X.length;I<R;I++){let q=X[I];l.dot(q)>t&&d.add(q)}d.normalize(),M.setXYZ(v+O,d.x,d.y,d.z)}}return f.setAttribute("normal",M),f}var Ma=class extends qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Wl(t)})}load(e,t,n,i){let o=this,c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){let h=ki.extractUrlBase(e);c=ki.resolveURL(h,this.path)}else c=ki.extractUrlBase(e);this.manager.itemStart(e);let l=function(h){i?i(h):console.error(h),o.manager.itemError(e),o.manager.itemEnd(e)},d=new hr(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{o.parse(h,c,function(f){t(f),o.manager.itemEnd(e)},l)}catch(f){l(f)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let o,c={},l={},d=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===bf){try{c[_t.KHR_BINARY_GLTF]=new Xl(e)}catch(m){i&&i(m);return}o=JSON.parse(c[_t.KHR_BINARY_GLTF].content)}else o=JSON.parse(d.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Jl(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let m=this.pluginCallbacks[f](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[m.name]=m,c[m.name]=!0}if(o.extensionsUsed)for(let f=0;f<o.extensionsUsed.length;++f){let m=o.extensionsUsed[f],g=o.extensionsRequired||[];switch(m){case _t.KHR_MATERIALS_UNLIT:c[m]=new Rl;break;case _t.KHR_DRACO_MESH_COMPRESSION:c[m]=new $l(o,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:c[m]=new ql;break;case _t.KHR_MESH_QUANTIZATION:c[m]=new Yl;break;default:g.indexOf(m)>=0&&l[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(c),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,o){n.parse(e,t,i,o)})}};function kb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tl=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let o=t.json,d=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],h,f=new $e(16777215);d.color!==void 0&&f.setRGB(d.color[0],d.color[1],d.color[2],rn);let m=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new dr(f),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new pa(f),h.distance=m;break;case"spot":h=new fa(f),h.distance=m,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),h.decay=2,zi(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,o=n.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(d){return n._getNodeRef(t.cache,l,d)})}},Rl=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(e,t,n){let i=[];e.color=new $e(1,1,1),e.opacity=1;let o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){let c=o.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],rn),e.opacity=c[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,un))}return Promise.all(i)}},Cl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}},Pl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){let l=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(l,l)}return Promise.all(o)}},Il=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}},Ll=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(o)}},Dl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;let c=i.extensions[this.name];if(c.sheenColorFactor!==void 0){let l=c.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],rn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",c.sheenColorTexture,un)),c.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(o)}},Nl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(o)}},Fl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;let l=c.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(l[0],l[1],l[2],rn),Promise.all(o)}},Ul=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}},Ol=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",c.specularTexture));let l=c.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(l[0],l[1],l[2],rn),c.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",c.specularColorTexture,un)),Promise.all(o)}},kl=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(o)}},Bl=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let o=[],c=i.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(o)}},zl=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let o=i.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,c)}},Hl=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;let c=o.extensions[t],l=i.images[c.source],d=n.textureLoader;if(l.uri){let h=n.options.manager.getHandler(l.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,c.source,d);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vl=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;let c=o.extensions[t],l=i.images[c.source],d=n.textureLoader;if(l.uri){let h=n.options.manager.getHandler(l.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,c.source,d);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Gl=class{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){let d=i.byteOffset||0,h=i.byteLength||0,f=i.count,m=i.byteStride,g=new Uint8Array(l,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(f,m,g,i.mode,i.filter).then(function(x){return x.buffer}):c.ready.then(function(){let x=new ArrayBuffer(f*m);return c.decodeGltfBuffer(new Uint8Array(x),f,m,g,i.mode,i.filter),x})})}else return null}},Wl=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let h of i.primitives)if(h.mode!==Dn.TRIANGLES&&h.mode!==Dn.TRIANGLE_STRIP&&h.mode!==Dn.TRIANGLE_FAN&&h.mode!==void 0)return null;let c=n.extensions[this.name].attributes,l=[],d={};for(let h in c)l.push(this.parser.getDependency("accessor",c[h]).then(f=>(d[h]=f,d[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{let f=h.pop(),m=f.isGroup?f.children:[f],g=h[0].count,x=[];for(let M of m){let w=new ht,y=new H,v=new yn,L=new H(1,1,1),C=new ea(M.geometry,M.material,g);for(let P=0;P<g;P++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,P),d.ROTATION&&v.fromBufferAttribute(d.ROTATION,P),d.SCALE&&L.fromBufferAttribute(d.SCALE,P),C.setMatrixAt(P,w.compose(y,v,L));for(let P in d)if(P==="_COLOR_0"){let O=d[P];C.instanceColor=new lr(O.array,O.itemSize,O.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&M.geometry.setAttribute(P,d[P]);zt.prototype.copy.call(C,M),this.parser.assignFinalMaterial(C),x.push(C)}return f.isGroup?(f.clear(),f.add(...x),f):x[0]}))}},bf="glTF",Os=12,xf={JSON:1313821514,BIN:5130562},Xl=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Os),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Os,o=new DataView(e,Os),c=0;for(;c<i;){let l=o.getUint32(c,!0);c+=4;let d=o.getUint32(c,!0);if(c+=4,d===xf.JSON){let h=new Uint8Array(e,Os+c,l);this.content=n.decode(h)}else if(d===xf.BIN){let h=Os+c;this.body=e.slice(h,h+l)}c+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$l=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,l={},d={},h={};for(let f in c){let m=Kl[f]||f.toLowerCase();l[m]=c[f]}for(let f in e.attributes){let m=Kl[f]||f.toLowerCase();if(c[f]!==void 0){let g=n.accessors[e.attributes[f]],x=Jr[g.componentType];h[m]=x.name,d[m]=g.normalized===!0}}return t.getDependency("bufferView",o).then(function(f){return new Promise(function(m,g){i.decodeDracoFile(f,function(x){for(let M in x.attributes){let w=x.attributes[M],y=d[M];y!==void 0&&(w.normalized=y)}m(x)},l,h,rn,g)})})}},ql=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yl=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},wa=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let c=0;c!==i;c++)t[c]=n[o+c];return t}interpolate_(e,t,n,i){let o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=l*2,h=l*3,f=i-t,m=(n-t)/f,g=m*m,x=g*m,M=e*h,w=M-h,y=-2*x+3*g,v=x-g,L=1-y,C=v-g+m;for(let P=0;P!==l;P++){let O=c[w+P+l],N=c[w+P+d]*f,U=c[M+P+l],X=c[M+P]*f;o[P]=L*O+C*N+y*U+v*X}return o}},Bb=new yn,jl=class extends wa{interpolate_(e,t,n,i){let o=super.interpolate_(e,t,n,i);return Bb.fromArray(o).normalize().toArray(o),o}},Dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:dn,9729:_n,9984:gl,9985:ys,9986:Nr,9987:Qn},Mf={33071:mi,33648:Ms,10497:_i},bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zb={CUBICSPLINE:void 0,LINEAR:or,STEP:Wr},El={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),r.DefaultMaterial}function fr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vb(r,e,t){let n=!1,i=!1,o=!1;for(let h=0,f=e.length;h<f;h++){let m=e[h];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(r);let c=[],l=[],d=[];for(let h=0,f=e.length;h<f;h++){let m=e[h];if(n){let g=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):r.attributes.position;c.push(g)}if(i){let g=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):r.attributes.normal;l.push(g)}if(o){let g=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):r.attributes.color;d.push(g)}}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){let f=h[0],m=h[1],g=h[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=m),o&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function Gb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wb(r){let e,t=r.extensions&&r.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Al(t.attributes):e=r.indices+":"+Al(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Al(r.targets[n]);return e}function Al(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Zl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var $b=new ht,Jl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,o=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,o=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&o<98?this.textureLoader=new ha(this.options.manager):this.textureLoader=new ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){let l={scene:c[0][i.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:i.asset,parser:n,userData:{}};return fr(o,l,i),zi(l,i),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(l)})).then(function(){for(let d of l.scenes)d.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){let c=t[i].joints;for(let l=0,d=c.length;l<d;l++)e[c[l]].isBone=!0}for(let i=0,o=e.length;i<o;i++){let c=e[i];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),o=(c,l)=>{let d=this.associations.get(c);d!=null&&this.associations.set(l,d);for(let[h,f]of c.children.entries())o(f,l.children[h])};return o(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let o=e(t[i]);o&&n.push(o)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(o,c){n.load(ki.resolveURL(t.uri,i.path),o,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let c=bl[i.type],l=Jr[i.componentType],d=i.normalized===!0,h=new l(i.count*c);return Promise.resolve(new It(h,c,d))}let o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(c){let l=c[0],d=bl[i.type],h=Jr[i.componentType],f=h.BYTES_PER_ELEMENT,m=f*d,g=i.byteOffset||0,x=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,M=i.normalized===!0,w,y;if(x&&x!==m){let v=Math.floor(g/x),L="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count,C=t.cache.get(L);C||(w=new h(l,v*x,i.count*x/f),C=new Rs(w,x/f),t.cache.add(L,C)),y=new Cs(C,d,g%x/f,M)}else l===null?w=new h(i.count*d):w=new h(l,g,i.count*d),y=new It(w,d,M);if(i.sparse!==void 0){let v=bl.SCALAR,L=Jr[i.sparse.indices.componentType],C=i.sparse.indices.byteOffset||0,P=i.sparse.values.byteOffset||0,O=new L(c[1],C,i.sparse.count*v),N=new h(c[2],P,i.sparse.count*d);l!==null&&(y=new It(y.array.slice(),y.itemSize,y.normalized));for(let U=0,X=O.length;U<X;U++){let I=O[U];if(y.setX(I,N[U*d]),d>=2&&y.setY(I,N[U*d+1]),d>=3&&y.setZ(I,N[U*d+2]),d>=4&&y.setW(I,N[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){let t=this.json,n=this.options,o=t.textures[e].source,c=t.images[o],l=this.textureLoader;if(c.uri){let d=n.manager.getHandler(c.uri);d!==null&&(l=d)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,n){let i=this,o=this.json,c=o.textures[e],l=o.images[t],d=(l.uri||l.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];let h=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=c.name||l.name||"",f.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(f.name=l.uri);let g=(o.samplers||{})[c.sampler]||{};return f.magFilter=Sf[g.magFilter]||_n,f.minFilter=Sf[g.minFilter]||Qn,f.wrapS=Mf[g.wrapS]||_i,f.wrapT=Mf[g.wrapT]||_i,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){let n=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());let c=i.images[e],l=self.URL||self.webkitURL,d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=n.getDependency("bufferView",c.bufferView).then(function(m){h=!0;let g=new Blob([m],{type:c.mimeType});return d=l.createObjectURL(g),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let f=Promise.resolve(d).then(function(m){return new Promise(function(g,x){let M=g;t.isImageBitmapLoader===!0&&(M=function(w){let y=new tn(w);y.needsUpdate=!0,g(y)}),t.load(ki.resolveURL(m,o.path),M,void 0,x)})}).then(function(m){return h===!0&&l.revokeObjectURL(d),m.userData.mimeType=c.mimeType||Xb(c.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),m});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let o=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),o.extensions[_t.KHR_TEXTURE_TRANSFORM]){let l=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let d=o.associations.get(c);c=o.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(c,l),o.associations.set(c,d)}}return i!==void 0&&(c.colorSpace=i),e[t]=c,c})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+n.uuid,d=this.cache.get(l);d||(d=new Is,Sn.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(l,d)),n=d}else if(e.isLine){let l="LineBasicMaterial:"+n.uuid,d=this.cache.get(l);d||(d=new ur,Sn.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(l,d)),n=d}if(i||o||c){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),c&&(l+="flat-shading:");let d=this.cache.get(l);d||(d=n.clone(),o&&(d.vertexColors=!0),c&&(d.flatShading=!0),i&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(l,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return Ni}loadMaterial(e){let t=this,n=this.json,i=this.extensions,o=n.materials[e],c,l={},d=o.extensions||{},h=[];if(d[_t.KHR_MATERIALS_UNLIT]){let m=i[_t.KHR_MATERIALS_UNLIT];c=m.getMaterialType(),h.push(m.extendParams(l,o,t))}else{let m=o.pbrMetallicRoughness||{};if(l.color=new $e(1,1,1),l.opacity=1,Array.isArray(m.baseColorFactor)){let g=m.baseColorFactor;l.color.setRGB(g[0],g[1],g[2],rn),l.opacity=g[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",m.baseColorTexture,un)),l.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,l.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",m.metallicRoughnessTexture))),c=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=Gn);let f=o.alphaMode||El.OPAQUE;if(f===El.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,f===El.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&c!==Mn&&(h.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new ct(1,1),o.normalTexture.scale!==void 0)){let m=o.normalTexture.scale;l.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&c!==Mn&&(h.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&c!==Mn){let m=o.emissiveFactor;l.emissive=new $e().setRGB(m[0],m[1],m[2],rn)}return o.emissiveTexture!==void 0&&c!==Mn&&h.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,un)),Promise.all(h).then(function(){let m=new c(l);return o.name&&(m.name=o.name),zi(m,o),t.associations.set(m,{materials:e}),o.extensions&&fr(i,m,o),m})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function o(l){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(d){return wf(d,l,t)})}let c=[];for(let l=0,d=e.length;l<d;l++){let h=e[l],f=Wb(h),m=i[f];if(m)c.push(m.promise);else{let g;h.extensions&&h.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?g=o(h):g=wf(new nn,h,t),i[f]={primitive:h,promise:g},c.push(g)}}return Promise.all(c)}loadMesh(e){let t=this,n=this.json,i=this.extensions,o=n.meshes[e],c=o.primitives,l=[];for(let d=0,h=c.length;d<h;d++){let f=c[d].material===void 0?Hb(this.cache):this.getDependency("material",c[d].material);l.push(f)}return l.push(t.loadGeometries(c)),Promise.all(l).then(function(d){let h=d.slice(0,d.length-1),f=d[d.length-1],m=[];for(let x=0,M=f.length;x<M;x++){let w=f[x],y=c[x],v,L=h[x];if(y.mode===Dn.TRIANGLES||y.mode===Dn.TRIANGLE_STRIP||y.mode===Dn.TRIANGLE_FAN||y.mode===void 0)v=o.isSkinnedMesh===!0?new Zo(w,L):new kt(w,L),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),y.mode===Dn.TRIANGLE_STRIP?v.geometry=Ml(v.geometry,ya):y.mode===Dn.TRIANGLE_FAN&&(v.geometry=Ml(v.geometry,Us));else if(y.mode===Dn.LINES)v=new jr(w,L);else if(y.mode===Dn.LINE_STRIP)v=new Yr(w,L);else if(y.mode===Dn.LINE_LOOP)v=new ia(w,L);else if(y.mode===Dn.POINTS)v=new ra(w,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(v.geometry.morphAttributes).length>0&&Gb(v,o),v.name=t.createUniqueName(o.name||"mesh_"+e),zi(v,o),y.extensions&&fr(i,v,y),t.assignFinalMaterial(v),m.push(v)}for(let x=0,M=m.length;x<M;x++)t.associations.set(m[x],{meshes:e,primitives:x});if(m.length===1)return o.extensions&&fr(i,m[0],o),m[0];let g=new sn;o.extensions&&fr(i,g,o),t.associations.set(g,{meshes:e});for(let x=0,M=m.length;x<M;x++)g.add(m[x]);return g})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(rf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,o=t.joints.length;i<o;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let o=i.pop(),c=i,l=[],d=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];if(m){l.push(m);let g=new ht;o!==null&&g.fromArray(o.array,h*16),d.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Qo(l,d)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,c=[],l=[],d=[],h=[],f=[];for(let m=0,g=i.channels.length;m<g;m++){let x=i.channels[m],M=i.samplers[x.sampler],w=x.target,y=w.node,v=i.parameters!==void 0?i.parameters[M.input]:M.input,L=i.parameters!==void 0?i.parameters[M.output]:M.output;w.node!==void 0&&(c.push(this.getDependency("node",y)),l.push(this.getDependency("accessor",v)),d.push(this.getDependency("accessor",L)),h.push(M),f.push(w))}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(d),Promise.all(h),Promise.all(f)]).then(function(m){let g=m[0],x=m[1],M=m[2],w=m[3],y=m[4],v=[];for(let L=0,C=g.length;L<C;L++){let P=g[L],O=x[L],N=M[L],U=w[L],X=y[L];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();let I=n._createAnimationTracks(P,O,N,U,X);if(I)for(let R=0;R<I.length;R++)v.push(I[R])}return new ua(o,void 0,v)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){let c=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&c.traverse(function(l){if(l.isMesh)for(let d=0,h=i.weights.length;d<h;d++)l.morphTargetInfluences[d]=i.weights[d]}),c})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],o=n._loadNodeShallow(e),c=[],l=i.children||[];for(let h=0,f=l.length;h<f;h++)c.push(n.getDependency("node",l[h]));let d=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(c),d]).then(function(h){let f=h[0],m=h[1],g=h[2];g!==null&&f.traverse(function(x){x.isSkinnedMesh&&x.bind(g,$b)});for(let x=0,M=m.length;x<M;x++)f.add(m[x]);return f})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let o=t.nodes[e],c=o.name?i.createUniqueName(o.name):"",l=[],d=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&l.push(d),o.camera!==void 0&&l.push(i.getDependency("camera",o.camera).then(function(h){return i._getNodeRef(i.cameraCache,o.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let f;if(o.isBone===!0?f=new Ps:h.length>1?f=new sn:h.length===1?f=h[0]:f=new zt,f!==h[0])for(let m=0,g=h.length;m<g;m++)f.add(h[m]);if(o.name&&(f.userData.name=o.name,f.name=c),zi(f,o),o.extensions&&fr(n,f,o),o.matrix!==void 0){let m=new ht;m.fromArray(o.matrix),f.applyMatrix4(m)}else o.translation!==void 0&&f.position.fromArray(o.translation),o.rotation!==void 0&&f.quaternion.fromArray(o.rotation),o.scale!==void 0&&f.scale.fromArray(o.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,o=new sn;n.name&&(o.name=i.createUniqueName(n.name)),zi(o,n),n.extensions&&fr(t,o,n);let c=n.nodes||[],l=[];for(let d=0,h=c.length;d<h;d++)l.push(i.getDependency("node",c[d]));return Promise.all(l).then(function(d){for(let f=0,m=d.length;f<m;f++)o.add(d[f]);let h=f=>{let m=new Map;for(let[g,x]of i.associations)(g instanceof Sn||g instanceof tn)&&m.set(g,x);return f.traverse(g=>{let x=i.associations.get(g);x!=null&&m.set(g,x)}),m};return i.associations=h(o),o})}_createAnimationTracks(e,t,n,i,o){let c=[],l=e.name?e.name:e.uuid,d=[];Bi[o.path]===Bi.weights?e.traverse(function(g){g.morphTargetInfluences&&d.push(g.name?g.name:g.uuid)}):d.push(l);let h;switch(Bi[o.path]){case Bi.weights:h=yi;break;case Bi.rotation:h=ri;break;case Bi.position:case Bi.scale:h=xi;break;default:switch(n.itemSize){case 1:h=yi;break;case 2:case 3:default:h=xi;break}break}let f=i.interpolation!==void 0?zb[i.interpolation]:or,m=this._getArrayFromAccessor(n);for(let g=0,x=d.length;g<x;g++){let M=new h(d[g]+"."+Bi[o.path],t.array,m,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Zl(t.constructor),i=new Float32Array(t.length);for(let o=0,c=t.length;o<c;o++)i[o]=t[o]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ri?jl:wa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qb(r,e,t){let n=e.attributes,i=new xn;if(n.POSITION!==void 0){let l=t.json.accessors[n.POSITION],d=l.min,h=l.max;if(d!==void 0&&h!==void 0){if(i.set(new H(d[0],d[1],d[2]),new H(h[0],h[1],h[2])),l.normalized){let f=Zl(Jr[l.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let o=e.targets;if(o!==void 0){let l=new H,d=new H;for(let h=0,f=o.length;h<f;h++){let m=o[h];if(m.POSITION!==void 0){let g=t.json.accessors[m.POSITION],x=g.min,M=g.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),g.normalized){let w=Zl(Jr[g.componentType]);d.multiplyScalar(w)}l.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;let c=new Tn;i.getCenter(c.center),c.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=c}function wf(r,e,t){let n=e.attributes,i=[];function o(c,l){return t.getDependency("accessor",c).then(function(d){r.setAttribute(l,d)})}for(let c in n){let l=Kl[c]||c.toLowerCase();l in r.attributes||i.push(o(n[c],l))}if(e.indices!==void 0&&!r.index){let c=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(c)}return At.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),zi(r,e),qb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vb(r,e.targets,t):r})}var ba=class extends qn{constructor(e){super(e)}load(e,t,n,i){let o=this,c=new hr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{t(o.parse(l))}catch(d){i?i(d):console.error(d),o.manager.itemError(e)}},n,i)}parse(e){function t(h){let f=new DataView(h),m=32/8*3+32/8*3*3+16/8,g=f.getUint32(80,!0);if(80+32/8+g*m===f.byteLength)return!0;let M=[115,111,108,105,100];for(let w=0;w<5;w++)if(n(M,f,w))return!1;return!0}function n(h,f,m){for(let g=0,x=h.length;g<x;g++)if(h[g]!==f.getUint8(m+g))return!1;return!0}function i(h){let f=new DataView(h),m=f.getUint32(80,!0),g,x,M,w=!1,y,v,L,C,P;for(let q=0;q<70;q++)f.getUint32(q,!1)==1129270351&&f.getUint8(q+4)==82&&f.getUint8(q+5)==61&&(w=!0,y=new Float32Array(m*3*3),v=f.getUint8(q+6)/255,L=f.getUint8(q+7)/255,C=f.getUint8(q+8)/255,P=f.getUint8(q+9)/255);let O=84,N=50,U=new nn,X=new Float32Array(m*3*3),I=new Float32Array(m*3*3),R=new $e;for(let q=0;q<m;q++){let ee=O+q*N,B=f.getFloat32(ee,!0),Z=f.getFloat32(ee+4,!0),oe=f.getFloat32(ee+8,!0);if(w){let z=f.getUint16(ee+48,!0);(z&32768)===0?(g=(z&31)/31,x=(z>>5&31)/31,M=(z>>10&31)/31):(g=v,x=L,M=C)}for(let z=1;z<=3;z++){let Se=ee+z*12,te=q*3*3+(z-1)*3;X[te]=f.getFloat32(Se,!0),X[te+1]=f.getFloat32(Se+4,!0),X[te+2]=f.getFloat32(Se+8,!0),I[te]=B,I[te+1]=Z,I[te+2]=oe,w&&(R.set(g,x,M).convertSRGBToLinear(),y[te]=R.r,y[te+1]=R.g,y[te+2]=R.b)}}return U.setAttribute("position",new It(X,3)),U.setAttribute("normal",new It(I,3)),w&&(U.setAttribute("color",new It(y,3)),U.hasColors=!0,U.alpha=P),U}function o(h){let f=new nn,m=/solid([\s\S]*?)endsolid/g,g=/facet([\s\S]*?)endfacet/g,x=/solid\s(.+)/,M=0,w=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+w+w+w,"g"),v=new RegExp("normal"+w+w+w,"g"),L=[],C=[],P=[],O=new H,N,U=0,X=0,I=0;for(;(N=m.exec(h))!==null;){X=I;let R=N[0],q=(N=x.exec(R))!==null?N[1]:"";for(P.push(q);(N=g.exec(R))!==null;){let Z=0,oe=0,z=N[0];for(;(N=v.exec(z))!==null;)O.x=parseFloat(N[1]),O.y=parseFloat(N[2]),O.z=parseFloat(N[3]),oe++;for(;(N=y.exec(z))!==null;)L.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),C.push(O.x,O.y,O.z),Z++,I++;oe!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+M),Z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+M),M++}let ee=X,B=I-X;f.userData.groupNames=P,f.addGroup(ee,B,U),U++}return f.setAttribute("position",new Gt(L,3)),f.setAttribute("normal",new Gt(C,3)),f}function c(h){return typeof h!="string"?new TextDecoder().decode(h):h}function l(h){if(typeof h=="string"){let f=new Uint8Array(h.length);for(let m=0;m<h.length;m++)f[m]=h.charCodeAt(m)&255;return f.buffer||f}else return h}let d=l(e);return t(d)?i(d):o(c(e))}};var Ea=r=>r;var eu="11",Aa=new URL("robot/mjlab",import.meta.url).href,Yb=new Set([]);async function Ef(r){let e=await fetch(Ea(`${r}?v=${eu}`),{cache:"force-cache"});if(!e.ok)throw new Error(`kinematics fetch ${e.status}`);let t=await e.json();return new URLSearchParams(location.search).get("lite")==="1"&&(t.mesh_dir=t.mesh_dir.replace(/\/meshes$/,"/meshes-lite")),t}var jb=`${Aa}/microduck.glb`,Af=Math.PI/5,Ql=null;function tu(){return Ql||(Ql=new Ma().loadAsync(Ea(`${jb}?v=${eu}`)).then(r=>{let e=new Map;return r.scene.traverse(t=>{if(!t.isMesh||!t.geometry)return;let n=t.userData.meshFile||t.name||t.geometry.name;if(!n||e.has(n))return;let i=t.geometry;i.deleteAttribute("normal");let o=i.clone();o.scale(1e3,1e3,1e3);let c=wl(o,Af);c.scale(.001,.001,.001);let l={display:c,welded:i};e.set(n,l),t.name&&t.name!==n&&e.set(t.name,l)}),e})),Ql}function Tf(r){let e=r.attributes.position,t=r.index,n=(t?t.count:e.count)/3,i=new ArrayBuffer(84+n*50),o=new DataView(i);o.setUint32(80,n,!0);let c=84,l=d=>{let h=t?t.getX(d):d;return[e.getX(h),e.getY(h),e.getZ(h)]};for(let d=0;d<n;d++){let h=l(d*3),f=l(d*3+1),m=l(d*3+2),g=(f[1]-h[1])*(m[2]-h[2])-(f[2]-h[2])*(m[1]-h[1]),x=(f[2]-h[2])*(m[0]-h[0])-(f[0]-h[0])*(m[2]-h[2]),M=(f[0]-h[0])*(m[1]-h[1])-(f[1]-h[1])*(m[0]-h[0]),w=Math.hypot(g,x,M)||1;o.setFloat32(c,g/w,!0),o.setFloat32(c+4,x/w,!0),o.setFloat32(c+8,M/w,!0),o.setFloat32(c+12,h[0],!0),o.setFloat32(c+16,h[1],!0),o.setFloat32(c+20,h[2],!0),o.setFloat32(c+24,f[0],!0),o.setFloat32(c+28,f[1],!0),o.setFloat32(c+32,f[2],!0),o.setFloat32(c+36,m[0],!0),o.setFloat32(c+40,m[1],!0),o.setFloat32(c+44,m[2],!0),o.setUint16(c+48,0,!0),c+=50}return i}async function Rf(r,e={}){let t=new sn;t.name="duck_placer";let n=new sn;n.name="duck_root",n.rotation.x=-Math.PI/2,t.add(n);let i=new Map,o=new Map,c=await tu(),l=new Map,d=O=>{let N=c.get(O);return N?Promise.resolve(N):(l.has(O)||l.set(O,new ba().loadAsync(Ea(`${r.mesh_dir}/${O}?v=${eu}`)).then(U=>{U.deleteAttribute("normal");let X=yf(U,1e-4);X.scale(1e3,1e3,1e3);let I=wl(X,Af);return I.scale(.001,.001,.001),X.scale(.001,.001,.001),{display:I,welded:X}})),l.get(O))};for(let O of r.bodies){let N=new sn;N.name=O.name,N.position.set(O.pos[0],O.pos[1],O.pos[2]),N.quaternion.set(O.quat[1],O.quat[2],O.quat[3],O.quat[0]),i.set(O.name,N)}for(let O of r.bodies){let N=i.get(O.name);O.parent&&i.has(O.parent)?i.get(O.parent).add(N):n.add(N)}for(let O of r.bodies){if(!O.joint||O.joint.type&&O.joint.type!=="hinge")continue;let N=i.get(O.name);o.set(O.joint.name,{body:N,axis:new H(...O.joint.axis).normalize(),baseQuat:N.quaternion.clone(),range:O.joint.range??null})}let h=new Map,f=e.materialForMesh??null,m=O=>{let N=O.color,U=O.roughness??.5,X=O.metalness??0,I=O.opacity??1,R=`${N.join(",")}|${U}|${X}|${I}`,q=h.get(R);if(q)return q;let ee=new Ni({color:new $e(...N),roughness:U,metalness:X,transparent:I<1,opacity:I});return h.set(R,ee),ee},g=(O,N)=>O?Array.isArray(O)?{color:O.slice(0,3),opacity:O[3]??1}:O:{color:N.slice(0,3),opacity:N[3]??1},x=e.inkEdges??null,M=x?new ur({color:x.color??657934,transparent:!0,opacity:x.opacity??.55}):null,w=new Map,y=(O,N)=>(w.has(O)||w.set(O,new oa(N,x.threshold??40)),w.get(O)),v=[],L=new URLSearchParams(location.search).get("all")==="1",C=new Set;for(let O of r.bodies){let N=i.get(O.name);if(N)for(let U of O.geoms){if(U.type&&U.type!=="mesh"||!U.mesh||!L&&Yb.has(U.mesh))continue;let X=`${O.name}|${U.mesh}|${U.pos}|${U.quat}`;C.has(X)||(C.add(X),v.push(d(U.mesh).then(({display:I,welded:R})=>{let q=U.color?[U.color[0],U.color[1],U.color[2],U.color[3]??1]:[.85,.85,.85,1],ee=g(f?.(U.mesh,O.name,q),q),B=new kt(I,m(ee));if(B.userData.meshName=U.mesh,U.pos&&B.position.set(...U.pos),U.quat&&B.quaternion.set(U.quat[1],U.quat[2],U.quat[3],U.quat[0]),N.add(B),M){let Z=new jr(y(U.mesh,R),M);Z.position.copy(B.position),Z.quaternion.copy(B.quaternion),N.add(Z)}})))}}await Promise.all(v);let P={placer:t,root:n,bodies:i,joints:o};return Jb(P),P}var Kb=new Set(["jaw.stl","jaw_soft.stl"]);var Zb=new H(0,4e-5,.0075);function Jb(r){let e=[];if(r.root.traverse(f=>{f.isMesh&&Kb.has(f.userData.meshName)&&e.push(f)}),!e.length)return;let t=e[0].parent;r.placer.updateWorldMatrix(!0,!0);let i=(e.find(f=>f.userData.meshName==="jaw.stl")??e[0]).localToWorld(Zb.clone()),o=new H(0,0,-1),c=t.getWorldQuaternion(new yn).invert(),l=t.worldToLocal(i.clone()),d=o.applyQuaternion(c).normalize(),h=new sn;h.name="jaw_pivot",h.position.copy(l),h.userData.jawAxis=d.toArray(),t.add(h);for(let f of e)f.position.sub(l),h.add(f)}var IE=new H;function Cf(r,e,t){let n=r.joints.get(e);if(!n)return;let i=t;n.range&&(i=Math.min(n.range[1],Math.max(n.range[0],i)));let o=Qb.setFromAxisAngle(n.axis,i);n.body.quaternion.copy(n.baseQuat).multiply(o)}var Qb=new yn;var LE=new xn;var Qr={color:[1,.413,.007],roughness:.4,metalness:0},es={color:[1,.144,.008],roughness:.45,metalness:0};var si={color:[1,.608,.021],roughness:.4,metalness:0},ts={color:[.888,.86,.798],roughness:.35,metalness:0},ns={color:[.012,.012,.014],roughness:.55,metalness:.3},Nn={color:[.256,.256,.279],roughness:.5,metalness:.35},is={color:[.01,.012,.02],roughness:.05,metalness:0},Ta={color:[.328,.312,.283],roughness:.35,metalness:0};var eE={color:[.028,.028,.033],roughness:.5,metalness:0};var nu={color:[.017,.017,.019],roughness:.5,metalness:0};var tE={color:[.443,.308,.663],roughness:.4,metalness:0},Pf={color:[.221,.134,.465],roughness:.45,metalness:0},Ra={color:[.462,.367,.688],roughness:.35,metalness:0},Ca={color:[.36,.23,.48],roughness:.45,metalness:0},nE={color:[.164,.085,.584],roughness:.45,metalness:0},ks={color:[.441,.613,.723],roughness:.35,metalness:0};var Pa={color:[.85,.04,.1],roughness:.35,metalness:0},iu={color:[.45,.02,.06],roughness:.5,metalness:0},ru={color:[1,.25,.28],roughness:.4,metalness:0},Ia={color:[.04,.16,.85],roughness:.35,metalness:0},su={color:[.02,.08,.45],roughness:.5,metalness:0},ou={color:[.25,.48,1],roughness:.4,metalness:0},au={classic:{headDome:ts,facePlate:Ta,trim:es,beakUpper:Qr,beakLower:es,tongue:Qr,eyeRing:Qr,lens:is,bodyShell:ts,sideShells:ts,legShells:ts,feet:es,soles:si,hips:Nn,mechDark:ns,mechGray:Nn},charcoal:{headDome:eE,facePlate:Ta,trim:si,beakUpper:Ca,beakLower:si,tongue:Ca,eyeRing:tE,lens:is,bodyShell:nu,sideShells:nu,legShells:nu,feet:si,soles:Pf,hips:Nn,mechDark:ns,mechGray:Nn},purple:{headDome:Ra,facePlate:Ta,trim:si,beakUpper:Ca,beakLower:si,tongue:Ca,eyeRing:ks,lens:is,bodyShell:Ra,sideShells:Ra,legShells:Ra,feet:si,soles:Pf,hips:Nn,mechDark:ns,mechGray:Nn,swatch:nE},blue:{headDome:ks,facePlate:Ta,trim:es,beakUpper:Qr,beakLower:es,tongue:Qr,eyeRing:Qr,lens:is,bodyShell:ks,sideShells:ks,legShells:ks,feet:es,soles:si,hips:Nn,mechDark:ns,mechGray:Nn},team_red:{headDome:Pa,facePlate:iu,trim:ru,beakUpper:ru,beakLower:ru,tongue:iu,eyeRing:si,lens:is,bodyShell:Pa,sideShells:Pa,legShells:Pa,feet:iu,soles:ts,hips:Nn,mechDark:ns,mechGray:Nn},team_blue:{headDome:Ia,facePlate:su,trim:ou,beakUpper:ou,beakLower:ou,tongue:su,eyeRing:si,lens:is,bodyShell:Ia,sideShells:Ia,legShells:Ia,feet:su,soles:ts,hips:Nn,mechDark:ns,mechGray:Nn}},iE=Object.keys(au),If="classic",NE=iE.filter(r=>r!=="team_red"&&r!=="team_blue");function rE(r){return{"top_head_shell.stl":r.headDome,"bottom_head_shell.stl":r.trim,"face_part.stl":r.facePlate,"noenoeil.stl":r.eyeRing,"lens.stl":r.lens,"m12_lens_holder.stl":r.mechDark,"soft_mouth_top.stl":r.beakUpper,"jaw.stl":r.beakLower,"jaw_soft.stl":r.tongue,"trunk_base.stl":r.bodyShell,"left_shell.stl":r.sideShells,"right_shell.stl":r.sideShells,"upper_leg_left.stl":r.legShells,"upper_leg_right.stl":r.legShells,"hip_l.stl":r.hips,"foot_left.stl":r.feet,"foot_right.stl":r.feet,"ankle_left.stl":r.feet,"ankle_right.stl":r.feet,"sole_left.stl":r.soles,"sole_right.stl":r.soles,"ankle_l_v1.stl":r.feet,"ankle_r_v1.stl":r.feet,"roller_blade.stl":r.feet,"rim.stl":r.soles,"tire.stl":r.mechDark,"xl330.stl":r.mechDark,"leg.stl":r.mechGray,"seeed_bearing__configuration_default.stl":r.mechDark,"yaw2roll.stl":r.mechDark,"bearing_roll.stl":r.mechDark,"neck.stl":r.mechGray,"np_f970.stl":r.mechDark,"pcb__raspberry_pi_zero_2_w.stl":r.mechDark,"elec_rpi_robot_hat_pcb.stl":r.mechDark,"banana_pcb_locker.stl":r.mechDark,"speaker.stl":r.mechDark,"upper_leg_rigidity_plate.stl":r.mechGray,"yaw_roll_motion.stl":r.mechGray,"neck_pitch.stl":r.mechGray,"motor_support.stl":r.mechGray,"power_support.stl":r.mechGray,"seeed_bearing__configuration__22x16x4.stl":r.mechGray}}var Lf=r=>{let e=rE(r);return t=>e[t]??r.mechGray};var Df=new URL("./",import.meta.url).href,Na=["left_hip_yaw","left_hip_roll","left_hip_pitch","left_knee","left_ankle","neck_pitch","head_pitch","head_yaw","head_roll","right_hip_yaw","right_hip_roll","right_hip_pitch","right_knee","right_ankle"],Fa=new Float32Array([0,-.08726646259971647,-.457924,-.00494,.452984,.3490658503988659,.3490658503988659,0,0,0,.08726646259971647,.457924,.00494,-.452984]),rs=14,Nf=61,kf=.005,Bf=4,cu=kf*Bf,Ff=.25,Uf=1,Of=.25,sE=10,oE=15,aE=50,cE=300,La=1.4;async function lE(){let r=await(await fetch(`${Aa}/robot_allcollisions.xml`)).text(),e=new DOMParser().parseFromString(r,"text/xml");for(let d of[...e.querySelectorAll('geom[class="visual"]')])d.remove();let t=new Set([...e.querySelectorAll("geom[mesh]")].map(d=>d.getAttribute("mesh")));for(let d of[...e.querySelectorAll("asset > mesh")]){let h=d.getAttribute("name")??d.getAttribute("file").replace(/\.stl$/i,"");t.has(h)||d.remove()}let n=e.documentElement,i=(d,h)=>{let f=e.createElement(d);for(let[m,g]of Object.entries(h))f.setAttribute(m,g);return f};n.appendChild(i("option",{timestep:String(kf)})),e.querySelector("worldbody").appendChild(i("geom",{name:"floor",type:"plane",size:"0 0 0.05",pos:"0 0 0"}));let o=new Map(Na.map((d,h)=>[d,Fa[h]])),c=[...e.querySelectorAll("body > joint")].map(d=>o.get(d.getAttribute("name"))??0).join(" "),l=e.createElement("keyframe");return l.appendChild(i("key",{name:"STAND",qpos:`0 0 0.12 1 0 0 0 ${c}`,ctrl:Array.from(Fa).join(" ")})),n.appendChild(l),{xml:new XMLSerializer().serializeToString(e),meshFiles:[...e.querySelectorAll("asset > mesh")].map(d=>d.getAttribute("file"))}}var uE=r=>Math.atan2(Math.sin(r),Math.cos(r)),Da=(r,e,t)=>Math.min(t,Math.max(e,r));async function zE(r,e={}){let[t,{xml:n,meshFiles:i},o,c]=await Promise.all([_f({locateFile:de=>de.endsWith(".wasm")?Df+"mujoco.wasm":de}),lE(),Ef(`${Aa}/kinematics.json`),Promise.all(["walk","stand","roll"].map(de=>vf(`${Df}policies/${de}.bin`))).then(([de,ke,Ze])=>({walk:de,stand:ke,roll:Ze}))]),l=await tu(),d=new t.MjVFS;for(let de of i){let ke=l.get(de);if(!ke)throw new Error("missing mesh "+de);d.addBuffer(`assets/${de}`,new Uint8Array(Tf(ke.welded)))}let h=t.MjModel.from_xml_string(n,d),f=new t.MjData(h),m=Na.map(de=>h.jnt(de).qposadr),g=Na.map(de=>h.jnt(de).dofadr),x=h.sensor("imu_ang_vel").adr,M=t.mj_name2id(h,t.mjtObj.mjOBJ_BODY.value,"trunk_base"),w=t.mj_name2id(h,t.mjtObj.mjOBJ_KEY.value,"STAND"),y=new jo({canvas:r,antialias:!0,alpha:!0,powerPreference:"low-power"});y.setClearColor(0,0),y.toneMapping=ml,y.toneMappingExposure=1.05,y.shadowMap.enabled=!0,y.shadowMap.type=pl;let v=new Ko,L=new Kt(30,1,.05,30);v.add(new da(16777215,9080729,1.1));let C=new dr(16773598,2.4);C.castShadow=!0,C.shadow.mapSize.set(1024,1024),Object.assign(C.shadow.camera,{left:-.7,right:.7,top:.7,bottom:-.7,near:.1,far:4}),C.shadow.bias=-4e-4,v.add(C,C.target);let P=new dr(10470655,.9);P.position.set(-1.5,1,-1.5),v.add(P);let O=await Rf(o,{materialForMesh:Lf(au[If])});O.placer.traverse(de=>{de.isMesh&&(de.castShadow=!0)}),v.add(O.placer);let N=O.bodies.get("trunk_base"),U=.2,X=7,I=new Ls(Object.assign(document.createElement("canvas"),{width:64,height:64}));I.wrapS=I.wrapT=_i,I.repeat.set(X/U,X/U),I.anisotropy=4;let R=Object.assign(document.createElement("canvas"),{width:128,height:128});{let de=R.getContext("2d"),ke=de.createRadialGradient(64,64,8,64,64,64);ke.addColorStop(0,"#fff"),ke.addColorStop(1,"#000"),de.fillStyle=ke,de.fillRect(0,0,128,128)}{let de=I.image.getContext("2d");de.strokeStyle="#fff",de.lineWidth=2,de.strokeRect(1,1,64,64)}let q=new Mn({map:I,alphaMap:new Ls(R),transparent:!0,depthWrite:!1}),ee=new kt(new cr(X,X),q);ee.rotation.x=-Math.PI/2,ee.renderOrder=-1;let B=new kt(new cr(X,X),new ca({opacity:.28}));B.rotation.x=-Math.PI/2,B.position.y=5e-4,B.receiveShadow=!0,v.add(ee,B);let Z=new kt(new aa(.045,.06,40),new Mn({color:16731904,transparent:!0,opacity:.9,depthWrite:!1}));Z.rotation.x=-Math.PI/2,Z.position.y=.002,Z.visible=!1;let oe=new sn,z=new kt(new Ds(.008,.008,.2,10),new Mn({color:16731904,transparent:!0}));z.rotation.z=Math.PI/2,z.position.x=-.1;let Se=new kt(new sa(.025,.06,14),z.material);Se.rotation.z=-Math.PI/2,oe.add(z,Se),oe.visible=!1,v.add(Z,oe);let te={};function xe(){let de=getComputedStyle(document.documentElement);te.line=de.getPropertyValue("--ink").trim()||"#000",te.accent=de.getPropertyValue("--accent").trim()||"#ff4f00";let ke=document.documentElement.dataset.theme==="dark"||document.documentElement.dataset.theme!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches;q.color.set(ke?16777215:855826),q.opacity=ke?.22:.16,Z.material.color.set(te.accent),z.material.color.set(te.accent),B.material.opacity=ke?.5:.28}xe();let W=new Float32Array(rs),Le=new Float32Array(Nf),qe=new Float32Array(2),Ye="walk",re=0,ye=0,Me=0,be=!1,Ve=null,lt=-1e9,K=0,wt=0,Be=[0,0,0],Qe={falls:0,recoveries:0,pushes:0,rolls:0,policy:"walk",hz:0,speed:0,vx:0,wz:0};t.mj_resetDataKeyframe(h,f,w),t.mj_forward(h,f);let We=()=>{let de=f.qpos,ke=de[3],Ze=de[4],xt=de[5];return[-2*(Ze*de[6]-ke*xt),-2*(xt*de[6]+ke*Ze),-(1-2*(Ze*Ze+xt*xt))]},it=()=>{let de=f.qpos;return Math.atan2(2*(de[3]*de[6]+de[4]*de[5]),1-2*(de[5]*de[5]+de[6]*de[6]))};function Ne(){t.mj_resetDataKeyframe(h,f,w),t.mj_forward(h,f),W.fill(0),qe.fill(0),Ye="walk",re=ye=Me=0,Ve=null,wt=0,Qe.policy="walk"}function je(de){let ke=f.qpos;for(let Ze=0;Ze<8;Ze++){let xt=Math.random()*Math.PI*2,Ht=.45+Math.random()*.65,St={x:Math.cos(xt)*Ht,y:Math.sin(xt)*Ht};if(Math.hypot(St.x-ke[0],St.y-ke[1])>.45){Ve=St,K=de;return}}Ve={x:0,y:0}}function yt(de){if(!Ve)return de-lt>3500&&de-K>1200&&je(de),[0,0];let ke=f.qpos,Ze=Ve.x-ke[0],xt=Ve.y-ke[1];if(Math.hypot(Ze,xt)<.12)return Ve=null,K=de,[0,0];let St=uE(Math.atan2(xt,Ze)-it()),Xt=Da(1.8*St,-Uf,Uf);return[Da(Ff*(1-Math.abs(St)/1.4),.22,Ff),Xt]}function k(de,ke){let Ze=f.qpos,xt=f.qvel,Ht=f.sensordata,St=0;for(let Et=0;Et<3;Et++)Le[St++]=Ht[x+Et];let Xt=We();Le[St++]=Xt[0],Le[St++]=Xt[1],Le[St++]=Xt[2];for(let Et=0;Et<rs;Et++)Le[St++]=Ze[m[Et]]-Fa[Et];for(let Et=0;Et<rs;Et++)Le[St++]=xt[g[Et]];for(let Et=0;Et<rs;Et++)Le[St++]=W[Et];for(Le[St++]=de,Le[St++]=0,Le[St++]=ke;St<Nf;)Le[St++]=0;return Le}function A(de){if(Ye!=="fallen"){let[Ht,St]=Ye==="walk"?yt(de):[0,0];qe[0]+=(Ht-qe[0])*Of,qe[1]+=(St-qe[1])*Of;let Xt=Ye==="recover"?"stand":Ye==="roll"?"roll":"walk";Qe.policy=Xt;let Et=c[Xt].run(k(Ye==="walk"?qe[0]:0,Ye==="walk"?qe[1]:0));W.set(Et);let wn=f.ctrl;for(let oi=0;oi<rs;oi++)wn[oi]=Fa[oi]+Et[oi]}let ke=f.xfrc_applied;wt>0?(ke[M*6]=Be[0],ke[M*6+1]=Be[1],ke[M*6+2]=Be[2],wt--):ke[M*6]=ke[M*6+1]=ke[M*6+2]=0;for(let Ht=0;Ht<Bf;Ht++)t.mj_step(h,f);let Ze=We(),xt=f.qpos[2];if(!Number.isFinite(xt)||!Number.isFinite(Ze[2])||Math.hypot(f.qpos[0],f.qpos[1])>4)return Ne();if(re++,Ye==="walk")Ze[2]>-.5||xt<.02?++ye>=sE&&(ye=0,Ye="fallen",re=0,Qe.falls++,Ve=null):ye=0;else if(Ye==="fallen")re>=oE&&(Ye="recover",re=0,Me=0,W.fill(0));else if(Ye==="recover")Me=Ze[2]<-.85?Me+1:0,Me>=aE?(Ye="walk",re=0,W.fill(0),qe.fill(0),Qe.recoveries++,K=performance.now()):re>=cE&&Ne();else if(Ye==="roll"){Le[5]>-.3&&(be=!0);let Ht=Le[5]<-.85;(be&&Ht&&re>=40||re>=150)&&(Ye="walk",re=0,W.fill(0),qe.fill(0),Ht||Ne())}}let $=()=>performance.now();function le(de){if(Ye!=="walk"&&Ye!=="roll")return!1;let ke=de??it()+(Math.random()<.5?1:-1)*(Math.PI/2+(Math.random()-.5)*.8),Ze=5.5;return Be[0]=Math.cos(ke)*Ze,Be[1]=Math.sin(ke)*Ze,Be[2]=0,wt=5,Qe.pushes++,Re=.9,Ke=ke,!0}function me(){return Ye!=="walk"?!1:(Ye="roll",re=0,be=!1,Ve=null,Qe.rolls++,!0)}function he(de,ke,Ze=!0){Ve={x:Da(de,-La,La),y:Da(ke,-La,La)},Ze&&(lt=$())}let ze=new ga,Ee=new Vn(new H(0,1,0),0),Te=new ct,tt=new H;function we(de,ke){let Ze=r.getBoundingClientRect();Te.set((de-Ze.left)/Ze.width*2-1,-((ke-Ze.top)/Ze.height)*2+1),ze.setFromCamera(Te,L),ze.ray.intersectPlane(Ee,tt)&&he(tt.x,-tt.z)}let Oe=new H,rt=new H,He=new H(.95,.78,1.15),Re=0,Ke=0,at=!0,Rt=!0,Fe=0,G=0,ue=$(),ce=0,Ae=ue,Pe=0,gt=de=>{Fe=requestAnimationFrame(gt);let ke=Math.min((de-ue)/1e3,.1);if(ue=de,!at||!Rt||document.hidden)return;G+=ke;let Ze=0;for(;G>=cu&&Ze<3;)A($()),G-=cu,Ze++,ce++;G>cu&&(G=0),de-Ae>500&&(Qe.hz=Math.round(ce*1e3/(de-Ae)),ce=0,Ae=de,e.onStats?.(Qe,Ye)),ke>.045?Pe++:Pe=Math.max(0,Pe-1),Pe>90&&(Pe=0,e.onSlow?.());let xt=f.qpos;N.position.set(xt[0],xt[1],xt[2]),N.quaternion.set(xt[4],xt[5],xt[6],xt[3]);for(let Et=0;Et<rs;Et++)Cf(O,Na[Et],xt[m[Et]]);let Ht=f.qvel;Qe.speed=Math.hypot(Ht[0],Ht[1]),Qe.vx=qe[0],Qe.wz=qe[1],Qe.x=xt[0],Qe.y=xt[1],Qe.yaw=it(),Qe.tx=Ve?.x,Qe.ty=Ve?.y;let St=xt[0],Xt=-xt[1];rt.set(St,.09,Xt),Oe.lerp(rt,1-Math.pow(.001,ke)),L.position.copy(Oe).add(He),L.lookAt(Oe),C.position.set(St+.9,1.6,Xt+.6),C.target.position.set(St,0,Xt),ee.position.set(Math.round(St/U)*U,0,Math.round(Xt/U)*U),B.position.x=St,B.position.z=Xt,Ve?(Z.visible=!0,Z.position.x=Ve.x,Z.position.z=-Ve.y,Z.scale.setScalar(1+.08*Math.sin(de/160))):Z.visible=!1,Re>0&&(Re-=ke,oe.visible=Re>0,oe.position.set(St,.13,Xt),oe.rotation.y=-Ke,z.material.opacity=Math.min(1,Re*2)),y.render(v,L)};function Tt(){let de=r.parentElement.getBoundingClientRect(),ke=Math.min(window.devicePixelRatio||1,2);y.setPixelRatio(ke),y.setSize(Math.max(1,de.width),Math.max(1,de.height),!1),L.aspect=de.width/Math.max(1,de.height),L.updateProjectionMatrix()}let Lt=new ResizeObserver(Tt);Lt.observe(r.parentElement),Tt();let Wt=new IntersectionObserver(([de])=>{Rt=de.isIntersecting,ue=$(),G=0});return Wt.observe(r),Oe.set(0,.09,0),Fe=requestAnimationFrame(gt),r.addEventListener("webglcontextlost",de=>{de.preventDefault(),e.onSlow?.()}),{stats:Qe,push:le,roll:me,reset:Ne,goTo:he,pointerTo:we,refreshColors:xe,get state(){return Ye},pause(){at=!1},resume(){at=!0,ue=$()},dispose(){cancelAnimationFrame(Fe),Lt.disconnect(),Wt.disconnect(),y.dispose()}}}export{zE as createDuck};
