(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24,79],{"3uu7":function(e,t,n){"use strict";var a={},c=function(e,t){a[e]||(a[e]=[]),a[e].push(t)},l=function(e,t){if(a[e]){var n=a[e];n.forEach((function(e){e(t)}))}},u=function(e,t){if(a[e])if(t){var n=a[e].indexOf(t);a[e].splice(n,1)}else a[e].length=0};t["a"]={$on:c,$emit:l,$off:u}},AJHZ:function(e,t,n){"use strict";n.r(t);var a=n("fWQN"),c=n("mtLc"),l=n("yKVA"),u=n("879j"),o=n("q1tI"),i=n.n(o),r=n("3uu7"),s=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(e){var c;return Object(a["a"])(this,n),c=t.call(this,e),c.state={msg:""},c}return Object(c["a"])(n,[{key:"componentDidMount",value:function(){this.bindEvent()}},{key:"bindEvent",value:function(){r["a"].$on("handler",this.getMsgHandler.bind(this))}},{key:"getMsgHandler",value:function(e){console.log(e,"\ud83e\udd37\u200d\u2640\ufe0f"),this.setState({msg:e},(function(){})),console.log(this.state.msg)}},{key:"componentWillUnmount",value:function(){r["a"].$off("handler")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"\u7ec4\u4ef6\u4e8c"),i.a.createElement("p",{style:{background:this.props.bg}},"\u63a5\u6536\u5144\u5f1f\u4f20\u6765\u7684\uff0c\u5144\u5f1f\u7ec4\u4ef6\u6539\u53d8\u7684\u80cc\u666f\u8272",this.props.bg),i.a.createElement("h2",null,"\u6ca1\u6709\u4efb\u4f55\u5d4c\u5957\u5173\u7cfb\u7684\u7ec4\u4ef6\u4e4b\u95f4\u4f20\u503c \uff1a",i.a.createElement("b",null,this.state.msg)))}}]),n}(i.a.Component);t["default"]=s},OnWC:function(e,t,n){"use strict";n.r(t);var a=n("fWQN"),c=n("mtLc"),l=n("yKVA"),u=n("879j"),o=n("q1tI"),i=n.n(o),r=n("3uu7"),s=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(e){return Object(a["a"])(this,n),t.call(this,e)}return Object(c["a"])(n,[{key:"bgClick",value:function(e){this.props.al(),this.props.changeColor("green");var t=(new Date).getTime();r["a"].$emit("handler",t)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"\u7ec4\u4ef6\u4e00"),i.a.createElement("p",{style:{background:this.props.bg}},"\u7236\u7ec4\u4ef6\u4f20\u6765\u7684\u80cc\u666f\u8272",this.props.bg),i.a.createElement("button",{onClick:function(){e.bgClick()}},"\u7ec4\u4ef6\u4e00\u6539\u53d8\u80cc\u666f\u8272"))}}]),n}(i.a.Component),f=s,b=n("AJHZ"),h=n("9kvl"),g=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(e){var c;return Object(a["a"])(this,n),c=t.call(this,e),c.state={bg:"#999"},c}return Object(c["a"])(n,[{key:"bgChange",value:function(e){this.setState({bg:e})}},{key:"al",value:function(){console.log("2222222222")}},{key:"btn",value:function(){h["c"].push({pathname:"/Component/Comp15"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.btn()}},"\u8df3\u8f6c"),i.a.createElement("button",null,"\u6d4b\u8bd5\u4ece\u7236\u7ec4\u4ef6\u53d1\u5e03\u8ba2\u9605")),i.a.createElement(f,{bg:this.state.bg,changeColor:function(t){e.bgChange(t)},al:function(){return e.al()}}),i.a.createElement(b["default"],{bg:this.state.bg}))}}]),n}(i.a.Component);t["default"]=g}}]);