import{_ as t,a as n,b as e,c as r,i as s,d as a,S as c,s as o,f,t as i,e as l,j as u,k as h,l as v,g as p,h as d,m as g,n as E,o as m,r as y,q as R,u as q,p as w,v as b}from"./client.ee4f493e.js";function j(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var c=n(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return e(this,s)}}function A(t,n,e){var r=t.slice();return r[1]=n[e],r}function D(t){var n,e,r,s,a,c,o,R,q,w,b,j,A,D=t[1].title+"",S=t[1].date+"",x=t[1].description+"";return{c:function(){n=f("article"),e=f("header"),r=f("h2"),s=f("a"),a=i(D),o=l(),R=f("small"),q=i(S),w=l(),b=f("section"),j=i(x),A=l(),this.h()},l:function(t){n=u(t,"ARTICLE",{class:!0});var c=h(n);e=u(c,"HEADER",{});var f=h(e);r=u(f,"H2",{class:!0});var i=h(r);s=u(i,"A",{rel:!0,href:!0,class:!0});var l=h(s);a=v(l,D),l.forEach(p),i.forEach(p),o=d(f),R=u(f,"SMALL",{});var g=h(R);q=v(g,S),g.forEach(p),f.forEach(p),w=d(c),b=u(c,"SECTION",{});var E=h(b);j=v(E,x),E.forEach(p),A=d(c),c.forEach(p),this.h()},h:function(){g(s,"rel","prefetch"),g(s,"href",c="blog/"+t[1].slug),g(s,"class","svelte-ydeiqw"),g(r,"class","svelte-ydeiqw"),g(n,"class","svelte-ydeiqw")},m:function(t,c){E(t,n,c),m(n,e),m(e,r),m(r,s),m(s,a),m(e,o),m(e,R),m(R,q),m(n,w),m(n,b),m(b,j),m(n,A)},p:function(t,n){1&n&&D!==(D=t[1].title+"")&&y(a,D),1&n&&c!==(c="blog/"+t[1].slug)&&g(s,"href",c),1&n&&S!==(S=t[1].date+"")&&y(q,S),1&n&&x!==(x=t[1].description+"")&&y(j,x)},d:function(t){t&&p(n)}}}function S(t){for(var n,e,r,s,a,c=t[0],o=[],y=0;y<c.length;y+=1)o[y]=D(A(t,c,y));return{c:function(){n=l(),e=f("h1"),r=i("recent posts"),s=l(),a=f("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){R('[data-svelte="svelte-1y15wck"]',document.head).forEach(p),n=d(t),e=u(t,"H1",{class:!0});var c=h(e);r=v(c,"recent posts"),c.forEach(p),s=d(t),a=u(t,"DIV",{});for(var f=h(a),i=0;i<o.length;i+=1)o[i].l(f);f.forEach(p),this.h()},h:function(){document.title="recent posts",g(e,"class","svelte-ydeiqw")},m:function(t,c){E(t,n,c),E(t,e,c),m(e,r),E(t,s,c),E(t,a,c);for(var f=0;f<o.length;f+=1)o[f].m(a,null)},p:function(t,n){var e=q(n,1)[0];if(1&e){var r;for(c=t[0],r=0;r<c.length;r+=1){var s=A(t,c,r);o[r]?o[r].p(s,e):(o[r]=D(s),o[r].c(),o[r].m(a,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=c.length}},i:w,o:w,d:function(t){t&&p(n),t&&p(e),t&&p(s),t&&p(a),b(o,t)}}}function x(){return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function H(t,n,e){var r=n.posts;return t.$$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var I=function(n){t(f,c);var e=j(f);function f(t){var n;return r(this,f),n=e.call(this),s(a(n),t,H,S,o,{posts:0}),n}return f}();export default I;export{x as preload};