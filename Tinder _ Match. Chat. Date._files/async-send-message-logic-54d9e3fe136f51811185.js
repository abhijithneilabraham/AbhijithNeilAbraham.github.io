/*! {© 2016 - 2019 Tinder, Inc., ALL RIGHTS RESERVED} */
(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1622:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),i=n(0),c=n(16),s=n(27),o=n(1),u=n(20),d=n(156),g=n(9),f=n(54),l=n(1132),p=n(102),w=new p.e({},{processResult:{fixedHeight:["images","fixedHeight"],fixedHeightSmall:["images","fixedHeightSmall"],original:["images","original"],id:["id"],analytics:["analytics"]}}),b=new p.a(w),m=new p.f({data:b},{dataKey:"",processResult:function(e){return e.data}});n.d(t,"_gifSaga",(function(){return x})),n.d(t,"gifSaga",(function(){return y})),n.d(t,"_sendVinylTooltipViewedSaga",(function(){return v})),n.d(t,"sendVinylTooltipViewedSaga",(function(){return R}));var j=regeneratorRuntime.mark(x),O=regeneratorRuntime.mark(v),h="vinyl_tooltip";function x(e){var t,n,r,u,f,p,w;return regeneratorRuntime.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return t=e.payload,n=t.query,r=t.sessionId,u=a()({},g.a.gifs,{query:n}),f=Date.now(),b.next=5,Object(i.d)(Object(c.q)(c.d,"search"),u);case 5:return p=b.sent,b.next=8,Object(o.g)(p,m);case 8:return w=b.sent,b.next=11,Object(i.h)(Object(s.a)(d.c,{type:"gif",action:"search",query:n,durationInMillis:Date.now()-f,sessionId:r}));case 11:return b.next=13,Object(i.h)(Object(l.b)(w.result));case 13:case"end":return b.stop()}}),j)}var y=Object(u.d)(x,{name:"gifSaga",errorHandler:regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.h)(Object(l.a)());case 2:case"end":return e.stop()}}),e)}))});function v(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[h],t.next=3,Object(i.d)(Object(c.q)(c.i,"sendTutorialViewed"),e);case 3:return t.next=5,Object(i.h)(Object(f.q)(h));case 5:case"end":return t.stop()}}),O)}var R=Object(u.d)(v,{name:"sendVinylTooltipViewedSaga"})}}]);