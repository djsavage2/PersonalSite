import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c as l,b as c,f as h,g as u,h as d,j as f,k as m,l as p,n as b}from"./client.5052bb70.js";function v(t){let s,a,v,E,g,j,T,x,H,L=t[0].title+"",$=t[0].date+"",w=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),E=o(L),g=e(),j=n("subtitle"),T=o($),x=e(),H=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=h(v);E=u(s,L),s.forEach(r),g=l(t),j=c(t,"SUBTITLE",{});var e=h(j);T=u(e,$),e.forEach(r),x=l(t),H=c(t,"DIV",{class:!0}),h(H).forEach(r),this.h()},h(){d(H,"class","content svelte-1nzrsmb")},m(t,s){f(t,a,s),f(t,v,s),m(v,E),f(t,g,s),f(t,j,s),m(j,T),f(t,x,s),f(t,H,s),H.innerHTML=w},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&L!==(L=t[0].title+"")&&p(E,L),1&a&&$!==($=t[0].date+"")&&p(T,$),1&a&&w!==(w=t[0].html+"")&&(H.innerHTML=w)},i:b,o:b,d(t){t&&r(a),t&&r(v),t&&r(g),t&&r(j),t&&r(x),t&&r(H)}}}async function E({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function g(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,g,v,a,{post:0})}}export{E as preload};
