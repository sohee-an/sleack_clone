(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[925,256],{2309:(n,e,t)=>{"use strict";t.d(e,{Z:()=>S});var r,a,o,i,l,c,s=t(4461),u=t(2034);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var p=s.Z.div(r||(r=d(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  padding-top: 0;\n"]))),f=s.Z.form(a||(a=d(["\n  color: rgb(29, 28, 29);\n  font-size: 15px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid rgb(29, 28, 29);\n"]))),m=(0,s.Z)(u.r)(o||(o=d(["\n  font-family: Slack-Lato, appleLogo, sans-serif;\n  font-size: 15px;\n  padding: 8px 9px;\n  width: 100%;\n  & strong {\n    background: skyblue;\n  }\n  & textarea {\n    height: 44px;\n    padding: 9px 10px !important;\n    outline: none !important;\n    border-radius: 4px !important;\n    resize: none !important;\n    line-height: 22px;\n    border: none;\n  }\n  & ul {\n    border: 1px solid lightgray;\n    max-height: 200px;\n    overflow-y: auto;\n    padding: 9px 10px;\n    background: white;\n    border-radius: 4px;\n    width: 150px;\n  }\n"]))),h=s.Z.div(i||(i=d(["\n  position: relative;\n  background: rgb(248, 248, 248);\n  height: 41px;\n  display: flex;\n  border-top: 1px solid rgb(221, 221, 221);\n  align-items: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n"]))),g=s.Z.button(l||(l=d(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n"]))),b=s.Z.button(c||(c=d(["\n  padding: 4px 20px;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: rgb(28, 29, 28);\n  width: 100%;\n  & img {\n    margin-right: 5px;\n  }\n  ",";\n"])),(function(n){return n.focus&&"\n    background: #1264a3;\n    color: white;\n  "})),v=t(3564),x=t(7294),y=t(9367),w=t.n(y),k=t(4309),E=t(5767),Z=t(6182),_=t.n(Z);const S=function(n){var e=n.chat,t=n.onSubmitForm,r=n.onChangeChat,a=n.placeholder,o=(0,k.UO)().workspace,i=(0,E.ZP)("/api/users",v.Z,{dedupingInterval:2e3}),l=i.data,c=(i.error,i.revalidate,i.mutate,(0,E.ZP)(l?"/api/workspaces/".concat(o,"/members"):null,v.Z).data),s=(0,x.useRef)(null);(0,x.useEffect)((function(){s.current&&w()(s.current)}),[]);var d=(0,x.useCallback)((function(n){"Enter"===n.key&&(n.shiftKey||(n.preventDefault(),t(n)))}),[t]),y=(0,x.useCallback)((function(n,e,t,r,a){if(c)return x.createElement(b,{focus:a},x.createElement("img",{src:_().url(c[r].email,{s:"20px",d:"retro"}),alt:c[r].nickname}),x.createElement("span",null,t))}),[c]);return x.createElement(p,null,x.createElement(f,{onSubmit:t},x.createElement(m,{id:"editor-chat",value:e,onChange:r,onKeyPress:d,placeholder:a,inputRef:s,allowSuggestionsAboveCursor:!0},x.createElement(u.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==c?void 0:c.map((function(n){return{id:n.id,display:n.nickname}})))||[],renderSuggestion:y})),x.createElement(h,null,x.createElement(g,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=e&&e.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=e&&e.trim())},x.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(n,e,t)=>{"use strict";t.d(e,{Z:()=>C});var r,a,o,i=t(4461),l=i.Z.div(r||(a=["\n  display: flex;\n  padding: 8px 20px;\n  &:hover {\n    background: #eee;\n  }\n  & .chat-img {\n    display: flex;\n    width: 36px;\n    margin-right: 8px;\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"],o||(o=a.slice(0)),r=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}})))),c=t(7294),s=t(6182),u=t.n(s),d=t(7484),p=t.n(d),f=t(8817),m=t(4309),h=t(9655),g=function(n){var e=n.data,t=(0,m.UO)().workspace,r="Sender"in e?e.Sender:e.User;console.log("chatdata position chat",e);var a=(0,c.useMemo)((function(){return e.content.startsWith("uploads\\")||e.content.startsWith("uploads/")?c.createElement("img",{src:"".concat("http://43.201.108.188","/").concat(e.content),style:{maxHeight:200}}):(0,f.Z)({input:e.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator:function(n,e){var r=n.match(/@\[(.+?)]\((\d+?)\)/);return r?c.createElement(h.rU,{key:n+e,to:"/workspace/".concat(t,"/dm/").concat(r[2])},"@",r[1]):c.createElement("br",{key:e})}})}),[t,e.content]);return c.createElement(l,null,c.createElement("div",{className:"chat-img"},c.createElement("img",{src:u().url(r.email,{s:"36px",d:"retro"}),alt:r.nickname})),c.createElement("div",{className:"chat-text"},c.createElement("div",{className:"chat-user"},c.createElement("b",null,r.nickname),c.createElement("span",null,p()(e.createdAt).format("h:mm A"))),c.createElement("p",null,a)))};const b=(0,c.memo)(g);var v,x,y;function w(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var k=i.Z.div(v||(v=w(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"]))),E=i.Z.section(x||(x=w(["\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n"]))),Z=i.Z.div(y||(y=w(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  width: 100%;\n  position: sticky;\n  top: 14px;\n  & button {\n    font-weight: bold;\n    font-size: 13px;\n    height: 28px;\n    line-height: 27px;\n    padding: 0 16px;\n    z-index: 2;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);\n    border-radius: 24px;\n    position: relative;\n    top: -13px;\n    background: white;\n    border: none;\n    outline: none;\n  }\n"]))),_=t(1298);function S(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const C=(0,c.forwardRef)((function(n,e){var t=n.chatSections,r=n.setSize,a=n.isReachingEnd,o=(0,c.useCallback)((function(n){0!==n.scrollTop||a||(console.log("가장 위"),r((function(n){return n+1})).then((function(){var t=null==e?void 0:e.current;t&&t.scrollTop(t.getScrollHeight()-n.scrollHeight)})))}),[e,a,r]);return c.createElement(k,null,c.createElement(_.$B,{autoHide:!0,ref:e,onScrollFrame:o},Object.entries(t).map((function(n){var e,t,r=(t=2,function(n){if(Array.isArray(n))return n}(e=n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],o=r[1];return c.createElement(E,{className:"section-".concat(a),key:a},c.createElement(Z,null,c.createElement("button",null,a)),o.map((function(n){return c.createElement(b,{key:n.id,data:n})})))}))))}))},9250:(n,e,t)=>{"use strict";t.d(e,{Z:()=>m});var r=t(5692),a=t(8678),o=t(3046),i=t(3564),l=t(9669),c=t.n(l),s=t(7294),u=t(4309),d=t(9249),p=t(5767);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const m=function(n){var e,t,l=n.show,m=n.onCloseModal,h=n.setShowInviteChannelModal,g=(0,u.UO)(),b=g.workspace,v=g.channel,x=(e=(0,a.Z)(""),t=3,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=x[0],w=x[1],k=x[2],E=(0,p.ZP)("/api/users",i.Z).data,Z=(0,p.ZP)(E&&v?"/api/workspaces/".concat(b,"/channels/").concat(v,"/members"):null,i.Z).revalidate,_=(0,s.useCallback)((function(n){n.preventDefault(),y&&y.trim()&&c().post("/api/workspaces/".concat(b,"/channels/").concat(v,"/members"),{email:y}).then((function(){Z(),h(!1),k("")})).catch((function(n){var e;console.dir(n),d.Am.error(null===(e=n.response)||void 0===e?void 0:e.data,{position:"bottom-center"})}))}),[y]);return s.createElement(r.Z,{show:l,onCloseModal:m},s.createElement("form",{onSubmit:_},s.createElement(o.__,{id:"member-label"},s.createElement("span",null,"채널 멤버 초대"),s.createElement(o.II,{id:"member",value:y,onChange:w})),s.createElement(o.zx,{type:"submit"},"초대하기")))}},5692:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var r,a,o=t(4461);function i(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var l=o.Z.div(r||(r=i(["\n  position: fixed;\n  text-align: center;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  z-index: 1022;\n  & > div {\n    margin-top: 200px;\n    display: inline-block;\n    width: 440px;\n    background: white;\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);\n    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);\n    border-radius: 6px;\n    user-select: none;\n    max-width: 440px;\n    padding: 30px 40px 0;\n    z-index: 1012;\n    position: relative;\n  }\n"]))),c=o.Z.button(a||(a=i(["\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  cursor: pointer;\n"]))),s=t(7294);const u=function(n){var e=n.show,t=n.children,r=n.onCloseModal,a=(0,s.useCallback)((function(n){n.stopPropagation()}),[]);return e?s.createElement(l,{onClick:r},s.createElement("div",{onClick:a},s.createElement(c,{onClick:r},"×"),t)):null}},8678:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(7294);function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const o=function(n){var e,t,o=(e=(0,r.useState)(n),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1];return[i,(0,r.useCallback)((function(n){l(n.target.value)}),[]),l]}},2951:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(6809),a=t.n(r),o=t(7294),i={};const l=function(n){var e=(0,o.useCallback)((function(){n&&(i[n].disconnect(),delete i[n])}),[n]);return n?(i[n]||(i[n]=a().connect("".concat("http://localhost:3095","/ws-").concat(n),{transports:["websocket"]})),[i[n],e]):[void 0,e]}},5256:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>_});var r,a,o,i=t(2309),l=t(2545),c=t(9250),s=t(8678),u=t(2951),d=t(4461);function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var f=d.Z.div(r||(r=p(["\n  display: flex;\n  flex-wrap: wrap;\n  height: calc(100vh - 38px);\n  flex-flow: column;\n  position: relative;\n"]))),m=d.Z.header(a||(a=p(["\n  height: 64px;\n  display: flex;\n  width: 100%;\n  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\n  box-shadow: 0 1px 0 var(--saf-0);\n  padding: 20px 16px 20px 20px;\n  font-weight: bold;\n  align-items: center;\n\n  & .header-right {\n    display: flex;\n    flex: 1;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"]))),h=d.Z.div(o||(o=p(["\n  position: absolute;\n  top: 64px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 64px);\n  background: white;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n"]))),g=t(3564),b=t(8667),v=t(9669),x=t.n(v),y=t(7294),w=t(4309),k=t(5767);function E(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(n){l=!0,a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(n,e)||function(n,e){if(n){if("string"==typeof n)return Z(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const _=function(){var n,e,t=(0,w.UO)(),r=t.workspace,a=t.channel,o=(0,k.ZP)("/api/users",g.Z).data,d=E((0,s.Z)(""),3),p=d[0],v=d[1],Z=d[2],_=(0,k.ZP)("/api/workspaces/".concat(r,"/channels/").concat(a),g.Z).data;console.log("chadata",_);var S=(0,k.g_)((function(n){return"/api/workspaces/".concat(r,"/channels/").concat(a,"/chats?perPage=20&page=").concat(n+1)}),g.Z),C=S.data,A=S.mutate,j=S.revalidate,z=S.setSize,O=(0,k.ZP)(o?"/api/workspaces/".concat(r,"/channels/").concat(a,"/members"):null,g.Z).data,I=E((0,u.Z)(r),1)[0],T=0===(null==C||null===(n=C[0])||void 0===n?void 0:n.length)||C&&(null===(e=C[C.length-1])||void 0===e?void 0:e.length)<20||!1,P=(0,y.useRef)(null),U=E((0,y.useState)(!1),2),M=U[0],D=U[1],N=E((0,y.useState)(!1),2),H=N[0],B=N[1],F=(0,y.useCallback)((function(n){if(n.preventDefault(),console.log(p),null!=p&&p.trim()&&C&&_){var e=p;A((function(n){var t;return null==n||n[0].unshift({id:((null===(t=C[0][0])||void 0===t?void 0:t.id)||0)+1,content:e,UserId:o.id,User:o,ChannelId:_.id,Channel:_,createdAt:new Date}),n}),!1).then((function(){var n;Z(""),null===(n=P.current)||void 0===n||n.scrollToBottom()})),x().post("/api/workspaces/".concat(r,"/channels/").concat(a,"/chats"),{content:p}).then((function(){j()})).catch(console.error)}}),[p,C,o,_,r,a]),R=(0,y.useCallback)((function(n){n.Channel.name!==a||!n.content.startsWith("uploads\\")&&n.UserId===(null==o?void 0:o.id)||A((function(e){return null==e||e[0].unshift(n),e}),!1).then((function(){var n;P.current&&P.current.getScrollHeight()<P.current.getClientHeight()+P.current.getScrollTop()+150&&(console.log("scrollToBottom!",null===(n=P.current)||void 0===n?void 0:n.getValues()),setTimeout((function(){var n;null===(n=P.current)||void 0===n||n.scrollToBottom()}),50))}))}),[a,o]);(0,y.useEffect)((function(){return null==I||I.on("message",R),function(){null==I||I.off("message",R)}}),[I,R]),(0,y.useEffect)((function(){1===(null==C?void 0:C.length)&&(console.log("toBottomWhenLoaded",P.current),setTimeout((function(){var n;console.log("scrollbar",P.current),null===(n=P.current)||void 0===n||n.scrollToBottom()}),500))}),[C]);var $=(0,y.useCallback)((function(){D(!0)}),[]),L=(0,y.useCallback)((function(){D(!1)}),[]),W=((0,y.useCallback)((function(n){var e=new FormData;if(n.target.files)for(var t=0;t<n.target.files.length;t++){var o=n.target.files[t].getAsFile();console.log("... file["+t+"].name = "+o.name),e.append("image",o)}x().post("/api/workspaces/".concat(r,"/channels/").concat(a,"/images"),e).then((function(){}))}),[]),(0,y.useCallback)((function(n){n.preventDefault(),console.log(n);var e=new FormData;if(n.dataTransfer.items){for(var t=0;t<n.dataTransfer.items.length;t++)if("file"===n.dataTransfer.items[t].kind){var o=n.dataTransfer.items[t].getAsFile();console.log(n,".... file["+t+"].name = "+o.name),e.append("image",o)}}else for(var i=0;i<n.dataTransfer.files.length;i++)console.log(n,"... file["+i+"].name = "+n.dataTransfer.files[i].name),e.append("image",n.dataTransfer.files[i]);x().post("/api/workspaces/".concat(r,"/channels/").concat(a,"/images"),e).then((function(){B(!1)}))}),[r,a])),Y=(0,y.useCallback)((function(n){n.preventDefault(),console.log(n),B(!0)}),[]);if(!o||!o)return null;var K=(0,b.Z)(C?C.flat().reverse():[]);return y.createElement(f,{onDrop:W,onDragOver:Y},y.createElement(m,null,y.createElement("span",null,"#",a),y.createElement("div",{className:"header-right"},y.createElement("span",null,null==O?void 0:O.length),y.createElement("button",{onClick:$,className:"c-button-unstyled p-ia__view_header__button","aria-label":"Add people to #react-native","data-sk":"tooltip_parent",type:"button"},y.createElement("i",{className:"c-icon p-ia__view_header__button_icon c-icon--add-user","aria-hidden":"true"})))),y.createElement(l.Z,{chatSections:K,ref:P,setSize:z,isReachingEnd:T}),y.createElement(i.Z,{chat:p,onChangeChat:v,onSubmitForm:F}),y.createElement(c.Z,{show:M,onCloseModal:L,setShowInviteChannelModal:D}),H&&y.createElement(h,null,"업로드!"))}},3046:(n,e,t)=>{"use strict";t.d(e,{II:()=>g,Ji:()=>y,__:()=>h,fB:()=>x,h4:()=>f,jj:()=>v,l0:()=>m,zx:()=>b});var r,a,o,i,l,c,s,u,d=t(4461);function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var f=d.Z.header(r||(r=p(["\n  text-align: center;\n  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 46px;\n  letter-spacing: -0.75px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),m=d.Z.form(a||(a=p(["\n  margin: 0 auto;\n  width: 400px;\n  max-width: 400px;\n"]))),h=d.Z.label(o||(o=p(["\n  margin-bottom: 16px;\n  & > span {\n    display: block;\n    text-align: left;\n    padding-bottom: 8px;\n    font-size: 15px;\n    cursor: pointer;\n    line-height: 1.46666667;\n    font-weight: 700;\n  }\n"]))),g=d.Z.input(i||(i=p(["\n  border-radius: 4px;\n  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);\n  border: 1px solid var(--saf-0);\n  transition: border 80ms ease-out, box-shadow 80ms ease-out;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  width: 100%;\n  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);\n  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);\n  padding: 12px;\n  height: 44px;\n  padding-top: 11px;\n  padding-bottom: 13px;\n  font-size: 18px;\n  line-height: 1.33333333;\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),b=d.Z.button(l||(l=p(["\n  margin-bottom: 12px;\n  width: 100%;\n  max-width: 100%;\n  color: #fff;\n  background-color: #4a154b;\n  border: none;\n  font-size: 18px;\n  font-weight: 900;\n  height: 44px;\n  min-width: 96px;\n  padding: 0 16px 3px;\n  transition: all 80ms linear;\n  user-select: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: rgba(74, 21, 75, 0.9);\n    border: none;\n  }\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),v=d.Z.div(c||(c=p(["\n  color: #e01e5a;\n  margin: 8px 0 16px;\n  font-weight: bold;\n"]))),x=d.Z.div(s||(s=p(["\n  color: #2eb67d;\n  font-weight: bold;\n"]))),y=d.Z.p(u||(u=p(["\n  font-size: 13px;\n  color: #616061;\n  margin: 0 auto 8px;\n  width: 400px;\n  max-width: 400px;\n  & a {\n    color: #1264a3;\n    text-decoration: none;\n    font-weight: 700;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])))},3564:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(9669),a=t.n(r);const o=function(n){return a().get(n,{withCredentials:!0}).then((function(n){return n.data}))}},8667:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(7484),a=t.n(r);function o(n){var e={};return n.forEach((function(n){var t=a()(n.createdAt).format("YYYY-MM-DD");Array.isArray(e[t])?e[t].push(n):e[t]=[n]})),e}},7020:()=>{}}]);