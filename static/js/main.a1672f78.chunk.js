(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),i=n.n(a),r=n(13),c=n.n(r),o=n(4),m=n.n(o),l=n(14),d=n(15),u=n(16),j=n(19),v=n(18),g=n(17),h=n.n(g);n(44);var b=function(e){e.id,e.rating,e.runtime;var t=e.year,n=e.title,a=e.summary,i=e.coverImage,r=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:i,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__titile",children:n}),Object(s.jsx)("h5",{className:"movie__year",children:t}),Object(s.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(s.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[a.slice(0,300)," ..."]})]})]})},p=(n(45),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[],test:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading,t=this.state.movies;return Object(s.jsx)("section",{className:"container",children:e?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:t.map((function(e){return Object(s.jsx)(b,{id:e.id,rating:e.rating,runtime:e.runtime,year:e.year,title:e.title,summary:e.summary,coverImage:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(i.a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.a1672f78.chunk.js.map