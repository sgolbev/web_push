const _0x4184=['.trigger-push','error','BErqlMengU010UthQjK30ccOhJ9cnane7kxMEskygXAVDXfwJ1KSw0wetpqNDo91mx9uf3chuJQy42azK4E1h7g','pushManager','POST','catch','addEventListener','subscribe','stringify','serviceWorker','Service\x20workers\x20are\x20not\x20supported\x20in\x20this\x20browser','click','application/json','querySelector','charCodeAt','/sw.js','/subscribe','repeat','atob','replace','length'];(function(_0x4f0af0,_0x4184df){const _0x57c2a0=function(_0x6a70e){while(--_0x6a70e){_0x4f0af0['push'](_0x4f0af0['shift']());}};_0x57c2a0(++_0x4184df);}(_0x4184,0x1b0));const _0x57c2=function(_0x4f0af0,_0x4184df){_0x4f0af0=_0x4f0af0-0x0;let _0x57c2a0=_0x4184[_0x4f0af0];return _0x57c2a0;};function urlBase64ToUint8Array(_0x41060d){const _0x12fc9c='='[_0x57c2('0x5')]((0x4-_0x41060d['length']%0x4)%0x4);const _0x175a4f=(_0x41060d+_0x12fc9c)[_0x57c2('0x7')](/-/g,'+')[_0x57c2('0x7')](/_/g,'/');const _0x35e22a=window[_0x57c2('0x6')](_0x175a4f);const _0x5d966a=new Uint8Array(_0x35e22a[_0x57c2('0x8')]);for(let _0x11097d=0x0;_0x11097d<_0x35e22a['length'];++_0x11097d){_0x5d966a[_0x11097d]=_0x35e22a[_0x57c2('0x2')](_0x11097d);}return _0x5d966a;}const publicVapidKey=_0x57c2('0xb');const triggerPush=document[_0x57c2('0x1')](_0x57c2('0x9'));async function triggerPushNotification(){if(_0x57c2('0x12')in navigator){const _0x1dd764=await navigator['serviceWorker']['register'](_0x57c2('0x3'),{'scope':'/'});const _0x2940f1=await _0x1dd764[_0x57c2('0xc')][_0x57c2('0x10')]({'userVisibleOnly':!![],'applicationServerKey':urlBase64ToUint8Array(publicVapidKey)});await fetch(_0x57c2('0x4'),{'method':_0x57c2('0xd'),'body':JSON[_0x57c2('0x11')](_0x2940f1),'headers':{'Content-Type':_0x57c2('0x0')}});}else{console[_0x57c2('0xa')](_0x57c2('0x13'));}}triggerPush[_0x57c2('0xf')](_0x57c2('0x14'),()=>{triggerPushNotification()[_0x57c2('0xe')](_0x1c93b7=>console[_0x57c2('0xa')](_0x1c93b7));});