(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/logo.f1f7de47.png"},23:function(e,t,n){e.exports=n.p+"static/media/loupe.c5f8473f.svg"},24:function(e,t,n){e.exports=n.p+"static/media/loader.fca62fb2.png"},28:function(e,t,n){e.exports=n(56)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=(n(33),n(7)),u=n(2),l=(n(34),n(35),n(1)),s=n.n(l),p=n(12),m=n(6),f=n(5),v="80a9758176e2dcd1c639e2bf0ad76fa0",h=function(){var e=Object(f.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="tv"===e.t0?3:"people"===e.t0?4:5;break;case 3:return e.abrupt("return",fetch("http://api.themoviedb.org/3/search/tv?api_key=".concat(v,"&language=en-US&page=1&include_adult=false&query=").concat(t)).then((function(e){return e.json()})));case 4:return e.abrupt("return",fetch("http://api.themoviedb.org/3/search/person?api_key=".concat(v,"&language=en-US&page=1&include_adult=false&query=").concat(t)).then((function(e){return e.json()})));case 5:return e.abrupt("return",fetch("http://api.themoviedb.org/3/search/movie?api_key=".concat(v,"&language=en-US&page=1&include_adult=false&query=").concat(t)).then((function(e){return e.json()})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="tv"===e.t0?3:4;break;case 3:return e.abrupt("return",fetch("http://api.themoviedb.org/3/discover/tv?api_key=".concat(v,"&language=en-US&include_adult=false&include_video=false&page=1&with_genres=").concat(t)).then((function(e){return e.json()})));case 4:return e.abrupt("return",fetch("http://api.themoviedb.org/3/discover/movie?api_key=".concat(v,"&language=en-US&include_adult=false&include_video=false&page=1&with_genres=").concat(t)).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(f.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="tv"===e.t0?3:4;break;case 3:return e.abrupt("return",fetch("http://api.themoviedb.org/3/tv/top_rated?api_key=".concat(v,"&language=en-US&page=").concat(n)).then((function(e){return e.json()})));case 4:return e.abrupt("return",fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=".concat(v,"&language=en-US&page=").concat(n)).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"movie"!==t){e.next=3;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()})));case 3:if("people"!==t){e.next=5;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/person/".concat(n,"?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()})));case 5:return e.abrupt("return",fetch("http://api.themoviedb.org/3/tv/".concat(n,"?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("movie"!==t){e.next=2;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/movie/".concat(n,"/videos?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()})));case 2:return e.abrupt("return",fetch("http://api.themoviedb.org/3/tv/".concat(n,"/videos?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("movie"!==t){e.next=2;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/movie/now_playing/?api_key=".concat(v)).then((function(e){return e.json()})));case 2:if("people"!==t){e.next=4;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/person/popular?api_key=".concat(v,"&language=en-US")).then((function(e){return e.json()})));case 4:return e.abrupt("return",fetch("http://api.themoviedb.org/3/tv/airing_today/?api_key=".concat(v)).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("movie"!==t){e.next=2;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/genre/movie/list?api_key=".concat(v,"&language=en-US")).then((function(e){return e.json()})));case 2:return e.abrupt("return",fetch("http://api.themoviedb.org/3/genre/tv/list?api_key=".concat(v,"&language=en-US")).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://api.themoviedb.org/3/trending/all/week?api_key=".concat(v)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("movie"!==t){e.next=2;break}return e.abrupt("return",fetch("http://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(v)).then((function(e){return e.json()})));case 2:return e.abrupt("return",fetch("http://api.themoviedb.org/3/tv/".concat(n,"/reviews?api_key=").concat(v)).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=Object(a.createContext)();function w(){return(w=Object(f.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=1;case 2:if(!(r<11)){e.next=10;break}return e.next=5,b("movie",r).then((function(e){var t=e.results;return n(!1),t}));case 5:e.sent.forEach((function(e){return a.push(e)}));case 7:r+=1,e.next=2;break;case 10:t(a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.children,n=Object(a.useState)("trending"),c=Object(m.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)("movie"),l=Object(m.a)(u,2),s=l[0],f=l[1],v=Object(a.useState)([]),d=Object(m.a)(v,2),b=d[0],g=d[1],E=Object(a.useState)([]),y=Object(m.a)(E,2),_=y[0],x=y[1],S=Object(a.useState)(!1),N=Object(m.a)(S,2),C=N[0],T=N[1],M=Object(a.useState)(!0),U=Object(m.a)(M,2),F=U[0],L=U[1],A=Object(a.useState)(!1),B=Object(m.a)(A,2),G=B[0],I=B[1],P=Object(a.useState)(""),q=Object(m.a)(P,2),D=q[0],R=q[1];Object(a.useEffect)((function(){return C?function(e,t){w.apply(this,arguments)}(g,L):"trending"===o?k().then((function(e){var t=e.results;g(t),L(!1)})):G?h(D,o).then((function(e){L(!1);var t=e.results.reduce((function(e,t){return t.poster_path?[].concat(Object(p.a)(e),[t]):e}),[]);g(t)})):j(o).then((function(e){var t=e.results;g(t),L(!1)})),function(){L(!0),I(!1)}}),[o,C]);var J={movieList:b,apiType:o,setApiType:i,setMovieList:g,apiTypeForSearch:s,setApiTypeForSearch:f,filterGenre:_,setFilterGenre:x,bestMovies:C,setBestMovies:T,isLoading:F,setIsLoading:L,searchForSomething:G,setSearchForSomething:I,movie:D,setMovie:R};return r.a.createElement(O.Provider,{value:J},t)}var S=function(){var e=Object(a.useContext)(O),t=e.setApiType,n=e.apiType,c=e.setBestMovies,o=e.bestMovies;return r.a.createElement("div",{className:"sidebar"},r.a.createElement(i.b,{to:"/",className:"trending"===n&&"selected",onClick:function(){t("trending"),c(!1)}},r.a.createElement("p",null,"Trending")),r.a.createElement(i.b,{to:"/",className:"movie"===n&&!o&&"selected",onClick:function(){t("movie"),c(!1)}},r.a.createElement("p",null,"Movies")),r.a.createElement(i.b,{to:"/",className:"tv"===n&&"selected",onClick:function(){t("tv"),c(!1)}},r.a.createElement("p",null,"TV")),r.a.createElement(i.b,{to:"/",className:"people"===n&&"selected",onClick:function(){t("people"),c(!1)}},r.a.createElement("p",null,"People")),r.a.createElement(i.b,{to:"/",className:"movie"===n&&o&&"selected",onClick:function(){t("movie"),c(!0)}},r.a.createElement("p",null,"The 200 Best Movies")))};n(42);function N(){return(N=Object(f.a)(s.a.mark((function e(t,n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("All"===t){e.next=7;break}return e.next=3,y(n).then((function(e){return e.genres}));case 3:r=e.sent.filter((function(e){return e.name===t}))[0].id,d(r,n).then((function(e){return a(e.results)})),e.next=8;break;case 7:j(n).then((function(e){return a(e.results)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(O),i=o.apiType,u=o.filterGenre,l=o.setFilterGenre,s=o.setMovieList;return Object(a.useEffect)((function(){y(i).then((function(e){var t=e.genres;return c([{name:"All"}].concat(Object(p.a)(t)))}))}),[c]),r.a.createElement("div",{className:"genre-selector"},r.a.createElement("p",null,"Choose a Genre"),r.a.createElement("select",{onChange:function(e){l(e.target.value),function(e,t,n){N.apply(this,arguments)}(e.target.value,i,s)},value:u},n.map((function(e){var t=e.name;return r.a.createElement("option",{value:t},t)}))))},T=n(22),M=n.n(T),U=(n(43),n(23)),F=n.n(U);function L(e,t,n,a,r,c){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(s.a.mark((function e(t,n,a,r,c,o){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!1),a(n),c(t),o(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(O),u=o.setApiTypeForSearch,l=o.apiTypeForSearch,s=o.setApiType,p=o.setBestMovies,f=o.setMovie,v=o.setSearchForSomething;return r.a.createElement("div",{className:"search-bar"},r.a.createElement(i.b,{to:"/",onClick:function(){s("trending"),p(!1)}},r.a.createElement("img",{src:M.a,alt:"logo"})),r.a.createElement("div",{className:"search-area"},r.a.createElement("div",{className:"input-area"},r.a.createElement("input",{onKeyDown:function(e){13===e.keyCode&&L(n,l,s,p,f,v)},placeholder:"Search for something",onChange:function(e){return c(e.target.value)},value:n}),r.a.createElement("button",{disabled:""===n,type:"button",onClick:function(){L(n,l,s,p,f,v)}},r.a.createElement("img",{src:F.a}))),r.a.createElement("select",{onChange:function(e){u(e.target.value)}},r.a.createElement("option",{value:"movie"},"Movies"),r.a.createElement("option",{value:"tv"},"TV Shows"),r.a.createElement("option",{value:"people"},"People"))))},G=n(24),I=n.n(G);var P=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:I.a}))};var q=function(){var e=Object(a.useContext)(O),t=e.movieList,n=e.apiType,c=e.setApiType,o=(e.filterGenre,e.bestMovies),u=e.isLoading;return r.a.createElement("div",null,r.a.createElement("div",{className:"all-screen"},r.a.createElement(B,null),r.a.createElement("div",{className:"side-and-main"},r.a.createElement(S,null),!u&&r.a.createElement("div",{className:"search-and-main"},!o&&"people"!==n&&function(e,t,n){return r.a.createElement("div",{className:"main-page"},"people"!==n&&"trending"!==n&&r.a.createElement(C,null),r.a.createElement("div",{className:"main-container"},e.map((function(e){var n=e.id,a=e.media_type,c=e.vote_average,o=e.poster_path,u=e.title,l=e.name,s=e.profile_path;return r.a.createElement(i.b,{to:"/details/".concat(n),onClick:function(){a&&t(a)}},r.a.createElement("div",{className:"movie-infos"},r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("h3",null,u||l)),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(o||s),alt:""}),r.a.createElement("p",null,"".concat(parseInt(c,10).toFixed(1)))))}))))}(t,c,n),!o&&"people"===n&&function(e){return r.a.createElement("div",{className:"people-container"},e.map((function(e){var t=e.id,n=e.name,a=e.profile_path;return r.a.createElement(i.b,{to:"/details/".concat(t)},r.a.createElement("div",{className:"people-card"},r.a.createElement("div",null,r.a.createElement("p",null,n)),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(a),alt:""})))})))}(t),o&&function(e){return r.a.createElement("div",{className:"best-container"},r.a.createElement("div",{className:"best-infos-main"},r.a.createElement("p",null,"Position"),r.a.createElement("p",null,"Title"),r.a.createElement("p",null,"Rating")),r.a.createElement("div",{className:"best-bar"},e.map((function(e,t){var n=e.title,a=e.poster_path,c=e.vote_average,o=e.id;return r.a.createElement(i.b,{to:"/details/".concat(o)},r.a.createElement("div",{className:"best-infos"},r.a.createElement("p",null),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(a),alt:""}),r.a.createElement("div",null,r.a.createElement("p",{className:"inner-text"},"".concat(t+1,". ").concat(n))),r.a.createElement("p",null,parseInt(c,10).toFixed(1))))}))))}(t)),u&&r.a.createElement(P,null))))},D=n(25);var R=function(e){var t=e.props.match.params.id,n=Object(a.useState)({}),c=Object(m.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)([]),l=Object(m.a)(u,2),s=l[0],f=l[1],v=Object(a.useState)([]),h=Object(m.a)(v,2),d=h[0],b=h[1],j=Object(a.useContext)(O),y=j.apiType,k=j.isLoading,w=j.setIsLoading;return Object(a.useEffect)((function(){return g(y,t).then((function(e){return i(e)})),"movie"===y&&_(y,t).then((function(e){return b(e.results)})),E(y,t).then((function(e){var t=e.results;f(t),w(!1)})),w(!0)}),[]),r.a.createElement("div",{className:"side-and-main"},r.a.createElement(S,null),r.a.createElement(B,null),k&&r.a.createElement(P,null),!k&&r.a.createElement("div",{className:"movie-details-container"},"people"!==y&&r.a.createElement("div",null,r.a.createElement("div",{className:"main-info"},r.a.createElement("div",null,r.a.createElement("h1",null,o.title),r.a.createElement("p",null,o.overview))),r.a.createElement("div",{className:"reviews"},r.a.createElement("h2",null,"Reviews"),0===d.length&&r.a.createElement("p",null,"No reviews found"),d.length>0&&d.map((function(e){var t=e.author,n=e.content,a=e.url;return r.a.createElement("div",null,r.a.createElement("p",null,t),n.length<300?r.a.createElement("p",null,n):function(e,t){return r.a.createElement("div",null,r.a.createElement("p",null,"".concat(e.slice(0,300),"...")),r.a.createElement("a",{href:t},"ReadMore"))}(n,a))}))),r.a.createElement("div",{className:"video-container"},s&&s.reduce((function(e,t,n){return n<10?[].concat(Object(p.a)(e),[r.a.createElement(D.a,{videoId:t.key,opts:{width:"300px",height:"200px"}})]):e}),[])),r.a.createElement("img",{className:"teste2",src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(o.poster_path),alt:""})),"people"===y&&r.a.createElement("div",{className:"people-details"},r.a.createElement("div",{className:"main-info-details"},r.a.createElement("div",null,r.a.createElement("h1",null,o.name),r.a.createElement("h3",null,o.birthDay),r.a.createElement("p",null,o.biography),r.a.createElement("p",null,"DOB: ".concat(o.birthday)),r.a.createElement("p",null,"POB: ".concat(o.place_of_birth))),r.a.createElement("img",{className:"teste",src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(o.profile_path),alt:""})))))};var J=function(){return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/details/:id",render:function(e){return r.a.createElement(R,{props:e})}}),r.a.createElement(u.a,{path:"/",component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null,r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b3a65a94.chunk.js.map