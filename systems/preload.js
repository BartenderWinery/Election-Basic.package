const{contextBridge,ipcRenderer}=require("electron")
contextBridge.exposeInMainWorld(
    "basic",{
        api:(c,d)=>{ipcRenderer.send(c,d)},
        dial:(c,f)=>{ipcRenderer.on(c,(event,...args)=>f(...args))}})