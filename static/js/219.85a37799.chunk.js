"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{219:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,u,i,c,s,o=n(439),p=n(247),f=n(791),l=n(689),d=n(168),h=n(444),x=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),m=h.ZP.ul(a||(a=(0,d.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),v=h.ZP.li(u||(u=(0,d.Z)(["\n  flex-basis: calc((100% - 60px) / 5);\n  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,\n    rgb(0 0 0 / 20%) 0px 2px 1px;\n  border-radius: 6px;\n"]))),g=h.ZP.p(i||(i=(0,d.Z)(["\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: bold;\n"]))),w=h.ZP.p(c||(c=(0,d.Z)(["\n  font-size: 20px;\n"]))),Z=h.ZP.p(s||(s=(0,d.Z)(["\n  text-transform: uppercase;\n  font-size: 40px;\n  font-weight: bold;\n  margin-bottom: 50px;\n"]))),b=n(793),_=n(184),y=function(){var e=(0,f.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,l.UO)().movieId,u=(0,f.useState)(null),i=(0,o.Z)(u,2),c=i[0],s=i[1];if((0,f.useEffect)((function(){(0,p.IQ)(a).then((function(e){r(e),s(null)})).catch((function(e){s(e),r([])}))}),[a,c]),n)return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(x,{children:(0,_.jsx)(m,{children:n.map((function(e){var t=e.id,n=e.name,r=e.profilePath,a=e.character;return(0,_.jsxs)(v,{children:[(0,_.jsx)("img",{src:null!==r?"https://image.tmdb.org/t/p/w500/".concat(r):b,alt:n,width:"250",height:"375"}),(0,_.jsxs)(g,{children:[n," "]}),(0,_.jsxs)(w,{children:["Character:",a]})]},t)}))})}),0===n.length&&!c&&(0,_.jsx)(Z,{children:"There is no information here yet"})]})}},247:function(e,t,n){n.d(t,{Df:function(){return s},IQ:function(){return p},Jh:function(){return f},Pg:function(){return o},XT:function(){return l}});var r=n(861),a=n(757),u=n.n(a),i=n(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="9384544c410021c8ddd99f4e7b3ff84b",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return t=e.sent,n=t.data,r=function(e){return e.map((function(e){return{id:e.id,title:e.title,posterPath:e.poster_path,releaseDate:e.release_date}}))},e.abrupt("return",r(n.results));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,s,o,p,f,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,a=r.title,s=r.poster_path,o=r.release_date,p=r.genres,f=r.overview,l=r.vote_average,e.abrupt("return",{title:a,posterPath:s,releaseDate:o,genres:p,overview:f,voteAverage:l});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,a=function(e){return e.map((function(e){return{id:e.id,name:e.name,profilePath:e.profile_path,character:e.character}}))},e.abrupt("return",a(r.cast));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,a=function(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))},e.abrupt("return",a(r.results));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie",{params:{api_key:c,language:"en-US",query:t,page:1,include_adult:!1}});case 2:return n=e.sent,r=n.data,a=function(e){return e.map((function(e){return{id:e.id,title:e.title,posterPath:e.poster_path,releaseDate:e.release_date}}))},e.abrupt("return",a(r.results));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},793:function(e,t,n){e.exports=n.p+"static/media/notfound.7568c9c9b8b52f751a5f.png"}}]);
//# sourceMappingURL=219.85a37799.chunk.js.map