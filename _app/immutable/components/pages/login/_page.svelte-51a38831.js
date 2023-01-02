import{$ as uo,S as Be,i as Fe,s as ze,e as ee,b as I,f as k,g as te,t as T,d as ne,h as m,E as re,a0 as ci,G as R,H as Je,k as N,a as G,l as P,m as V,c as K,J as y,Y as q,O as M,C as hi,a1 as yn,I as ce,q as J,r as Y,n as ae,u as ve,L as he,M as de,N as fe,D as d,K as co,B as C,T as f,W as U,R as z,a2 as tn,a3 as ho,a4 as En,a5 as ft,a6 as L,w as Q,x as Z,y as x,z as $,a7 as fo,a8 as He,V as _o,a9 as Ve,o as po}from"../../../chunks/index-8d71f7d8.js";import{c as Re,B as nn}from"../../../chunks/Offcanvas.svelte_svelte_type_style_lang-bd9ed302.js";function Tn(t,{delay:e=0,duration:n=400,easing:r=uo}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*s}`}}const mo=t=>({}),wn=t=>({});function Sn(t){let e,n,r,s,a,i,o,u=(t[3]||t[10].heading)&&On(t),c=t[5]&&An(t);const h=[bo,go],_=[];function v(p,A){return p[1]?0:1}s=v(t),a=_[s]=h[s](t);let g=[t[9],{class:t[7]},{role:"alert"}],w={};for(let p=0;p<g.length;p+=1)w=R(w,g[p]);return{c(){e=N("div"),u&&u.c(),n=G(),c&&c.c(),r=G(),a.c(),this.h()},l(p){e=P(p,"DIV",{class:!0,role:!0});var A=V(e);u&&u.l(A),n=K(A),c&&c.l(A),r=K(A),a.l(A),A.forEach(m),this.h()},h(){y(e,w)},m(p,A){I(p,e,A),u&&u.m(e,null),q(e,n),c&&c.m(e,null),q(e,r),_[s].m(e,null),o=!0},p(p,A){t=p,t[3]||t[10].heading?u?(u.p(t,A),A&1032&&k(u,1)):(u=On(t),u.c(),k(u,1),u.m(e,n)):u&&(te(),T(u,1,1,()=>{u=null}),ne()),t[5]?c?c.p(t,A):(c=An(t),c.c(),c.m(e,r)):c&&(c.d(1),c=null);let E=s;s=v(t),s===E?_[s].p(t,A):(te(),T(_[E],1,1,()=>{_[E]=null}),ne(),a=_[s],a?a.p(t,A):(a=_[s]=h[s](t),a.c()),k(a,1),a.m(e,null)),y(e,w=M(g,[A&512&&t[9],(!o||A&128)&&{class:t[7]},{role:"alert"}]))},i(p){o||(k(u),k(a),hi(()=>{i||(i=yn(e,Tn,t[4],!0)),i.run(1)}),o=!0)},o(p){T(u),T(a),i||(i=yn(e,Tn,t[4],!1)),i.run(0),o=!1},d(p){p&&m(e),u&&u.d(),c&&c.d(),_[s].d(),p&&i&&i.end()}}}function On(t){let e,n,r;const s=t[18].heading,a=ce(s,t,t[17],wn);return{c(){e=N("h4"),n=J(t[3]),a&&a.c(),this.h()},l(i){e=P(i,"H4",{class:!0});var o=V(e);n=Y(o,t[3]),a&&a.l(o),o.forEach(m),this.h()},h(){ae(e,"class","alert-heading")},m(i,o){I(i,e,o),q(e,n),a&&a.m(e,null),r=!0},p(i,o){(!r||o&8)&&ve(n,i[3]),a&&a.p&&(!r||o&131072)&&he(a,s,i,i[17],r?fe(s,i[17],o,mo):de(i[17]),wn)},i(i){r||(k(a,i),r=!0)},o(i){T(a,i),r=!1},d(i){i&&m(e),a&&a.d(i)}}}function An(t){let e,n,r;return{c(){e=N("button"),this.h()},l(s){e=P(s,"BUTTON",{type:!0,class:!0,"aria-label":!0}),V(e).forEach(m),this.h()},h(){ae(e,"type","button"),ae(e,"class",t[6]),ae(e,"aria-label",t[2])},m(s,a){I(s,e,a),n||(r=d(e,"click",function(){co(t[8])&&t[8].apply(this,arguments)}),n=!0)},p(s,a){t=s,a&64&&ae(e,"class",t[6]),a&4&&ae(e,"aria-label",t[2])},d(s){s&&m(e),n=!1,r()}}}function go(t){let e;const n=t[18].default,r=ce(n,t,t[17],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,a){r&&r.m(s,a),e=!0},p(s,a){r&&r.p&&(!e||a&131072)&&he(r,n,s,s[17],e?fe(n,s[17],a,null):de(s[17]),null)},i(s){e||(k(r,s),e=!0)},o(s){T(r,s),e=!1},d(s){r&&r.d(s)}}}function bo(t){let e;return{c(){e=J(t[1])},l(n){e=Y(n,t[1])},m(n,r){I(n,e,r)},p(n,r){r&2&&ve(e,n[1])},i:C,o:C,d(n){n&&m(e)}}}function vo(t){let e,n,r=t[0]&&Sn(t);return{c(){r&&r.c(),e=ee()},l(s){r&&r.l(s),e=ee()},m(s,a){r&&r.m(s,a),I(s,e,a),n=!0},p(s,[a]){s[0]?r?(r.p(s,a),a&1&&k(r,1)):(r=Sn(s),r.c(),k(r,1),r.m(e.parentNode,e)):r&&(te(),T(r,1,1,()=>{r=null}),ne())},i(s){n||(k(r),n=!0)},o(s){T(r),n=!1},d(s){r&&r.d(s),s&&m(e)}}}function ko(t,e,n){let r,s,a,i;const o=["class","children","color","closeClassName","closeAriaLabel","dismissible","heading","isOpen","toggle","fade","transition"];let u=re(e,o),{$$slots:c={},$$scope:h}=e;const _=ci(c);let{class:v=""}=e,{children:g=void 0}=e,{color:w="success"}=e,{closeClassName:p=""}=e,{closeAriaLabel:A="Close"}=e,{dismissible:E=!1}=e,{heading:B=void 0}=e,{isOpen:W=!0}=e,{toggle:X=void 0}=e,{fade:j=!0}=e,{transition:ie={duration:j?400:0}}=e;return t.$$set=D=>{e=R(R({},e),Je(D)),n(9,u=re(e,o)),"class"in D&&n(11,v=D.class),"children"in D&&n(1,g=D.children),"color"in D&&n(12,w=D.color),"closeClassName"in D&&n(13,p=D.closeClassName),"closeAriaLabel"in D&&n(2,A=D.closeAriaLabel),"dismissible"in D&&n(14,E=D.dismissible),"heading"in D&&n(3,B=D.heading),"isOpen"in D&&n(0,W=D.isOpen),"toggle"in D&&n(15,X=D.toggle),"fade"in D&&n(16,j=D.fade),"transition"in D&&n(4,ie=D.transition),"$$scope"in D&&n(17,h=D.$$scope)},t.$$.update=()=>{t.$$.dirty&49152&&n(5,r=E||X),t.$$.dirty&32768&&n(8,s=X||(()=>n(0,W=!1))),t.$$.dirty&6176&&n(7,a=Re(v,"alert",`alert-${w}`,{"alert-dismissible":r})),t.$$.dirty&8192&&n(6,i=Re("btn-close",p))},[W,g,A,B,ie,r,i,a,s,u,_,v,w,p,E,X,j,h,c]}class Io extends Be{constructor(e){super(),Fe(this,e,ko,vo,ze,{class:11,children:1,color:12,closeClassName:13,closeAriaLabel:2,dismissible:14,heading:3,isOpen:0,toggle:15,fade:16,transition:4})}}function yo(t){let e,n,r,s;const a=t[6].default,i=ce(a,t,t[5],null);let o=[t[1],{class:t[0]}],u={};for(let c=0;c<o.length;c+=1)u=R(u,o[c]);return{c(){e=N("form"),i&&i.c(),this.h()},l(c){e=P(c,"FORM",{class:!0});var h=V(e);i&&i.l(h),h.forEach(m),this.h()},h(){y(e,u)},m(c,h){I(c,e,h),i&&i.m(e,null),n=!0,r||(s=d(e,"submit",t[7]),r=!0)},p(c,[h]){i&&i.p&&(!n||h&32)&&he(i,a,c,c[5],n?fe(a,c[5],h,null):de(c[5]),null),y(e,u=M(o,[h&2&&c[1],(!n||h&1)&&{class:c[0]}]))},i(c){n||(k(i,c),n=!0)},o(c){T(i,c),n=!1},d(c){c&&m(e),i&&i.d(c),r=!1,s()}}}function Eo(t,e,n){let r;const s=["class","inline","validated"];let a=re(e,s),{$$slots:i={},$$scope:o}=e,{class:u=""}=e,{inline:c=!1}=e,{validated:h=!1}=e;function _(v){f.call(this,t,v)}return t.$$set=v=>{e=R(R({},e),Je(v)),n(1,a=re(e,s)),"class"in v&&n(2,u=v.class),"inline"in v&&n(3,c=v.inline),"validated"in v&&n(4,h=v.validated),"$$scope"in v&&n(5,o=v.$$scope)},t.$$.update=()=>{t.$$.dirty&28&&n(0,r=Re(u,{"form-inline":c,"was-validated":h}))},[r,a,u,c,h,o,i,_]}class To extends Be{constructor(e){super(),Fe(this,e,Eo,yo,ze,{class:2,inline:3,validated:4})}}const wo=t=>({}),Rn=t=>({});function So(t){let e,n,r,s=[t[11],{class:t[9]},{id:t[8]},{type:"checkbox"},{disabled:t[3]},{name:t[5]},{__value:t[7]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,id:!0,type:!0,name:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),e.checked=t[0],t[39](e),n||(r=[d(e,"blur",t[29]),d(e,"change",t[30]),d(e,"focus",t[31]),d(e,"input",t[32]),d(e,"change",t[38])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&2048&&i[11],o[0]&512&&{class:i[9]},o[0]&256&&{id:i[8]},{type:"checkbox"},o[0]&8&&{disabled:i[3]},o[0]&32&&{name:i[5]},o[0]&128&&{__value:i[7]}])),o[0]&1&&(e.checked=i[0])},d(i){i&&m(e),t[39](null),n=!1,z(r)}}}function Oo(t){let e,n,r,s=[t[11],{class:t[9]},{id:t[8]},{type:"checkbox"},{disabled:t[3]},{name:t[5]},{__value:t[7]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,id:!0,type:!0,name:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),e.checked=t[0],t[37](e),n||(r=[d(e,"blur",t[25]),d(e,"change",t[26]),d(e,"focus",t[27]),d(e,"input",t[28]),d(e,"change",t[36])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&2048&&i[11],o[0]&512&&{class:i[9]},o[0]&256&&{id:i[8]},{type:"checkbox"},o[0]&8&&{disabled:i[3]},o[0]&32&&{name:i[5]},o[0]&128&&{__value:i[7]}])),o[0]&1&&(e.checked=i[0])},d(i){i&&m(e),t[37](null),n=!1,z(r)}}}function Ao(t){let e,n,r,s=[t[11],{class:t[9]},{id:t[8]},{type:"radio"},{disabled:t[3]},{name:t[5]},{__value:t[7]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,id:!0,type:!0,name:!0}),this.h()},h(){y(e,a),t[34][0].push(e)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),e.checked=e.__value===t[1],t[35](e),n||(r=[d(e,"blur",t[21]),d(e,"change",t[22]),d(e,"focus",t[23]),d(e,"input",t[24]),d(e,"change",t[33])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&2048&&i[11],o[0]&512&&{class:i[9]},o[0]&256&&{id:i[8]},{type:"radio"},o[0]&8&&{disabled:i[3]},o[0]&32&&{name:i[5]},o[0]&128&&{__value:i[7]}])),o[0]&2&&(e.checked=e.__value===i[1])},d(i){i&&m(e),t[34][0].splice(t[34][0].indexOf(e),1),t[35](null),n=!1,z(r)}}}function Cn(t){let e,n;const r=t[20].label,s=ce(r,t,t[19],Rn),a=s||Ro(t);return{c(){e=N("label"),a&&a.c(),this.h()},l(i){e=P(i,"LABEL",{class:!0,for:!0});var o=V(e);a&&a.l(o),o.forEach(m),this.h()},h(){ae(e,"class","form-check-label"),ae(e,"for",t[8])},m(i,o){I(i,e,o),a&&a.m(e,null),n=!0},p(i,o){s?s.p&&(!n||o[0]&524288)&&he(s,r,i,i[19],n?fe(r,i[19],o,wo):de(i[19]),Rn):a&&a.p&&(!n||o[0]&16)&&a.p(i,n?o:[-1,-1]),(!n||o[0]&256)&&ae(e,"for",i[8])},i(i){n||(k(a,i),n=!0)},o(i){T(a,i),n=!1},d(i){i&&m(e),a&&a.d(i)}}}function Ro(t){let e;return{c(){e=J(t[4])},l(n){e=Y(n,t[4])},m(n,r){I(n,e,r)},p(n,r){r[0]&16&&ve(e,n[4])},d(n){n&&m(e)}}}function Co(t){let e,n,r;function s(u,c){return u[6]==="radio"?Ao:u[6]==="switch"?Oo:So}let a=s(t),i=a(t),o=t[4]&&Cn(t);return{c(){e=N("div"),i.c(),n=G(),o&&o.c(),this.h()},l(u){e=P(u,"DIV",{class:!0});var c=V(e);i.l(c),n=K(c),o&&o.l(c),c.forEach(m),this.h()},h(){ae(e,"class",t[10])},m(u,c){I(u,e,c),i.m(e,null),q(e,n),o&&o.m(e,null),r=!0},p(u,c){a===(a=s(u))&&i?i.p(u,c):(i.d(1),i=a(u),i&&(i.c(),i.m(e,n))),u[4]?o?(o.p(u,c),c[0]&16&&k(o,1)):(o=Cn(u),o.c(),k(o,1),o.m(e,null)):o&&(te(),T(o,1,1,()=>{o=null}),ne()),(!r||c[0]&1024)&&ae(e,"class",u[10])},i(u){r||(k(o),r=!0)},o(u){T(o),r=!1},d(u){u&&m(e),i.d(),o&&o.d()}}}function No(t,e,n){let r,s,a;const i=["class","checked","disabled","group","id","inline","inner","invalid","label","name","reverse","size","type","valid","value"];let o=re(e,i),{$$slots:u={},$$scope:c}=e,{class:h=""}=e,{checked:_=!1}=e,{disabled:v=!1}=e,{group:g=void 0}=e,{id:w=void 0}=e,{inline:p=!1}=e,{inner:A=void 0}=e,{invalid:E=!1}=e,{label:B=""}=e,{name:W=""}=e,{reverse:X=!1}=e,{size:j=""}=e,{type:ie="checkbox"}=e,{valid:D=!1}=e,{value:se=void 0}=e;const _e=[[]];function Ne(b){f.call(this,t,b)}function O(b){f.call(this,t,b)}function dt(b){f.call(this,t,b)}function Ie(b){f.call(this,t,b)}function Pt(b){f.call(this,t,b)}function Dt(b){f.call(this,t,b)}function Lt(b){f.call(this,t,b)}function Mt(b){f.call(this,t,b)}function Ut(b){f.call(this,t,b)}function Bt(b){f.call(this,t,b)}function Ft(b){f.call(this,t,b)}function zt(b){f.call(this,t,b)}function Ht(){g=this.__value,n(1,g)}function Vt(b){U[b?"unshift":"push"](()=>{A=b,n(2,A)})}function Wt(){_=this.checked,n(0,_)}function jt(b){U[b?"unshift":"push"](()=>{A=b,n(2,A)})}function Gt(){_=this.checked,n(0,_)}function Kt(b){U[b?"unshift":"push"](()=>{A=b,n(2,A)})}return t.$$set=b=>{e=R(R({},e),Je(b)),n(11,o=re(e,i)),"class"in b&&n(12,h=b.class),"checked"in b&&n(0,_=b.checked),"disabled"in b&&n(3,v=b.disabled),"group"in b&&n(1,g=b.group),"id"in b&&n(13,w=b.id),"inline"in b&&n(14,p=b.inline),"inner"in b&&n(2,A=b.inner),"invalid"in b&&n(15,E=b.invalid),"label"in b&&n(4,B=b.label),"name"in b&&n(5,W=b.name),"reverse"in b&&n(16,X=b.reverse),"size"in b&&n(17,j=b.size),"type"in b&&n(6,ie=b.type),"valid"in b&&n(18,D=b.valid),"value"in b&&n(7,se=b.value),"$$scope"in b&&n(19,c=b.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&217152&&n(10,r=Re(h,"form-check",{"form-check-reverse":X,"form-switch":ie==="switch","form-check-inline":p,[`form-control-${j}`]:j})),t.$$.dirty[0]&294912&&n(9,s=Re("form-check-input",{"is-invalid":E,"is-valid":D})),t.$$.dirty[0]&8208&&n(8,a=w||B)},[_,g,A,v,B,W,ie,se,a,s,r,o,h,w,p,E,X,j,D,c,u,Ne,O,dt,Ie,Pt,Dt,Lt,Mt,Ut,Bt,Ft,zt,Ht,_e,Vt,Wt,jt,Gt,Kt]}class Po extends Be{constructor(e){super(),Fe(this,e,No,Co,ze,{class:12,checked:0,disabled:3,group:1,id:13,inline:14,inner:2,invalid:15,label:4,name:5,reverse:16,size:17,type:6,valid:18,value:7},null,[-1,-1])}}function Do(t){let e,n;const r=t[6].default,s=ce(r,t,t[5],null);let a=[t[1],{class:t[0]}],i={};for(let o=0;o<a.length;o+=1)i=R(i,a[o]);return{c(){e=N("div"),s&&s.c(),this.h()},l(o){e=P(o,"DIV",{class:!0});var u=V(e);s&&s.l(u),u.forEach(m),this.h()},h(){y(e,i)},m(o,u){I(o,e,u),s&&s.m(e,null),n=!0},p(o,[u]){s&&s.p&&(!n||u&32)&&he(s,r,o,o[5],n?fe(r,o[5],u,null):de(o[5]),null),y(e,i=M(a,[u&2&&o[1],(!n||u&1)&&{class:o[0]}]))},i(o){n||(k(s,o),n=!0)},o(o){T(s,o),n=!1},d(o){o&&m(e),s&&s.d(o)}}}function Lo(t,e,n){const r=["class","valid","tooltip"];let s=re(e,r),{$$slots:a={},$$scope:i}=e,{class:o=""}=e,{valid:u=void 0}=e,{tooltip:c=!1}=e,h;return t.$$set=_=>{e=R(R({},e),Je(_)),n(1,s=re(e,r)),"class"in _&&n(2,o=_.class),"valid"in _&&n(3,u=_.valid),"tooltip"in _&&n(4,c=_.tooltip),"$$scope"in _&&n(5,i=_.$$scope)},t.$$.update=()=>{if(t.$$.dirty&28){const _=c?"tooltip":"feedback";n(0,h=Re(o,u?`valid-${_}`:`invalid-${_}`))}},[h,s,o,u,c,i,a]}class di extends Be{constructor(e){super(),Fe(this,e,Lo,Do,ze,{class:2,valid:3,tooltip:4})}}const Mo=t=>({}),Nn=t=>({}),Uo=t=>({}),Pn=t=>({});function Bo(t){let e,n,r;const s=t[12].default,a=ce(s,t,t[11],null);let i=(t[0]||t[4].label)&&Dn(t),o=[t[3],{class:t[2]}],u={};for(let c=0;c<o.length;c+=1)u=R(u,o[c]);return{c(){e=N("div"),a&&a.c(),n=G(),i&&i.c(),this.h()},l(c){e=P(c,"DIV",{class:!0});var h=V(e);a&&a.l(h),n=K(h),i&&i.l(h),h.forEach(m),this.h()},h(){y(e,u)},m(c,h){I(c,e,h),a&&a.m(e,null),q(e,n),i&&i.m(e,null),r=!0},p(c,h){a&&a.p&&(!r||h&2048)&&he(a,s,c,c[11],r?fe(s,c[11],h,null):de(c[11]),null),c[0]||c[4].label?i?(i.p(c,h),h&17&&k(i,1)):(i=Dn(c),i.c(),k(i,1),i.m(e,null)):i&&(te(),T(i,1,1,()=>{i=null}),ne()),y(e,u=M(o,[h&8&&c[3],(!r||h&4)&&{class:c[2]}]))},i(c){r||(k(a,c),k(i),r=!0)},o(c){T(a,c),T(i),r=!1},d(c){c&&m(e),a&&a.d(c),i&&i.d()}}}function Fo(t){let e,n,r;const s=t[12].default,a=ce(s,t,t[11],null);let i=(t[0]||t[4].label)&&Ln(t),o=[t[3],{class:t[2]}],u={};for(let c=0;c<o.length;c+=1)u=R(u,o[c]);return{c(){e=N("fieldset"),a&&a.c(),n=G(),i&&i.c(),this.h()},l(c){e=P(c,"FIELDSET",{class:!0});var h=V(e);a&&a.l(h),n=K(h),i&&i.l(h),h.forEach(m),this.h()},h(){y(e,u)},m(c,h){I(c,e,h),a&&a.m(e,null),q(e,n),i&&i.m(e,null),r=!0},p(c,h){a&&a.p&&(!r||h&2048)&&he(a,s,c,c[11],r?fe(s,c[11],h,null):de(c[11]),null),c[0]||c[4].label?i?(i.p(c,h),h&17&&k(i,1)):(i=Ln(c),i.c(),k(i,1),i.m(e,null)):i&&(te(),T(i,1,1,()=>{i=null}),ne()),y(e,u=M(o,[h&8&&c[3],(!r||h&4)&&{class:c[2]}]))},i(c){r||(k(a,c),k(i),r=!0)},o(c){T(a,c),T(i),r=!1},d(c){c&&m(e),a&&a.d(c),i&&i.d()}}}function Dn(t){let e,n,r,s;const a=t[12].label,i=ce(a,t,t[11],Nn);return{c(){e=N("label"),n=J(t[0]),r=G(),i&&i.c()},l(o){e=P(o,"LABEL",{});var u=V(e);n=Y(u,t[0]),r=K(u),i&&i.l(u),u.forEach(m)},m(o,u){I(o,e,u),q(e,n),q(e,r),i&&i.m(e,null),s=!0},p(o,u){(!s||u&1)&&ve(n,o[0]),i&&i.p&&(!s||u&2048)&&he(i,a,o,o[11],s?fe(a,o[11],u,Mo):de(o[11]),Nn)},i(o){s||(k(i,o),s=!0)},o(o){T(i,o),s=!1},d(o){o&&m(e),i&&i.d(o)}}}function Ln(t){let e,n,r,s;const a=t[12].label,i=ce(a,t,t[11],Pn);return{c(){e=N("label"),n=J(t[0]),r=G(),i&&i.c()},l(o){e=P(o,"LABEL",{});var u=V(e);n=Y(u,t[0]),r=K(u),i&&i.l(u),u.forEach(m)},m(o,u){I(o,e,u),q(e,n),q(e,r),i&&i.m(e,null),s=!0},p(o,u){(!s||u&1)&&ve(n,o[0]),i&&i.p&&(!s||u&2048)&&he(i,a,o,o[11],s?fe(a,o[11],u,Uo):de(o[11]),Pn)},i(o){s||(k(i,o),s=!0)},o(o){T(i,o),s=!1},d(o){o&&m(e),i&&i.d(o)}}}function zo(t){let e,n,r,s;const a=[Fo,Bo],i=[];function o(u,c){return u[1]==="fieldset"?0:1}return e=o(t),n=i[e]=a[e](t),{c(){n.c(),r=ee()},l(u){n.l(u),r=ee()},m(u,c){i[e].m(u,c),I(u,r,c),s=!0},p(u,[c]){let h=e;e=o(u),e===h?i[e].p(u,c):(te(),T(i[h],1,1,()=>{i[h]=null}),ne(),n=i[e],n?n.p(u,c):(n=i[e]=a[e](u),n.c()),k(n,1),n.m(r.parentNode,r))},i(u){s||(k(n),s=!0)},o(u){T(n),s=!1},d(u){i[e].d(u),u&&m(r)}}}function Ho(t,e,n){let r;const s=["class","check","disabled","floating","inline","label","row","tag"];let a=re(e,s),{$$slots:i={},$$scope:o}=e;const u=ci(i);let{class:c=""}=e,{check:h=!1}=e,{disabled:_=!1}=e,{floating:v=!1}=e,{inline:g=!1}=e,{label:w=""}=e,{row:p=!1}=e,{tag:A=null}=e;return t.$$set=E=>{e=R(R({},e),Je(E)),n(3,a=re(e,s)),"class"in E&&n(5,c=E.class),"check"in E&&n(6,h=E.check),"disabled"in E&&n(7,_=E.disabled),"floating"in E&&n(8,v=E.floating),"inline"in E&&n(9,g=E.inline),"label"in E&&n(0,w=E.label),"row"in E&&n(10,p=E.row),"tag"in E&&n(1,A=E.tag),"$$scope"in E&&n(11,o=E.$$scope)},t.$$.update=()=>{t.$$.dirty&2016&&n(2,r=Re(c,"mb-3",{row:p,"form-check":h,"form-check-inline":h&&g,"form-floating":v,disabled:h&&_}))},[w,A,r,a,u,c,h,_,v,g,p,o,i]}class mt extends Be{constructor(e){super(),Fe(this,e,Ho,zo,ze,{class:5,check:6,disabled:7,floating:8,inline:9,label:0,row:10,tag:1})}}function Mn(t,e,n){const r=t.slice();return r[211]=e[n],r}function Vo(t){let e,n,r,s;const a=t[25].default,i=ce(a,t,t[210],null);let o=[t[22],{class:t[19]},{name:t[13]},{disabled:t[8]},{readonly:t[15]}],u={};for(let c=0;c<o.length;c+=1)u=R(u,o[c]);return{c(){e=N("select"),i&&i.c(),this.h()},l(c){e=P(c,"SELECT",{class:!0,name:!0,readonly:!0});var h=V(e);i&&i.l(h),h.forEach(m),this.h()},h(){y(e,u),t[6]===void 0&&hi(()=>t[208].call(e))},m(c,h){I(c,e,h),i&&i.m(e,null),(u.multiple?En:ft)(e,u.value),e.autofocus&&e.focus(),ft(e,t[6]),t[209](e),n=!0,r||(s=[d(e,"blur",t[157]),d(e,"change",t[158]),d(e,"focus",t[159]),d(e,"input",t[160]),d(e,"change",t[208])],r=!0)},p(c,h){i&&i.p&&(!n||h[6]&16777216)&&he(i,a,c,c[210],n?fe(a,c[210],h,null):de(c[210]),null),y(e,u=M(o,[h[0]&4194304&&c[22],(!n||h[0]&524288)&&{class:c[19]},(!n||h[0]&8192)&&{name:c[13]},(!n||h[0]&256)&&{disabled:c[8]},(!n||h[0]&32768)&&{readonly:c[15]}])),h[0]&4759808&&"value"in u&&(u.multiple?En:ft)(e,u.value),h[0]&64&&ft(e,c[6])},i(c){n||(k(i,c),n=!0)},o(c){T(i,c),n=!1},d(c){c&&m(e),i&&i.d(c),t[209](null),r=!1,z(s)}}}function Wo(t){let e,n,r,s=[t[22],{class:t[19]},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("textarea"),this.h()},l(i){e=P(i,"TEXTAREA",{class:!0,name:!0,placeholder:!0}),V(e).forEach(m),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[207](e),n||(r=[d(e,"blur",t[150]),d(e,"change",t[151]),d(e,"focus",t[152]),d(e,"input",t[153]),d(e,"keydown",t[154]),d(e,"keypress",t[155]),d(e,"keyup",t[156]),d(e,"input",t[206])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[207](null),n=!1,z(r)}}}function jo(t){let e,n,r,s;const a=[ll,ol,al,sl,rl,il,nl,tl,el,$o,xo,Zo,Qo,Xo,Yo,Jo,qo,Ko,Go],i=[];function o(u,c){return u[17]==="text"?0:u[17]==="password"?1:u[17]==="color"?2:u[17]==="email"?3:u[17]==="file"?4:u[17]==="checkbox"||u[17]==="radio"||u[17]==="switch"?5:u[17]==="url"?6:u[17]==="number"?7:u[17]==="date"?8:u[17]==="time"?9:u[17]==="datetime"?10:u[17]==="datetime-local"?11:u[17]==="month"?12:u[17]==="color"?13:u[17]==="range"?14:u[17]==="search"?15:u[17]==="tel"?16:u[17]==="week"?17:18}return e=o(t),n=i[e]=a[e](t),{c(){n.c(),r=ee()},l(u){n.l(u),r=ee()},m(u,c){i[e].m(u,c),I(u,r,c),s=!0},p(u,c){let h=e;e=o(u),e===h?i[e].p(u,c):(te(),T(i[h],1,1,()=>{i[h]=null}),ne(),n=i[e],n?n.p(u,c):(n=i[e]=a[e](u),n.c()),k(n,1),n.m(r.parentNode,r))},i(u){s||(k(n),s=!0)},o(u){T(n),s=!1},d(u){i[e].d(u),u&&m(r)}}}function Go(t){let e,n,r,s=[t[22],{type:t[17]},{readOnly:t[15]},{class:t[19]},{name:t[13]},{disabled:t[8]},{placeholder:t[14]},{value:t[6]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.value=a.value,e.autofocus&&e.focus(),n||(r=[d(e,"blur",t[145]),d(e,"change",t[21]),d(e,"focus",t[146]),d(e,"input",t[21]),d(e,"keydown",t[147]),d(e,"keypress",t[148]),d(e,"keyup",t[149])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&131072&&{type:i[17]},o[0]&32768&&{readOnly:i[15]},o[0]&524288&&{class:i[19]},o[0]&8192&&{name:i[13]},o[0]&256&&{disabled:i[8]},o[0]&16384&&{placeholder:i[14]},o[0]&64&&e.value!==i[6]&&{value:i[6]}])),"value"in a&&(e.value=a.value)},i:C,o:C,d(i){i&&m(e),n=!1,z(r)}}}function Ko(t){let e,n,r,s=[t[22],{class:t[19]},{type:"week"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[205](e),n||(r=[d(e,"blur",t[138]),d(e,"change",t[139]),d(e,"focus",t[140]),d(e,"input",t[141]),d(e,"keydown",t[142]),d(e,"keypress",t[143]),d(e,"keyup",t[144]),d(e,"input",t[204])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"week"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[205](null),n=!1,z(r)}}}function qo(t){let e,n,r,s=[t[22],{class:t[19]},{type:"tel"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{size:t[1]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,size:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[203](e),n||(r=[d(e,"blur",t[131]),d(e,"change",t[132]),d(e,"focus",t[133]),d(e,"input",t[134]),d(e,"keydown",t[135]),d(e,"keypress",t[136]),d(e,"keyup",t[137]),d(e,"input",t[202])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"tel"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&2&&{size:i[1]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[203](null),n=!1,z(r)}}}function Jo(t){let e,n,r,s=[t[22],{class:t[19]},{type:"search"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{size:t[1]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,size:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[201](e),n||(r=[d(e,"blur",t[124]),d(e,"change",t[125]),d(e,"focus",t[126]),d(e,"input",t[127]),d(e,"keydown",t[128]),d(e,"keypress",t[129]),d(e,"keyup",t[130]),d(e,"input",t[200])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"search"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&2&&{size:i[1]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[201](null),n=!1,z(r)}}}function Yo(t){let e,n,r,s=[t[22],{type:"range"},{readOnly:t[15]},{class:t[19]},{name:t[13]},{disabled:t[8]},{placeholder:t[14]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[199](e),n||(r=[d(e,"blur",t[117]),d(e,"change",t[118]),d(e,"focus",t[119]),d(e,"input",t[120]),d(e,"keydown",t[121]),d(e,"keypress",t[122]),d(e,"keyup",t[123]),d(e,"change",t[198]),d(e,"input",t[198])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],{type:"range"},o[0]&32768&&{readOnly:i[15]},o[0]&524288&&{class:i[19]},o[0]&8192&&{name:i[13]},o[0]&256&&{disabled:i[8]},o[0]&16384&&{placeholder:i[14]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[199](null),n=!1,z(r)}}}function Xo(t){let e,n,r,s=[t[22],{type:"color"},{readOnly:t[15]},{class:t[19]},{name:t[13]},{disabled:t[8]},{placeholder:t[14]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[197](e),n||(r=[d(e,"blur",t[110]),d(e,"change",t[111]),d(e,"focus",t[112]),d(e,"input",t[113]),d(e,"keydown",t[114]),d(e,"keypress",t[115]),d(e,"keyup",t[116]),d(e,"input",t[196])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],{type:"color"},o[0]&32768&&{readOnly:i[15]},o[0]&524288&&{class:i[19]},o[0]&8192&&{name:i[13]},o[0]&256&&{disabled:i[8]},o[0]&16384&&{placeholder:i[14]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[197](null),n=!1,z(r)}}}function Qo(t){let e,n,r,s=[t[22],{class:t[19]},{type:"month"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[195](e),n||(r=[d(e,"blur",t[103]),d(e,"change",t[104]),d(e,"focus",t[105]),d(e,"input",t[106]),d(e,"keydown",t[107]),d(e,"keypress",t[108]),d(e,"keyup",t[109]),d(e,"input",t[194])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"month"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[195](null),n=!1,z(r)}}}function Zo(t){let e,n,r,s=[t[22],{class:t[19]},{type:"datetime-local"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[193](e),n||(r=[d(e,"blur",t[96]),d(e,"change",t[97]),d(e,"focus",t[98]),d(e,"input",t[99]),d(e,"keydown",t[100]),d(e,"keypress",t[101]),d(e,"keyup",t[102]),d(e,"input",t[192])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"datetime-local"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[193](null),n=!1,z(r)}}}function xo(t){let e,n,r,s=[t[22],{type:"datetime"},{readOnly:t[15]},{class:t[19]},{name:t[13]},{disabled:t[8]},{placeholder:t[14]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[191](e),n||(r=[d(e,"blur",t[89]),d(e,"change",t[90]),d(e,"focus",t[91]),d(e,"input",t[92]),d(e,"keydown",t[93]),d(e,"keypress",t[94]),d(e,"keyup",t[95]),d(e,"input",t[190])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],{type:"datetime"},o[0]&32768&&{readOnly:i[15]},o[0]&524288&&{class:i[19]},o[0]&8192&&{name:i[13]},o[0]&256&&{disabled:i[8]},o[0]&16384&&{placeholder:i[14]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[191](null),n=!1,z(r)}}}function $o(t){let e,n,r,s=[t[22],{class:t[19]},{type:"time"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[189](e),n||(r=[d(e,"blur",t[82]),d(e,"change",t[83]),d(e,"focus",t[84]),d(e,"input",t[85]),d(e,"keydown",t[86]),d(e,"keypress",t[87]),d(e,"keyup",t[88]),d(e,"input",t[188])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"time"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[189](null),n=!1,z(r)}}}function el(t){let e,n,r,s=[t[22],{class:t[19]},{type:"date"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[187](e),n||(r=[d(e,"blur",t[75]),d(e,"change",t[76]),d(e,"focus",t[77]),d(e,"input",t[78]),d(e,"keydown",t[79]),d(e,"keypress",t[80]),d(e,"keyup",t[81]),d(e,"input",t[186])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"date"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[187](null),n=!1,z(r)}}}function tl(t){let e,n,r,s=[t[22],{class:t[19]},{type:"number"},{readOnly:t[15]},{name:t[13]},{disabled:t[8]},{placeholder:t[14]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[185](e),n||(r=[d(e,"blur",t[68]),d(e,"change",t[69]),d(e,"focus",t[70]),d(e,"input",t[71]),d(e,"keydown",t[72]),d(e,"keypress",t[73]),d(e,"keyup",t[74]),d(e,"input",t[184])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"number"},o[0]&32768&&{readOnly:i[15]},o[0]&8192&&{name:i[13]},o[0]&256&&{disabled:i[8]},o[0]&16384&&{placeholder:i[14]}])),o[0]&64&&tn(e.value)!==i[6]&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[185](null),n=!1,z(r)}}}function nl(t){let e,n,r,s=[t[22],{class:t[19]},{type:"url"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{size:t[1]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,size:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[183](e),n||(r=[d(e,"blur",t[61]),d(e,"change",t[62]),d(e,"focus",t[63]),d(e,"input",t[64]),d(e,"keydown",t[65]),d(e,"keypress",t[66]),d(e,"keyup",t[67]),d(e,"input",t[182])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"url"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&2&&{size:i[1]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[183](null),n=!1,z(r)}}}function il(t){let e,n,r,s,a,i;const o=[t[22],{class:t[7]},{size:t[0]},{type:t[17]},{disabled:t[8]},{invalid:t[10]},{label:t[11]},{name:t[13]},{placeholder:t[14]},{reverse:t[16]},{readonly:t[15]},{valid:t[18]}];function u(g){t[171](g)}function c(g){t[172](g)}function h(g){t[173](g)}function _(g){t[174](g)}let v={};for(let g=0;g<o.length;g+=1)v=R(v,o[g]);return t[2]!==void 0&&(v.checked=t[2]),t[5]!==void 0&&(v.inner=t[5]),t[4]!==void 0&&(v.group=t[4]),t[6]!==void 0&&(v.value=t[6]),e=new Po({props:v}),U.push(()=>He(e,"checked",u,t[2])),U.push(()=>He(e,"inner",c,t[5])),U.push(()=>He(e,"group",h,t[4])),U.push(()=>He(e,"value",_,t[6])),e.$on("blur",t[175]),e.$on("change",t[176]),e.$on("focus",t[177]),e.$on("input",t[178]),e.$on("keydown",t[179]),e.$on("keypress",t[180]),e.$on("keyup",t[181]),{c(){Q(e.$$.fragment)},l(g){Z(e.$$.fragment,g)},m(g,w){x(e,g,w),i=!0},p(g,w){const p=w[0]&4713857?M(o,[w[0]&4194304&&_o(g[22]),w[0]&128&&{class:g[7]},w[0]&1&&{size:g[0]},w[0]&131072&&{type:g[17]},w[0]&256&&{disabled:g[8]},w[0]&1024&&{invalid:g[10]},w[0]&2048&&{label:g[11]},w[0]&8192&&{name:g[13]},w[0]&16384&&{placeholder:g[14]},w[0]&65536&&{reverse:g[16]},w[0]&32768&&{readonly:g[15]},w[0]&262144&&{valid:g[18]}]):{};!n&&w[0]&4&&(n=!0,p.checked=g[2],Ve(()=>n=!1)),!r&&w[0]&32&&(r=!0,p.inner=g[5],Ve(()=>r=!1)),!s&&w[0]&16&&(s=!0,p.group=g[4],Ve(()=>s=!1)),!a&&w[0]&64&&(a=!0,p.value=g[6],Ve(()=>a=!1)),e.$set(p)},i(g){i||(k(e.$$.fragment,g),i=!0)},o(g){T(e.$$.fragment,g),i=!1},d(g){$(e,g)}}}function rl(t){let e,n,r,s=[t[22],{class:t[19]},{type:"file"},{disabled:t[8]},{invalid:t[10]},{multiple:t[12]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{valid:t[18]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,invalid:!0,name:!0,placeholder:!0,valid:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),t[170](e),n||(r=[d(e,"blur",t[54]),d(e,"change",t[55]),d(e,"focus",t[56]),d(e,"input",t[57]),d(e,"keydown",t[58]),d(e,"keypress",t[59]),d(e,"keyup",t[60]),d(e,"change",t[169])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"file"},o[0]&256&&{disabled:i[8]},o[0]&1024&&{invalid:i[10]},o[0]&4096&&{multiple:i[12]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&262144&&{valid:i[18]}]))},i:C,o:C,d(i){i&&m(e),t[170](null),n=!1,z(r)}}}function sl(t){let e,n,r,s=[t[22],{class:t[19]},{type:"email"},{disabled:t[8]},{multiple:t[12]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{size:t[1]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,size:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[168](e),n||(r=[d(e,"blur",t[47]),d(e,"change",t[48]),d(e,"focus",t[49]),d(e,"input",t[50]),d(e,"keydown",t[51]),d(e,"keypress",t[52]),d(e,"keyup",t[53]),d(e,"input",t[167])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"email"},o[0]&256&&{disabled:i[8]},o[0]&4096&&{multiple:i[12]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&2&&{size:i[1]}])),o[0]&64&&e.value!==i[6]&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[168](null),n=!1,z(r)}}}function al(t){let e,n,r,s=[t[22],{class:t[19]},{type:"color"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[166](e),n||(r=[d(e,"blur",t[40]),d(e,"change",t[41]),d(e,"focus",t[42]),d(e,"input",t[43]),d(e,"keydown",t[44]),d(e,"keypress",t[45]),d(e,"keyup",t[46]),d(e,"input",t[165])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"color"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]}])),o[0]&64&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[166](null),n=!1,z(r)}}}function ol(t){let e,n,r,s=[t[22],{class:t[19]},{type:"password"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{size:t[1]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,size:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[164](e),n||(r=[d(e,"blur",t[33]),d(e,"change",t[34]),d(e,"focus",t[35]),d(e,"input",t[36]),d(e,"keydown",t[37]),d(e,"keypress",t[38]),d(e,"keyup",t[39]),d(e,"input",t[163])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"password"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&2&&{size:i[1]}])),o[0]&64&&e.value!==i[6]&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[164](null),n=!1,z(r)}}}function ll(t){let e,n,r,s=[t[22],{class:t[19]},{type:"text"},{disabled:t[8]},{name:t[13]},{placeholder:t[14]},{readOnly:t[15]},{size:t[1]}],a={};for(let i=0;i<s.length;i+=1)a=R(a,s[i]);return{c(){e=N("input"),this.h()},l(i){e=P(i,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,size:!0}),this.h()},h(){y(e,a)},m(i,o){I(i,e,o),e.autofocus&&e.focus(),L(e,t[6]),t[162](e),n||(r=[d(e,"blur",t[26]),d(e,"change",t[27]),d(e,"focus",t[28]),d(e,"input",t[29]),d(e,"keydown",t[30]),d(e,"keypress",t[31]),d(e,"keyup",t[32]),d(e,"input",t[161])],n=!0)},p(i,o){y(e,a=M(s,[o[0]&4194304&&i[22],o[0]&524288&&{class:i[19]},{type:"text"},o[0]&256&&{disabled:i[8]},o[0]&8192&&{name:i[13]},o[0]&16384&&{placeholder:i[14]},o[0]&32768&&{readOnly:i[15]},o[0]&2&&{size:i[1]}])),o[0]&64&&e.value!==i[6]&&L(e,i[6])},i:C,o:C,d(i){i&&m(e),t[162](null),n=!1,z(r)}}}function Un(t){let e,n,r,s,a;const i=[cl,ul],o=[];function u(c,h){return h[0]&512&&(e=null),e==null&&(e=!!Array.isArray(c[9])),e?0:1}return n=u(t,[-1,-1,-1,-1,-1,-1,-1]),r=o[n]=i[n](t),{c(){r.c(),s=ee()},l(c){r.l(c),s=ee()},m(c,h){o[n].m(c,h),I(c,s,h),a=!0},p(c,h){let _=n;n=u(c,h),n===_?o[n].p(c,h):(te(),T(o[_],1,1,()=>{o[_]=null}),ne(),r=o[n],r?r.p(c,h):(r=o[n]=i[n](c),r.c()),k(r,1),r.m(s.parentNode,s))},i(c){a||(k(r),a=!0)},o(c){T(r),a=!1},d(c){o[n].d(c),c&&m(s)}}}function ul(t){let e,n;return e=new di({props:{valid:t[18],$$slots:{default:[hl]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){x(e,r,s),n=!0},p(r,s){const a={};s[0]&262144&&(a.valid=r[18]),s[0]&512|s[6]&16777216&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function cl(t){let e,n,r=t[9],s=[];for(let i=0;i<r.length;i+=1)s[i]=Bn(Mn(t,r,i));const a=i=>T(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=ee()},l(i){for(let o=0;o<s.length;o+=1)s[o].l(i);e=ee()},m(i,o){for(let u=0;u<s.length;u+=1)s[u].m(i,o);I(i,e,o),n=!0},p(i,o){if(o[0]&262656){r=i[9];let u;for(u=0;u<r.length;u+=1){const c=Mn(i,r,u);s[u]?(s[u].p(c,o),k(s[u],1)):(s[u]=Bn(c),s[u].c(),k(s[u],1),s[u].m(e.parentNode,e))}for(te(),u=r.length;u<s.length;u+=1)a(u);ne()}},i(i){if(!n){for(let o=0;o<r.length;o+=1)k(s[o]);n=!0}},o(i){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)T(s[o]);n=!1},d(i){fo(s,i),i&&m(e)}}}function hl(t){let e;return{c(){e=J(t[9])},l(n){e=Y(n,t[9])},m(n,r){I(n,e,r)},p(n,r){r[0]&512&&ve(e,n[9])},d(n){n&&m(e)}}}function dl(t){let e=t[211]+"",n;return{c(){n=J(e)},l(r){n=Y(r,e)},m(r,s){I(r,n,s)},p(r,s){s[0]&512&&e!==(e=r[211]+"")&&ve(n,e)},d(r){r&&m(n)}}}function Bn(t){let e,n;return e=new di({props:{valid:t[18],$$slots:{default:[dl]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){x(e,r,s),n=!0},p(r,s){const a={};s[0]&262144&&(a.valid=r[18]),s[0]&512|s[6]&16777216&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function fl(t){let e,n,r,s,a;const i=[jo,Wo,Vo],o=[];function u(h,_){return h[20]==="input"?0:h[20]==="textarea"?1:h[20]==="select"&&!h[12]?2:-1}~(e=u(t))&&(n=o[e]=i[e](t));let c=t[9]&&Un(t);return{c(){n&&n.c(),r=G(),c&&c.c(),s=ee()},l(h){n&&n.l(h),r=K(h),c&&c.l(h),s=ee()},m(h,_){~e&&o[e].m(h,_),I(h,r,_),c&&c.m(h,_),I(h,s,_),a=!0},p(h,_){let v=e;e=u(h),e===v?~e&&o[e].p(h,_):(n&&(te(),T(o[v],1,1,()=>{o[v]=null}),ne()),~e?(n=o[e],n?n.p(h,_):(n=o[e]=i[e](h),n.c()),k(n,1),n.m(r.parentNode,r)):n=null),h[9]?c?(c.p(h,_),_[0]&512&&k(c,1)):(c=Un(h),c.c(),k(c,1),c.m(s.parentNode,s)):c&&(te(),T(c,1,1,()=>{c=null}),ne())},i(h){a||(k(n),k(c),a=!0)},o(h){T(n),T(c),a=!1},d(h){~e&&o[e].d(h),h&&m(r),c&&c.d(h),h&&m(s)}}}function _l(t,e,n){const r=["class","bsSize","checked","color","disabled","feedback","files","group","inner","invalid","label","multiple","name","placeholder","plaintext","readonly","reverse","size","type","valid","value"];let s=re(e,r),{$$slots:a={},$$scope:i}=e,{class:o=""}=e,{bsSize:u=void 0}=e,{checked:c=!1}=e,{color:h=void 0}=e,{disabled:_=void 0}=e,{feedback:v=void 0}=e,{files:g=void 0}=e,{group:w=void 0}=e,{inner:p=void 0}=e,{invalid:A=!1}=e,{label:E=void 0}=e,{multiple:B=void 0}=e,{name:W=""}=e,{placeholder:X=""}=e,{plaintext:j=!1}=e,{readonly:ie=void 0}=e,{reverse:D=!1}=e,{size:se=void 0}=e,{type:_e="text"}=e,{valid:Ne=!1}=e,{value:O=""}=e,dt,Ie;const Pt=l=>{n(6,O=l.target.value)};function Dt(l){f.call(this,t,l)}function Lt(l){f.call(this,t,l)}function Mt(l){f.call(this,t,l)}function Ut(l){f.call(this,t,l)}function Bt(l){f.call(this,t,l)}function Ft(l){f.call(this,t,l)}function zt(l){f.call(this,t,l)}function Ht(l){f.call(this,t,l)}function Vt(l){f.call(this,t,l)}function Wt(l){f.call(this,t,l)}function jt(l){f.call(this,t,l)}function Gt(l){f.call(this,t,l)}function Kt(l){f.call(this,t,l)}function b(l){f.call(this,t,l)}function tr(l){f.call(this,t,l)}function nr(l){f.call(this,t,l)}function ir(l){f.call(this,t,l)}function rr(l){f.call(this,t,l)}function sr(l){f.call(this,t,l)}function ar(l){f.call(this,t,l)}function or(l){f.call(this,t,l)}function lr(l){f.call(this,t,l)}function ur(l){f.call(this,t,l)}function cr(l){f.call(this,t,l)}function hr(l){f.call(this,t,l)}function dr(l){f.call(this,t,l)}function fr(l){f.call(this,t,l)}function _r(l){f.call(this,t,l)}function pr(l){f.call(this,t,l)}function mr(l){f.call(this,t,l)}function gr(l){f.call(this,t,l)}function br(l){f.call(this,t,l)}function vr(l){f.call(this,t,l)}function kr(l){f.call(this,t,l)}function Ir(l){f.call(this,t,l)}function yr(l){f.call(this,t,l)}function Er(l){f.call(this,t,l)}function Tr(l){f.call(this,t,l)}function wr(l){f.call(this,t,l)}function Sr(l){f.call(this,t,l)}function Or(l){f.call(this,t,l)}function Ar(l){f.call(this,t,l)}function Rr(l){f.call(this,t,l)}function Cr(l){f.call(this,t,l)}function Nr(l){f.call(this,t,l)}function Pr(l){f.call(this,t,l)}function Dr(l){f.call(this,t,l)}function Lr(l){f.call(this,t,l)}function Mr(l){f.call(this,t,l)}function Ur(l){f.call(this,t,l)}function Br(l){f.call(this,t,l)}function Fr(l){f.call(this,t,l)}function zr(l){f.call(this,t,l)}function Hr(l){f.call(this,t,l)}function Vr(l){f.call(this,t,l)}function Wr(l){f.call(this,t,l)}function jr(l){f.call(this,t,l)}function Gr(l){f.call(this,t,l)}function Kr(l){f.call(this,t,l)}function qr(l){f.call(this,t,l)}function Jr(l){f.call(this,t,l)}function Yr(l){f.call(this,t,l)}function Xr(l){f.call(this,t,l)}function Qr(l){f.call(this,t,l)}function Zr(l){f.call(this,t,l)}function xr(l){f.call(this,t,l)}function $r(l){f.call(this,t,l)}function es(l){f.call(this,t,l)}function ts(l){f.call(this,t,l)}function ns(l){f.call(this,t,l)}function is(l){f.call(this,t,l)}function rs(l){f.call(this,t,l)}function ss(l){f.call(this,t,l)}function as(l){f.call(this,t,l)}function os(l){f.call(this,t,l)}function ls(l){f.call(this,t,l)}function us(l){f.call(this,t,l)}function cs(l){f.call(this,t,l)}function hs(l){f.call(this,t,l)}function ds(l){f.call(this,t,l)}function fs(l){f.call(this,t,l)}function _s(l){f.call(this,t,l)}function ps(l){f.call(this,t,l)}function ms(l){f.call(this,t,l)}function gs(l){f.call(this,t,l)}function bs(l){f.call(this,t,l)}function vs(l){f.call(this,t,l)}function ks(l){f.call(this,t,l)}function Is(l){f.call(this,t,l)}function ys(l){f.call(this,t,l)}function Es(l){f.call(this,t,l)}function Ts(l){f.call(this,t,l)}function ws(l){f.call(this,t,l)}function Ss(l){f.call(this,t,l)}function Os(l){f.call(this,t,l)}function As(l){f.call(this,t,l)}function Rs(l){f.call(this,t,l)}function Cs(l){f.call(this,t,l)}function Ns(l){f.call(this,t,l)}function Ps(l){f.call(this,t,l)}function Ds(l){f.call(this,t,l)}function Ls(l){f.call(this,t,l)}function Ms(l){f.call(this,t,l)}function Us(l){f.call(this,t,l)}function Bs(l){f.call(this,t,l)}function Fs(l){f.call(this,t,l)}function zs(l){f.call(this,t,l)}function Hs(l){f.call(this,t,l)}function Vs(l){f.call(this,t,l)}function Ws(l){f.call(this,t,l)}function js(l){f.call(this,t,l)}function Gs(l){f.call(this,t,l)}function Ks(l){f.call(this,t,l)}function qs(l){f.call(this,t,l)}function Js(l){f.call(this,t,l)}function Ys(l){f.call(this,t,l)}function Xs(l){f.call(this,t,l)}function Qs(l){f.call(this,t,l)}function Zs(l){f.call(this,t,l)}function xs(l){f.call(this,t,l)}function $s(l){f.call(this,t,l)}function ea(l){f.call(this,t,l)}function ta(l){f.call(this,t,l)}function na(l){f.call(this,t,l)}function ia(l){f.call(this,t,l)}function ra(l){f.call(this,t,l)}function sa(l){f.call(this,t,l)}function aa(l){f.call(this,t,l)}function oa(l){f.call(this,t,l)}function la(l){f.call(this,t,l)}function ua(l){f.call(this,t,l)}function ca(l){f.call(this,t,l)}function ha(l){f.call(this,t,l)}function da(l){f.call(this,t,l)}function fa(l){f.call(this,t,l)}function _a(){O=this.value,n(6,O)}function pa(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function ma(){O=this.value,n(6,O)}function ga(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function ba(){O=this.value,n(6,O)}function va(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function ka(){O=this.value,n(6,O)}function Ia(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function ya(){g=this.files,O=this.value,n(3,g),n(6,O)}function Ea(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Ta(l){c=l,n(2,c)}function wa(l){p=l,n(5,p)}function Sa(l){w=l,n(4,w)}function Oa(l){O=l,n(6,O)}function Aa(l){f.call(this,t,l)}function Ra(l){f.call(this,t,l)}function Ca(l){f.call(this,t,l)}function Na(l){f.call(this,t,l)}function Pa(l){f.call(this,t,l)}function Da(l){f.call(this,t,l)}function La(l){f.call(this,t,l)}function Ma(){O=this.value,n(6,O)}function Ua(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Ba(){O=tn(this.value),n(6,O)}function Fa(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function za(){O=this.value,n(6,O)}function Ha(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Va(){O=this.value,n(6,O)}function Wa(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function ja(){O=this.value,n(6,O)}function Ga(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Ka(){O=this.value,n(6,O)}function qa(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Ja(){O=this.value,n(6,O)}function Ya(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Xa(){O=this.value,n(6,O)}function Qa(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function Za(){O=tn(this.value),n(6,O)}function xa(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function $a(){O=this.value,n(6,O)}function eo(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function to(){O=this.value,n(6,O)}function no(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function io(){O=this.value,n(6,O)}function ro(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function so(){O=this.value,n(6,O)}function ao(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}function oo(){O=ho(this),n(6,O)}function lo(l){U[l?"unshift":"push"](()=>{p=l,n(5,p)})}return t.$$set=l=>{e=R(R({},e),Je(l)),n(22,s=re(e,r)),"class"in l&&n(7,o=l.class),"bsSize"in l&&n(0,u=l.bsSize),"checked"in l&&n(2,c=l.checked),"color"in l&&n(23,h=l.color),"disabled"in l&&n(8,_=l.disabled),"feedback"in l&&n(9,v=l.feedback),"files"in l&&n(3,g=l.files),"group"in l&&n(4,w=l.group),"inner"in l&&n(5,p=l.inner),"invalid"in l&&n(10,A=l.invalid),"label"in l&&n(11,E=l.label),"multiple"in l&&n(12,B=l.multiple),"name"in l&&n(13,W=l.name),"placeholder"in l&&n(14,X=l.placeholder),"plaintext"in l&&n(24,j=l.plaintext),"readonly"in l&&n(15,ie=l.readonly),"reverse"in l&&n(16,D=l.reverse),"size"in l&&n(1,se=l.size),"type"in l&&n(17,_e=l.type),"valid"in l&&n(18,Ne=l.valid),"value"in l&&n(6,O=l.value),"$$scope"in l&&n(210,i=l.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&25560195){const l=new RegExp("\\D","g");let qt=!1,pe="form-control";switch(n(20,Ie="input"),_e){case"color":pe="form-control form-control-color";break;case"range":pe="form-range";break;case"select":pe="form-select",n(20,Ie="select");break;case"textarea":n(20,Ie="textarea");break;case"button":case"reset":case"submit":pe=`btn btn-${h||"secondary"}`,qt=!0;break;case"hidden":case"image":pe=void 0;break;default:pe="form-control",n(20,Ie="input")}j&&(pe=`${pe}-plaintext`,n(20,Ie="input")),se&&l.test(se)&&(console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),n(0,u=se),n(1,se=void 0)),n(19,dt=Re(o,pe,{"is-invalid":A,"is-valid":Ne,[`form-control-${u}`]:u&&!qt,[`btn-${u}`]:u&&qt}))}},[u,se,c,g,w,p,O,o,_,v,A,E,B,W,X,ie,D,_e,Ne,dt,Ie,Pt,s,h,j,a,Dt,Lt,Mt,Ut,Bt,Ft,zt,Ht,Vt,Wt,jt,Gt,Kt,b,tr,nr,ir,rr,sr,ar,or,lr,ur,cr,hr,dr,fr,_r,pr,mr,gr,br,vr,kr,Ir,yr,Er,Tr,wr,Sr,Or,Ar,Rr,Cr,Nr,Pr,Dr,Lr,Mr,Ur,Br,Fr,zr,Hr,Vr,Wr,jr,Gr,Kr,qr,Jr,Yr,Xr,Qr,Zr,xr,$r,es,ts,ns,is,rs,ss,as,os,ls,us,cs,hs,ds,fs,_s,ps,ms,gs,bs,vs,ks,Is,ys,Es,Ts,ws,Ss,Os,As,Rs,Cs,Ns,Ps,Ds,Ls,Ms,Us,Bs,Fs,zs,Hs,Vs,Ws,js,Gs,Ks,qs,Js,Ys,Xs,Qs,Zs,xs,$s,ea,ta,na,ia,ra,sa,aa,oa,la,ua,ca,ha,da,fa,_a,pa,ma,ga,ba,va,ka,Ia,ya,Ea,Ta,wa,Sa,Oa,Aa,Ra,Ca,Na,Pa,Da,La,Ma,Ua,Ba,Fa,za,Ha,Va,Wa,ja,Ga,Ka,qa,Ja,Ya,Xa,Qa,Za,xa,$a,eo,to,no,io,ro,so,ao,oo,lo,i]}class fi extends Be{constructor(e){super(),Fe(this,e,_l,fl,ze,{class:7,bsSize:0,checked:2,color:23,disabled:8,feedback:9,files:3,group:4,inner:5,invalid:10,label:11,multiple:12,name:13,placeholder:14,plaintext:24,readonly:15,reverse:16,size:1,type:17,valid:18,value:6},null,[-1,-1,-1,-1,-1,-1,-1])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],i=t[n++],o=t[n++],u=((s&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const a=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|i&63)}}return e.join("")},pi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],i=s+1<t.length,o=i?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,h=a>>2,_=(a&3)<<4|o>>4;let v=(o&15)<<2|c>>6,g=c&63;u||(g=64,i||(v=64)),r.push(n[h],n[_],n[v],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||o==null||c==null||_==null)throw Error();const v=a<<2|o>>4;if(r.push(v),c!==64){const g=o<<4&240|c>>2;if(r.push(g),_!==64){const w=c<<6&192|_;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ml=function(t){const e=_i(t);return pi.encodeByteArray(e,!0)},mi=function(t){return ml(t).replace(/\./g,"")},gi=function(t){try{return pi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function bl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kl(){const t=H();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Il(){try{return typeof indexedDB=="object"}catch{return!1}}function yl(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function El(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=()=>El().__FIREBASE_DEFAULTS__,wl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gi(t[1]);return e&&JSON.parse(e)},hn=()=>{try{return Tl()||wl()||Sl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ol=t=>{var e,n;return(n=(e=hn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Al=()=>{var t;return(t=hn())===null||t===void 0?void 0:t.config},bi=t=>{var e;return(e=hn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="FirebaseError";class Ce extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cl,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],i=a?Nl(a,r):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new Ce(s,o,r)}}function Nl(t,e){return t.replace(Pl,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pl=/\{\$([^}]+)}/g;function Dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],i=e[s];if(Fn(a)&&Fn(i)){if(!yt(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xe(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Qe(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ll(t,e){const n=new Ml(t,e);return n.subscribe.bind(n)}class Ml{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ul(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jt),s.error===void 0&&(s.error=Jt),s.complete===void 0&&(s.complete=Jt);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ul(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return t&&t._delegate?t._delegate:t}class qe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zl(e))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pe){return this.instances.has(e)}getOptions(e=Pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const i=this.instances.get(s);return i&&e(i,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fl(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pe){return this.component?this.component.multipleInstances?e:Pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fl(t){return t===Pe?void 0:t}function zl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Vl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Wl=F.INFO,jl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Gl=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jl[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vi{constructor(e){this.name=e,this._logLevel=Wl,this._logHandler=Gl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Kl=(t,e)=>e.some(n=>t instanceof n);let zn,Hn;function ql(){return zn||(zn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jl(){return Hn||(Hn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ki=new WeakMap,rn=new WeakMap,Ii=new WeakMap,Yt=new WeakMap,dn=new WeakMap;function Yl(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(Oe(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&ki.set(n,t)}).catch(()=>{}),dn.set(e,t),e}function Xl(t){if(rn.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});rn.set(t,e)}let sn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ii.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ql(t){sn=t(sn)}function Zl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xt(this),e,...n);return Ii.set(r,e.sort?e.sort():[e]),Oe(r)}:Jl().includes(t)?function(...e){return t.apply(Xt(this),e),Oe(ki.get(this))}:function(...e){return Oe(t.apply(Xt(this),e))}}function xl(t){return typeof t=="function"?Zl(t):(t instanceof IDBTransaction&&Xl(t),Kl(t,ql())?new Proxy(t,sn):t)}function Oe(t){if(t instanceof IDBRequest)return Yl(t);if(Yt.has(t))return Yt.get(t);const e=xl(t);return e!==t&&(Yt.set(t,e),dn.set(e,t)),e}const Xt=t=>dn.get(t);function $l(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(t,e),o=Oe(i);return r&&i.addEventListener("upgradeneeded",u=>{r(Oe(i.result),u.oldVersion,u.newVersion,Oe(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),o.then(u=>{a&&u.addEventListener("close",()=>a()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const eu=["get","getKey","getAll","getAllKeys","count"],tu=["put","add","delete","clear"],Qt=new Map;function Vn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qt.get(e))return Qt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eu.includes(n)))return;const a=async function(i,...o){const u=this.transaction(i,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),s&&u.done]))[0]};return Qt.set(e,a),a}Ql(t=>({...t,get:(e,n,r)=>Vn(e,n)||t.get(e,n,r),has:(e,n)=>!!Vn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const an="@firebase/app",Wn="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new vi("@firebase/app"),ru="@firebase/app-compat",su="@firebase/analytics-compat",au="@firebase/analytics",ou="@firebase/app-check-compat",lu="@firebase/app-check",uu="@firebase/auth",cu="@firebase/auth-compat",hu="@firebase/database",du="@firebase/database-compat",fu="@firebase/functions",_u="@firebase/functions-compat",pu="@firebase/installations",mu="@firebase/installations-compat",gu="@firebase/messaging",bu="@firebase/messaging-compat",vu="@firebase/performance",ku="@firebase/performance-compat",Iu="@firebase/remote-config",yu="@firebase/remote-config-compat",Eu="@firebase/storage",Tu="@firebase/storage-compat",wu="@firebase/firestore",Su="@firebase/firestore-compat",Ou="firebase",Au="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]",Ru={[an]:"fire-core",[ru]:"fire-core-compat",[au]:"fire-analytics",[su]:"fire-analytics-compat",[lu]:"fire-app-check",[ou]:"fire-app-check-compat",[uu]:"fire-auth",[cu]:"fire-auth-compat",[hu]:"fire-rtdb",[du]:"fire-rtdb-compat",[fu]:"fire-fn",[_u]:"fire-fn-compat",[pu]:"fire-iid",[mu]:"fire-iid-compat",[gu]:"fire-fcm",[bu]:"fire-fcm-compat",[vu]:"fire-perf",[ku]:"fire-perf-compat",[Iu]:"fire-rc",[yu]:"fire-rc-compat",[Eu]:"fire-gcs",[Tu]:"fire-gcs-compat",[wu]:"fire-fst",[Su]:"fire-fst-compat","fire-js":"fire-js",[Ou]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Map,ln=new Map;function Cu(t,e){try{t.container.addComponent(e)}catch(n){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xe(t){const e=t.name;if(ln.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,t);for(const n of Et.values())Cu(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ae=new it("app","Firebase",Nu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=Au;function Ei(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:on,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ae.create("bad-app-name",{appName:String(s)});if(n||(n=Al()),!n)throw Ae.create("no-options");const a=Et.get(s);if(a){if(yt(n,a.options)&&yt(r,a.config))return a;throw Ae.create("duplicate-app",{appName:s})}const i=new Hl(s);for(const u of ln.values())i.addComponent(u);const o=new Pu(n,r,i);return Et.set(s,o),o}function Du(t=on){const e=Et.get(t);if(!e&&t===on)return Ei();if(!e)throw Ae.create("no-app",{appName:t});return e}function je(t,e,n){var r;let s=(r=Ru[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const o=[`Unable to register library "${s}" with version "${e}":`];a&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(o.join(" "));return}xe(new qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="firebase-heartbeat-database",Mu=1,$e="firebase-heartbeat-store";let Zt=null;function Ti(){return Zt||(Zt=$l(Lu,Mu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($e)}}}).catch(t=>{throw Ae.create("idb-open",{originalErrorMessage:t.message})})),Zt}async function Uu(t){try{return(await Ti()).transaction($e).objectStore($e).get(wi(t))}catch(e){if(e instanceof Ce)Le.warn(e.message);else{const n=Ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(n.message)}}}async function jn(t,e){try{const r=(await Ti()).transaction($e,"readwrite");return await r.objectStore($e).put(e,wi(t)),r.done}catch(n){if(n instanceof Ce)Le.warn(n.message);else{const r=Ae.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Le.warn(r.message)}}}function wi(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=1024,Fu=30*24*60*60*1e3;class zu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Fu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gn(),{heartbeatsToSend:n,unsentEntries:r}=Hu(this._heartbeatsCache.heartbeats),s=mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gn(){return new Date().toISOString().substring(0,10)}function Hu(t,e=Bu){const n=[];let r=t.slice();for(const s of t){const a=n.find(i=>i.agent===s.agent);if(a){if(a.dates.push(s.date),Kn(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Il()?yl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kn(t){return mi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){xe(new qe("platform-logger",e=>new nu(e),"PRIVATE")),xe(new qe("heartbeat",e=>new zu(e),"PRIVATE")),je(an,Wn,t),je(an,Wn,"esm2017"),je("fire-js","")}Wu("");var ju="firebase",Gu="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(ju,Gu,"app");function fn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Si(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ku=Si,Oi=new it("auth","Firebase",Si());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new vi("@firebase/auth");function gt(t,...e){qn.logLevel<=F.ERROR&&qn.error(`Auth (${At}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,...e){throw _n(t,...e)}function le(t,...e){return _n(t,...e)}function qu(t,e,n){const r=Object.assign(Object.assign({},Ku()),{[e]:n});return new it("auth","Firebase",r).create(e,{appName:t.name})}function _n(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oi.create(t,...e)}function S(t,e,...n){if(!t)throw _n(e,...n)}function me(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gt(e),new Error(e)}function be(t,e){t||me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map;function ge(t){be(t instanceof Function,"Expected a class definition");let e=Jn.get(t);return e?(be(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jn.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e){const n=yi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),a=n.getOptions();if(yt(a,e??{}))return s;oe(s,"already-initialized")}return n.initialize({options:e})}function Yu(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xu(){return Yn()==="http:"||Yn()==="https:"}function Yn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xu()||bl()||"connection"in navigator)?navigator.onLine:!0}function Zu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.shortDelay=e,this.longDelay=n,be(n>e,"Short delay should be less than long delay!"),this.isMobile=gl()||vl()}get(){return Qu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){be(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new st(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ot(t,e,n,r,s={}){return Ri(t,s,async()=>{let a={},i={};r&&(e==="GET"?i=r:a={body:JSON.stringify(r)});const o=rt(Object.assign({key:t.config.apiKey},i)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Ai.fetch()(Ci(t,t.config.apiHost,n,o),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},a))})}async function Ri(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xu),e);try{const s=new ec(t),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw _t(t,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const o=a.ok?i.errorMessage:i.error.message,[u,c]=o.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _t(t,"credential-already-in-use",i);if(u==="EMAIL_EXISTS")throw _t(t,"email-already-in-use",i);if(u==="USER_DISABLED")throw _t(t,"user-disabled",i);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qu(t,h,c);oe(t,h)}}catch(s){if(s instanceof Ce)throw s;oe(t,"network-request-failed")}}async function lt(t,e,n,r,s={}){const a=await ot(t,e,n,r,s);return"mfaPendingCredential"in a&&oe(t,"multi-factor-auth-required",{_serverResponse:a}),a}function Ci(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pn(t.config,s):`${t.config.apiScheme}://${s}`}class ec{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(le(this.auth,"network-request-failed")),$u.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _t(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=le(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function nc(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ic(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=mn(r);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,i=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Ze(xt(s.auth_time)),issuedAtTime:Ze(xt(s.iat)),expirationTime:Ze(xt(s.exp)),signInProvider:i||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function xt(t){return Number(t)*1e3}function mn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gt("JWT malformed, contained fewer than 3 sections"),null;try{const s=gi(n);return s?JSON.parse(s):(gt("Failed to decode base64 JWT payload"),null)}catch(s){return gt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rc(t){const e=mn(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ce&&sc(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ze(this.lastLoginAt),this.creationTime=Ze(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t){var e;const n=t.auth,r=await t.getIdToken(),s=await et(t,nc(n,{idToken:r}));S(s==null?void 0:s.users.length,n,"internal-error");const a=s.users[0];t._notifyReloadListener(a);const i=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?uc(a.providerUserInfo):[],o=lc(t.providerData,i),u=t.isAnonymous,c=!(t.email&&a.passwordHash)&&!(o!=null&&o.length),h=u?c:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Ni(a.createdAt,a.lastLoginAt),isAnonymous:h};Object.assign(t,_)}async function oc(t){const e=ke(t);await Tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lc(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uc(t){return t.map(e=>{var{providerId:n}=e,r=fn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(t,e){const n=await Ri(t,{},async()=>{const r=rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=t.config,i=Ci(t,s,"/v1/token",`key=${a}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ai.fetch()(i,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:a}=await cc(e,n);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:a}=n,i=new tt;return r&&(S(typeof r=="string","internal-error",{appName:e}),i.refreshToken=r),s&&(S(typeof s=="string","internal-error",{appName:e}),i.accessToken=s),a&&(S(typeof a=="number","internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class De{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,a=fn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ac(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Ni(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await et(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ic(this,e)}reload(){return oc(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new De(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await et(this,tc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,a,i,o,u,c,h;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(i=n.photoURL)!==null&&i!==void 0?i:void 0,p=(o=n.tenantId)!==null&&o!==void 0?o:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:W,emailVerified:X,isAnonymous:j,providerData:ie,stsTokenManager:D}=n;S(W&&D,e,"internal-error");const se=tt.fromJSON(this.name,D);S(typeof W=="string",e,"internal-error"),ye(_,e.name),ye(v,e.name),S(typeof X=="boolean",e,"internal-error"),S(typeof j=="boolean",e,"internal-error"),ye(g,e.name),ye(w,e.name),ye(p,e.name),ye(A,e.name),ye(E,e.name),ye(B,e.name);const _e=new De({uid:W,auth:e,email:v,emailVerified:X,displayName:_,isAnonymous:j,photoURL:w,phoneNumber:g,tenantId:p,stsTokenManager:se,createdAt:E,lastLoginAt:B});return ie&&Array.isArray(ie)&&(_e.providerData=ie.map(Ne=>Object.assign({},Ne))),A&&(_e._redirectEventId=A),_e}static async _fromIdTokenResponse(e,n,r=!1){const s=new tt;s.updateFromServerResponse(n);const a=new De({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tt(a),a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pi.type="NONE";const Xn=Pi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ge{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=bt(this.userKey,s.apiKey,a),this.fullPersistenceKey=bt("persistence",s.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?De._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ge(ge(Xn),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=s[0]||ge(Xn);const i=bt(r,e.config.apiKey,e.name);let o=null;for(const c of n)try{const h=await c._get(i);if(h){const _=De._fromJSON(e,h);c!==a&&(o=_),a=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!u.length?new Ge(a,e,r):(a=u[0],o&&await a._set(i,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==a)try{await c._remove(i)}catch{}})),new Ge(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Di(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bi(e))return"Blackberry";if(Fi(e))return"Webos";if(gn(e))return"Safari";if((e.includes("chrome/")||Li(e))&&!e.includes("edge/"))return"Chrome";if(Ui(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Di(t=H()){return/firefox\//i.test(t)}function gn(t=H()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Li(t=H()){return/crios\//i.test(t)}function Mi(t=H()){return/iemobile/i.test(t)}function Ui(t=H()){return/android/i.test(t)}function Bi(t=H()){return/blackberry/i.test(t)}function Fi(t=H()){return/webos/i.test(t)}function Rt(t=H()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hc(t=H()){var e;return Rt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dc(){return kl()&&document.documentMode===10}function zi(t=H()){return Rt(t)||Ui(t)||Fi(t)||Bi(t)||/windows phone/i.test(t)||Mi(t)}function fc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e=[]){let n;switch(t){case"Browser":n=Qn(H());break;case"Worker":n=`${Qn(H())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${At}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((i,o)=>{try{const u=e(a);i(u)}catch(u){o(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zn(this),this.idTokenSubscription=new Zn(this),this.beforeStateQueue=new _c(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!i||i===o)&&(u!=null&&u.user)&&(s=u.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new it("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ge(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),i=this._isInitialized?Promise.resolve():this._initializationPromise;return S(i,this,"internal-error"),i.then(()=>a(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ut(t){return ke(t)}class Zn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ll(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function mc(t,e,n){const r=ut(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),a=Vi(e),{host:i,port:o}=gc(e),u=o===null?"":`:${o}`;r.config.emulator={url:`${a}//${i}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:i,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||bc()}function Vi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gc(t){const e=Vi(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:xn(r.substr(a.length+1))}}else{const[a,i]=r.split(":");return{host:a,port:xn(i)}}}function xn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return me("not implemented")}_getIdTokenResponse(e){return me("not implemented")}_linkToIdToken(e,n){return me("not implemented")}_getReauthenticationResolver(e){return me("not implemented")}}async function vc(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(t,e){return lt(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t,e){return lt(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function yc(t,e){return lt(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends bn{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new nt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kc(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ic(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vc(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yc(e,{idToken:n,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(t,e){return lt(t,"POST","/v1/accounts:signInWithIdp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="http://localhost";class Me extends bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,a=fn(n,["providerId","signInMethod"]);if(!r||!s)return null;const i=new Me(r,s);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){const n=this.buildRequest();return Ke(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ke(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ke(e,n)}buildRequest(){const e={requestUri:Ec,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wc(t){const e=Xe(Qe(t)).link,n=e?Xe(Qe(e)).deep_link_id:null,r=Xe(Qe(t)).deep_link_id;return(r?Xe(Qe(r)).link:null)||r||n||e||t}class vn{constructor(e){var n,r,s,a,i,o;const u=Xe(Qe(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,_=Tc((s=u.mode)!==null&&s!==void 0?s:null);S(c&&h&&_,"argument-error"),this.apiKey=c,this.operation=_,this.code=h,this.continueUrl=(a=u.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(i=u.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(o=u.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=wc(e);try{return new vn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,n){return nt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vn.parseLink(n);return S(r,"argument-error"),nt._fromEmailAndCode(e,r.code,r.tenantId)}}Ye.PROVIDER_ID="password";Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends ct{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends ct{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Me._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Te.credential(n,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends ct{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends ct{constructor(){super("twitter.com")}static credential(e,n){return Me._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Se.credential(n,r)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t,e){return lt(t,"POST","/v1/accounts:signUp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const a=await De._fromIdTokenResponse(e,r,s),i=$n(r);return new Ue({user:a,providerId:i,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$n(r);return new Ue({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $n(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Ce{constructor(e,n,r,s){var a;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wt(e,n,r,s)}}function ji(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?wt._fromErrorAndOperation(t,a,e,r):a})}async function Oc(t,e,n=!1){const r=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ue._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const a=await et(t,ji(r,s,e,t),n);S(a.idToken,r,"internal-error");const i=mn(a.idToken);S(i,r,"internal-error");const{sub:o}=i;return S(t.uid===o,r,"user-mismatch"),Ue._forOperation(t,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&oe(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e,n=!1){const r="signIn",s=await ji(t,r,e),a=await Ue._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(a.user),a}async function Rc(t,e){return Gi(ut(t),e)}async function Cc(t,e,n){const r=ut(t),s=await Sc(r,{returnSecureToken:!0,email:e,password:n}),a=await Ue._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function Nc(t,e,n){return Rc(ke(t),Ye.credential(e,n))}function Pc(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function Dc(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function Lc(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function Mc(t){return ke(t).signOut()}const St="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(St,"1"),this.storage.removeItem(St),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){const t=H();return gn(t)||Rt(t)}const Bc=1e3,Fc=10;class qi extends Ki{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uc()&&fc(),this.fallbackToPolling=zi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((i,o,u)=>{this.notifyListeners(i,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const i=this.storage.getItem(r);!n&&this.localCache[r]===i||this.notifyListeners(r,i)},a=this.storage.getItem(r);dc()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fc):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qi.type="LOCAL";const zc=qi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Ki{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ji.type="SESSION";const Yi=Ji;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ct(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:a}=n.data,i=this.handlersMap[s];if(!(i!=null&&i.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const o=Array.from(i).map(async c=>c(n.origin,a)),u=await Hc(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ct.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,i;return new Promise((o,u)=>{const c=kn("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);i={messageChannel:s,onMessage(_){const v=_;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(h),a=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(v.data.response);break;default:clearTimeout(h),clearTimeout(a),u(new Error("invalid_response"));break}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function Wc(t){ue().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function jc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kc(){return Xi()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="firebaseLocalStorageDb",qc=1,Ot="firebaseLocalStorage",Zi="fbase_key";class ht{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nt(t,e){return t.transaction([Ot],e?"readwrite":"readonly").objectStore(Ot)}function Jc(){const t=indexedDB.deleteDatabase(Qi);return new ht(t).toPromise()}function cn(){const t=indexedDB.open(Qi,qc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ot,{keyPath:Zi})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ot)?e(r):(r.close(),await Jc(),e(await cn()))})})}async function ei(t,e,n){const r=Nt(t,!0).put({[Zi]:e,value:n});return new ht(r).toPromise()}async function Yc(t,e){const n=Nt(t,!1).get(e),r=await new ht(n).toPromise();return r===void 0?null:r.value}function ti(t,e){const n=Nt(t,!0).delete(e);return new ht(n).toPromise()}const Xc=800,Qc=3;class xi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Kc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jc(),!this.activeServiceWorker)return;this.sender=new Vc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cn();return await ei(e,St,"1"),await ti(e,St),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ei(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yc(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ti(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Nt(s,!1).getAll();return new ht(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xi.type="LOCAL";const Zc=xi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $c(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const a=le("internal-error");a.customData=s,n(a)},r.type="text/javascript",r.charset="UTF-8",xc().appendChild(r)})}function eh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new st(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){return e?ge(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ke(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nh(t){return Gi(t.auth,new In(t),t.bypassAuthState)}function ih(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Ac(n,new In(t),t.bypassAuthState)}async function rh(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Oc(n,new In(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:a,error:i,type:o}=e;if(i){this.reject(i);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nh;case"linkViaPopup":case"linkViaRedirect":return rh;case"reauthViaPopup":case"reauthViaRedirect":return ih;default:oe(this.auth,"internal-error")}}resolve(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new st(2e3,1e4);class We extends $i{constructor(e,n,r,s,a){super(e,n,s,a),this.provider=r,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){be(this.filter.length===1,"Popup operations only handle one event");const e=kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sh.get())};e()}}We.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="pendingRedirect",vt=new Map;class oh extends $i{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vt.get(this.auth._key());if(!e){try{const r=await lh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vt.set(this.auth._key(),e)}return this.bypassAuthState||vt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lh(t,e){const n=hh(e),r=ch(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uh(t,e){vt.set(t._key(),e)}function ch(t){return ge(t._redirectPersistence)}function hh(t){return bt(ah,t.config.apiKey,t.name)}async function dh(t,e,n=!1){const r=ut(t),s=th(r,e),i=await new oh(r,s,n).execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=10*60*1e3;class _h{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ph(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!er(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(le(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fh&&this.cachedEventUids.clear(),this.cachedEventUids.has(ni(e))}saveEventToCache(e){this.cachedEventUids.add(ni(e)),this.lastProcessedEventTime=Date.now()}}function ni(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function er({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ph(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return er(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bh=/^https?/;async function vh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mh(t);for(const n of e)try{if(kh(n))return}catch{}oe(t,"unauthorized-domain")}function kh(t){const e=un(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===r}if(!bh.test(n))return!1;if(gh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new st(3e4,6e4);function ii(){const t=ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yh(t){return new Promise((e,n)=>{var r,s,a;function i(){ii(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ii(),n(le(t,"network-request-failed"))},timeout:Ih.get()})}if(!((s=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=ue().gapi)===null||a===void 0)&&a.load)i();else{const o=eh("iframefcb");return ue()[o]=()=>{gapi.load?i():n(le(t,"network-request-failed"))},$c(`https://apis.google.com/js/api.js?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw kt=null,e})}let kt=null;function Eh(t){return kt=kt||yh(t),kt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new st(5e3,15e3),wh="__/auth/iframe",Sh="emulator/auth/iframe",Oh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ah=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rh(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pn(e,Sh):`https://${t.config.authDomain}/${wh}`,r={apiKey:e.apiKey,appName:t.name,v:At},s=Ah.get(t.config.apiHost);s&&(r.eid=s);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${rt(r).slice(1)}`}async function Ch(t){const e=await Eh(t),n=ue().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:Rh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oh,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const i=le(t,"network-request-failed"),o=ue().setTimeout(()=>{a(i)},Th.get());function u(){ue().clearTimeout(o),s(r)}r.ping(u).then(u,()=>{a(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ph=500,Dh=600,Lh="_blank",Mh="http://localhost";class ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uh(t,e,n,r=Ph,s=Dh){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const u=Object.assign(Object.assign({},Nh),{width:r.toString(),height:s.toString(),top:a,left:i}),c=H().toLowerCase();n&&(o=Li(c)?Lh:n),Di(c)&&(e=e||Mh,u.scrollbars="yes");const h=Object.entries(u).reduce((v,[g,w])=>`${v}${g}=${w},`,"");if(hc(c)&&o!=="_self")return Bh(e||"",o),new ri(null);const _=window.open(e||"",o,h);S(_,t,"popup-blocked");try{_.focus()}catch{}return new ri(_)}function Bh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="__/auth/handler",zh="emulator/auth/handler";function si(t,e,n,r,s,a){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:At,eventId:s};if(e instanceof Wi){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",Dl(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,c]of Object.entries(a||{}))i[u]=c}if(e instanceof ct){const u=e.getScopes().filter(c=>c!=="");u.length>0&&(i.scopes=u.join(","))}t.tenantId&&(i.tid=t.tenantId);const o=i;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];return`${Hh(t)}?${rt(o).slice(1)}`}function Hh({config:t}){return t.emulator?pn(t,zh):`https://${t.authDomain}/${Fh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="webStorageSupport";class Vh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yi,this._completeRedirectFn=dh,this._overrideRedirectResult=uh}async _openPopup(e,n,r,s){var a;be((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const i=si(e,n,r,un(),s);return Uh(e,i,kn())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Wc(si(e,n,r,un(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:a}=this.eventManagers[n];return s?Promise.resolve(s):(be(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ch(e),r=new _h(e);return n.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($t,{type:$t},s=>{var a;const i=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[$t];i!==void 0&&n(!!i),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zi()||gn()||Rt()}}const Wh=Vh;var ai="@firebase/auth",oi="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Kh(t){xe(new qe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:a,authDomain:i}=r.options;return((o,u)=>{S(a&&!a.includes(":"),"invalid-api-key",{appName:o.name}),S(!(i!=null&&i.includes(":")),"argument-error",{appName:o.name});const c={apiKey:a,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hi(t)},h=new pc(o,u,c);return Yu(h,n),h})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xe(new qe("auth-internal",e=>{const n=ut(e.getProvider("auth").getImmediate());return(r=>new jh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(ai,oi,Gh(t)),je(ai,oi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=5*60,Jh=bi("authIdTokenMaxAge")||qh;let li=null;const Yh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jh)return;const s=n==null?void 0:n.token;li!==s&&(li=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pt(t=Du()){const e=yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ju(t,{popupRedirectResolver:Wh,persistence:[Zc,zc,Yi]}),r=bi("authTokenSyncURL");if(r){const a=Yh(r);Dc(n,a,()=>a(n.currentUser)),Pc(n,i=>a(i))}const s=Ol("auth");return s&&mc(n,`http://${s}`),n}Kh("Browser");function Xh(t){let e,n,r,s,a,i,o;e=new mt({props:{$$slots:{default:[Zh]},$$scope:{ctx:t}}}),r=new mt({props:{$$slots:{default:[xh]},$$scope:{ctx:t}}});let u=t[3]&&ui(t);return i=new mt({props:{$$slots:{default:[nd]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment),n=G(),Q(r.$$.fragment),s=G(),u&&u.c(),a=G(),Q(i.$$.fragment)},l(c){Z(e.$$.fragment,c),n=K(c),Z(r.$$.fragment,c),s=K(c),u&&u.l(c),a=K(c),Z(i.$$.fragment,c)},m(c,h){x(e,c,h),I(c,n,h),x(r,c,h),I(c,s,h),u&&u.m(c,h),I(c,a,h),x(i,c,h),o=!0},p(c,h){const _={};h&16385&&(_.$$scope={dirty:h,ctx:c}),e.$set(_);const v={};h&16386&&(v.$$scope={dirty:h,ctx:c}),r.$set(v),c[3]?u?(u.p(c,h),h&8&&k(u,1)):(u=ui(c),u.c(),k(u,1),u.m(a.parentNode,a)):u&&(te(),T(u,1,1,()=>{u=null}),ne());const g={};h&16384&&(g.$$scope={dirty:h,ctx:c}),i.$set(g)},i(c){o||(k(e.$$.fragment,c),k(r.$$.fragment,c),k(u),k(i.$$.fragment,c),o=!0)},o(c){T(e.$$.fragment,c),T(r.$$.fragment,c),T(u),T(i.$$.fragment,c),o=!1},d(c){$(e,c),c&&m(n),$(r,c),c&&m(s),u&&u.d(c),c&&m(a),$(i,c)}}}function Qh(t){let e,n;return e=new mt({props:{$$slots:{default:[rd]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){x(e,r,s),n=!0},p(r,s){const a={};s&16388&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function Zh(t){let e,n,r;function s(i){t[9](i)}let a={id:"exampleInputEmail1",type:"email",placeholder:"Enter a valid email",minlength:It,valid:t[5](t[0],It)};return t[0]!==void 0&&(a.value=t[0]),e=new fi({props:a}),U.push(()=>He(e,"value",s,t[0])),{c(){Q(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,o){x(e,i,o),r=!0},p(i,o){const u={};o&1&&(u.valid=i[5](i[0],It)),!n&&o&1&&(n=!0,u.value=i[0],Ve(()=>n=!1)),e.$set(u)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){$(e,i)}}}function xh(t){let e,n,r;function s(i){t[10](i)}let a={id:"exampleInputPassword1",type:"password",placeholder:"Enter a STRONG password",minlength:en,valid:t[4](t[1],en)};return t[1]!==void 0&&(a.value=t[1]),e=new fi({props:a}),U.push(()=>He(e,"value",s,t[1])),{c(){Q(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,o){x(e,i,o),r=!0},p(i,o){const u={};o&2&&(u.valid=i[4](i[1],en)),!n&&o&2&&(n=!0,u.value=i[1],Ve(()=>n=!1)),e.$set(u)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){$(e,i)}}}function ui(t){let e,n;return e=new Io({props:{color:"danger",$$slots:{default:[$h]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){x(e,r,s),n=!0},p(r,s){const a={};s&16392&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function $h(t){let e,n=t[3].message+"",r;return{c(){e=N("p"),r=J(n)},l(s){e=P(s,"P",{});var a=V(e);r=Y(a,n),a.forEach(m)},m(s,a){I(s,e,a),q(e,r)},p(s,a){a&8&&n!==(n=s[3].message+"")&&ve(r,n)},d(s){s&&m(e)}}}function ed(t){let e;return{c(){e=J("Login")},l(n){e=Y(n,"Login")},m(n,r){I(n,e,r)},d(n){n&&m(e)}}}function td(t){let e;return{c(){e=J("Register")},l(n){e=Y(n,"Register")},m(n,r){I(n,e,r)},d(n){n&&m(e)}}}function nd(t){let e,n,r,s;return e=new nn({props:{type:"submit",$$slots:{default:[ed]},$$scope:{ctx:t}}}),e.$on("click",t[6]),r=new nn({props:{type:"submit",$$slots:{default:[td]},$$scope:{ctx:t}}}),r.$on("click",t[7]),{c(){Q(e.$$.fragment),n=G(),Q(r.$$.fragment)},l(a){Z(e.$$.fragment,a),n=K(a),Z(r.$$.fragment,a)},m(a,i){x(e,a,i),I(a,n,i),x(r,a,i),s=!0},p(a,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:a}),e.$set(o);const u={};i&16384&&(u.$$scope={dirty:i,ctx:a}),r.$set(u)},i(a){s||(k(e.$$.fragment,a),k(r.$$.fragment,a),s=!0)},o(a){T(e.$$.fragment,a),T(r.$$.fragment,a),s=!1},d(a){$(e,a),a&&m(n),$(r,a)}}}function id(t){let e;return{c(){e=J("Logout")},l(n){e=Y(n,"Logout")},m(n,r){I(n,e,r)},d(n){n&&m(e)}}}function rd(t){let e,n,r=t[2].email+"",s,a,i,o,u;return o=new nn({props:{type:"submit",$$slots:{default:[id]},$$scope:{ctx:t}}}),o.$on("click",t[8]),{c(){e=N("p"),n=J("User "),s=J(r),a=J(" is logged in"),i=G(),Q(o.$$.fragment)},l(c){e=P(c,"P",{});var h=V(e);n=Y(h,"User "),s=Y(h,r),a=Y(h," is logged in"),h.forEach(m),i=K(c),Z(o.$$.fragment,c)},m(c,h){I(c,e,h),q(e,n),q(e,s),q(e,a),I(c,i,h),x(o,c,h),u=!0},p(c,h){(!u||h&4)&&r!==(r=c[2].email+"")&&ve(s,r);const _={};h&16384&&(_.$$scope={dirty:h,ctx:c}),o.$set(_)},i(c){u||(k(o.$$.fragment,c),u=!0)},o(c){T(o.$$.fragment,c),u=!1},d(c){c&&m(e),c&&m(i),$(o,c)}}}function sd(t){let e,n,r,s;const a=[Qh,Xh],i=[];function o(u,c){return u[2]?0:1}return e=o(t),n=i[e]=a[e](t),{c(){n.c(),r=ee()},l(u){n.l(u),r=ee()},m(u,c){i[e].m(u,c),I(u,r,c),s=!0},p(u,c){let h=e;e=o(u),e===h?i[e].p(u,c):(te(),T(i[h],1,1,()=>{i[h]=null}),ne(),n=i[e],n?n.p(u,c):(n=i[e]=a[e](u),n.c()),k(n,1),n.m(r.parentNode,r))},i(u){s||(k(n),s=!0)},o(u){T(n),s=!1},d(u){i[e].d(u),u&&m(r)}}}function ad(t){let e,n,r,s,a,i,o;return i=new To({props:{$$slots:{default:[sd]},$$scope:{ctx:t}}}),{c(){e=N("h1"),n=J("Login | Register"),r=G(),s=N("hr"),a=G(),Q(i.$$.fragment)},l(u){e=P(u,"H1",{});var c=V(e);n=Y(c,"Login | Register"),c.forEach(m),r=K(u),s=P(u,"HR",{}),a=K(u),Z(i.$$.fragment,u)},m(u,c){I(u,e,c),q(e,n),I(u,r,c),I(u,s,c),I(u,a,c),x(i,u,c),o=!0},p(u,[c]){const h={};c&16399&&(h.$$scope={dirty:c,ctx:u}),i.$set(h)},i(u){o||(k(i.$$.fragment,u),o=!0)},o(u){T(i.$$.fragment,u),o=!1},d(u){u&&m(e),u&&m(r),u&&m(s),u&&m(a),$(i,u)}}}const It=6,en=6;function od(t,e,n){const s=Ei({apiKey:"AIzaSyBFYadWRvXVKpErBlNmNVQVBjj8MM6Rr2A",authDomain:"sveltekit-web3-login-f0618.firebaseapp.com",projectId:"sveltekit-web3-login-f0618",storageBucket:"sveltekit-web3-login-f0618.appspot.com",messagingSenderId:"157302726728",appId:"1:157302726728:web:89ad8af2f4dc6c4b58b87d"});let a="",i="",o,u=null;const c=(E,B)=>E!==void 0?E.length>=It:void 0,h=(E,B)=>{const W=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return c(E)!==void 0?W.test(E):void 0};function _(){if(n(3,u=null),!h(a))throw n(3,u={}),n(3,u.message="email is invalid",u),u;if(!c(i))throw n(3,u={}),n(3,u.message="password is invalid",u),u}const v=async()=>{const E=pt(s);try{_();const B=await Nc(E,a,i);n(2,o=B.user)}catch(B){n(3,u=B)}},g=async()=>{const E=pt(s);try{_();const B=await Cc(E,a,i);n(2,o=B.user)}catch(B){n(3,u=B)}},w=async()=>{const E=pt(s);try{await Mc(E),n(2,o=null),n(3,u=null),n(0,a=""),n(1,i="")}catch(B){n(3,u=B)}};po(()=>{const E=pt(s);Lc(E,B=>n(2,o=B))});function p(E){a=E,n(0,a)}function A(E){i=E,n(1,i)}return[a,i,o,u,c,h,v,g,w,p,A]}class cd extends Be{constructor(e){super(),Fe(this,e,od,ad,ze,{})}}export{cd as default};
