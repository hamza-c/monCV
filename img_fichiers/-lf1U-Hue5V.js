if (self.CavalryLogger) { CavalryLogger.start_js(["udRA\/"]); }

__d("FBTilesAttributionLogo.react",["cx","React","TilesMapConfig","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){switch(a.mapProvider){case"HERE":return b("React").createElement("div",{className:b("joinClasses")(a.className,"_3d_k"),style:{backgroundImage:"url("+b("TilesMapConfig").LOGO.url+")",height:b("TilesMapConfig").LOGO.height+"px",width:b("TilesMapConfig").LOGO.width+"px"}});case"OSM":return b("React").createElement("div",{className:b("joinClasses")(a.className,"_wuu")},"\xa9 OpenStreetMap");case"MAPBOX":return b("React").createElement("div",{className:b("joinClasses")(a.className,"_6o-0")},b("React").createElement("span",{className:"_6o-1","aria-label":"Mapbox logo"}));default:return null}};e.exports=a}),null);
__d("FBTilesReportDialogItems.react",["React","XUIRadioList.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("XUIRadioList.react").Item;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={selectedType:"other"},this.$1=function(a){this.setState({selectedType:a}),this.props.onSelected(a)}.bind(this),b}a.prototype.render=function(){var a=[];Object.keys(this.props.types).forEach(function(c){a.push(b("React").createElement(h,{value:c,key:c},this.props.types[c].label))}.bind(this));return b("React").createElement(b("XUIRadioList.react"),{selectedValue:this.state.selectedType,onValueChange:this.$1},a)};e.exports=a}),null);
__d("MapsReporterTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCategory=function(a){this.$1.category=a;return this};a.prototype.setMapURI=function(a){this.$1.map_uri=a;return this};a.prototype.setNelat=function(a){this.$1.nelat=a;return this};a.prototype.setNelon=function(a){this.$1.nelon=a;return this};a.prototype.setPassesGkMapsTileserviceOsmDefault=function(a){this.$1.passes_gk_maps_tileservice_osm_default=a;return this};a.prototype.setPassesGkOxygenMapNewStyle=function(a){this.$1.passes_gk_oxygen_map_new_style=a;return this};a.prototype.setStage=function(a){this.$1.stage=a;return this};a.prototype.setSwlat=function(a){this.$1.swlat=a;return this};a.prototype.setSwlon=function(a){this.$1.swlon=a;return this};a.prototype.setUserComment=function(a){this.$1.user_comment=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setZoom=function(a){this.$1.zoom=a;return this};c={category:!0,map_uri:!0,nelat:!0,nelon:!0,passes_gk_maps_tileservice_osm_default:!0,passes_gk_oxygen_map_new_style:!0,stage:!0,swlat:!0,swlon:!0,user_comment:!0,vc:!0,zoom:!0};e.exports=a}),null);
__d("FBTilesInfoButton.react",["ix","cx","fbt","AdsTextInput.react","ContextualDialogArrow","FBTilesReportDialogItems.react","Image.react","Link.react","MapsReporterTypedLogger","PopoverMenu.react","React","ReactXUIMenu","XUIButton.react","XUIDialogCloseButton.react","gkx","joinClasses","leaflet","SimpleXUIDialog","XUIDialogButton.react","XUIDialogCancelButton.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.REPORT_TYPES={lineLabel:{label:i._("Nom de route"),title:i._("Signaler un probl\u00e8me avec le nom d\u2019une route"),hint:i._("Quel nom de route est incorrect\u00a0? (facultatif)")},line:{label:i._("Forme de route"),title:i._("Signaler un probl\u00e8me avec la forme de la route"),hint:i._("Quelle route est mal form\u00e9e\u00a0? (facultatif)")},lineMissing:{label:i._("Route manquante"),title:i._("Signaler une route manquante"),hint:i._("Quelle route manque\u00a0? (facultatif)")},polygon:{label:i._("Nom ou forme d\u2019un b\u00e2timent, d\u2019un parc ou d\u2019une \u00e9tendue d\u2019eau"),title:i._("Signaler un probl\u00e8me avec le nom ou la forme d\u2019un b\u00e2timent, d\u2019un parc ou d\u2019une \u00e9tendue d\u2019eau"),hint:i._("Quel b\u00e2timent, parc ou \u00e9tendue d\u2019eau est incorrect\u00a0? (facultatif)")},border:{label:i._("Fronti\u00e8re d\u2019un pays, d\u2019un \u00c9tat ou d\u2019une ville"),title:i._("Signaler un probl\u00e8me avec une fronti\u00e8re"),hint:i._("Quelle fronti\u00e8re est mal dessin\u00e9e\u00a0? (facultatif)")},administrative:{label:i._("Nom de pays, d\u2019\u00c9tat ou de ville"),title:i._("Signaler un probl\u00e8me avec nom de pays, d\u2019\u00c9tat ou de ville"),hint:i._("Quel nom est incorrect\u00a0? (facultatif)")},other:{label:i._("Autre"),title:i._("Signaler un probl\u00e8me avec la carte"),hint:i._("Qu\u2019est-ce qui ne va pas avec la carte\u00a0? (facultatif)")}},this.state={selectedReportType:null,reportedProblem:null,mapInfo:{mapSources:[],hereReportUrl:"",mapUrl:null,mapBounds:null,zoom:null}},this.$1=function(){this.setState({mapInfo:this.props.mapInfoCallback()});var a=this.state.mapInfo.mapSources;if(a.length==1&&a.includes("here")){this.$2();return}b("SimpleXUIDialog").showEx(b("React").createElement(b("FBTilesReportDialogItems.react"),{types:this.REPORT_TYPES,onSelected:function(a){return this.setState({selectedReportType:a})}.bind(this)}),i._("Signaler un probl\u00e8me avec une carte"),b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",use:"confirm",label:i._("Continuer"),onClick:this.$3})))}.bind(this),this.$3=function(){if(!this.state.selectedReportType)return;var a=this.REPORT_TYPES[this.state.selectedReportType];b("SimpleXUIDialog").showEx(b("React").createElement(b("AdsTextInput.react"),{multiline:!0,placeholder:a.hint,value:this.state.reportedProblem,onChange:function(a){return this.setState({reportedProblem:a})}.bind(this)}),a.title,b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",use:"confirm",label:i._("Envoyer"),onClick:this.$4})))}.bind(this),this.$4=function(){var a=new(b("MapsReporterTypedLogger"))().setStage("submit_comment").setCategory(this.state.selectedReportType).setUserComment(this.state.reportedProblem).setMapURI(this.state.mapInfo.mapUrl||""),c=this.state.mapInfo.mapBounds,d=this.state.mapInfo.zoom;c!=null&&d!=null&&a.setNelon(c.getEast()).setNelat(c.getNorth()).setSwlon(c.getWest()).setSwlat(c.getSouth()).setZoom(""+d).setPassesGkMapsTileserviceOsmDefault(b("gkx")("AT5P2IiZ_kUS2zz6yz5_0Vo840bmVovtzePF7AidLFFCoNUAIrBIhm_j40ME1aCiz_nGR9x4TDLSv85H3Kgpbk_7")).setPassesGkOxygenMapNewStyle(b("gkx")("AT7YkP-0zz4Uc25Pcq0-HNWM-mZPPNzr01gzRPAxAf-DOGzxDzZxMG7PYp8mMP5e4IzXnpyt99E_61A9DSFEe-so"));a.log();b("SimpleXUIDialog").showEx(i._("Vos commentaires nous aident \u00e0 am\u00e9liorer les cartes Facebook pour tous."),i._("Merci"),b("React").createElement(b("XUIDialogCloseButton.react"),{use:"confirm"}))}.bind(this),c}a.prototype.render=function(){var a=b("React").createElement(b("ReactXUIMenu"),null,b("React").createElement(k,{key:"title",icon:b("React").createElement(b("Image.react"),{src:g("367566")}),onClick:function(){return window.open("/maps/attribution_terms","_blank")}},i._("Mentions l\u00e9gales du mappage de donn\u00e9es")),b("React").createElement(k,{key:"report",icon:b("React").createElement(b("Image.react"),{src:g("408431")}),onClick:this.$1},i._("Signaler un probl\u00e8me")));return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",position:"above",menu:a,layerBehaviors:[b("ContextualDialogArrow")]},b("React").createElement(b("Link.react"),{ref:"termsButton","aria-haspopup":"menu",className:b("joinClasses")(this.props.className,"_4cou")},b("React").createElement("div",{className:"_4cod"},b("React").createElement(b("Image.react"),{src:g("360713"),"aria-label":i._("Informations")}))))};a.prototype.$2=function(){var a=b("SimpleXUIDialog").showEx(i._("Cette carte contient des donn\u00e9es provenant de tiers. Vous allez \u00eatre redirig\u00e9(e) vers ces derniers pour donner votre avis."),i._("Signaler un probl\u00e8me avec la carte"),b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIButton.react"),{className:"_4jy1",target:"_blank",use:"default",label:i._("Ouvert"),href:this.state.mapInfo.hereReportUrl,onClick:function(){return a.hide()}})))};e.exports=a}),null);
__d("FBTilesStaticInfoButton.react",["FBTilesInfoButton.react","React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("FBTilesInfoButton.react"),{className:this.props.className,mapInfoCallback:function(){return this.props.mapInfo}.bind(this)})};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("FBTilesMapZoomOverlay__DEPRECATED.react",["cx","fbt","ix","Image.react","React","XUIButton.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;var k=b("React").createElement(b("Image.react"),{src:i("22148")}),l=b("React").createElement(b("Image.react"),{src:i("22147")});j=babelHelpers.inherits(a,b("React").PureComponent);j&&j.prototype;a.prototype.render=function(){var a=this.props,c=a.onZoomIn,d=a.onZoomOut;a=babelHelpers.objectWithoutProperties(a,["onZoomIn","onZoomOut"]);return b("React").createElement("div",a,b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{disabled:c==null,image:k,label:h._("Zoom avant"),labelIsHidden:!0,onClick:c,type:"button"})),b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{className:"_3d8x",disabled:d==null,image:l,label:h._("Zoom arri\u00e8re"),labelIsHidden:!0,onClick:d,type:"button"})),this.props.onRecenter?b("React").createElement("div",{style:{marginTop:8}},b("React").createElement(b("XUIButton.react"),{className:"_6bti",image:b("React").createElement(b("Image.react"),{src:i("22149")}),label:h._("Recentrer"),labelIsHidden:!0,onClick:this.props.onRecenter,type:"button"})):null)};function a(){j.apply(this,arguments)}a.propTypes={onZoomIn:c.func,onZoomOut:c.func};e.exports=a}),null);
__d("FBTilesMap.react",["cx","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","FBTilesAttributionLogo.react","FBTilesInfoButton.react","FBTilesMapZoomOverlay__DEPRECATED.react","LeafletMap.react","LeafletTileLayer.react","LeafletUtils","LeafletView","React","TilesMapConfig","TilesMapTheme","TilesMapUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i={maxZoom:b("TilesMapConfig").ZOOM_RANGE.MAX,minZoom:b("TilesMapConfig").ZOOM_RANGE.MIN};function j(a,c){return c!=null&&c.type===b("FBOverlayElement.react")?a?c:undefined:a?undefined:c}var k=function(a){return b("React").Children.map(a,j.bind(undefined,!1))},l=function(a){return b("React").Children.map(a,j.bind(undefined,!0))};function m(a){return{overlays:l(a),others:k(a)}}d=c.shape({horizontal:c.oneOf(["left","right","fit"]),vertical:c.oneOf(["top","bottom","fit"])});f=babelHelpers.inherits(a,b("React").Component);h=f&&f.prototype;function a(){__p&&__p();var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.$1=null,this.state={size:null,attributions:[]},this.$8=function(a){this.setState({size:a}),this.props.onSizeSettled!=null&&this.props.onSizeSettled(a)}.bind(this),this.$9=function(){var a=this.props,b=a.view;a=a.onViewChange;if(b==null||a==null)return;a(b.setZoom(b.zoom+1))}.bind(this),this.$10=function(){var a=this.props,b=a.view;a=a.onViewChange;if(b==null||a==null)return;a(b.setZoom(b.zoom-1))}.bind(this),b}a.prototype.render=function(){var a=this.props,c=a.children,d=a.className,e=a.style,f=a.defaultView;a=babelHelpers.objectWithoutProperties(a,["children","className","style","defaultView"]);c=m(c);var g=c.others;c=c.overlays;if(f)throw new Error("<FBTilesMap /> cannot be used with `defaultView` prop. Please provide `view` prop and treat as a controlled component.");return b("React").createElement(b("FBOverlayContainer.react"),{className:d,style:e},b("React").createElement(b("FBOverlayBase.react"),null,this.$2(g,a)),c,this.$3(),this.$4(),this.$5())};a.prototype.componentDidMount=function(){this.$6()};a.prototype.componentDidUpdate=function(){this.$6()};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.abort()};a.prototype.$6=function(){if(this.state.size===null||this.state.size===undefined||this.props.view===undefined)return;this.$1=b("TilesMapUtils").getMapProviderForAttributionByViewPort(this.$7(),this.props.view==null?null:this.props.view.zoom,function(a){this.$1=null,a.sort(),JSON.stringify(this.state.attributions)!==JSON.stringify(a)&&this.setState({attributions:a})}.bind(this))};a.prototype.$3=function(){return this.state.size==null?null:this.state.attributions.every(function(a){return a!=="here"})?null:b("React").createElement(b("FBOverlayElement.react"),this.props.attributionLogoPosition,b("React").createElement(b("FBTilesAttributionLogo.react"),{mapProvider:"HERE"}))};a.prototype.$4=function(){if(!this.props.showReportButton||this.state.size==null)return null;var a=function(){return{hereReportUrl:b("TilesMapUtils").getHereReporterToolUrl(this.props.view),mapSources:this.state.attributions,mapUrl:null,mapBounds:this.$7(),zoom:this.props.view==null?null:this.props.view.zoom}}.bind(this);return b("React").createElement(b("FBOverlayElement.react"),this.props.reportButtonPosition,b("React").createElement(b("FBTilesInfoButton.react"),{className:"_1mfw",mapInfoCallback:a}))};a.prototype.$2=function(a,c){var d=babelHelpers["extends"]({},c.options,{zoomControl:!1});return b("React").createElement(b("LeafletMap.react"),babelHelpers["extends"]({},c,{className:"_5db7",onSizeSettled:this.$8,options:d}),b("React").createElement(b("LeafletTileLayer.react"),{options:Object.assign({},this.props.tileOptions,i),urlTemplate:b("TilesMapUtils").getTileURLTemplate(null,this.props.theme)}),a)};a.prototype.$5=function(){__p&&__p();var a=this.props,c=a.view,d=a.options,e=d.minZoom;d=d.maxZoom;var f=a.initialView,g=a.onViewChange,h=a.showZoomControls;a=a.setZoomPosition;if(c==null||g==null||!h)return null;h=b("TilesMapConfig").ZOOM_RANGE;var i=h.MAX;h=h.MIN;d=d!==undefined?Math.min(d,i):i;i=e!==undefined?Math.max(e,h):h;e=c.zoom<d?this.$9:undefined;h=c.zoom>i?this.$10:undefined;d=f&&g?function(){return g(f)}:null;return b("React").createElement(b("FBOverlayElement.react"),a,b("React").createElement(b("FBTilesMapZoomOverlay__DEPRECATED.react"),{className:"_3-8j _1yx0",onZoomIn:e,onZoomOut:h,onRecenter:d}))};a.prototype.$7=function(){return this.state.size==null||this.props.view===undefined?null:b("LeafletUtils").getViewBounds(this.props.view,{width:this.state.size.x,height:this.state.size.y})};a.propTypes={className:c.string,showZoomControls:c.bool,setZoomPosition:d,showReportButton:c.bool,style:c.object,theme:c.string,view:c.instanceOf(b("LeafletView")),tileOptions:c.object,reportButtonPosition:d,attributionLogoPosition:d};a.defaultProps={showReportButton:!0,theme:b("TilesMapTheme").DEFAULT,setZoomPosition:{vertical:"top",horizontal:"left"},reportButtonPosition:{vertical:"bottom",horizontal:"right"},attributionLogoPosition:{vertical:"bottom",horizontal:"left"},options:{},onViewChange:null,initialView:null};e.exports=a}),null);
__d("SUIHorizontalLayoutUniform.fds",[],(function(a,b,c,d,e,f){"use strict";a={margin:8};e.exports=a}),null);
__d("FDSHorizontalLayout.react",["React","SUIHorizontalLayout.react","SUIHorizontalLayoutUniform.fds","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("makeSUIFDSPrivateTheme")("FDSHorizontalLayout",{SUIHorizontalLayout:b("SUIHorizontalLayoutUniform.fds")});g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("SUIHorizontalLayout.react"),{"data-testid":this.props["data-testid"],display:this.props.display,margin:this.props.margin,preserveThemeFromContext:!0,theme:h,wrapChildren:this.props.wrapChildren},this.props.children)};function a(){g.apply(this,arguments)}a.defaultProps={display:"inline",wrapChildren:!0};e.exports=b("makeFDSStandardComponent")("FDSHorizontalLayout",a)}),null);
__d("LeafletPopup.react",["GeoCoordinates","LeafletUtils","React","ReactDOM","areEqual","leaflet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.mutate=function(a,c,d){if(!b("areEqual")(c.options,d.options))return!1;c.coordinates!==d.coordinates&&a.setLatLng(b("LeafletUtils").toLatLng(c.coordinates));d=a.getContent();c=b("React").Children.only(c.children);b("ReactDOM").render(c,d,function(){return a.update()});return!0};a.toLayer=function(a,c){var d=b("leaflet").popup(a.options,c);a.coordinates&&d.setLatLng(b("LeafletUtils").toLatLng(a.coordinates));c=b("React").Children.only(a.children);a=document.createElement("div");d.setContent(a);b("ReactDOM").render(c,a,function(){return d.update()});return d};a.prototype.render=function(){return null};function a(){g.apply(this,arguments)}a.propTypes={options:c.object,coordinates:c.instanceOf(b("GeoCoordinates"))};e.exports=a}),null);