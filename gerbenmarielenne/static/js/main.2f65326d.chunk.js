(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/close-circle-outline.64600fb0.svg"},function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),l=(n(14),n(1)),c=n(2),s=n(3),d=n(4),u=(n(15),n(5)),m=n.n(u);function p(){return null===window.localStorage.getItem("foundLocations")&&window.localStorage.setItem("foundLocations","[]"),JSON.parse(window.localStorage.getItem("foundLocations")||"")}n(16);var h,v=n(8),f=n.n(v);!function(t){t[t.Open=0]="Open",t[t.Hidden=1]="Hidden",t[t.Peek=2]="Peek"}(h||(h={}));var g=function(t){Object(d.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={modalState:t.props.modalState||h.Open},t}return Object(c.a)(n,[{key:"render",value:function(){var t,e=this,n="modal";n+=" modal"+this.state.modalState.toString(),n+=" modal"+(null===(t=this.props.modalState)||void 0===t?void 0:t.toString())+"intro";var o=null;return this.state.modalState===h.Peek||this.props.hideClose||(o=a.a.createElement("img",{onClick:function(){return e.setState({modalState:h.Hidden})},src:f.a,className:"modalclose",alt:"logo"})),a.a.createElement("div",{className:n,style:{zIndex:this.props.modalState===h.Open?100:50}},a.a.createElement("div",{className:"modaltop"},a.a.createElement("h1",{onClick:function(){return e.setState({modalState:e.state.modalState===h.Open?h.Peek:h.Open})}},this.props.title),o),this.props.children)}},{key:"onmodalclick",value:function(){var t=document.getElementById("modal");null===t||void 0===t||t.classList.remove("element-animation"),null===t||void 0===t||t.classList.add("element-animation-reverse")}}]),n}(a.a.Component),k=(n(17),function(t){Object(d.a)(n,t);var e=Object(s.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t,e=this,n=p().map((function(t){return a.a.createElement("li",{key:t.id,onClick:function(){e.setState({location:t})}},t.title)}));return[a.a.createElement(g,{key:"a",title:"Found locations",modalState:h.Peek,hideClose:!0},a.a.createElement("ul",null,n)),this.createModal(null===(t=this.state)||void 0===t?void 0:t.location)]}},{key:"createModal",value:function(t){return void 0===t?null:a.a.createElement(g,{key:Date.now(),title:t.title,modalState:h.Open},a.a.createElement("p",null,t.description),a.a.createElement("a",{className:"modal-link",href:t.link,target:"blank"},a.a.createElement("p",{className:"modal-link-container"},"Open secret")))}}]),n}(a.a.Component)),w=function(t){Object(d.a)(n,t);var e=Object(s.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t,e=((null===(t=this.state)||void 0===t?void 0:t.newLocations)||[]).map((function(t){return a.a.createElement(g,{key:Date.now(),title:t.title+" \ud83c\udf89",modalState:h.Peek},a.a.createElement("p",null,t.description),a.a.createElement("a",{className:"modal-link",href:t.link,target:"blank"},a.a.createElement("p",{className:"modal-link-container"},"Open secret")))}));return[a.a.createElement("div",{key:"a",id:"map"}),a.a.createElement(k,{key:"b"}),e]}},{key:"componentDidMount",value:function(){try{this.SetupMap(),this.checkForNewLocations()}catch(t){this.logError("Error. App.tsx:30",t)}}},{key:"logError",value:function(t,e){alert(t+" "+JSON.stringify(e,this.replaceErrors)),console.error(e)}},{key:"SetupMap",value:function(){m.a.accessToken="pk.eyJ1IjoibmV3bm90dGFrZW5uYW1lIiwiYSI6ImNrZjhuZzZvZjA2MDUyd3B4MmdkMzhpamEifQ.3p91vKWfOce6fRzddTg_qA";var t=new m.a.Map({container:"map",style:"mapbox://styles/newnottakenname/ckf8o4w885kx21and6jq56h8q",zoom:6,center:[5.55,52.316667]});this.setState({map:t});var e=p();[{id:"temp",title:"Secret location",description:"Here",coordinates:{longitude:52.1,latitude:4.21},link:"https://nntn.nl"},{id:"temp-venlo",title:"Venlo",description:"Here",coordinates:{longitude:51.23,latitude:6.1},link:"https://nntn.nl"},{id:"temp-ah",title:"Albert Heijn",description:"Its an Albert Heijn. Gotta debug somehow",coordinates:{longitude:51.9966037,latitude:4.3508977},link:"https://nntn.nl"}].forEach((function(n){new m.a.Marker({color:e.some((function(t){return n.id===t.id}))?"orange":void 0}).setLngLat([n.coordinates.latitude,n.coordinates.longitude]).addTo(t)}))}},{key:"replaceErrors",value:function(t,e){if(e instanceof Error){var n={};return Object.getOwnPropertyNames(e).forEach((function(t){n[t]=e[t]})),n}return e}},{key:"checkForNewLocations",value:function(){var t,e=this;navigator.geolocation?(navigator.geolocation.getCurrentPosition((function(t){try{var n,o=null===(n=e.state)||void 0===n?void 0:n.map,a=t.coords.latitude,i=t.coords.longitude;null===o||void 0===o||o.setCenter([i,a]),null===o||void 0===o||o.setZoom(12);var r=p();[{id:"temp",title:"Secret location",description:"Here",coordinates:{longitude:52.1,latitude:4.21},link:"https://nntn.nl"},{id:"temp-venlo",title:"Venlo",description:"Here",coordinates:{longitude:51.23,latitude:6.1},link:"https://nntn.nl"},{id:"temp-ah",title:"Albert Heijn",description:"Its an Albert Heijn. Gotta debug somehow",coordinates:{longitude:51.9966037,latitude:4.3508977},link:"https://nntn.nl"}].forEach((function(t){var n;r.some((function(e){return t.id===e.id}))||e.isCloseTo(t,i,a)&&(e.addToLocalStorage(t),e.setState({newLocations:((null===(n=e.state)||void 0===n?void 0:n.newLocations)||[]).concat([t])}))}))}catch(l){e.logError("Error. App.tsx:88 ",l)}}),(function(t){e.logError("Error getting current location",t)})),0===p().length&&(this.addToLocalStorage({id:"introduction",coordinates:{latitude:0,longitude:0},description:"Welcome to your present! This website will guide you through a lot of fun memories. Go to the points on the map an have fun!",title:"Introduction",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}),this.setState({newLocations:((null===(t=this.state)||void 0===t?void 0:t.newLocations)||[]).concat({id:"introduction",coordinates:{latitude:0,longitude:0},description:"Welcome to your present! This website will guide you through a lot of fun memories. Go to the points on the map an have fun!",title:"Introduction",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})}))):alert("Please allow me to use your location. Pls?")}},{key:"addToLocalStorage",value:function(t){window.localStorage.setItem("foundLocations",JSON.stringify(p().concat([t])))}},{key:"isCloseTo",value:function(t,e,n){var o=this.distance(t.coordinates.longitude,t.coordinates.latitude,n,e);return console.warn(o,t,e,n),o<1}},{key:"distance",value:function(t,e,n,o){function a(t){return t*Math.PI/180}var i=a(o-e),r=a(n-t),l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(a(e))*Math.cos(a(o))*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2f65326d.chunk.js.map