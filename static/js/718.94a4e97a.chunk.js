"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{242:function(e,t,r){r.d(t,{L7:function(){return l},d5:function(){return i},qK:function(){return c}});var n=r(861),a=r(757),o=r.n(a),u=r(243),s=r(596),c="https://api.themoviedb.org/3/trending/movie/week",i="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function h(){return h=(0,n.Z)(o().mark((function e(t){var r,n,a,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:"",n={method:"get",url:t,params:{api_key:"cbd959d2dbe2e2acae71462135de58bb",query:r}},e.prev=2,e.next=5,(0,u.Z)(n);case 5:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(2),s.Am.info("We're sorry, but you've reached the end of search results.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),h.apply(this,arguments)}t.ZP=function(e){return h.apply(this,arguments)}},854:function(e,t,r){r.d(t,{a:function(){return o}});r(791);var n=r(643),a=r(184),o=function(){return(0,a.jsx)(n.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}},368:function(e,t,r){r(791);var n=r(689),a=r(87),o=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,o.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.original_title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}))})}},718:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),o=r(757),u=r.n(o),s=r(791),c=r(242),i=r(854),l=r(494),h="Searchbar_searchbar__0FWoU",p="Searchbar_button__nkcjk",f="Searchbar_form__D-hp5",d="Searchbar_input__19umw",v=r(184),m=function(e){var t=e.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),o=n[0],u=n[1];return(0,v.jsx)("header",{className:h,children:(0,v.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),t({query:o})},children:[(0,v.jsx)("button",{type:"submit",className:p,children:(0,v.jsx)(l.Yfv,{})}),(0,v.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},value:o,className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=r(368),g=r(87),x=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),r=t[0],o=t[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),p=h[0],f=h[1],d=(0,s.useState)([]),x=(0,a.Z)(d,2),_=x[0],j=x[1],w=(0,g.lr)(),S=(0,a.Z)(w,2),k=S[0],y=S[1];return(0,s.useEffect)((function(){var e=k.get("query");if(e){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(!0),t.next=4,(0,c.ZP)(c.d5,e);case 4:r=t.sent,j(r.results),o(!1),console.log(r),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),f(!0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}}),[k]),(0,v.jsxs)("div",{children:[(0,v.jsx)(m,{onSubmit:y}),r&&(0,v.jsx)(i.a,{}),p&&(0,v.jsx)("p",{children:"Oops ... Something went wrong..."}),_.length>0&&(0,v.jsx)(b.Z,{movies:_})]})}}}]);
//# sourceMappingURL=718.94a4e97a.chunk.js.map