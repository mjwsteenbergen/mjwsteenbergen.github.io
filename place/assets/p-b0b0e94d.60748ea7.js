const s="http://localhost:7071",a=()=>{let t=window.location.href.split("?")[1],e=new URLSearchParams(t);return e.has("token")&&(localStorage.setItem("zeuskey",e.get("token")||""),e.delete("token")),{token:localStorage.getItem("zeuskey"),collectionId:e.get("collectionId")||void 0}},c=async()=>await fetch(`${s}/api/run/places`,{method:"POST",body:JSON.stringify(Object.assign({},a()))}).then(t=>t.json()).catch(t=>(console.error(t),Promise.resolve({Reply:{Result:[]}}))),n=async(t,e)=>await fetch(`${s}/api/run/places`,{method:"POST",body:JSON.stringify(Object.assign(Object.assign({},a()),{latitude:t,longitude:e,action:"location"}))}).then(o=>o.json()).catch(o=>(console.error(o),Promise.resolve({Reply:{Result:void 0}}))),i=async t=>await fetch(`${s}/api/run/places`,{method:"POST",body:JSON.stringify(Object.assign(Object.assign({},a()),{id:t,action:"place"}))}).then(e=>e.json()).catch(e=>(console.error(e),Promise.resolve({Reply:{Result:void 0}})));export{n as a,i as c,a as o,c as t};
