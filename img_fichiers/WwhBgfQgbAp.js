if (self.CavalryLogger) { CavalryLogger.start_js(["wN2p7"]); }

__d("XPymkFunnelLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pymk/funnel_logging/",{event_ts:{type:"Int",required:!0},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:!0},ref:{type:"String"},action:{type:"Enum",required:!0,enumType:1}})}),null);
__d("PymkFunnelLogger",["AsyncRequest","DOMQuery","XPymkFunnelLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupListeners:function(a,b,c,d,e){this._setupForSingleElement(a,b,c,"add"),this._setupForSingleElement(a,b,d,"click"),this._setupForSingleElement(a,b,e,"click")},logImpression:function(a,b,c){this._logEvent(a,"impression",b,c)},logXOut:function(a,b,c){this._logEvent(a,"hide",b,c)},_logEvent:function(a,event,c,d){a=b("XPymkFunnelLoggingController").getURIBuilder().setInt("candidate_id",a).setInt("signature",c).setInt("event_ts",Math.floor(Date.now()/1e3)).setEnum("action",event).setString("loc",d).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForSingleElement:function(a,c,d,e){Event.listen(d,"click",function(event){var d=a.getAttribute("data-signature"),f=b("DOMQuery").find(a,"input.friendBrowserID");f=parseInt(f.value,10);this._logEvent(f,e,d,c)}.bind(this))}};e.exports=a}),null);
__d("XFriendRequestIHEventLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/requests/interaction_history_logging/",{target_id:{type:"FBID",required:!0},log_event:{type:"String",required:!0}})}),null);
__d("FriendRequestIHEventLogger",["AsyncRequest","Event","XFriendRequestIHEventLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupJewelListeners:function(a,b,c){this._setupForJewelSingleElement(a,b,"click"),c&&this._setupForJewelSingleElement(a,c,"click")},logImpression:function(a){this._logEvent(a,"impression")},_logEvent:function(a,event){if(isNaN(a))return;a=b("XFriendRequestIHEventLoggingController").getURIBuilder().setFBID("target_id",a).setString("log_event",event).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForJewelSingleElement:function(a,c,d){b("Event").listen(c,"click",function(event){var b=a.getAttribute("id");if(!b)return;b=b.substring(0,b.length-6);this._logEvent(b,d)}.bind(this))}};e.exports=a}),null);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";a={registerClickListener:function(a,b,c){a.addEventListener("click",c)}};e.exports=a}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,event,c){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",event).setStringToStringMap("qp_instance_log_data",c).getURI();new(b("XAsyncRequest"))(a).send()}function a(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function c(a,c,d,e,f,g){e=b("ge")(e);e!==null?i(a,d,e,g,function(){f&&b("CSS").hide(c)}):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,d)}function d(a,c,d,e,f){i(a,c,d,f,function(){if(e){var a=b("Parent").bySelector(d,"._5jmm");a instanceof HTMLElement&&b("CSS").hide(a)}})}function e(a,c,d){c.show();h(a,"view",{});c.subscribe("cancel",function(){h(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=b("ge")(f.element_id);g!==null?(i(a,f.action,g,f.extra_log_data,f.should_close?function(){c.hide()}:function(){}),f.action=="primary"&&g.focus()):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function i(a,c,d,e,f){b("QPEventHandling").registerClickListener(d,c,function(){var d=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",e).getURI();new(b("XAsyncRequest"))(d).send();f()})}f.setAction=c;f.setComponentActionForFeedUnitQP=d;f.setDialogActionsAndShow=e;f.logAction=a;f.logEvent=h}),null);
__d("JewelQPLogging",["QPRenderer"],(function(a,b,c,d,e,f){var g=!1,h=null,i=!1;function j(){if(i)return;g&&h&&(i=!0,b("QPRenderer").logEvent(String(h.promotion_id),"view",h.instance_log_data?h.instance_log_data:{}))}a={onJewelOpened:function(){g=!0,j()},updateQPLogData:function(a){h=a,j()}};e.exports=a}),null);
__d("RequestsJewelStore",["Arbiter","ArbiterMixin","ChannelConstants"],(function(a,b,c,d,e,f){__p&&__p();a=babelHelpers["extends"]({},b("ArbiterMixin"),{_initialized:!1,_count:0,_requestList:{},addFriendRequests:function(a){Object.assign(this._requestList,a)},getRequestListKeys:function(){return Object.keys(this._requestList)},removeRequest:function(a){delete this._requestList[a]},getRequestCount:function(a){return this.getRequestListKeys().length},decrementCount:function(){this.setCount(Math.max(0,this._count-1))},setCount:function(a){b("Arbiter").inform("jewel/count-updated",{jewel:"requests",count:a},"state")},setupListeners:function(){__p&&__p();if(this._initialized)return;this._initialized=!0;b("Arbiter").subscribe("jewel/count-updated",function(a,b){b.jewel==="requests"&&this._updateCount(b.count)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_add"),function(a,b){return this._addRequest(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_friending_notifs"),function(a,b){return this._addNotification(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("mobile_requests_count"),function(a,b){return this._updateBadgeCountFromObject(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_remove_old"),function(a,b){return this._removeOldRequest(b)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_expired"),function(a,b){return this._refreshJewel(!0)}.bind(this));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_seen"),function(a,b){return this.setCount(0)}.bind(this))},_updateCount:function(a){var b=this._count!==a;this._count=a;b&&this.inform("countUpdated",a)},_addRequest:function(a){__p&&__p();if(!a)return;a=a.obj;var b=a.from;a=a.suggester;b=this._requestList[b];b||this.setCount(this._count+1);b=b?b.type:null;a=b===19&&!a;this.inform("addRequest",{shouldReplace:a,previousType:b})},_updateBadgeCountFromObject:function(a){if(!a)return;a=a.obj;a=a.num_unseen+a.num_friend_confirmed_unseen+a.num_expire_highlight_unseen;this._refreshJewel();this.setCount(a)},_addNotification:function(a){if(!a||a.obj.notif_type!=="friend_confirmed")return;this.inform("addNotification")},_removeOldRequest:function(a){if(!a)return;a=this._requestList[a.obj.from];if(!a)return;this.inform("removeOldRequest",a)},_refreshJewel:function(a){a===void 0&&(a=!1),this.inform("refreshJewel",a)}});e.exports=a}),null);
__d("XExpireFriendRequestsMutationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/requests/expire/",{from_m_jewel:{type:"Bool",defaultValue:!1}})}),null);
__d("XGigaboxxUpdateSeenTimeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/gigaboxx/endpoint/writesafe/update_last_seen_time/",{})}),null);
__d("RequestsJewelController",["invariant","Promise","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","Event","EventProfiler","Focus","FriendRequestIHEventLogger","JewelQPLogging","MarauderLogger","Parent","PymkFunnelLogger","RequestsJewelStore","ScrollableArea","TimeSlice","XExpireFriendRequestsMutationController","XGigaboxxUpdateSeenTimeAsyncController","XUIBadge","ge","getElementPosition","getViewportDimensions","promiseDone","requireWeak","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null;b("requireWeak")("FriendBrowserCheckboxController",function(a){return h=a});var i=31,j=600,k=30,l=160;m.getInstance=function(){"use strict";return this.$12};m.updateFromDOM=function(){"use strict";var a=this.getInstance();a&&a.fromDom()};m.setupScroll=function(){"use strict";var a=this.getInstance();a&&a.setupScroll()};m.setInitialHeight=function(){"use strict";var a=this.getInstance();a&&a.updateHeight()};m.maybeLoadJewel=function(){"use strict";var a=this.getInstance();a&&a.maybeLoadJewel()};m.setTitleBadgeCount=function(a){"use strict";this.$11&&this.$11.setCount(a)};m.initTitleBadge=function(a,c){"use strict";this.$11||b("Arbiter").subscribe(["FriendRequest/delete","FriendRequest/confirm","FriendSuggestion/accepting","FriendSuggestion/ignoring"],function(a,b){return this.decrementTitleBadgeCount(b)}.bind(this)),this.$11=c};m.decrementTitleBadgeCount=function(a){"use strict";this.$11&&this.$11.setCount(this.$11.getCount()-1)};m.isOpen=function(){"use strict";var a=this.getInstance();return a?a.$2():!1};m.create=function(a,b){"use strict";this.$12&&g(0,undefined);return this.$12=new m(a,b)};m.setupJewelRefresh=function(){"use strict";b("Arbiter").subscribe(["FriendRequest/confirmFromProfile","FriendRequest/deleteFromProfile"],function(a,c){a={};a.reloadcontent=!0;new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(a).setAllowCrossPageTransition(!0).send()})};function m(a,c){"use strict";this.$2=c,this.$1=a,this.$4=-1,this.$5=-1,this.$10=b("Promise").resolve(!0),this.$8=b("throttle").acrossTransitionsWithBlocking(function(){return this.$13({log_impressions:!0})}.bind(this),5e3),b("RequestsJewelStore").subscribe("addRequest",this.$14.bind(this)),b("RequestsJewelStore").subscribe("addNotification",function(){return this.$15()}.bind(this)),b("RequestsJewelStore").subscribe("removeOldRequest",this.$16.bind(this)),b("RequestsJewelStore").subscribe("refreshJewel",this.$17.bind(this)),b("RequestsJewelStore").setupListeners(),this.setupScroll(),this.$18(),this.$19(),this.$20()}m.prototype.fromDom=function(){"use strict";__p&&__p();var a={};b("DOMQuery").scry(this.$1,"li.objectListItem").forEach(function(b){b=b.getAttribute("id");if(b){b=this.$21(b);b&&b.requester&&(a[b.requester]=b)}}.bind(this));b("RequestsJewelStore").addFriendRequests(a);this.$22()};m.prototype.maybeLoadJewel=function(){"use strict";this.$9&&(this.$9(function(){this.openHandler()}.bind(this)),this.$9=null)};m.prototype.updateHeight=function(){"use strict";var a=this.$23();a&&(a.style.height=this.$24()+"px")};m.prototype.markSeen=function(){"use strict";b("promiseDone")(this.$10,function(){new(b("AsyncRequest"))(b("XGigaboxxUpdateSeenTimeAsyncController").getURIBuilder().getURI()).setMethod("POST").send()})};m.prototype.openHandler=function(){"use strict";__p&&__p();!this.$6&&this.$2()&&(this.$6=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstRequestsJewelOpen"));b("Arbiter").inform("requestsJewel/opened");var a=b("ge")("fbRequestsJewelLoading"),c=this.$23();new(b("AsyncRequest"))().setURI(b("XExpireFriendRequestsMutationController").getURIBuilder().getURI()).send();if(!a&&!c)this.$9=b("TimeSlice").getGuardedContinuation("RequestsJewelController clickBeforeE2E continuation");else if(a)this.$8();else{a=b("RequestsJewelStore").getRequestListKeys();a.length>0&&new(b("AsyncRequest"))().setAllowCrossPageTransition(!0).setURI("/friends/requests/log_impressions").setData({ids:a.join(","),ref:"jewel"}).send()}b("DOMQuery").scry(this.$1,"a.findFriendsLink").forEach(function(a){b("Focus").set(a)});c&&b("ScrollableArea").poke(c);b("JewelQPLogging").onJewelOpened()};m.prototype.closeHandler=function(){"use strict";b("Arbiter").inform("requestsJewel/closed"),b("DOMQuery").scry(this.$1,"li.jewelItemNew").forEach(function(a){b("CSS").removeClass(a,"jewelItemNew")}),b("DOMQuery").scry(this.$1,"span.highlightedExpireText").forEach(function(a){b("CSS").removeClass(a,"highlightedExpireText")})};m.prototype.setupScroll=function(){"use strict";var a=this.$23();a&&(this.$7=this.$25(),this.$3=0,b("ScrollableArea").getInstance(a).subscribe("scroll",this.$26.bind(this)),this.$27(),this.$28())};m.prototype.$18=function(){"use strict";b("Event").listen(this.$1,"submit",function(a){a=b("Parent").byClass(a.getTarget(),"objectListItem");a&&(b("CSS").removeClass(a,"jewelItemNew"),b("CSS").addClass(a,"jewelItemResponded"))})};m.prototype.$19=function(){"use strict";b("Event").listen(window,"resize",b("throttle").acrossTransitions(function(){this.updateHeight()}.bind(this)))};m.prototype.$20=function(){"use strict";b("Arbiter").subscribe("pymk-x-out",function(a,b){a=b.location;(a==="pymk_jewel_first_page"||a==="pymk_jewel")&&this.$27()}.bind(this))};m.prototype.$29=function(a){"use strict";a=parseInt(a,10);return isNaN(a)?null:a};m.prototype.$21=function(a){"use strict";a=a.match(/^(\d+)_(\d+)/);return!a?null:{requester:this.$29(a[1]),type:this.$29(a[2])}};m.prototype.$30=function(a,b){"use strict";return a==null||b==null?null:a+"_"+b};m.prototype.$31=function(a,b){"use strict";return a==null||b==null?null:a+"_"+b+"_req"};m.prototype.$23=function(){"use strict";return b("DOMQuery").scry(this.$1,".uiScrollableArea")[0]};m.prototype.$25=function(){"use strict";return b("DOMQuery").scry(this.$1,".uiScrollableAreaWrap")[0]};m.prototype.$26=function(){"use strict";__p&&__p();var a=b("DOMQuery").scry(this.$7,".uiMorePager").pop();if(a){var c=b("getElementPosition")(a).y,d=this.$23();c>0&&d&&b("CSS").addClass(d,"contentAfter");c=b("DOMQuery").find(a,"a");if(!c)return;d=b("getElementPosition")(c).y;if(d===this.$3)return;a=b("getElementPosition")(this.$7);a=a.y+a.height;if(d-300<a&&d>0){this.$3=d;a=c.getAttribute("ajaxify");a?new(b("AsyncRequest"))(a).setRelativeTo(c).setStatusElement(b("Parent").byClass(c,"stat_elem")).send():h&&h.getInstance("jewel").showMore()}}this.$27();this.$28()};m.prototype.$27=function(){"use strict";__p&&__p();if(!this.$7)return;var a=b("getElementPosition")(this.$7);a=a.y+a.height;var c=b("DOMQuery").scry(this.$1,"li.friendBrowserListUnit"),d=c.length-1;while(d>this.$4){var e=b("getElementPosition")(c[d]),f=e.y;e=f+e.height;if(f>0&&e<=a)break;d-=1}f=d;while(d>this.$4){e=b("DOMQuery").find(c[d],"input.friendBrowserID");a=parseInt(e.value,10);e=parseInt(c[d].getAttribute("data-signature"),10);b("PymkFunnelLogger").logImpression(a,e,"pymk_jewel");d--}this.$4=Math.max(this.$4,f)};m.prototype.$28=function(){"use strict";__p&&__p();if(!this.$7)return;var a=b("getElementPosition")(this.$7);a=a.y+a.height;var c=b("DOMQuery").scry(this.$1,"li.objectListItem"),d=c.length-1;while(d>this.$5){var e=b("getElementPosition")(c[d]),f=e.y;e=f+e.height;if(f>0&&e<=a)break;d-=1}f=d;while(d>this.$5){e=c[d].getAttribute("id");e=e.substring(0,e.length-6);b("MarauderLogger").log("request_seen","friend_request_waterfall",{request_id:e,request_location:"requests_jewel"});b("FriendRequestIHEventLogger").logImpression(e);d-=1}this.$5=Math.max(this.$5,f)};m.prototype.$13=function(a){a===void 0&&(a={}),this.$10=new(b("Promise"))(function(c,d){var e=!b("ge")("fbRequestsJewelLoading");new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(babelHelpers["extends"]({},a,{reloadcontent:e})).setFinallyHandler(function(a){!a.getError()?c(!0):d()}).send()})};m.prototype.$15=function(){"use strict";if(this.$2())return;this.$13()};m.prototype.$14=function(a,b){a=b.shouldReplace;b=b.previousType;if(!a&&(b||this.$2()))return;this.$13()};m.prototype.$16=function(a,c){a=c.requester;c=c.type;if(this.$2()||b("ge")("fbRequestsJewelLoading")!=null)return;var d=this.$30(a,c),e=d&&b("ge")(d);e||(d=this.$31(a,c),e=b("ge")(d));e&&(b("CSS").hasClass(e,"jewelItemNew")&&b("RequestsJewelStore").decrementCount(),b("CSS").hasClass(e,"jewelItemResponded")||(b("DOM").remove(e),b("RequestsJewelStore").removeRequest(a),this.$22()))};m.prototype.$17=function(a,b){"use strict";if(b!==!0&&this.$2())return;this.$13()};m.prototype.$22=function(){"use strict";b("DOMQuery").scry(this.$1,"li.empty").forEach(function(a){b("CSS").conditionShow(a,b("RequestsJewelStore").getRequestCount()<=0)})};m.prototype.$24=function(){"use strict";return Math.min(Math.max(b("getViewportDimensions")().height-l,k),j)+i};m.$12=null;e.exports=m}),null);
__d("DeviceBasedLoginWWWQP",["CSS","Event","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={swapWithShadowMessageOnClick:function(a,c,d){b("tidyEvent")(b("Event").listen(a,"click",function(a){b("CSS").hide(c),b("CSS").show(d)}))}};e.exports=a}),null);