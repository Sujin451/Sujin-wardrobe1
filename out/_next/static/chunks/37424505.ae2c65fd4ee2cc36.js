"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{9288:(t,r,i)=>{i.r(r),i.d(r,{InferenceSession:()=>B,TRACE:()=>E,TRACE_FUNC_BEGIN:()=>A,TRACE_FUNC_END:()=>O,Tensor:()=>C,default:()=>s2,env:()=>c,registerBackend:()=>s});var a,n,s,o,u,l,d,p,c,h,f,m,g,y,_,b,$,v,w,x,S,k,T,I,C,E,z,A,O,R,B,N=Object.defineProperty,D=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,P=Object.prototype.hasOwnProperty,U=(t=>"u">typeof require?require:"u">typeof Proxy?new Proxy(t,{get:(t,r)=>("u">typeof require?require:t)[r]}):t)(function(t){if("u">typeof require)return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),W=(t,r)=>()=>(t&&(r=t(t=0)),r),q=(t,r)=>{for(var i in r)N(t,i,{get:r[i],enumerable:!0})},L=t=>((t,r,i,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let n of M(r))P.call(t,n)||n===i||N(t,n,{get:()=>r[n],enumerable:!(a=D(r,n))||a.enumerable});return t})(N({},"__esModule",{value:!0}),t),V=W(()=>{a=new Map,n=[],s=(t,r,i)=>{if(r&&"function"==typeof r.init&&"function"==typeof r.createInferenceSessionHandler){let s=a.get(t);if(void 0===s)a.set(t,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw Error(`cannot register backend "${t}" using priority ${i}`)}if(i>=0){let r=n.indexOf(t);-1!==r&&n.splice(r,1);for(let r=0;r<n.length;r++)if(a.get(n[r]).priority<=i)return void n.splice(r,0,t);n.push(t)}return}throw TypeError("not a valid backend")},o=async t=>{let r=a.get(t);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{return i||(r.initPromise=r.backend.init(t)),await r.initPromise,r.initialized=!0,r.backend}catch(t){return i||(r.error=`${t}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},u=async t=>{let r=t.executionProviders||[],i=r.map(t=>"string"==typeof t?t:t.name),a=0===i.length?n:i,s,u=[],l=new Set;for(let t of a){let r=await o(t);"string"==typeof r?u.push({name:t,err:r}):(s||(s=r),s===r&&l.add(t))}if(!s)throw Error(`no available backend found. ERR: ${u.map(t=>`[${t.name}] ${t.err}`).join(", ")}`);for(let{name:t,err:r}of u)i.includes(t)&&console.warn(`removing requested execution provider "${t}" from session options because it is not available: ${r}`);let d=r.filter(t=>l.has("string"==typeof t?t:t.name));return[s,new Proxy(t,{get:(t,r)=>"executionProviders"===r?d:Reflect.get(t,r)})]}}),G=W(()=>{V()}),H=W(()=>{l="1.21.0"}),F=W(()=>{H(),d="warning",Object.defineProperty(p={wasm:{},webgl:{},webgpu:{},versions:{common:l},set logLevel(e){if(void 0!==e){if("string"!=typeof e||-1===["verbose","info","warning","error","fatal"].indexOf(e))throw Error(`Unsupported logging level: ${e}`);d=e}},get logLevel(){return d}},"logLevel",{enumerable:!0})}),j=W(()=>{F(),c=p}),K=W(()=>{h=(t,r)=>{let i="u">typeof document?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=t.dims[3],i.height=t.dims[2];let a=i.getContext("2d");if(null!=a){let n,s;r?.tensorLayout!==void 0&&"NHWC"===r.tensorLayout?(n=t.dims[2],s=t.dims[3]):(n=t.dims[3],s=t.dims[2]);let o=r?.format!==void 0?r.format:"RGB",u=r?.norm,l,d;void 0===u||void 0===u.mean?l=[255,255,255,255]:"number"==typeof u.mean?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],void 0!==u.mean[3]&&(l[3]=u.mean[3])),void 0===u||void 0===u.bias?d=[0,0,0,0]:"number"==typeof u.bias?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],void 0!==u.bias[3]&&(d[3]=u.bias[3]));let p=s*n,c=0,h=p,f=2*p,m=-1;"RGBA"===o?(c=0,h=p,f=2*p,m=3*p):"RGB"===o?(c=0,h=p,f=2*p):"RBG"===o&&(c=0,f=p,h=2*p);for(let r=0;r<s;r++)for(let i=0;i<n;i++)a.fillStyle="rgba("+(t.data[c++]-d[0])*l[0]+","+(t.data[h++]-d[1])*l[1]+","+(t.data[f++]-d[2])*l[2]+","+(-1===m?255:(t.data[m++]-d[3])*l[3])+")",a.fillRect(i,r,1,1);if("toDataURL"in i)return i.toDataURL();throw Error("toDataURL is not supported")}throw Error("Can not access image data")},f=(t,r)=>{let i="u">typeof document?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(null!=i){let n,s,o;r?.tensorLayout!==void 0&&"NHWC"===r.tensorLayout?(n=t.dims[2],s=t.dims[1],o=t.dims[3]):(n=t.dims[3],s=t.dims[2],o=t.dims[1]);let u=void 0!==r&&void 0!==r.format?r.format:"RGB",l=r?.norm,d,p;void 0===l||void 0===l.mean?d=[255,255,255,255]:"number"==typeof l.mean?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],void 0!==l.mean[3]&&(d[3]=l.mean[3])),void 0===l||void 0===l.bias?p=[0,0,0,0]:"number"==typeof l.bias?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],void 0!==l.bias[3]&&(p[3]=l.bias[3]));let c=s*n;if(void 0!==r&&(void 0!==r.format&&4===o&&"RGBA"!==r.format||3===o&&"RGB"!==r.format&&"BGR"!==r.format))throw Error("Tensor format doesn't match input tensor dims");let h=0,f=1,m=2,g=3,y=0,_=c,b=2*c,$=-1;"RGBA"===u?(y=0,_=c,b=2*c,$=3*c):"RGB"===u?(y=0,_=c,b=2*c):"RBG"===u&&(y=0,b=c,_=2*c),a=i.createImageData(n,s);for(let r=0;r<s*n;h+=4,f+=4,m+=4,g+=4,r++)a.data[h]=(t.data[y++]-p[0])*d[0],a.data[f]=(t.data[_++]-p[1])*d[1],a.data[m]=(t.data[b++]-p[2])*d[2],a.data[g]=-1===$?255:(t.data[$++]-p[3])*d[3]}else throw Error("Can not access image data");return a}}),Q=W(()=>{Y(),m=(t,r)=>{if(void 0===t)throw Error("Image buffer must be defined");if(void 0===r.height||void 0===r.width)throw Error("Image height and width must be defined");if("NHWC"===r.tensorLayout)throw Error("NHWC Tensor layout is not supported yet");let{height:i,width:a}=r,n=r.norm??{mean:255,bias:0},s,o;s="number"==typeof n.mean?[n.mean,n.mean,n.mean,n.mean]:[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],o="number"==typeof n.bias?[n.bias,n.bias,n.bias,n.bias]:[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=void 0!==r.format?r.format:"RGBA",l=void 0!==r.tensorFormat&&void 0!==r.tensorFormat?r.tensorFormat:"RGB",d=i*a,p=new Float32Array("RGBA"===l?4*d:3*d),c=4,h=0,f=1,m=2,g=3,y=0,_=d,b=2*d,$=-1;"RGB"===u&&(c=3,h=0,f=1,m=2,g=-1),"RGBA"===l?$=3*d:"RBG"===l?(y=0,b=d,_=2*d):"BGR"===l&&(b=0,_=d,y=2*d);for(let r=0;r<d;r++,h+=c,m+=c,f+=c,g+=c)p[y++]=(t[h]+o[0])/s[0],p[_++]=(t[f]+o[1])/s[1],p[b++]=(t[m]+o[2])/s[2],-1!==$&&-1!==g&&(p[$++]=(t[g]+o[3])/s[3]);return"RGBA"===l?new I("float32",p,[1,4,i,a]):new I("float32",p,[1,3,i,a])},g=async(t,r)=>{let i="u">typeof HTMLImageElement&&t instanceof HTMLImageElement,a="u">typeof ImageData&&t instanceof ImageData,n="u">typeof ImageBitmap&&t instanceof ImageBitmap,s="string"==typeof t,o,u=r??{},l=()=>{if("u">typeof document)return document.createElement("canvas");if("u">typeof OffscreenCanvas)return new OffscreenCanvas(1,1);throw Error("Canvas is not supported")},d=t=>"u">typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||t instanceof OffscreenCanvas?t.getContext("2d"):null;if(i){let i=l();i.width=t.width,i.height=t.height;let a=d(i);if(null!=a){let i=t.height,n=t.width;if(void 0!==r&&void 0!==r.resizedHeight&&void 0!==r.resizedWidth&&(i=r.resizedHeight,n=r.resizedWidth),void 0!==r){if(u=r,void 0!==r.tensorFormat)throw Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=i,u.width=n}else u.tensorFormat="RGBA",u.height=i,u.width=n;a.drawImage(t,0,0),o=a.getImageData(0,0,n,i).data}else throw Error("Can not access image data")}else if(a){let i,a;if(void 0!==r&&void 0!==r.resizedWidth&&void 0!==r.resizedHeight?(i=r.resizedHeight,a=r.resizedWidth):(i=t.height,a=t.width),void 0!==r&&(u=r),u.format="RGBA",u.height=i,u.width=a,void 0!==r){let r=l();r.width=a,r.height=i;let n=d(r);if(null!=n)n.putImageData(t,0,0),o=n.getImageData(0,0,a,i).data;else throw Error("Can not access image data")}else o=t.data}else if(n){if(void 0===r)throw Error("Please provide image config with format for Imagebitmap");let i=l();i.width=t.width,i.height=t.height;let a=d(i);if(null!=a){let r=t.height,i=t.width;return a.drawImage(t,0,0,i,r),o=a.getImageData(0,0,i,r).data,u.height=r,u.width=i,m(o,u)}throw Error("Can not access image data")}else{if(s)return new Promise((r,i)=>{let a=l(),n=d(a);if(!t||!n)return i();let s=new Image;s.crossOrigin="Anonymous",s.src=t,s.onload=()=>{a.width=s.width,a.height=s.height,n.drawImage(s,0,0,a.width,a.height);let t=n.getImageData(0,0,a.width,a.height);u.height=a.height,u.width=a.width,r(m(t.data,u))}});throw Error("Input data provided is not supported - aborted tensor creation")}if(void 0!==o)return m(o,u);throw Error("Input data provided is not supported - aborted tensor creation")},y=(t,r)=>{let{width:i,height:a,download:n,dispose:s}=r;return new I({location:"texture",type:"float32",texture:t,dims:[1,a,i,4],download:n,dispose:s})},_=(t,r)=>{let{dataType:i,dims:a,download:n,dispose:s}=r;return new I({location:"gpu-buffer",type:i??"float32",gpuBuffer:t,dims:a,download:n,dispose:s})},b=(t,r)=>{let{dataType:i,dims:a,download:n,dispose:s}=r;return new I({location:"ml-tensor",type:i??"float32",mlTensor:t,dims:a,download:n,dispose:s})},$=(t,r,i)=>new I({location:"cpu-pinned",type:t,data:r,dims:i??[r.length]})}),Z=W(()=>{v=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),w=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),x=!1,S=()=>{if(!x){x=!0;let t="u">typeof BigInt64Array&&BigInt64Array.from,r="u">typeof BigUint64Array&&BigUint64Array.from,i=globalThis.Float16Array,a="u">typeof i&&i.from;t&&(v.set("int64",BigInt64Array),w.set(BigInt64Array,"int64")),r&&(v.set("uint64",BigUint64Array),w.set(BigUint64Array,"uint64")),a?(v.set("float16",i),w.set(i,"float16")):v.set("float16",Uint16Array)}}}),X=W(()=>{Y(),k=t=>{let r=1;for(let i=0;i<t.length;i++){let a=t[i];if("number"!=typeof a||!Number.isSafeInteger(a))throw TypeError(`dims[${i}] must be an integer, got: ${a}`);if(a<0)throw RangeError(`dims[${i}] must be a non-negative integer, got: ${a}`);r*=a}return r},T=(t,r)=>{switch(t.location){case"cpu":return new I(t.type,t.data,r);case"cpu-pinned":return new I({location:"cpu-pinned",data:t.data,type:t.type,dims:r});case"texture":return new I({location:"texture",texture:t.texture,type:t.type,dims:r});case"gpu-buffer":return new I({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:r});case"ml-tensor":return new I({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:r});default:throw Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),Y=W(()=>{K(),Q(),Z(),X(),I=class{constructor(t,r,i){let a,n;if(S(),"object"==typeof t&&"location"in t)switch(this.dataLocation=t.location,a=t.type,n=t.dims,t.location){case"cpu-pinned":{let r=v.get(a);if(!r)throw TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(t.data instanceof r))throw TypeError(`buffer should be of type ${r.name}`);this.cpuData=t.data;break}case"texture":if("float32"!==a)throw TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break;case"gpu-buffer":if("float32"!==a&&"float16"!==a&&"int32"!==a&&"int64"!==a&&"uint32"!==a&&"uint8"!==a&&"bool"!==a&&"uint4"!==a&&"int4"!==a)throw TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break;case"ml-tensor":if("float32"!==a&&"float16"!==a&&"int32"!==a&&"int64"!==a&&"uint32"!==a&&"uint64"!==a&&"int8"!==a&&"uint8"!==a&&"bool"!==a&&"uint4"!==a&&"int4"!==a)throw TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if("string"==typeof t)if(a=t,o=i,"string"===t){if(!Array.isArray(r))throw TypeError("A string tensor's data must be a string array.");s=r}else{let i=v.get(t);if(void 0===i)throw TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(r)){if("float16"===t&&i===Uint16Array||"uint4"===t||"int4"===t)throw TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${i.name} as data.`);s="uint64"===t||"int64"===t?i.from(r,BigInt):i.from(r)}else if(r instanceof i)s=r;else if(r instanceof Uint8ClampedArray)if("uint8"===t)s=Uint8Array.from(r);else throw TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if("float16"===t&&r instanceof Uint16Array&&i!==Uint16Array)s=new globalThis.Float16Array(r.buffer,r.byteOffset,r.length);else throw TypeError(`A ${a} tensor's data must be type of ${i}`)}else if(o=r,Array.isArray(t)){if(0===t.length)throw TypeError("Tensor type cannot be inferred from an empty array.");let r=typeof t[0];if("string"===r)a="string",s=t;else if("boolean"===r)a="bool",s=Uint8Array.from(t);else throw TypeError(`Invalid element type of data array: ${r}.`)}else if(t instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(t);else{let r=w.get(t.constructor);if(void 0===r)throw TypeError(`Unsupported type for tensor data: ${t.constructor}.`);a=r,s=t}if(void 0===o)o=[s.length];else if(!Array.isArray(o))throw TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let s=k(n);if(this.cpuData&&s!==this.cpuData.length&&("uint4"!==a&&"int4"!==a||Math.ceil(s/2)!==this.cpuData.length))throw Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=s}static async fromImage(t,r){return g(t,r)}static fromTexture(t,r){return y(t,r)}static fromGpuBuffer(t,r){return _(t,r)}static fromMLTensor(t,r){return b(t,r)}static fromPinnedBuffer(t,r,i){return $(t,r,i)}toDataURL(t){return h(this,t)}toImageData(t){return f(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":if(!this.downloader)throw Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,t&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if("none"===this.dataLocation)throw Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw Error("Cannot reshape a tensor that owns GPU resource.");return T(this,t)}}}),J=W(()=>{Y(),C=I}),ee=W(()=>{F(),E=(t,r)=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&console.timeStamp(`${t}::ORT::${r}`)},z=(t,r)=>{let i=Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let n=0;n<i.length;n++){if(a&&!i[n].includes("TRACE_FUNC")){let a=`FUNC_${t}::${i[n].trim().split(" ")[1]}`;r&&(a+=`::${r}`),E("CPU",a);return}i[n].includes("TRACE_FUNC")&&(a=!0)}},A=t=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&z("BEGIN",t)},O=t=>{(typeof p.trace>"u"?p.wasm.trace:p.trace)&&z("END",t)}}),et=W(()=>{V(),J(),ee(),R=class t{constructor(t){this.handler=t}async run(t,r,i){A();let a={},n={};if("object"!=typeof t||null===t||t instanceof C||Array.isArray(t))throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if("object"==typeof r){if(null===r)throw TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof C)throw TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(0===r.length)throw TypeError("'fetches' cannot be an empty array.");for(let t of(s=!1,r)){if("string"!=typeof t)throw TypeError("'fetches' must be a string array or an object.");if(-1===this.outputNames.indexOf(t))throw RangeError(`'fetches' contains invalid output name: ${t}.`);a[t]=null}if("object"==typeof i&&null!==i)n=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else{let t=!1,o=Object.getOwnPropertyNames(r);for(let i of this.outputNames)if(-1!==o.indexOf(i)){let n=r[i];(null===n||n instanceof C)&&(t=!0,s=!1,a[i]=n)}if(t){if("object"==typeof i&&null!==i)n=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else n=r}}else if("u">typeof r)throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let r of this.inputNames)if(typeof t[r]>"u")throw Error(`input '${r}' is missing in 'feeds'.`);if(s)for(let t of this.outputNames)a[t]=null;let o=await this.handler.run(t,a,n),u={};for(let t in o)if(Object.hasOwnProperty.call(o,t)){let r=o[t];r instanceof C?u[t]=r:u[t]=new C(r.type,r.data,r.dims)}return O(),u}async release(){return this.handler.dispose()}static async create(r,i,a,n){A();let s,o={};if("string"==typeof r){if(s=r,"object"==typeof i&&null!==i)o=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(s=r,"object"==typeof i&&null!==i)o=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||"u">typeof SharedArrayBuffer&&r instanceof SharedArrayBuffer){let t=0,u=r.byteLength;if("object"==typeof i&&null!==i)o=i;else if("number"==typeof i){if(!Number.isSafeInteger(t=i))throw RangeError("'byteOffset' must be an integer.");if(t<0||t>=r.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${r.byteLength}).`);if(u=r.byteLength-t,"number"==typeof a){if(!Number.isSafeInteger(u=a))throw RangeError("'byteLength' must be an integer.");if(u<=0||t+u>r.byteLength)throw RangeError(`'byteLength' is out of range (0, ${r.byteLength-t}].`);if("object"==typeof n&&null!==n)o=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else if("u">typeof a)throw TypeError("'byteLength' must be a number.")}else if("u">typeof i)throw TypeError("'options' must be an object.");s=new Uint8Array(r,t,u)}else throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await u(o),p=await l.createInferenceSessionHandler(s,d);return O(),new t(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),er=W(()=>{et(),B=R}),ei=W(()=>{}),ea=W(()=>{}),en=W(()=>{}),es=W(()=>{}),eo={};q(eo,{InferenceSession:()=>B,TRACE:()=>E,TRACE_FUNC_BEGIN:()=>A,TRACE_FUNC_END:()=>O,Tensor:()=>C,env:()=>c,registerBackend:()=>s});var eu=W(()=>{G(),j(),er(),J(),ei(),ea(),ee(),en(),es()}),el=W(()=>{}),ed={};q(ed,{default:()=>ec});var ep,ec,eh=W(()=>{sK(),ns(),nn(),(ep=globalThis.self?.name==="ort-wasm-proxy-worker")&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":eA(i.wasm).then(()=>{sg(i).then(()=>{postMessage({type:r})},t=>{postMessage({type:r,err:t})})},t=>{postMessage({type:r,err:t})});break;case"init-ep":{let{epName:t,env:a}=i;sy(a,t).then(()=>{postMessage({type:r})},t=>{postMessage({type:r,err:t})});break}case"copy-from":{let{buffer:t}=i,a=sb(t);postMessage({type:r,out:a});break}case"create":{let{model:t,options:a}=i;s$(t,a).then(t=>{postMessage({type:r,out:t})},t=>{postMessage({type:r,err:t})});break}case"release":sv(i),postMessage({type:r});break;case"run":{let{sessionId:t,inputIndices:a,inputs:n,outputIndices:s,options:o}=i;sx(t,a,n,s,Array(s.length).fill(null),o).then(t=>{t.some(t=>"cpu"!==t[3])?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:t},sk([...n,...t]))},t=>{postMessage({type:r,err:t})});break}case"end-profiling":sS(i),postMessage({type:r})}}catch(t){postMessage({type:r,err:t})}}),ec=ep?null:t=>new Worker(t??e_,{type:"module",name:"ort-wasm-proxy-worker"})}),ef={};q(ef,{default:()=>eg});var em,eg,ey,e_,eb,e$,ev,ew,ex,eS,ek,eT,eI,eC,eE,ez,eA,eO,eR,eB,eN,eD,eM,eP,eU,eW,eq,eL,eV,eG,eH,eF,ej,eK,eQ,eZ,eX,eY,eJ,e0,e1,e2,e3,e4,e6,e8,e5,e9,e7,te,tt,tr,ti,ta,tn,ts,to,tu,tl,td,tp,tc,th,tf,tm,tg,ty,t_,tb,t$,tv,tw,tx,tS,tk,tT,tI,tC,tE,tz,tA,tO,tR,tB,tN,tD,tM,tP,tU,tW,tq,tL,tV,tG,tH,tF,tj,tK,tQ,tZ,tX,tY,tJ,t0,t1,t2,t3,t4,t6,t8,t5,t9,t7,re,rt,rr,ri,ra,rn,rs,ro,ru,rl,rd,rp,rc,rh,rf,rm,rg,ry,r_,rb,r$,rv,rw,rx,rS,rk,rT,rI,rC,rE,rz,rA,rO,rR,rB,rN,rD,rM,rP,rU,rW,rq,rL,rV,rG,rH,rF,rj,rK,rQ,rZ,rX,rY,rJ,r0,r1,r2,r3,r4,r6,r8,r5,r9,r7,ie,it,ir,ii,ia,is,io,iu,il,id,ip,ic,ih,im,ig,iy,i_,ib,i$,iv,iw,ix,iS,ik,iT,iI,iC,iE,iz,iA,iO,iR,iB,iN,iD,iM,iP,iU,iW,iq,iL,iV,iG,iH,iF,ij,iK,iQ,iZ,iX,iY,iJ,i0,i1,i2,i3,i4,i6,i8,i5,i9,i7,ae,at,ar,ai,aa,an,as,ao,au,al,ad,ap,ac,ah,af,am,ag,ay,a_,ab,a$,av,aw,ax,aS,ak,aT,aI,aC,aE,az,aA,aO,aR,aB,aN,aD,aM,aP,aU,aW,aq,aL,aV,aG,aH,aF,aj,aK,aQ,aZ,aX,aY,aJ,a0,a1,a2,a3,a4,a6,a8,a5,a9,a7,ne,nt,nr,ni,na=W(()=>{eg=em=async function(t={}){var r,a,n=new Promise((t,i)=>{r=t,a=i}),s="object"==typeof window,o="u">typeof WorkerGlobalScope,u=o&&self.name?.startsWith("em-pthread");t.mountExternalData=(r,i)=>{r.startsWith("./")&&(r=r.substring(2)),(t.Bd||(t.Bd=new Map)).set(r,i)},t.unmountExternalData=()=>{delete t.Bd};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let d=()=>{let r=(t,r,i)=>(...a)=>{let n=tU,s=r?.();a=t(...a);let o=r?.();return s!==o&&(t=o,i(s),r=i=null),tU!=n?new Promise((t,r)=>{tH={resolve:t,reject:r}}):a},i=r=>async(...i)=>{try{if(t.Cd)throw Error("Session already started");let a=t.Cd={be:i[0],errors:[]},n=await r(...i);if(t.Cd!==a)throw Error("Session mismatch");t.Dd?.flush();let s=a.errors;if(0<s.length){let t=await Promise.all(s);if(t=t.filter(t=>t),0<t.length)throw Error(t.join(`
`))}return n}finally{t.Cd=null}};t._OrtCreateSession=r(t._OrtCreateSession,()=>t._OrtCreateSession,r=>t._OrtCreateSession=r),t._OrtRun=i(r(t._OrtRun,()=>t._OrtRun,r=>t._OrtRun=r)),t._OrtRunWithBinding=i(r(t._OrtRunWithBinding,()=>t._OrtRunWithBinding,r=>t._OrtRunWithBinding=r)),t._OrtBindInput=r(t._OrtBindInput,()=>t._OrtBindInput,r=>t._OrtBindInput=r),d=void 0};t.jsepInit=(r,i)=>{if(d?.(),"webgpu"===r){[t.Dd,t.Rd,t.Vd,t.Hd,t.Ud,t.hc,t.Wd,t.Zd,t.Sd,t.Td,t.Xd]=i;let r=t.Dd;t.jsepRegisterBuffer=(t,i,a,n)=>r.registerBuffer(t,i,a,n),t.jsepGetBuffer=t=>r.getBuffer(t),t.jsepCreateDownloader=(t,i,a)=>r.createDownloader(t,i,a),t.jsepOnCreateSession=t=>{r.onCreateSession(t)},t.jsepOnReleaseSession=t=>{r.onReleaseSession(t)},t.jsepOnRunStart=t=>r.onRunStart(t),t.$d=(t,i)=>{r.upload(t,i)}}else if("webnn"===r){[t.Dd,t.Yd,t.Id,t.jsepEnsureTensor,t.Jd,t.jsepDownloadTensor]=i,t.jsepReleaseTensorId=t.Id,t.jsepUploadTensor=t.Jd;let r=t.Dd;t.jsepOnRunStart=t=>r.onRunStart(t),t.jsepOnRunEnd=r.onRunEnd.bind(r),t.jsepRegisterMLContext=(t,i)=>{r.registerMLContext(t,i)},t.jsepOnReleaseSession=t=>{r.onReleaseSession(t)},t.jsepCreateMLTensorDownloader=(t,i)=>r.createMLTensorDownloader(t,i),t.jsepRegisterMLTensor=(t,i,a,n)=>r.registerMLTensor(t,i,a,n),t.jsepCreateMLContext=t=>r.createMLContext(t),t.jsepRegisterMLConstant=(i,a,n,s,o)=>r.registerMLConstant(i,a,n,s,o,t.Bd),t.jsepRegisterGraphInput=r.registerGraphInput.bind(r),t.jsepIsGraphInput=r.isGraphInput.bind(r),t.jsepCreateTemporaryTensor=r.createTemporaryTensor.bind(r)}};var p,c,h=Object.assign({},t),f=(t,r)=>{throw r},m="";(s||o)&&(o?m=self.location.href:"u">typeof document&&document.currentScript&&(m=document.currentScript.src),m=(m="file:///D:/AI%20FDE/Sujin-wardrobe1/node_modules/onnxruntime-web/dist/ort.webgpu.bundle.min.mjs").startsWith("blob:")?"":m.slice(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),o&&(c=t=>{var r=new XMLHttpRequest;return r.open("GET",t,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),p=async t=>{if(N(t))return new Promise((r,i)=>{var a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="arraybuffer",a.onload=()=>{200==a.status||0==a.status&&a.response?r(a.response):i(a.status)},a.onerror=i,a.send(null)});var r=await fetch(t,{credentials:"same-origin"});if(r.ok)return r.arrayBuffer();throw Error(r.status+" : "+r.url)});var g=console.log.bind(console),y=console.error.bind(console),_=g,b=y;Object.assign(t,h),h=null;var $,v,w,x,S,k,T,I,C,E,z,A,O,R=t.wasmBinary,B=!1,N=t=>t.startsWith("file://");function D(){return $.buffer!=x.buffer&&F(),x}function M(){return $.buffer!=x.buffer&&F(),S}function P(){return $.buffer!=x.buffer&&F(),k}function U(){return $.buffer!=x.buffer&&F(),T}function W(){return $.buffer!=x.buffer&&F(),I}function q(){return $.buffer!=x.buffer&&F(),C}function L(){return $.buffer!=x.buffer&&F(),E}function V(){return $.buffer!=x.buffer&&F(),O}if(u){let r=function(i){try{var a=i.data,n=a.yd;if("load"===n){let i=[];for(let n of(self.onmessage=t=>i.push(t),self.startWorker=()=>{for(let t of(postMessage({yd:"loaded"}),i))r(t);self.onmessage=r},a.Od))t[n]&&!t[n].proxy||(t[n]=(...t)=>{postMessage({yd:"callHandler",Nd:n,args:t})},"print"==n&&(_=t[n]),"printErr"==n&&(b=t[n]));$=a.he,F(),G(a.ie)}else if("run"===n){e$(a.xd),r0(a.xd,0,0,1,0,0),ey(),tk(a.xd),H||(rZ(),H=!0);try{ev(a.de,a.Fd)}catch(t){if("unwind"!=t)throw t}}else"setimmediate"!==a.target&&("checkMailbox"===n?H&&tT():n&&(b(`worker: received unknown command ${n}`),b(a)))}catch(t){throw r1(),t}};var G,H=!1;b=function(...t){console.error(t=t.join(" "))},self.alert=function(...t){postMessage({yd:"alert",text:t.join(" "),fe:rX()})},self.onunhandledrejection=t=>{throw t.reason||t},self.onmessage=r}function F(){var r=$.buffer;t.HEAP8=x=new Int8Array(r),t.HEAP16=k=new Int16Array(r),t.HEAPU8=S=new Uint8Array(r),t.HEAPU16=T=new Uint16Array(r),t.HEAP32=I=new Int32Array(r),t.HEAPU32=C=new Uint32Array(r),t.HEAPF32=E=new Float32Array(r),t.HEAPF64=O=new Float64Array(r),t.HEAP64=z=new BigInt64Array(r),t.HEAPU64=A=new BigUint64Array(r)}function j(){u?startWorker(t):rj.Bb()}u||($=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),F());var K,Q=0,Z=null;function X(){if(0==--Q&&Z){var t=Z;Z=null,t()}}function Y(t){throw b(t="Aborted("+t+")"),B=!0,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),a(t),t}function J(){return{a:{Ta:er,Va:et,W:ex,la:ek,b:eE,u:ez,R:eA,Za:eO,d:eR,pb:eN,g:eI,T:eU,Ga:eW,lb:eV,nb:eG,Ha:eH,Ea:eF,wb:ej,Da:eK,pa:eQ,mb:eZ,jb:eX,Fa:eY,kb:eJ,Ma:e2,za:e7,eb:tt,cb:tl,ya:td,V:tp,N:tc,db:th,ma:tv,fb:tw,zb:tx,hb:tI,qb:tE,ab:tz,Aa:tA,yb:tk,Ja:tO,S:tN,Wa:tD,$:tK,G:tZ,E:tJ,m:ta,H:t1,B:t3,X:t4,J:t6,v:t8,O:t5,D:t9,t:t7,A:re,z:rt,w:rr,r:ri,tb:ra,ub:ru,vb:rl,rb:rd,sb:rp,bb:rf,Oa:rm,La:ry,y:r$,ja:rv,Ba:rw,Ka:rg,qa:rx,Ia:rS,ib:rk,U:rh,fa:rT,Sa:rI,gb:rC,Qa:rO,Pa:rR,Ab:rM,Ca:rP,ob:ep,aa:rU,oa:rW,xb:rq,na:rV,$a:ay,ia:az,sa:aN,ga:am,da:ax,ua:aR,p:ah,e:i5,c:i6,ea:av,f:i9,n:ae,k:al,Y:ar,ka:ad,j:af,wa:a$,Ra:aP,ca:aC,Ua:aM,P:aw,K:aa,_:aI,Q:ag,Z:aA,x:ai,l:i8,va:aT,i:i4,h:at,ra:aD,ta:aB,o:i7,q:an,s:ao,I:au,C:ac,L:ap,xa:ab,_a:a_,F:aE,Ya:aS,ba:aO,M:as,Xa:ak,ha:rG,a:$,Na:el}}}var ee={1319426:()=>"u">typeof wasmOffsetConverter,1319483:(r,i,a,n,s)=>{if(void 0===t||!t.Bd)return 1;if((r=eP(Number(r>>>0))).startsWith("./")&&(r=r.substring(2)),!(r=t.Bd.get(r)))return 2;if(i=Number(i>>>0),a=Number(a>>>0),n=Number(n>>>0),i+a>r.byteLength)return 3;try{let o=r.subarray(i,i+a);switch(s){case 0:M().set(o,n>>>0);break;case 1:t.$d(n,o);break;default:return 4}return 0}catch{return 4}},1320198:(r,i,a)=>{t.Jd(r,M().subarray(i>>>0,i+a>>>0))},1320261:()=>t.Yd(),1320302:r=>{t.Id(r)},1320338:()=>{t.Sd()},1320369:()=>{t.Td()},1320398:()=>{t.Xd()},1320423:r=>t.Rd(r),1320456:r=>t.Vd(r),1320488:(r,i,a)=>{t.Hd(Number(r),Number(i),Number(a),!0)},1320551:(r,i,a)=>{t.Hd(Number(r),Number(i),Number(a))},1320608:r=>{t.hc("Abs",r,void 0)},1320659:r=>{t.hc("Neg",r,void 0)},1320710:r=>{t.hc("Floor",r,void 0)},1320763:r=>{t.hc("Ceil",r,void 0)},1320815:r=>{t.hc("Reciprocal",r,void 0)},1320873:r=>{t.hc("Sqrt",r,void 0)},1320925:r=>{t.hc("Exp",r,void 0)},1320976:r=>{t.hc("Erf",r,void 0)},1321027:r=>{t.hc("Sigmoid",r,void 0)},1321082:(r,i,a)=>{t.hc("HardSigmoid",r,{alpha:i,beta:a})},1321161:r=>{t.hc("Log",r,void 0)},1321212:r=>{t.hc("Sin",r,void 0)},1321263:r=>{t.hc("Cos",r,void 0)},1321314:r=>{t.hc("Tan",r,void 0)},1321365:r=>{t.hc("Asin",r,void 0)},1321417:r=>{t.hc("Acos",r,void 0)},1321469:r=>{t.hc("Atan",r,void 0)},1321521:r=>{t.hc("Sinh",r,void 0)},1321573:r=>{t.hc("Cosh",r,void 0)},1321625:r=>{t.hc("Asinh",r,void 0)},1321678:r=>{t.hc("Acosh",r,void 0)},1321731:r=>{t.hc("Atanh",r,void 0)},1321784:r=>{t.hc("Tanh",r,void 0)},1321836:r=>{t.hc("Not",r,void 0)},1321887:(r,i,a)=>{t.hc("Clip",r,{min:i,max:a})},1321956:r=>{t.hc("Clip",r,void 0)},1322008:(r,i)=>{t.hc("Elu",r,{alpha:i})},1322066:r=>{t.hc("Gelu",r,void 0)},1322118:r=>{t.hc("Relu",r,void 0)},1322170:(r,i)=>{t.hc("LeakyRelu",r,{alpha:i})},1322234:(r,i)=>{t.hc("ThresholdedRelu",r,{alpha:i})},1322304:(r,i)=>{t.hc("Cast",r,{to:i})},1322362:r=>{t.hc("Add",r,void 0)},1322413:r=>{t.hc("Sub",r,void 0)},1322464:r=>{t.hc("Mul",r,void 0)},1322515:r=>{t.hc("Div",r,void 0)},1322566:r=>{t.hc("Pow",r,void 0)},1322617:r=>{t.hc("Equal",r,void 0)},1322670:r=>{t.hc("Greater",r,void 0)},1322725:r=>{t.hc("GreaterOrEqual",r,void 0)},1322787:r=>{t.hc("Less",r,void 0)},1322839:r=>{t.hc("LessOrEqual",r,void 0)},1322898:(r,i,a,n,s)=>{t.hc("ReduceMean",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1323073:(r,i,a,n,s)=>{t.hc("ReduceMax",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1323247:(r,i,a,n,s)=>{t.hc("ReduceMin",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1323421:(r,i,a,n,s)=>{t.hc("ReduceProd",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1323596:(r,i,a,n,s)=>{t.hc("ReduceSum",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1323770:(r,i,a,n,s)=>{t.hc("ReduceL1",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1323943:(r,i,a,n,s)=>{t.hc("ReduceL2",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1324116:(r,i,a,n,s)=>{t.hc("ReduceLogSum",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1324293:(r,i,a,n,s)=>{t.hc("ReduceSumSquare",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1324473:(r,i,a,n,s)=>{t.hc("ReduceLogSumExp",r,{keepDims:!!i,noopWithEmptyAxes:!!a,axes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1324653:r=>{t.hc("Where",r,void 0)},1324706:(r,i,a)=>{t.hc("Transpose",r,{perm:i?Array.from(W().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324830:(r,i,a,n)=>{t.hc("DepthToSpace",r,{blocksize:i,mode:eP(a),format:n?"NHWC":"NCHW"})},1324963:(r,i,a,n)=>{t.hc("DepthToSpace",r,{blocksize:i,mode:eP(a),format:n?"NHWC":"NCHW"})},1325096:(r,i,a,n,s,o,u,l,d,p,c,h,f,m,g)=>{t.hc("ConvTranspose",r,{format:d?"NHWC":"NCHW",autoPad:i,dilations:[a],group:n,kernelShape:[s],pads:[o,u],strides:[l],wIsConst:()=>!!D()[p>>>0],outputPadding:c?Array.from(W().subarray(Number(c)>>>0,Number(h)>>>0)):[],outputShape:f?Array.from(W().subarray(Number(f)>>>0,Number(m)>>>0)):[],activation:eP(g)})},1325529:(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>{t.hc("ConvTranspose",r,{format:l?"NHWC":"NCHW",autoPad:i,dilations:Array.from(W().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:n,kernelShape:Array.from(W().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),pads:Array.from(W().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(W().subarray(Number(u)>>>0,2+(Number(u)>>>0)>>>0)),wIsConst:()=>!!D()[d>>>0],outputPadding:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],outputShape:h?Array.from(W().subarray(Number(h)>>>0,Number(f)>>>0)):[],activation:eP(m)})},1326190:(r,i,a,n,s,o,u,l,d,p,c,h,f,m,g)=>{t.hc("ConvTranspose",r,{format:d?"NHWC":"NCHW",autoPad:i,dilations:[a],group:n,kernelShape:[s],pads:[o,u],strides:[l],wIsConst:()=>!!D()[p>>>0],outputPadding:c?Array.from(W().subarray(Number(c)>>>0,Number(h)>>>0)):[],outputShape:f?Array.from(W().subarray(Number(f)>>>0,Number(m)>>>0)):[],activation:eP(g)})},1326623:(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>{t.hc("ConvTranspose",r,{format:l?"NHWC":"NCHW",autoPad:i,dilations:Array.from(W().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:n,kernelShape:Array.from(W().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),pads:Array.from(W().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(W().subarray(Number(u)>>>0,2+(Number(u)>>>0)>>>0)),wIsConst:()=>!!D()[d>>>0],outputPadding:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],outputShape:h?Array.from(W().subarray(Number(h)>>>0,Number(f)>>>0)):[],activation:eP(m)})},1327284:(r,i)=>{t.hc("GlobalAveragePool",r,{format:i?"NHWC":"NCHW"})},1327375:(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>{t.hc("AveragePool",r,{format:m?"NHWC":"NCHW",auto_pad:i,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(W().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(W().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(W().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1327854:(r,i)=>{t.hc("GlobalAveragePool",r,{format:i?"NHWC":"NCHW"})},1327945:(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>{t.hc("AveragePool",r,{format:m?"NHWC":"NCHW",auto_pad:i,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(W().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(W().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(W().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1328424:(r,i)=>{t.hc("GlobalMaxPool",r,{format:i?"NHWC":"NCHW"})},1328511:(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>{t.hc("MaxPool",r,{format:m?"NHWC":"NCHW",auto_pad:i,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(W().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(W().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(W().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1328986:(r,i)=>{t.hc("GlobalMaxPool",r,{format:i?"NHWC":"NCHW"})},1329073:(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>{t.hc("MaxPool",r,{format:m?"NHWC":"NCHW",auto_pad:i,ceil_mode:a,count_include_pad:n,storage_order:s,dilations:o?Array.from(W().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(W().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],strides:h?Array.from(W().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1329548:(r,i,a,n,s)=>{t.hc("Gemm",r,{alpha:i,beta:a,transA:n,transB:s})},1329652:r=>{t.hc("MatMul",r,void 0)},1329706:(r,i,a,n)=>{t.hc("ArgMax",r,{keepDims:!!i,selectLastIndex:!!a,axis:n})},1329814:(r,i,a,n)=>{t.hc("ArgMin",r,{keepDims:!!i,selectLastIndex:!!a,axis:n})},1329922:(r,i)=>{t.hc("Softmax",r,{axis:i})},1329985:(r,i)=>{t.hc("Concat",r,{axis:i})},1330045:(r,i,a,n,s)=>{t.hc("Split",r,{axis:i,numOutputs:a,splitSizes:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1330201:r=>{t.hc("Expand",r,void 0)},1330255:(r,i)=>{t.hc("Gather",r,{axis:Number(i)})},1330326:(r,i)=>{t.hc("GatherElements",r,{axis:Number(i)})},1330405:(r,i)=>{t.hc("GatherND",r,{batch_dims:Number(i)})},1330484:(r,i,a,n,s,o,u,l,d,p,c)=>{t.hc("Resize",r,{antialias:i,axes:a?Array.from(W().subarray(Number(a)>>>0,Number(n)>>>0)):[],coordinateTransformMode:eP(s),cubicCoeffA:o,excludeOutside:u,extrapolationValue:l,keepAspectRatioPolicy:eP(d),mode:eP(p),nearestMode:eP(c)})},1330846:(r,i,a,n,s,o,u)=>{t.hc("Slice",r,{starts:i?Array.from(W().subarray(Number(i)>>>0,Number(a)>>>0)):[],ends:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[],axes:o?Array.from(W().subarray(Number(o)>>>0,Number(u)>>>0)):[]})},1331110:r=>{t.hc("Tile",r,void 0)},1331162:(r,i,a)=>{t.hc("InstanceNormalization",r,{epsilon:i,format:a?"NHWC":"NCHW"})},1331276:(r,i,a)=>{t.hc("InstanceNormalization",r,{epsilon:i,format:a?"NHWC":"NCHW"})},1331390:r=>{t.hc("Range",r,void 0)},1331443:(r,i)=>{t.hc("Einsum",r,{equation:eP(i)})},1331524:(r,i,a,n,s)=>{t.hc("Pad",r,{mode:i,value:a,pads:n?Array.from(W().subarray(Number(n)>>>0,Number(s)>>>0)):[]})},1331667:(r,i,a,n,s,o)=>{t.hc("BatchNormalization",r,{epsilon:i,momentum:a,spatial:!!s,trainingMode:!!n,format:o?"NHWC":"NCHW"})},1331836:(r,i,a,n,s,o)=>{t.hc("BatchNormalization",r,{epsilon:i,momentum:a,spatial:!!s,trainingMode:!!n,format:o?"NHWC":"NCHW"})},1332005:(r,i,a)=>{t.hc("CumSum",r,{exclusive:Number(i),reverse:Number(a)})},1332102:(r,i,a)=>{t.hc("DequantizeLinear",r,{axis:i,blockSize:a})},1332192:(r,i,a,n,s)=>{t.hc("GridSample",r,{align_corners:i,mode:eP(a),padding_mode:eP(n),format:s?"NHWC":"NCHW"})},1332362:(r,i,a,n,s)=>{t.hc("GridSample",r,{align_corners:i,mode:eP(a),padding_mode:eP(n),format:s?"NHWC":"NCHW"})},1332532:(r,i)=>{t.hc("ScatterND",r,{reduction:eP(i)})},1332617:(r,i,a,n,s,o,u,l,d)=>{t.hc("Attention",r,{numHeads:i,isUnidirectional:a,maskFilterValue:n,scale:s,doRotary:o,qkvHiddenSizes:u?Array.from(W().subarray(Number(l)>>>0,Number(l)+u>>>0)):[],pastPresentShareBuffer:!!d})},1332889:r=>{t.hc("BiasAdd",r,void 0)},1332944:r=>{t.hc("BiasSplitGelu",r,void 0)},1333005:r=>{t.hc("FastGelu",r,void 0)},1333061:(r,i,a,n,s,o,u,l,d,p,c,h,f,m,g,y)=>{t.hc("Conv",r,{format:h?"NHWC":"NCHW",auto_pad:i,dilations:a?Array.from(W().subarray(Number(a)>>>0,Number(n)>>>0)):[],group:s,kernel_shape:o?Array.from(W().subarray(Number(o)>>>0,Number(u)>>>0)):[],pads:l?Array.from(W().subarray(Number(l)>>>0,Number(d)>>>0)):[],strides:p?Array.from(W().subarray(Number(p)>>>0,Number(c)>>>0)):[],w_is_const:()=>!!D()[Number(f)>>>0],activation:eP(m),activation_params:g?Array.from(L().subarray(Number(g)>>>0,Number(y)>>>0)):[]})},1333645:r=>{t.hc("Gelu",r,void 0)},1333697:(r,i,a,n,s,o,u,l,d)=>{t.hc("GroupQueryAttention",r,{numHeads:i,kvNumHeads:a,scale:n,softcap:s,doRotary:o,rotaryInterleaved:u,smoothSoftmax:l,localWindowSize:d})},1333914:(r,i,a,n)=>{t.hc("LayerNormalization",r,{axis:i,epsilon:a,simplified:!!n})},1334025:(r,i,a,n)=>{t.hc("LayerNormalization",r,{axis:i,epsilon:a,simplified:!!n})},1334136:(r,i,a,n,s,o)=>{t.hc("MatMulNBits",r,{k:i,n:a,accuracyLevel:n,bits:s,blockSize:o})},1334263:(r,i,a,n,s,o)=>{t.hc("MultiHeadAttention",r,{numHeads:i,isUnidirectional:a,maskFilterValue:n,scale:s,doRotary:o})},1334422:(r,i)=>{t.hc("QuickGelu",r,{alpha:i})},1334486:(r,i,a,n,s)=>{t.hc("RotaryEmbedding",r,{interleaved:!!i,numHeads:a,rotaryEmbeddingDim:n,scale:s})},1334625:(r,i,a)=>{t.hc("SkipLayerNormalization",r,{epsilon:i,simplified:!!a})},1334727:(r,i,a)=>{t.hc("SkipLayerNormalization",r,{epsilon:i,simplified:!!a})},1334829:(r,i,a,n)=>{t.hc("GatherBlockQuantized",r,{gatherAxis:i,quantizeAxis:a,blockSize:n})},1334950:r=>{t.Wd(r)},1334984:(r,i)=>t.Zd(Number(r),Number(i),t.Cd.be,t.Cd.errors)};function et(r,i,a){return tj(async()=>{await t.Ud(Number(r),Number(i),Number(a))})}function er(){return"u">typeof wasmOffsetConverter}class ei{name="ExitStatus";constructor(t){this.message=`Program terminated with exit(${t})`,this.status=t}}var ea=t=>{t.terminate(),t.onmessage=()=>{}},en=[],es=t=>{0==ec.length&&(eb(),e_(ec[0]));var r=ec.pop();if(!r)return 6;eh.push(r),em[t.xd]=r,r.xd=t.xd;var i={yd:"run",de:t.ce,Fd:t.Fd,xd:t.xd};return r.postMessage(i,t.Ld),0},eo=0,eu=(t,r,...i)=>{for(var a=2*i.length,n=ir(),s=it(8*a),o=s>>>3,u=0;u<i.length;u++){var l=i[u];"bigint"==typeof l?(z[o+2*u]=1n,z[o+2*u+1]=l):(z[o+2*u]=0n,V()[o+2*u+1>>>0]=l)}return t=r2(t,0,a,s,r),ie(n),t};function el(t){if(u)return eu(0,1,t);if(w=t,!(0<eo)){for(var r of eh)ea(r);for(r of ec)ea(r);ec=[],eh=[],em={},B=!0}f(0,new ei(t))}function ed(t){if(u)return eu(1,0,t);ep(t)}var ep=t=>{if(w=t,u)throw ed(t),"unwind";el(t)},ec=[],eh=[],ef=[],em={},eg=t=>{var r=t.xd;delete em[r],ec.push(t),eh.splice(eh.indexOf(t),1),t.xd=0,r3(r)};function ey(){ef.forEach(t=>t())}var e_=r=>new Promise(i=>{r.onmessage=a=>{var n=(a=a.data).yd;if(a.Ed&&a.Ed!=rX()){var s=em[a.Ed];s?s.postMessage(a,a.Ld):b(`Internal error! Worker sent a message "${n}" to target pthread ${a.Ed}, but that thread no longer exists!`)}else"checkMailbox"===n?tT():"spawnThread"===n?es(a):"cleanupThread"===n?eg(em[a.ee]):"loaded"===n?(r.loaded=!0,i(r)):"alert"===n?alert(`Thread ${a.fe}: ${a.text}`):"setimmediate"===a.target?r.postMessage(a):"callHandler"===n?t[a.Nd](...a.args):n&&b(`worker sent an unknown command ${n}`)},r.onerror=t=>{throw b(`worker sent an error! ${t.filename}:${t.lineno}: ${t.message}`),t};var a,n=[];for(a of[])t.propertyIsEnumerable(a)&&n.push(a);r.postMessage({yd:"load",Od:n,he:$,ie:v})});function eb(){var t=new Worker("file:///D:/AI%20FDE/Sujin-wardrobe1/node_modules/onnxruntime-web/dist/ort.webgpu.bundle.min.mjs".startsWith("file:")?new i.U(i(7050)):new URL("file:///D:/AI%20FDE/Sujin-wardrobe1/node_modules/onnxruntime-web/dist/ort.webgpu.bundle.min.mjs"),{type:"module",workerData:"em-pthread",name:"em-pthread"});ec.push(t)}var e$=t=>{F();var r=q()[t+52>>>2>>>0];t=q()[t+56>>>2>>>0],r7(r,r-t),ie(r)},ev=(t,r)=>{eo=0,t=id(t,r),0<eo?w=t:r4(t)},ew=[];function ex(t){var r=new eT(t>>>=0);if(0==D()[r.wd+12>>>0]){var i=1;D()[r.wd+12>>>0]=i}return i=0,D()[r.wd+13>>>0]=i,ew.push(r),ia(t),io(t)}var eS=0,ek=()=>{r5(0,0);var t=ew.pop();ii(t.Gd),eS=0};class eT{constructor(t){this.Gd=t,this.wd=t-24}}function eI(t){throw eS||=t>>>0}var eC=t=>{var r=eS;if(!r)return r9(0),0;var i=new eT(r);q()[i.wd+16>>>2>>>0]=r;var a=q()[i.wd+4>>>2>>>0];if(!a)return r9(0),r;for(var n of t){if(0===n||n===a)break;if(is(n,a,i.wd+16))return r9(n),r}return r9(a),r};function eE(){return eC([])}function ez(t){return eC([t>>>0])}function eA(t,r){return eC([t>>>0,r>>>0])}var eO=()=>{var t=ew.pop();t||Y("no exception to throw");var r=t.Gd;if(0==D()[t.wd+13>>>0]){ew.push(t);var i=1;D()[t.wd+13>>>0]=i,i=0,D()[t.wd+12>>>0]=i}throw eS=r};function eR(t,r,i){var a=new eT(t>>>=0);throw r>>>=0,i>>>=0,q()[a.wd+16>>>2>>>0]=0,q()[a.wd+4>>>2>>>0]=r,q()[a.wd+8>>>2>>>0]=i,eS=t}function eB(t,r,i,a){return u?eu(2,1,t,r,i,a):eN(t,r,i,a)}function eN(t,r,i,a){if(t>>>=0,i>>>=0,a>>>=0,void 0===l)return 6;var n=[];return u&&0===n.length?eB(t,r>>>=0,i,a):(t={ce:i,xd:t,Fd:a,Ld:n},u?(t.yd="spawnThread",postMessage(t,n),0):es(t))}var eD="u">typeof TextDecoder?new TextDecoder:void 0,eM=(t,r=0,i=NaN)=>{var a=(r>>>=0)+i;for(i=r;t[i]&&!(i>=a);)++i;if(16<i-r&&t.buffer&&eD)return eD.decode(t.buffer instanceof ArrayBuffer?t.subarray(r,i):t.slice(r,i));for(a="";r<i;){var n=t[r++];if(128&n){var s=63&t[r++];if((224&n)==192)a+=String.fromCharCode((31&n)<<6|s);else{var o=63&t[r++];65536>(n=(240&n)==224?(15&n)<<12|s<<6|o:(7&n)<<18|s<<12|o<<6|63&t[r++])?a+=String.fromCharCode(n):(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n))}}else a+=String.fromCharCode(n)}return a},eP=(t,r)=>(t>>>=0)?eM(M(),t,r):"";function eU(t,r,i){return u?eu(3,1,t,r,i):0}function eW(t,r){if(u)return eu(4,1,t,r)}var eq=t=>{for(var r=0,i=0;i<t.length;++i){var a=t.charCodeAt(i);127>=a?r++:2047>=a?r+=2:55296<=a&&57343>=a?(r+=4,++i):r+=3}return r},eL=(t,r,i)=>{var a=M();if(r>>>=0,0<i){var n=r;i=r+i-1;for(var s=0;s<t.length;++s){var o=t.charCodeAt(s);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++s)),127>=o){if(r>=i)break;a[r++>>>0]=o}else{if(2047>=o){if(r+1>=i)break;a[r++>>>0]=192|o>>6}else{if(65535>=o){if(r+2>=i)break;a[r++>>>0]=224|o>>12}else{if(r+3>=i)break;a[r++>>>0]=240|o>>18,a[r++>>>0]=128|o>>12&63}a[r++>>>0]=128|o>>6&63}a[r++>>>0]=128|63&o}}a[r>>>0]=0,t=r-n}else t=0;return t};function eV(t,r){if(u)return eu(5,1,t,r)}function eG(t,r,i){if(u)return eu(6,1,t,r,i)}function eH(t,r,i){return u?eu(7,1,t,r,i):0}function eF(t,r){if(u)return eu(8,1,t,r)}function ej(t,r,i){if(u)return eu(9,1,t,r,i)}function eK(t,r,i,a){if(u)return eu(10,1,t,r,i,a)}function eQ(t,r,i,a){if(u)return eu(11,1,t,r,i,a)}function eZ(t,r,i,a){if(u)return eu(12,1,t,r,i,a)}function eX(t){if(u)return eu(13,1,t)}function eY(t,r){if(u)return eu(14,1,t,r)}function eJ(t,r,i){if(u)return eu(15,1,t,r,i)}var e0,e1,e2=()=>Y(""),e3=t=>{for(var r="";M()[t>>>0];)r+=e0[M()[t++>>>0]];return r},e4={},e6={},e8={};function e5(t,r,i={}){return function(t,r,i={}){var a=r.name;if(!t)throw new e1(`type "${a}" must have a positive integer typeid pointer`);if(e6.hasOwnProperty(t)){if(i.Pd)return;throw new e1(`Cannot register type '${a}' twice`)}e6[t]=r,delete e8[t],e4.hasOwnProperty(t)&&(r=e4[t],delete e4[t],r.forEach(t=>t()))}(t,r,i)}var e9=(t,r,i)=>{switch(r){case 1:return i?t=>D()[t>>>0]:t=>M()[t>>>0];case 2:return i?t=>P()[t>>>1>>>0]:t=>U()[t>>>1>>>0];case 4:return i?t=>W()[t>>>2>>>0]:t=>q()[t>>>2>>>0];case 8:return i?t=>z[t>>>3]:t=>A[t>>>3];default:throw TypeError(`invalid integer width (${r}): ${t}`)}};function e7(t,r,i){i>>>=0,e5(t>>>=0,{name:r=e3(r>>>0),fromWireType:t=>t,toWireType:function(t,r){if("bigint"!=typeof r&&"number"!=typeof r)throw r=null===r?"null":"object"==(t=typeof r)||"array"===t||"function"===t?r.toString():""+r,TypeError(`Cannot convert "${r}" to ${this.name}`);return"number"==typeof r&&(r=BigInt(r)),r},zd:te,readValueFromPointer:e9(r,i,-1==r.indexOf("u")),Ad:null})}var te=8;function tt(t,r,i,a){e5(t>>>=0,{name:r=e3(r>>>0),fromWireType:function(t){return!!t},toWireType:function(t,r){return r?i:a},zd:te,readValueFromPointer:function(t){return this.fromWireType(M()[t>>>0])},Ad:null})}var tr=[],ti=[];function ta(t){9<(t>>>=0)&&0==--ti[t+1]&&(ti[t]=void 0,tr.push(t))}var tn=t=>{if(!t)throw new e1("Cannot use deleted val. handle = "+t);return ti[t]},ts=t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let r=tr.pop()||ti.length;return ti[r]=t,ti[r+1]=1,r}};function to(t){return this.fromWireType(q()[t>>>2>>>0])}var tu={name:"emscripten::val",fromWireType:t=>{var r=tn(t);return ta(t),r},toWireType:(t,r)=>ts(r),zd:8,readValueFromPointer:to,Ad:null};function tl(t){return e5(t>>>0,tu)}function td(t,r,i){i>>>=0,e5(t>>>=0,{name:r=e3(r>>>0),fromWireType:t=>t,toWireType:(t,r)=>r,zd:te,readValueFromPointer:((t,r)=>{switch(r){case 4:return function(t){return this.fromWireType(L()[t>>>2>>>0])};case 8:return function(t){return this.fromWireType(V()[t>>>3>>>0])};default:throw TypeError(`invalid float width (${r}): ${t}`)}})(r,i),Ad:null})}function tp(t,r,i,a,n){if(t>>>=0,i>>>=0,r=e3(r>>>0),-1===n&&(n=0xffffffff),n=t=>t,0===a){var s=32-8*i;n=t=>t<<s>>>s}var o=r.includes("unsigned")?function(t,r){return r>>>0}:function(t,r){return r};e5(t,{name:r,fromWireType:n,toWireType:o,zd:te,readValueFromPointer:e9(r,i,0!==a),Ad:null})}function tc(t,r,i){function a(t){var r=q()[t>>>2>>>0];return t=q()[t+4>>>2>>>0],new n(D().buffer,t,r)}var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][r];e5(t>>>=0,{name:i=e3(i>>>0),fromWireType:a,zd:te,readValueFromPointer:a},{Pd:!0})}function th(t,r){e5(t>>>=0,{name:r=e3(r>>>0),fromWireType:function(t){for(var r,i=q()[t>>>2>>>0],a=t+4,n=a,s=0;s<=i;++s){var o=a+s;s!=i&&0!=M()[o>>>0]||(n=eP(n,o-n),void 0===r?r=n:(r+="\0",r+=n),n=o+1)}return rY(t),r},toWireType:function(t,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var i="string"==typeof r;if(!(i||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array))throw new e1("Cannot pass non-string to std::string");var a=i?eq(r):r.length,n=rJ(4+a+1),s=n+4;if(q()[n>>>2>>>0]=a,i)eL(r,s,a+1);else if(i)for(i=0;i<a;++i){var o=r.charCodeAt(i);if(255<o)throw rY(n),new e1("String has UTF-16 code units that do not fit in 8 bits");M()[s+i>>>0]=o}else for(i=0;i<a;++i)M()[s+i>>>0]=r[i];return null!==t&&t.push(rY,n),n},zd:te,readValueFromPointer:to,Ad(t){rY(t)}})}var tf="u">typeof TextDecoder?new TextDecoder("utf-16le"):void 0,tm=(t,r)=>{for(var i=t>>1,a=i+r/2;!(i>=a)&&U()[i>>>0];)++i;if(32<(i<<=1)-t&&tf)return tf.decode(M().slice(t,i));for(i="",a=0;!(a>=r/2);++a){var n=P()[t+2*a>>>1>>>0];if(0==n)break;i+=String.fromCharCode(n)}return i},tg=(t,r,i)=>{if(2>(i??=0x7fffffff))return 0;var a=r;i=(i-=2)<2*t.length?i/2:t.length;for(var n=0;n<i;++n){var s=t.charCodeAt(n);P()[r>>>1>>>0]=s,r+=2}return P()[r>>>1>>>0]=0,r-a},ty=t=>2*t.length,t_=(t,r)=>{for(var i=0,a="";!(i>=r/4);){var n=W()[t+4*i>>>2>>>0];if(0==n)break;++i,65536<=n?(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n)):a+=String.fromCharCode(n)}return a},tb=(t,r,i)=>{if(r>>>=0,4>(i??=0x7fffffff))return 0;var a=r;i=a+i-4;for(var n=0;n<t.length;++n){var s=t.charCodeAt(n);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++n)),W()[r>>>2>>>0]=s,(r+=4)+4>i)break}return W()[r>>>2>>>0]=0,r-a},t$=t=>{for(var r=0,i=0;i<t.length;++i){var a=t.charCodeAt(i);55296<=a&&57343>=a&&++i,r+=4}return r};function tv(t,r,i){if(t>>>=0,r>>>=0,i=e3(i>>>=0),2===r)var a=tm,n=tg,s=ty,o=t=>U()[t>>>1>>>0];else 4===r&&(a=t_,n=tb,s=t$,o=t=>q()[t>>>2>>>0]);e5(t,{name:i,fromWireType:t=>{for(var i,n=q()[t>>>2>>>0],s=t+4,u=0;u<=n;++u){var l=t+4+u*r;u!=n&&0!=o(l)||(s=a(s,l-s),void 0===i?i=s:(i+="\0",i+=s),s=l+r)}return rY(t),i},toWireType:(t,a)=>{if("string"!=typeof a)throw new e1(`Cannot pass non-string to C++ string type ${i}`);var o=s(a),u=rJ(4+o+r);return q()[u>>>2>>>0]=o/r,n(a,u+4,o+r),null!==t&&t.push(rY,u),u},zd:te,readValueFromPointer:to,Ad(t){rY(t)}})}function tw(t,r){e5(t>>>=0,{Qd:!0,name:r=e3(r>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function tx(t){r0(t>>>0,!o,1,!s,131072,!1),ey()}var tS=t=>{if(!B)try{if(t(),!(0<eo))try{u?r4(w):ep(w)}catch(t){t instanceof ei||"unwind"==t||f(0,t)}}catch(t){t instanceof ei||"unwind"==t||f(0,t)}};function tk(t){t>>>=0,"function"==typeof Atomics.ge&&(Atomics.ge(W(),t>>>2,t).value.then(tT),t+=128,Atomics.store(W(),t>>>2,1))}var tT=()=>{var t=rX();t&&(tk(t),tS(r8))};function tI(t,r){(t>>>=0)==r>>>0?setTimeout(tT):u?postMessage({Ed:t,yd:"checkMailbox"}):(t=em[t])&&t.postMessage({yd:"checkMailbox"})}var tC=[];function tE(t,r,i,a,n){for(r>>>=0,tC.length=a/=2,i=n>>>0>>>3,n=0;n<a;n++)tC[n]=z[i+2*n]?z[i+2*n+1]:V()[i+2*n+1>>>0];return(r?ee[r]:rK[t])(...tC)}var tz=()=>{eo=0};function tA(t){t>>>=0,u?postMessage({yd:"cleanupThread",ee:t}):eg(em[t])}function tO(t){}var tR=(t,r)=>{var i=e6[t];if(void 0===i)throw i=e3(t=rQ(t)),rY(t),new e1(`${r} has unknown type ${i}`);return i},tB=(t,r,i)=>{var a=[];return t=t.toWireType(a,i),a.length&&(q()[r>>>2>>>0]=ts(a)),t};function tN(t,r,i){return r>>>=0,i>>>=0,t=tn(t>>>0),tB(r=tR(r,"emval::as"),i,t)}function tD(t,r){return r>>>=0,t=tn(t>>>0),(r=tR(r,"emval::as")).toWireType(null,t)}var tM=t=>{try{t()}catch(t){Y(t)}},tP=0,tU=null,tW=0,tq=[],tL={},tV={},tG=0,tH=null,tF=[];function tj(t){return function(t){if(!B){if(0===tP){var r,i,a,n=!1,s=!1;t((t=0)=>{if(!B&&(tW=t,n=!0,s)){tP=2,tM(()=>i2(tU)),"u">typeof MainLoop&&MainLoop.Md&&MainLoop.resume(),t=!1;try{var r,i=(r=rj[tV[r=W()[tU+8>>>2>>>0]]],--eo,r())}catch(r){i=r,t=!0}var a=!1;if(!tU){var o=tH;o&&(tH=null,(t?o.reject:o.resolve)(i),a=!0)}if(t&&!a)throw i}}),s=!0,n||(tP=1,i=(r=rJ(65548))+12,q()[r>>>2>>>0]=i,q()[r+4>>>2>>>0]=i+65536,void 0===(a=tL[i=tq[0]])&&(a=tG++,tL[i]=a,tV[a]=i),i=a,W()[r+8>>>2>>>0]=i,tU=r,"u">typeof MainLoop&&MainLoop.Md&&MainLoop.pause(),tM(()=>i0(tU)))}else 2===tP?(tP=0,tM(i3),rY(tU),tU=null,tF.forEach(tS)):Y(`invalid state: ${tP}`);return tW}}(r=>{t().then(r)})}function tK(t){return t>>>=0,tj(async()=>ts(await tn(t)))}var tQ=[];function tZ(t,r,i,a){return i>>>=0,a>>>=0,(t=tQ[t>>>0])(null,r=tn(r>>>0),i,a)}var tX={},tY=t=>{var r=tX[t];return void 0===r?e3(t):r};function tJ(t,r,i,a,n){return i>>>=0,a>>>=0,n>>>=0,(t=tQ[t>>>0])(r=tn(r>>>0),r[i=tY(i)],a,n)}var t0=()=>"object"==typeof globalThis?globalThis:Function("return this")();function t1(t){return 0==(t>>>=0)?ts(t0()):(t=tY(t),ts(t0()[t]))}var t2=(t,r)=>Object.defineProperty(r,"name",{value:t});function t3(t,r,i){var a,n,s=(r=((t,r)=>{for(var i=Array(t),a=0;a<t;++a)i[a]=tR(q()[r+4*a>>>2>>>0],"parameter "+a);return i})(t,r>>>0)).shift();t--;var o=`return function (obj, func, destructorsRef, args) {
`,u=0,l=[];0===i&&l.push("obj");for(var d=["retType"],p=[s],c=0;c<t;++c)l.push("arg"+c),d.push("argType"+c),p.push(r[c]),o+=`  var arg${c} = argType${c}.readValueFromPointer(args${u?"+"+u:""});
`,u+=r[c].zd;return o+=`  var rv = ${1===i?"new func":"func.call"}(${l.join(", ")});
`,s.Qd||(d.push("emval_returnValue"),p.push(tB),o+=`  return emval_returnValue(retType, destructorsRef, rv);
`),d.push(o+`};
`),t=(function(t){var r=Function;if(!(r instanceof Function))throw TypeError(`new_ called with constructor type ${typeof r} which is not a function`);var i=t2(r.name||"unknownFunctionName",function(){});return i.prototype=r.prototype,i=new i,(t=r.apply(i,t))instanceof Object?t:i})(d)(...p),a=t2(i=`methodCaller<(${r.map(t=>t.name).join(", ")}) => ${s.name}>`,t),n=tQ.length,tQ.push(a),n}function t4(r){return ts(t[r=tY(r>>>0)])}function t6(t,r){return r>>>=0,ts((t=tn(t>>>0))[r=tn(r)])}function t8(t){9<(t>>>=0)&&(ti[t+1]+=1)}function t5(){return ts([])}function t9(t){t=tn(t>>>0);for(var r=Array(t.length),i=0;i<t.length;i++)r[i]=t[i];return ts(r)}function t7(t){return ts(tY(t>>>0))}function re(){return ts({})}function rt(t){for(var r=tn(t>>>=0);r.length;){var i=r.pop();r.pop()(i)}ta(t)}function rr(t,r,i){r>>>=0,i>>>=0,t=tn(t>>>0),r=tn(r),i=tn(i),t[r]=i}function ri(t,r){return r>>>=0,ts(t=(t=tR(t>>>0,"_emval_take_value")).readValueFromPointer(r))}function ra(t,r){t=-0x20000000000000>t||0x20000000000000<t?NaN:Number(t),r>>>=0,t=new Date(1e3*t),W()[r>>>2>>>0]=t.getUTCSeconds(),W()[r+4>>>2>>>0]=t.getUTCMinutes(),W()[r+8>>>2>>>0]=t.getUTCHours(),W()[r+12>>>2>>>0]=t.getUTCDate(),W()[r+16>>>2>>>0]=t.getUTCMonth(),W()[r+20>>>2>>>0]=t.getUTCFullYear()-1900,W()[r+24>>>2>>>0]=t.getUTCDay(),t=(t.getTime()-Date.UTC(t.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,W()[r+28>>>2>>>0]=t}var rn=t=>t%4==0&&(t%100!=0||t%400==0),rs=[0,31,60,91,121,152,182,213,244,274,305,335],ro=[0,31,59,90,120,151,181,212,243,273,304,334];function ru(t,r){t=-0x20000000000000>t||0x20000000000000<t?NaN:Number(t),r>>>=0,t=new Date(1e3*t),W()[r>>>2>>>0]=t.getSeconds(),W()[r+4>>>2>>>0]=t.getMinutes(),W()[r+8>>>2>>>0]=t.getHours(),W()[r+12>>>2>>>0]=t.getDate(),W()[r+16>>>2>>>0]=t.getMonth(),W()[r+20>>>2>>>0]=t.getFullYear()-1900,W()[r+24>>>2>>>0]=t.getDay();var i=(rn(t.getFullYear())?rs:ro)[t.getMonth()]+t.getDate()-1|0;W()[r+28>>>2>>>0]=i,W()[r+36>>>2>>>0]=-60*t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset();var a=new Date(t.getFullYear(),0,1).getTimezoneOffset();t=0|(i!=a&&t.getTimezoneOffset()==Math.min(a,i)),W()[r+32>>>2>>>0]=t}function rl(t){t>>>=0;var r=new Date(W()[t+20>>>2>>>0]+1900,W()[t+16>>>2>>>0],W()[t+12>>>2>>>0],W()[t+8>>>2>>>0],W()[t+4>>>2>>>0],W()[t>>>2>>>0],0),i=W()[t+32>>>2>>>0],a=r.getTimezoneOffset(),n=new Date(r.getFullYear(),6,1).getTimezoneOffset(),s=new Date(r.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(s,n);return 0>i?W()[t+32>>>2>>>0]=+(n!=s&&o==a):0<i!=(o==a)&&(n=Math.max(s,n),r.setTime(r.getTime()+6e4*((0<i?o:n)-a))),W()[t+24>>>2>>>0]=r.getDay(),i=(rn(r.getFullYear())?rs:ro)[r.getMonth()]+r.getDate()-1|0,W()[t+28>>>2>>>0]=i,W()[t>>>2>>>0]=r.getSeconds(),W()[t+4>>>2>>>0]=r.getMinutes(),W()[t+8>>>2>>>0]=r.getHours(),W()[t+12>>>2>>>0]=r.getDate(),W()[t+16>>>2>>>0]=r.getMonth(),W()[t+20>>>2>>>0]=r.getYear(),BigInt(isNaN(t=r.getTime())?-1:t/1e3)}function rd(t,r,i,a,n,s,o){return u?eu(16,1,t,r,i,a,n,s,o):-52}function rp(t,r,i,a,n,s){if(u)return eu(17,1,t,r,i,a,n,s)}var rc={},rh=()=>performance.timeOrigin+performance.now();function rf(t,r){if(u)return eu(18,1,t,r);if(rc[t]&&(clearTimeout(rc[t].id),delete rc[t]),!r)return 0;var i=setTimeout(()=>{delete rc[t],tS(()=>r6(t,performance.timeOrigin+performance.now()))},r);return rc[t]={id:i,ke:r},0}function rm(t,r,i,a){t>>>=0,r>>>=0,i>>>=0,a>>>=0;var n=new Date().getFullYear(),s=new Date(n,0,1).getTimezoneOffset(),o=Math.max(s,n=new Date(n,6,1).getTimezoneOffset());q()[t>>>2>>>0]=60*o,W()[r>>>2>>>0]=+(s!=n),t=(r=t=>{var r=Math.abs(t);return`UTC${0<=t?"-":"+"}${String(Math.floor(r/60)).padStart(2,"0")}${String(r%60).padStart(2,"0")}`})(s),r=r(n),n<s?(eL(t,i,17),eL(r,a,17)):(eL(t,a,17),eL(r,i,17))}var rg=()=>Date.now();function ry(t,r,i){return 0<=t&&3>=t?(t=0===t?Date.now():performance.timeOrigin+performance.now(),z[i>>>0>>>3]=BigInt(Math.round(1e6*t)),0):28}var r_=[],rb=(t,r)=>{r_.length=0;for(var i;i=M()[t++>>>0];){var a=105!=i;r+=(a&=112!=i)&&r%8?4:0,r_.push(112==i?q()[r>>>2>>>0]:106==i?z[r>>>3]:105==i?W()[r>>>2>>>0]:V()[r>>>3>>>0]),r+=a?8:4}return r_};function r$(t,r,i){return t>>>=0,r=rb(r>>>0,i>>>0),ee[t](...r)}function rv(t,r,i){return t>>>=0,r=rb(r>>>0,i>>>0),ee[t](...r)}var rw=()=>{};function rx(t,r){return b(eP(t>>>0,r>>>0))}var rS=()=>{throw eo+=1,"unwind"};function rk(){return 0xffff0000}var rT=()=>navigator.hardwareConcurrency;function rI(){return Y("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function rC(t){t>>>=0;var r=M().length;if(t<=r||0xffff0000<t)return!1;for(var i=1;4>=i;i*=2){var a=r*(1+.2/i);a=Math.min(a,t+0x6000000);e:{a=(Math.min(0xffff0000,65536*Math.ceil(Math.max(t,a)/65536))-$.buffer.byteLength+65535)/65536|0;try{$.grow(a),F();var n=1;break e}catch{}n=void 0}if(n)return!0}return!1}var rE=()=>(Y("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),rz={},rA=t=>{t.forEach(t=>{var r=rE();r&&(rz[r]=t)})};function rO(){var t=Error().stack.toString().split(`
`);return"Error"==t[0]&&t.shift(),rA(t),rz.Kd=rE(),rz.ae=t,rz.Kd}function rR(t,r,i){if(t>>>=0,r>>>=0,rz.Kd==t)var a=rz.ae;else"Error"==(a=Error().stack.toString().split(`
`))[0]&&a.shift(),rA(a);for(var n=3;a[n]&&rE()!=t;)++n;for(t=0;t<i&&a[t+n];++t)W()[r+4*t>>>2>>>0]=rE();return t}var rB,rN={},rD=()=>{if(!rB){var t,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(t in rN)void 0===rN[t]?delete r[t]:r[t]=rN[t];var i=[];for(t in r)i.push(`${t}=${r[t]}`);rB=i}return rB};function rM(t,r){if(u)return eu(19,1,t,r);t>>>=0,r>>>=0;var i=0;return rD().forEach((a,n)=>{var s=r+i;for(n=q()[t+4*n>>>2>>>0]=s,s=0;s<a.length;++s)D()[n++>>>0]=a.charCodeAt(s);D()[n>>>0]=0,i+=a.length+1}),0}function rP(t,r){if(u)return eu(20,1,t,r);t>>>=0,r>>>=0;var i=rD();q()[t>>>2>>>0]=i.length;var a=0;return i.forEach(t=>a+=t.length+1),q()[r>>>2>>>0]=a,0}function rU(t){return u?eu(21,1,t):52}function rW(t,r,i,a){return u?eu(22,1,t,r,i,a):52}function rq(t,r,i,a){return u?eu(23,1,t,r,i,a):70}var rL=[null,[],[]];function rV(t,r,i,a){if(u)return eu(24,1,t,r,i,a);r>>>=0,i>>>=0,a>>>=0;for(var n=0,s=0;s<i;s++){var o=q()[r>>>2>>>0],l=q()[r+4>>>2>>>0];r+=8;for(var d=0;d<l;d++){var p=M()[o+d>>>0],c=rL[t];0===p||10===p?((1===t?_:b)(eM(c)),c.length=0):c.push(p)}n+=l}return q()[a>>>2>>>0]=n,0}function rG(t){return t>>>0}u||function(){for(var r=t.numThreads-1;r--;)eb();en.unshift(()=>{var t;Q++,t=()=>X(),u?t():Promise.all(ec.map(e_)).then(t)})}();for(var rH=Array(256),rF=0;256>rF;++rF)rH[rF]=String.fromCharCode(rF);e0=rH,e1=t.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}},t.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError"}},ti.push(0,1,void 0,1,null,1,!0,1,!1,1),t.count_emval_handles=()=>ti.length/2-5-tr.length;var rj,rK=[el,ed,eB,eU,eW,eV,eG,eH,eF,ej,eK,eQ,eZ,eX,eY,eJ,rd,rp,rf,rM,rP,rU,rW,rq,rV];!async function(){function r(t,r){var i,a,n;return rj=t.exports,i=rj=function(){var t={};for(let[r,i]of Object.entries(rj))t[r]="function"==typeof i?(...t)=>{tq.push(r);try{return i(...t)}finally{B||(tq.pop(),tU&&1===tP&&0===tq.length&&(tP=0,eo+=1,tM(i1),"u">typeof Fibers&&Fibers.le()))}}:i;return t}(),a=t=>r=>t(r)>>>0,n=t=>()=>t()>>>0,(i=Object.assign({},i)).Cb=a(i.Cb),i.fc=n(i.fc),i.ic=a(i.ic),i.vc=a(i.vc),i.wc=n(i.wc),i.Ac=a(i.Ac),rj=i,ef.push(rj.jc),v=r,X(),rj}Q++;var n=J();if(t.instantiateWasm)return new Promise(i=>{t.instantiateWasm(n,(t,a)=>{r(t,a),i(t.exports)})});if(u)return new Promise(t=>{G=i=>{t(r(new WebAssembly.Instance(i,J()),i))}});K??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",m):m+"ort-wasm-simd-threaded.jsep.wasm":new i.U(i(140)).href;try{var s=await async function(t){if(!R&&"function"==typeof WebAssembly.instantiateStreaming&&!N(K))try{var r=fetch(K,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(r,t)}catch(t){b(`wasm streaming compile failed: ${t}`),b("falling back to ArrayBuffer instantiation")}return async function(t,r){try{var i=await async function(t){if(!R)try{var r=await p(t);return new Uint8Array(r)}catch{}if(t==K&&R)t=new Uint8Array(R);else{if(!c)throw"both async and sync fetching of the wasm failed";t=c(t)}return t}(t);return await WebAssembly.instantiate(i,r)}catch(t){b(`failed to asynchronously prepare wasm: ${t}`),Y(t)}}(K,t)}(n);r(s.instance,s.module)}catch(t){return a(t),Promise.reject(t)}}();var rQ=t=>(rQ=rj.Cb)(t),rZ=()=>(rZ=rj.Db)();t._OrtInit=(r,i)=>(t._OrtInit=rj.Eb)(r,i),t._OrtGetLastError=(r,i)=>(t._OrtGetLastError=rj.Fb)(r,i),t._OrtCreateSessionOptions=(r,i,a,n,s,o,u,l,d,p)=>(t._OrtCreateSessionOptions=rj.Gb)(r,i,a,n,s,o,u,l,d,p),t._OrtAppendExecutionProvider=(r,i)=>(t._OrtAppendExecutionProvider=rj.Hb)(r,i),t._OrtAddFreeDimensionOverride=(r,i,a)=>(t._OrtAddFreeDimensionOverride=rj.Ib)(r,i,a),t._OrtAddSessionConfigEntry=(r,i,a)=>(t._OrtAddSessionConfigEntry=rj.Jb)(r,i,a),t._OrtReleaseSessionOptions=r=>(t._OrtReleaseSessionOptions=rj.Kb)(r),t._OrtCreateSession=(r,i,a)=>(t._OrtCreateSession=rj.Lb)(r,i,a),t._OrtReleaseSession=r=>(t._OrtReleaseSession=rj.Mb)(r),t._OrtGetInputOutputCount=(r,i,a)=>(t._OrtGetInputOutputCount=rj.Nb)(r,i,a),t._OrtGetInputName=(r,i)=>(t._OrtGetInputName=rj.Ob)(r,i),t._OrtGetOutputName=(r,i)=>(t._OrtGetOutputName=rj.Pb)(r,i),t._OrtFree=r=>(t._OrtFree=rj.Qb)(r),t._OrtCreateTensor=(r,i,a,n,s,o)=>(t._OrtCreateTensor=rj.Rb)(r,i,a,n,s,o),t._OrtGetTensorData=(r,i,a,n,s)=>(t._OrtGetTensorData=rj.Sb)(r,i,a,n,s),t._OrtReleaseTensor=r=>(t._OrtReleaseTensor=rj.Tb)(r),t._OrtCreateRunOptions=(r,i,a,n)=>(t._OrtCreateRunOptions=rj.Ub)(r,i,a,n),t._OrtAddRunConfigEntry=(r,i,a)=>(t._OrtAddRunConfigEntry=rj.Vb)(r,i,a),t._OrtReleaseRunOptions=r=>(t._OrtReleaseRunOptions=rj.Wb)(r),t._OrtCreateBinding=r=>(t._OrtCreateBinding=rj.Xb)(r),t._OrtBindInput=(r,i,a)=>(t._OrtBindInput=rj.Yb)(r,i,a),t._OrtBindOutput=(r,i,a,n)=>(t._OrtBindOutput=rj.Zb)(r,i,a,n),t._OrtClearBoundOutputs=r=>(t._OrtClearBoundOutputs=rj._b)(r),t._OrtReleaseBinding=r=>(t._OrtReleaseBinding=rj.$b)(r),t._OrtRunWithBinding=(r,i,a,n,s)=>(t._OrtRunWithBinding=rj.ac)(r,i,a,n,s),t._OrtRun=(r,i,a,n,s,o,u,l)=>(t._OrtRun=rj.bc)(r,i,a,n,s,o,u,l),t._OrtEndProfiling=r=>(t._OrtEndProfiling=rj.cc)(r),t._JsepOutput=(r,i,a)=>(t._JsepOutput=rj.dc)(r,i,a),t._JsepGetNodeName=r=>(t._JsepGetNodeName=rj.ec)(r);var rX=()=>(rX=rj.fc)(),rY=t._free=r=>(rY=t._free=rj.gc)(r),rJ=t._malloc=r=>(rJ=t._malloc=rj.ic)(r),r0=(t,r,i,a,n,s)=>(r0=rj.kc)(t,r,i,a,n,s),r1=()=>(r1=rj.lc)(),r2=(t,r,i,a,n)=>(r2=rj.mc)(t,r,i,a,n),r3=t=>(r3=rj.nc)(t),r4=t=>(r4=rj.oc)(t),r6=(t,r)=>(r6=rj.pc)(t,r),r8=()=>(r8=rj.qc)(),r5=(t,r)=>(r5=rj.rc)(t,r),r9=t=>(r9=rj.sc)(t),r7=(t,r)=>(r7=rj.tc)(t,r),ie=t=>(ie=rj.uc)(t),it=t=>(it=rj.vc)(t),ir=()=>(ir=rj.wc)(),ii=t=>(ii=rj.xc)(t),ia=t=>(ia=rj.yc)(t),is=(t,r,i)=>(is=rj.zc)(t,r,i),io=t=>(io=rj.Ac)(t),iu=t.dynCall_iii=(r,i,a)=>(iu=t.dynCall_iii=rj.Bc)(r,i,a),il=t.dynCall_vi=(r,i)=>(il=t.dynCall_vi=rj.Cc)(r,i),id=t.dynCall_ii=(r,i)=>(id=t.dynCall_ii=rj.Dc)(r,i),ip=t.dynCall_vii=(r,i,a)=>(ip=t.dynCall_vii=rj.Ec)(r,i,a),ic=t.dynCall_iiii=(r,i,a,n)=>(ic=t.dynCall_iiii=rj.Fc)(r,i,a,n),ih=t.dynCall_viii=(r,i,a,n)=>(ih=t.dynCall_viii=rj.Gc)(r,i,a,n),im=t.dynCall_iiiii=(r,i,a,n,s)=>(im=t.dynCall_iiiii=rj.Hc)(r,i,a,n,s),ig=t.dynCall_viiii=(r,i,a,n,s)=>(ig=t.dynCall_viiii=rj.Ic)(r,i,a,n,s),iy=t.dynCall_viiiiii=(r,i,a,n,s,o,u)=>(iy=t.dynCall_viiiiii=rj.Jc)(r,i,a,n,s,o,u),i_=t.dynCall_viiiiiii=(r,i,a,n,s,o,u,l)=>(i_=t.dynCall_viiiiiii=rj.Kc)(r,i,a,n,s,o,u,l),ib=t.dynCall_ji=(r,i)=>(ib=t.dynCall_ji=rj.Lc)(r,i),i$=t.dynCall_v=r=>(i$=t.dynCall_v=rj.Mc)(r),iv=t.dynCall_viiiii=(r,i,a,n,s,o)=>(iv=t.dynCall_viiiii=rj.Nc)(r,i,a,n,s,o),iw=t.dynCall_i=r=>(iw=t.dynCall_i=rj.Oc)(r),ix=t.dynCall_fii=(r,i,a)=>(ix=t.dynCall_fii=rj.Pc)(r,i,a),iS=t.dynCall_viiiiiiii=(r,i,a,n,s,o,u,l,d)=>(iS=t.dynCall_viiiiiiii=rj.Qc)(r,i,a,n,s,o,u,l,d),ik=t.dynCall_viiiiiiiiii=(r,i,a,n,s,o,u,l,d,p,c)=>(ik=t.dynCall_viiiiiiiiii=rj.Rc)(r,i,a,n,s,o,u,l,d,p,c),iT=t.dynCall_jiii=(r,i,a,n)=>(iT=t.dynCall_jiii=rj.Sc)(r,i,a,n),iI=t.dynCall_dii=(r,i,a)=>(iI=t.dynCall_dii=rj.Tc)(r,i,a),iC=t.dynCall_viiiiiiiii=(r,i,a,n,s,o,u,l,d,p)=>(iC=t.dynCall_viiiiiiiii=rj.Uc)(r,i,a,n,s,o,u,l,d,p),iE=t.dynCall_viiiiiiiiiii=(r,i,a,n,s,o,u,l,d,p,c,h)=>(iE=t.dynCall_viiiiiiiiiii=rj.Vc)(r,i,a,n,s,o,u,l,d,p,c,h),iz=t.dynCall_iiiiii=(r,i,a,n,s,o)=>(iz=t.dynCall_iiiiii=rj.Wc)(r,i,a,n,s,o),iA=t.dynCall_iij=(r,i,a)=>(iA=t.dynCall_iij=rj.Xc)(r,i,a),iO=t.dynCall_iiiiiiiiii=(r,i,a,n,s,o,u,l,d,p)=>(iO=t.dynCall_iiiiiiiiii=rj.Yc)(r,i,a,n,s,o,u,l,d,p),iR=t.dynCall_iiiiiiiiiii=(r,i,a,n,s,o,u,l,d,p,c)=>(iR=t.dynCall_iiiiiiiiiii=rj.Zc)(r,i,a,n,s,o,u,l,d,p,c),iB=t.dynCall_vij=(r,i,a)=>(iB=t.dynCall_vij=rj._c)(r,i,a),iN=t.dynCall_iiif=(r,i,a,n)=>(iN=t.dynCall_iiif=rj.$c)(r,i,a,n),iD=t.dynCall_iiij=(r,i,a,n)=>(iD=t.dynCall_iiij=rj.ad)(r,i,a,n),iM=t.dynCall_fiii=(r,i,a,n)=>(iM=t.dynCall_fiii=rj.bd)(r,i,a,n),iP=t.dynCall_viiiiiiiiiiiii=(r,i,a,n,s,o,u,l,d,p,c,h,f,m)=>(iP=t.dynCall_viiiiiiiiiiiii=rj.cd)(r,i,a,n,s,o,u,l,d,p,c,h,f,m),iU=t.dynCall_vjiii=(r,i,a,n,s)=>(iU=t.dynCall_vjiii=rj.dd)(r,i,a,n,s),iW=t.dynCall_vif=(r,i,a)=>(iW=t.dynCall_vif=rj.ed)(r,i,a),iq=t.dynCall_iiiiiii=(r,i,a,n,s,o,u)=>(iq=t.dynCall_iiiiiii=rj.fd)(r,i,a,n,s,o,u),iL=t.dynCall_iiiij=(r,i,a,n,s)=>(iL=t.dynCall_iiiij=rj.gd)(r,i,a,n,s),iV=t.dynCall_iiiiiiii=(r,i,a,n,s,o,u,l)=>(iV=t.dynCall_iiiiiiii=rj.hd)(r,i,a,n,s,o,u,l),iG=t.dynCall_viiiiiiiiiiii=(r,i,a,n,s,o,u,l,d,p,c,h,f)=>(iG=t.dynCall_viiiiiiiiiiii=rj.id)(r,i,a,n,s,o,u,l,d,p,c,h,f),iH=t.dynCall_diii=(r,i,a,n)=>(iH=t.dynCall_diii=rj.jd)(r,i,a,n),iF=t.dynCall_jiiii=(r,i,a,n,s)=>(iF=t.dynCall_jiiii=rj.kd)(r,i,a,n,s),ij=t.dynCall_viiij=(r,i,a,n,s)=>(ij=t.dynCall_viiij=rj.ld)(r,i,a,n,s),iK=t.dynCall_fiiii=(r,i,a,n,s)=>(iK=t.dynCall_fiiii=rj.md)(r,i,a,n,s),iQ=t.dynCall_viiif=(r,i,a,n,s)=>(iQ=t.dynCall_viiif=rj.nd)(r,i,a,n,s),iZ=t.dynCall_diiii=(r,i,a,n,s)=>(iZ=t.dynCall_diiii=rj.od)(r,i,a,n,s),iX=t.dynCall_viiid=(r,i,a,n,s)=>(iX=t.dynCall_viiid=rj.pd)(r,i,a,n,s),iY=t.dynCall_iiiijii=(r,i,a,n,s,o,u)=>(iY=t.dynCall_iiiijii=rj.qd)(r,i,a,n,s,o,u),iJ=t.dynCall_iiiiiij=(r,i,a,n,s,o,u)=>(iJ=t.dynCall_iiiiiij=rj.rd)(r,i,a,n,s,o,u),i0=t=>(i0=rj.sd)(t),i1=()=>(i1=rj.td)(),i2=t=>(i2=rj.ud)(t),i3=()=>(i3=rj.vd)();function i4(t,r,i){var a=ir();try{ip(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function i6(t,r,i){var a=ir();try{return iu(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function i8(t,r){var i=ir();try{il(t,r)}catch(t){if(ie(i),t!==t+0)throw t;r5(1,0)}}function i5(t,r){var i=ir();try{return id(t,r)}catch(t){if(ie(i),t!==t+0)throw t;r5(1,0)}}function i9(t,r,i,a){var n=ir();try{return ic(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;r5(1,0)}}function i7(t,r,i,a,n){var s=ir();try{ig(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function ae(t,r,i,a,n){var s=ir();try{return im(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function at(t,r,i,a){var n=ir();try{ih(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;r5(1,0)}}function ar(t,r,i,a,n,s,o){var u=ir();try{return iq(t,r,i,a,n,s,o)}catch(t){if(ie(u),t!==t+0)throw t;r5(1,0)}}function ai(t){var r=ir();try{i$(t)}catch(t){if(ie(r),t!==t+0)throw t;r5(1,0)}}function aa(t,r,i){var a=ir();try{return iA(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function an(t,r,i,a,n,s){var o=ir();try{iv(t,r,i,a,n,s)}catch(t){if(ie(o),t!==t+0)throw t;r5(1,0)}}function as(t,r,i){var a=ir();try{iB(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function ao(t,r,i,a,n,s,o){var u=ir();try{iy(t,r,i,a,n,s,o)}catch(t){if(ie(u),t!==t+0)throw t;r5(1,0)}}function au(t,r,i,a,n,s,o,u){var l=ir();try{i_(t,r,i,a,n,s,o,u)}catch(t){if(ie(l),t!==t+0)throw t;r5(1,0)}}function al(t,r,i,a,n,s){var o=ir();try{return iz(t,r,i,a,n,s)}catch(t){if(ie(o),t!==t+0)throw t;r5(1,0)}}function ad(t,r,i,a,n,s,o,u){var l=ir();try{return iV(t,r,i,a,n,s,o,u)}catch(t){if(ie(l),t!==t+0)throw t;r5(1,0)}}function ap(t,r,i,a,n,s,o,u,l,d){var p=ir();try{iC(t,r,i,a,n,s,o,u,l,d)}catch(t){if(ie(p),t!==t+0)throw t;r5(1,0)}}function ac(t,r,i,a,n,s,o,u,l){var d=ir();try{iS(t,r,i,a,n,s,o,u,l)}catch(t){if(ie(d),t!==t+0)throw t;r5(1,0)}}function ah(t){var r=ir();try{return iw(t)}catch(t){if(ie(r),t!==t+0)throw t;r5(1,0)}}function af(t,r,i,a,n,s,o,u,l,d){var p=ir();try{return iO(t,r,i,a,n,s,o,u,l,d)}catch(t){if(ie(p),t!==t+0)throw t;r5(1,0)}}function am(t,r,i){var a=ir();try{return ix(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function ag(t,r,i,a){var n=ir();try{return iT(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;return r5(1,0),0n}}function ay(t,r,i){var a=ir();try{return iI(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function a_(t,r,i,a,n,s,o,u,l,d,p,c){var h=ir();try{iE(t,r,i,a,n,s,o,u,l,d,p,c)}catch(t){if(ie(h),t!==t+0)throw t;r5(1,0)}}function ab(t,r,i,a,n,s,o,u,l,d,p){var c=ir();try{ik(t,r,i,a,n,s,o,u,l,d,p)}catch(t){if(ie(c),t!==t+0)throw t;r5(1,0)}}function a$(t,r,i,a,n,s,o,u,l,d,p){var c=ir();try{return iR(t,r,i,a,n,s,o,u,l,d,p)}catch(t){if(ie(c),t!==t+0)throw t;r5(1,0)}}function av(t,r,i,a){var n=ir();try{return iN(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;r5(1,0)}}function aw(t,r,i,a){var n=ir();try{return iD(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;r5(1,0)}}function ax(t,r,i,a){var n=ir();try{return iM(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;r5(1,0)}}function aS(t,r,i,a,n,s,o,u,l,d,p,c,h,f){var m=ir();try{iP(t,r,i,a,n,s,o,u,l,d,p,c,h,f)}catch(t){if(ie(m),t!==t+0)throw t;r5(1,0)}}function ak(t,r,i,a,n){var s=ir();try{iU(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aT(t,r,i){var a=ir();try{iW(t,r,i)}catch(t){if(ie(a),t!==t+0)throw t;r5(1,0)}}function aI(t,r){var i=ir();try{return ib(t,r)}catch(t){if(ie(i),t!==t+0)throw t;return r5(1,0),0n}}function aC(t,r,i,a,n){var s=ir();try{return iL(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aE(t,r,i,a,n,s,o,u,l,d,p,c,h){var f=ir();try{iG(t,r,i,a,n,s,o,u,l,d,p,c,h)}catch(t){if(ie(f),t!==t+0)throw t;r5(1,0)}}function az(t,r,i,a){var n=ir();try{return iH(t,r,i,a)}catch(t){if(ie(n),t!==t+0)throw t;r5(1,0)}}function aA(t,r,i,a,n){var s=ir();try{return iF(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;return r5(1,0),0n}}function aO(t,r,i,a,n){var s=ir();try{ij(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aR(t,r,i,a,n){var s=ir();try{return iK(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aB(t,r,i,a,n){var s=ir();try{iQ(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aN(t,r,i,a,n){var s=ir();try{return iZ(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aD(t,r,i,a,n){var s=ir();try{iX(t,r,i,a,n)}catch(t){if(ie(s),t!==t+0)throw t;r5(1,0)}}function aM(t,r,i,a,n,s,o){var u=ir();try{return iY(t,r,i,a,n,s,o)}catch(t){if(ie(u),t!==t+0)throw t;r5(1,0)}}function aP(t,r,i,a,n,s,o){var u=ir();try{return iJ(t,r,i,a,n,s,o)}catch(t){if(ie(u),t!==t+0)throw t;r5(1,0)}}return t.stackSave=()=>ir(),t.stackRestore=t=>ie(t),t.stackAlloc=t=>it(t),t.setValue=function(t,r,i="i8"){switch(i.endsWith("*")&&(i="*"),i){case"i1":case"i8":D()[t>>>0]=r;break;case"i16":P()[t>>>1>>>0]=r;break;case"i32":W()[t>>>2>>>0]=r;break;case"i64":z[t>>>3]=BigInt(r);break;case"float":L()[t>>>2>>>0]=r;break;case"double":V()[t>>>3>>>0]=r;break;case"*":q()[t>>>2>>>0]=r;break;default:Y(`invalid type for setValue: ${i}`)}},t.getValue=function(t,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":case"i8":return D()[t>>>0];case"i16":return P()[t>>>1>>>0];case"i32":return W()[t>>>2>>>0];case"i64":return z[t>>>3];case"float":return L()[t>>>2>>>0];case"double":return V()[t>>>3>>>0];case"*":return q()[t>>>2>>>0];default:Y(`invalid type for getValue: ${r}`)}},t.UTF8ToString=eP,t.stringToUTF8=eL,t.lengthBytesUTF8=eq,function i(){if(0<Q)Z=i;else if(u)r(t),j();else{for(;0<en.length;)en.shift()(t);0<Q?Z=i:(t.calledRun=!0,B||(j(),r(t)))}}(),t.PTR_SIZE=4,n},globalThis.self?.name?.startsWith("em-pthread")&&em()}),nn=W(()=>{el(),ey=typeof location>"u"?void 0:location.origin,e_="file:///D:/AI%20FDE/Sujin-wardrobe1/node_modules/onnxruntime-web/dist/ort.webgpu.bundle.min.mjs".startsWith("file:")?new URL(new i.U(i(7050)).href,ey).href:"file:///D:/AI%20FDE/Sujin-wardrobe1/node_modules/onnxruntime-web/dist/ort.webgpu.bundle.min.mjs",eb=()=>{if(e_&&!e_.startsWith("blob:"))return e_.substring(0,e_.lastIndexOf("/")+1)},e$=(t,r)=>{try{let i=r??e_;return(i?new URL(t,i):new URL(t)).origin===ey}catch{return!1}},ev=async t=>{let r=await (await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},ew=async t=>(await import(t)).default,ex=(eh(),L(ed)).default,eS=async()=>{if(!e_)throw Error("Failed to load proxy worker: cannot determine the script source URL.");if(e$(e_))return[void 0,ex()];let t=await ev(e_);return[t,ex(t)]},ek=(na(),L(ef)).default,eT=async(t,r,i)=>{if(!t&&!r&&ek&&e_&&e$(e_))return[void 0,ek];{let a,n,s="ort-wasm-simd-threaded.jsep.mjs",o=t??((t,r)=>{let i=r??e_;try{return(i?new URL(t,i):new URL(t)).href}catch{return}})(s,r),u=i&&o&&!e$(o,r),l=u?await ev(o):o??(a=s,n=r,`${n??"./"}${a}`);return[u?l:void 0,await ew(l)]}}}),ns=W(()=>{nn(),eC=!1,eE=!1,ez=!1,eA=async t=>{if(eC)return Promise.resolve();if(eE)throw Error("multiple calls to 'initializeWebAssembly()' detected.");if(ez)throw Error("previous call to 'initializeWebAssembly()' failed.");eE=!0;let r=t.initTimeout,i=t.numThreads;if(!(()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}})())throw Error("WebAssembly SIMD is not supported in the current environment.");let a=(()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return"u">typeof MessageChannel&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}})();i>1&&!a&&("u">typeof self&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=i=1);let n=t.wasmPaths,s="string"==typeof n?n:void 0,o=n?.mjs,u=o?.href??o,l=n?.wasm,d=l?.href??l,p=t.wasmBinary,[c,h]=await eT(u,s,i>1),f=!1,m=[];if(r>0&&m.push(new Promise(t=>{setTimeout(()=>{f=!0,t()},r)})),m.push(new Promise((t,r)=>{let a={numThreads:i};if(p)a.wasmBinary=p;else if(d||s)a.locateFile=t=>d??s+t;else if(u&&0!==u.indexOf("blob:"))a.locateFile=t=>new URL(t,u).href;else if(c){let t=eb();t&&(a.locateFile=r=>t+r)}h(a).then(r=>{eE=!1,eC=!0,eI=r,t(),c&&URL.revokeObjectURL(c)},t=>{eE=!1,ez=!0,r(t)})})),await Promise.race(m),f)throw Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},eO=()=>{if(eC&&eI)return eI;throw Error("WebAssembly is not initialized yet.")}}),no=W(()=>{ns(),eR=(t,r)=>{let i=eO(),a=i.lengthBytesUTF8(t)+1,n=i._malloc(a);return i.stringToUTF8(t,n,a),r.push(n),n},eB=(t,r,i,a)=>{if("object"==typeof t&&null!==t){if(i.has(t))throw Error("Circular reference in options");i.add(t)}Object.entries(t).forEach(([t,n])=>{let s=r?r+t:t;if("object"==typeof n)eB(n,s+".",i,a);else if("string"==typeof n||"number"==typeof n)a(s,n.toString());else if("boolean"==typeof n)a(s,n?"1":"0");else throw Error(`Can't handle extra config type: ${typeof n}`)})},eN=t=>{let r=eO(),i=r.stackSave();try{let i=r.PTR_SIZE,a=r.stackAlloc(2*i);r._OrtGetLastError(a,a+i);let n=Number(r.getValue(a,4===i?"i32":"i64")),s=r.getValue(a+i,"*"),o=s?r.UTF8ToString(s):"";throw Error(`${t} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{r.stackRestore(i)}}}),nu=W(()=>{ns(),no(),eD=t=>{let r=eO(),i=0,a=[],n=t||{};try{if(t?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if("number"!=typeof t.logSeverityLevel||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${t.logSeverityLevel}`);if(t?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if("number"!=typeof t.logVerbosityLevel||!Number.isInteger(t.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);t?.terminate===void 0&&(n.terminate=!1);let s=0;return t?.tag!==void 0&&(s=eR(t.tag,a)),i=r._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),0===i&&eN("Can't create run options."),t?.extra!==void 0&&eB(t.extra,"",new WeakSet,(t,n)=>{let s=eR(t,a),o=eR(n,a);0!==r._OrtAddRunConfigEntry(i,s,o)&&eN(`Can't set a run config entry: ${t} - ${n}.`)}),[i,a]}catch(t){throw 0!==i&&r._OrtReleaseRunOptions(i),a.forEach(t=>r._free(t)),t}}}),nl=W(()=>{ns(),no(),eM=t=>{let r=eO(),i=0,a=[],n=t||{};(t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let r=t.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(t=>("string"==typeof t?t:t.name)==="webgpu")&&(t.enableMemPattern=!1)})(n);try{let t=(t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw Error(`unsupported graph optimization level: ${t}`)}})(n.graphOptimizationLevel??"all"),s=(t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw Error(`unsupported execution mode: ${t}`)}})(n.executionMode??"sequential"),o="string"==typeof n.logId?eR(n.logId,a):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw Error(`log serverity level is not valid: ${u}`);let l=n.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw Error(`log verbosity level is not valid: ${l}`);let d="string"==typeof n.optimizedModelFilePath?eR(n.optimizedModelFilePath,a):0;if(i=r._OrtCreateSessionOptions(t,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,u,l,d),0===i&&eN("Can't create session options."),n.executionProviders&&((t,r,i)=>{for(let a of r){let r="string"==typeof a?a:a.name;switch(r){case"webnn":if(r="WEBNN","string"!=typeof a){let r=a?.deviceType;if(r){let a=eR("deviceType",i),n=eR(r,i);0!==eO()._OrtAddSessionConfigEntry(t,a,n)&&eN(`Can't set a session config entry: 'deviceType' - ${r}.`)}}break;case"webgpu":if(r="JS","string"!=typeof a&&a?.preferredLayout){if("NCHW"!==a.preferredLayout&&"NHWC"!==a.preferredLayout)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let r=eR("preferredLayout",i),n=eR(a.preferredLayout,i);0!==eO()._OrtAddSessionConfigEntry(t,r,n)&&eN(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}break;case"wasm":case"cpu":continue;default:throw Error(`not supported execution provider: ${r}`)}let n=eR(r,i);0!==eO()._OrtAppendExecutionProvider(t,n)&&eN(`Can't append execution provider: ${r}.`)}})(i,n.executionProviders,a),void 0!==n.enableGraphCapture){if("boolean"!=typeof n.enableGraphCapture)throw Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let t=eR("enableGraphCapture",a),s=eR(n.enableGraphCapture.toString(),a);0!==r._OrtAddSessionConfigEntry(i,t,s)&&eN(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[t,s]of Object.entries(n.freeDimensionOverrides)){if("string"!=typeof t)throw Error(`free dimension override name must be a string: ${t}`);if("number"!=typeof s||!Number.isInteger(s)||s<0)throw Error(`free dimension override value must be a non-negative integer: ${s}`);let n=eR(t,a);0!==r._OrtAddFreeDimensionOverride(i,n,s)&&eN(`Can't set a free dimension override: ${t} - ${s}.`)}return void 0!==n.extra&&eB(n.extra,"",new WeakSet,(t,n)=>{let s=eR(t,a),o=eR(n,a);0!==r._OrtAddSessionConfigEntry(i,s,o)&&eN(`Can't set a session config entry: ${t} - ${n}.`)}),[i,a]}catch(t){throw 0!==i&&0!==r._OrtReleaseSessionOptions(i)&&eN("Can't release session options."),a.forEach(t=>r._free(t)),t}}}),nd=W(()=>{eP=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw Error(`unsupported data type: ${t}`)}},eU=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw Error(`unsupported data type: ${t}`)}},eW=(t,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],a="number"==typeof r?r:r.reduce((t,r)=>t*r,1);return i>0?Math.ceil(a*i):void 0},eq=t=>{switch(t){case"float16":return"u">typeof Float16Array&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":case"bool":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw Error(`unsupported type: ${t}`)}},eL=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw Error(`unsupported logging level: ${t}`)}},eV=t=>"float32"===t||"float16"===t||"int32"===t||"int64"===t||"uint32"===t||"uint8"===t||"bool"===t||"uint4"===t||"int4"===t,eG=t=>"float32"===t||"float16"===t||"int32"===t||"int64"===t||"uint32"===t||"uint64"===t||"int8"===t||"uint8"===t||"bool"===t||"uint4"===t||"int4"===t,eH=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw Error(`unsupported data location: ${t}`)}}}),np=W(()=>{el(),eF=async t=>{if("string"!=typeof t)return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t);{let r=await fetch(t);if(!r.ok)throw Error(`failed to load external data file: ${t}`);let i=r.headers.get("Content-Length"),a=i?parseInt(i,10):0;if(a<0x40000000)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw Error(`failed to load external data file: ${t}, no response body.`);let i=r.body.getReader(),n;try{n=new ArrayBuffer(a)}catch(t){if(t instanceof RangeError){let t=Math.ceil(a/65536);n=new WebAssembly.Memory({initial:t,maximum:t}).buffer}else throw t}let s=0;for(;;){let{done:t,value:r}=await i.read();if(t)break;let a=r.byteLength;new Uint8Array(n,s,a).set(r),s+=a}return new Uint8Array(n,0,a)}}}}),nc=W(()=>{nd(),ej=["V","I","W","E","F"],eZ=(t,r)=>{eK=t,eQ=r},eX=(...t)=>{eQ&&((t,r)=>{var i,a;let n=eL(t);n>=eL(eK)&&(i=n,a="function"==typeof r?r():r,console.log(`[${ej[i]},${new Date().toISOString()}]${a}`))})(...t)}}),nh=W(()=>{nd(),eY=(t,r)=>new(eq(r))(t)}),nf=W(()=>{}),nm=W(()=>{nc(),nf(),eJ=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[0xc00000,10],[0x1000000,10],[0x1900000,15],[0x2000000,22],[0x2a30000,2],[0x3840000,6],[0x4000000,6],[0x8000000,6],[0xa000000,6]]),e0=[],e1=t=>16*Math.ceil(Number(t)/16),e2=1,e3=()=>e2++,e4=async(t,r,i,a)=>{let n=e1(i),s=t.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=t.getCommandEncoder();t.endComputePass(),o.copyBufferToBuffer(r,0,s,0,n),t.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(!a)return new Uint8Array(u.slice(0,i));{let t=a();return t.set(new Uint8Array(u,0,i)),t}}finally{s.destroy()}},e6=class{constructor(t){for(let[r]of(this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map,eJ))e0.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(t,r){let i=r.buffer,a=r.byteOffset,n=r.byteLength,s=e1(n),o=this.storageCache.get(t);if(!o)throw Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==n)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC});new Uint8Array(u.getMappedRange()).set(new Uint8Array(i,a,n)),u.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(u,0,o.gpuData.buffer,0,s),this.backend.device.queue.submit([l.finish()]),u.destroy(),eX("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,r){let i=this.storageCache.get(t);if(!i)throw Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(r);if(!a)throw Error("destination gpu data for memcpy does not exist");if(i.originalSize!==a.originalSize)throw Error("inconsistent source and destination gpu data size");let n=e1(i.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(i.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(t,r,i){let a;if(i){if(a=i[0],t===i[1])return eX("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=e3();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:t},originalSize:r}),eX("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${a}, registered.`),a}unregisterExternalBuffer(t){void 0!==t&&(this.storageCache.delete(t),eX("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=(t=>{for(let r=0;r<e0.length;r++){let i=e0[r];if(t<=i)return i}return 16*Math.ceil(t/16)})(t),a,n=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let t=(n?this.freeBuffers:this.freeUniformBuffers).get(i);a=t&&t.length>0?t.pop():this.backend.device.createBuffer({size:i,usage:r})}else a=this.backend.device.createBuffer({size:i,usage:r});let o={id:e3(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(t)}),eX("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${o.id}`),o}get(t){return this.storageCache.get(t)?.gpuData}release(t){let r="bigint"==typeof t?Number(t):t,i=this.storageCache.get(r);if(!i){if(0===this.storageCache.size)return 0;throw Error("releasing data does not exist")}return eX("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(t,r){let i=this.storageCache.get(Number(t));if(!i)throw Error("data does not exist");await e4(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){if(0!==this.buffersPending.length)if("default"===this.backend.sessionStatus){for(let t of this.buffersPending){let r=eJ.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(t.size)||[];void 0===r||i.length>=r?t.destroy():i.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(t.size)||[];void 0===r||i.length>=r?t.destroy():i.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);for(let r of(t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t)),this.buffersPending))t.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let r=this.capturedPendingBuffers.get(t);r&&(r.forEach(t=>{t.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,0===this.sessionCount&&(eX("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.storageCache=new Map)}},e8=(...t)=>new e6(...t)}),ng=W(()=>{e5=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},e9=t=>new e5(t)}),ny=W(()=>{e7=class{static calcMatMulShape(t,r){return t[1]!==r[0]?void 0:[t[0],r[1]]}},te=class{static calcShape(t,r,i=!1){let a=t.length,n=r.length;if(0===a)return r;if(0===n)return t;let s=Math.max(t.length,r.length),o=Array(s);if(i){if(a<2||n<2)return;let i=e7.calcMatMulShape([t[a-2],t[a-1]],[r[n-2],r[n-1]]);if(void 0===i)return;[o[s-2],o[s-1]]=i}for(let u=i?3:1;u<=s;u++){let i=a-u<0?1:t[a-u],l=n-u<0?1:r[n-u];if(i!==l&&i>1&&l>1)return;let d=Math.max(i,l);if(i&&l)o[s-u]=Math.max(i,l);else{if(d>1)return;o[s-u]=0}}return o}static isValidBroadcast(t,r){let i=t.length,a=r.length;if(i>a)return!1;for(let n=1;n<=i;n++)if(1!==t[i-n]&&t[i-n]!==r[a-n])return!1;return!0}},tt=class t{static size(r){return t.getSizeFromDimensionRange(r,0,r.length)}static convertShape(t,r=4){let i=t.length;if(0===i)return[];let a=Array(i),n=i-1;for(;n>=0;){if(t[n]%r==0){a[n]=t[n]/r;break}if(r%t[n]!=0)throw Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(r,i){if(i<0||i>r.length)throw Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return t.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return t.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(0===r)return[];if(1===r)return[1];let i=Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(r=>t[r]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((t,a)=>t+r[a]+r[a+i])}static areEqual(t,r){return t.length===r.length&&t.every((t,i)=>t===r[i])}},tr=class t{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let t=0;t<r.length-2;t++)t>=i.length?i.push(r[t+2]):i[t]=r[t+2];for(let t=0;t<i.length;t++)if(t<a.length){if(a[t]<0)throw Error("strides should be greater than or equal to 1")}else a.push(1);for(let t=0;t<i.length;t++)if(t<n.length){if(n[t]<0)throw Error("dilations should be greater than or equal to 1")}else n.push(1);for(let t=0;t<2*i.length;t++)if(t<s.length){if(s[t]<0)throw Error("pad should be greater than or equal to 1")}else s.push(0);for(let t=0;t<i.length;t++){if(i[t]<=0)throw Error("kernel shapes need to be greater than 0");if(s[t]>=i[t]||s[t+i.length]>=i[t])throw Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,a,n,s,o,u){if(u){if(s.length!==2*(r.length-2))throw Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw Error("length of strides should be the length of data dimensions");if(n.length!==r.length-2)throw Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<r.length-2;l++)t.adjustPadAndReturnShape(r[l+(o?1:2)],i[l],a[l],n[l],s,l,l+r.length-2,u)}}static computePoolOutputShape(r,i,a,n,s,o,u){if(i.length<=0)throw Error("input shape must be of size greater than 0");let l=[i[0],i[1]];return t.computeShapeHelper(r,i,l,a,n,s,o,u),l}static computeConvOutputShape(r,i,a,n,s,o,u){if(r.length<=0||i.length<=0)throw Error("invalid input tensor dims or invalid filter tensor dims");let l=[r[0],i[0]];return t.computeShapeHelper(!1,r,l,a,n,s,o,u),l}static computeShapeHelper(r,i,a,n,s,o,u,l){if(r)for(let t=0;t<i.length-2;t++)a.push(1);else for(let r=0;r<i.length-2;r++)a.push(t.adjustPadAndReturnShape(i[r+2],n[r],s[r],o[r],u,r,r+i.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,o,u){let l=i*(a-1)+1;if(!u||"NOTSET"===u)return Math.floor((t+n[s]+n[o]-l)/r+1);switch(u){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(1!==i)throw Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let i=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor("SAME_LOWER"===u?(i+1)/2:i/2),n[o]=i-n[s],Math.floor((t+i-a)/r+1)}default:throw Error("Unsupported AutoPad type")}}},ti=class{static getShapeOfGemmResult(t,r,i,a,n){let s,o,u;if(2!==t.length||2!==i.length)throw Error("shape need to be of size 2");r?(s=t[1],o=t[0]):(s=t[0],o=t[1]);let l=-1;if(a?(u=i[0],l=1):(u=i[1],l=0),i[l]!==o)throw Error("dimension mismatch");if(s<=0||u<=0||o<=0)throw Error("invalid shape specified");if(n&&!te.isValidBroadcast(n,[s,u]))throw Error("gemm: invalid bias shape for broadcast");return[s,u,o]}},ta=-34028234663852886e22,tn=34028234663852886e22}),n_=W(()=>{nd(),ny(),ts=64,to=(t,r)=>{if(3===r)throw Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(4!==r)throw Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw Error(`Unknown data type: ${t}`)}},tu=(t,r=1)=>{let i=to(t,r);return"string"==typeof i?i:i[0]},tl=(t,r=1)=>{let i=to(t,r);return"string"==typeof i?i:i[1]},td=(...t)=>{let r=[];return t.forEach(t=>{0!==t.length&&r.push({type:12,data:t},{type:12,data:tt.computeStrides(t)})}),r},tp=t=>t%4==0?4:t%2==0?2:1,tc=(t="f32",r,i="0")=>r&&1!==r?`vec${r}<${t}>(${i})`:`${t}(${i})`,th=(t,r,i)=>"f32"===t?i:1===r?`f32(${i})`:`vec${r}<f32>(${i})`,tf=(t,r)=>4===r?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:2===r?`(${t}.x + ${t}.y)`:3===r?`(${t}.x + ${t}.y + ${t}.z)`:t,tm=(t,r,i,a)=>t.startsWith("uniforms.")&&i>4?"string"==typeof r?"f16"===a?`${t}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${t}[(${r}) / 4][(${r}) % 4]`:"f16"===a?`${t}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${t}[${Math.floor(r/4)}][${r%4}]`:i>1?`${t}[${r}]`:t,tg=(t,r,i,a,n)=>{let s="number"==typeof i,o=s?i:i.length,u=[...Array(o).keys()],l=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,d=to(r,n),p="string"==typeof d?d:d[1],c={indices:l,value:p,storage:"string"==typeof d?d:d[0],tensor:r},h=t=>"string"==typeof t?t:`${t}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=s?"uniforms.":"",g=`${m}${t}_shape`,y=`${m}${t}_strides`,_="";for(let t=0;t<o-1;t++)_+=`
    let dim${t} = current / ${tm(y,t,o)};
    let rest${t} = current % ${tm(y,t,o)};
    indices[${t}] = dim${t};
    current = rest${t};
    `;_+=`indices[${o-1}] = current;`;let b=o<2?"":`
  fn o2i_${t}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${_}
    return indices;
  }`,$=[];if(o>=2)for(let t=o-1;t>=0;t--)$.push(`${tm(y,t,o)} * (indices[${t}])`);let v=o<2?"":`
  fn i2o_${t}(indices: ${c.indices}) -> u32 {
    return ${$.join("+")};
  }`,w=(...t)=>0===o?"0u":`${c.indices}(${t.map(h).join(",")})`,x=(t,r)=>o<2?`${t}`:`${tm(t,r,o)}`,S={},k=(r,i)=>(()=>{if(c.storage===c.value)return`${t}[${r}]=${i};`;if("vec2<u32>"===c.storage&&"i32"===c.value)return`${t}[${r}]=vec2<u32>(u32(${i}), select(0u, 0xFFFFFFFFu, ${i} < 0));`;if("vec2<u32>"===c.storage&&"u32"===c.value)return`${t}[${r}]=vec2<u32>(u32(${i}), 0u);`;if("u32"===c.storage&&"vec4<bool>"===c.value)return`${t}[${r}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${i}));`;throw Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),T=r=>(()=>{if(c.storage===c.value)return`${t}[${r}]`;if("vec2<u32>"===c.storage&&"i32"===c.value)return`i32(${t}[${r}].x)`;if("vec2<u32>"===c.storage&&"u32"===c.value)return`u32(${t}[${r}].x)`;if("u32"===c.storage&&"vec4<bool>"===c.value)return`vec4<bool>(bool(${t}[${r}] & 0xFFu), bool(${t}[${r}] & 0xFF00u), bool(${t}[${r}] & 0xFF0000u), bool(${t}[${r}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),I=o<2?"":`
  fn get_${t}ByIndices(indices: ${c.indices}) -> ${p} {
    return ${T(`i2o_${t}(indices)`)};
  }`,C=o<2?"":(()=>{let r=u.map(t=>`d${t}: u32`).join(", "),i=u.map(t=>`d${t}`).join(", ");return`
  fn get_${t}(${r}) -> ${p} {
    return get_${t}ByIndices(${w(i)});
  }`})(),E=o<2?"":`
  fn set_${t}ByIndices(indices: ${c.indices}, value: ${p}) {
    ${k(`i2o_${t}(indices)`,"value")}
  }`,z=o<2?"":(()=>{let r=u.map(t=>`d${t}: u32`).join(", "),i=u.map(t=>`d${t}`).join(", ");return`
  fn set_${t}(${r}, value: ${p}) {
    set_${t}ByIndices(${w(i)}, value);
  }`})();return{impl:()=>{let t=[],r=!1;return f.offsetToIndices&&(t.push(b),r=!0),f.indicesToOffset&&(t.push(v),r=!0),f.broadcastedIndicesToOffset&&(Object.values(S).forEach(r=>t.push(r)),r=!0),f.set&&(t.push(z),r=!0),f.setByIndices&&(t.push(E),r=!0),f.get&&(t.push(C),r=!0),f.getByIndices&&(t.push(I),r=!0),!s&&r&&t.unshift(`const ${g} = ${c.indices}(${i.join(",")});`,`const ${y} = ${c.indices}(${tt.computeStrides(i).join(",")});`),t.join(`
`)},type:c,offsetToIndices:r=>(f.offsetToIndices=!0,o<2?r:`o2i_${t}(${r})`),indicesToOffset:r=>(f.indicesToOffset=!0,o<2?r:`i2o_${t}(${r})`),broadcastedIndicesToOffset:(r,i)=>{f.broadcastedIndicesToOffset=!0;let a=`${i.name}broadcastedIndicesTo${t}Offset`;if(a in S)return`${a}(${r})`;let n=[];for(let t=o-1;t>=0;t--){let r=i.indicesGet("outputIndices",t+i.rank-o);n.push(`${x(y,t)} * (${r} % ${x(g,t)})`)}return S[a]=`fn ${a}(outputIndices: ${i.type.indices}) -> u32 {
             return ${n.length>0?n.join("+"):"0u"};
           }`,`${a}(${r})`},indices:w,indicesGet:x,indicesSet:(t,r,i)=>o<2?`${t}=${i};`:`${tm(t,r,o)}=${i};`,set:(...r)=>{if(r.length!==o+1)throw Error(`indices length must be ${o}`);let i=r[o];if("string"!=typeof i)throw Error("value must be string");let a=r.slice(0,o).map(h).join(",");return 0===o?k("0u",i):1===o?k(a[0],i):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${t}(${a}, ${i})`)},setByOffset:k,setByIndices:(r,i)=>o<2?k(r,i):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${t}ByIndices(${r}, ${i});`),get:(...r)=>{if(r.length!==o)throw Error(`indices length must be ${o}`);let i=r.map(h).join(",");return 0===o?T("0u"):1===o?T(i[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${t}(${i})`)},getByOffset:T,getByIndices:r=>o<2?T(r):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${t}ByIndices(${r})`),usage:a,name:t,strides:y,shape:g,rank:o}},ty=(t,r,i,a=1)=>tg(t,r,i,"input",a),t_=(t,r,i,a=1)=>tg(t,r,i,"output",a),tb=(t,r,i)=>tg(t,r,i,"atomicOutput",1),t$=(t,r,i,a=1)=>tg(t,r,i,"internal",a),tv=class{constructor(t,r){this.normalizedDispatchGroup=t,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${"number"==typeof t?`${t}u`:t}) { return; }`}mainStart(t=ts){let r="number"==typeof t?t:t[0],i="number"==typeof t?1:t[1],a="number"==typeof t?1:t[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${r}, ${i}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*a>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${r}, ${i}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=1===this.normalizedDispatchGroup[1]&&1===this.normalizedDispatchGroup[2],s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*i*a}u + local_idx;`;return`@compute @workgroup_size(${r}, ${i}, ${a})
  fn main(${s}) {
    ${o}
  `}appendVariableUniforms(t){0!==t.rank&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,r){if("internal"===t.usage)throw Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let i="input"===t.usage?"read":"read_write",a="atomicOutput"===t.usage?"atomic<i32>":t.type.storage;return`@group(0) @binding(${r}) var<storage, ${i}> ${t.name}: array<${a}>;`}declareVariables(...t){return t.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if("internal"!==t.usage)throw Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(t,r,i=1){return this.uniforms.push({name:t,type:r,length:i}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(0===this.uniforms.length)return"";let t=[];for(let{name:r,type:i,length:a}of this.uniforms)if(a&&a>4)"f16"===i?t.push(`@align(16) ${r}:array<mat2x4<${i}>, ${Math.ceil(a/8)}>`):t.push(`${r}:array<vec4<${i}>, ${Math.ceil(a/4)}>`);else{let n=null==a||1===a?i:`vec${a}<${i}>`;t.push(`${r}:${n}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(0!==this.uniforms.length)return this.uniforms.map(t=>[[12,10,1,6][["u32","f16","f32","i32"].indexOf(t.type)],t.length??1])}},tw=(t,r)=>new tv(t,r)}),nb=W(()=>{nd(),ny(),ng(),n_(),tx=(t,r)=>0!==r.length?r:[...Array(t).keys()].reverse(),tS=(t,r)=>{let i=t.dataType,a=t.dims.length,n=tx(a,r),s=((t,r)=>tt.sortBasedOnPerm(t,tx(t.length,r)))(t.dims,n),o=t.dims,u=s;if(a<2||((t,r)=>{let i=0;for(let a=0;a<t.length;++a)if(1!==r[t[a]]){if(t[a]<i)return!1;i=t[a]}return!0})(n,t.dims))return{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let r=tt.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(r/64/4)},programUniforms:[{type:12,data:Math.ceil(r/4)}]}},getShaderSource:t=>{let r=ty("input",i,o,4),a=t_("output",i,u,4);return`
  ${t.registerUniform("output_size","u32").declareVariables(r,a)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`}};let{newShape:l,newPerm:d}=((t,r)=>{let i=[],a=[];for(let n=0;n<t.length;++n)1!==t[n]&&i.push(t[n]),1!==t[r[n]]&&a.push(r[n]);return{newShape:i,newPerm:a}})(t.dims,n),p=tt.areEqual(d,[2,3,1]),c=tt.areEqual(d,[3,1,2]);return 2===l.length||p||c?(u=[(o=p?[l[0],l[1]*l[2]]:c?[l[0]*l[1],l[2]]:l)[1],o[0]],{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let r=tt.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(u[1]/16),y:Math.ceil(u[0]/16)},programUniforms:[{type:12,data:r},...td(o,u)]}},getShaderSource:t=>{let r=ty("a",i,o.length),a=t_("output",i,u.length);return`
  ${t.registerUniform("output_size","u32").declareVariables(r,a)}
  var<workgroup> tile : array<array<${a.type.value}, 17>, 16>;
  ${t.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${r.getByIndices(`${r.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${a.setByIndices(`${a.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`}}):{name:"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let r=tt.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},...td(o,u)]}},getShaderSource:t=>{let r=ty("a",i,o.length),s=t_("output",i,u.length);return`
  ${t.registerUniform("output_size","u32").declareVariables(r,s)}

  ${((t,r,i,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let i=0;i<r;++i)n+=`a[${t[i]}]=i[${i}];`;return n+"return a;}"})(n,a,r,s)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${s.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${s.setByOffset("global_idx",r.getByIndices("aIndices"))}
  }`}}},tk=(t,r)=>{((t,r)=>{if(!t||1!==t.length)throw Error("Transpose requires 1 input.");if(0!==r.length&&r.length!==t[0].dims.length)throw Error(`perm size ${r.length} does not match input rank ${t[0].dims.length}`)})(t.inputs,r.perm),t.compute(tS(t.inputs[0],r.perm))},tT=t=>e9({perm:t.perm})}),n$=W(()=>{nd(),ny(),n_(),nv(),nb(),tI={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tC={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},tE={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},tz={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},tA=(t,r,i,a)=>{let n=1===t.inputs.length?i:tH(t.inputs,i),s=n.axes;0!==s.length||n.noopWithEmptyAxes||(s=t.inputs[0].dims.map((t,r)=>r));let o=tt.normalizeAxes(s,t.inputs[0].dims.length),u=o,l=t.inputs[0],d=((t,r)=>{let i=[];if(!((t,r)=>{for(let i=0;i<t.length;++i)if(t[t.length-i-1]!==r-1-i)return!1;return!0})(t,r)){for(let a=0;a<r;++a)-1===t.indexOf(a)&&i.push(a);t.forEach(t=>i.push(t))}return i})(u,t.inputs[0].dims.length);d.length>0&&(l=t.compute(tS(t.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=((t,r)=>{let i=[];for(let a=r-t;a<r;++a)i.push(a);return i})(u.length,l.dims.length));let[p,c]=((t,r)=>{let i=[],a=t.length;for(let n=0;n<a;n++)-1===r.indexOf(n)&&i.push(t[n]);return[i,r.map(r=>t[r])]})(l.dims,u),h=p;n.keepDims&&(h=((t,r)=>{let i=t.length+r.length,a=[],n=0;for(let s=0;s<i;s++)-1===r.indexOf(s)?a.push(t[n++]):a.push(1);return a})(p,o)),t.compute(((t,r,i,a,n,s,o)=>{let u=i[0].dims,l=tt.size(s),d=tt.size(o),p=ty("_A",i[0].dataType,u),c=t_("output",n,s),h=64;1===l&&(h=256);let f=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `;return{name:t,shaderCache:{hint:`${r};${h}`,inputDependencies:["type"]},getShaderSource:t=>`
        ${t.registerUniform("reduceSize","u32").declareVariables(p,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${t.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${tE[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${tI[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tC[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${"mean"===a?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${tz[a]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}})(r,n.cacheKey,[l],a,t.inputs[0].dataType,h,c),{inputs:[l]})},tO=(t,r)=>{tA(t,"ReduceMeanShared",r,"mean")},tR=(t,r)=>{tA(t,"ReduceL1Shared",r,"l1")},tB=(t,r)=>{tA(t,"ReduceL2Shared",r,"l2")},tN=(t,r)=>{tA(t,"ReduceLogSumExpShared",r,"logSumExp")},tD=(t,r)=>{tA(t,"ReduceMaxShared",r,"max")},tM=(t,r)=>{tA(t,"ReduceMinShared",r,"min")},tP=(t,r)=>{tA(t,"ReduceProdShared",r,"prod")},tU=(t,r)=>{tA(t,"ReduceSumShared",r,"sum")},tW=(t,r)=>{tA(t,"ReduceSumSquareShared",r,"sumSquare")},tq=(t,r)=>{tA(t,"ReduceLogSumShared",r,"logSum")}}),nv=W(()=>{nd(),ny(),ng(),n_(),n$(),tL=t=>{if(!t||0===t.length||t.length>2)throw Error("Reduce op requires 1 or 2 inputs.");if(2===t.length&&1!==t[1].dims.length)throw Error("Invalid axes input dims.")},tV=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],tG=(t,r,i,a,n,s,o=!1,u=!1)=>{let l=[],d=i[0].dims,p=d.length,c=tt.normalizeAxes(n,p),h=!u&&0===c.length;d.forEach((t,r)=>{h||c.indexOf(r)>=0?o&&l.push(1):l.push(t)});let f=l.length,m=tt.size(l);return{name:t,shaderCache:r,getShaderSource:t=>{let r=[],n=ty("_A",i[0].dataType,p),u=t_("output",s,f),l=a(n,u,c),m=l[2];for(let t=0,i=0;t<p;t++)h||c.indexOf(t)>=0?(o&&i++,m=`for(var j${t}: u32 = 0; j${t} < ${d[t]}; j${t}++) {
                  ${l[2].includes("last_index")?`let last_index = j${t};`:""}
                  ${n.indicesSet("input_indices",t,`j${t}`)}
                  ${m}
                }`):(r.push(`${n.indicesSet("input_indices",t,u.indicesGet("output_indices",i))};`),i++);return`

        ${t.registerUniform("output_size","u32").declareVariables(n,u)}

        ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${n.type.indices};
          let output_indices = ${u.offsetToIndices("global_idx")};

          ${r.join(`
`)}
          ${l[0]}       // init ops for reduce max/min
          ${l[1]}
          ${m}
          ${l[3]}
          ${4===l.length?u.setByOffset("global_idx","value"):l.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...td(d,l)]})}},tH=(t,r)=>{let i=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(t=>i.push(Number(t))),e9({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},tF=(t,r,i,a)=>{let n=t.inputs,s=1===n.length?i:tH(n,i);t.compute(tG(r,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&0===s.axes.length?tV:a,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},tj=(t,r,i)=>{if(0===r.length)return i;let a=1,n=1;for(let i=0;i<r.length;i++)-1===r.indexOf(i)?a*=t[i]:n*=t[i];return n<32&&a>1024},tK=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceMean",r,(r,i,a)=>{let n=1;for(let i=0;i<r.rank;i++)(a.indexOf(i)>=0||0===a.length)&&(n*=t.inputs[0].dims[i]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})})(t,r):tO(t,r)},tQ=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceL1",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${t.getByIndices("input_indices")});`,""])})(t,r):tR(t,r)},tZ=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceL2",r,(t,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])})(t,r):tB(t,r)},tX=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceLogSumExp",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${t.getByIndices("input_indices")});`,"value = log(value);"])})(t,r):tN(t,r)},tY=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceMax",r,(t,r,i)=>{let a=[];for(let r=0;r<t.rank;r++)(i.indexOf(r)>=0||0===i.length)&&a.push(t.indicesSet("input_indices",r,0));return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = max(value, ${t.getByIndices("input_indices")});`,""]})})(t,r):tD(t,r)},tJ=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceMin",r,(t,r,i)=>{let a=[];for(let r=0;r<t.rank;r++)(i.indexOf(r)>=0||0===i.length)&&a.push(`input_indices[${r}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = min(value, ${t.getByIndices("input_indices")});`,""]})})(t,r):tM(t,r)},t0=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceProd",r,(t,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${t.getByIndices("input_indices")};`,""])})(t,r):tP(t,r)},t1=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceSum",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,""])})(t,r):tU(t,r)},t2=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceSumSquare",r,(t,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += t * t;`,""])})(t,r):tW(t,r)},t3=(t,r)=>{tj(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?((t,r)=>{tL(t.inputs),tF(t,"ReduceLogSum",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,"value = log(value);"])})(t,r):tq(t,r)}}),nw=W(()=>{nd(),ng(),nv(),t4=t=>{if(!t||0===t.length||t.length>2)throw Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(1!==t[0].dataType)throw Error("Invalid input type.")},t6=(t,r)=>{t4(t.inputs),t.compute(tG("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],(t,i,a)=>{let n=[];for(let r=0;r<t.rank;r++)(a.indexOf(r)>=0||0===a.length)&&n.push(`input_indices[${r}] = 0;`);return[`${n.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]},[r.axis],7,r.keepDims),{inputs:[0]})},t8=(t,r)=>{t4(t.inputs),t.compute(tG("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],(t,i,a)=>{let n=[];for(let r=0;r<t.rank;r++)(a.indexOf(r)>=0||0===a.length)&&n.push(`input_indices[${r}] = 0;`);return[`${n.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]},[r.axis],7,r.keepDims),{inputs:[0]})},t5=t=>e9(t)}),nx=W(()=>{nd(),ny(),nf(),n_(),t9=(t,r,i)=>r&&t?`
      let total_sequence_length_input = u32(${r.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,t7=(t,r,i,a,n,s,o,u,l,d,p,c)=>{let h=Math.min(t.outputCount,1+ +!!o+ +!!u),f=h>1?d.pastSequenceLength:0,m=f+d.kvSequenceLength,g=l&&tt.size(l.dims)>0?l:void 0,y=[r,i];h>1&&o&&tt.size(o.dims)>0&&y.push(o),g&&y.push(g),p&&y.push(p),c&&y.push(c);let _=t.compute(((t,r,i,a,n,s,o,u,l)=>{let d=o+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,d],c=t>1&&a,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,f=c?[s.batchSize,h,d,s.headSize]:void 0,m=s.nReps?s.nReps:1,g=0===s.scale?1/Math.sqrt(s.headSize):s.scale,y=tp(s.headSize),_=s.headSize/y,b={x:Math.ceil(d/12),y:Math.ceil(s.sequenceLength/12),z:s.batchSize*s.numHeads},$=[{type:12,data:s.sequenceLength},{type:12,data:_},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:g},{type:12,data:o},{type:12,data:s.kvSequenceLength},{type:12,data:m}],v=c&&a&&tt.size(a.dims)>0,w=["type","type"];v&&w.push("type"),n&&w.push("type"),u&&w.push("type"),l&&w.push("type");let x=[{dims:p,dataType:r.dataType,gpuDataType:0}];return c&&x.push({dims:f,dataType:r.dataType,gpuDataType:0}),{name:"AttentionProbs",shaderCache:{hint:`${y};${void 0!==n};${void 0!==a};${t}`,inputDependencies:w},getRunData:()=>({outputs:x,dispatchGroup:b,programUniforms:$}),getShaderSource:t=>{let s=ty("q",r.dataType,r.dims,y),o=[s,ty("key",i.dataType,i.dims,y)];if(v){let t=ty("past_key",a.dataType,a.dims,y);o.push(t)}n&&o.push(ty("attention_bias",n.dataType,n.dims));let d=u?ty("seq_lens",u.dataType,u.dims):void 0;d&&o.push(d);let h=l?ty("total_sequence_length_input",l.dataType,l.dims):void 0;h&&o.push(h);let g=t_("output",r.dataType,p),_=[g];c&&_.push(t_("present_key",r.dataType,f,y));let b=tl(1,y);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${s.type.storage}, 144>;
  var<workgroup> tileK: array<${s.type.storage}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}]).declareVariables(...o,..._)}
  ${t.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${1===m?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${1===m?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${t9(d,h,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${v&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${v&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${b}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(y){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw Error(`Unsupported components: ${y}`)}})()};
        output[outputIdx] = ${g.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`}}})(h,r,i,o,g,d,f,p,c),{inputs:y,outputs:h>1?[-1,1]:[-1]})[0];t.compute(((t,r,i,a,n,s,o,u)=>{let l=tp(o?1:s),d=64,p=s/l;p<64&&(d=32);let c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:p},{type:12,data:Math.ceil(s/l/d)}],h=tu(t.dataType,l),f=tl(1,l),m=["type"];return o&&m.push("type"),u&&m.push("type"),{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${h};${l}`,inputDependencies:m},getShaderSource:r=>{let i=t_("x",t.dataType,t.dims,l),a=[i],n=o?ty("seq_lens",o.dataType,o.dims):void 0;n&&a.push(n);let s=u?ty("total_sequence_length_input",u.dataType,u.dims):void 0;s&&a.push(s);let p=tl(t.dataType);return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${r.registerUniforms([{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}]).declareVariables(...a)}
  ${r.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${t9(n,s,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${f}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${i.type.value}(${p}(1.0) / ${p}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${i.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${i.type.value}(${p}(0));
        }`:""};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/d),y:n,z:r*i},programUniforms:c})}})(_,d.batchSize,d.numHeads,f,d.sequenceLength,m,p,c),{inputs:p&&c?[_,p,c]:[_],outputs:[]});let b=[_,a];h>1&&u&&tt.size(u.dims)>0&&b.push(u),p&&b.push(p),c&&b.push(c),t.compute(((t,r,i,a,n,s,o,u)=>{let l=s+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,c=t>1&&a,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,f=c?[n.batchSize,h,l,n.headSize]:void 0,m=[n.batchSize,n.sequenceLength,p],g={x:Math.ceil(n.vHeadSize/12),y:Math.ceil(n.sequenceLength/12),z:n.batchSize*n.numHeads},y=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:d}],_=c&&a&&tt.size(a.dims)>0,b=["type","type"];_&&b.push("type"),o&&b.push("type"),u&&b.push("type");let $=[{dims:m,dataType:r.dataType,gpuDataType:0}];return c&&$.push({dims:f,dataType:r.dataType,gpuDataType:0}),{name:"AttentionScore",shaderCache:{hint:`${void 0!==a};${t}`,inputDependencies:b},getRunData:()=>({outputs:$,dispatchGroup:g,programUniforms:y}),getShaderSource:t=>{let n=ty("probs",r.dataType,r.dims),s=[n,ty("v",i.dataType,i.dims)];_&&s.push(ty("past_value",a.dataType,a.dims));let l=o?ty("seq_lens",o.dataType,o.dims):void 0;o&&s.push(l);let p=u?ty("total_sequence_length_input",u.dataType,u.dims):void 0;u&&s.push(p);let h=[t_("output",r.dataType,m)];return c&&h.push(t_("present_value",r.dataType,f)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${n.type.value}, 144>;
  var<workgroup> tileV: array<${n.type.value}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}]).declareVariables(...s,...h)}
  ${t.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${1===d?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${1===d?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${t9(l,p,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${n.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}})(h,_,a,u,d,f,p,c),{inputs:b,outputs:h>1?[0,2]:[0]})},re=(t,r)=>{let i=((t,r)=>{let i=t[0],a=t[1],n=t[2],s=t[3],o=t[4],u=t[5];if(o&&u)throw Error("Attention cannot have both past and attention_bias");if(3!==i.dims.length)throw Error('Input "input" must have 3 dimensions');let l=i.dims[0],d=i.dims[1],p=i.dims[2];if(1!==n.dims.length)throw Error('Input "bias" is expected to have 1 dimensions');if(2!==a.dims.length)throw Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==p)throw Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=n.dims[0]/3,h=c,f=h;if(r.qkvHiddenSizes.length>0){if(3!==r.qkvHiddenSizes.length)throw Error("qkv_hidden_sizes attribute should have 3 elements");for(let t of r.qkvHiddenSizes)if(t%r.numHeads!=0)throw Error("qkv_hidden_sizes should be divisible by num_heads");c=r.qkvHiddenSizes[0],h=r.qkvHiddenSizes[1],f=r.qkvHiddenSizes[2]}if(c!==h)throw Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==c+h+f)throw Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let m=0;if(o){if(h!==f)throw Error('Input "past" expect k_hidden_size == v_hidden_size');if(5!==o.dims.length)throw Error('Input "past" must have 5 dimensions');if(2!==o.dims[0])throw Error('Input "past" first dimension must be 2');if(o.dims[1]!==l)throw Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==r.numHeads)throw Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/r.numHeads)throw Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(m=o.dims[3])}let g=d+m;if(s)throw Error("Mask not supported");if(o)throw Error("past is not supported");if(u){if(4!==u.dims.length)throw Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==r.numHeads||u.dims[2]!==d||u.dims[3]!==g)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:d,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:p,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/r.numHeads),vHeadSize:Math.floor(f/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:0,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}})(t.inputs,r),[a,n,s]=((t,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],a=r.sequenceLength,n=r.inputHiddenSize,s=r.headSize,o={x:Math.ceil(r.headSize/12),y:Math.ceil(r.sequenceLength/12),z:r.batchSize*r.numHeads},u=[t.inputs[0],t.inputs[1],t.inputs[2]],l=[{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}];return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:t=>{let r=t_("output_q",u[0].dataType,i),a=t_("output_k",u[0].dataType,i),n=t_("output_v",u[0].dataType,i),s=ty("input",u[0].dataType,u[0].dims),o=ty("weight",u[1].dataType,u[1].dims),l=ty("bias",u[2].dataType,u[2].dims),d=s.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${d}, 144>;
  var<workgroup> tileWeightQ: array<${d}, 144>;
  var<workgroup> tileWeightK: array<${d}, 144>;
  var<workgroup> tileWeightV: array<${d}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}]).declareVariables(s,o,l,r,a,n)}
  ${t.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${d}(0);
    var valueK = ${d}(0);
    var valueV = ${d}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:u,outputs:[-1,-1,-1]})})(t,i);return t7(t,a,n,s,t.inputs[4],void 0,void 0,void 0,t.inputs[5],i)}}),nS=W(()=>{eu(),nd(),ny(),ng(),n_(),rt=(t,r)=>{let i,{inputs:a,outputCount:n}=t,s=(i={...r,outputCount:n},e9(i));if(c.webgpu.validateInputContent&&((t,r)=>{if(!t||5!==t.length)throw Error("BatchNormalization requires 5 inputs");let i=(t,r,i)=>{let a=r.length;if(a!==t.length)throw Error(`${i}: num dimensions != ${a}`);r.forEach((r,a)=>{if(r!==t[a])throw Error(`${i}: dim[${a}] do not match`)})};if(t[0].dims.length>1){let a="NHWC"===r.format?r.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,r.spatial?2:void 0);i(t[1].dims,a,"Invalid input scale"),i(t[2].dims,a,"Invalid input B"),i(t[3].dims,a,"Invalid input mean"),i(t[4].dims,a,"Invalid input var")}else i(t[1].dims,[1],"Invalid input scale"),i(t[2].dims,[1],"Invalid input B"),i(t[3].dims,[1],"Invalid input mean"),i(t[4].dims,[1],"Invalid input var")})(a,s),r.trainingMode)throw Error("BatchNormalization trainingMode is not supported yet.");t.compute(((t,r)=>{let{epsilon:i,spatial:a,format:n}=r,s=t[0].dims,o=a?tp(s[s.length-1]):1,u="NHWC"===n&&s.length>1?o:1,l=tt.size(s)/o,d=a?s.length:s,p=ty("x",t[0].dataType,t[0].dims,o),c=ty("scale",t[1].dataType,t[1].dims,u),h=ty("bias",t[2].dataType,t[2].dims,u),f=ty("inputMean",t[3].dataType,t[3].dims,u),m=ty("inputVar",t[4].dataType,t[4].dims,u),g=t_("y",t[0].dataType,d,o);return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${a}_${o}`,inputDependencies:a?["rank","type","type","type","type"]:void 0},getShaderSource:t=>`
  const epsilon = ${i};
  ${t.registerUniform("outputSize","u32").declareVariables(p,c,h,f,m,g)}
  ${t.mainStart()}
  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${(()=>{let t="";if(a)t=`let cOffset = ${1===s.length?"0u":"NHWC"===n?`outputIndices[${s.length-1}] / ${o}`:"outputIndices[1]"};`;else if("NCHW"===n)t=`
            ${g.indicesSet("outputIndices","0","0")}
            let cOffset = ${g.indicesToOffset("outputIndices")};`;else{t=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let r=1;r<c.rank;r++)t+=`cIndices[${r}] = outputIndices[${r}];`;t+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return t})()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${m.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset("global_idx","value")}
  }`,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:a?[{type:12,data:l},...td(s)]:[{type:12,data:l}]})}})(a,s))}}),nk=W(()=>{ny(),n_(),rr=t=>{(t=>{if(3!==t[0].dims.length)throw Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw Error("number of channels should be 320, 640 or 1280");if(1!==t[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw Error("last dimension of input and bias are not the same")})(t.inputs),t.compute((t=>{let r=t[0].dims,i=t[0].dims[2],a=tt.size(r)/4,n=t[0].dataType,s=ty("input",n,r,4),o=ty("bias",n,[i],4),u=ty("residual",n,r,4),l=t_("output",n,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const channels = ${i}u / 4;
  ${t.declareVariables(s,o,u,l)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${s.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}})(t.inputs))}}),nT=W(()=>{nd(),ny(),ng(),n_(),ri=(t,r,i,a,n,s=t.dataType,o,u)=>{let l=[{type:12,data:Math.ceil(tt.size(t.dims)/4)}];return o&&l.push(...o),{name:r,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:r=>((t,r,i,a,n,s,o)=>{let u=Math.ceil(r/4),l="";l="string"==typeof n?`${n}(a)`:n("a");let d=ty("inputData",i,[u],4),p=t_("outputData",a,[u],4),c=[{name:"vec_size",type:"u32"}];return o&&c.push(...o),`
      ${t.registerUniforms(c).declareVariables(d,p)}

  ${s??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`})(r,tt.size(t.dims),t.dataType,s,i,a,u),getRunData:r=>({outputs:[{dims:t.dims,dataType:s}],dispatchGroup:{x:Math.ceil(tt.size(r[0].dims)/64/4)},programUniforms:l})}},ra=t=>{t.compute(ri(t.inputs[0],"Abs","abs"))},rn=t=>{t.compute(ri(t.inputs[0],"Acos","acos"))},rs=t=>{t.compute(ri(t.inputs[0],"Acosh","acosh"))},ro=t=>{t.compute(ri(t.inputs[0],"Asin","asin"))},ru=t=>{t.compute(ri(t.inputs[0],"Asinh","asinh"))},rl=t=>{t.compute(ri(t.inputs[0],"Atan","atan"))},rd=t=>{t.compute(ri(t.inputs[0],"Atanh","atanh"))},rp=t=>e9(t),rc=(t,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}t.compute(ri(t.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},rh=(t,r)=>{let i=r||(t=>{let r,i,a=t.length>=2&&0!==t[1].data,n=t.length>=3&&0!==t[2].data;switch(t[0].dataType){case 1:r=a?t[1].getFloat32Array()[0]:-34028234663852886e22,i=n?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=a?t[1].getUint16Array()[0]:64511,i=n?t[2].getUint16Array()[0]:31743;break;default:throw Error("Unsupport data type")}return e9({min:r,max:i})})(t.inputs),a=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"Clip",t=>`clamp(${t}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:t.inputs[0].dataType,data:i.min},{type:t.inputs[0].dataType,data:i.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},rf=t=>{t.compute(ri(t.inputs[0],"Ceil","ceil"))},rm=t=>{t.compute(ri(t.inputs[0],"Cos","cos"))},rg=t=>{t.compute(ri(t.inputs[0],"Cosh","cosh"))},ry=t=>e9(t),r_=(t,r)=>{let i=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"Elu",t=>`elu_vf32(${t})`,`
  const elu_alpha_ = ${i}(${r.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,r.cacheKey))},rb=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,r$=t=>{let r=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"Erf",t=>`erf_vf32(${t})`,rb(r)))},rv=t=>{t.compute(ri(t.inputs[0],"Exp","exp"))},rw=t=>{t.compute(ri(t.inputs[0],"Floor","floor"))},rx=t=>{let r=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"Gelu",t=>`0.5 * ${t} * (1.0 + erf_vf32(${t} * 0.7071067811865475))`,rb(r)))},rS=(t,r)=>{let i=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"LeakyRelu",t=>`select(leaky_relu_alpha_ * ${t}, ${t}, ${t} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},rk=t=>{t.compute(ri(t.inputs[0],"Not",t=>`!${t}`))},rT=t=>{t.compute(ri(t.inputs[0],"Neg",t=>`-${t}`))},rI=t=>{t.compute(ri(t.inputs[0],"Reciprocal",t=>`1.0/${t}`))},rC=t=>{let r=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"Relu",t=>`select(vec4<${r}>(0.0), ${t}, ${t} > vec4<${r}>(0.0))`))},rE=t=>{t.compute(ri(t.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},rz=t=>e9(t),rA=(t,r)=>{let i=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"HardSigmoid",t=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${t} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},rO=t=>{t.compute(ri(t.inputs[0],"Sin","sin"))},rR=t=>{t.compute(ri(t.inputs[0],"Sinh","sinh"))},rB=t=>{t.compute(ri(t.inputs[0],"Sqrt","sqrt"))},rN=t=>{t.compute(ri(t.inputs[0],"Tan","tan"))},rD=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,rM=t=>{t.compute(ri(t.inputs[0],"Tanh",rD))},rP=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${rD("v")};
}
`,rU=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,rW=t=>{let r=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"FastGelu",rU,rP(r),void 0,t.inputs[0].dataType))},rq=(t,r)=>{let i=tl(t.inputs[0].dataType);return t.compute(ri(t.inputs[0],"ThresholdedRelu",t=>`select(vec4<${i}>(0.0), ${t}, ${t} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},rL=t=>{t.compute(ri(t.inputs[0],"Log","log"))},rV=t=>`quick_gelu_impl(${t})`,rG=(t,r)=>{let i=tl(t.inputs[0].dataType);t.compute(ri(t.inputs[0],"QuickGelu",rV,((t,r)=>`
const alpha = vec4<${t}>(${r});
const one = ${t}(1.0);
const zero = ${t}(0.0);

fn quick_gelu_impl(x: vec4<${t}>) -> vec4<${t}> {
  let v = x *alpha;
  var x1 : vec4<${t}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`)(i,r.alpha),r.cacheKey,t.inputs[0].dataType))}}),nI=W(()=>{ny(),n_(),nT(),rH=t=>{(t=>{if(3!==t[0].dims.length)throw Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw Error("hidden state should be 2560, 5120 or 10240");if(1!==t[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw Error("last dimension of input and bias are not the same")})(t.inputs),t.compute((t=>{let r=t[0].dims.slice();r[2]=r[2]/2;let i=ty("input",t[0].dataType,t[0].dims,4),a=ty("bias",t[0].dataType,[t[0].dims[2]],4),n=t_("output",t[0].dataType,r,4),s=tt.size(r)/4,o=tu(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:r=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${r.declareVariables(i,a,n)}

  ${rb(o)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}})(t.inputs))}}),nC=W(()=>{nd(),ny(),n_(),rF=(t,r,i,a,n,s)=>{t.compute(((t,r,i,a,n,s,o=i.dataType)=>{let u=i.dims.map(t=>Number(t)??1),l=a.dims.map(t=>Number(t)??1),d=!tt.areEqual(u,l),p=u,c=tt.size(u),h=!1,f=!1,m=[d];if(d){let t=te.calcShape(u,l,!1);if(!t)throw Error("Can't perform binary op on the given tensors");p=t.slice(),c=tt.size(p);let r=1===tt.size(u),i=1===tt.size(l),a=u.length>0&&u[u.length-1]%4==0,n=l.length>0&&l[l.length-1]%4==0;m.push(r),m.push(i),m.push(a),m.push(n);let s=1;for(let t=1;t<p.length;t++){let r=u[u.length-t];if(r===l[l.length-t])s*=r;else break}s%4==0?(f=!0,h=!0):(r||i||a||n)&&(h=!0)}else h=!0;return m.push(h),{name:t,shaderCache:{hint:r+m.map(t=>t.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:t=>((t,r,i,a,n,s,o,u,l,d,p,c)=>{let h,f;"string"==typeof u?h=f=(t,r)=>`${u}((${t}),(${r}))`:"function"==typeof u?h=f=u:(h=u.scalar,f=u.vector);let m=t_("outputData",p,a.length,4),g=ty("aData",l,r.length,4),y=ty("bData",d,i.length,4),_;if(n)if(s){let t=1===tt.size(r),a=1===tt.size(i),n=r.length>0&&r[r.length-1]%4==0,s=i.length>0&&i[i.length-1]%4==0;_=t||a?m.setByOffset("global_idx",f(t?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),a?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"))):`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||n?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||s?y.getByOffset("offsetB / 4u"):`${y.type.value}(${y.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",f(g.getByOffset("global_idx"),y.getByOffset("global_idx")));else{if(!s)throw Error("no necessary to use scalar implementation for element-wise binary op implementation.");let t=(t,r,i="")=>{let a=`aData[indexA${r}][componentA${r}]`,n=`bData[indexB${r}][componentB${r}]`;return`
            let outputIndices${r} = ${m.offsetToIndices(`global_idx * 4u + ${r}u`)};
            let offsetA${r} = ${g.broadcastedIndicesToOffset(`outputIndices${r}`,m)};
            let offsetB${r} = ${y.broadcastedIndicesToOffset(`outputIndices${r}`,m)};
            let indexA${r} = offsetA${r} / 4u;
            let indexB${r} = offsetB${r} / 4u;
            let componentA${r} = offsetA${r} % 4u;
            let componentB${r} = offsetB${r} % 4u;
            ${t}[${r}] = ${i}(${h(a,n)});
          `};_=9===p?`
            var data = vec4<u32>(0);
            ${t("data",0,"u32")}
            ${t("data",1,"u32")}
            ${t("data",2,"u32")}
            ${t("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${t("outputData[global_idx]",0)}
            ${t("outputData[global_idx]",1)}
            ${t("outputData[global_idx]",2)}
            ${t("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(g,y,m)}

        ${c??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`})(t,u,l,p,h,d,f,n,i.dataType,a.dataType,o,s),getRunData:()=>({outputs:[{dims:p,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(tt.size(p)/4)},...td(u,l,p)]})}})(r,n??"",t.inputs[0],t.inputs[1],i,a,s))},rj=t=>{rF(t,"Add",(t,r)=>`${t}+${r}`)},rK=t=>{rF(t,"Div",(t,r)=>`${t}/${r}`)},rQ=t=>{rF(t,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},rZ=t=>{rF(t,"Mul",(t,r)=>`${t}*${r}`)},rX=t=>{let r=ty("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;rF(t,"Pow",{scalar:(t,r)=>`pow_custom(${t},${r})`,vector:(t,r)=>`pow_vector_custom(${t},${r})`},`
    fn pow_custom(a : ${r}, b : ${r}) -> ${r} {
      if (b == ${r}(0.0)) {
        return ${r}(1.0);
      } else if (a < ${r}(0.0) && f32(b) != floor(f32(b))) {
        return ${r}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${r}(1.0), round(f32(abs(b) % ${r}(2.0))) != 1.0) * ${r}(${"i32"===r?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${r}>, b : vec4<${r}>) -> vec4<${r}> {
      // TODO: implement vectorized pow
      return vec4<${r}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},rY=t=>{rF(t,"Sub",(t,r)=>`${t}-${r}`)},rJ=t=>{rF(t,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},r0=t=>{rF(t,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},r1=t=>{rF(t,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},r2=t=>{rF(t,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),nE=W(()=>{nd(),ny(),ng(),n_(),r3=(t,r)=>{let i=t.inputs,a=i[0].dims,n=tt.normalizeAxis(r.axis,a.length);((t,r)=>{if(!t||t.length<1)throw Error("too few inputs");let i=t[0],a=i.dataType,n=i.dims.length;t.forEach((t,s)=>{if(0!==s){if(t.dataType!==a)throw Error("input tensors should be one type");if(t.dims.length!==n)throw Error("input tensors should have the same shape");t.dims.forEach((t,a)=>{if(a!==r&&t!==i.dims[a])throw Error("non concat dimensions must match")})}})})(i,n);let s=a.slice();s[n]=i.reduce((t,r)=>t+(r.dims.length>n?r.dims[n]:0),0);let o=i.filter(t=>tt.size(t.dims)>0);t.compute(((t,r,i,a)=>{let n=tt.size(i),s=Array(t.length),o=Array(t.length),u=0,l=[],d=[],p=[{type:12,data:n}];for(let i=0;i<t.length;++i)u+=t[i].dims[r],s[i]=u,d.push(t[i].dims.length),o[i]=ty(`input${i}`,a,d[i]),l.push("rank"),p.push({type:12,data:s[i]});for(let r=0;r<t.length;++r)p.push(...td(t[r].dims));p.push(...td(i));let c=t_("output",a,i.length),h=c.indicesGet("indices",r),f=Array.from(Array(s.length).keys()).map(t=>`uniforms.sizeInConcatAxis${t}`).join(",");return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:r=>`

  ${(()=>{r.registerUniform("outputSize","u32");for(let i=0;i<t.length;i++)r.registerUniform(`sizeInConcatAxis${i}`,"u32");return r.declareVariables(...o,c)})()}

  ${((t,r)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${t}u>(${r});
    for (var i: u32 = 0u; i < ${t}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${t}u;
  }`)(s.length,f)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${f});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${((t,r)=>{let i=t.length,a=[];for(let n=0;n<i;++n){let s=r.setByOffset("global_idx",t[n].getByIndices("indices"));1===i?a.push(s):0===n?a.push(`if (inputIndex == ${n}u) { ${s} }`):n===i-1?a.push(`else { ${s} }`):a.push(`else if (inputIndex == ${n}) { ${s} }`)}return a.join(`
`)})(o,c)}
  }`}})(o,n,s,i[0].dataType),{inputs:o})},r4=t=>e9({axis:t.axis})}),nz=W(()=>{nd(),ny(),r6=(t,r,i="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw Error(`Unsupported activation ${t.activation}`)}},r8=(t,r)=>{"Clip"===t.activation?r.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):"HardSigmoid"===t.activation?r.push({type:1,data:t.alpha},{type:1,data:t.beta}):"LeakyRelu"===t.activation&&r.push({type:1,data:t.alpha})},r5=(t,r)=>{"Clip"===t.activation?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):"HardSigmoid"===t.activation?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):"LeakyRelu"===t.activation&&r.push({name:"alpha",type:"f32"})},r9=t=>{let r=t?.activation||"";if("HardSigmoid"===r){let[i,a]=t?.activation_params||[.2,.5];return{activation:r,alpha:i,beta:a}}if("Clip"===r){let[i,a]=t?.activation_params||[ta,tn];return{activation:r,clipMax:a,clipMin:i}}if("LeakyRelu"===r){let[i]=t?.activation_params||[.01];return{activation:r,alpha:i}}return{activation:r}}}),nA=W(()=>{r7=(t,r)=>{switch(t){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw Error(`${t}-component is not supported.`)}},ie=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nO=W(()=>{it=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),nR=W(()=>{nd(),ny(),n_(),nz(),ir=(t,r,i,a,n)=>{let s=a-i;return`
      ${Array.from({length:i}).map((i,o)=>`
      if (${tm(r.shape,o,r.rank)} != 1) {
        ${r.indicesSet(t,o,tm(n,o+s,a))}
      } else {
        ${r.indicesSet(t,o,0)}
      }`).join("")}
`},ii=(t,r,i,a,n=!1,s)=>{let o=t[0].dims,u=t[1].dims,l=o[o.length-2],d=u[u.length-1],p=o[o.length-1],c=tp(d),h=tp(p),f=tp(l),m=tt.size(i)/c/f,g=t.length>2,y=a?a.slice(0,-2):i.slice(0,-2),_=[tt.size(y),l,d],b=[{type:12,data:m},{type:12,data:l},{type:12,data:d},{type:12,data:p}];return r8(r,b),b.push(...td(y,o,u)),g&&b.push(...td(t[2].dims)),b.push(...td(_)),{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${c};${h};${f};${n}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b}),getShaderSource:a=>{let s=t$("batch_dims",t[0].dataType,y.length),l=ty("a",t[0].dataType,o.length,h),d=ty("b",t[1].dataType,u.length,c),p=t_("output",t[0].dataType,_.length,c),m=tu(p.type.tensor),b=r6(r,p.type.value,m),$=[l,d],v="";if(g){let r=n?c:1;$.push(ty("bias",t[2].dataType,t[2].dims.length,r)),v=`${n?`value += bias[col / ${r}];`:`value += ${p.type.value}(bias[row + i]);`}`}let w=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];return r5(r,w),`
  ${a.registerUniforms(w).registerInternalVariables(s).declareVariables(...$,p)}
  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${2===i.length?"":`let batch_indices = ${s.offsetToIndices("batch")};`}

    var a_indices: ${l.type.indices};
    ${ir("a_indices",l,l.rank-2,s.rank,"batch_indices")}
    ${l.indicesSet("a_indices",l.rank-2,0)}
    ${l.indicesSet("a_indices",l.rank-1,0)}
    let a_offset = ${l.indicesToOffset("a_indices")};

    var b_indices: ${d.type.indices};
    ${ir("b_indices",d,d.rank-2,s.rank,"batch_indices")}
    ${d.indicesSet("b_indices",d.rank-2,0)}
    ${d.indicesSet("b_indices",d.rank-1,0)}
    let b_offset = ${d.indicesToOffset("b_indices")};
    var values: array<${p.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${(()=>{let t=`var a_data: ${l.type.value};`;for(let r=0;r<h;r++)t+=`
              let b_data${r} = b[(b_offset + (k + ${r}) * uniforms.N + col) / ${c}];`;for(let r=0;r<f;r++){t+=`a_data = a[(a_offset + (row + ${r}) * uniforms.K + k) / ${h}];`;for(let i=0;i<h;i++)t+=`
            values[${r}] = fma(${d.type.value}(a_data${1===h?"":`[${i}]`}), b_data${i}, values[${r}]);
`}return t})()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${v}
      ${b}
      let cur_indices = ${p.type.indices}(batch, row + i, col);
      let offset = ${p.indicesToOffset("cur_indices")};
      ${p.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `}}}}),nB=W(()=>{nd(),ny(),n_(),nz(),nR(),nA(),ia=(t,r,i="f32",a,n=!1,s=32,o=!1,u=32)=>{let l=r[1]*t[1],d=r[0]*t[0],p=n?l:s,c=n?s:l,h=p/r[0],f=s/r[1];if(!((n&&4===h&&4===t[1]||!n&&(3===h||4===h))&&p%r[0]==0&&s%r[1]==0&&4===t[0]))throw Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${r[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${i}>, ${p/h}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${d/t[0]}>, ${s}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${h};
const tileInner = ${s};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${((t,r)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `)(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${3===h?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${((t,r)=>t?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${3===r?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${3===r?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${3===r?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`)(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},is=(t,r)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,io=(t,r,i="f32",a,n=!1,s=32,o=!1,u=32,l=!1)=>{let d=t[1]*r[1],p=t[0]*r[0],c=n?d:s,h=n?s:d;if(h%r[1]!=0||c%r[0]!=0||s%r[1]!=0)throw Error(`tileAHight ${h} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${r[0]}, tileInner ${s} must be divisible by workgroupSize[1]${r[1]}`);let f=h/r[1],m=c/r[0],g=s/r[1],y=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${r[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${r[0]}) {
          ${is(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${r[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${r[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${r[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${r[1]}];`:`mm_Asub[localRow + innerRow * ${r[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${r[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${r[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${is(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${n?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];"}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${c}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${p}>, ${s}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${s};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${y}
  }
`},iu=(t,r,i,a,n=!1,s)=>{let o=t[0].dims,u=t[1].dims,l=o.slice(0,-2),d=u.slice(0,-2),p=a?a.slice(0,-2):i.slice(0,-2),c=tt.size(p),h=o[o.length-2],f=o[o.length-1],m=u[u.length-1],g=f%4==0&&m%4==0,y=h<=8?[4,1,1]:[4,4,1],_=[8,8,1],b=[Math.ceil(m/_[0]/y[0]),Math.ceil(h/_[1]/y[1]),Math.ceil(c/_[2]/y[2])],$=g?4:1,v=[...l,h,f/$],w=v.length,x=[...d,f,m/$],S=x.length,k=[c,h,m/$],T=[{type:6,data:h},{type:6,data:m},{type:6,data:f}];r8(r,T),T.push(...td(p,v,x));let I=["rank","rank"],C=t.length>2;return C&&(T.push(...td(t[2].dims)),I.push("rank")),T.push(...td(k)),{name:"MatMul",shaderCache:{hint:`${y};${r.activation};${g};${n}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:t[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:T}),getShaderSource:i=>{let a=p.length,s=t$("batchDims",t[0].dataType,a,1),o=tu(t[0].dataType),u=ty("a",t[0].dataType,w,$),l=ty("b",t[1].dataType,S,$),d=t_("result",t[0].dataType,k.length,$),c=[u,l];if(C){let r=n?$:1;c.push(ty("bias",t[2].dataType,t[2].dims.length,r))}let h=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];r5(r,h);let f=tu(d.type.tensor),m=((t,r,i,a,n=!1)=>{let[s,o,u,l]=a,d=tu(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${r7(t,d)} {
      var value = ${r7(t,d)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${ir("aIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${r7(t,d)} {
      var value = ${r7(t,d)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${ir("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${r7(t,d)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${n?"bias[colIn]":`${r7(t,d)}(bias[row])`};`:""}
        ${i}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `})($,C,r6(r,d.type.value,f),[s,u,l,d],n);return`
  ${i.registerUniforms(h).registerInternalVariables(s).declareVariables(...c,d)}
  ${m}
  ${g?ia(y,_,o,s):io(y,_,o,s)}
                   `}}}}),nN=W(()=>{nd(),nc(),n_(),nz(),nA(),nO(),nB(),il=(t,r,i,a,n,s,o,u,l)=>{let d="NHWC"===r.format,p=d?t[0].dims[3]:t[0].dims[1],c=i[0],h=d?i[2]:i[3],f=d?i[1]:i[2],m=d?i[3]:i[1],g=d&&(p%4==0||p%3==0)&&m%4==0,y=d?m:h*f,_=d?h*f:m,b=[8,8,1],$=a<=8?[4,1,1]:[4,4,1],v=[Math.ceil(y/b[0]/$[0]),Math.ceil(_/b[1]/$[1]),Math.ceil(c/b[2]/$[2])];eX("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let w=g?d&&p%4!=0?3:4:1,x=b[1]*$[1],S=b[0]*$[0],k=Math.max(b[0]*w,b[1]),T=a%x==0,I=n%S==0,C=s%k==0,E=g?[w,4,4]:[1,1,1],z=[{type:6,data:a},{type:6,data:n},{type:6,data:s},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];r8(r,z),z.push(...td(t[0].dims,t[1].dims));let A=["rank","rank"];return o&&(z.push(...td(t[2].dims)),A.push("rank")),z.push(...td(i)),{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${w};${g};${T};${I};${C};${x};${S};${k}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:l?l(i):i,dataType:t[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:z}),getShaderSource:a=>{let n=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];r5(r,n);let s=g?4:1,l=tu(t[0].dataType),p=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${l}>`:l}) {
        result[flatIndex] = ${g?`vec4<${l}>`:l}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${l}>`:l}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,c=[ty("x",t[0].dataType,t[0].dims.length,3===w?1:w),ty("w",t[1].dataType,t[1].dims.length,s)],h=t_("result",t[0].dataType,i.length,s);if(o){let r=ty("bias",t[2].dataType,t[2].dims.length,s);c.push(r),p+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${l}>`:l} {
          return bias[coords.${d?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${it("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${a.registerUniforms(n).declareVariables(...c,h)}
        ${p}
        ${((t,r,i,a,n=!1,s,o=4,u=4,l=4,d="f32")=>{let p=t=>{switch(t){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw Error(`innerElementSize ${t} is not supported.`)}},c=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=t?"row":"col",m=t?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${f} / outWidth;
    let outCol = ${f} % outWidth;

    let WRow = ${m} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${m} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${m} % inChannels;
    var resData = ${r7(o,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])"} && xCol >= 0 && xCol < ${t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])"}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${(t=>{switch(t){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw Error(`innerElementSize ${t} is not supported.`)}})(o)}
    }
    return resData;`,y=t?r&&a?`
    let col = colIn * ${o};
    ${g}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${r7(o,d)}(0.0);`:a&&i?`
    let col = colIn * ${o};
    ${g}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${r7(o,d)}(0.0);`,_=t?a&&i?p(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(u)}
    }
    return ${r7(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(u)}
    }
    return ${r7(u,d)}(0.0);`,b=r7(l,d),$=t?r7(o,d):r7(u,d),v=t?r7(u,d):r7(o,d),w=r6(s,b,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${$} {
      ${t?y:_}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${v} {
      ${t?_:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${b}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${ie(n)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`})(d,T,I,C,o,r,E[0],E[1],E[2],l)}
        ${g?ia($,b,l,void 0,!d,k):io($,b,l,void 0,!d,k,!1,void 0,u)}`}}}}),nD=W(()=>{nd(),nc(),ny(),n_(),nz(),nA(),id=t=>"number"==typeof t?[t,t,t]:t,ip=(t,r)=>r<=1?t:t+(t-1)*(r-1),ic=(t,r,i,a,n)=>{null==n&&(n=((t,r,i,a=1)=>{let n=ip(r,a);return Math.floor((t[0]*(i-1)-i+n)/2)})(t,r[0],a[0]));let s=[0,0,0,i];for(let i=0;i<3;i++)t[i]+2*n>=r[i]&&(s[i]=Math.trunc((t[i]-r[i]+2*n)/a[i]+1));return s},ih=(t,r,i,a,n,s=!1,o="channelsLast")=>{let u,l,d,p,c;if("channelsLast"===o)[u,l,d,p,c]=t;else if("channelsFirst"===o)[u,c,l,d,p]=t;else throw Error(`Unknown dataFormat ${o}`);let[h,,f,m,g]=r,[y,_,b]=id(i),[$,v,w]=id(a),x=ip(f,$),S=ip(m,v),k=ip(g,w),{padInfo:T,outDepth:I,outHeight:C,outWidth:E}=((t,r,i,a,n,s,o,u,l,d)=>{let p,c,h,f;if("VALID"===t&&(t=0),"number"==typeof t){p={top:t,bottom:t,left:t,right:t,front:t,back:t};let m=ic([r,i,a,1],[u,l,d],1,[n,s,o],t);c=m[0],h=m[1],f=m[2]}else if(Array.isArray(t)){if(!t.every((t,r,i)=>t===i[0]))throw Error(`Unsupported padding parameter: ${t}`);p={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let m=ic([r,i,a,1],[u,l,d],1,[n,s,o],t[0]);c=m[0],h=m[1],f=m[2]}else if("SAME_UPPER"===t){c=Math.ceil(r/n),h=Math.ceil(i/s),f=Math.ceil(a/o);let t=(c-1)*n+u-r,m=(h-1)*s+l-i,g=(f-1)*o+d-a,y=Math.floor(t/2),_=Math.floor(m/2),b=Math.floor(g/2);p={top:_,bottom:m-_,left:b,right:g-b,front:y,back:t-y}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:p,outDepth:c,outHeight:h,outWidth:f}})(n,l,d,p,y,_,b,x,S,k),z=s?h*c:h,A=[0,0,0,0,0];return"channelsFirst"===o?A=[u,z,I,C,E]:"channelsLast"===o&&(A=[u,I,C,E,z]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:d,inWidth:p,inChannels:c,outDepth:I,outHeight:C,outWidth:E,outChannels:z,padInfo:T,strideDepth:y,strideHeight:_,strideWidth:b,filterDepth:f,filterHeight:m,filterWidth:g,effectiveFilterDepth:x,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationDepth:$,dilationHeight:v,dilationWidth:w,inShape:t,outShape:A,filterShape:r}},im=(t,r,i,a,n,s)=>{let o="channelsLast"===s,u=(o?t[0].dims[3]:t[0].dims[1],[Math.ceil((t=>{let r=1;for(let i=0;i<t.length;i++)r*=t[i];return r})(({x:i.map((t,r)=>r)}).x.map(t=>i[t]))/64),1,1]);eX("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let l=[{type:12,data:tt.size(i)},{type:12,data:a},{type:12,data:n},{type:12,data:r.strides},{type:12,data:r.dilations}];r8(r,l),l.push(...td(t[0].dims,t[1].dims));let d=["rank","rank"],p=3===t.length;return p&&(l.push(...td(t[2].dims)),d.push("rank")),l.push(...td(i)),{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${o};1;${p}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:l}),getShaderSource:s=>{let u=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];r5(r,u);let l=tu(t[0].dataType),d=ty("x",t[0].dataType,t[0].dims.length,1),c=ty("W",t[1].dataType,t[1].dims.length,1),h=[d,c],f=t_("result",t[0].dataType,i.length,1),m="";if(p){let r=ty("bias",t[2].dataType,t[2].dims.length,1);h.push(r),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l} {
          return bias[${o?tm("coords",4,5):tm("coords",1,5)}];
        }`}let g=r7(1,l),y=r6(r,g,l);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${d.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${c.getByIndices("aIndices")};
            }
          ${s.registerUniforms(u).declareVariables(...h,f)}
          ${s.mainStart()}
          ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${f.offsetToIndices("global_idx")};
              let batch = ${tm("coords",0,d.rank)};
              let d2 = ${o?tm("coords",d.rank-1,d.rank):tm("coords",1,d.rank)};
              let xFRCCorner = vec3<u32>(${o?tm("coords",1,d.rank):tm("coords",2,d.rank)},
              ${o?tm("coords",2,d.rank):tm("coords",3,d.rank)},
              ${o?tm("coords",3,d.rank):tm("coords",4,d.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?tm("uniforms.x_shape",1,d.rank):tm("uniforms.x_shape",2,d.rank)};
              let xShapeZ = ${o?tm("uniforms.x_shape",2,d.rank):tm("uniforms.x_shape",3,d.rank)};
              let xShapeW = ${o?tm("uniforms.x_shape",3,d.rank):tm("uniforms.x_shape",4,d.rank)};
              let xShapeU = ${o?tm("uniforms.x_shape",4,d.rank):tm("uniforms.x_shape",1,d.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${p?"value = value + getBiasByOutputCoords(coords)":""};
              ${y}
              result[global_idx] = f32(value);
          }`}}}}),nM=W(()=>{nd(),ny(),n_(),nz(),ig=(t,r,i,a)=>{let n=t.length>2,s=n?"value += b[output_channel];":"",o=t[0].dims,u=t[1].dims,l="NHWC"===r.format,d=l?i[3]:i[1],p=d/r.group,c=l&&p>=4?tp(d):1,h=tt.size(i)/c,f=[{type:12,data:h},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:p}];return r8(r,f),f.push(...td(o,[u[0],u[1],u[2],u[3]/c])),f.push(...td([i[0],i[1],i[2],i[3]/c])),{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${c}`,inputDependencies:n?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(i):i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:a=>{let d=t_("output",t[0].dataType,i.length,c),p=tu(d.type.tensor),h=r6(r,d.type.value,p),f=ty("x",t[0].dataType,o.length),m=ty("w",t[1].dataType,u.length,c),g=[f,m];n&&g.push(ty("b",t[2].dataType,t[2].dims,c));let y=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];r5(r,y);let _=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${f.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${m.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${f.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${m.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${a.registerUniforms(y).declareVariables(...g,d)}

  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${d.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${d.type.value} = ${d.type.value}(0);
    ${_}
    ${s}
    ${h}
    ${d.setByOffset("global_idx","value")}
  }`}}},iy=(t,r,i,a)=>{let n=t.length>2,s=tp(i[3]),o=tp(i[2]),u=tt.size(i)/s/o,l=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/s],d=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/s],p=[i[0],i[1],i[2],i[3]/s],c=[{type:12,data:u},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];r8(r,c),c.push(...td(l,d,p));let h=(o-1)*r.strides[1]+d[1];return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${s};${o};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(i):i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:i=>{let a=t_("output",t[0].dataType,p.length,s),u=tu(a.type.tensor),c=r6(r,a.type.value,u),f=ty("x",t[0].dataType,l.length,s),m=ty("w",t[1].dataType,d.length,s),g=[f,m];n&&g.push(ty("b",t[2].dataType,t[2].dims,s));let y=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return r5(r,y),`
  ${i.registerUniforms(y).declareVariables(...g,a)}
  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${f.type.value}, ${h}>;
    var values: array<${a.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${f.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${f.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${m.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${n?"value += b[output_channel];":""}
      ${c}
      ${a.set("batch","row","col + i","output_channel","value")};
    }
  }`}}}}),nP=W(()=>{ny(),nN(),nD(),nB(),nM(),nz(),nR(),nb(),i_=[2,3,1,0],ib=(t,r)=>{let i=t.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let t=2;t<r[1].dims.length;++t)0===i[t-2]&&(i[t-2]=r[1].dims[t]);let a=t.pads.slice();tr.adjustPadsBasedOnAutoPad(r[0].dims,t.strides,t.dilations,i,a,"NHWC"===t.format,t.autoPad);let n=Object.assign({},t);return Object.assign(n,{kernelShape:i,pads:a}),n},i$=t=>{let r=r9(t),i=t.format;return{autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],format:i,dilations:t.dilations,group:t.group,kernelShape:t.kernel_shape,pads:t.pads,strides:t.strides,wIsConst:t.w_is_const(),...r,cacheKey:`${t.format};${r.activation};`}},iv=(t,r,i,a)=>{let n="NHWC"===i.format,s=((t,r,i,a,n,s)=>{let o=t[0],u=t.slice(s?1:2,s?3:4),l=u.length,d=r[0],p=r.slice(2).map((t,r)=>t+(t-1)*(i[r]-1)),c=u.map((t,r)=>t+a[r]+a[r+l]).map((t,r)=>Math.floor((t-p[r]+n[r])/n[r]));return c.splice(0,0,o),c.splice(s?3:1,0,d),c})(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,n);if(1!==i.group){let o=[r[0]];if(n){let a=t.kernelCustomData.wT??t.compute(tS(r[1],i_),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=a),o.push(a)}else o.push(r[1]);3===r.length&&o.push(r[2]),!t.adapterInfo.isArchitecture("ampere")&&n&&r[1].dims[0]===i.group&&1===r[1].dims[1]&&1===i.dilations[0]&&1===i.dilations[1]?t.compute(iy(o,i,s,a),{inputs:o}):t.compute(ig(o,i,s,a),{inputs:o});return}let o=3===r.length,u=r[0].dims[n?1:2],l=r[0].dims[n?2:3],d=r[0].dims[n?3:1],p=r[1].dims[2],c=r[1].dims[3],h=s[n?1:2],f=s[n?2:3],m=s[n?3:1],g=n&&p===u&&c===l&&0===i.pads[0]&&0===i.pads[1];if(g||1===p&&1===c&&1===i.dilations[0]&&1===i.dilations[1]&&1===i.strides[0]&&1===i.strides[1]&&0===i.pads[0]&&0===i.pads[1]){let p=s[0],c,y,_,b=[];if(n){let a=t.kernelCustomData.wT??t.compute(tS(r[1],i_),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=a),g){let t=u*l*d;c=r[0].reshape([1,p,t]),y=a.reshape([1,t,m]),_=[1,p,m]}else c=r[0].reshape([p,u*l,d]),y=a.reshape([1,d,m]),_=[p,h*f,m];b.push(c),b.push(y)}else c=r[0].reshape([p,d,u*l]),y=r[1].reshape([1,m,d]),_=[p,m,h*f],b.push(y),b.push(c);o&&b.push(r[2]);let $=_[2],v=b[0].dims[b[0].dims.length-1];$<8&&v<8?t.compute(ii(b,i,s,_,n,a),{inputs:b}):t.compute(iu(b,i,s,_,n,a),{inputs:b});return}let y=t.kernelCustomData.wT??t.compute(tS(r[1],i_),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=y);let _=[r[0],y];o&&_.push(r[2]);let b=n?h*f:m,$=n?m:h*f,v=p*c*d;t.compute(il(_,i,s,b,$,v,o,!0,a),{inputs:_})},iw=(t,r)=>{if(((t,r)=>{if(!t||2!==t.length&&3!==t.length)throw Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw Error("filter does not have same dimension as input");if(t[0].dims["NHWC"===r.format?t[0].dims.length-1:1]!==t[1].dims[1]*r.group)throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(3===t.length&&(1!==t[2].dims.length||t[1].dims[0]!==t[2].dims[0]))throw Error("invalid bias");let i=t[0].dims.length-2;if(r.dilations.length!==i)throw Error(`dilations should be ${i}D`);if(r.strides.length!==i)throw Error(`strides should be ${i}D`);if(r.pads.length!==2*i)throw Error(`pads should be ${2*i}D`);if(0!==r.kernelShape.length&&r.kernelShape.length!==t[1].dims.length-2)throw Error("invalid kernel shape")})(t.inputs,r),3===t.inputs[0].dims.length)((t,r)=>{let i="NHWC"===r.format,a=[t.inputs[0].reshape(i?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];3===t.inputs.length&&a.push(t.inputs[2]);let n=[0,r.pads[0],0,r.pads[1]],s=[1].concat(r.strides),o=[1].concat(r.dilations),u=[1].concat(r.kernelShape),l=ib({...r,pads:n,strides:s,dilations:o,kernelShape:u},a);iv(t,a,l,t=>i?[t[0],t[2],t[3]]:[t[0],t[1],t[3]])})(t,r);else if(5===t.inputs[0].dims.length)((t,r,i)=>{let a="NHWC"===i.format?"channelsLast":"channelsFirst",n=ib(i,r),s="NOTSET"===i.autoPad?i.pads:i.autoPad,o=ih(r[0].dims,r[1].dims,i.strides,i.dilations,s,!1,a);t.compute(im(r,n,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))})(t,t.inputs,r);else{let i=ib(r,t.inputs);iv(t,t.inputs,i)}}}),nU=W(()=>{nd(),nc(),ny(),n_(),ix=(t,r,i)=>{let a=t.length>2,n=r.outputShape,s="NHWC"===r.format,o=r.group,u=t[1].dims,l=u[2]/o,d=u[3],p=s?tp(l):1,c=s?tp(d):1,h=s?1===d?p:c:1,f=tt.size(n)/c,m=[Math.ceil(f/64),1,1];eX("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let g=["rank","rank"],y=[r.strides[0],r.strides[1]],_=[r.kernelShape[s?1:2],r.kernelShape[s?2:3]],b=[r.dilations[0],r.dilations[1]],$=[_[0]+(r.dilations[0]<=1?0:(r.kernelShape[s?1:2]-1)*(r.dilations[0]-1)),_[1]+(r.dilations[1]<=1?0:(r.kernelShape[s?2:3]-1)*(r.dilations[1]-1))],v=[$[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),$[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],w=[{type:12,data:f},{type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:$},{type:6,data:v},{type:12,data:l},{type:12,data:d},...td(t[0].dims,t[1].dims)];return a&&(w.push(...td(t[2].dims)),g.push("rank")),w.push(...td(n)),{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};${p}${h}${c}${1===d}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:i?i(n):n,dataType:t[0].dataType}],programUniforms:w}),getShaderSource:r=>{let i=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:y.length},{name:"filter_dims",type:"u32",length:_.length},{name:"dilations",type:"u32",length:_.length},{name:"effective_filter_dims",type:"u32",length:$.length},{name:"pads",type:"i32",length:v.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],o=tu(t[0].dataType),u=s?1:2,l=s?2:3,f=s?3:1,m=ty("W",t[1].dataType,t[1].dims.length,h),g=ty("Dy",t[0].dataType,t[0].dims.length,p),b=[g,m];a&&b.push(ty("bias",t[2].dataType,[n[f]].length,c));let w=t_("result",t[0].dataType,n.length,c),x=`
            let outputIndices = ${w.offsetToIndices(`global_idx * ${c}`)};
            let batch = ${w.indicesGet("outputIndices",0)};
            let d1 = ${w.indicesGet("outputIndices",f)};
            let r = ${w.indicesGet("outputIndices",u)};
            let c = ${w.indicesGet("outputIndices",l)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${w.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${u}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${l}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${p}) {
                  let xValue = ${s?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):g.get("batch","inputChannel","idyR","idyC")};
                  ${(()=>{let t="";if(1===p)t+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${h}`)};
        dotProd = dotProd + xValue * wValue;`;else if(1===d)t+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${h}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let r=0;r<p;r++)t+=`
            let wValue${r} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${r}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${r}] * wValue${r};`;return t})()}
                  inputChannel = inputChannel + ${p};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${c}]`:""};
            ${w.setByOffset("global_idx","value")};
          `;return`
    ${r.registerUniforms(i).declareVariables(...b,w)}
      ${r.mainStart()}
      ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${x}}`}}}}),nW=W(()=>{nU(),nz(),nb(),iS=(t,r,i,a,n,s)=>(t-1)*r+i+(a-1)*n+1-s,ik=(t,r,i,a,n)=>{let s=Math.floor(t/2);"SAME_UPPER"===r?(i[a]=s,i[n]=t-s):"SAME_LOWER"===r&&(i[a]=t-s,i[n]=s)},iT=(t,r)=>{let i=t.kernelShape.slice();if(0===t.kernelShape.length||0===t.kernelShape.reduce((t,r)=>t*r,1)){i.length=0;for(let t=2;t<r[1].dims.length;++t)i.push(r[1].dims[t])}let a="NHWC"===t.format;i.splice(0,0,r[1].dims[0]),i.splice(a?3:1,0,r[1].dims[1]);let n=t.pads.slice(),s=t.outputShape.slice(),o=t.outputPadding.slice(),u=r[0].dims,l=t.dilations.slice();0===l.reduce((t,r)=>t+r,0)&&(l=Array(r[0].dims.length-2).fill(1));let d=t.strides.slice();0===d.reduce((t,r)=>t+r,0)&&(d=Array(r[0].dims.length-2).fill(1)),((t,r,i,a,n,s,o,u,l,d)=>{let p=t.length-2,c=0===d.length;l.length<p&&l.push(...Array(p-l.length).fill(0));let h=t[0],f=r[u?3:1]*n;for(let n=0,h=t.length-p-!!u;n<p;++n,++h){let u=t[h],f=c?u*o[n]:d[n];ik(iS(u,o[n],s[n],r[h],i[n],f),a,s,n,n+p),c&&d.push(o[n]*(u-1)+l[n]+(r[h]-1)*i[n]+1-s[n]-s[n+p])}d.splice(0,0,h),d.splice(u?3:1,0,f)})(u,i,l,t.autoPad,t.group,n,d,a,o,s);let p=Object.assign({},t);return Object.assign(p,{kernelShape:i,pads:n,outputPadding:o,outputShape:s,dilations:l,strides:d}),p},iI=t=>{let r=r9(t),i=t.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],n=t.dilations,s=t.group,o=t.kernelShape,u=t.pads,l=t.strides,d=t.wIsConst();return{autoPad:a,format:i,dilations:n,group:s,kernelShape:o,outputPadding:t.outputPadding,outputShape:t.outputShape,pads:u,strides:l,wIsConst:d,...r,cacheKey:`${t.format};${r.activation};`}},iC=(t,r,i,a)=>{let n=t.kernelCustomData.wT??t.compute(tS(r[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=n);let s=[r[0],n];3===r.length&&s.push(r[2]),t.compute(ix(s,i,a),{inputs:s})},iE=(t,r)=>{if(((t,r)=>{if(!t||2!==t.length&&3!==t.length)throw Error("Conv requires 2 or 3 inputs");if(4!==t[0].dims.length&&3!==t[0].dims.length)throw Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw Error("filter does not have same dimension as input");if(t[0].dims["NHWC"===r.format?t[0].dims.length-1:1]!==t[1].dims[0])throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=t[1].dims[1]*r.group;if(3===t.length&&(1!==t[2].dims.length||t[2].dims[0]!==i))throw Error("invalid bias");let a=t[0].dims.length-2;if(r.dilations.reduce((t,r)=>t+r,0)>0&&r.dilations.length!==a)throw Error(`dilations should be ${a}D`);if(r.strides.reduce((t,r)=>t+r,0)>0&&r.strides.length!==a)throw Error(`strides should be ${a}D`);if(r.pads.reduce((t,r)=>t+r,0)>0&&r.pads.length!==2*a)throw Error(`pads should be ${2*a}D`);if(r.outputPadding.length!==a&&0!==r.outputPadding.length)throw Error(`output_padding should be ${a}D`);if(r.kernelShape.reduce((t,r)=>t+r,0)>0&&0!==r.kernelShape.length&&r.kernelShape.length!==t[1].dims.length-2)throw Error("invalid kernel shape");if(0!==r.outputShape.length&&r.outputShape.length!==t[0].dims.length-2)throw Error("invalid output shape")})(t.inputs,r),3===t.inputs[0].dims.length)((t,r)=>{let i="NHWC"===r.format,a=[t.inputs[0].reshape(i?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];3===t.inputs.length&&a.push(t.inputs[2]);let n=r.kernelShape;(0===n.length||0===n[0])&&(n=[t.inputs[1].dims[2]]);let s=r.dilations;(0===s.length||0===s[0])&&(s=[1]);let o=r.strides;(0===o.length||0===o[0])&&(o=[1]);let u=r.pads;0===u.length&&(u=[0,0]),u=[0,u[0],0,u[1]],o=[1].concat(o),s=[1].concat(s),n=[1].concat(n);let l=r.outputPadding;l=[0].concat(l);let d=iT({...r,pads:u,strides:o,dilations:s,kernelShape:n,outputPadding:l},a);iC(t,a,d,t=>i?[t[0],t[2],t[3]]:[t[0],t[1],t[3]])})(t,r);else{let i=iT(r,t.inputs);iC(t,t.inputs,i)}}}),nq=W(()=>{nd(),ny(),ng(),n_(),iz=(t,r)=>{let i=t.inputs[0].dims,a=t.inputs[0].dataType,n=t.inputs[1];t.compute(((t,r,i,a)=>{let n=tt.size(r),s=r.length,o=ty("input",t,s),u=t_("output",t,s),l=6===i.dataType?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),d=tt.normalizeAxis(l,s);return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...td(r,r)]}),getShaderSource:t=>{let r=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,i=tm("uniforms.input_shape","uniforms.axis",s),n=a.reverse?r+(a.exclusive?" + 1":""):"0",l=a.reverse?i:r+(a.exclusive?"":" + 1");return`
                ${t.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,u)}
                ${t.mainStart()}
                  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${n};
                  let last : i32 = ${l};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`}}})(a,i,n,r),{inputs:[0]})},iA=t=>{let r=1===t.exclusive,i=1===t.reverse;return e9({exclusive:r,reverse:i})}}),nL=W(()=>{nd(),ny(),ng(),n_(),iO=(t,r)=>{(t=>{if(!t||1!==t.length)throw Error("DepthToSpace requires 1 input.");if(4!==t[0].dims.length)throw Error("DepthToSpace requires 4D input.")})(t.inputs),t.compute(((t,r)=>{let i,a,n,s,o,u,l="NHWC"===r.format,d=r.blocksize,p="DCR"===r.mode;l?([i,a,n,s]=t.dims,o=p?[i,a,n,d,d,s/d**2]:[i,a,n,s/d**2,d,d],u=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,a,n,s]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],o=p?[i,d,d,s/d**2,a,n]:[i,s/d**2,d,d,a,n],u=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=t.reshape(o),h=c.dims.length,f=t.dataType,m=ty("a",f,h),g=t_("output",f,h);return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:t=>{let r=l?[i,a*d,n*d,s/d**2]:[i,s/d**2,a*d,n*d],o=tt.size(r),p=c.dims,h=tt.sortBasedOnPerm(p,u);return{outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...td(p,h)]}},getShaderSource:t=>`
  ${t.registerUniform("output_size","u32").declareVariables(m,g)}

  ${((t,r,i,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let a=0;a<r;++a)n.push(i.indicesSet("a",t[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)})(u,h,m,g)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`}})(t.inputs[0],r))},iR=t=>e9({blocksize:t.blocksize,mode:t.mode,format:t.format})}),nV=W(()=>{nd(),ny(),ng(),n_(),iD="^"+(iN="("+(iB="[a-zA-Z]|\\.\\.\\.")+")+")+"$",iM="^"+("("+iN+",)*")+iN+"$",iP=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,r){let i=this.symbolToIndices.get(t);void 0===i?i=[r]:i.push(r),this.symbolToIndices.set(t,i)}},iU=class{constructor(t,r){this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[i,a]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(iM)))throw Error("Invalid LHS term");if(i.split(",").forEach((r,i)=>{let a=t[i].dims.slice();if(!r.match(RegExp(iD)))throw Error("Invalid LHS term");let n=this.processTerm(r,!0,a,i);this.lhs.push(n)}),""===a)a+=[...this.symbolToInfo.entries()].filter(([t,r])=>1===r.count||"..."===t).map(([t])=>t).join("");else if(!a.match(RegExp(iN)))throw Error("Invalid RHS");a.match(RegExp(iB,"g"))?.forEach(t=>{if("..."===t)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let r=this.symbolToInfo.get(t);if(void 0===r)throw Error("Invalid RHS symbol");this.outputDims.push(r.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(t,r,i){let a=this.symbolToInfo.get(t);if(void 0!==a){if(a.dimValue!==r&&1!==a.count)throw Error("Dimension mismatch");a.count++,a.inputIndices.push(i)}else a={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(t,a)}processTerm(t,r,i,a=-1){let n=i.length,s=!1,o=[],u=0;if(!t.match(RegExp(iD))&&!r&&""!==t)throw Error("Invalid LHS term");let l=t.match(RegExp(iB,"g")),d=new iP(a);return l?.forEach((t,p)=>{if("..."===t){if(s)throw Error("Only one ellipsis is allowed per input term");s=!0;let t=n-l.length+1;if(t<0)throw Error("Ellipsis out of bounds");if(o=i.slice(u,u+t),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error("Ellipsis must be specified in the LHS");for(let t=0;t<o.length;t++){let r=String.fromCharCode(48+t);d.addSymbol(r,p+t),this.addSymbol(r,i[u++],a)}}else d.addSymbol(t,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(t,i[u++],a)}),d}},iW=(t,r)=>{let i=new iU(t.inputs,r.equation),a=i.outputDims,n=t.inputs.map((t,r)=>t.dims);t.compute(((t,r,i,a)=>{let n=t.map(t=>t.length).map((t,i)=>ty(`input${i}`,r,t)),s=tt.size(a),o=t_("output",r,a.length),u=[...i.symbolToInfo.keys()].filter(t=>!i.rhs.symbolToIndices.has(t));return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let n=u.filter(t=>i.symbolToInfo.has(t)).map(t=>({type:12,data:i.symbolToInfo.get(t)?.dimValue||0}));n.push({type:12,data:s});let o=t.map((t,r)=>[...td(t)]).reduce((t,r)=>t.concat(r),n);return o.push(...td(a)),{outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o}},getShaderSource:t=>{let r=[],a=[],s=[],l=[],d=[],p=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((t,u)=>{if(i.rhs.symbolToIndices.has(u)){let a=i.rhs.symbolToIndices.get(u)?.[0];void 0!==a&&i.lhs.forEach((i,s)=>{if(t.inputIndices.includes(s)){let t=i.symbolToIndices.get(u);if(void 0===t)throw Error("Invalid symbol error");t.forEach(t=>{r.push(`${n[s].indicesSet(`input${s}Indices`,t,o.indicesGet("outputIndices",a))}`)})}})}else i.lhs.forEach((r,i)=>{if(t.inputIndices.includes(i)){let t=r.symbolToIndices.get(u);if(void 0===t)throw Error("Invalid symbol error");t.forEach(t=>{a.push(`${n[i].indicesSet(`input${i}Indices`,t,`${u}`)}`)}),d.push(`prod *= ${n[i].getByIndices(`input${i}Indices`)};`)}}),s.push(`for(var ${u}: u32 = 0; ${u} < uniforms.${(t=>t+"_max")(u)}; ${u}++) {`),l.push("}")});let c=p?[...r,`let sum = ${n.map((t,r)=>t.getByIndices(`input${r}Indices`)).join(" * ")};`]:[...r,"var sum = 0.0;",...s,...a,"var prod = 1.0;",...d,"sum += prod;",...l];return`
            ${t.registerUniforms(u.map(t=>({name:`${(t=>t+"_max")(t)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,o)}

            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${n.map((t,r)=>`var input${r}Indices: ${n[r].type.indices};`).join(`
`)}
            ${c.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`}}})(n,t.inputs[0].dataType,i,a))},iq=t=>{let r=t.equation.replace(/\s+/g,"");return e9({equation:r})}}),nG=W(()=>{nd(),ny(),n_(),iL=(t,r)=>{let i=t.length-r.length,a=[];for(let r=0;r<i;++r)a.push(t[r]);for(let n=0;n<r.length;++n)a.push(1===r[n]?t[n+i]:r[n]);return a},iV=t=>{(t=>{if(!t||2!==t.length)throw Error("Expand requires 2 input.");let r=t[0].dims,i=Array.from(t[1].getBigInt64Array(),Number),a=i.length<r.length?0:i.length-r.length,n=r.length<i.length?0:r.length-i.length;for(;a<i.length&&n<r.length;++a,++n)if(i[a]!==r[n]&&1!==i[a]&&1!==r[n])throw Error("Expand requires shape to be broadcastable to input")})(t.inputs),t.compute((t=>{let r=t[0].dims,i=((t,r)=>t.length>r.length?iL(t,r):iL(r,t))(r,Array.from(t[1].getBigInt64Array(),Number)),a=t[0].dataType,n=9===a||1===tt.size(r),s=9===a||r.length>0&&r[r.length-1]%4==0?4:1,o=n||i.length>0&&i[i.length-1]%4==0?4:1,u=Math.ceil(tt.size(i)/o),l=[{type:12,data:u},...td(r,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:t=>{let n=ty("input",a,r.length,s),u=t_("output",a,i.length,o),l;if(9===a){let t=(t,r,i="")=>`
          let outputIndices${r} = ${u.offsetToIndices(`outputOffset + ${r}u`)};
          let offset${r} = ${n.broadcastedIndicesToOffset(`outputIndices${r}`,u)};
          let index${r} = offset${r} / 4u;
          let component${r} = offset${r} % 4u;
          ${t}[${r}] = ${i}(${n.getByOffset(`index${r}`)}[component${r}]);
        `;l=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${t("data",0,"u32")}
        ${t("data",1,"u32")}
        ${t("data",2,"u32")}
        ${t("data",3,"u32")}
        ${u.setByOffset("global_idx","data")}
      }`}else l=`
        let outputIndices = ${u.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset("outputIndices",u)};
        let data = ${u.type.value}(${n.getByOffset(`inputOffset / ${s}`)});
        ${u.setByOffset("global_idx","data")}
      }`;return`
    ${t.registerUniform("vec_size","u32").declareVariables(n,u)}
    ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${l}`},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l})}})(t.inputs),{inputs:[0]})}}),nH=W(()=>{nd(),ny(),n_(),nT(),iG=t=>{t.inputs.length<2||0===tt.size(t.inputs[1].dims)?rW(t):t.compute((t=>{let r=t[0].dataType,i=tt.size(t[0].dims),a=tt.size(t[1].dims),n=a%4==0;return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:t=>{let i=ty("x",r,[1],4),a=ty("bias",r,[1],4),s=t_("y",r,[1],4),o=t=>`
      let bias${t}_offset: u32 = (global_idx * 4 + ${t}) % uniforms.bias_size;
      let bias${t} = ${a.getByOffset(`bias${t}_offset / 4`)}[bias${t}_offset % 4];`,u=n?`
      let bias = ${a.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${o(0)}${o(1)}${o(2)}${o(3)}
      let bias = ${i.type.value}(bias0, bias1, bias2, bias3);`;return`${t.registerUniforms([{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}]).declareVariables(i,a,s)}

    ${rP(tl(r))}

    ${t.mainStart(ts)}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${i.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${s.setByOffset("global_idx",rU("x_in"))}
    }`},getRunData:t=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(i/ts/4)}})}})(t.inputs))}}),nF=W(()=>{nd(),ny(),ng(),n_(),iH=t=>e9({axis:t.axis}),iF=(t,r)=>{(t=>{if(!t||2!==t.length)throw Error("Gather requires 2 inputs.")})(t.inputs),t.compute(((t,r)=>{let i=t[0].dims,a=t[1].dims,n=i.length,s=tt.normalizeAxis(r.axis,n),o=i.slice(0);o.splice(s,1,...a);let u=i[s],l=9===t[0].dataType?4:1,d=Math.ceil(tt.size(o)/l),p=[{type:12,data:d},{type:6,data:u},{type:12,data:s},...td(t[0].dims,t[1].dims,o)];return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:r=>{let i=ty("data",t[0].dataType,t[0].dims.length,l),u=ty("inputIndices",t[1].dataType,t[1].dims.length),d=t_("output",t[0].dataType,o.length,l),p=t=>{let r=a.length,l=`var indicesIndices${t}  = ${u.type.indices}(0);`;for(let i=0;i<r;i++)l+=`${r>1?`indicesIndices${t}[${i}]`:`indicesIndices${t}`} = ${o.length>1?`outputIndices${t}[uniforms.axis + ${i}]`:`outputIndices${t}`};`;l+=`
          var idx${t} = ${u.getByIndices(`indicesIndices${t}`)};
          if (idx${t} < 0) {
            idx${t} = idx${t} + uniforms.axisDimLimit;
          }
          var dataIndices${t} : ${i.type.indices};
        `;for(let i=0,a=0;i<n;i++)i===s?(l+=`${n>1?`dataIndices${t}[${i}]`:`dataIndices${t}`} = u32(idx${t});`,a+=r):(l+=`${n>1?`dataIndices${t}[${i}]`:`dataIndices${t}`} = ${o.length>1?`outputIndices${t}[${a}]`:`outputIndices${t}`};`,a++);return l},c;if(9===t[0].dataType){let t=(t,r,a="")=>`
          let outputIndices${r} = ${d.offsetToIndices(`outputOffset + ${r}u`)};
          ${p(r)};
          let offset${r} = ${i.indicesToOffset(`dataIndices${r}`)};
          let index${r} = offset${r} / 4u;
          let component${r} = offset${r} % 4u;
          ${t}[${r}] = ${a}(${i.getByOffset(`index${r}`)}[component${r}]);
        `;c=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${t("value",0,"u32")}
        ${t("value",1,"u32")}
        ${t("value",2,"u32")}
        ${t("value",3,"u32")}
        ${d.setByOffset("global_idx","value")}
      `}else c=`
      let outputIndices = ${d.offsetToIndices("global_idx")};
      ${p("")};
      let value = ${i.getByIndices("dataIndices")};
      ${d.setByOffset("global_idx","value")};
      `;return`
      ${r.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(i,u,d)}
      ${r.mainStart()}
        ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${c}
      }`}}})(t.inputs,r))}}),nj=W(()=>{nd(),ny(),n_(),ij=(t,r)=>{let i=t.inputs,a=i[0].dims,n=i[0].dataType,s=i[1].dims,o=s[s.length-1],u=tt.sizeToDimension(s,s.length-1),l=tt.sizeFromDimension(a,r.batchDims+o),d=tt.sizeToDimension(a,r.batchDims),p=tt.sizeFromDimension(a,r.batchDims),c=Array(o),h=l;for(let t=0;t<o;++t)c[o-1-t]=h,h*=a[r.batchDims+o-1-t];let f=((t,r,i,a,n,s,o,u,l)=>{let d=[{type:12,data:s},{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:o},{type:12,data:u},{type:12,data:l}],p=[s];return d.push(...td(r.dims,p)),t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:t=>{let a=ty("indices_data",r.dataType,r.dims.length),s=t_("input_slice_offsets_data",12,1,1),o=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${t.registerUniforms(o).declareVariables(a,s)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${1===n.length?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${1===i.length?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[r],outputs:[-1]})[0]})(t,i[1],c,r.batchDims,a,u,u/d,p,o),m=r.batchDims+o;if(m>a.length)throw Error("last dimension of indices must not be larger than rank of input tensor");let g=s.slice(0,-1).concat(a.slice(m)),y=tt.size(g),_=[{type:12,data:y},{type:12,data:l},...td(i[0].dims,f.dims,g)];t.compute({name:"GatherND",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:t=>{let r=ty("data",i[0].dataType,i[0].dims.length),a=ty("slice_offsets",12,f.dims.length),n=t_("output",i[0].dataType,g.length);return`
          ${t.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(r,a,n)}
            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[i[0],f]})},iK=t=>({batchDims:t.batch_dims,cacheKey:""})}),nK=W(()=>{nd(),ny(),ng(),n_(),iQ=(t,r)=>{((t,r)=>{if(t.length<3||t.length>4)throw Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=tt.normalizeAxis(r.quantizeAxis,t[0].dims.length),a=r.blockSize,n=t[0],s=t[2],o=4===t.length?t[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((t,r)=>r===i?Math.ceil(t/a)===s.dims[r]:t===s.dims[r]).reduce((t,r)=>t&&r,!0))throw Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==n.dataType)throw Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==s.dims.length||!o.dims.map((t,r)=>t===s.dims[r]).reduce((t,r)=>t&&r,!0))throw Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}})(t.inputs,r),t.compute(((t,r)=>{let i=t[0].dims,a=t[1].dims,n=i.length,s=tt.normalizeAxis(r.gatherAxis,n),o=tt.normalizeAxis(r.quantizeAxis,n),u=i.slice(0);u.splice(s,1,...a);let l=tt.size(u),d=t[2].dataType,p=22===t[0].dataType,c=[{type:12,data:l},{type:12,data:o},{type:12,data:s},{type:12,data:r.blockSize},...td(...t.map((t,r)=>t.dims),u)];return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${t.filter((t,r)=>1!==r).map(t=>t.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(t,r)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:r=>{let n=ty("data",t[0].dataType,t[0].dims.length),o=ty("inputIndices",t[1].dataType,t[1].dims.length),l=ty("scales",t[2].dataType,t[2].dims.length),c=t.length>3?ty("zeroPoint",t[3].dataType,t[3].dims.length):void 0,h=t_("output",d,u.length),f=[n,o,l];return c&&f.push(c),`
        ${r.registerUniforms([{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}]).declareVariables(...f,h)}
        ${r.mainStart()}
        let output_indices = ${h.offsetToIndices("global_idx")};
        var indices_indices = ${o.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${h.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${o.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${h.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${n.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${h.indicesGet("output_indices","i")};
          ${n.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${o.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[s]};
        }
        ${n.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${h.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${n.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${n.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${n.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${l.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${l.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${l.getByIndices("scale_indices")};
        ${c?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${c.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${c.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${tl(d)}(quantized_data - zero_point) * scale;
        ${h.setByOffset("global_idx","dequantized_data")};
    }`}}})(t.inputs,r))},iZ=t=>e9({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),nQ=W(()=>{nd(),ny(),ng(),n_(),iX=t=>e9({axis:t.axis}),iY=(t,r)=>{(t=>{if(!t||2!==t.length)throw Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)})(t.inputs),t.compute(((t,r)=>{let i=t[0].dims,a=t[0].dataType,n=i.length,s=t[1].dims,o=t[1].dataType,u=tt.normalizeAxis(r.axis,n),l=i[u],d=s.slice(0),p=tt.size(d),c=ty("input",a,n),h=ty("indicesInput",o,s.length),f=t_("output",a,d.length),m=[{type:12,data:p},{type:6,data:l},{type:12,data:u}];return m.push(...td(i,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:t=>`
      ${t.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,h,f)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}})(t.inputs,r))}}),nZ=W(()=>{nd(),ny(),n_(),iJ=t=>({transA:t.transA,transB:t.transB,alpha:t.alpha,beta:t.beta,cacheKey:`${t.transA};${t.transB};${1===t.alpha}`}),i0=(t,r)=>{(t=>{if(!t)throw Error("Input is missing");if(t.length<2||t.length>3)throw Error("Invaid input number.");if(3===t.length&&t[2].dims.length>2)throw Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||3===t.length&&t[0].dataType!==t[2].dataType)throw Error("Input types are mismatched")})(t.inputs),t.compute(((t,r)=>{let i=t[0].dims.slice(),a=t[1].dims.slice(),[n,s,o]=ti.getShapeOfGemmResult(i,r.transA,a,r.transB,3===t.length?t[2].dims:void 0),u=[n,s];if(!u)throw Error("Can't use gemm on the given tensors");let l=Math.ceil(s/16),d=Math.ceil(n/16),p=(tt.size(u),[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:1,data:r.alpha},{type:1,data:r.beta}]),c=["type","type"];return 3===t.length&&(p.push(...td(t[2].dims)),c.push("rank")),p.push(...td(u)),{name:"GemmShared",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:l*d},programUniforms:p}),getShaderSource:i=>{let a=ty("a",t[0].dataType,t[0].dims),n=ty("b",t[1].dataType,t[1].dims),s=null,o=[a,n];3===t.length&&(s=ty("c",t[2].dataType,t[2].dims.length),o.push(s));let l=t_("output",t[0].dataType,u.length);o.push(l);let d="",p="";r.transA&&r.transB?(p=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):r.transA&&!r.transB?(p=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!r.transA&&r.transB?(p=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):r.transA||r.transB||(p=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let c=1===r.alpha?"":"value *= uniforms.alpha;";return`
  ${i.registerUniforms([{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}]).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${a.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${n.type.storage}, 16>, 16>;
  ${i.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${l.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${p}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${d}
      }
      workgroupBarrier();
    }

    ${c}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${null!=s?`let cOffset = ${s.broadcastedIndicesToOffset("vec2(m, n)",l)}; value += ${l.type.value}(uniforms.beta) * ${s.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}})(t.inputs,r))}}),nX=W(()=>{nd(),ny(),ng(),n_(),[i1,i2,i3,i4]=[0,1,2,3],i6=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,i8=(t,r)=>{(t=>{if(4!==t[0].dims.length)throw Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw Error("grid batch size must match input batch size")})(t.inputs),t.compute(((t,r)=>{let i=ty("x",t[0].dataType,t[0].dims.length),a=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],n=ty("grid",t[1].dataType,a.length,2),s=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];"NHWC"===r.format&&(s=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[i1,i2,i3,i4]=[0,3,1,2]);let o=t_("output",t[0].dataType,s.length),u=i.type.value,l=[{type:12,data:tt.size(s)},...td(t[0].dims,a,s)];return{name:"GridSample",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:["type","type"]},getRunData:t=>{let r=tt.size(s);return{outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:l}},getShaderSource:t=>{let a,s;return`
  ${t.registerUniform("output_size","u32").declareVariables(i,n,o)}
  ${i6}
  ${(t=>`
  fn gs_bicubic_interpolate(p: mat4x4<${t}>, x: f32, y: f32) -> ${t} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${t}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`)(u)}
  ${a=r,`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${0===a.alignCorners?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`}
  ${s=r,`
  ${"reflection"===s.paddingMode?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`}
  ${((t,r,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${r} {
     var pixel = ${r}(0);
     var indices = vec4<u32>(0);
     indices[${i1}] = batch;
     indices[${i2}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${i3}] = u32(r);
            indices[${i4}] = u32(c);
          }
        `;case"border":return`
          indices[${i3}] = u32(clamp(r, 0, H - 1));
          indices[${i4}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${i3}] = gs_reflect(r, border[1], border[3]);
          indices[${i4}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`)(i,u,r)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${i3}]);
      let W_in = i32(uniforms.x_shape[${i4}]);

      ${0===r.alignCorners?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${i1}], indices[${i3}], indices[${i4}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${((t,r,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${i1}], indices[${i2}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${i1}], indices[${i2}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${i1}], indices[${i2}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${i1}], indices[${i2}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${i1}], indices[${i2}], border);

          let dx2 = ${r}(f32(x2) - x);
          let dx1 = ${r}(x - f32(x1));
          let dy2 = ${r}(f32(y2) - y);
          let dy1 = ${r}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${r}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${i1}], indices[${i2}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${i.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`)(o,u,r)}
  }`}}})(t.inputs,r))},i5=t=>e9({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),nY=W(()=>{nd(),ny(),ng(),nf(),nx(),n_(),nb(),i9=(t,r)=>t.length>r&&t[r].dims.length>0?t[r]:void 0,i7=t=>e9({...t}),ae=e9({perm:[0,2,1,3]}),at=(t,r,i,a,n,s,o,u)=>{let l=s;if(!(o&&tt.size(o.dims)>0))return 3===s.dims.length&&(l=s.reshape([r,a,i,n])),1===i||1===a?l:t.compute(tS(l,ae.perm),{inputs:[l],outputs:[-1]})[0];if(1===a)throw Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=(l=((t,r,i,a,n,s,o)=>{let u=[a,n,s],l=tt.size(u),d=[{type:12,data:l},{type:12,data:o},{type:12,data:s}];return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:t=>{let a=t_("qkv_with_bias",r.dataType,u),n=ty("qkv",r.dataType,u),s=ty("bias",i.dataType,u);return`
  ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}]).declareVariables(n,s,a)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[r,i],outputs:[-1]})[0]})(t,s,o,r,a,i*n,u)).reshape([r,a,i,n]),1===i||1===a?l:t.compute(tS(l,ae.perm),{inputs:[l],outputs:[-1]})[0]},ar=(t,r)=>{let i=((t,r)=>{let i,a=t[0],n=i9(t,1),s=i9(t,2),o=i9(t,3),u=i9(t,4),l=i9(t,5),d=i9(t,6),p=i9(t,7);if(3!==a.dims.length&&5!==a.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let c=a.dims[0],h=a.dims[1],f=3===a.dims.length?a.dims[2]:r.numHeads*a.dims[4],m=h,g=0,y=0,_=Math.floor(f/r.numHeads);if(d&&p&&tt.size(d.dims)&&tt.size(p.dims)){if(4!==d.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==c||d.dims[1]!==r.numHeads||d.dims[3]!==_)throw Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==r.numHeads||p.dims[3]!==_)throw Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(4!==p.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');g=d.dims[2],y=d.dims[2]}else if(d&&tt.size(d.dims)||p&&tt.size(p.dims))throw Error('Input "past_key" and "past_value" shall be both present or both absent');if(n&&tt.size(n.dims)>0){if(3!==a.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==n.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===n.dims.length){if(n.dims[2]!==a.dims[2])throw Error('Input "query" and "key" shall have same dim 2 (hidden_size)');i=2,m=n.dims[1]}else if(5===n.dims.length){if(n.dims[2]!==r.numHeads||2!==n.dims[3]||n.dims[4]!==_)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw Error('Expect "value" be none when "key" has packed kv format.');i=5,m=n.dims[1]}else{if(n.dims[1]!==r.numHeads||n.dims[3]!==_)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');i=0,m=n.dims[2]}}else{if(5!==a.dims.length)throw Error('Input "query" is expected to have 5 dimensions when key is empty');if(a.dims[2]!==r.numHeads||3!==a.dims[3])throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');i=3}if(o&&tt.size(o.dims)>0){if(1!==o.dims.length)throw Error('Input "bias" is expected to have 1 dimension');if(n&&5===n.dims.length&&2===n.dims[3])throw Error("bias is not allowed for packed kv.")}let b=g+m,$=0;if(u&&tt.size(u.dims)>0){$=8;let t=u.dims;throw 1===t.length?t[0]===c?$=1:t[0]===3*c+2&&($=3):2===t.length&&t[0]===c&&t[1]===b&&($=5),8===$?Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):Error("Mask not supported")}let v=!1,w=f;if(s&&tt.size(s.dims)>0){if(3!==s.dims.length&&4!==s.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==s.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===s.dims.length){if(m!==s.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=s.dims[2]}else{if(m!==s.dims[2])throw Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');w=s.dims[1]*s.dims[3],v=!0}}if(u&&tt.size(u.dims)>0)throw Error("Key padding mask is not supported");if(l&&tt.size(l.dims)>0){if(4!==l.dims.length)throw Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==r.numHeads||l.dims[2]!==h||l.dims[3]!==b)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:w,headSize:_,vHeadSize:Math.floor(w/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:$,scale:r.scale,broadcastResPosBias:!1,passPastInKv:v,qkvFormat:i}})(t.inputs,r),a=t.inputs[0],n=i9(t.inputs,1),s=i9(t.inputs,2),o=i9(t.inputs,3),u=i9(t.inputs,4),l=i9(t.inputs,5),d=i9(t.inputs,6),p=i9(t.inputs,7);if(5===a.dims.length)throw Error("Packed QKV is not implemented");if(n?.dims.length===5)throw Error("Packed KV is not implemented");let c=n&&s&&4===n.dims.length&&4===s.dims.length,h=at(t,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,a,o,0);if(c)return t7(t,h,n,s,u,void 0,d,p,l,i);if(!n||!s)throw Error("key and value must be provided");let f=at(t,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,n,o,i.hiddenSize),m=at(t,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,s,o,2*i.hiddenSize);t7(t,h,f,m,u,void 0,d,p,l,i)}}),nJ=W(()=>{nd(),ny(),ng(),n_(),ai=(t,r)=>{let i=t[0].dims,a=tt.size(i),n=t[0].dataType,s=tt.normalizeAxis(r.axis,i.length),o=Array(r.numOutputs),u=ty("input",n,i.length),l=Array(r.numOutputs),d=[],p=[],c=0,h=[{type:12,data:a}];for(let a=0;a<r.numOutputs;a++){c+=r.splitSizes[a],l[a]=c;let u=i.slice();u[s]=r.splitSizes[a],p.push(u),o[a]=t_(`output${a}`,n,u.length),d.push({dims:p[a],dataType:t[0].dataType})}return h.push({type:12,data:l},...td(i,...p)),{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:t=>`
  ${t.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...o)}
  ${(t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${tm("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`)(l.length)}
  ${(t=>{let r=t.length,i=[];for(let a=0;a<r;++a){let n=t[a].setByIndices("indices","input[global_idx]");1===r?i.push(n):0===a?i.push(`if (output_number == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`})(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${tm("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},aa=(t,r)=>{(t=>{if(!t||t.length<1)throw Error("too few inputs")})(t.inputs);let i=1===t.inputs.length?r:((t,r)=>{let i=[],a=r.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(t=>i.push(Number(t))),a=i.length),e9({numOutputs:a,axis:r.axis,splitSizes:i})})(t.inputs,r);t.compute(ai(t.inputs,i),{inputs:[0]})},an=t=>{let r=t.axis,i=t.splitSizes,a=t.numOutputs<0?i.length:t.numOutputs;if(a!==i.length)throw Error("numOutputs and splitSizes lengh must be equal");return e9({axis:r,numOutputs:a,splitSizes:i})}}),n0=W(()=>{ng(),nx(),nY(),nJ(),nb(),as=e9({perm:[0,2,1,3]}),ao=(t,r,i)=>{let a=r,n=i.kvNumHeads;return 3===r.dims.length&&0!==i.kvSequenceLength&&(a=r.reshape([i.batchSize,i.kvSequenceLength,n,i.headSize]),a=t.compute(tS(a,as.perm),{inputs:[a],outputs:[-1]})[0]),a},au=(t,r)=>{let i=((t,r)=>{if(r.doRotary)throw Error("GroupQuerryAttention do_rotary attribute is not supported");if(r.doRotary&&t.length<=7)throw Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=t[0],a=t[1],n=t[2],s=t[3],o=t[4];if(-1!==r.localWindowSize)throw Error("Local attention is not supported");if(0!==r.softcap)throw Error("Softcap is not supported");if(0!==r.rotaryInterleaved)throw Error("Rotary interleaved is not supported");if(r.smoothSoftmax)throw Error("Smooth softmax is not supported");if(3!==i.dims.length&&5!==i.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let u=i.dims[0],l=i.dims[1],d=3===i.dims.length?i.dims[2]:r.numHeads*i.dims[4],p=l,c=0,h=!a||0===a.dims.length,f=Math.floor(h?d/(r.numHeads+2*r.kvNumHeads):d/r.numHeads);h&&(d=f*r.numHeads);let m=s&&0!==s.dims.length,g=o&&0!==o.dims.length;if(m&&4===s.dims.length&&s.dims[0]===u&&s.dims[1]!==r.kvNumHeads&&s.dims[2]===r.kvNumHeads&&s.dims[3]===f)throw Error("BSNH pastKey/pastValue is not supported");if(m&&g){if(4!==s.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(4!==o.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');c=s.dims[2]}else if(m||g)throw Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(a&&a.dims.length>0){if(3!==i.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==a.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===a.dims.length){if(i.dims[2]%a.dims[2]!=0)throw Error('Dimension 2 of "query" should be a multiple of "key"');p=a.dims[1]}else if(5===a.dims.length){if(a.dims[2]!==r.numHeads||2!==a.dims[3]||a.dims[4]!==f)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw Error('Expect "value" be none when "key" has packed kv format.');p=a.dims[1]}else{if(a.dims[1]!==r.numHeads||a.dims[3]!==f)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=a.dims[2]}}else{if(3!==i.dims.length&&5!==i.dims.length)throw Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(5===i.dims.length&&(i.dims[2]!==r.numHeads||3!==i.dims[3]))throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let _=!1,b=r.kvNumHeads?f*r.kvNumHeads:d;if(n&&n.dims.length>0){if(3!==n.dims.length&&4!==n.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==n.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===n.dims.length){if(p!==n.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=n.dims[2]}else{if(p!==n.dims[2])throw Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');b=n.dims[1]*n.dims[3],_=!0}}let $=t.length>4?t[5]:void 0;if($&&1!==$.dims.length&&$.dims[0]!==u)throw Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:c,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:b,headSize:f,vHeadSize:Math.floor(b/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:r.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:y}})(t.inputs,r);if(5===t.inputs[0].dims.length)throw Error("Packed QKV is not implemented");if(t.inputs[1]?.dims.length===5)throw Error("Packed KV is not implemented");let a=t.inputs[0],n=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,s=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,o=t.inputs[3]&&0!==t.inputs[3].dims.length?t.inputs[3]:void 0,u=t.inputs[4]&&0!==t.inputs[4].dims.length?t.inputs[4]:void 0,l=t.inputs.length>4?t.inputs[5]:void 0,d=t.inputs.length>5?t.inputs[6]:void 0,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,c=e9({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,p*i.headSize,p*i.headSize]}),[h,f,m]=n||s?[a,n,s]:t.compute(ai([a],c),{inputs:[a],outputs:[-1,-1,-1]}),g=at(t,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,h,void 0,0);t7(t,g,ao(t,f,i),ao(t,m,i),void 0,void 0,o,u,void 0,i,l,d)}}),n1=W(()=>{nd(),ny(),nb(),n_(),al=(t,r,i,a,n,s,o,u)=>{let l=tp(s),d=1===l?"f32":`vec${l}f`,p=1===l?"vec2f":`mat2x${l}f`,c=n*o,h=64;1===c&&(h=256);let f=[n,o,s/l],m=[n,o,2],g=[];return g.push(...td(f,m)),t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${h}`,inputDependencies:["rank","type","type"]},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:g}),getShaderSource:t=>{let n=ty("x",r.dataType,3,l),s=[n,ty("scale",i.dataType,i.dims),ty("bias",a.dataType,a.dims),t_("output",1,3,2)];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${t.declareVariables(...s)}
  ${t.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${n.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${tf("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${tf("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[r,i,a],outputs:[-1]})[0]},ad=(t,r)=>{"NHWC"===r.format?((t,r,i)=>{let a=r[0].dims,n=a[0],s=a[a.length-1],o=tt.sizeFromDimension(a,1)/s,u=tp(s),l=tt.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=!1,c=[0,a.length-1];for(let t=0;t<a.length-2;t++)p=p||1!==a[t+1],c.push(t+1);let h=(p=p&&1!==a[a.length-1])?t.compute(tS(t.inputs[0],c),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:a.length},(t,r)=>a[c[r]])),f=al(t,h,r[1],r[2],n,o,s,i.epsilon);t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:t=>{let i=tu(r[0].dataType),n=1===u?"vec2f":`mat${u}x2f`,s=t=>{let r=0===t?"x":"y",a=1===u?"f32":`vec${u}f`;switch(u){case 1:return`${i}(${a}(scale.${r}))`;case 2:return`vec2<${i}>(${a}(scale[0].${r}, scale[1].${r}))`;case 4:return`vec4<${i}>(${a}(scale[0].${r}, scale[1].${r}, scale[2].${r}, scale[3].${r}))`;default:throw Error(`Not supported compoents ${u}`)}},o=ty("input",r[0].dataType,r[0].dims,u),l=t_("output",r[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${n}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${l.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${t.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${s(0)}, ${s(1)});
  }`}},{inputs:[r[0],f]})})(t,t.inputs,r):((t,r,i)=>{let a=r[0].dims,n=a[0],s=a[1],o=tt.sizeFromDimension(a,2),u=tp(o),l=tt.size(a)/u,d=al(t,r[0],r[1],r[2],n,o,s,i.epsilon),p=[n,s,o/u],c=[n,s];t.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:["type","none"]},getRunData:()=>({outputs:[{dims:a,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...td(p,c,p)]}),getShaderSource:t=>{let i=ty("x",r[0].dataType,p.length,u),a=ty("scale_shift",1,c.length,2),n=t_("output",r[0].dataType,p.length,u),s=[i,a,n];return`
  ${t.registerUniform("output_size","u32").declareVariables(...s)}
  ${t.mainStart()}
  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${n.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${a.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${i.getByOffset("global_idx")} * ${n.type.value}(scale_shift.x) + ${n.type.value}(scale_shift.y);
      ${n.setByOffset("global_idx","value")};
  }`}},{inputs:[r[0],d]})})(t,t.inputs,r)}}),n2=W(()=>{nd(),ny(),n_(),ap=(t,r)=>{(t=>{if(!t||t.length<2)throw Error("layerNorm requires at least 2 inputs.")})(t.inputs),t.compute(((t,r,i)=>{let a=r.simplified,n=t[0].dims,s=t[1],o=!a&&t[2],u=tt.normalizeAxis(r.axis,n.length),l=tt.sizeToDimension(n,u),d=tt.sizeFromDimension(n,u),p=tt.size(s.dims),c=o?tt.size(o.dims):0;if(p!==d||o&&c!==d)throw Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${c}`);let h=[];for(let t=0;t<n.length;++t)t<u?h.push(n[t]):h.push(1);let f=tp(d),m=["type","type"],g=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/f)},{type:1,data:r.epsilon}];o&&m.push("type");let y=i>1,_=i>2,b=[{dims:n,dataType:t[0].dataType}];return y&&b.push({dims:h,dataType:1}),_&&b.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${i};${a}`,inputDependencies:m},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:r=>{let i=tu(t[0].dataType),u=[ty("x",t[0].dataType,t[0].dims,f),ty("scale",s.dataType,s.dims,f)];return o&&u.push(ty("bias",o.dataType,o.dims,f)),u.push(t_("output",t[0].dataType,n,f)),y&&u.push(t_("mean_data_output",1,h)),_&&u.push(t_("inv_std_output",1,h)),`
  ${r.registerUniforms([{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}]).declareVariables(...u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${tc("f32",f)};
    var mean_square_vector = ${tc("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${th(i,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${tf("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${tf("mean_square_vector",f)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${th(i,f,"x[j + offset]")};
      let f32scale = ${th(i,f,"scale[j]")};
      output[j + offset] = ${u[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${th(i,f,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`}}})(t.inputs,r,t.outputCount))}}),n3=W(()=>{ny(),nR(),nB(),ac=t=>{(t=>{if(!t||2!==t.length)throw Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw Error("shared dimension does not match.")})(t.inputs);let r=te.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!r)throw Error("Can't use matmul on the given tensors");let i=r[r.length-1],a=t.inputs[0].dims[t.inputs[0].dims.length-1];if(i<8&&a<8)t.compute(ii(t.inputs,{activation:""},r));else{let n=r[r.length-2],s=tt.size(t.inputs[0].dims.slice(0,-2)),o=tt.size(t.inputs[1].dims.slice(0,-2));if(1!==s&&1===n&&1===o){let n=t.inputs[0].reshape([1,s,a]),o=t.inputs[1].reshape([1,a,i]),u=[1,s,i],l=[n,o];t.compute(iu(l,{activation:""},r,u),{inputs:l})}else t.compute(iu(t.inputs,{activation:""},r))}}}),n4=W(()=>{nd(),ny(),ng(),n_(),ah=(t,r)=>{((t,r)=>{if(t.length<3||t.length>4)throw Error("MatMulNBits requires 3 or 4 inputs");let i=t[0],a=i.dims.length;if(i.dims[a-1]!==r.k)throw Error("The last dim of input shape does not match the k value");let n=Math.floor((r.k+r.blockSize-1)/r.blockSize),s=r.blockSize/8*r.bits,o=t[1];if(!tt.areEqual(o.dims,[r.n,n,s]))throw Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=t[2].dims;if(tt.size(u)!==r.n*n)throw Error("scales input size error.");if(4===t.length){let i=t[3].dims,a=r.bits>4?r.n*n:r.n*Math.floor((n+1)/2);if(tt.size(i)!==a)throw Error("zeroPoints input size error.")}})(t.inputs,r),32===r.blockSize&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(((t,r)=>{let i=t[0].dims,a=i.length,n=i[a-2],s=r.k,o=r.n,u=i.slice(0,a-2),l=tt.size(u),d=t[1].dims[2]/4,p=t[0].dataType,c=tp(r.k),h=tp(d),f=u.concat([n,o]),m=o%8==0?8:o%4==0?4:1,g=128/m,y=g*h*8,_=y/c,b=y/r.blockSize,$=tt.size(f)/m,v=[],w=[l,n,s/c],x=tt.convertShape(t[1].dims).slice();x.splice(-1,1,d/h),v.push(...td(w)),v.push(...td(x)),v.push(...td(t[2].dims)),4===t.length&&v.push(...td(tt.convertShape(t[3].dims)));let S=[l,n,o];return v.push(...td(S)),{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${c};${h};${g};${m}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:p}],dispatchGroup:{x:$},programUniforms:v}),getShaderSource:i=>{let a=w.length,n=ty("a",t[0].dataType,a,c),s=ty("b",12,x.length,h),o=ty("scales",t[2].dataType,t[2].dims.length),u=[n,s,o],l=4===t.length?ty("zero_points",12,t[3].dims.length):void 0;l&&u.push(l);let d=S.length,p=t_("output",t[0].dataType,d),f=tu(t[0].dataType);return`
        var<workgroup> sub_a: array<${n.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${p.type.value}, ${g}>, ${m}>;
        ${i.declareVariables(...u,p)}
        ${i.mainStart([g,m,1])}
          let output_indices = ${p.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${b} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${n.getByIndices(`${n.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${n.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${b} + local_id.x;
            ${l?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${f}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${f}(8);`}
            let scale = ${o.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${s.getByIndices(`${s.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/c};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${(()=>{switch(c){case 1:return`
          let a_data0 = vec4<${f}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${f}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${f}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${f}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${c}-component is not supported.`)}})()}
              let b_value = ${1===h?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${f}>(${Array.from({length:4},(t,r)=>`${f}(b_value_lower[${r}]), ${f}(b_value_upper[${r}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${f}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(t,r)=>`dot(a_data${r}, b_dequantized_values[${r}])`).join(" + ")};
              word_offset += ${8/c};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${p.type.value} = ${p.type.value}(0);
            for (var b = 0u; b < ${g}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${p.setByIndices(`${p.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`}}})(t.inputs,r)):t.compute(((t,r)=>{let i=t[0].dims,a=i.length,n=i[a-2],s=r.k,o=r.n,u=i.slice(0,a-2),l=tt.size(u),d=t[1].dims[2]/4,p=t[0].dataType,c=tp(r.k),h=tp(d),f=tp(o),m=u.concat([n,o]),g=n>1&&o/f%2==0?2:1,y=tt.size(m)/f/g,_=[],b=[l,n,s/c],$=tt.convertShape(t[1].dims).slice();$.splice(-1,1,d/h),_.push(...td(b)),_.push(...td($)),_.push(...td(t[2].dims)),4===t.length&&_.push(...td(tt.convertShape(t[3].dims)));let v=[l,n,o/f];return _.push(...td(v)),{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${c};${h};${f};${g};64`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:y},programUniforms:_}),getShaderSource:i=>{let a=b.length,n=ty("a",t[0].dataType,a,c),s=ty("b",12,$.length,h),o=ty("scales",t[2].dataType,t[2].dims.length),u=[n,s,o],l=4===t.length?ty("zero_points",12,t[3].dims.length):void 0;l&&u.push(l);let p=v.length,m=t_("output",t[0].dataType,p,f),y=tu(t[0].dataType),_=(()=>{switch(c){case 1:return`array<${y}, 8>`;case 2:return`mat4x2<${y}>`;case 4:return`mat2x4<${y}>`;default:throw Error(`${c}-component is not supported.`)}})();return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${64*g}>;
        ${i.declareVariables(...u,m)}
        ${i.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/c};
            ${(()=>{let t=`
            var col_index = col * ${f};
            ${l?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${y}(8);`}
            `;for(let r=0;r<f*g;r++)t+=`
            let scale${r} = ${o.getByOffset("col_index * nBlocksPerCol + block")};
            ${l?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${r} = ${y}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return t})()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${(()=>{let t=`col_index = col * ${f};`;for(let r=0;r<f*g;r++)t+=`
            let b${r}_data = ${s.getByIndices(`${s.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return t+`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`})()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${(()=>{let t=`
          // reuse a data
            var input_offset = ${n.indicesToOffset(`${n.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/c}; j++) {
              a_data[j] = ${n.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let r=0;r<f*g;r++)t+=`
            b_value = ${1===h?`b${r}_data`:`b${r}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(t,r)=>`${y}(b_value_lower[${r}]), ${y}(b_value_upper[${r}])`).join(", ")});
            b_dequantized_values = ${1===c?`${_}(${Array.from({length:8},(t,i)=>`(b_quantized_values[${i}] - ${l?`zero_point${r}`:"zero_point"}) * scale${r}`).join(", ")});`:`(b_quantized_values - ${_}(${Array(8).fill(`${l?`zero_point${r}`:"zero_point"}`).join(",")})) * scale${r};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor(r/f)}]${f>1?`[${r%f}]`:""} += ${Array.from({length:8/c},(t,r)=>`${1===c?`a_data[${r}] * b_dequantized_values[${r}]`:`dot(a_data[${r}], b_dequantized_values[${r}])`}`).join(" + ")};
          `;return t})()}
                word_offset += ${8/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`}}})(t.inputs,r))},af=t=>e9(t)}),n6=W(()=>{nd(),ny(),n_(),am=(t,r)=>{(t=>{if(!t||t.length<1)throw Error("Too few inputs");if(1!==t[0].dataType&&10!==t[0].dataType)throw Error("Input type must be float or float16.");if(t.length>=2){let r=2*t[0].dims.length===t[1].dims[0];if(4===t.length&&(r=2*t[3].dims[0]===t[1].dims[0]),!r)throw Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}})(t.inputs);let i=((t,r)=>{if(!(t.length>1))return r;{let i=t[1].getBigInt64Array(),a=t.length>=3&&t[2].data?10===t[2].dataType?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,n=t[0].dims.length,s=new Int32Array(2*n).fill(0);if(t.length>=4){let r=t[3].getBigInt64Array();for(let t=0;t<r.length;t++)s[Number(r[t])]=Number(i[t]),s[Number(r[t])+n]=Number(i[t+r.length])}else i.forEach((t,r)=>s[Number(r)]=Number(t));let o=[];return s.forEach(t=>o.push(t)),{mode:r.mode,value:a,pads:o}}})(t.inputs,r);t.compute(((t,r)=>{let i=tt.padShape(t[0].dims.slice(),r.pads),a=t[0].dims,n=[{type:12,data:tt.size(i)},{type:6,data:r.pads}],s=t.length>=3&&t[2].data;return 0===r.mode&&n.push({type:s?t[2].dataType:1,data:r.value}),n.push(...td(t[0].dims,i)),{name:"Pad",shaderCache:{hint:`${r.mode}${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(tt.size(i)/64)},programUniforms:n}),getShaderSource:n=>{let o=t_("output",t[0].dataType,i.length),u=ty("x",t[0].dataType,a.length),l=u.type.value,d=((t,r,i)=>{switch(i.mode){case 0:return((t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
            k = i32(${t.indicesGet("indices",n)}) - ${tm("uniforms.pads",n,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${tm("uniforms.x_shape",n,r)})) {
              break;
            }
            offset += k * i32(${tm("uniforms.x_strides",n,r)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `})(t,r,i.pads.length);case 1:return((t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
                k = i32(${t.indicesGet("indices",n)}) - ${tm("uniforms.pads",n,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${tm("uniforms.x_shape",n,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${tm("uniforms.x_shape",n,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${tm("uniforms.x_strides",n,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `})(t,r,i.pads.length);case 2:return((t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
                k = i32(${t.indicesGet("indices",n)}) - ${tm("uniforms.pads",n,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${tm("uniforms.x_shape",n,r)})) {
                  k = i32(${tm("uniforms.x_shape",n,r)}) - 1;
                }
                offset += k * i32(${tm("uniforms.x_strides",n,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `})(t,r,i.pads.length);case 3:return((t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
                k = i32(${t.indicesGet("indices",n)}) - ${tm("uniforms.pads",n,i)};
                if (k < 0)  {
                  k += i32(${tm("uniforms.x_shape",n,r)}]);
                }
                if (k >= i32(${tm("uniforms.x_shape",n,r)})) {
                  k -= i32(${tm("uniforms.x_shape",n,r)});
                }
                offset += k * i32(${tm("uniforms.x_strides",n,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `})(t,r,i.pads.length);default:throw Error("Invalid mode")}})(o,a.length,r),p=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return 0===r.mode&&p.push({name:"constant_value",type:s?l:"f32"}),`
            ${n.registerUniforms(p).declareVariables(u,o)}
            ${n.mainStart()}
            ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${o.offsetToIndices("global_idx")};

            var value = ${l}(0);
            ${d}
            output[global_idx] = value;
        }`}}})(t.inputs,i),{inputs:[0]})}}),n8=W(()=>{eu(),nd(),ny(),n_(),ag=t=>{if(c.webgpu.validateInputContent&&(!t||1!==t.length))throw Error("Pool ops requires 1 input.")},ay=(t,r,i)=>{let a="NHWC"===r.format,n=t.dims.slice();a&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(r,"dilations"),o=r.kernelShape.slice(),u=r.strides.slice(),l=s?r.dilations.slice():[],d=r.pads.slice();tr.adjustPoolAttributes(i,n,o,u,l,d);let p=tr.computePoolOutputShape(i,n,u,l,o,d,r.autoPad),c=Object.assign({},r);s?Object.assign(c,{kernelShape:o,strides:u,pads:d,dilations:l,cacheKey:r.cacheKey}):Object.assign(c,{kernelShape:o,strides:u,pads:d,cacheKey:r.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[c,a?h:p]},a_=(t,r)=>{let i="NHWC"===r.format,a=[{type:12,data:tt.size(t)},{type:12,data:tt.size(r.kernelShape)}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let t=r.kernelShape[r.kernelShape.length-1],i=r.strides[r.strides.length-1],s=r.pads[r.pads.length/2-1],o=r.pads[r.pads.length-1],u=!!(s+o);a.push({type:12,data:t},{type:12,data:i},{type:12,data:s},{type:12,data:o}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let l=!1;if(2===r.kernelShape.length){let t=r.kernelShape[r.kernelShape.length-2],i=r.strides[r.strides.length-2],s=r.pads[r.pads.length/2-2],o=r.pads[r.pads.length-2];l=!!(s+o),a.push({type:12,data:t},{type:12,data:i},{type:12,data:s},{type:12,data:o}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,n,!0,u,l]}{if(i)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let t=tt.computeStrides(r.kernelShape);return a.push({type:12,data:t},{type:12,data:r.pads},{type:12,data:r.strides}),n.push({name:"kernelStrides",type:"u32",length:t.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length}),[a,n,!!r.pads.reduce((t,r)=>t+r),!1,!1]}},ab=(t,r,i,a,n,s,o,u,l,d,p,c)=>{let h="NHWC"===n.format,f=r.type.value,m=t_("output",r.type.tensor,a);if(n.kernelShape.length<=2){let a="",d="",g="",y=i-(h?2:1);if(a=p?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${y}] < 0 || xIndices[${y}]
                      >= uniforms.x_shape[${y}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${s}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${s}
                }`,2===n.kernelShape.length){let t=i-(h?3:2);d=c?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${t}] = indices[${t}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${t}] < 0 || xIndices[${t}] >= uniforms.x_shape[${t}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${t}] = indices[${t}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${t.registerUniforms(l).declareVariables(r,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${u});
              var pad = 0;
              ${d}
              ${a}
              ${g}
              ${o}

              output[global_idx] = value;
            }`}{if(h)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let a=n.kernelShape.length,p=n.pads.length,c="";return c=d?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${s}
              }`:`
              }
              let x_val = x[${r.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${t.registerUniforms(l).declareVariables(r,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${a}>;

              var value = ${f}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${a-1}u; j++) {
                  offsets[j] = offset / ${tm("uniforms.kernelStrides","j",a)};
                  offset -= offsets[j] * ${tm("uniforms.kernelStrides","j",a)};
                }
                offsets[${a-1}] = offset;

                isPad = false;
                for (var j = ${i-a}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${tm("uniforms.strides",`j - ${i-a}u`,a)}
                    + offsets[j - ${i-a}u] - ${tm("uniforms.pads","j - 2u",p)};
                  ${c}
              }
              ${o}

              output[global_idx] = value;
            }`}},a$=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,av=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),aw=(t,r,i,a)=>{let[n,s]=ay(r,a,i),o=ty("x",r.dataType,r.dims.length),u=o.type.value,l="";n.countIncludePad?l+=`value /= ${u}(uniforms.kernelSize);`:l+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[d,p,c,h,f]=a_(s,n);return d.push(...td(r.dims,s)),{name:t,shaderCache:{hint:`${a.cacheKey};${c};${h};${f}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(tt.size(s)/64)},programUniforms:d}),getShaderSource:t=>ab(t,o,r.dims.length,s.length,n,"value += x_val;",l,0,p,c,h,f)}},ax=t=>{let r=0!==t.count_include_pad,i=av(t);if(0!==i.ceilMode)throw Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:r,...i,cacheKey:""};return{...a,cacheKey:(t=>`${a$(t)};${t.countIncludePad}`)(a)}},aS=(t,r)=>{ag(t.inputs),t.compute(aw("AveragePool",t.inputs[0],!1,r))},ak={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},aT=t=>{let r=t.format;return{format:r,...ak,cacheKey:r}},aI=(t,r)=>{ag(t.inputs),t.compute(aw("GlobalAveragePool",t.inputs[0],!0,r))},aC=(t,r,i,a)=>{let[n,s]=ay(r,a,i),o=`
      value = max(x_val, value);
    `,u=ty("x",r.dataType,r.dims.length),[l,d,p,c,h]=a_(s,n);return l.push(...td(r.dims,s)),{name:t,shaderCache:{hint:`${a.cacheKey};${p};${c};${h}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(tt.size(s)/64)},programUniforms:l}),getShaderSource:t=>ab(t,u,r.dims.length,s.length,n,o,"",10===r.dataType?-65504:-1e5,d,p,c,h)}},aE=(t,r)=>{ag(t.inputs),t.compute(aC("MaxPool",t.inputs[0],!1,r))},az=t=>{let r=t.storage_order,i=t.dilations,a=av(t);if(0!==r)throw Error("column major storage order is not yet supported for MaxPool");if(0!==a.ceilMode)throw Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:r,dilations:i,...a,cacheKey:""};return{...n,cacheKey:(t=>`${a$(t)};${t.storageOrder};${t.dilations}`)(n)}},aA=t=>{let r=t.format;return{format:r,...ak,cacheKey:r}},aO=(t,r)=>{ag(t.inputs),t.compute(aC("GlobalMaxPool",t.inputs[0],!0,r))}}),n5=W(()=>{nd(),ny(),ng(),n_(),aR=(t,r)=>{((t,r)=>{if(t.length<2||t.length>3)throw Error("DequantizeLinear requires 2 or 3 inputs.");if(3===t.length&&t[1].dims===t[2].dims)throw Error("x-scale and x-zero-point must have the same shape.");if(3===t.length&&t[0].dataType!==t[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(6===t[0].dataType&&t.length>2)throw Error("In the case of dequantizing int32 there is no zero point.");if(0!==t[1].dims.length&&1!==t[1].dims.length&&t[1].dims.length!==t[0].dims.length)throw Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((r,i)=>r===t[2].dims[i]).reduce((t,r)=>t&&r,!0))throw Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(0===t[1].dims.length||1===t[1].dims.length&&1===t[1].dims[0])throw Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((i,a)=>a===r.axis||i===t[0].dims[a]).reduce((t,r)=>t&&r,!0))throw Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw Error("For block qunatization the scale input rank must be the same as the x rank.");let i=t[0].dims[r.axis],a=t[1].dims[r.axis];if(r.blockSize<Math.ceil(i/a)||r.blockSize>Math.ceil(i/(a-1)-1))throw Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}})(t.inputs,r),t.compute(((t,r)=>{let i=tt.normalizeAxis(r.axis,t[0].dims.length),a=t[0].dataType,n=3===a,s=t[0].dims,o=t[1].dataType,u=tt.size(s),l=3===a||2===a,d=l?[Math.ceil(tt.size(t[0].dims)/4)]:t[0].dims,p=t[1].dims,c=t.length>2?t[2]:void 0,h=c?l?[Math.ceil(tt.size(c.dims)/4)]:c.dims:void 0,f=0===p.length||1===p.length&&1===p[0],m=!1===f&&1===p.length,g=tp(u),y=f&&(!l||4===g),_=y?g:1,b=ty("input",l?12:a,d.length,y&&!l?g:1),$=ty("scale",o,p.length),v=c?ty("zero_point",l?12:a,h.length):void 0,w=t_("output",o,s.length,_),x=[b,$];v&&x.push(v);let S=[d,p];c&&S.push(h);let k=[{type:12,data:u/_},{type:12,data:i},{type:12,data:r.blockSize},...td(...S,s)];return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getShaderSource:t=>`
      ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}]).declareVariables(...x,w)}
      ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${w.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${b.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${1===_?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${b.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${$.getByOffset("0")}`:m?`
            let scale_index = ${w.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${$.getByOffset("scale_index")};`:`
            var scale_indices: ${$.type.indices} = output_indices;
            let index = ${$.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${$.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${$.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${v?f?l?`
                let zero_point_input = ${v.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${v.getByOffset("0")}`:m?l?`
                let zero_point_index = ${w.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${v.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${w.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${v.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${$.indicesToOffset("scale_indices")};
                let zero_point_input = ${v.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${v.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":b.type.value}(0);`};
      // Compute and write output
      ${w.setByOffset("global_idx",`${w.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:s,dataType:o}],dispatchGroup:{x:Math.ceil(u/_/64),y:1,z:1},programUniforms:k})}})(t.inputs,r))},aB=t=>e9({axis:t.axis,blockSize:t.blockSize})}),n9=W(()=>{eu(),nd(),n_(),aN=t=>{let r=0,i=0,a=0;6===t.inputs[0].dataType?(r=t.inputs[0].getInt32Array()[0],i=t.inputs[1].getInt32Array()[0],a=t.inputs[2].getInt32Array()[0]):1===t.inputs[0].dataType&&(r=t.inputs[0].getFloat32Array()[0],i=t.inputs[1].getFloat32Array()[0],a=t.inputs[2].getFloat32Array()[0]),c.webgpu.validateInputContent&&((t,r,i)=>{if(t===r||t<r&&i<0||t>r&&i>0)throw Error("Range these inputs' contents are invalid.")})(r,i,a),t.compute(((t,r,i,a)=>{let n=Math.abs(Math.ceil((r-t)/i)),s=[n],o=[{type:12,data:n},{type:a,data:t},{type:a,data:i},...td(s)];return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:t=>{let r=t_("output",a,s.length),i=r.type.value;return`
        ${t.registerUniforms([{name:"outputSize",type:"u32"},{name:"start",type:i},{name:"delta",type:i}]).declareVariables(r)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${i}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}})(r,i,a,t.inputs[0].dataType),{inputs:[]})}}),n7=W(()=>{nd(),ny(),ng(),n_(),aD=t=>e9({reduction:t.reduction}),aM=(t,r)=>{t.compute(((t,r)=>{let i=t[0].dims,a=t[1].dims,n=Math.ceil(tt.size(a)/1),s=a[a.length-1],o=tt.sizeFromDimension(i,s),u=[{type:12,data:n},{type:12,data:s},{type:12,data:o},...td(t[1].dims,t[2].dims,i)];return{name:"ScatterND",shaderCache:{hint:`${r.cacheKey}_${r.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u}),getShaderSource:n=>{let s=ty("indices",t[1].dataType,t[1].dims.length),o=ty("updates",t[2].dataType,t[2].dims.length,1),u="none"!==r.reduction&&""!==r.reduction?tb("output",t[0].dataType,i.length):t_("output",t[0].dataType,i.length,1);return`
      ${n.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(s,o,u)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${"none"===r.reduction}) {
    let n = ${tt.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${"none"===r.reduction} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${1===t[0].dims.length?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${((t,r,i,a)=>{if("none"!==t&&"i32"!==a&&"u32"!==a&&"f32"!==a)throw Error(`Input ${a} is not supported with reduction ${t}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${r}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${r}=${i};`;case"add":return"i32"===a||"u32"===a?`atomicAdd(&${r}, bitcast<${a}>(${i}));`:`
              ${n}bitcast<${a}>(oldValue) + (${i})${s}`;case"max":return"i32"===a||"u32"===a?`atomicMax(&${r}, bitcast<${a}>(${i}));`:`
                ${n}max(bitcast<f32>(oldValue), (${i}))${s}`;case"min":return"i32"===a||"u32"===a?`atomicMin(&${r}, bitcast<${a}>(${i}));`:`${n}min(bitcast<${a}>(oldValue), (${i}))${s}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${i}))${s}`;default:throw Error(`Reduction ${t} is not supported.`)}})(r.reduction,"output[data_offset + i]","value",u.type.value)}
  }

      }`}}})(t.inputs,r),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),se=W(()=>{nd(),ny(),ng(),n_(),aP=(t,r,i,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${r});
  let whole = ${a}(big / (${i}));
  let fract = ${a}(big % (${i})) / ${a}(${i});
  return whole + fract;
`,aU=(t,r,i,a)=>t.rank>a?`
    ${t.indicesSet("input_indices",r,"channel")};
    ${t.indicesSet("input_indices",i,"batch")};
`:"",aW=(t,r)=>{let i=[],a=[],n=[],s=(t=>{let r=t.customDataBuffer;return new Uint32Array(r,r.byteOffset,1)[0]})(t);if(0!==r.antialias)throw Error("Only default value (0) for Antialias attribute is supported");((t,r,i,a,n,s)=>{let[o,u,l]=i>10?[1,2,3]:[-1,t.length>1?1:-1,-1],d=t[0].dims.length;if(o>0&&t.length>o&&t[o].dims.length>0)t[o].getFloat32Array().forEach(t=>s.push(t));else if("tf_crop_and_resize"===r.coordinateTransformMode)throw Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&t.length>u&&1===t[u].dims.length&&t[u].dims[0]>0){if(t[u].getFloat32Array().forEach(t=>a.push(t)),0!==a.length&&a.length!==d&&i>=18&&a.length!==r.axes.length)throw Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");((t,r)=>{if(t.every(t=>t>0||(()=>{throw Error("Resize requires scales input values to be positive")})),t.length>0){if("linear"===r.mode){if(2!==t.length&&3!==t.length&&(4!==t.length||1!==t[0]||1!==t[1])&&(4!==t.length||1!==t[0]||1!==t[3])&&(5!==t.length||1!==t[0]||1!==t[1]))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if("cubic"===r.mode&&2!==t.length&&(4!==t.length||1!==t[0]||1!==t[1])&&(4!==t.length||1!==t[0]||1!==t[3]))throw Error("Resize requires scales input size to be 2 or 4 for cubic mode")}})(a,r),r.axes.length>0&&((t,r,i)=>{r.every(t=>t>=0&&t<i||(()=>{throw Error("Resize requires axes input values to be positive and less than rank")}));let a=Array(i).fill(1);return r.forEach((r,i)=>a[r]=t[i]),a})(a,r.axes,d).forEach((t,r)=>a[r]=t)}if(l>0&&t.length>l&&1===t[l].dims.length&&t[l].dims[0]>0&&(t[l].getBigInt64Array().forEach(t=>n.push(Number(t))),0!==n.length&&n.length!==d&&i>=18&&n.length!==r.axes.length))throw Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(0!==a.length&&a.length!==r.axes.length)throw Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(0!==n.length&&n.length!==r.axes.length)throw Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if("u">typeof a&&"u">typeof n&&a.length>0&&n.length>d)throw Error("Resize requires only of scales or sizes to be specified")})(t.inputs,r,s,i,a,n),t.compute(((t,r,i,a,n,s)=>{let o=t.dims,u=((t,r,i)=>{let a=Array(i).fill(0).concat(Array(i).fill(1)),n=0===t.length?a:t.slice();return r.length>0?(r.forEach((t,s)=>{a[t]=n[s],a[s+i]=n[r.length+s]}),a):n})(s,r.axes,o.length),l=((t,r,i,a)=>{let n=[];if(i.length>0)if(a.length>0){if(t.forEach(t=>n.push(t)),Math.max(...a)>t.length)throw Error("axes is out of bound");a.forEach((t,r)=>n[t]=i[r])}else i.forEach(t=>n.push(t));else{if(0===r.length)throw Error("Resize requires either scales or sizes.");n=t.map((t,i)=>Math.round(t*r[i]))}return n})(o,a,n,r.axes),d=a.slice();0===a.length&&(d=o.map((t,r)=>0===t?1:l[r]/t),"stretch"!==r.keepAspectRatioPolicy&&(l=((t,r,i)=>{let a=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(t=>r[t]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(t=>r[t]),5e-324):Math.max(...r,5e-324);default:throw Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let n=t.slice();return i.axes.length>0?(i.axes.forEach(t=>r[t]=a),i.axes.forEach(i=>n[i]=Math.round(t[i]*r[i]))):(r.fill(a,0,r.length),n.forEach((t,i)=>n[i]=Math.round(t*r[i]))),n})(o,d,r)));let p=t_("output",t.dataType,l.length),c=ty("input",t.dataType,o.length),h=tt.size(l),f=o.length===l.length&&o.every((t,r)=>t===l[r]),m="tf_crop_and_resize"===r.coordinateTransformMode,g=r.extrapolationValue,y=c.type.value;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${d.length>0?"cubic"===r.mode?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${f}|${"nearest"===r.mode?o.length:o}`,inputDependencies:["rank"]},getShaderSource:t=>`
      ${f?"":`
      ${((t,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(t){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${r}(xResized) / ${r}(xScale);
          } else {
            ${aP("xResized","lengthOriginal","lengthResized",r)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${aP("xResized","lengthOriginal - 1","lengthResized - 1",r)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${t} is not supported`)}})()+"}")(r.coordinateTransformMode,y)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${((t,r)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${tm("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`)(c,o)};
              ${((t,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw Error(`Nearest mode ${t} is not supported`)}})()+"}")(r.nearestMode,i,y)};
              ${((t,r,i,a,n,s,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${tm("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${tm("uniforms.roi","i",s)};
          var roi_hi = ${tm("uniforms.roi",`i + ${i.length}`,s)};
          var input_shape_i = ${tm("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${tm("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${r.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${r.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${t.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`)(c,p,o,l,d.length,u.length,m)};
              `;case"linear":return`
              ${((t,r,i,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${i.length}> {
      var original_indices: array<${t.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${tm("uniforms.scales","i",a)};
        var roi_low = ${tm("uniforms.roi","i",n)};
        var roi_hi = ${tm("uniforms.roi",`i + ${r.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${tm("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${tm("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`)(p,o,l,d.length,u.length)};
              ${(()=>{if(2===o.length||4===o.length)return`${((t,r,i,a,n)=>{let[s,o,u,l]=2===i.length?[-1,0,1,-1]:[0,2,3,1],d=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",o,`max(0, min(row, ${i[o]} - 1))`)};
      ${t.indicesSet("input_indices",u,`max(0, min(col, ${i[u]} - 1))`)};
      ${aU(t,l,s,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${r.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${o}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${i[o]} - 1) || col < 0 || col > (${i[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${i[o]} - 1));
      col = max(0, min(col, ${i[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`})(c,p,o,m,g)}`;if(3===o.length||5===o.length)return`${((t,r,i,a,n)=>{let[s,o,u,l,d]=3===i.length?[-1,0,1,2,-1]:[0,2,3,4,1],p=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",o,`max(0, min(depth, ${i[o]} - 1))`)};
      ${t.indicesSet("input_indices",u,`max(0, min(height, ${i[u]} - 1))`)};
      ${t.indicesSet("input_indices",l,`max(0, min(width, ${i[l]} - 1))`)};
      ${aU(t,d,s,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${o}];
      var height:${p} = originalIndices[${u}];
      var width:${p} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${i[o]} - 1) || height < 0 || height > (${i[u]} - 1) || width < 0 || (width > ${i[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${i[o]} - 1));
      height = max(0, min(height, ${i[u]} - 1));
      width = max(0, min(width, ${i[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`})(c,p,o,m,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(2===o.length||4===o.length)return`${((t,r,i,a,n,s,o,u,l,d)=>{let[p,c]=2===i.length?[0,1]:[2,3],h=t.type.value,f=o=>{let c=o===p?"row":"col";return`
      fn ${c}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${r.type.indices}) -> ${h} {
        var output_index = ${r.indicesGet("output_indices",o)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[o]},
        ${a[o]}, ${i[o]}, ${s[o]}, ${s[o]} + ${i.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${i[o]} - 1))) {
          return ${l};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${c}: ${h} = originalIdx + ${h}(i);
          if (${c} < 0 || ${c} >= ${i[o]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${c} = max(0, min(${c}, ${i[o]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",o,`u32(${c})`)};
          data[i + 1] = ${o===p?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(p)};
    ${f(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${r.type.indices}) -> ${h} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `})(c,p,o,l,d,u,r.cubicCoeffA,m,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${t.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(c,p)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${2===o.length||4===o.length?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:u},...td(o,l)]})}})(t.inputs[0],r,s,i,a,n),{inputs:[0]})},aq=t=>{let r=t.antialias,i=t.axes,a=t.coordinateTransformMode,n=t.cubicCoeffA,s=0!==t.excludeOutside,o=t.extrapolationValue,u=t.keepAspectRatioPolicy,l=t.mode,d=""===t.nearestMode?"simple":t.nearestMode;return e9({antialias:r,axes:i,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:s,extrapolationValue:o,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),st=W(()=>{nd(),ny(),ng(),n_(),aL=(t,r)=>{((t,r)=>{let[i,a,n,s]=t,{numHeads:o,rotaryEmbeddingDim:u}=r;if(3!==i.dims.length&&4!==i.dims.length)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!tt.areEqual(a.dims,[])&&!tt.areEqual(a.dims,[1])&&2!==a.dims.length)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(2!==n.dims.length)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(2!==s.dims.length)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!tt.areEqual(n.dims,s.dims))throw Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&0===o)throw Error("num_heads must be provided if rotary_embedding_dim is specified");let l=i.dims[0],d=i.dims[i.dims.length-2],p=n.dims[0],c=tt.sizeFromDimension(i.dims,1)/d,h=0===u?2*n.dims[1]:c/o;if(u>h)throw Error("rotary_embedding_dim must be less than or equal to head_size");if(2===a.dims.length){if(l!==a.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==n.dims[1]&&u/2!==n.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>p)throw Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")})(t.inputs,r),t.compute(((t,r)=>{let{interleaved:i,numHeads:a,rotaryEmbeddingDim:n,scale:s}=r,o=t[0].dims[0],u=tt.sizeFromDimension(t[0].dims,1),l=t[0].dims[t[0].dims.length-2],d=u/l,p=t[2].dims[1],c=0===n?2*p:d/a,h=[o,l,d/c,c-p],f=tt.computeStrides(h),m=[{type:1,data:s},{type:12,data:h},{type:12,data:f},...3===t[0].dims.length?Array({type:12,data:[u,d,c,1]}):[],...4===t[0].dims.length?Array({type:12,data:[u,c,l*c,1]}):[],...td(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)];return{name:"RotaryEmbedding",shaderCache:{hint:e9({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:r=>{let a=ty("input",t[0].dataType,t[0].dims.length),n=ty("position_ids",t[1].dataType,t[1].dims.length),s=ty("cos_cache",t[2].dataType,t[2].dims.length),o=ty("sin_cache",t[3].dataType,t[3].dims.length),u=t_("output",t[0].dataType,t[0].dims.length);return r.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${r.declareVariables(a,n,s,o,u)}

        ${r.mainStart(ts)}
          let half_rotary_emb_dim = uniforms.${s.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${r.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${n.broadcastedIndicesToOffset("bsnh.xy",t_("",n.type.tensor,2))};
            let position_id =
                u32(${n.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${a.getByOffset("i")} * ${s.get("position_id","bsnh[3]")} -
                ${a.getByOffset("j")} * ${o.get("position_id","bsnh[3]")};
            ${u.setByOffset("i","re")}
            let im = ${a.getByOffset("i")} * ${o.get("position_id","bsnh[3]")} +
                ${a.getByOffset("j")} * ${s.get("position_id","bsnh[3]")};
            ${u.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${u.setByOffset("k",a.getByOffset("k"))}
          }
        }`},getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(tt.size(h)/ts)},programUniforms:m})}})(t.inputs,r))}}),sr=W(()=>{nd(),ny(),n_(),aV=(t,r)=>{(t=>{if(!t||t.length<3)throw Error("layerNorm requires at least 3 inputs.");let r=t[0],i=t[1],a=t[2];if(r.dataType!==i.dataType||r.dataType!==a.dataType)throw Error("All inputs must have the same data type");if(3!==r.dims.length&&2!==r.dims.length)throw Error("Input must be 2D or 3D");if(3!==i.dims.length&&2!==i.dims.length)throw Error("Skip must be 2D or 3D");let n=r.dims[r.dims.length-1],s=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==n)throw Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==s)throw Error("Skip must have the same sequence length as input");if(1!==a.dims.length)throw Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw Error("Gamma must have the same hidden size as input");if(t.length>3){let r=t[3];if(1!==r.dims.length)throw Error("Beta must be 1D");if(r.dims[r.dims.length-1]!==n)throw Error("Beta must have the same hidden size as input")}if(t.length>4){let r=t[4];if(1!==r.dims.length)throw Error("Bias must be 1D");if(r.dims[r.dims.length-1]!==n)throw Error("Bias must have the same hidden size as input")}})(t.inputs);let i=[0];t.outputCount>1&&i.push(-3),t.outputCount>2&&i.push(-3),t.outputCount>3&&i.push(3),t.compute(((t,r,i,a)=>{let n=r.simplified,s=t[0].dims,o=tt.size(s),u=s.slice(-1)[0],l=a?s.slice(0,-1).concat(1):[],d=!n&&t.length>3,p=t.length>4,c=a&&i>1,h=a&&i>2,f=i>3,m=tp(u),g=[{type:12,data:o},{type:12,data:m},{type:12,data:u},{type:1,data:r.epsilon}],y=[{dims:s,dataType:t[0].dataType}];return i>1&&y.push({dims:l,dataType:1}),i>2&&y.push({dims:l,dataType:1}),i>3&&y.push({dims:s,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${m};${c};${h};${f}`,inputDependencies:t.map((t,r)=>"type")},getShaderSource:r=>{let i=[ty("x",t[0].dataType,t[0].dims,m),ty("skip",t[1].dataType,t[1].dims,m),ty("gamma",t[2].dataType,t[2].dims,m)];d&&i.push(ty("beta",t[3].dataType,t[3].dims,m)),p&&i.push(ty("bias",t[4].dataType,t[4].dims,m)),i.push(t_("output",t[0].dataType,s,m)),c&&i.push(t_("mean_output",1,l)),h&&i.push(t_("inv_std_output",1,l)),f&&i.push(t_("input_skip_bias_sum",t[0].dataType,s,m));let a=tu(t[0].dataType),o=tu(1,m);return`

      ${r.registerUniforms([{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}]).declareVariables(...i)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${r.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":a+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${f?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${th(a,m,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${tf("sum",m)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${tf("square_sum",m)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${c?"mean_output[global_idx] = mean;":""}
        ${h?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(o/u)},programUniforms:g})}})(t.inputs,r,t.outputCount,!1),{outputs:i})}}),si=W(()=>{nd(),ny(),ng(),n_(),aG=(t,r)=>{let i=[];if(t.length>r)if(7===t[r].dataType)t[r].getBigInt64Array().forEach(t=>i.push(Number(t)));else if(6===t[r].dataType)t[r].getInt32Array().forEach(t=>i.push(Number(t)));else throw Error(`Input ${r} must be an array of int32 or int64`);return i},aH=(t,r,i,a,n)=>{let s=t;return t<0&&(s+=i[a[r]]),n[r]<0?Math.max(0,Math.min(s,i[a[r]]-1)):Math.max(0,Math.min(s,i[a[r]]))},aF=(t,r)=>{((t,r)=>{if(!t||t.length<1)throw Error("too few inputs");if(0!==r.axes.length){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw Error("starts and ends must have the same length");t.slice(1).forEach((r,i)=>{if(6!==t[i+1].dataType&&7!==t[i+1].dataType)throw Error(`Input ${i} must be an array of int32 or int64`)})})(t.inputs,r);let i=((t,r)=>{if(!(t.length>1))return r;{let r=aG(t,1),i=aG(t,2),a=aG(t,3);return 0===a.length&&(a=[...Array(t[0].dims.length).keys()]),e9({starts:r,ends:i,axes:a})}})(t.inputs,r);t.compute(((t,r)=>{let i=t[0].dims,a=tt.size(i),n=r.axes.length>0?tt.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],s=aG(t,4);s.forEach(t=>0!==t||(()=>{throw Error("step cannot be 0")})),0===s.length&&(s=Array(n.length).fill(1));let o=r.starts.map((t,r)=>aH(t,r,i,n,s)),u=r.ends.map((t,r)=>aH(t,r,i,n,s));if(n.length!==o.length||n.length!==u.length)throw Error("start, ends and axes should have the same number of elements");if(n.length!==i.length)for(let t=0;t<i.length;++t)n.includes(t)||(o.splice(t,0,0),u.splice(t,0,i[t]),s.splice(t,0,1));let l=s.map(t=>Math.sign(t));s.forEach((t,r,i)=>{if(t<0){let a=(u[r]-o[r])/t,n=o[r],l=n+a*s[r];o[r]=l,u[r]=n,i[r]=-t}});let d=i.slice(0);n.forEach((t,r)=>{d[t]=Math.ceil((u[t]-o[t])/s[t])});let p={dims:d,dataType:t[0].dataType},c=t_("output",t[0].dataType,d.length),h=ty("input",t[0].dataType,t[0].dims.length),f=tt.size(d),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],g=[{type:12,data:f},{type:12,data:o},{type:6,data:l},{type:12,data:s},...td(t[0].dims,d)];return{name:"Slice",shaderCache:{hint:`${l.length}_${o.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:t=>`
      ${t.registerUniforms(m).declareVariables(h,c)}
        ${((t,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${tm("uniforms.input_shape","i",i.length)};
            let steps_i = ${tm("uniforms.steps","i",i.length)};
            let signs_i = ${tm("uniforms.signs","i",i.length)};
            let starts_i = ${tm("uniforms.starts","i",i.length)};
            var output_index = ${r.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${t.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`)(h,c,i)}
        ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}})(t.inputs,i),{inputs:[0]})},aj=t=>{let r=t.starts,i=t.ends,a=t.axes;return e9({starts:r,ends:i,axes:a})}}),sa=W(()=>{nd(),ny(),ng(),nb(),n_(),aK=(t,r)=>{(t=>{if(!t||1!==t.length)throw Error("Softmax op requires 1 input.")})(t.inputs),((t,r)=>{let i=t.inputs[0],a=i.dims,n=tt.size(a),s=a.length,o=tt.normalizeAxis(r.axis,s),u=o<a.length-1,l,d=[];u?((d=Array.from({length:s},(t,r)=>r))[o]=s-1,d[s-1]=o,l=t.compute(tS(i,d),{inputs:[i],outputs:[-1]})[0]):l=i;let p=l.dims,c=p[s-1],h=n/c,f=tp(c),m=c/f,g=64;1===h&&(g=256);let y=ty("x",l.dataType,l.dims,f),_=t_("result",l.dataType,l.dims,f),b=y.type.value,$="f32"===tu(l.dataType)?`var threadMax = ${b}(-3.402823e+38f);`:`var threadMax = ${b}(-65504.0h);`,v=t.compute({name:"Softmax",shaderCache:{hint:`${f};${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:t=>`
      var<workgroup> rowMaxShared : ${b};
      var<workgroup> rowSumShared : ${b};
      var<workgroup> threadShared : array<${b}, ${g}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${b} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${b}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${t.registerUniform("packedCols","i32").declareVariables(y,_)}
      ${t.mainStart(g)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${g};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${b}(${((t,r)=>4===r?`max(max(${t}.x, ${t}.y), max(${t}.z, ${t}.w))`:2===r?`max(${t}.x, ${t}.y)`:3===r?`max(max(${t}.x, ${t}.y), ${t}.z)`:t)("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${b}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${b}(${tf("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[l],outputs:[u?-1:0]})[0];u&&t.compute(tS(v,d),{inputs:[v]})})(t,r)},aQ=t=>e9({axis:t.axis})}),sn=W(()=>{nd(),ny(),n_(),aZ=t=>Array.from(t.getBigInt64Array(),Number),aX=t=>{(t=>{if(!t||2!==t.length)throw Error("Tile requires 2 inputs.");if(1!==t[0].dataType&&10!==t[0].dataType&&6!==t[0].dataType&&12!==t[0].dataType)throw Error("Tile only support float, float16, int32, and uint32 data types");if(7!==t[1].dataType)throw Error("Tile `repeats` input should be of int64 data type");if(1!==t[1].dims.length)throw Error("Tile `repeats` input should be 1-D");if(aZ(t[1]).length!==t[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")})(t.inputs),t.compute(((t,r)=>{let i=t[0].dims,a=r??aZ(t[1]),n=((t,r)=>{let i=[];for(let a=0;a<t.length;++a)i.push(t[a]*r[a]);return i})(i,a),s=tt.size(n),o=t[0].dataType,u=ty("input",o,i.length),l=t_("output",o,n.length);return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...td(t[0].dims,n)]}),getShaderSource:t=>`
      const inputShape = ${u.indices(...i)};
      ${t.registerUniform("output_size","u32").declareVariables(u,l)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`}})(t.inputs),{inputs:[0]})}}),ss=W(()=>{nd(),ny(),n_(),aY=t=>{t.compute((t=>{let r=t[1].dims,i=t[2].dims,a=t[0].dims,n=t[1].dataType,s=!(tt.areEqual(r,i)&&tt.areEqual(i,a)),o=r,u=tt.size(r);if(s){let t=te.calcShape(te.calcShape(r,i,!1),a,!1);if(!t)throw Error("Can't perform where op on the given tensors");o=t,u=tt.size(o)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:r=>((t,r,i,a,n)=>{let s=t_("output_data",n,i.length,4),o=ty("a_data",r[1].dataType,r[1].dims.length,4),u=ty("b_data",r[2].dataType,r[2].dims.length,4),l=ty("c_data",r[0].dataType,r[0].dims.length,4),d,p=(t,r,i)=>`select(${r}, ${t}, ${i})`;if(a){let t=(t,r,i="")=>{let a=`a_data[index_a${r}][component_a${r}]`,n=`b_data[index_b${r}][component_b${r}]`,d=`bool(c_data[index_c${r}] & (0xffu << (component_c${r} * 8)))`;return`
            let output_indices${r} = ${s.offsetToIndices(`global_idx * 4u + ${r}u`)};
            let offset_a${r} = ${o.broadcastedIndicesToOffset(`output_indices${r}`,s)};
            let offset_b${r} = ${u.broadcastedIndicesToOffset(`output_indices${r}`,s)};
            let offset_c${r} = ${l.broadcastedIndicesToOffset(`output_indices${r}`,s)};
            let index_a${r} = offset_a${r} / 4u;
            let index_b${r} = offset_b${r} / 4u;
            let index_c${r} = offset_c${r} / 4u;
            let component_a${r} = offset_a${r} % 4u;
            let component_b${r} = offset_b${r} % 4u;
            let component_c${r} = offset_c${r} % 4u;
            ${t}[${r}] = ${i}(${p(a,n,d)});
          `};d=9===n?`
            var data = vec4<u32>(0);
            ${t("data",0,"u32")}
            ${t("data",1,"u32")}
            ${t("data",2,"u32")}
            ${t("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${t("output_data[global_idx]",0)}
            ${t("output_data[global_idx]",1)}
            ${t("output_data[global_idx]",2)}
            ${t("output_data[global_idx]",3)}
          `}else d=s.setByOffset("global_idx",p(o.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));return`
        ${t.registerUniform("vec_size","u32").declareVariables(l,o,u,s)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`})(r,t,o,s,n),getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...td(a,r,i,o)]})}})(t.inputs))}}),so=W(()=>{nw(),nx(),nS(),nk(),nI(),nC(),nE(),nP(),nW(),nq(),nL(),nV(),nG(),nH(),nF(),nj(),nK(),nQ(),nZ(),nX(),n0(),n1(),n2(),n3(),n4(),nY(),n6(),n8(),n5(),n9(),n7(),nv(),se(),st(),sr(),si(),sa(),nJ(),sn(),nb(),nT(),ss(),aJ=new Map([["Abs",[ra]],["Acos",[rn]],["Acosh",[rs]],["Add",[rj]],["ArgMax",[t8,t5]],["ArgMin",[t6,t5]],["Asin",[ro]],["Asinh",[ru]],["Atan",[rl]],["Atanh",[rd]],["Attention",[re]],["AveragePool",[aS,ax]],["BatchNormalization",[rt]],["BiasAdd",[rr]],["BiasSplitGelu",[rH]],["Cast",[rc,rp]],["Ceil",[rf]],["Clip",[rh]],["Concat",[r3,r4]],["Conv",[iw,i$]],["ConvTranspose",[iE,iI]],["Cos",[rm]],["Cosh",[rg]],["CumSum",[iz,iA]],["DepthToSpace",[iO,iR]],["DequantizeLinear",[aR,aB]],["Div",[rK]],["Einsum",[iW,iq]],["Elu",[r_,ry]],["Equal",[rQ]],["Erf",[r$]],["Exp",[rv]],["Expand",[iV]],["FastGelu",[iG]],["Floor",[rw]],["FusedConv",[iw,i$]],["Gather",[iF,iH]],["GatherElements",[iY,iX]],["GatherBlockQuantized",[iQ,iZ]],["GatherND",[ij,iK]],["Gelu",[rx]],["Gemm",[i0,iJ]],["GlobalAveragePool",[aI,aT]],["GlobalMaxPool",[aO,aA]],["Greater",[rJ]],["GreaterOrEqual",[r1]],["GridSample",[i8,i5]],["GroupQueryAttention",[au]],["HardSigmoid",[rA,rz]],["InstanceNormalization",[ad]],["LayerNormalization",[ap]],["LeakyRelu",[rS,ry]],["Less",[r0]],["LessOrEqual",[r2]],["Log",[rL]],["MatMul",[ac]],["MatMulNBits",[ah,af]],["MaxPool",[aE,az]],["Mul",[rZ]],["MultiHeadAttention",[ar,i7]],["Neg",[rT]],["Not",[rk]],["Pad",[am]],["Pow",[rX]],["QuickGelu",[rG,ry]],["Range",[aN]],["Reciprocal",[rI]],["ReduceMin",[tJ]],["ReduceMean",[tK]],["ReduceMax",[tY]],["ReduceSum",[t1]],["ReduceProd",[t0]],["ReduceL1",[tQ]],["ReduceL2",[tZ]],["ReduceLogSum",[t3]],["ReduceLogSumExp",[tX]],["ReduceSumSquare",[t2]],["Relu",[rC]],["Resize",[aW,aq]],["RotaryEmbedding",[aL]],["ScatterND",[aM,aD]],["Sigmoid",[rE]],["Sin",[rO]],["Sinh",[rR]],["Slice",[aF,aj]],["SkipLayerNormalization",[aV]],["Split",[aa,an]],["Sqrt",[rB]],["Softmax",[aK,aQ]],["Sub",[rY]],["Tan",[rN]],["Tanh",[rM]],["ThresholdedRelu",[rq,ry]],["Tile",[aX]],["Transpose",[tk,tT]],["Where",[aY]]])}),su=W(()=>{eu(),nc(),n_(),a0=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,r){this.repo.set(t,r)}run(t,r,i,a,n){A(t.programInfo.name);let s=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber);let u=[];for(let t of r)u.push({binding:u.length,resource:{buffer:t.buffer}});for(let t of i)u.push({binding:u.length,resource:{buffer:t.buffer}});n&&u.push({binding:u.length,resource:n});let l=s.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:u,label:t.programInfo.name});if("capturing"===this.backend.sessionStatus){let r={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(r)}o.setPipeline(t.computePipeline),o.setBindGroup(0,l),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||"at-passes"===this.backend.queryType)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),O(t.programInfo.name)}dispose(){}build(t,r){A(t.name);let i=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(t=>{i.features.has(t.feature)&&a.push(`enable ${t.extension};`)});let n=tw(r,this.backend.device.limits),s=t.getShaderSource(n),o=`${a.join(`
`)}
${n.additionalImplementations}
${s}`,u=i.createShaderModule({code:o,label:t.name});eX("verbose",()=>`[WebGPU] ${t.name} shader code: ${o}`);let l=i.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:t.name});return O(t.name),{programInfo:t,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(t){let r="number"==typeof t?t:t.x,i="number"==typeof t?1:t.y||1,a="number"==typeof t?1:t.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=n&&i<=n&&a<=n)return[r,i,a];let s=r*i*a,o=Math.ceil(Math.sqrt(s));if(!(o>n))return[o,o,1];if((o=Math.ceil(Math.cbrt(s)))>n)throw Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}}}),sl=W(()=>{eu(),nd(),nc(),nh(),nm(),so(),su(),a1=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},a2=class{constructor(t){this.subgroupsSupported=t.features.has("subgroups"),this.subgroupsF16Supported=t.features.has("subgroups");let r=t.limits;this.subgroupsSupported&&r.minSubgroupSize&&r.maxSubgroupSize?this.subgroupSizeRange=[r.minSubgroupSize,r.maxSubgroupSize]:this.subgroupSizeRange=void 0}},a3=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(null===this.currentKernelId)throw Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,r){this.env=t;let i=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},n=t=>r.features.has(t)&&i.push(t)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await r.requestDevice(a),this.deviceInfo=new a2(this.device),this.adapterInfo=new a1(r.info||await r.requestAdapterInfo()),this.gpuDataManager=e8(this),this.programManager=new a0(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,eZ(t.logLevel,!!t.debug),this.device.onuncapturederror=t=>{t.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${t.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){"u">typeof this.querySet&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),r={};"at-passes"===this.queryType&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:2*this.pendingDispatchNumber,endOfPassWriteIndex:2*this.pendingDispatchNumber+1}),this.computePassEncoder=t.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){let t;this.commandEncoder&&(A(),this.endComputePass(),"none"!==this.queryType&&(this.commandEncoder.resolveQuerySet(this.querySet,0,2*this.pendingDispatchNumber,this.queryResolveBuffer,0),t=this.device.createBuffer({size:2*this.pendingDispatchNumber*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,2*this.pendingDispatchNumber*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,"none"!==this.queryType&&t.mapAsync(GPUMapMode.READ).then(()=>{let r=new BigUint64Array(t.getMappedRange()),i=this.pendingQueries.get(t);for(let t=0;t<r.length/2;t++){let a=i[t],n=a.kernelId,s=this.kernels.get(n),o=s.kernelType,u=s.kernelName,l=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,c=r[2*t],h=r[2*t+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let f=Number(c-this.queryTimeBase),m=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(m))throw RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(t=>({dims:t.dims,dataType:eU(t.dataType)})),outputsMetadata:p.map(t=>({dims:t.dims,dataType:eU(t.dataType)})),kernelId:n,kernelType:o,kernelName:u,programName:l,startTime:f,endTime:m});else{let t="";d.forEach((r,i)=>{t+=`input[${i}]: [${r.dims}] | ${eU(r.dataType)}, `});let r="";p.forEach((t,i)=>{r+=`output[${i}]: [${t.dims}] | ${eU(t.dataType)}, `}),console.log(`[profiling] kernel "${n}|${o}|${u}|${l}" ${t}${r}execution time: ${m-f} ns`)}E("GPU",`${l}::${c}::${h}`)}t.unmap(),this.pendingQueries.delete(t)}),O())}run(t,r,i,a,n,s){var o,u,l;let d,p;A(t.name);let c=[];for(let t=0;t<r.length;++t){let i=r[t].data;if(0===i)continue;let a=this.gpuDataManager.get(i);if(!a)throw Error(`no GPU data for input: ${i}`);c.push(a)}let{outputs:h,dispatchGroup:f,programUniforms:m}=t.getRunData(r),g=0===i.length?h.map((t,r)=>r):i;if(g.length!==h.length)throw Error(`Output size ${g.length} must be equal to ${h.length}.`);let y=[],_=[];for(let t=0;t<h.length;++t){if(!Number.isInteger(g[t])||g[t]<-3||g[t]>=s)throw Error(`Invalid output index: ${g[t]}`);if(-3===g[t])continue;let r=-1===g[t],i=-2===g[t],o=r||i?n(h[t].dataType,h[t].dims):a(g[t],h[t].dataType,h[t].dims);if(y.push(o),0===o.data)continue;let u=this.gpuDataManager.get(o.data);if(!u)throw Error(`no GPU data for output: ${o.data}`);if(r&&this.temporaryData.push(u),i){let t=this.kernelPersistentData.get(this.currentKernelId);t||(t=[],this.kernelPersistentData.set(this.currentKernelId,t)),t.push(u)}_.push(u)}if(c.length!==r.length||_.length!==y.length){if(0===_.length)return O(t.name),y;throw Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}if(m){let t=0,r=[];m.forEach(i=>{let a="number"==typeof i.data?[i.data]:i.data;if(0===a.length)return;let n=10===i.type?2:4,s,o;10===i.type?(o=a.length>4?16:a.length>2?8:a.length*n,s=a.length>4?16:n*a.length):(o=a.length<=2?a.length*n:16,s=16),t=Math.ceil(t/o)*o,r.push(t);let u=10===i.type?8:4;t+=a.length>4?Math.ceil(a.length/u)*s:a.length*n});let i=new ArrayBuffer(t=16*Math.ceil(t/16));m.forEach((t,a)=>{let n=r[a],s="number"==typeof t.data?[t.data]:t.data;if(6===t.type)new Int32Array(i,n,s.length).set(s);else if(12===t.type)new Uint32Array(i,n,s.length).set(s);else if(10===t.type)new Uint16Array(i,n,s.length).set(s);else if(1===t.type)new Float32Array(i,n,s.length).set(s);else throw Error(`Unsupported uniform type: ${eU(t.type)}`)});let a=this.gpuDataManager.create(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(a.buffer,0,i,0,t),this.gpuDataManager.release(a.id),d={offset:0,size:t,buffer:a.buffer}}let b=this.programManager.normalizeDispatchGroupSize(f),$=(o=t,u=r,l=1===b[1]&&1===b[2],p=o.name,o.shaderCache?.hint&&(p+="["+o.shaderCache.hint+"]"),p+=":"+l+`:${((t,r)=>{if(r.length!==t.length)throw Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${t.length}.`);let i=[];for(let a=0;a<t.length;++a){let n=t[a].dataType;switch(r[a]){case"none":i.push("");break;case"type":i.push(`${n}`);break;case"rank":{let r=t[a].dims.length;i.push(`${n};${r}`);break}case"dims":{let r=t[a].dims.join(",");i.push(`${n};${r}`);break}default:throw Error(`unsupported input dependency: ${r[a]}`)}}return i.join("|")})(u,o.shaderCache?.inputDependencies??Array(u.length).fill("dims"))}`),v=this.programManager.getArtifact($);if(v||(v=this.programManager.build(t,b),this.programManager.setArtifact($,v),eX("info",()=>`[artifact] key: ${$}, programName: ${t.name}`)),m&&v.uniformVariablesInfo){if(m.length!==v.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${m.length} in program "${v.programInfo.name}".`);for(let t=0;t<m.length;t++){let r=m[t],i=r.type,a="number"==typeof r.data?1:r.data.length,[n,s]=v.uniformVariablesInfo[t];if(i!==n||a!==s)throw Error(`Uniform variable ${t} mismatch: expect type ${n} with size ${s}, got type ${i} with size ${a} in program "${v.programInfo.name}".`)}}if(eX("info",()=>`[ProgramManager] run "${t.name}" (key=${$}) with ${b[0]}x${b[1]}x${b[2]}`),"none"!==this.queryType||"capturing"===this.sessionStatus){let t={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:r,outputTensorViews:y};this.pendingKernels.push(t),"capturing"===this.sessionStatus&&this.capturedPendingKernels.get(this.currentSessionId).push(t)}return this.programManager.run(v,c,_,b,d),O(t.name),y}upload(t,r){this.gpuDataManager.upload(t,r)}memcpy(t,r){this.gpuDataManager.memcpy(t,r)}async download(t,r){await this.gpuDataManager.download(t,r)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,r,i,a){let n=aJ.get(t);if(!n)throw Error(`kernel not implemented: ${t}`);let s={kernelType:t,kernelName:a,kernelEntry:n[0],attributes:[n[1],i]};this.kernels.set(r,s)}releaseKernel(t){let r=this.kernelPersistentData.get(t);if(r){for(let t of r)this.gpuDataManager.release(t.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,r,i){let a=this.kernels.get(t);if(!a)throw Error(`kernel not created: ${t}`);let n=a.kernelType,s=a.kernelName,o=a.kernelEntry,u=a.attributes;if(null!==this.currentKernelId)throw Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=t,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),eX("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),o(r,u[1]),0}catch(t){return i.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${t}`)),1}finally{for(let t of(l&&i.push(this.device.popErrorScope().then(t=>t?`GPU validation error for kernel "[${n}] ${s}": ${t.message}`:null)),this.temporaryData))this.gpuDataManager.release(t.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,r,i,a){let n=this.sessionExternalDataMapping.get(t);n||(n=new Map,this.sessionExternalDataMapping.set(t,n));let s=n.get(r),o=this.gpuDataManager.registerExternalBuffer(i,a,s);return n.set(r,[o,i]),o}unregisterBuffers(t){let r=this.sessionExternalDataMapping.get(t);r&&(r.forEach(t=>this.gpuDataManager.unregisterExternalBuffer(t[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let r=this.gpuDataManager.get(t);if(!r)throw Error(`no GPU data for buffer: ${t}`);return r.buffer}createDownloader(t,r,i){return async()=>{let a=await e4(this,t,r);return eY(a.buffer,i)}}writeTimestamp(t){"inside-passes"===this.queryType&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),"none"!==this.queryType&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:2*this.maxDispatchNumber}),this.queryResolveBuffer=this.device.createBuffer({size:2*this.maxDispatchNumber*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){eX("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){eX("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){eX("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=t.length;this.pendingKernels=[];for(let a=0;a<i;a++){let i=this.getComputePassEncoder(),n=t[a];this.writeTimestamp(2*this.pendingDispatchNumber),i.setPipeline(n.computePipeline),i.setBindGroup(0,n.bindGroup),i.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(2*this.pendingDispatchNumber+1),this.pendingDispatchNumber++,"none"!==this.queryType&&this.pendingKernels.push(r[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||"at-passes"===this.queryType)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),sd=W(()=>{nc(),a4=1,a6=()=>a4++,a8=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),a5=(t,r)=>{let i=a8.get(t);if(!i)throw Error("Unsupported data type.");return r.length>0?Math.ceil(r.reduce((t,r)=>t*r)*i/8):0},a9=class{constructor(t){this.sessionId=t.sessionId,this.mlContext=t.context,this.mlTensor=t.tensor,this.dataType=t.dataType,this.tensorShape=t.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return a5(this.dataType,this.tensorShape)}destroy(){eX("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,r,i){return this.mlContext===t&&this.dataType===r&&this.tensorShape.length===i.length&&this.tensorShape.every((t,r)=>t===i[r])}},a7=class{constructor(t,r){this.tensorManager=t,this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,r,i,a){let n=this.tensorManager.getMLContext(t);if(this.wrapper){if(this.wrapper.canReuseTensor(n,r,i))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==a5(r,i))throw Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,i,s,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){if(this.wrapper)if(t.byteLength===this.wrapper.byteLength)return void this.wrapper.write(t);else eX("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(t){if(this.activeUpload)if(t)return void(t instanceof ArrayBuffer?new Uint8Array(t).set(this.activeUpload):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(this.activeUpload));else return this.activeUpload.buffer;if(!this.wrapper)throw Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},ne=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let r=this.backend.getMLContext(t);if(!r)throw Error("MLContext not found for session.");return r}reserveTensorId(){let t=a6();return this.tensorTrackersById.set(t,new a7(this)),t}releaseTensorId(t){let r=this.tensorTrackersById.get(t);r&&(this.tensorTrackersById.delete(t),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(t,r,i,a,n){eX("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${r}, dataType: ${i}, shape: ${a}, copyOld: ${n}}`);let s=this.tensorTrackersById.get(r);if(!s)throw Error("Tensor not found.");return s.ensureTensor(t,i,a,n)}upload(t,r){let i=this.tensorTrackersById.get(t);if(!i)throw Error("Tensor not found.");i.upload(r)}async download(t,r){eX("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${r?.byteLength}}`);let i=this.tensorTrackersById.get(t);if(!i)throw Error("Tensor not found.");return i.download(r)}releaseTensorsForSession(t){for(let r of this.freeTensors)r.sessionId===t&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==t)}registerTensor(t,r,i,a){let n=this.getMLContext(t),s=a6(),o=new a9({sessionId:t,context:n,tensor:r,dataType:i,shape:a});return this.tensorTrackersById.set(s,new a7(this,o)),this.externalTensors.add(o),s}async getCachedTensor(t,r,i,a,n,s){let o=this.getMLContext(t);for(let[a,n]of this.freeTensors.entries())if(n.canReuseTensor(o,r,i)){eX("verbose",()=>`[WebNN] Reusing tensor {dataType: ${r}, shape: ${i}}`);let n=this.freeTensors.splice(a,1)[0];return n.sessionId=t,n}eX("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${r}, shape: ${i}}`);let u=await o.createTensor({dataType:r,shape:i,dimensions:i,usage:a,writable:n,readable:s});return new a9({sessionId:t,context:o,tensor:u,dataType:r,shape:i})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},nt=(...t)=>new ne(...t)}),sp=W(()=>{nd(),ns(),nh(),sd(),nc(),nr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ni=class{constructor(t){this.tensorManager=nt(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,eZ(t.logLevel,!!t.debug)}get currentSessionId(){if(void 0===this.activeSessionId)throw Error("No active session");return this.activeSessionId}onRunStart(t){eX("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){eX("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let r=this.temporarySessionTensorIds.get(t);if(r){for(let t of r)eX("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(r=>r.gpuDevice===t);if(-1!==r)return this.mlContextCache[r].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:r}),r}}if(void 0===t){let t=this.mlContextCache.findIndex(t=>void 0===t.options&&void 0===t.gpuDevice);if(-1!==t)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:t}),t}}let r=this.mlContextCache.findIndex(r=>((t,r)=>{if(t===r)return!0;if(void 0===t||void 0===r)return!1;let i=Object.keys(t).sort(),a=Object.keys(r).sort();return i.length===a.length&&i.every((i,n)=>i===a[n]&&t[i]===r[i])})(r.options,t));if(-1!==r)return this.mlContextCache[r].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}registerMLContext(t,r){this.mlContextBySessionId.set(t,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(t),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t);let r=this.mlContextBySessionId.get(t);if(!r)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let i=this.sessionIdsByMLContext.get(r);if(i.delete(t),0===i.size){this.sessionIdsByMLContext.delete(r);let t=this.mlContextCache.findIndex(t=>t.mlContext===r);-1!==t&&this.mlContextCache.splice(t,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){eX("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,r,i,a,n){let s=nr.get(i);if(!s)throw Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,r,s,a,n)}async createTemporaryTensor(t,r,i){eX("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${r}, shape: ${i}}`);let a=nr.get(r);if(!a)throw Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,n,a,i,!1);let s=this.temporarySessionTensorIds.get(t);return s?s.push(n):this.temporarySessionTensorIds.set(t,[n]),n}uploadTensor(t,r){if(!eO().shouldTransferToMLTensor)throw Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");eX("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${r.byteLength}}`),this.tensorManager.upload(t,r)}async downloadTensor(t,r){return this.tensorManager.download(t,r)}createMLTensorDownloader(t,r){return async()=>{let i=await this.tensorManager.download(t);return eY(i,r)}}registerMLTensor(t,r,i,a){let n=nr.get(i);if(!n)throw Error(`Unsupported ONNX data type: ${i}`);let s=this.tensorManager.registerTensor(t,r,n,a);return eX("verbose",()=>`[WebNN] registerMLTensor {tensor: ${r}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${s}}`),s}registerMLConstant(t,r,i,a,n,s){if(!s)throw Error("External mounted files are not available.");let o=t;t.startsWith("./")&&(o=t.substring(2));let u=s.get(o);if(!u)throw Error(`File with name ${o} not found in preloaded files.`);if(r+i>u.byteLength)throw Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(r,r+i).buffer,d;switch(n.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return eX("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),a.constant(n,d)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}isGraphInput(t,r){let i=this.sessionGraphInputs.get(t);return!!i&&i.includes(r)}flush(){}}}),sc={};q(sc,{init:()=>sm});var sh,sf,sm,sg,sy,s_,sb,s$,sv,sw,sx,sS,sk,sT,sI,sC,sE,sz,sA,sO,sR,sB,sN,sD,sM,sP,sU,sW,sq,sL,sV,sG,sH,sF,sj=W(()=>{nd(),sl(),nc(),ny(),sp(),sh=class t{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(1!==this.dataType)throw Error("Invalid data type");let t=tt.size(this.dims);return 0===t?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(7!==this.dataType)throw Error("Invalid data type");let t=tt.size(this.dims);return 0===t?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(6!==this.dataType)throw Error("Invalid data type");let t=tt.size(this.dims);return 0===t?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(10!==this.dataType&&4!==this.dataType)throw Error("Invalid data type");let t=tt.size(this.dims);return 0===t?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(r){if(tt.size(r)!==tt.size(this.dims))throw Error("Invalid new shape");return new t(this.module,this.dataType,this.data,r)}},sf=class{constructor(t,r,i){this.module=t,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo,this.deviceInfo=r.deviceInfo;let a=t.PTR_SIZE,n=i/t.PTR_SIZE,s=4===a?"i32":"i64";this.opKernelContext=Number(t.getValue(a*n++,s));let o=Number(t.getValue(a*n++,s));this.outputCount=Number(t.getValue(a*n++,s)),this.customDataOffset=Number(t.getValue(a*n++,"*")),this.customDataSize=Number(t.getValue(a*n++,s));let u=[];for(let r=0;r<o;r++){let r=Number(t.getValue(a*n++,s)),i=Number(t.getValue(a*n++,"*")),o=Number(t.getValue(a*n++,s)),l=[];for(let r=0;r<o;r++)l.push(Number(t.getValue(a*n++,s)));u.push(new sh(t,r,i,l))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,r){let i=r?.inputs?.map(t=>"number"==typeof t?this.inputs[t]:t)??this.inputs,a=r?.outputs??[],n=(t,r,i)=>new sh(this.module,r,this.output(t,i),i),s=(t,r)=>{let i=eW(t,r);if(!i)throw Error(`Unsupported data type: ${t}`);let a=i>0?this.backend.gpuDataManager.create(i).id:0;return new sh(this.module,t,a,r)};return this.backend.run(t,i,a,n,s,this.outputCount)}output(t,r){let i=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=4===i?"i32":"i64",n=this.module.stackAlloc((1+r.length)*i);this.module.setValue(n,r.length,a);for(let t=0;t<r.length;t++)this.module.setValue(n+i*(t+1),r[t],a);return this.module._JsepOutput(this.opKernelContext,t,n)}catch(i){throw Error(`Failed to generate kernel's output[${t}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(i)}}},sm=async(t,r,i,a)=>{let n=r.jsepInit;if(!n)throw Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if("webgpu"===t){let t=new a3;await t.initialize(i,a),n("webgpu",[t,r=>t.alloc(Number(r)),r=>t.free(r),(i,a,n,s=!1)=>{if(s)eX("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(i)}, dst=${Number(a)}, size=${Number(n)}`),t.memcpy(Number(i),Number(a));else{eX("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(i)}, gpuDataId=${Number(a)}, size=${Number(n)}`);let s=r.HEAPU8.subarray(Number(i>>>0),Number(i>>>0)+Number(n));t.upload(Number(a),s)}},async(i,a,n)=>{eX("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${i}, dataOffset=${a}, size=${n}`),await t.download(Number(i),()=>r.HEAPU8.subarray(Number(a)>>>0,Number(a+n)>>>0))},(i,a,n)=>t.createKernel(i,Number(a),n,r.UTF8ToString(r._JsepGetNodeName(Number(a)))),r=>t.releaseKernel(r),(i,a,n,s)=>{eX("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${n}, kernel=${i}, contextDataOffset=${a}`);let o=new sf(r,t,Number(a));return t.computeKernel(Number(i),o,s)},()=>t.captureBegin(),()=>t.captureEnd(),()=>t.replay()])}else{let t=new ni(i);n("webnn",[t,()=>t.reserveTensorId(),r=>t.releaseTensorId(r),async(r,i,a,n,s)=>t.ensureTensor(r,i,a,n,s),(r,i)=>{t.uploadTensor(r,i)},async(r,i)=>t.downloadTensor(r,i)])}}}),sK=W(()=>{nu(),nl(),nd(),ns(),no(),np(),sg=async t=>{var r,i;r=t.wasm.numThreads,i=eL(t.logLevel),0!==eO()._OrtInit(r,i)&&eN("Can't initialize onnxruntime.")},sy=async(t,r)=>{{let i=(sj(),L(sc)).init;if("webgpu"===r){if(typeof navigator>"u"||!navigator.gpu)throw Error("WebGPU is not supported in current environment");let r=t.webgpu.adapter;if(r){if("object"!=typeof r.limits||"object"!=typeof r.features||"function"!=typeof r.requestDevice)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=t.webgpu.powerPreference;if(void 0!==i&&"low-power"!==i&&"high-performance"!==i)throw Error(`Invalid powerPreference setting: "${i}"`);let a=t.webgpu.forceFallbackAdapter;if(void 0!==a&&"boolean"!=typeof a)throw Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(!(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a})))throw Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",eO(),t,r)}if("webnn"===r){if(typeof navigator>"u"||!navigator.ml)throw Error("WebNN is not supported in current environment");await i("webnn",eO(),t)}}},s_=new Map,sb=t=>{let r=eO(),i=r._malloc(t.byteLength);if(0===i)throw Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return r.HEAPU8.set(t,i),[i,t.byteLength]},s$=async(t,r)=>{let i,a,n=eO();Array.isArray(t)?[i,a]=t:t.buffer===n.HEAPU8.buffer?[i,a]=[t.byteOffset,t.byteLength]:[i,a]=sb(t);let s=0,o=0,u=0,l=[],d=[],p=[];try{if([o,l]=eM(r),r?.externalData&&n.mountExternalData){let t=[];for(let i of r.externalData){let r="string"==typeof i?i:i.path;t.push(eF("string"==typeof i?i:i.data).then(t=>{n.mountExternalData(r,t)}))}await Promise.all(t)}for(let t of r?.executionProviders??[])if(("string"==typeof t?t:t.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,"string"!=typeof t){let r=t?.context,i=t?.gpuDevice,a=t?.deviceType,s=t?.powerPreference;r?n.currentContext=r:i?n.currentContext=await n.jsepCreateMLContext(i):n.currentContext=await n.jsepCreateMLContext({deviceType:a,powerPreference:s})}else n.currentContext=await n.jsepCreateMLContext();break}s=await n._OrtCreateSession(i,a,o),0===s&&eN("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.jsepRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[t,c]=(t=>{let r=eO(),i=r.stackSave();try{let i=r.PTR_SIZE,a=r.stackAlloc(2*i);0!==r._OrtGetInputOutputCount(t,a,a+i)&&eN("Can't get session input/output count.");let n=4===i?"i32":"i64";return[Number(r.getValue(a,n)),Number(r.getValue(a+i,n))]}finally{r.stackRestore(i)}})(s),h=!!r?.enableGraphCapture,f=[],m=[],g=[];for(let r=0;r<t;r++){let t=n._OrtGetInputName(s,r);0===t&&eN("Can't get an input name."),d.push(t),f.push(n.UTF8ToString(t))}for(let t=0;t<c;t++){let i=n._OrtGetOutputName(s,t);0===i&&eN("Can't get an output name."),p.push(i);let a=n.UTF8ToString(i);m.push(a);{if(h&&r?.preferredOutputLocation===void 0){g.push("gpu-buffer");continue}let t="string"==typeof r?.preferredOutputLocation?r.preferredOutputLocation:r?.preferredOutputLocation?.[a]??"cpu";if("cpu"!==t&&"cpu-pinned"!==t&&"gpu-buffer"!==t&&"ml-tensor"!==t)throw Error(`Not supported preferred output location: ${t}.`);if(h&&"gpu-buffer"!==t)throw Error(`Not supported preferred output location: ${t}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);g.push(t)}}let y=null;return g.some(t=>"gpu-buffer"===t||"ml-tensor"===t)&&(u=n._OrtCreateBinding(s),0===u&&eN("Can't create IO binding."),y={handle:u,outputPreferredLocations:g,outputPreferredLocationsEncoded:g.map(t=>eH(t))}),s_.set(s,[s,d,p,y,h,!1]),[s,f,m]}catch(t){throw d.forEach(t=>n._OrtFree(t)),p.forEach(t=>n._OrtFree(t)),0!==u&&0!==n._OrtReleaseBinding(u)&&eN("Can't release IO binding."),0!==s&&0!==n._OrtReleaseSession(s)&&eN("Can't release session."),t}finally{n._free(i),0!==o&&0!==n._OrtReleaseSessionOptions(o)&&eN("Can't release session options."),l.forEach(t=>n._free(t)),n.unmountExternalData?.()}},sv=t=>{let r=eO(),i=s_.get(t);if(!i)throw Error(`cannot release session. invalid session id: ${t}`);let[a,n,s,o,u]=i;o&&(u&&0!==r._OrtClearBoundOutputs(o.handle)&&eN("Can't clear bound outputs."),0!==r._OrtReleaseBinding(o.handle)&&eN("Can't release IO binding.")),r.jsepOnReleaseSession?.(t),n.forEach(t=>r._OrtFree(t)),s.forEach(t=>r._OrtFree(t)),0!==r._OrtReleaseSession(a)&&eN("Can't release session."),s_.delete(t)},sw=async(t,r,i,a,n,s=!1)=>{if(!t)return void r.push(0);let o=eO(),u=o.PTR_SIZE,l=t[0],d=t[1],p=t[3],c=p,h,f;if("string"===l&&("gpu-buffer"===p||"ml-tensor"===p))throw Error("String tensor is not supported on GPU.");if(s&&"gpu-buffer"!==p)throw Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if("gpu-buffer"===p){let r=t[2].gpuBuffer;f=eW(eP(l),d);let i=o.jsepRegisterBuffer;if(!i)throw Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=i(a,n,r,f)}else if("ml-tensor"===p){let r=t[2].mlTensor;f=eW(eP(l),d);let i=o.jsepRegisterMLTensor;if(!i)throw Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=i(a,r,eP(l),d)}else{let r=t[2];if(Array.isArray(r)){f=u*r.length,h=o._malloc(f),i.push(h);for(let t=0;t<r.length;t++){if("string"!=typeof r[t])throw TypeError(`tensor data at index ${t} is not a string`);o.setValue(h+t*u,eR(r[t],i),"*")}}else{let t=o.jsepIsGraphInput;if("string"!==l&&t){let s=o._OrtGetInputName(a,n);if(t(a,o.UTF8ToString(s))){let t=eP(l);f=eW(t,d),c="ml-tensor";let i=o.jsepCreateTemporaryTensor,n=o.jsepUploadTensor;if(!i||!n)throw Error('Tensor location "ml-tensor" is not supported without using WebNN.');let s=await i(a,t,d);n(s,new Uint8Array(r.buffer,r.byteOffset,r.byteLength)),h=s}else f=r.byteLength,h=o._malloc(f),i.push(h),o.HEAPU8.set(new Uint8Array(r.buffer,r.byteOffset,f),h)}else f=r.byteLength,h=o._malloc(f),i.push(h),o.HEAPU8.set(new Uint8Array(r.buffer,r.byteOffset,f),h)}}let m=o.stackSave(),g=o.stackAlloc(4*d.length);try{d.forEach((t,r)=>o.setValue(g+r*u,t,4===u?"i32":"i64"));let t=o._OrtCreateTensor(eP(l),h,f,g,d.length,eH(c));0===t&&eN(`Can't create tensor for input/output. session=${a}, index=${n}.`),r.push(t)}finally{o.stackRestore(m)}},sx=async(t,r,i,a,n,s)=>{let o=eO(),u=o.PTR_SIZE,l=s_.get(t);if(!l)throw Error(`cannot run inference. invalid session id: ${t}`);let d=l[0],p=l[1],c=l[2],h=l[3],f=l[4],m=l[5],g=r.length,y=a.length,_=0,b=[],$=[],v=[],w=[],x=o.stackSave(),S=o.stackAlloc(g*u),k=o.stackAlloc(g*u),T=o.stackAlloc(y*u),I=o.stackAlloc(y*u);try{let l;[_,b]=eD(s);for(let a=0;a<g;a++)await sw(i[a],$,w,t,r[a],f);for(let r=0;r<y;r++)await sw(n[r],v,w,t,g+a[r],f);for(let t=0;t<g;t++)o.setValue(S+t*u,$[t],"*"),o.setValue(k+t*u,p[r[t]],"*");for(let t=0;t<y;t++)o.setValue(T+t*u,v[t],"*"),o.setValue(I+t*u,c[a[t]],"*");if(h&&!m){let{handle:i,outputPreferredLocations:s,outputPreferredLocationsEncoded:u}=h;if(p.length!==g)throw Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${p.length}).`);for(let a=0;a<g;a++){let n=r[a];await o._OrtBindInput(i,p[n],$[a])!==0&&eN(`Can't bind input[${a}] for session=${t}.`)}for(let r=0;r<y;r++){let l=a[r];n[r]?.[3]?0!==o._OrtBindOutput(i,c[l],v[r],0)&&eN(`Can't bind pre-allocated output[${r}] for session=${t}.`):0!==o._OrtBindOutput(i,c[l],0,u[l])&&eN(`Can't bind output[${r}] to ${s[r]} for session=${t}.`)}s_.set(t,[d,p,c,h,f,!0])}o.jsepOnRunStart?.(d),l=h?await o._OrtRunWithBinding(d,h.handle,y,T,_):await o._OrtRun(d,k,S,g,I,y,T,_),0!==l&&eN("failed to call OrtRun().");let x=[];for(let r=0;r<y;r++){let i=Number(o.getValue(T+r*u,"*"));if(i===v[r]){x.push(n[r]);continue}let s=o.stackSave(),l=o.stackAlloc(4*u),p=!1,c,f=0;try{0!==o._OrtGetTensorData(i,l,l+u,l+2*u,l+3*u)&&eN(`Can't access output tensor data on index ${r}.`);let n=4===u?"i32":"i64",s=Number(o.getValue(l,n));f=o.getValue(l+u,"*");let d=o.getValue(l+2*u,"*"),m=Number(o.getValue(l+3*u,n)),g=[];for(let t=0;t<m;t++)g.push(Number(o.getValue(d+t*u,n)));0!==o._OrtFree(d)&&eN("Can't free memory for tensor dims.");let y=g.reduce((t,r)=>t*r,1);c=eU(s);let _=h?.outputPreferredLocations[a[r]];if("string"===c){if("gpu-buffer"===_||"ml-tensor"===_)throw Error("String tensor is not supported on GPU.");let t=[];for(let r=0;r<y;r++){let i=o.getValue(f+r*u,"*"),a=o.getValue(f+(r+1)*u,"*"),n=r===y-1?void 0:a-i;t.push(o.UTF8ToString(i,n))}x.push([c,g,t,"cpu"])}else if("gpu-buffer"===_&&y>0){let t=o.jsepGetBuffer;if(!t)throw Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let r=t(f),a=eW(s,y);if(void 0===a||!eV(c))throw Error(`Unsupported data type: ${c}`);p=!0,x.push([c,g,{gpuBuffer:r,download:o.jsepCreateDownloader(r,a,c),dispose:()=>{0!==o._OrtReleaseTensor(i)&&eN("Can't release tensor.")}},"gpu-buffer"])}else if("ml-tensor"===_&&y>0){let r=o.jsepEnsureTensor;if(!r)throw Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(void 0===eW(s,y)||!eG(c))throw Error(`Unsupported data type: ${c}`);let a=await r(t,f,s,g,!1);p=!0,x.push([c,g,{mlTensor:a,download:o.jsepCreateMLTensorDownloader(f,c),dispose:()=>{o.jsepReleaseTensorId(f),o._OrtReleaseTensor(i)}},"ml-tensor"])}else{let t=new(eq(c))(y);new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(o.HEAPU8.subarray(f,f+t.byteLength)),x.push([c,g,t,"cpu"])}}finally{o.stackRestore(s),"string"===c&&f&&o._free(f),p||o._OrtReleaseTensor(i),o.jsepOnRunEnd?.(d)}}return h&&!f&&(0!==o._OrtClearBoundOutputs(h.handle)&&eN("Can't clear bound outputs."),s_.set(t,[d,p,c,h,f,!1])),x}finally{o.stackRestore(x),$.forEach(t=>o._OrtReleaseTensor(t)),v.forEach(t=>o._OrtReleaseTensor(t)),w.forEach(t=>o._free(t)),0!==_&&o._OrtReleaseRunOptions(_),b.forEach(t=>o._free(t))}},sS=t=>{let r=eO(),i=s_.get(t);if(!i)throw Error("invalid session id");let a=i[0],n=r._OrtEndProfiling(a);0===n&&eN("Can't get an profile file name."),r._OrtFree(n)},sk=t=>{let r=[];for(let i of t){let t=i[2];!Array.isArray(t)&&"buffer"in t&&r.push(t.buffer)}return r}}),sQ=W(()=>{eu(),sK(),ns(),nn(),sT=()=>!!c.wasm.proxy&&"u">typeof document,sC=!1,sE=!1,sz=!1,sR=new Map,sB=(t,r)=>{let i=sR.get(t);i?i.push(r):sR.set(t,[r])},sN=()=>{if(sC||!sE||sz||!sI)throw Error("worker not ready")},sD=t=>{switch(t.data.type){case"init-wasm":sC=!1,t.data.err?(sz=!0,sO[1](t.data.err)):(sE=!0,sO[0]()),sA&&(URL.revokeObjectURL(sA),sA=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=sR.get(t.data.type);t.data.err?r.shift()[1](t.data.err):r.shift()[0](t.data.out)}}},sM=async()=>{if(!sE){if(sC)throw Error("multiple calls to 'initWasm()' detected.");if(sz)throw Error("previous call to 'initWasm()' failed.");if(sC=!0,sT())return new Promise((t,r)=>{sI?.terminate(),eS().then(([a,n])=>{try{(sI=n).onerror=t=>r(t),sI.onmessage=sD,sO=[t,r];let s={type:"init-wasm",in:c};!s.in.wasm.wasmPaths&&(a||"file:///D:/AI%20FDE/Sujin-wardrobe1/node_modules/onnxruntime-web/dist/ort.webgpu.bundle.min.mjs".startsWith("file:"))&&(s.in.wasm.wasmPaths={wasm:new i.U(i(140)).href}),sI.postMessage(s),sA=a}catch(t){r(t)}},r)});try{await eA(c.wasm),await sg(c),sE=!0}catch(t){throw sz=!0,t}finally{sC=!1}}},sP=async t=>{if(sT())return sN(),new Promise((r,i)=>{sB("init-ep",[r,i]);let a={type:"init-ep",in:{epName:t,env:c}};sI.postMessage(a)});await sy(c,t)},sU=async t=>sT()?(sN(),new Promise((r,i)=>{sB("copy-from",[r,i]),sI.postMessage({type:"copy-from",in:{buffer:t}},[t.buffer])})):sb(t),sW=async(t,r)=>{if(!sT())return s$(t,r);if(r?.preferredOutputLocation)throw Error('session option "preferredOutputLocation" is not supported for proxy.');return sN(),new Promise((i,a)=>{sB("create",[i,a]);let n={type:"create",in:{model:t,options:{...r}}},s=[];t instanceof Uint8Array&&s.push(t.buffer),sI.postMessage(n,s)})},sq=async t=>{if(sT())return sN(),new Promise((r,i)=>{sB("release",[r,i]),sI.postMessage({type:"release",in:t})});sv(t)},sL=async(t,r,i,a,n,s)=>{if(!sT())return sx(t,r,i,a,n,s);if(i.some(t=>"cpu"!==t[3]))throw Error("input tensor on GPU is not supported for proxy.");if(n.some(t=>t))throw Error("pre-allocated output tensor is not supported for proxy.");return sN(),new Promise((n,o)=>{sB("run",[n,o]),sI.postMessage({type:"run",in:{sessionId:t,inputIndices:r,inputs:i,outputIndices:a,options:s}},sk(i))})},sV=async t=>{if(sT())return sN(),new Promise((r,i)=>{sB("end-profiling",[r,i]),sI.postMessage({type:"end-profiling",in:t})});sS(t)}}),sZ=W(()=>{eu(),sQ(),nd(),el(),np(),sG=(t,r)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw Error(`invalid data location: ${t.location} for ${r()}`)}},sH=t=>{switch(t[3]){case"cpu":return new C(t[0],t[2],t[1]);case"gpu-buffer":{let r=t[0];if(!eV(r))throw Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:a,dispose:n}=t[2];return C.fromGpuBuffer(i,{dataType:r,dims:t[1],download:a,dispose:n})}case"ml-tensor":{let r=t[0];if(!eG(r))throw Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:a,dispose:n}=t[2];return C.fromMLTensor(i,{dataType:r,dims:t[1],download:a,dispose:n})}default:throw Error(`invalid data location: ${t[3]}`)}},sF=class{async fetchModelAndCopyToWasmMemory(t){return sU(await eF(t))}async loadModel(t,r){let i;A(),i="string"==typeof t?await this.fetchModelAndCopyToWasmMemory(t):t,[this.sessionId,this.inputNames,this.outputNames]=await sW(i,r),O()}async dispose(){return sq(this.sessionId)}async run(t,r,i){A();let a=[],n=[];Object.entries(t).forEach(t=>{let r=t[0],i=t[1],s=this.inputNames.indexOf(r);if(-1===s)throw Error(`invalid input '${r}'`);a.push(i),n.push(s)});let s=[],o=[];Object.entries(r).forEach(t=>{let r=t[0],i=t[1],a=this.outputNames.indexOf(r);if(-1===a)throw Error(`invalid output '${r}'`);s.push(i),o.push(a)});let u=a.map((t,r)=>sG(t,()=>`input "${this.inputNames[n[r]]}"`)),l=s.map((t,r)=>t?sG(t,()=>`output "${this.outputNames[o[r]]}"`):null),d=await sL(this.sessionId,n,u,o,l,i),p={};for(let t=0;t<d.length;t++)p[this.outputNames[o[t]]]=s[t]??sH(d[t]);return O(),p}startProfiling(){}endProfiling(){sV(this.sessionId)}}}),sX={};q(sX,{OnnxruntimeWebAssemblyBackend:()=>sJ,initializeFlags:()=>sY,wasmBackend:()=>s0});var sY,sJ,s0,s1=W(()=>{eu(),sQ(),sZ(),sY=()=>{if(("number"!=typeof c.wasm.initTimeout||c.wasm.initTimeout<0)&&(c.wasm.initTimeout=0),!1===c.wasm.simd&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),"boolean"!=typeof c.wasm.proxy&&(c.wasm.proxy=!1),"boolean"!=typeof c.wasm.trace&&(c.wasm.trace=!1),"number"!=typeof c.wasm.numThreads||!Number.isInteger(c.wasm.numThreads)||c.wasm.numThreads<=0)if("u">typeof self&&!self.crossOriginIsolated)c.wasm.numThreads=1;else{let t=typeof navigator>"u"?U("node:os").cpus().length:navigator.hardwareConcurrency;c.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},s0=new(sJ=class{async init(t){sY(),await sM(),await sP(t)}async createInferenceSessionHandler(t,r){let i=new sF;return await i.loadModel(t,r),Promise.resolve(i)}})});eu(),eu(),eu();var s2=eo;{let t=(s1(),L(sX)).wasmBackend;s("webgpu",t,5),s("webnn",t,5),s("cpu",t,10),s("wasm",t,10)}Object.defineProperty(c.versions,"web",{value:"1.21.0",enumerable:!0})}}]);