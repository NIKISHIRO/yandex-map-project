(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{71:function(e,t,r){e.exports=r(91)},76:function(e,t,r){},81:function(e,t,r){},82:function(e,t,r){},91:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(7),c=r.n(o);r(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=r(22),l=r(35);function s(e){return function(t){t({type:"SET_CREW_INFO",crewInfo:e})}}function u(e){return function(t){t({type:"SET_CREWS_INFO",crewsInfo:e})}}function d(e,t){return function(r){r({type:"ORDER_FORM_CHANGE",name:e,value:t})}}function m(e,t){return function(r){r(t?{type:"SET_PLACEMARK_POSITION",text:t.text,color:t.color,position:e}:{type:"SET_PLACEMARK_POSITION",position:e,text:"",color:"gold"})}}var f={form:{address:"",isValid:!1},map:{clickPlacemark:{color:"gold",text:"",position:null}},crewsInfo:[],selectCrew:null};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CREW_INFO":return e.selectCrew=t.crewInfo,Object(l.a)({},e);case"SET_CREWS_INFO":return e.crewsInfo=t.crewsInfo,Object(l.a)({},e);case"ORDER_FORM_CHANGE":return e.form[t.name]=t.value,Object(l.a)({},e);case"SET_PLACEMARK_POSITION":return e.map.clickPlacemark.position=t.position,e.map.clickPlacemark.text=t.text,e.map.clickPlacemark.color=t.color,Object(l.a)({},e);default:return Object(l.a)({},e)}}var b=r(54),v=r.n(b),E=r(55),g=Object(i.e)(Object(i.c)({order:p}),Object(i.d)(Object(i.a)(E.a,v.a))),w=r(16),y=(r(81),r(19)),h=r(130),O=r(126),_=r(127),k=r(128),j=(r(82),r(40)),x={border:"1px solid #000",padding:".5rem",minWidth:"11rem"},C={marginRight:"1rem",display:"inline-block"},S={verticalAlign:"top",display:"inline-block"},I={fontWeight:800,marginBottom:".3rem"},R={fontSize:".8rem"},P={border:"1px solid #000",padding:".4rem",borderRadius:"5px"};function N(e){var t=e.title,r=e.color,n=e.number;return a.a.createElement("div",{className:"select-crew",style:x},a.a.createElement("span",{style:C},a.a.createElement(j.a,{style:{fontSize:"2rem",color:"#c0c0c0"}})),a.a.createElement("span",{style:S},a.a.createElement("div",{style:I},t),a.a.createElement("div",{style:R},r),a.a.createElement("div",{style:P},n)))}var T=r(12),A=r.n(T),V=r(18),z=r(28),W=r(121);function B(e){return F.apply(this,arguments)}function F(){return(F=Object(V.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e({code:0,descr:"OK",data:{crews_info:[{crew_id:123,car_mark:"Chevrolet",car_model:"Lacetti",car_color:"\u0441\u0438\u043d\u0438\u0439",car_number:"\u0415234\u041a\u0423",driver_name:"\u0414\u0435\u0442\u043e\u0447\u043a\u0438\u043d",driver_phone:"7788",lat:56.855532,lon:53.217462,distance:300},{crew_id:125,car_mark:"Hyundai",car_model:"Solaris",car_color:"\u0431\u0435\u043b\u044b\u0439",car_number:"\u0424567\u0410\u0421",driver_name:"\u041f\u0435\u0442\u0440\u043e\u0432",driver_phone:"8899",lat:56.860581,lon:53.209223,distance:123}]}})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return M.apply(this,arguments)}function M(){return(M=Object(V.a)(A.a.mark((function e(t,r){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={source_time:Date.now(),addresses:[{address:t,lat:r[0],lon:r[1]}]},e.next=3,B(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){if(!e)return"";var t=e.getPremise(),r=e.getPremiseNumber(),n=e.getThoroughfare();return[t||n,r].filter(Boolean).join(", ")}function H(e,t){return K.apply(this,arguments)}function K(){return(K=Object(V.a)(A.a.mark((function e(t,r){var n,a,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.geocode(r);case 2:if(n=e.sent,a=n.geoObjects.get(0),o=L(a),a){e.next=7;break}return e.abrupt("return","");case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=r(60),G=r(64),J={border:"1px solid #000",height:"20rem",overflowY:"auto"},Y=function(e){return{cursor:"pointer",position:"relative",borderBottom:"1px solid #000",padding:".5rem",backgroundColor:e?"rgba(0, 0, 0, 1)":"rgba(0, 0, 0, 0)",color:e?"#fff":"#000"}},Z={position:"absolute",bottom:".2rem",right:"2rem"},$={position:"absolute",right:".3rem",bottom:".6rem",fontSize:"1.4rem"};function Q(){var e=Object(w.c)((function(e){return e||[]})).order.crewsInfo;return a.a.createElement("div",null,e.map((function(e){return a.a.createElement(z.b,{key:e.crew_id,geometry:[e.lat,e.lon],options:{iconColor:"green"}})})))}function U(e){var t=e.id,r=e.name,n=e.color,o=e.distance,c=Object(G.a)(),i=Object(y.a)(c,2),l=i[0],u=i[1],d=Object(w.c)((function(e){return e||[]})),m=Object(w.b)();return a.a.createElement("div",{style:Y(l),ref:u,onClick:function(){return function(e){m(s(d.order.crewsInfo[e]))}(t)}},a.a.createElement("div",{style:{display:"inline-block",marginRight:"2rem"}},a.a.createElement(j.a,{style:{fontSize:"2rem",color:l?"#fff":"#c0c0c0"}})),a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement("div",{style:{fontWeight:500}},r),a.a.createElement("div",{style:{fontSize:".7rem"}},n)),a.a.createElement("div",{style:Z},"".concat(o," \u043c")),a.a.createElement("div",{style:$},a.a.createElement(q.a,null)))}function X(){var e=Object(w.c)((function(e){return e||[]})),t=Object(w.b)(),r=e.order.crewsInfo,o=e.order.map.clickPlacemark,c=e.order.form.address;return Object(n.useEffect)((function(){console.log("order-useEffect",o.position,e.order.form.isValid),Object(V.a)(A.a.mark((function r(){var n;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(o.position&&e.order.form.isValid&&e.order.form.address)){r.next=8;break}return r.next=3,D(c,o.position);case 3:n=r.sent,t(u(n.data.crews_info)),t(s(n.data.crews_info[0])),r.next=9;break;case 8:t(u([]));case 9:case"end":return r.stop()}}),r)})))()}),[e.order.form.address,e.order.form.isValid]),a.a.createElement("div",null,a.a.createElement("div",{style:J},r.sort((function(e,t){return e.distance-t.distance})).map((function(e,t){return a.a.createElement(U,{key:e.crew_id,id:t,name:e.car_model,color:e.car_color,distance:e.distance})}))))}function ee(e){var t=e.width,r=e.height,o=Object(w.b)(),c=Object(w.c)((function(e){return e||[]})).order,i=c.map.clickPlacemark,l=(c.form,Object(n.useState)()),s=Object(y.a)(l,2),u=s[0],f=s[1],p=Object(n.useState)(),b=Object(y.a)(p,2),v=b[0],E=b[1],g=Object(n.useState)(),h=Object(y.a)(g,2),O=h[0],_=h[1];Object(n.useEffect)((function(){if(O){var e=function(){var e=Object(V.a)(A.a.mark((function e(t){var r,n,a,c,i,l;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.get("item").value,e.next=3,u.geocode(r);case 3:n=e.sent,a=n.geoObjects.get(0),c=L(a),i=a.geometry.getCoordinates(),l=a.properties.get("boundedBy"),c?(o(m(i)),o(d("address",c)),o(d("isValid",!0)),v.setBounds(l)):(o(d("address","")),o(d("isValid",!1)));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return O.events.add("select",e),function(){O.events.remove("select",e)}}}),[O]);var k=function(){var e=Object(V.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new t.SuggestView("suggest",{provider:{suggest:function(e){return t.suggest(e)}}}),_(r),f(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,!u&&a.a.createElement(W.a,null),a.a.createElement(z.a,{width:t,height:r,onLoad:k,onClick:function(e){var t=e.get("coords");o(m(t)),u&&t&&Object(V.a)(A.a.mark((function e(){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.position){e.next=2;break}return e.abrupt("return");case 2:return o(d("address","\u041f\u043e\u0438\u0441\u043a...")),e.next=5,H(u,i.position);case 5:if((r=e.sent)?(o(d("address",r)),o(d("isValid",!0))):(o(m(t,{text:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",color:"red"})),o(d("address","")),o(d("isValid",!1))),i.position){e.next=9;break}return e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))()},defaultState:{controls:["zoomControl","fullscreenControl"],center:[56.873259,53.238826],zoom:9},instanceRef:function(e){e&&E(e)},modules:["control.ZoomControl","control.FullscreenControl"]},i.position&&a.a.createElement(z.b,{geometry:i.position,properties:{iconCaption:i.text},modules:["geoObject.addon.balloon"],options:{iconColor:i.color}}),a.a.createElement(Q,null)))}var te={marginTop:"1rem"},re={marginRight:"1rem",display:"inline-block",width:"10rem",textAlign:"right"},ne={display:"inline-block"};function ae(){var e=Object(w.c)((function(e){return e||[]})),t=e.order,r=t.form,n=t.selectCrew,o=Object(w.b)(),c=a.a.useState({open:!1,vertical:"top",horizontal:"center"}),i=Object(y.a)(c,2),l=i[0],s=(i[1],a.a.useState("")),u=Object(y.a)(s,2),m=u[0],f=u[1],p=a.a.useState(!1),b=Object(y.a)(p,2),v=b[0],E=b[1],g=l.vertical,j=l.horizontal;l.open;return a.a.createElement("div",{className:"order"},a.a.createElement(h.a,{anchorOrigin:{vertical:g,horizontal:j},key:"".concat(g,",").concat(j),open:v,message:m,autoHideDuration:4e3,onClose:function(){E(!1)}}),a.a.createElement(O.a,{container:!0,justify:"center"},a.a.createElement(O.a,{item:!0,xs:10},a.a.createElement("div",{style:{margin:"1rem 0"}},a.a.createElement("div",null,"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430"),a.a.createElement("hr",null),a.a.createElement("div",{style:te},a.a.createElement("span",{style:re},"\u041e\u0442\u043a\u0443\u0434\u0430:"),a.a.createElement("form",{style:ne,onSubmit:function(e){return e.preventDefault()}},a.a.createElement(_.a,{style:{width:"30rem"},type:"text",required:!0,error:!r.isValid,id:"suggest",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",name:"address",onChange:function(e){var t=e.target,r=t.name,n=t.value;o(d(r,n))},value:e.order.form.address}))),a.a.createElement("div",{style:te},a.a.createElement("span",{style:re},"\u041f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u044d\u043a\u0438\u043f\u0430\u0436:"),a.a.createElement("div",{style:ne},n?a.a.createElement(N,{title:n.car_model,color:n.car_color,number:n.car_number}):a.a.createElement("span",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0438\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435."))))),a.a.createElement(O.a,{item:!0,xs:7},a.a.createElement("div",{className:"order-map"},a.a.createElement(ee,{width:"95%",height:"20rem"}))),a.a.createElement(O.a,{item:!0,xs:3},a.a.createElement(X,null)),a.a.createElement(O.a,{item:!0,xs:10,style:{textAlign:"center"}},a.a.createElement(k.a,{onClick:function(t){if(e.order.selectCrew){var r=function(e){var t=e.source_time,r=e.crew_id,n=e.addresses;return console.log("createOrder source_time, crew_id, addresses",t,r,n),{descr:"\u0421\u043e\u0437\u0434\u0430\u043d \u0437\u0430\u043a\u0430\u0437 #".concat(r,"."),data:{order_id:12345},code:0}}({source_time:Date.now(),crew_id:e.order.selectCrew.crew_id,addresses:[{address:e.order.form.address,lat:e.order.selectCrew.lat,lon:e.order.selectCrew.lon}]});f(r.descr),E(!0)}},variant:"outlined",color:"primary",style:{marginTop:"1rem",width:"25%"},disabled:!e.order.form.isValid},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"))))}function oe(){return a.a.createElement(ae,null)}function ce(){return a.a.createElement(w.a,{store:g},a.a.createElement(z.c,{query:{load:"package.full",apikey:"41265fe6-14d2-4266-8fa2-211b392338c8"}},a.a.createElement(oe,null)))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.84cc1aff.chunk.js.map