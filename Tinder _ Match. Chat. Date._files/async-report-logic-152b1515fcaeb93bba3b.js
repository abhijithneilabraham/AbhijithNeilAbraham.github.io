/*! {© 2016 - 2019 Tinder, Inc., ALL RIGHTS RESERVED} */
(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1584:function(e,t,r){"use strict";r.r(t),r.d(t,"acknowledgeReportSaga",(function(){return f})),r.d(t,"reportUserSaga",(function(){return m}));var n=r(7),c=r.n(n),a=r(0),s=r(20),o=r(11),u=r(3),b=r(27),i=r(99),d=r(16),p=r(1190),O=r(1120),h=regeneratorRuntime.mark(k),j=regeneratorRuntime.mark(x);function k(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.d)(Object(d.q)(d.l,"acknowledgeReport"));case 2:return e=t.sent,t.next=5,Object(a.h)(Object(p.b)(e));case 5:return t.next=7,Object(a.h)(Object(i.e)());case 7:case"end":return t.stop()}}),h)}function x(e){var t,r,n,s,i,h,k,x,f,m,w,R;return regeneratorRuntime.wrap((function(j){for(;;)switch(j.prev=j.next){case 0:if(t=e.reasonCustom,r=e.source,n=e.feedbackType,s=e.otherId,i=e.matchId,h=e.selectedCause,k=e.isBoostMatch,x=e.isFastMatch,f=e.isSuperLike,m=0,f&&(m=1),k&&(m=2),x&&(m=3),w={attribution:m,reasonCustom:t,reasonOption:O.REPORT_CAUSES_EVENT_MAP[h],source:r,feedbackType:n,otherId:s,matchId:i},j.prev=6,i){j.next=13;break}return j.next=10,Object(a.d)(Object(d.q)(d.l,"reportWithUserId"),{userId:s,reportText:t,cause:h});case 10:R=j.sent,j.next=16;break;case 13:return j.next=15,Object(a.d)(Object(d.q)(d.l,"reportWithMatchId"),{matchId:i,reportText:t,cause:h});case 15:R=j.sent;case 16:return j.next=18,Object(a.h)(Object(p.d)(R));case 18:return j.next=20,Object(a.h)(Object(b.a)(u.U,c()({},w,{feedbackAction:"submit"})));case 20:j.next=27;break;case 22:return j.prev=22,j.t0=j.catch(6),j.next=26,Object(a.h)(Object(b.a)(u.U,c()({},w,{feedbackAction:"error"})));case 26:Object(o.v)(O.REPORT_USER_FAILURE,j.t0);case 27:case"end":return j.stop()}}),j,null,[[6,22]])}var f=Object(s.d)(k,{name:"acknowledgeReportSaga"}),m=Object(s.d)(x,{name:"reportUserSaga"})}}]);