if (self.CavalryLogger) { CavalryLogger.start_js(["tvE6w"]); }

__d("LiveMapEntryPointsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({APPS:"bookmarks",FAVORITES:"favorites",ENDSCREEN:"endscreen",TRENDING:"trending",BLUEBAR:"bluebar",NUX:"nux",FACEBAR_TYPEAHEAD:"br_tf",SHAREABLE:"shareable",VIDEO_HOME:"video_home",LIVE_DISCOVERY:"live_discovery"})}),null);
__d("LiveMapEntryPointsEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",CLICKED:"clicked",EMPTY_UNIT:"empty_unit",VIEWER_COUNT:"viewer_count"})}),null);
__d("LiveMapEntryPointsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:LiveMapEntryPointsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:LiveMapEntryPointsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LiveMapEntryPointsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEntryPoint=function(a){this.$1.entry_point=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setViewerCount=function(a){this.$1.viewer_count=a;return this};c={entry_point:!0,event:!0,vc:!0,viewer_count:!0};e.exports=a}),null);
__d("LiveMapEntryPointsLoggerController",["LiveMapEntryPointsEnum","LiveMapEntryPointsEvent","LiveMapEntryPointsTypedLogger"],(function(a,b,c,d,e,f){"use strict";a={logEndscreenImpression:function(){new(b("LiveMapEntryPointsTypedLogger"))().setEvent(b("LiveMapEntryPointsEvent").IMPRESSION).setEntryPoint(b("LiveMapEntryPointsEnum").ENDSCREEN).log()}};e.exports=a}),null);
__d("ConnectionsPYMLTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setLikeSource=function(a){this.$1.like_source=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={event:!0,like_source:!0,page_id:!0};e.exports=a}),null);
__d("EgoActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMP:1,CLICK:2,CONVERSION:4,SUPPRESS:8,NEXT:16,ERROR:32,XOUT:24,NONE:0})}),null);
__d("EgoPageServiceConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAN:"fan",UNFAN:"unfan",PAGE_VIEW:"page_view",FRIEND_VIEW:"friend_view",SEE_ALL:"see_all",ADD_INTEREST:"add_interest",CONTEXT_ITEM:"tap_context_item",BOOST_POST:"tap_boost_post",WATCH_AS_PAGE:"watch_as_page",UNWATCH_AS_PAGE:"unwatch_as_page",SHOP_VIEW:"shop_view",MESSAGE:"message",FOLLOW:"follow",UNFOLLOW:"unfollow",SUBSCRIBE:"subscribe"})}),null);
__d("XPubcontentInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/suggestions/interaction_logging/",{})}),null);
__d("PageFanning",["ActorURI","Animation","AsyncRequest","ConnectionsPYMLTypedLogger","CSS","DOM","EgoActionType","EgoPageServiceConstants","Parent","URI","XPubcontentInteractionLoggingController","$","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={setFanStatus:function(a,c,d,e,f,i,j){__p&&__p();var k={ft:{}};a&&(k={ft:b("collectDataAttributes")(a,["ft"]).ft});var l=new(b("URI"))(window.location.href).getQueryData();d&&(l.ref==="pyml_feed"?new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("profile").setPageID(parseInt(c,10)).log():l.ref==="pyml_permalink"&&new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("post_permalink").setPageID(parseInt(c,10)).log());f=f||function(b){b=b.getPayload();if(!b||!a)return;b.reload?g.reloadOnFanStatusChanged():h(a,b)};l={fbpage_id:c,add:d,reload:e};j!=null&&Object.assign(l,j);Object.assign(l,k);c="/ajax/pages/fan_status.php";j!=null&&j.actor_id!=null&&(c=b("ActorURI").create(c,j.actor_id));e=new(b("AsyncRequest"))().setURI(c).setData(l).setNectarModuleDataSafe(a).setHandler(f);i&&e.setErrorHandler(i);e.send();if(j.fan_origin==="PSYM"&&d&&j.egodata!==null){k={q:j.egodata,action:b("EgoPageServiceConstants").FAN,action_type:b("EgoActionType").CONVERSION};new(b("AsyncRequest"))().setMethod("POST").setURI(b("XPubcontentInteractionLoggingController").getURIBuilder().getURI()).setData(k).send()}return!1},reloadOnFanStatusChanged:function(){var a=b("URI").getRequestURI();window.location.href=a},toggleLikeOnFanStatusChanged:function(a,c){var d=b("$")("liked_pages_like_action_"+a);a=b("$")("liked_pages_undo_action_"+a);b("CSS").conditionClass(d,"hidden_elem",c);b("CSS").conditionClass(a,"hidden_elem",!c)}};function h(a,c){var d=c.feedback;if(!d)return;b("Parent").byClass(a,"fbTimelineEscapeSectionItem")&&(a=b("Parent").byClass(a,"fan_status_inactive")||a);var e=b("DOM").create("span",{className:"fan_status_inactive"},d);a.parentNode.replaceChild(e,a);d=function(){c.can_repeat_action&&e.parentNode.replaceChild(a,e)};new(b("Animation"))(e).duration(3e3).checkpoint().to("backgroundColor","#FFFFFF").duration(1e3).ondone(d).go()}e.exports=g}),null);
__d("CoverVideoStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NO_COVER_VIDEO:"no_cover_video",UPLOADING:"uploading",ENCODING:"encoding",PREVIEWING:"previewing",CHOOSING_THUMBNAIL:"choosing_thumbnail",PUBLISHING:"publishing",PUBLISHED:"published",ERROR:"error"})}),null);
__d("FeedbackReactionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,LIKE:1,LOVE:2,WOW:3,HAHA:4,YAY:5,OUCH:6,SORRY:7,ANGER:8,JACKO:9,CONFUSED:10,DOROTHY:11,TOTO:12,SELFIE:13,FLAME:14,PLANE:15})}),null);