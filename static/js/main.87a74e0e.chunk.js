(this["webpackJsonpstart-recording"]=this["webpackJsonpstart-recording"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(16),s=n.n(r),i=n(29),j=(n(32),n(19)),d=n.n(j),l=n(24),o=n(15),h=n(83),b=n(84),O=n(2);function x(e){return Object(O.jsxs)(h.a,{children:[Object(O.jsx)(b.a,{align:"center",className:"Col",children:e.state}),Object(O.jsx)(b.a,{align:"center",children:e.statecode}),Object(O.jsx)(b.a,{align:"center",children:e.activeCase}),Object(O.jsx)(b.a,{align:"center",children:e.confirmedCase}),Object(O.jsx)(b.a,{align:"center",children:e.Deaths}),Object(O.jsx)(b.a,{align:"center",children:e.recovered})]})}var u=n(89),p=n(88),f=n(90),m=n(91),v=n(61),g=n(85),C=function(e){return Object(O.jsx)("div",{className:"navbar",children:Object(O.jsx)(g.a,{variant:"h5",component:"h2",children:e.Heading})})},S=n(87),w=n(86),N=n(93);function y(){return Object(O.jsxs)(w.a,{className:"search",children:[Object(O.jsx)("input",{type:"search",placeholder:"Search State"}),Object(O.jsx)(S.a,{children:Object(O.jsx)(N.a,{size:"small",children:"Search"})})]})}n(33);var k=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x,{activeCase:e.active,confirmedCase:e.confirmed,Deaths:e.deaths,recovered:e.recovered,state:e.state,statecode:e.statecode})})},E=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19india.org/data.json",e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(n),e()}),[n]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C,{Heading:" All India Statewise Covid-19 Update"}),Object(O.jsx)(y,{}),n?Object(O.jsx)("div",{className:"tabal",children:Object(O.jsx)(p.a,{component:v.a,children:Object(O.jsxs)(u.a,{"aria-label":"simple table",children:[Object(O.jsx)(f.a,{children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(b.a,{align:"center",children:"State"}),Object(O.jsx)(b.a,{align:"center",children:"State Code"}),Object(O.jsx)(b.a,{align:"center",children:"Active Case"}),Object(O.jsx)(b.a,{align:"center",children:"Confirmed Case"}),Object(O.jsx)(b.a,{align:"center",children:"Deaths"}),Object(O.jsx)(b.a,{align:"center",children:"Recovered"})]})}),n.map(k)]})})}):Object(O.jsx)("p",{children:" no data found "})]})},F=n(92),A=n(34),D=n.n(A),H=function(){var e=Object(c.useState)("delhi"),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),i=s[0],j=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var t,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=143eff6fa2ce3bfa844cdbee4d4789d4"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,j(a.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C,{Heading:"Search Temprature API"}),Object(O.jsxs)(F.a,{className:"WetherCard",children:[Object(O.jsx)(w.a,{children:Object(O.jsx)(g.a,{variant:"h5",component:"h2",children:Object(O.jsxs)("div",{className:"input2",children:[Object(O.jsx)("p",{children:"Enter any Location"}),Object(O.jsx)("input",{type:"text",id:"state",value:n,onChange:function(e){a(e.target.value)}})," "]})})}),Object(O.jsx)(w.a,{children:i?Object(O.jsxs)("div",{className:"content",children:[Object(O.jsxs)(g.a,{variant:"h3",component:"h2",children:[Object(O.jsx)(D.a,{fontSize:"large"}),n]}),Object(O.jsxs)(g.a,{variant:"h5",component:"h2",children:["Temp    ",i.temp,"  \xb0Cel"]}),Object(O.jsx)(g.a,{variant:"h6",children:Object(O.jsxs)("p",{children:["  Min ",i.temp_min,"\xb0Cel || Max ",i.temp_max,"\xb0Cel"]})})]}):Object(O.jsx)("p",{children:"data not found"})})]})]})},I=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{}),Object(O.jsx)(E,{})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(I,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.87a74e0e.chunk.js.map