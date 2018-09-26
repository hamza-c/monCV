if (self.CavalryLogger) { CavalryLogger.start_js(["7M1ON"]); }

__d("UFICommentingAsConstituentHeader.react",["cx","fbt","AsyncRequest","BootloadedComponent.react","Layout.react","Image.react","JSResource","React","UFIConfig","XFeedNUXSaveSeenStateController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("Layout.react").Column,k=b("Layout.react").FillColumn;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={hasSeenCommentingAsConstituentNUX:!1,commentingAsConstituentNUXVisible:!0},this.$2=function(){this.setState({commentingAsConstituentNUXVisible:!1,hasSeenCommentingAsConstituentNUX:!0});var a=b("XFeedNUXSaveSeenStateController").getURIBuilder().setString("key","commenting_as_constituent").setBool("seen",!0).getURI();new(b("AsyncRequest"))(a).send()}.bind(this),c}a.prototype.render=function(){if(!this.props.uri)return null;var a=null;b("UFIConfig").shouldShowCommentingAsConstituentNUX&&(this.state.hasSeenCommentingAsConstituentNUX||(a=this.$1(),b("UFIConfig").shouldShowCommentingAsConstituentNUX=!1));return b("React").createElement("div",{className:"_2ys2 uiContextualLayerParent"},b("React").createElement(b("Layout.react"),null,b("React").createElement(k,null,b("React").createElement(b("Image.react"),{src:"/images/civic_engagement/constituent_badges/constituent-badge_12_2x.png",className:"_2ys1"}),h._("Vous commentez en tant qu\u2019\u00e9lecteur")),b("React").createElement(j,null,b("React").createElement("a",{className:"_2ys3",href:this.props.uri,ref:"constituent_header_manage_button"},h._("G\u00e9rer")))),a)};a.prototype.$1=function(){return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("XUIAmbientNUX.react").__setRef("UFICommentingAsConstituentHeader.react"),bootloadPlaceholder:b("React").createElement("div",null),contextRef:function(){return this.refs.constituent_header_manage_button}.bind(this),shown:this.state.commentingAsConstituentNUXVisible,position:"above",alignment:"right",width:"custom",customwidth:280,onCloseButtonClick:this.$2},b("React").createElement("div",{className:"_3w4h"},h._("Votre badge d\u2019\u00e9lecteur est activ\u00e9")),b("React").createElement("div",{className:"_2e59"},h._("Vous pouvez activer ou d\u00e9sactiver votre badge \u00e0 tout moment dans les param\u00e8tres de l\u2019Espace citoyen.")))};e.exports=a}),null);
__d("XOfferController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/offer/detail/{offer_id}/",{offer_id:{type:"FBID",required:!0},referrer:{type:"String"},__xts__:{type:"StringVector"},__tn__:{type:"String"}})}),null);