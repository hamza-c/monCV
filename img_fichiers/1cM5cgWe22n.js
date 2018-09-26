if (self.CavalryLogger) { CavalryLogger.start_js(["kxsMz"]); }

__d("GroupedInputButtonImpl.react",["cx","fbt","AddCommentFlyoutSizeType","Bootloader","FantaComposerGroupedInputUtil","Link.react","React","UFIGroupedInputTabs","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("FantaComposerGroupedInputUtil").getLastUsedChatInputTab,k=b("UFIGroupedInputTabs").InputTitleEnum,l=b("UFIGroupedInputTabs").getLastUsedTab;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={modules:null,isEmojiVariationsShown:!1},this.$2=!1,this.$3=function(){return this.props.tooltip?this.props.tooltip:h._("Publiez des sickers, des emojis et des GIF")}.bind(this),this.$8=function(){this.$9(),this.props.toggleFlyout(!1)}.bind(this),this.$5=function(a){a.preventDefault(),this.state.modules===null&&(this.props.isMessenger?this.$10():this.$11()),this.$2||(this.$12(),this.props.toggleFlyout(!this.props.flyoutShown),this.props.onLinkClick())}.bind(this),this.$6=function(){this.$2=this.props.flyoutShown}.bind(this),this.$4=function(a){this.$1=a}.bind(this),b}a.prototype.render=function(){return b("React").createElement(b("Link.react"),{"aria-label":this.$3(),"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.$3(),linkRef:this.$4,onClick:this.$5,onMouseDown:this.$6,className:"_r1a UFICommentEmojiButton"},this.renderTarget(),this.renderDialog())};a.prototype.renderTarget=function(){return this.props.targetElement&&typeof this.props.targetElement==="function"?this.props.targetElement(this.props.flyoutShown):b("React").createElement("div",{className:"UFICommentEmojiIcon"+(this.props.flyoutShown?" UFICommentEmojiIconActive":"")})};a.prototype.$7=function(){var a=this.props,b=a.defaultPage;a=a.isMessenger;b||(b=a?j():l());return b};a.prototype.renderDialog=function(){__p&&__p();if(!this.props.flyoutShown||!this.state.modules)return null;var a=this.state.modules,c=a.GifSearchFlyout,d=a.ContextualLayerAutoFlip,e=a.EmojiPickerContainer,f=a.LayerTabIsolation,g=a.MercuryShareAttachmentRenderLocations,i=a.MessengerPlatformInterfaceType,j=a.StickerInterfaces,l=a.StickersFlyout,m=a.UFIGroupedInputTabPages;a=a.XUIContextualDialog;var n=this.$7();e=[{key:k.EMOJI,title:h._("Emoji"),content:b("React").createElement(e,{onSelect:this.props.onEmojiSelect,onVariationsShown:function(a){this.setState({isEmojiVariationsShown:a})}.bind(this)})}];this.props.allowStickerAttachments&&e.push({key:k.STICKER,title:h._("Stickers"),content:b("React").createElement(l,{allowCustomStickers:this.props.allowCustomStickers,customStickerOwnerID:this.props.customStickerOwnerID,onEscKeyDown:function(){return this.props.toggleFlyout(!1)}.bind(this),onEmoticonSelect:this.props.onEmoticonSelect,onStickerSelect:this.props.onStickerSelect,stickerInterface:j.COMMENTS,shown:this.props.flyoutShown,size:b("AddCommentFlyoutSizeType").LARGE})});this.props.allowGifAttachments&&!this.props.allowCustomStickers&&e.push({key:k.GIF,title:h._("GIF"),content:b("React").createElement(c,{location:g.COMPOSER,onEscKeyDown:function(){return this.props.toggleFlyout(!1)}.bind(this),onSelect:this.props.onGifSelect,shown:this.props.flyoutShown,searchInterface:i.FB_INTERFACE,size:b("AddCommentFlyoutSizeType").LARGE})});return b("React").createElement(a,{label:h._("Bo\u00eete de dialogue pour choisir des stickers, des emojis et des GIF"),behaviors:{flip:d,LayerTabIsolation:f},contextRef:function(){return this.$1}.bind(this),shown:this.props.flyoutShown,position:"below",onToggle:function(a){a||this.setState({isEmojiVariationsShown:!1}),this.props.toggleFlyout(a)}.bind(this),hideOnEscape:!this.state.isEmojiVariationsShown,hasActionableContext:!0,onBlur:this.$8},b("React").createElement(m,{defaultPage:this.props.allowCustomStickers?"STICKER":n,pages:e}))};a.prototype.$12=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerStart(c.COMPOSER_INTERACTION,0,a)},"GroupedInputButtonImpl.react")};a.prototype.$9=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"GroupedInputButtonImpl.react")};a.prototype.$10=function(){b("Bootloader").loadModules(["ChatContentSearchFlyout.react","ContextualLayerAutoFlip","ChatEmojiFlyout.react","LayerTabIsolation","MercuryShareAttachmentRenderLocations","MessengerPlatformInterfaceType","StickerInterfaces","StickersFlyout.react","UFIGroupedInputTabPages.react","XUIContextualDialog.react"],function(a,b,c,d,e,f,g,h,i,j){this.setState({modules:{GifSearchFlyout:a,ContextualLayerAutoFlip:b,EmojiPickerContainer:c,LayerTabIsolation:d,MercuryShareAttachmentRenderLocations:e,MessengerPlatformInterfaceType:f,StickerInterfaces:g,StickersFlyout:h,UFIGroupedInputTabPages:i,XUIContextualDialog:j}})}.bind(this),"GroupedInputButtonImpl.react")};a.prototype.$11=function(){b("Bootloader").loadModules(["ChatContentSearchFlyout.react","ContextualLayerAutoFlip","EmojiPickerContainer.react","LayerTabIsolation","MercuryShareAttachmentRenderLocations","MessengerPlatformInterfaceType","StickerInterfaces","StickersFlyout.react","UFIGroupedInputTabPages.react","XUIContextualDialog.react"],function(a,b,c,d,e,f,g,h,i,j){this.setState({modules:{GifSearchFlyout:a,ContextualLayerAutoFlip:b,EmojiPickerContainer:c,LayerTabIsolation:d,MercuryShareAttachmentRenderLocations:e,MessengerPlatformInterfaceType:f,StickerInterfaces:g,StickersFlyout:h,UFIGroupedInputTabPages:i,XUIContextualDialog:j}})}.bind(this),"GroupedInputButtonImpl.react")};a.defaultProps={allowStickerAttachments:!0,allowGifAttachments:!0};e.exports=a}),null);