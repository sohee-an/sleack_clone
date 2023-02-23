"use strict";(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[94],{2309:(e,n,t)=>{t.d(n,{Z:()=>O});var r,a,o,i,l,c,u=t(4461),s=t(2034);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=u.Z.div(r||(r=d(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  padding-top: 0;\n"]))),f=u.Z.form(a||(a=d(["\n  color: rgb(29, 28, 29);\n  font-size: 15px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid rgb(29, 28, 29);\n"]))),m=(0,u.Z)(s.r)(o||(o=d(["\n  font-family: Slack-Lato, appleLogo, sans-serif;\n  font-size: 15px;\n  padding: 8px 9px;\n  width: 100%;\n  & strong {\n    background: skyblue;\n  }\n  & textarea {\n    height: 44px;\n    padding: 9px 10px !important;\n    outline: none !important;\n    border-radius: 4px !important;\n    resize: none !important;\n    line-height: 22px;\n    border: none;\n  }\n  & ul {\n    border: 1px solid lightgray;\n    max-height: 200px;\n    overflow-y: auto;\n    padding: 9px 10px;\n    background: white;\n    border-radius: 4px;\n    width: 150px;\n  }\n"]))),g=u.Z.div(i||(i=d(["\n  position: relative;\n  background: rgb(248, 248, 248);\n  height: 41px;\n  display: flex;\n  border-top: 1px solid rgb(221, 221, 221);\n  align-items: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"]))),h=u.Z.button(l||(l=d(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n"]))),b=u.Z.button(c||(c=d(["\n  padding: 4px 20px;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: rgb(28, 29, 28);\n  width: 100%;\n  & img {\n    margin-right: 5px;\n  }\n  ",";\n"])),(function(e){return e.focus&&"\n    background: #1264a3;\n    color: white;\n  "})),v=t(3564),x=t(7294),y=t(9367),w=t.n(y),k=t(4309),E=t(5767),S=t(6182),Z=t.n(S);const O=function(e){var n=e.chat,t=e.onSubmitForm,r=e.onChangeChat,a=e.placeholder,o=(0,k.UO)().workspace,i=(0,E.ZP)("/api/users",v.Z,{dedupingInterval:2e3}),l=i.data,c=(i.error,i.revalidate,i.mutate,(0,E.ZP)(l?"/api/workspaces/".concat(o,"/members"):null,v.Z).data),u=(0,x.useRef)(null);(0,x.useEffect)((function(){u.current&&w()(u.current)}),[]);var d=(0,x.useCallback)((function(e){"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),t(e)))}),[t]),y=(0,x.useCallback)((function(e,n,t,r,a){if(c)return x.createElement(b,{focus:a},x.createElement("img",{src:Z().url(c[r].email,{s:"20px",d:"retro"}),alt:c[r].nickname}),x.createElement("span",null,t))}),[c]);return x.createElement(p,null,x.createElement(f,{onSubmit:t},x.createElement(m,{id:"editor-chat",value:n,onChange:r,onKeyPress:d,placeholder:a,inputRef:u,allowSuggestionsAboveCursor:!0},x.createElement(s.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==c?void 0:c.map((function(e){return{id:e.id,display:e.nickname}})))||[],renderSuggestion:y})),x.createElement(g,null,x.createElement(h,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=n&&n.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=n&&n.trim())},x.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(e,n,t)=>{t.d(n,{Z:()=>j});var r,a,o,i=t(4461),l=i.Z.div(r||(a=["\n  display: flex;\n  padding: 8px 20px;\n  &:hover {\n    background: #eee;\n  }\n  & .chat-img {\n    display: flex;\n    width: 36px;\n    margin-right: 8px;\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}})))),c=t(7294),u=t(6182),s=t.n(u),d=t(7484),p=t.n(d),f=t(8817),m=t(4309),g=t(9655),h=function(e){var n=e.data,t=(0,m.UO)().workspace,r="Sender"in n?n.Sender:n.User;console.log("chatdata position chat",n);var a=(0,c.useMemo)((function(){return n.content.startsWith("uploads\\")||n.content.startsWith("uploads/")?c.createElement("img",{src:"".concat("http://43.201.108.188","/").concat(n.content),style:{maxHeight:200}}):(0,f.Z)({input:n.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator:function(e,n){var r=e.match(/@\[(.+?)]\((\d+?)\)/);return r?c.createElement(g.rU,{key:e+n,to:"/workspace/".concat(t,"/dm/").concat(r[2])},"@",r[1]):c.createElement("br",{key:n})}})}),[t,n.content]);return c.createElement(l,null,c.createElement("div",{className:"chat-img"},c.createElement("img",{src:s().url(r.email,{s:"36px",d:"retro"}),alt:r.nickname})),c.createElement("div",{className:"chat-text"},c.createElement("div",{className:"chat-user"},c.createElement("b",null,r.nickname),c.createElement("span",null,p()(n.createdAt).format("h:mm A"))),c.createElement("p",null,a)))};const b=(0,c.memo)(h);var v,x,y;function w(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k=i.Z.div(v||(v=w(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"]))),E=i.Z.section(x||(x=w(["\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n"]))),S=i.Z.div(y||(y=w(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  width: 100%;\n  position: sticky;\n  top: 14px;\n  & button {\n    font-weight: bold;\n    font-size: 13px;\n    height: 28px;\n    line-height: 27px;\n    padding: 0 16px;\n    z-index: 2;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n    border-radius: 24px;\n    position: relative;\n    top: -13px;\n    background: white;\n    border: none;\n    outline: none;\n  }\n"]))),Z=t(1298);function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const j=(0,c.forwardRef)((function(e,n){var t=e.chatSections,r=e.setSize,a=e.isReachingEnd,o=(0,c.useCallback)((function(e){0!==e.scrollTop||a||(console.log("가장 위"),r((function(e){return e+1})).then((function(){var t=null==n?void 0:n.current;t&&t.scrollTop(t.getScrollHeight()-e.scrollHeight)})))}),[n,a,r]);return c.createElement(k,null,c.createElement(Z.$B,{autoHide:!0,ref:n,onScrollFrame:o},Object.entries(t).map((function(e){var n,t,r=(t=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],o=r[1];return c.createElement(E,{className:"section-".concat(a),key:a},c.createElement(S,null,c.createElement("button",null,a)),o.map((function(e){return c.createElement(b,{key:e.id,data:e})})))}))))}))},3094:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var r,a,o,i=t(2309),l=t(2545),c=t(8678),u=t(2951),s=t(4461);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=s.Z.div(r||(r=d(["\n  display: flex;\n  flex-wrap: wrap;\n  height: calc(100vh - 38px);\n  flex-flow: column;\n  position: relative;\n"]))),f=s.Z.header(a||(a=d(["\n  height: 64px;\n  display: flex;\n  width: 100%;\n  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n  box-shadow: 0 1px 0 var(--saf-0);\n  padding: 20px 16px 20px 20px;\n  font-weight: bold;\n  align-items: center;\n  & img {\n    margin-right: 5px;\n  }\n"]))),m=s.Z.div(o||(o=d(["\n  position: absolute;\n  top: 64px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 64px);\n  background: white;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n"]))),g=t(3564),h=t(8667),b=t(9669),v=t.n(b),x=t(7294),y=t(6182),w=t.n(y),k=t(4309),E=t(5767);function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const O=function(){var e,n,t=(0,k.UO)(),r=t.workspace,a=t.id,o=(0,E.ZP)("/api/workspaces/".concat(r,"/users/").concat(a),g.Z).data,s=(0,E.ZP)("/api/users",g.Z).data,d=S((0,c.Z)(""),3),b=d[0],y=d[1],Z=d[2],O=(0,E.g_)((function(e){return"/api/workspaces/".concat(r,"/dms/").concat(a,"/chats?perPage=20&page=").concat(e+1)}),g.Z),j=O.data,A=O.mutate,_=O.revalidate,z=O.setSize,C=S((0,u.Z)(r),1)[0],T=0===(null==j||null===(e=j[0])||void 0===e?void 0:e.length)||j&&(null===(n=j[j.length-1])||void 0===n?void 0:n.length)<20||!1,D=(0,x.useRef)(null),I=S((0,x.useState)(!1),2),P=I[0],N=I[1],R=(0,x.useCallback)((function(e){if(e.preventDefault(),null!=b&&b.trim()&&j){var n=b;A((function(e){var t;return null==e||e[0].unshift({id:((null===(t=j[0][0])||void 0===t?void 0:t.id)||0)+1,content:n,SenderId:s.id,Sender:s,ReceiverId:o.id,Receiver:o,createdAt:new Date}),e}),!1).then((function(){var e;Z(""),null===(e=D.current)||void 0===e||e.scrollToBottom()})),v().post("/api/workspaces/".concat(r,"/dms/").concat(a,"/chats"),{content:b}).then((function(){_()})).catch(console.error)}}),[b,j,s,o,r,a]),U=(0,x.useCallback)((function(e){e.SenderId===Number(a)&&s.id!==Number(a)&&A((function(n){return null==n||n[0].unshift(e),n}),!1).then((function(){var e;D.current&&D.current.getScrollHeight()<D.current.getClientHeight()+D.current.getScrollTop()+150&&(console.log("scrollToBottom!",null===(e=D.current)||void 0===e?void 0:e.getValues()),setTimeout((function(){var e;null===(e=D.current)||void 0===e||e.scrollToBottom()}),50))}))}),[]);(0,x.useEffect)((function(){return null==C||C.on("dm",U),function(){null==C||C.off("dm",U)}}),[C,U]),(0,x.useEffect)((function(){1===(null==j?void 0:j.length)&&setTimeout((function(){var e;null===(e=D.current)||void 0===e||e.scrollToBottom()}),100)}),[j]);var H=(0,x.useCallback)((function(e){e.preventDefault(),console.log(e);var n=new FormData;if(e.dataTransfer.items){for(var t=0;t<e.dataTransfer.items.length;t++)if("file"===e.dataTransfer.items[t].kind){var o=e.dataTransfer.items[t].getAsFile();console.log("... file["+t+"].name = "+o.name),n.append("image",o)}}else for(var i=0;i<e.dataTransfer.files.length;i++)console.log("... file["+i+"].name = "+e.dataTransfer.files[i].name),n.append("image",e.dataTransfer.files[i]);v().post("/api/workspaces/".concat(r,"/dms/").concat(a,"/images"),n).then((function(){N(!1),_()}))}),[_,r,a]),B=(0,x.useCallback)((function(e){e.preventDefault(),console.log(e),N(!0)}),[]);if(!o||!s)return null;var F=(0,h.Z)(j?j.flat().reverse():[]);return console.log("chat",F),x.createElement(p,{onDrop:H,onDragOver:B},x.createElement(f,null,x.createElement("img",{src:w().url(o.email,{s:"24px",d:"retro"}),alt:o.nickname}),x.createElement("span",null,o.nickname)),x.createElement(l.Z,{chatSections:F,ref:D,setSize:z,isReachingEnd:T}),x.createElement(i.Z,{chat:b,onChangeChat:y,onSubmitForm:R}),P&&x.createElement(m,null,"업로드!"))}},8667:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7484),a=t.n(r);function o(e){var n={};return e.forEach((function(e){var t=a()(e.createdAt).format("YYYY-MM-DD");Array.isArray(n[t])?n[t].push(e):n[t]=[e]})),n}}}]);