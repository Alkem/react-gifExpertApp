(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{26:function(t,e,r){},28:function(t,e,r){},29:function(t,e,r){},51:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r(19),c=r.n(a),i=(r(26),r(20)),u=r(3),s=r(0),o=function(t){var e=t.handlerAdd,r=Object(n.useState)(""),a=Object(u.a)(r,2),c=a[0],i=a[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(c),i("")},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value)}})})},p=r(21),d=(r(28),function(t){var e=t.title,r=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeInUp",children:[Object(s.jsx)("p",{children:e}),Object(s.jsx)("img",{src:r,alt:e})]})}),l=(r(29),r(5)),j=r.n(l),f=r(8),b=r(9),h=r.n(b),v=r(10),O=r.n(v),x=function(){var t=Object(f.a)(j.a.mark((function t(e,r){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get(e,{params:r});case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}(),g=function(){var t=Object(f.a)(j.a.mark((function t(e,r,n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post(e,{params:r,data:n});case 3:return a=t.sent,t.abrupt("return",a);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r,n){return t.apply(this,arguments)}}();x.propTypes={url:O.a.string.isRequired},g.propTypes={url:O.a.string.isRequired};var m=function(t){var e=t.category,r=function(t){var e=Object(n.useState)({data:[],loading:!0}),r=Object(u.a)(e,2),a=r[0],c=r[1];return Object(n.useEffect)((function(){x("https://api.giphy.com/v1/gifs/search",{api_key:"7rG1ZLqvhCH40j0WRksIgl61CdPzWCKy",q:t,limit:10}).then((function(t){var e=t.data.data.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}}));c({data:e,loading:!1})})).catch((function(t){return console.log(t)}))}),[t]),a}(e),a=r.data,c=r.loading;return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("h3",{children:e}),c&&Object(s.jsx)("p",{children:"Loading..."}),Object(s.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(s.jsx)(d,Object(p.a)({},t),t.id)}))})]})};m.defaultProps={category:"Rick and Morty"};var y=m,k=function(t){var e=t.title,r=Object(n.useState)(["Rick and Morty"]),a=Object(u.a)(r,2),c=a[0],p=a[1];return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("h2",{children:e}),Object(s.jsx)("hr",{}),Object(s.jsx)(o,{handlerAdd:function(t){t.trim().length>2&&p((function(e){return[t].concat(Object(i.a)(e))}))}}),Object(s.jsx)("ol",{children:c.map((function(t){return Object(s.jsx)(y,{category:t},t)}))})]})};k.defaultProps={title:"GifExpertApp"};var w=k;c.a.render(Object(s.jsx)(w,{}),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.ec8a4f2a.chunk.js.map