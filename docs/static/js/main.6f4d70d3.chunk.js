(this.webpackJsonpspeedy=this.webpackJsonpspeedy||[]).push([[0],{132:function(e,n,t){e.exports=t(246)},246:function(e,n,t){"use strict";t.r(n);var a=t(18),r=t(0),l=t.n(r),i=t(16),o=t.n(i),c=(t(35),t(88)),u=t(255),s=t(257),m=t(19);function d(){var e=Object(a.a)(["\n  width: 100%;\n  height: 30px;\n  background-color: #fafafa;\n  border: 3px solid #f0f0f0;\n  border-radius: 4px 4px 0 0;\n  border-style:solid solid none solid;\n  display: flex;\n  display: -webkit-flex; /* Safari */\n  -webkit-app-region: drag;\n\n  div.header-content {\n    margin: 3px 5px;\n    height: 100%;\n  }\n\n  div.closeWindow,\n  div.minimizeWindow {\n    -webkit-app-region: no-drag;\n    display: inline;\n  }\n\n  div.title {\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%,0);\n    font-size: 14px;\n    font-weight: 400;\n  }\n"]);return d=function(){return e},e}var p=m.b.div(d());function b(e){var n=e.title,t=e.type;return l.a.createElement(p,{id:"app-header"},"web"===t?"":l.a.createElement("div",{className:"buttons header-content"},l.a.createElement("div",{className:"closeWindow"},l.a.createElement(c.a,{type:"text",size:"small",style:{color:"#ff0000"},icon:l.a.createElement(u.a,null),onClick:function(){window.ipcRenderer.send("close")}})),l.a.createElement("div",{className:"minimizeWindow"},l.a.createElement(c.a,{danger:!0,type:"text",size:"small",style:{color:"#1E9600"},icon:l.a.createElement(s.a,null),onClick:function(){window.ipcRenderer.send("min")}}))),l.a.createElement("div",{className:"title header-content"},n))}var f=t(38),v=t(250),g=t(247),E=t(248),h=t(254),y=t(127);function w(){var e=Object(a.a)(["\n  font-size: 16px;\n  align-items: baseline;\n"]);return w=function(){return e},e}function O(){var e=Object(a.a)(["\n  float: right;\n"]);return O=function(){return e},e}var x=v.a.Item,j=m.b.div(O()),k=m.b.div(w());function T(e){var n=e.username,t=e.openEditDrawer,a=e.isBusy;return l.a.createElement(k,{size:75},l.a.createElement(g.a,{align:"middle"},l.a.createElement(E.a,{span:3},l.a.createElement("span",{className:"option-name"},"\u5b66\u53f7")),l.a.createElement(E.a,{span:3},n),l.a.createElement(E.a,{xs:2,offset:3},l.a.createElement(c.a,{disabled:a,shape:"round",onClick:t},"\u4fee\u6539\u4e2a\u4eba\u4fe1\u606f"))))}function C(e){var n=e.visible,t=e.closeEditDrawer,a=e.onChange,i=Object(r.useRef)(null),o=Object(r.useRef)(null),u=v.a.useForm(),s=Object(f.a)(u,1)[0],m=function(){t()};return l.a.createElement(h.a,{title:"\u4fee\u6539\u4e2a\u4eba\u4fe1\u606f",placement:"right",closable:!1,onClose:m,visible:n,afterVisibleChange:function(e){e&&i&&i.focus()},getContainer:document.getElementById("root"),width:270},l.a.createElement(v.a,{hideRequiredMark:!0,onFinish:function(e){a(e),s.resetFields(),m()},form:s,onKeyUp:function(e){13===e.keyCode&&o&&o.click()}},l.a.createElement(x,{name:"username",label:"\u5b66\u53f7",rules:[{required:!0,message:"\u5b66\u53f7\u4e0d\u80fd\u4e3a\u7a7a"}]},l.a.createElement(y.a,{ref:function(e){i=e},placeholder:"\u8bf7\u8f93\u5165\u5b66\u53f7"})),l.a.createElement(x,{name:"password",label:"\u5bc6\u7801",rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}]},l.a.createElement(y.a,{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),l.a.createElement(j,null,l.a.createElement(c.a,{type:"primary",htmlType:"submit",shape:"round",ref:function(e){o=e}},"\u786e\u8ba4"),l.a.createElement(c.a,{type:"secondary",onClick:function(){s.resetFields(),m()},shape:"round",style:{margin:"0 5px 0 15px"}},"\u53d6\u6d88"))))}function B(e){var n=e.value,t=e.id,a=e.onChange,i=e.isBusy,o=Object(r.useState)(!1),c=Object(f.a)(o,2),u=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{id:t,username:n.username,openEditDrawer:function(){s(!0)},isBusy:i}),l.a.createElement(C,{visible:u,closeEditDrawer:function(){s(!1)},onChange:a}))}var R=t(57),N=t(251),S=t(258),z={userInfo:{username:"201543321543"},startEndTime:{startTime:600,endTime:720},libRoom:{lib:0,room:12},seatOptions:{window:0,plugger:0}},F={libRoomOptions:[{value:0,label:"\u603b\u9986",children:[{value:11,label:"A1"},{value:12,label:"A2"},{value:13,label:"A3"},{value:14,label:"A4"},{value:15,label:"A5"},{value:16,label:"E1"},{value:17,label:"E2"}]},{value:1,label:"\u4fe1\u56fe",children:[{value:21,label:"\u4e0d\u77e5\u9053"}]},{value:2,label:"\u4e0d\u9650\u573a\u9986"}],windowOptions:[{value:1,label:"\u9760\u7a97"},{value:2,label:"\u4e0d\u9760\u7a97"},{value:0,label:"\u4e0d\u9650"}],pluggerOptions:[{value:1,label:"\u6709\u63d2\u5ea7"},{value:2,label:"\u65e0\u63d2\u5ea7"},{value:0,label:"\u4e0d\u9650"}]};function I(e){var n=String(Math.floor(e/60)).padStart(2,"0"),t=String(e-60*n).padStart(2,"0");return"".concat(n,":").concat(t)}function q(e,n,t){return n&&e.operation&&n.name===e.operation?{name:"cancel",pendingTime:0,request:function(){return function(e,n){return new Promise((function(t){n("".concat(function(e){switch(e){case"check":return"\u67e5\u770b\u7a7a\u95f2";case"reserve":return"\u9884\u7ea6";case"cancel":return"\u53d6\u6d88";default:return""}}(e.operation),"\u64cd\u4f5c\u5df2\u53d6\u6d88")),t()}))}(e,t)}}:!n&&e.operation?{name:e.operation,pendingTime:3,request:function(){return function(e,n){return new Promise((function(t){!function(){var t=JSON.stringify(e);n(t)}(),t()}))}(e,t)}}:{}}function A(){var e=Object(a.a)(["\n  margin-bottom: 5px;\n\n  .bold-tag {\n    font-weight: 500;\n  }\n"]);return A=function(){return e},e}var V=m.b.div(A());function D(e){var n=e.value,t=e.id,a=e.onChange,i=e.isBusy;n.startTime>=n.endTime&&(n=Object(R.a)({},n,{startTime:n.endTime,endTime:n.startTime})),n=Object(R.a)({},n,{startTime:480<n.startTime?n.startTime:480,endTime:1350>n.endTime?n.endTime:1350});var o=Object(r.useState)([n.startTime,n.endTime]),c=Object(f.a)(o,2),u=c[0],s=c[1],m=Object(r.useRef)(u),d=function(e){s(e),a({startTime:e[0],endTime:e[1]})};return l.a.createElement(V,null,l.a.createElement(g.a,{align:"middle"},l.a.createElement(E.a,{span:3},l.a.createElement("span",{className:"option-name"},"\u8d77\u6b62\u65f6\u95f4")),l.a.createElement(E.a,{span:15},l.a.createElement(N.a,{id:t,range:!0,min:480,max:1350,disabled:i,step:30,onChange:d,onAfterChange:function(e){e[0]===e[1]&&(m.current[1]===e[1]||480===e[0]?e[1]+=30:m.current[0]!==e[0]&&1350!==e[1]||(e[0]-=30),d(e),m.current=e)},tooltipPlacement:"bottom",value:u,tipFormatter:I})),l.a.createElement(E.a,{span:5,offset:1},l.a.createElement(S.a,{color:i?"":"red",className:"bold-tag"},I(u[0])),l.a.createElement("span",{style:{margin:"0 8px 0 0"}},"~"),l.a.createElement(S.a,{color:i?"":"geekblue",className:"bold-tag"},I(u[1])))))}var W=t(253);function J(){var e=Object(a.a)(["\n  width: 100%;\n"]);return J=function(){return e},e}var M=Object(m.b)(W.a)(J());function P(e){var n=e.value,t=e.id,a=e.onChange,r=e.libRoomOptions,i=e.isBusy;return l.a.createElement(g.a,{align:"middle"},l.a.createElement(E.a,{span:3},l.a.createElement("label",{className:"option-name"},"\u573a\u9986\u9009\u62e9")),l.a.createElement(E.a,{span:15},l.a.createElement(M,{allowClear:!1,id:t,disabled:i,expandTrigger:"hover",placeholder:"\u8bf7\u9009\u62e9",options:r,value:[n.lib,n.room],onChange:function(e){a({lib:e[0],room:e[1]})}})))}var H=t(249),_=t(252);function G(){var e=Object(a.a)(["\n  align-items: baseline;\n"]);return G=function(){return e},e}var K=Object(m.b)(H.a)(G()),L=function(e){var n=e.name,t=e.options,a=e.value,r=e.onChange,i=e.isBusy;return l.a.createElement(K,{size:30},l.a.createElement("label",{className:"option-name"},n),l.a.createElement(_.a.Group,{value:a,disabled:i,buttonStyle:"solid",onChange:function(e){r(e.target.value)}},t.map((function(e){return l.a.createElement(_.a.Button,{value:e.value,key:e.value},e.label)}))))};function U(e){var n=e.value,t=e.id,a=e.onChange,r=e.windowOptions,i=e.pluggerOptions,o=e.isBusy;return l.a.createElement(g.a,{align:"middle",id:t},l.a.createElement(E.a,{span:12},l.a.createElement(L,{name:"\u662f\u5426\u9760\u7a97",isBusy:o,value:n.window,options:r,onChange:function(e){a(Object(R.a)({},n,{window:e}))}})),l.a.createElement(E.a,{span:12},l.a.createElement(L,{name:"\u662f\u5426\u6709\u63d2\u5ea7",isBusy:o,value:n.plugger,options:i,onChange:function(e){a(Object(R.a)({},n,{plugger:e}))}})))}var Q=t(256);function X(){var e=Object(a.a)(["\n  margin: 0 18%;\n\n  .col {\n    display: flex;\n    justify-content: center;\n  }\n"]);return X=function(){return e},e}var Y=Object(m.b)(g.a)(X()),Z=function(e){var n=e.value,t=e.targetValue,a=e.busy,r=e.text,i=e.onChange,o=e.type,u=void 0===o?"secondary":o,s=Boolean(t),m=n===t,d=m&&a>0;return l.a.createElement(c.a,{icon:m?l.a.createElement(Q.a,null):"",disabled:s&&!m,type:u,htmlType:"submit",shape:"round",value:n,onClick:function(){t||i(n)}},d?"\u53d6\u6d88\u64cd\u4f5c(".concat(I(a),")"):r)};function $(e){var n=e.value,t=void 0===n?"":n,a=e.id,r=e.onChange,i=e.busy;return l.a.createElement(Y,{align:"middle",id:a},l.a.createElement(E.a,{span:10,className:"col"},l.a.createElement(Z,{value:"check",targetValue:t,busy:i,text:"\u67e5\u770b\u5ea7\u4f4d\u7a7a\u95f2\u65f6\u95f4",onChange:r,type:"secondary"})),l.a.createElement(E.a,{span:10,offset:4,className:"col"},l.a.createElement(Z,{value:"reserve",targetValue:t,busy:i,text:"\u9884\u7ea6/\u6539\u7b7e\u5ea7\u4f4d",onChange:r,type:"primary"})))}function ee(){var e=Object(a.a)(["\n  width: 100%;\n  height: 200px;\n  min-height: 200px;\n  background-color: #ffffff;\n  border: 1px solid #d9d9d9;\n  border-radius: 3px;\n  overflow-y: scroll;\n  user-select: text;\n  padding: 2px 6px;\n  white-space: pre-wrap;\n"]);return ee=function(){return e},e}var ne=m.b.div(ee());function te(e){var n=e.text,t=e.id,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){a&&(a.scrollTop=a.scrollHeight)}),[n]),l.a.createElement(ne,{id:t,ref:function(e){return a=e},dangerouslySetInnerHTML:{__html:function(e){return e.slice(-1e4)}(n)}})}function ae(){var e=Object(a.a)(["\n  display: -webkit-flex; /* Safari */\n  display: flex;\n  height: 570px;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 30px 30px 0px 30px;\n  background-color: #fafafa;\n  border: 3px solid #f0f0f0;\n  border-radius: 0 0 4px 4px;\n  border-style:none solid solid solid;\n  -webkit-app-region: no-drag;\n"]);return ae=function(){return e},e}var re=v.a.Item,le=m.b.div(ae());function ie(){var e=Object(r.useState)(""),n=Object(f.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(-1),o=Object(f.a)(i,2),c=o[0],u=o[1],s=v.a.useForm(),m=Object(f.a)(s,1)[0],d=Object(r.useRef)(null),p=Object(r.useRef)(null),b=z,g=F,E=Boolean(c+1);function h(e){a(t+(t?"\n":"")+e)}return Object(r.useEffect)((function(){d.current&&clearTimeout(d.current),c>0?d.current=setTimeout((function(){u((function(e){return e-1}))}),1e3):p.current&&p.current.request().then((function(){p.current=null,u(-1),m.setFieldsValue({operation:""})}))}),[c,m]),l.a.createElement("div",{id:"app-body"},l.a.createElement(v.a,{form:m,initialValues:b,onFinish:function(e){p.current=q(e,p.current,h),u(p.current.pendingTime)}},l.a.createElement(le,{id:"app"},l.a.createElement(re,{name:"userInfo"},l.a.createElement(B,{isBusy:E})),l.a.createElement(re,{name:"startEndTime"},l.a.createElement(D,{isBusy:E})),l.a.createElement(re,{name:"libRoom"},l.a.createElement(P,{libRoomOptions:g.libRoomOptions,isBusy:E})),l.a.createElement(re,{name:"seatOptions"},l.a.createElement(U,{windowOptions:g.windowOptions,pluggerOptions:g.pluggerOptions,isBusy:E})),l.a.createElement(re,{name:"operation"},l.a.createElement($,{busy:c})),l.a.createElement(re,null,l.a.createElement(te,{text:t})))))}function oe(){var e=Object(a.a)(["\n  body {\n    height:0;\n    background-color: transparent;\n    overflow-y: hidden;\n  }\n\n  #root {\n    max-width: 750px;\n    margin: "," auto;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  .option-name {\n    font-size: 14px;\n    color: #000000aa;\n    font-weight: 600;\n  }\n\n  // style of scroll bar\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n  ::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #46a6ff;\n  }\n  ::-webkit-scrollbar-thumb:active {\n    background-color: #096dd9;\n  }\n"]);return oe=function(){return e},e}var ce=Object(m.a)(oe(),(function(e){return"web"===e.type?"5%":"0"}));function ue(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ce,{type:"desktop"}),l.a.createElement(b,{title:"\u6b66\u6c49\u5927\u5b66\u56fe\u4e66\u9986\u5ea7\u4f4d\u9884\u7ea6\u52a9\u624b",type:"desktop"}),l.a.createElement(ie,null))}o.a.render(l.a.createElement(ue,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.6f4d70d3.chunk.js.map