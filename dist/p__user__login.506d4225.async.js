(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{CyIy:function(e,a,t){e.exports={main:"main___2rucS",icon:"icon___5TklJ",other:"other___3tFpJ",register:"register___1VMmz"}},DdhY:function(e,a,t){e.exports={login:"login___LFxDs",getCaptcha:"getCaptcha___9F10t",icon:"icon___2VK3K",other:"other___2F7Be",register:"register___31gTm",prefixIcon:"prefixIcon___dN9_f",submit:"submit___Q43EO"}},NGMh:function(e,a,t){"use strict";t.r(a);t("sRBo");var n=t("kaz8"),r=t("k1fw"),c=t("tJVT"),o=(t("fOrg"),t("+KLJ")),s=t("Y0UT"),l=t("80zm"),i=t("CZrw"),u=t("q1tI"),m=t.n(u),p=t("uYtH"),b=t("9kvl"),d=(t("y8nQ"),t("Vl3Y")),g=(t("Znn+"),t("ZTPi")),f=t("oBTY"),h=t("yUgw"),E=t("TSYQ"),v=t.n(E),O=Object(u["createContext"])({}),j=O,C=(t("14J3"),t("BMrR")),_=(t("+L6B"),t("2/Rp")),y=(t("jCWc"),t("kPKH")),w=(t("5NDa"),t("5rEg")),N=t("0Owb"),T=t("WmNS"),x=t.n(T),P=(t("miYZ"),t("tsqr")),S=t("9og8"),k=t("PpiC"),I=t("BGR+"),U=t("anxO"),q=t("cJ7L"),B=t("MGYb"),z=t("FQ2w"),J=t("cGnJ"),V=t("DdhY"),Y=t.n(V),D={UserName:{props:{size:"large",id:"userName",prefix:m.a.createElement(q["a"],{style:{color:"#1890ff"},className:Y.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:m.a.createElement(B["a"],{className:Y.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:m.a.createElement(z["a"],{className:Y.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:m.a.createElement(J["a"],{className:Y.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},F=d["a"].Item,L=function(e){var a=e.onChange,t=e.defaultValue,n=e.customProps,r=void 0===n?{}:n,c=e.rules,o={rules:c||r.rules};return a&&(o.onChange=a),t&&(o.initialValue=t),o},M=function(e){var a=Object(u["useState"])(e.countDown||0),t=Object(c["a"])(a,2),n=t[0],r=t[1],o=Object(u["useState"])(!1),s=Object(c["a"])(o,2),l=s[0],i=s[1],p=(e.onChange,e.customProps),b=(e.defaultValue,e.rules,e.name),d=(e.getCaptchaButtonText,e.getCaptchaSecondText,e.updateActive,e.type),g=(e.tabUtil,Object(k["a"])(e,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","tabUtil"])),f=Object(u["useCallback"])(function(){var e=Object(S["a"])(x.a.mark((function e(a){var t;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(U["b"])(a);case 2:if(t=e.sent,!1!==t){e.next=5;break}return e.abrupt("return");case 5:P["b"].success("\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f\uff01\u9a8c\u8bc1\u7801\u4e3a\uff1a1234"),i(!0);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);if(Object(u["useEffect"])((function(){var a=0,t=e.countDown;return l&&(a=window.setInterval((function(){r((function(e){return e<=1?(i(!1),clearInterval(a),t||60):e-1}))}),1e3)),function(){return clearInterval(a)}}),[l]),!b)return null;var h=L(e),E=g||{};if("Captcha"===d){var v=Object(I["a"])(E,["onGetCaptcha","countDown"]);return m.a.createElement(F,{shouldUpdate:!0,noStyle:!0},(function(e){var a=e.getFieldValue;return m.a.createElement(C["a"],{gutter:8},m.a.createElement(y["a"],{span:16},m.a.createElement(F,Object(N["a"])({name:b},h),m.a.createElement(w["a"],Object(N["a"])({},p,v)))),m.a.createElement(y["a"],{span:8},m.a.createElement(_["a"],{disabled:l,className:Y.a.getCaptcha,size:"large",onClick:function(){var e=a("mobile");f(e)}},l?"".concat(n," \u79d2"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))}))}return m.a.createElement(F,Object(N["a"])({name:b},h),m.a.createElement(w["a"],Object(N["a"])({},p,E)))},K={};Object.keys(D).forEach((function(e){var a=D[e];K[e]=function(t){return m.a.createElement(j.Consumer,null,(function(n){return m.a.createElement(M,Object(N["a"])({customProps:a.props,rules:a.rules},t,{type:e},n,{updateActive:n.updateActive}))}))}}));var A=K,G=d["a"].Item,Q=function(e){var a=e.className,t=Object(k["a"])(e,["className"]),n=v()(Y.a.submit,a);return m.a.createElement(G,null,m.a.createElement(_["a"],Object(N["a"])({size:"large",className:n,type:"primary",htmlType:"submit"},t)))},R=Q,Z=g["a"].TabPane,W=function(){var e=0;return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(a).concat(e)}}(),H=function(e){Object(u["useEffect"])((function(){var a=W("login-tab-"),t=e.tabUtil;t&&t.addTab(a)}),[]);var a=e.children;return m.a.createElement(Z,e,e.active&&a)},$=function(e){return m.a.createElement(j.Consumer,null,(function(a){return m.a.createElement(H,Object(N["a"])({tabUtil:a.tabUtil},e))}))};$.typeName="LoginTab";var X=$,ee=function(e){var a=e.className,t=Object(u["useState"])([]),n=Object(c["a"])(t,2),r=n[0],o=n[1],s=Object(u["useState"])({}),l=Object(c["a"])(s,2),i=l[0],p=l[1],b=Object(h["a"])("",{value:e.activeKey,onChange:e.onTabChange}),E=Object(c["a"])(b,2),O=E[0],C=E[1],_=[],y=[];return m.a.Children.forEach(e.children,(function(e){e&&("LoginTab"===e.type.typeName?_.push(e):y.push(e))})),m.a.createElement(j.Provider,{value:{tabUtil:{addTab:function(e){o([].concat(Object(f["a"])(r),[e]))},removeTab:function(e){o(r.filter((function(a){return a!==e})))}},updateActive:function(e){i&&(i[O]?i[O].push(e):i[O]=[e],p(i))}}},m.a.createElement("div",{className:v()(a,Y.a.login)},m.a.createElement(d["a"],{form:e.from,onFinish:function(a){e.onSubmit&&e.onSubmit(a)}},r.length?m.a.createElement(m.a.Fragment,null,m.a.createElement(g["a"],{destroyInactiveTabPane:!0,animated:!1,className:Y.a.tabs,activeKey:O,onChange:function(e){C(e)}},_),y):e.children)))};ee.Tab=X,ee.Submit=R,ee.UserName=A.UserName,ee.Password=A.Password,ee.Mobile=A.Mobile,ee.Captcha=A.Captcha;var ae=ee,te=t("CyIy"),ne=t.n(te),re=ae.Tab,ce=ae.UserName,oe=ae.Password,se=ae.Mobile,le=ae.Captcha,ie=ae.Submit,ue=function(e){var a=e.content;return m.a.createElement(o["a"],{style:{marginBottom:24},message:a,type:"error",showIcon:!0})},me=function(e){var a=e.userLogin,t=void 0===a?{}:a,o=e.submitting,b=t.status,d=t.type,g=Object(u["useState"])(!0),f=Object(c["a"])(g,2),h=f[0],E=f[1],v=Object(u["useState"])("account"),O=Object(c["a"])(v,2),j=O[0],C=O[1],_=function(a){var t=e.dispatch;t({type:"login/login",payload:Object(r["a"])(Object(r["a"])({},a),{},{type:j})})};return m.a.createElement("div",{className:ne.a.main},m.a.createElement(ae,{activeKey:j,onTabChange:C,onSubmit:_},m.a.createElement(re,{key:"account",tab:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55"},"error"===b&&"account"===d&&!o&&m.a.createElement(ue,{content:"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef\uff08admin/ant.design\uff09"}),m.a.createElement(ce,{name:"userName",placeholder:"\u7528\u6237\u540d: admin or user",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]}),m.a.createElement(oe,{name:"password",placeholder:"\u5bc6\u7801: ant.design",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}]})),m.a.createElement(re,{key:"mobile",tab:"\u624b\u673a\u53f7\u767b\u5f55"},"error"===b&&"mobile"===d&&!o&&m.a.createElement(ue,{content:"\u9a8c\u8bc1\u7801\u9519\u8bef"}),m.a.createElement(se,{name:"mobile",placeholder:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]}),m.a.createElement(le,{name:"captcha",placeholder:"\u9a8c\u8bc1\u7801",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})),m.a.createElement("div",null,m.a.createElement(n["a"],{checked:h,onChange:function(e){return E(e.target.checked)}},"\u81ea\u52a8\u767b\u5f55"),m.a.createElement("a",{style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),m.a.createElement(ie,{loading:o},"\u767b\u5f55"),m.a.createElement("div",{className:ne.a.other},"\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f",m.a.createElement(s["a"],{className:ne.a.icon}),m.a.createElement(l["a"],{className:ne.a.icon}),m.a.createElement(i["a"],{className:ne.a.icon}),m.a.createElement(p["a"],{className:ne.a.register,to:"/user/register"},"\u6ce8\u518c\u8d26\u6237"))))};a["default"]=Object(b["b"])((function(e){var a=e.login,t=e.loading;return{userLogin:a,submitting:t.effects["login/login"]}}))(me)}}]);