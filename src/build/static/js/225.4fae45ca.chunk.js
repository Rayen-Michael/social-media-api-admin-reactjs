"use strict";(self.webpackChunksocial_api_admin_dashboard=self.webpackChunksocial_api_admin_dashboard||[]).push([[225],{33448:function(e,t,n){var s=n(36283),i=n(99431),o=n(30475),r=n(70811),a=n(78166);t.Z=function(e){var t=e.title,n=e.subtitle,c=(0,s.Z)(),l=(0,r.TV)(c.palette.mode);return(0,a.jsxs)(i.Z,{mb:"30px",children:[(0,a.jsx)(o.Z,{variant:"h2",color:l.grey[100],fontWeight:"bold",sx:{m:"0 0 5px 0"},children:t}),(0,a.jsx)(o.Z,{variant:"h5",color:l.greenAccent[400],children:n})]})}},7942:function(e,t,n){n(11995);var s=n(78166);t.Z=function(e){var t=e.avatar,n=e.size,i=void 0===n?"40px":n,o=e.fit,r={width:i,height:i,borderRadius:"50%",objectFit:void 0===o?"cover":o};return t&&t.url?(0,s.jsx)("div",{style:r,children:(0,s.jsx)("img",{src:t.url,style:r,alt:"avatar",width:i,height:i})}):(0,s.jsx)("div",{style:r,children:(0,s.jsx)("img",{src:"../../avatar.png",style:r,alt:"avatar",width:i,height:i})})}},38732:function(e,t,n){var s=n(79346),i=n(17374),o=n(61637),r=n(11995),a=n(36283),c=n(99431),l=n(26965),d=n(442),u=n(70811),x=n(68447),p=n(46882),h=n(47909),m=n(96560),f=n(82822),j=n(99028),g=n(90844),Z=n(59688),v=n(32732),y=n(63447),k=n(78166);t.Z=function(){var e=(0,a.Z)(),t=(0,u.TV)(e.palette.mode),n=(0,r.useContext)(u.kc),b=(0,d.v9)((function(e){return e.auth})),S=(0,d.I0)(),w=(0,r.useState)(!1),C=(0,o.Z)(w,2),A=C[0],R=C[1],F=(0,r.useState)(null),M=(0,o.Z)(F,2),T=M[0],D=M[1],E=Boolean(T),L=function(){D(null)},P=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,y.Cd)(S),e.next=3,t;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>40?R(!0):R(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),(0,k.jsxs)(c.Z,{position:"fixed",top:"0",left:"0",right:"0",height:{xs:"80px",sm:"80px",md:"80px",lg:"80px"},bgcolor:t.background,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",p:2,m:"0",zIndex:"100",boxShadow:A?"10px 0 10px 20px rgba(0,0,0,0.1)":"none",children:[(0,k.jsx)(c.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,k.jsx)("img",{alt:"logo",width:"auto",height:"48px",src:"../../logo.png"})}),"authenticated"===b.status?(0,k.jsxs)(c.Z,{display:"flex",backgroundColor:t.primary[400],borderRadius:"4px",height:{xs:"40px",sm:"40px",md:"40px",lg:"40px"},children:[(0,k.jsx)(x.ZP,{sx:{ml:2,flex:1},placeholder:"Search"}),(0,k.jsx)(l.Z,{type:"button",sx:{p:1},children:(0,k.jsx)(v.Z,{})})]}):null,(0,k.jsxs)(c.Z,{display:"flex",children:[(0,k.jsx)(l.Z,{onClick:n.toggleColorMode,children:"dark"===e.palette.mode?(0,k.jsx)(f.Z,{}):(0,k.jsx)(m.Z,{})}),"authenticated"===b.status?(0,k.jsx)(l.Z,{children:(0,k.jsx)(j.Z,{})}):null,"authenticated"===b.status?(0,k.jsx)(l.Z,{children:(0,k.jsx)(g.Z,{})}):null,"authenticated"===b.status?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(l.Z,{id:"user-button","aria-controls":E?"user-menu":void 0,"aria-haspopup":"true","aria-expanded":E?"true":void 0,onClick:function(e){D(e.currentTarget)},children:(0,k.jsx)(Z.Z,{})}),(0,k.jsxs)(p.Z,{id:"user-menu",anchorEl:T,open:E,onClose:L,MenuListProps:{"aria-labelledby":"user-button"},children:[(0,k.jsx)(h.Z,{onClick:L,children:"Profile"}),(0,k.jsx)(h.Z,{onClick:L,children:"My account"}),(0,k.jsx)(h.Z,{onClick:function(){L(),P()},children:"Logout"})]})]}):null]})]})}},37885:function(e,t,n){n.d(t,{Z:function(){return W}});var s=n(87643),i=n(38732),o=n(61637),r=n(11995),a=n(45940),c=n(36283),l=n(30475),d=n(99431),u=n(26965),x=n(49216),p=n(442),h=n(70811),m=n(65499),f=n(34718),j=n(69241),g=n(43615),Z=n(59688),v=n(79894),y=n(90270),k=n(68022),b=n(43516),S=n(17150),w=n(32386),C=n(63698),A=n(30091),R=n(99906),F=n(70551),M=n(99028),T=n(36723),D=n(94098),E=n(19594),L=n(7942),P=n(78166),I=function(e){var t=e.title,n=e.to,s=e.icon,i=e.selected,o=e.setSelected,r=(0,c.Z)(),d=(0,h.TV)(r.palette.mode),u=(0,x.s0)();return(0,P.jsx)(a.sN,{active:i===t,style:{color:d.grey[100]},onClick:function(){o(t),u(n)},icon:s,children:(0,P.jsx)(l.Z,{children:t})})},z=function(){var e,t,n,s,i=(0,c.Z)(),z=(0,h.TV)(i.palette.mode),W=(0,x.TH)(),q=(0,p.v9)((function(e){return e.profileDetails})),U=(0,r.useState)(!1),_=(0,o.Z)(U,2),H=_[0],V=_[1],B=(0,r.useState)("Dashboard"),N=(0,o.Z)(B,2),Y=N[0],K=N[1];return(0,r.useEffect)((function(){return window.addEventListener("load",(function(){window.innerWidth<=980?V(!0):V(!1)})),window.addEventListener("resize",(function(){window.innerWidth<=980?V(!0):V(!1)})),function(){window.removeEventListener("load",(function(){})),window.removeEventListener("resize",(function(){}))}}),[W.pathname]),(0,r.useEffect)((function(){return"/dashboard"!==W.pathname&&"/"!==W.pathname||K("Dashboard"),("/users"===W.pathname||W.pathname.includes("/users/"))&&K("Users"),("/posts"===W.pathname||W.pathname.includes("/posts/"))&&K("Posts"),("/comments"===W.pathname||W.pathname.includes("/comments/"))&&K("Comments"),("/notifications"===W.pathname||W.pathname.includes("/notifications/"))&&K("Notifications"),("/fcm-tokens"===W.pathname||W.pathname.includes("/fcm-tokens/"))&&K("FCM Tokens"),("/auth-tokens"===W.pathname||W.pathname.includes("/auth-tokens/"))&&K("Auth Tokens"),("/auth-tokens"===W.pathname||W.pathname.includes("/auth-tokens/"))&&K("Auth Tokens"),("/login-info"===W.pathname||W.pathname.includes("/login-info/"))&&K("Login Info"),("/requests/bluetick"===W.pathname||W.pathname.includes("/requests/bluetick"))&&K("Blue Tick Requests"),("/reports/users"===W.pathname||W.pathname.includes("/reports/users/"))&&K("User Reports"),("/reports/posts"===W.pathname||W.pathname.includes("/reports/posts/"))&&K("Post Reports"),("/reports/comments"===W.pathname||W.pathname.includes("/reports/comments/"))&&K("Comment Reports"),("/reports/feedbacks"===W.pathname||W.pathname.includes("/reports/feedbacks/"))&&K("Feedback Reports"),("/analytics/users"===W.pathname||W.pathname.includes("/analytics/users/"))&&K("User Analytics"),("/analytics/posts"===W.pathname||W.pathname.includes("/analytics/posts/"))&&K("Post Analytics"),("/analytics/comments"===W.pathname||W.pathname.includes("/analytics/comments/"))&&K("Comment Analytics"),("/analytics/feedbacks"===W.pathname||W.pathname.includes("/analytics/feedbacks/"))&&K("Feedback Analytics"),function(){}}),[W.pathname]),(0,P.jsx)(d.Z,{sx:{"& .sidebar-inner":{background:"".concat(z.primary[400]," !important")},"& .menu-anchor":{background:"transparent !important",color:"inherit !important"},"& .menu-item:hover":{color:"#868dfb !important"},"& .menu-item.active":{color:"#6870fa !important"}},children:(0,P.jsx)(a.YE,{collapsed:H,children:(0,P.jsxs)(a.v2,{children:[H?null:(0,P.jsxs)(d.Z,{m:"20px 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,P.jsx)(L.Z,{avatar:null===(e=q.user)||void 0===e?void 0:e.avatar,size:"100px"}),(0,P.jsxs)(d.Z,{textAlign:"center",children:[(0,P.jsx)(l.Z,{variant:"h3",color:z.grey[100],fontWeight:"bold",sx:{m:"10px 0 0 0"},children:(null===(t=q.user)||void 0===t?void 0:t.fname)+" "+(null===(n=q.user)||void 0===n?void 0:n.lname)}),(0,P.jsx)(l.Z,{variant:"h5",color:z.greenAccent[500],children:"@"+(null===(s=q.user)||void 0===s?void 0:s.uname)})]})]}),(0,P.jsxs)(d.Z,{paddingLeft:H?void 0:"5%",children:[(0,P.jsx)(I,{title:"Dashboard",to:"/",icon:(0,P.jsx)(m.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(l.Z,{variant:"h6",color:z.grey[300],sx:{m:"15px 0 5px 20px"},children:"Data"}),(0,P.jsx)(I,{title:"Users",to:"/users",icon:(0,P.jsx)(f.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Posts",to:"/posts",icon:(0,P.jsx)(j.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Comments",to:"/comments",icon:(0,P.jsx)(g.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Notifications",to:"/notifications",icon:(0,P.jsx)(M.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"FCM Tokens",to:"/fcm-tokens",icon:(0,P.jsx)(F.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Auth Tokens",to:"/auth-tokens",icon:(0,P.jsx)(T.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Login Info",to:"/login-info",icon:(0,P.jsx)(D.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(l.Z,{variant:"h6",color:z.grey[300],sx:{m:"15px 0 5px 20px"},children:"Requests"}),(0,P.jsx)(I,{title:"Blue Tick Requests",to:"/requests/bluetick",icon:(0,P.jsx)(R.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(l.Z,{variant:"h6",color:z.grey[300],sx:{m:"15px 0 5px 20px"},children:"Reports"}),(0,P.jsx)(I,{title:"User Reports",to:"/reports/users",icon:(0,P.jsx)(Z.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Post Reports",to:"/reports/posts",icon:(0,P.jsx)(v.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Comment Reports",to:"/reports/comments",icon:(0,P.jsx)(E.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Feedback Reports",to:"/reports/feedbacks",icon:(0,P.jsx)(y.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(l.Z,{variant:"h6",color:z.grey[300],sx:{m:"15px 0 5px 20px"},children:"Analytics"}),(0,P.jsx)(I,{title:"User Analytics",to:"/analytics/users",icon:(0,P.jsx)(k.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Post Analytics",to:"/analytics/posts",icon:(0,P.jsx)(b.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Comment Analytics",to:"/analytics/comments",icon:(0,P.jsx)(S.Z,{}),selected:Y,setSelected:K}),(0,P.jsx)(I,{title:"Feedback Analytics",to:"/analytics/feedbacks",icon:(0,P.jsx)(A.Z,{}),selected:Y,setSelected:K})]}),H?(0,P.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px 0",color:z.grey[100]},children:(0,P.jsx)(u.Z,{onClick:function(){return V(!H)},children:(0,P.jsx)(w.Z,{sx:{fontSize:"16px",fontWeight:"bold"}})})}):(0,P.jsx)("div",{style:{margin:"10px 10px 20px 0",color:z.grey[100],display:"flex",justifyContent:"end",alignItems:"center"},children:(0,P.jsx)(u.Z,{onClick:function(){return V(!H)},children:(0,P.jsx)(C.Z,{sx:{fontSize:"16px",fontWeight:"bold"}})})})]})})})},W=function(e){return function(t){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i.Z,{}),(0,P.jsxs)(d.Z,{display:"flex",flexDirection:"row",width:"100%",minWidth:"100%",mt:{xs:"80px",sm:"80px",md:"80px",lg:"80px"},children:[(0,P.jsx)(z,{}),(0,P.jsx)(e,(0,s.Z)({},t))]})]})}}},78143:function(e,t,n){n.d(t,{KZ:function(){return o},tC:function(){return s}});var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.format,s=void 0===n?"dd-MM-yyyy":n,i=t.separator,o=void 0===i?"-":i,r=new Date(e),a=r.getFullYear(),c=r.getMonth()+1,l=r.getDate(),d=a.toString(),u=c<10?"0"+c.toString():c.toString(),x=l<10?"0"+l.toString():l.toString();return"dd-MM-yyyy"===s?x+o+u+o+d:d+o+u+o+x},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.is24HourFormat,s=void 0!==n&&n,i=t.showSeconds,o=void 0!==i&&i,r=new Date(e),a=r.getHours(),c=r.getMinutes(),l=r.getSeconds(),d=a<10?"0"+a.toString():a.toString(),u=c<10?"0"+c.toString():c.toString(),x=l<10?"0"+l.toString():l.toString(),p=d+":"+u;if(o&&(p=p+":"+x),!1===s){a>12?d=(a-12).toString():0===a&&(d="12");var h=a<12?"AM":"PM";return o?d+":"+u+":"+x+" "+h:d+":"+u+" "+h}return p},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.format,o=void 0===n?"dd-mm-yyyy":n,r=t.is24HourFormat,a=void 0!==r&&r,c=t.showSeconds,l=void 0!==c&&c;return s(e,{format:o})+" "+i(e,{is24HourFormat:a,showSeconds:l})}}}]);
//# sourceMappingURL=225.4fae45ca.chunk.js.map