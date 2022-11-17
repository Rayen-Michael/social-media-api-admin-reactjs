"use strict";(self.webpackChunksocial_api_admin_dashboard=self.webpackChunksocial_api_admin_dashboard||[]).push([[147],{33448:function(e,t,n){var r=n(36283),i=n(99431),s=n(30475),o=n(70811),a=n(78166);t.Z=function(e){var t=e.title,n=e.subtitle,l=(0,r.Z)(),c=(0,o.TV)(l.palette.mode);return(0,a.jsxs)(i.Z,{mb:"30px",children:[(0,a.jsx)(s.Z,{variant:"h2",color:c.grey[100],fontWeight:"bold",sx:{m:"0 0 5px 0"},children:t}),(0,a.jsx)(s.Z,{variant:"h5",color:c.greenAccent[400],children:n})]})}},71424:function(e,t,n){n(11995);var r=n(78166);t.Z=function(e){var t=e.avatar,n=e.size,i=void 0===n?"40px":n,s=e.fit,o={width:i,height:i,borderRadius:"50%",objectFit:void 0===s?"cover":s};return t&&t.url?(0,r.jsx)("div",{style:o,children:(0,r.jsx)("img",{src:t.url,style:o,alt:"avatar",width:i,height:i})}):(0,r.jsx)("div",{style:o,children:(0,r.jsx)("img",{src:"../../avatar.png",style:o,alt:"avatar",width:i,height:i})})}},61761:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(87643),i=n(36283),s=n(99431),o=n(26965),a=n(11995),l=n(442),c=n(70811),d=n(68447),x=n(96560),u=n(82822),h=n(99028),f=n(90844),m=n(59688),p=n(32732),j=n(64105),g=n(78166),Z=function(){var e=(0,i.Z)(),t=(0,c.TV)(e.palette.mode),n=(0,a.useContext)(c.kc),r=(0,l.I0)();return(0,g.jsxs)(s.Z,{position:"fixed",top:"0",left:"0",right:"0",height:{xs:"80px",sm:"80px",md:"80px",lg:"80px"},bgcolor:t.primary[500],display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",p:2,zIndex:"1000",children:[(0,g.jsx)(s.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,g.jsx)("img",{alt:"logo",width:"auto",height:"48px",src:"../../logo.png"})}),(0,g.jsxs)(s.Z,{display:"flex",backgroundColor:t.primary[400],borderRadius:"4px",height:{xs:"40px",sm:"40px",md:"40px",lg:"40px"},children:[(0,g.jsx)(d.ZP,{sx:{ml:2,flex:1},placeholder:"Search"}),(0,g.jsx)(o.Z,{type:"button",sx:{p:1},children:(0,g.jsx)(p.Z,{})})]}),(0,g.jsxs)(s.Z,{display:"flex",children:[(0,g.jsx)(o.Z,{onClick:n.toggleColorMode,children:"dark"===e.palette.mode?(0,g.jsx)(u.Z,{}):(0,g.jsx)(x.Z,{})}),(0,g.jsx)(o.Z,{children:(0,g.jsx)(h.Z,{})}),(0,g.jsx)(o.Z,{children:(0,g.jsx)(f.Z,{})}),(0,g.jsx)(o.Z,{onClick:function(){r((0,j.kS)())},children:(0,g.jsx)(m.Z,{})})]})]})},v=n(61637),y=n(45940),b=n(30475),C=n(49216),w=n(65499),k=n(34718),S=n(69241),z=n(43615),M=n(79894),A=n(90270),D=n(68022),I=n(43516),N=n(17150),P=n(32386),V=n(63698),E=n(30091),L=n(71424),_=function(e){var t=e.title,n=e.to,r=e.icon,s=e.selected,o=e.setSelected,a=(0,i.Z)(),l=(0,c.TV)(a.palette.mode),d=(0,C.s0)();return(0,g.jsx)(y.sN,{active:s===t,style:{color:l.grey[100]},onClick:function(){o(t),d(n)},icon:r,children:(0,g.jsx)(b.Z,{children:t})})},O=function(){var e,t,n,r,d=(0,i.Z)(),x=(0,c.TV)(d.palette.mode),u=(0,a.useState)(!0),h=(0,v.Z)(u,2),f=h[0],p=h[1],j=(0,a.useState)("Dashboard"),Z=(0,v.Z)(j,2),C=Z[0],O=Z[1],R=(0,l.v9)((function(e){return e.auth}));return(0,a.useEffect)((function(){return window.addEventListener("load",(function(){window.innerWidth<=768?p(!0):p(!1)})),window.addEventListener("resize",(function(){window.innerWidth<=768?p(!0):p(!1)})),function(){window.removeEventListener("load",(function(){})),window.removeEventListener("resize",(function(){}))}}),[]),(0,g.jsx)(s.Z,{sx:{"& .sidebar-inner":{background:"".concat(x.primary[400]," !important")},"& .menu-anchor":{background:"transparent !important",color:"inherit !important"},"& .menu-item:hover":{color:"#868dfb !important"},"& .menu-item.active":{color:"#6870fa !important"}},children:(0,g.jsx)(y.YE,{collapsed:f,children:(0,g.jsxs)(y.v2,{children:[f?null:(0,g.jsxs)(s.Z,{m:"20px 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,g.jsx)(L.Z,{avatar:null===(e=R.user)||void 0===e?void 0:e.avatar,size:"100px"}),(0,g.jsxs)(s.Z,{textAlign:"center",children:[(0,g.jsx)(b.Z,{variant:"h3",color:x.grey[100],fontWeight:"bold",sx:{m:"10px 0 0 0"},children:(null===(t=R.user)||void 0===t?void 0:t.fname)+" "+(null===(n=R.user)||void 0===n?void 0:n.lname)}),(0,g.jsx)(b.Z,{variant:"h5",color:x.greenAccent[500],children:"@"+(null===(r=R.user)||void 0===r?void 0:r.uname)})]})]}),(0,g.jsxs)(s.Z,{paddingLeft:f?void 0:"5%",children:[(0,g.jsx)(_,{title:"Dashboard",to:"/",icon:(0,g.jsx)(w.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(b.Z,{variant:"h6",color:x.grey[300],sx:{m:"15px 0 5px 20px"},children:"Data"}),(0,g.jsx)(_,{title:"Manage Users",to:"/users",icon:(0,g.jsx)(k.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"Manage Posts",to:"/posts",icon:(0,g.jsx)(S.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"Manage Comments",to:"/comments",icon:(0,g.jsx)(z.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(b.Z,{variant:"h6",color:x.grey[300],sx:{m:"15px 0 5px 20px"},children:"Pages"}),(0,g.jsx)(_,{title:"Profile Form",to:"/form",icon:(0,g.jsx)(m.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"Calendar",to:"/calendar",icon:(0,g.jsx)(M.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"FAQ Page",to:"/faq",icon:(0,g.jsx)(A.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(b.Z,{variant:"h6",color:x.grey[300],sx:{m:"15px 0 5px 20px"},children:"Charts"}),(0,g.jsx)(_,{title:"Bar Chart",to:"/bar",icon:(0,g.jsx)(D.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"Pie Chart",to:"/pie",icon:(0,g.jsx)(I.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"Line Chart",to:"/line",icon:(0,g.jsx)(N.Z,{}),selected:C,setSelected:O}),(0,g.jsx)(_,{title:"Geography Chart",to:"/geography",icon:(0,g.jsx)(E.Z,{}),selected:C,setSelected:O})]}),f?(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px 0",color:x.grey[100]},children:(0,g.jsx)(o.Z,{onClick:function(){return p(!f)},children:(0,g.jsx)(P.Z,{sx:{fontSize:"16px",fontWeight:"bold"}})})}):(0,g.jsx)("div",{style:{margin:"10px 10px 20px 0",color:x.grey[100],display:"flex",justifyContent:"end",alignItems:"center"},children:(0,g.jsx)(o.Z,{onClick:function(){return p(!f)},children:(0,g.jsx)(V.Z,{sx:{fontSize:"16px",fontWeight:"bold"}})})})]})})})},R=function(e){return function(t){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{}),(0,g.jsxs)(s.Z,{display:"flex",flexDirection:"row",width:"100%",minWidth:"100%",mt:{xs:"80px",sm:"80px",md:"80px",lg:"80px"},children:[(0,g.jsx)(O,{}),(0,g.jsx)(e,(0,r.Z)({},t))]})]})}}},82147:function(e,t,n){n.r(t);var r=n(79346),i=n(17374),s=n(61637),o=n(11995),a=n(442),l=n(36283),c=n(99431),d=n(30475),x=n(32948),u=n(70811),h=n(49216),f=n(55523),m=n(74356),p=n(96561),j=n(34952),g=n(78781),Z=n(33448),v=n(45232),y=n(61761),b=n(78166);t.default=(0,y.Z)((function(){var e=(0,l.Z)(),t=(0,u.TV)(e.palette.mode),n=(0,a.v9)((function(e){return e.auth})),y=(0,a.v9)((function(e){return e.users})),C=(0,a.I0)(),w=(0,h.s0)(),k=(0,o.useState)(0),S=(0,s.Z)(k,2),z=S[0],M=S[1],A=(0,o.useState)(!1),D=(0,s.Z)(A,2),I=D[0],N=D[1],P=function(){N(!1)},V=function(){N(!0)},E=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,v.mO)(C,n.token),V(),e.next=4,t;case 4:P();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(t),i=t<=0?1:t+1,s=(0,v.mO)(C,n.token,i),"loading"===y.status||!y.hasNextPage){e.next=6;break}return e.next=6,s;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=[{field:"_id",headerName:"ID",flex:1,cellClassName:"name-column--cell"},{field:"fname",headerName:"First name",flex:1,cellClassName:"name-column--cell"},{field:"lname",headerName:"Last Name",flex:1,cellClassName:"name-column--cell"},{field:"email",headerName:"Email",flex:1},{field:"uname",headerName:"Username",flex:1},{field:"role",headerName:"Access Level",renderCell:function(e){var n=e.row.role;return(0,b.jsxs)(c.Z,{m:"0 auto",p:"5px 10px",display:"flex",justifyContent:"center",backgroundColor:"admin"===n?t.greenAccent[600]:t.greenAccent[700],borderRadius:"4px",children:["admin"===n&&(0,b.jsx)(f.Z,{}),"manager"===n&&(0,b.jsx)(p.Z,{}),"user"===n&&(0,b.jsx)(m.Z,{}),(0,b.jsx)(d.Z,{color:t.grey[100],sx:{ml:"5px"},children:n})]})}}];return(0,o.useEffect)((function(){return document.title="Dashboard - All Users","authenticating"===n.status||"loadingUser"===n.status||"loading"===y.status?V():P(),function(){}}),[n.token,n.user,n.status,y.status]),(0,o.useEffect)((function(){return"idle"===y.status&&E(),function(){}}),[n.token,y.status]),(0,b.jsxs)(c.Z,{m:"20px",mt:"0",width:"100%",children:[(0,b.jsx)(j.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:I,children:(0,b.jsx)(g.Z,{color:"inherit"})}),(0,b.jsx)(Z.Z,{title:"USERS",subtitle:"Managing the Users"}),(0,b.jsx)(c.Z,{m:"40px 0 0 0",height:"75vh",sx:{"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:t.greenAccent[300]},"& .MuiDataGrid-columnHeaders":{backgroundColor:t.blueAccent[700],borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:t.primary[400]},"& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:t.blueAccent[700]},"& .MuiCheckbox-root":{color:"".concat(t.greenAccent[200]," !important")}},children:"success"===y.status&&(0,b.jsx)(x._,{rows:y.results,columns:_,rowCount:y.totalPages*y.limit,pagination:!0,paginationMode:"server",pageSize:y.limit,rowsPerPageOptions:[y.limit],page:z,onPageChange:L,onRowClick:function(e){return w("/users/".concat(e.id))},getRowId:function(e){return e._id},loading:"loading"===y.status})})]})}))},55523:function(e,t,n){var r=n(12132);t.Z=void 0;var i=r(n(69185)),s=n(78166),o=(0,i.default)((0,s.jsxs)("g",{fillRule:"evenodd",children:[(0,s.jsx)("circle",{cx:"17",cy:"15.5",r:"1.12"}),(0,s.jsx)("path",{d:"M17 17.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08z"}),(0,s.jsx)("path",{d:"M18 11.09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55C13.18 21.99 14.97 23 17 23c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM11 17c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"})]}),"AdminPanelSettingsOutlined");t.Z=o},74356:function(e,t,n){var r=n(12132);t.Z=void 0;var i=r(n(69185)),s=n(78166),o=(0,i.default)((0,s.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOpenOutlined");t.Z=o},96561:function(e,t,n){var r=n(12132);t.Z=void 0;var i=r(n(69185)),s=n(78166),o=(0,i.default)((0,s.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"}),"SecurityOutlined");t.Z=o}}]);
//# sourceMappingURL=147.cee61d44.chunk.js.map