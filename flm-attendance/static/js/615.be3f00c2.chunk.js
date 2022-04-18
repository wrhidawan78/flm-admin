"use strict";(self.webpackChunkbmg_web_app=self.webpackChunkbmg_web_app||[]).push([[615],{7562:function(e,n,t){var i=t(1413),r=t(2791),o=t(6871),a=t(374),l=t(184);n.Z=function(e,n){return function(t){var s=(0,r.useContext)(a.V),c=(0,o.s0)(),u=s.userToken;return(0,r.useEffect)((function(){"undefined"!==typeof window&&(u?-1===(null===n||void 0===n?void 0:n.indexOf(s.userRole))&&c("/403",{replace:!0}):c("/auth",{replace:!0}))}),[u,s.userRole,c]),"undefined"!==typeof window?s.isLoading?(console.log("loading from with auth"),null):(0,l.jsx)(e,(0,i.Z)({},t)):null}}},7615:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(9439),r=t(2791),o=t(6871),a=t(8735),l=t(8164),s=t(6106),c=t(7309),u=t(7496),d=t(5696),f=t(7562),m=t(2567),p=t(3853),h=t(4971),v=t(6208),g=t(5095),x=t.n(g),Z=t(3695),y=t(4980),j=t(1333),w=t(2393),b=t(184),C=function(e){var n=e.visible,t=e.onCancel,o=e.setUpdateData,a=(0,r.useState)(""),l=(0,i.Z)(a,2),s=l[0],d=l[1],f=(0,r.useState)(""),h=(0,i.Z)(f,2),g=h[0],x=h[1],C=u.Z.useForm(),D=(0,i.Z)(C,1)[0],I=(0,r.useState)({url:"",data:{},trigger:0}),O=(0,i.Z)(I,2),k=O[0],S=O[1],N=(0,v.u5)(k.url,k.data,k.trigger),M=N.onSuccess,R=N.loading;return(0,r.useEffect)((function(){M.includes("success")&&(Z.ZP.success("Berhasil Create Division ".concat(s)),d(""),x(""),D.resetFields(),t(),o(Date.now()))}),[M]),(0,b.jsx)(y.Z,{title:"Create Division",visible:n,onCancel:t,footer:!1,children:(0,b.jsxs)(u.Z,{form:D,name:"createsite",autoComplete:"off",children:[(0,b.jsx)(m.yt,{label:"Division Id",requiredLabel:!0,name:"divisionId",required:!0,message:"please input division id!",placeholder:"input division id",onChange:function(e){return(0,w.IY)(e,d)}}),(0,b.jsx)(m.yt,{label:"Division Name",requiredLabel:!0,name:"divisionName",required:!0,message:"please input division name!",placeholder:"input division name",onChange:function(e){return(0,w.IY)(e,x)}}),(0,b.jsx)(j.Z,{}),(0,b.jsx)(m.Wy,{children:(0,b.jsx)(u.Z.Item,{children:(0,b.jsx)(c.Z,{type:"primary",shape:"round",icon:(0,b.jsx)(p.t$,{style:{marginRight:"6px"}}),onClick:function(){if(!s||!g)return Z.ZP.warn("Form tidak boleh kosong"),null;var e={name:g,division_id:s};console.log("data post: ",e),S({url:"employee/division/add",data:e,trigger:(new Date).getTime()})},loading:R,htmlType:"submit",children:"Create Division"})})})]})})},D=a.Z.Title,I=(0,f.Z)((function(){var e=(0,r.useState)(0),n=(0,i.Z)(e,2),t=n[0],a=n[1],f=(0,v.KQ)("employee/division/list",t),g=f.data,Z=f.loading,y=(0,r.useState)(""),j=(0,i.Z)(y,2),w=j[0],I=j[1],O=(0,r.useMemo)((function(){return 0===g.length?[]:g.filter((function(e){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(null===w||void 0===w?void 0:w.toLowerCase())}))}),[g,w]),k=(0,v.qY)(),S=k.isOpen,N=k.onOpen,M=k.onClose,R=(0,o.s0)(),L=(0,r.useRef)(x()((function(e){return I(e)}),1e3)).current;return(0,b.jsxs)("div",{children:[(0,b.jsxs)(l.Z,{style:{margin:"16px 0"},children:[(0,b.jsx)(l.Z.Item,{style:{cursor:"pointer"},onClick:function(){return R("/user-management")},children:"User Management"}),(0,b.jsx)(l.Z.Item,{children:"Division"})]}),(0,b.jsx)(C,{visible:S,onCancel:M,setUpdateData:a}),(0,b.jsx)("div",{children:(0,b.jsxs)(m.Zb,{children:[(0,b.jsx)(D,{level:3,type:"secondary",style:{marginRight:20,marginBottom:30},children:"Division"}),(0,b.jsxs)(s.Z,{gutter:[16,10],children:[(0,b.jsx)(m.lr,{children:(0,b.jsx)(c.Z,{shape:"round",icon:(0,b.jsx)(p.xVi,{style:{marginRight:6}}),onClick:N,children:"New Division"})}),(0,b.jsx)(m.r$,{children:(0,b.jsx)(u.Z,{name:"searchDivision",autoComplete:"off",children:(0,b.jsx)(m.yt,{name:"search",prefix:(0,b.jsx)(p.jRj,{color:h.wm}),allowClear:!0,placeholder:"serach division",value:w,onChange:function(e){return L(e.target.value)}})})})]}),(0,b.jsx)("div",{style:{marginTop:"20px"},children:(0,b.jsx)(d.Z,{columns:[{title:"#",dataIndex:"id",width:70},{title:"Division ID",dataIndex:"division_id"},{title:"Division Name",dataIndex:"name"}],dataSource:O,rowKey:function(e){return e.id},loading:Z,scroll:{y:500}})})]})})]})}))},2393:function(e,n,t){t.d(n,{QD:function(){return r},cX:function(){return o},IY:function(){return a},U6:function(){return l}});t(2426);var i=t(5095),r=function(e){return new Intl.NumberFormat("id-ID").format(e)},o=function(e){return new Date(e).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric"})},a=t.n(i)()((function(e,n){return n(e.target.value)}),500),l=function(e){return"number"===typeof e?e>=1e6?"".concat((e/1e6).toFixed(2)," MM"):e>=1e3?"".concat((e/1e3).toFixed(2)," KM"):"".concat(e," Meter"):e}},1333:function(e,n,t){var i=t(7462),r=t(4942),o=t(2791),a=t(1694),l=t.n(a),s=t(9077),c=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t};n.Z=function(e){return o.createElement(s.C,null,(function(n){var t,a=n.getPrefixCls,s=n.direction,u=e.prefixCls,d=e.type,f=void 0===d?"horizontal":d,m=e.orientation,p=void 0===m?"center":m,h=e.orientationMargin,v=e.className,g=e.children,x=e.dashed,Z=e.plain,y=c(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),j=a("divider",u),w=p.length>0?"-".concat(p):p,b=!!g,C="left"===p&&null!=h,D="right"===p&&null!=h,I=l()(j,"".concat(j,"-").concat(f),(t={},(0,r.Z)(t,"".concat(j,"-with-text"),b),(0,r.Z)(t,"".concat(j,"-with-text").concat(w),b),(0,r.Z)(t,"".concat(j,"-dashed"),!!x),(0,r.Z)(t,"".concat(j,"-plain"),!!Z),(0,r.Z)(t,"".concat(j,"-rtl"),"rtl"===s),(0,r.Z)(t,"".concat(j,"-no-default-orientation-margin-left"),C),(0,r.Z)(t,"".concat(j,"-no-default-orientation-margin-right"),D),t),v),O=(0,i.Z)((0,i.Z)({},C&&{marginLeft:h}),D&&{marginRight:h});return o.createElement("div",(0,i.Z)({className:I},y,{role:"separator"}),g&&o.createElement("span",{className:"".concat(j,"-inner-text"),style:O},g))}))}},6106:function(e,n,t){var i=t(7545);n.Z=i.Z}}]);
//# sourceMappingURL=615.be3f00c2.chunk.js.map