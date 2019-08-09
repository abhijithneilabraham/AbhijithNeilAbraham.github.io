/*! {© 2016 - 2019 Tinder, Inc., ALL RIGHTS RESERVED} */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return r}));var o=n(1),i=n(280),a=Object(o.a)(i.a),s=Object(o.a)(i.c),r=Object(o.a)(i.d)},1713:function(e,t,n){"use strict";n.r(t);var o=n(6),i=n.n(o),a=n(14),s=n.n(a),r=n(21),l=n.n(r),d=n(22),u=n.n(d),c=n(23),p=n.n(c),g=n(17),b=n.n(g),h=n(24),m=n.n(h),f=n(2),v=n.n(f),P=n(5),O=n.n(P),y=n(68),k=n(509),S=n(1211),w=n(337),_=n(25),I=n(26),N=n(238),M=n(140),j=n(90),C=n(1140),B=n(48),T=n.n(B),x=n(36),A=n(34),D=n(74),F=n.n(D),L=n(8),q=n.n(L),E=n(109),R=n(9),Q=n(35),U=n(157),z=n(86),J=n(105),W=n(1212),H=(function(e){function t(){var e,n;s()(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=u()(this,(e=p()(t)).call.apply(e,[this].concat(i))),v()(b()(n),"state",{hideModal:!1,isRequested:!1,isNotSure:!1,shouldShakeButton:!1}),v()(b()(n),"handlePermissionStatus",(function(e){"granted"===e.state&&n.goToNextPage()})),v()(b()(n),"goToNextPage",Object(E.h)(n._goToNextPage)),v()(b()(n),"handleAllow",(function(){n.props.isMobile||n.setState({hideModal:!0}),n.setState({isRequested:!0}),n.startPermissionPolling(),N.a.watch()})),v()(b()(n),"handleNotSure",(function(){n.setState({isNotSure:!0})})),v()(b()(n),"handleClickMask",(function(e){var t=q()(e,["target","classList"]);t&&t.contains("onboarding__page")&&n.setState({shouldShakeButton:!0})})),n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.goToNextPage.reset()}},{key:"componentDidUpdate",value:function(e){var t=this;!1!==e.locationDenied&&!1===this.props.locationDenied&&this.goToNextPage(),this.state.shouldShakeButton&&(this.buttonShakeTimer=setTimeout((function(){t.setState({shouldShakeButton:!1})}),2e3))}},{key:"componentWillUnmount",value:function(){this.permissionPolling&&(clearInterval(this.permissionPolling),this.permissionPolling=null),this.buttonShakeTimer&&(clearTimeout(this.buttonShakeTimer),this.buttonShakeTimer=null)}},{key:"startPermissionPolling",value:function(){var e=this;this.permissionPolling&&clearInterval(this.permissionPolling),"permissions"in navigator&&(this.permissionPolling=setInterval((function(){navigator.permissions.query({name:"geolocation"}).then(e.handlePermissionStatus)}),100))}},{key:"_goToNextPage",value:function(){this.permissionPolling&&clearInterval(this.permissionPolling),this.props.nextPage()}},{key:"getContentProps",value:function(){var e=this.props,t=e.isMobile,n=e.intl.formatMessage;return this.props.locationDenied?{"data-testid":"onboarding__error",primaryButtonId:"Onboarding.visitFaq",primaryButtonProps:{"data-testid":"onboarding__errorFaq",i13nModel:{message:"Visit FAQ"},target:"_blank",to:R.a.navMenuLinks.faq.locationAccess},titleId:"Onboarding.oops",titleProps:{"data-testid":"onboarding__errorTitle"},subtitleId:"Onboarding.locationFailSubtitle",subtitleProps:{"data-testid":"onboarding__errorSubtitle"}}:this.state.isNotSure?{"data-testid":"onboarding__notSure",primaryButtonId:"Onboarding.useTinder",primaryButtonProps:{"aria-label":n({id:"Onboarding.useTinder"}),"data-testid":"allow",disabled:this.state.isRequested,i13nModel:{message:"Use Tinder"},onClick:this.handleAllow,type:"button"},secondaryButtonId:"logout",secondaryButtonProps:{"aria-label":n({id:"logout"}),"data-testid":"logout",disabled:this.state.isRequested,i13nModel:{message:"Logout Facebook"},onClick:this.props.logout},titleId:"Onboarding.meetPeopleNearby",titleProps:{"data-testid":"onboarding__notSureTitle"},subtitleId:"Onboarding.locationNotSureSubtitle",subtitleProps:{"data-testid":"onboarding__notSureSubtitle"}}:{"data-testid":"onboarding",primaryButtonId:"allow",primaryButtonProps:{"aria-label":n({id:"allow"}),"data-testid":"allow",disabled:this.state.isRequested,i13nModel:{message:"Allow location"},onClick:this.handleAllow,type:"button"},secondaryButtonId:"learnMore",secondaryButtonProps:{"aria-label":n({id:"learnMore"}),"data-testid":"tell-more",disabled:this.state.isRequested,i13nModel:{message:"Tell more"},onClick:this.handleNotSure},titleId:t?"Onboarding.shareLocation":null,titleProps:{"data-testid":"onboarding__title"},subtitleId:t?"Onboarding.locationSubtitle":"Onboarding.desktopLocationSubtitle",subtitleProps:{"data-testid":"onboarding__subTitle"}}}},{key:"render",value:function(){var e=this.props,t=e.isMobile,n=e.locationDenied,o=e.browserFamily,a=this.state,s=a.hideModal,r=a.shouldShakeButton,l=Object(C.a)(o,t);return i()(J.d,{className:Object(A.a)("onboarding__page Expand C(#fff) onboarding__page--location",l.className),i13nModel:{label:"LocationScreen"},onClick:t?F.a:this.handleClickMask},void 0,O.a.createElement(W.d,T()({},this.getContentProps(),{className:Object(A.a)("onboarding__modal",{"D(n)":!t&&s&&!n}),iconType:"location",isMobile:t,shouldShakeButton:!t&&r&&!n})))}}]),t})(P.PureComponent);v()(H,"defaultProps",{browserFamily:null,isMobile:!1,locationDenied:null,pageIndex:0,pagesCount:0});var V={logout:Q.p},G=Object(y.c)((function(e){return{locationDenied:Object(U.d)(e),browserFamily:Object(z.b)(e),isMobile:Object(j.f)(e)}}),V)(Object(x.h)(H)),K=n(292),X="Notification"in window,Y=(function(e){function t(){var e,n;s()(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=u()(this,(e=p()(t)).call.apply(e,[this].concat(i))),v()(b()(n),"handleAllow",(function(){n.props.enableAllNotifications(),n.props.nextPage()})),v()(b()(n),"handleDecline",(function(){n.props.nextPage()})),n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){X||this.props.nextPage()}},{key:"getContentProps",value:function(){var e=this.props,t=e.isMobile,n=e.intl.formatMessage;return{"data-testid":"onboarding",primaryButtonId:"enable",primaryButtonProps:{"aria-label":n({id:"enable"}),"data-testid":"allow",i13nModel:{message:"Allow notification"},onClick:this.handleAllow,type:"button"},secondaryButtonId:"Onboarding.notInterested",secondaryButtonProps:{"aria-label":n({id:"Onboarding.notInterested"}),"data-testid":"decline",i13nModel:{message:"Deny notification"},onClick:this.handleDecline},titleId:t?"Onboarding.enableNotifications":null,subtitleId:t?"Onboarding.notificationsSubtitle":"Onboarding.desktopNotificationSubtitle"}}},{key:"render",value:function(){var e=this.props,t=e.browserFamily,n=e.isMobile,o=Object(C.a)(t,n);return i()(J.d,{className:Object(A.a)("onboarding__page Expand C(#fff)",o.className),i13nModel:{label:"NotificationsScreen"}},void 0,O.a.createElement(W.d,T()({},this.getContentProps(),{iconType:"match",isMobile:n})))}}]),t})(P.PureComponent);v()(Y,"defaultProps",{browserFamily:null,pageIndex:0,pagesCount:0});var Z={enableAllNotifications:K.enableAllNotifications},$=Object(y.c)((function(e){return{browserFamily:Object(z.b)(e),isMobile:Object(j.f)(e)}}),Z)(Object(x.h)(Y)),ee=n(81),te=n.n(ee);var ne=function(e){var t=e.target,n=void 0===t?".App__body":t,o=e.classNames,i=void 0===o?"Blur(10px)":o,a=e.children,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!(!a||!P.Children.count(a));!(function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];try{var o=e instanceof HTMLElement?e:document.querySelector(e);if(o){var i,a,s=t.split(" ");n?(i=o.classList).add.apply(i,te()(s)):(a=o.classList).remove.apply(a,te()(s))}}catch(e){}})(n,i,e)};return Object(P.useEffect)((function(){return s(!1),s(),function(){return s(!1)}}),[n,i]),a},oe=(function(e){function t(){var e,n;s()(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=u()(this,(e=p()(t)).call.apply(e,[this].concat(i))),v()(b()(n),"nextPage",(function(){n.props.nextPage()})),v()(b()(n),"renderPage",(function(){if(!n.props.loggedIn)return null;var e={nextPage:n.nextPage,pagesCount:Object.keys(k.pages).length,pageIndex:n.props.numOfPagesCompleted};switch(n.props.currentPage){case k.pages.LOCATION_SCREEN:return O.a.createElement(G,e);case k.pages.NOTIFICATIONS_SCREEN:return O.a.createElement($,e);default:return null}})),n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loggedIn&&(Object(C.c)(this.props.userId)?this.props.skipOnboarding():"permissions"in navigator&&navigator.permissions.query({name:"geolocation"}).then((function(t){"granted"!==t.state||"Notification"in window&&"default"===Notification.permission||e.props.skipOnboarding()})),this.watchLocation())}},{key:"componentWillReceiveProps",value:function(e){this.props.pagesQueue!==e.pagesQueue&&this.props.numOfPagesCompleted&&!e.pagesQueue.size&&this.props.isMobile&&!Object(C.c)(this.props.userId)&&(Object(C.b)(this.props.userId),this.props.skipOnboarding()),this.watchLocation()}},{key:"watchLocation",value:function(){!Object(C.c)(this.props.userId)&&this.props.pagesQueue.size||N.a.watch()}},{key:"render",value:function(){var e=this.renderPage();return e&&i()(P.Fragment,{},void 0,i()(M.b,{},void 0,i()("div",{className:"onboarding CenterAlign StretchedBox Bgc(#000.22)"},void 0,e)),i()(M.e,{},void 0,i()(ne,{target:".App__body",classNames:"Blur(10px)"},void 0,i()("div",{className:"onboarding CenterAlign StretchedBox Bgc(#000.8)"},void 0,e))))}}]),t})(P.PureComponent);var ie={nextPage:S.a,skipOnboarding:S.c};t.default=Object(y.c)((function(e){return{loggedIn:Object(I.l)(e),userId:Object(_.eb)(e),currentPage:Object(w.a)(e),pagesQueue:Object(w.f)(e),numOfPagesCompleted:Object(w.e)(e),isMobile:Object(j.f)(e)}}),ie)(oe)}}]);