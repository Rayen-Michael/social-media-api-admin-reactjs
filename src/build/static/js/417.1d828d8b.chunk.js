"use strict";(self.webpackChunksocial_api_admin_dashboard=self.webpackChunksocial_api_admin_dashboard||[]).push([[417],{79417:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(79346),s=n(17374),i=n(61637),o=n(11995),c=n(36283),a=n(99431),l=n(98992),d=n(30475),x=n(442),u=n(70811),p=n(98951),g=n(26065),f=n(62839),h=n(15615),m=n(43615),j=n(33448),y=n(1244),b=n(20757),Z=n(78166),k=function(e){var t=e.data,n=(0,c.Z)(),r=(0,u.TV)(n.palette.mode);return(0,Z.jsx)(b.jM,{data:t,theme:{axis:{domain:{line:{stroke:r.grey[100]}},legend:{text:{fill:r.grey[100]}},ticks:{line:{stroke:r.grey[100],strokeWidth:1},text:{fill:r.grey[100]}}},legends:{text:{fill:r.grey[100]}}},keys:["users","posts","comments"],indexBy:"month",margin:{top:50,right:130,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"accent"},borderColor:{from:"color",modifiers:[["darker",.6],["opacity",.5]]},colorBy:"id",defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-40},enableLabel:!0,label:"formattedValue",labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"theme",theme:"labels.text.fill"},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],animate:!0,motionStiffness:90,motionDamping:15,role:"application",tooltip:function(e){return(0,Z.jsxs)("div",{style:{background:"#f0f0f0",color:"#333",padding:"4px 8px",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"13px"},children:[(0,Z.jsx)("div",{style:{backgroundColor:e.color,width:"10px",height:"10px"}}),(0,Z.jsx)("div",{style:{marginLeft:"8px"},children:"".concat(e.id," - ")}),(0,Z.jsx)("div",{style:{fontWeight:"bold",marginLeft:"4px"},children:e.value})]})},barAriaLabel:function(e){return e.id+" "+e.value}})},v=function(e){var t=e.title,n=e.subtitle,r=e.icon,s=(0,c.Z)(),i=(0,u.TV)(s.palette.mode);return(0,Z.jsx)(a.Z,{gridColumn:"span 3",backgroundColor:i.primary[400],display:"flex",alignItems:"center",justifyContent:"center",children:(0,Z.jsxs)(a.Z,{width:"100%",m:"0 30px",children:[(0,Z.jsx)(a.Z,{display:"flex",justifyContent:"center",alignItems:"center",children:(0,Z.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[r,(0,Z.jsx)(d.Z,{variant:"h4",fontWeight:"bold",sx:{color:i.grey[100]},mt:"8px",children:t})]})}),(0,Z.jsx)(a.Z,{display:"flex",justifyContent:"center",alignItems:"center",mt:"8px",children:(0,Z.jsx)(d.Z,{variant:"h5",sx:{color:i.greenAccent[500]},children:n})})]})})},C=function(e){var t=e.progress,n=void 0===t?"0":t,r=e.size,s=void 0===r?"40":r,i=(0,c.Z)(),o=(0,u.TV)(i.palette.mode),l=360*n;return(0,Z.jsx)(a.Z,{sx:{background:"radial-gradient(".concat(o.primary[400]," 55%, transparent 56%),\n            conic-gradient(transparent 0deg ").concat(l,"deg, ").concat(o.blueAccent[500]," ").concat(l,"deg 360deg),\n            ").concat(o.greenAccent[500]),borderRadius:"50%",width:"".concat(s,"px"),height:"".concat(s,"px")}})},w=n(34952),S=n(78781),A=n(49216),I=n(63447),R=n(78143),z=n(7942),D=(0,n(37885).Z)((function(){var e=(0,c.Z)(),t=(0,u.TV)(e.palette.mode),n=(0,x.v9)((function(e){return e.auth})),b=(0,x.v9)((function(e){return e.profileDetails})),D=(0,x.v9)((function(e){return e.stats})),W=(0,x.I0)(),U=(0,A.s0)(),_=(0,o.useState)(!1),B=(0,i.Z)(_,2),P=B[0],T=B[1],L=function(){T(!1)},V=function(){T(!0)},O=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,s,i,o,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("idle"!==D.status){e.next=10;break}return t=(0,I.oG)(W,n.token),s=(0,I.jk)(W,n.token),i=(0,I.w5)(W,n.token),o=(0,I.MV)(W,n.token),c=(0,I.a8)(W,n.token),V(),e.next=9,Promise.all([t,s,i,o,c]);case 9:L();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(e){switch(e){case"users":return(0,Z.jsx)(h.Z,{sx:{color:t.greenAccent[600],fontSize:"32px"}});case"posts":default:return(0,Z.jsx)(f.Z,{sx:{color:t.greenAccent[600],fontSize:"32px"}});case"comments":return(0,Z.jsx)(m.Z,{sx:{color:t.greenAccent[600],fontSize:"32px"}});case"messages":return(0,Z.jsx)(g.Z,{sx:{color:t.greenAccent[600],fontSize:"32px"}})}};return(0,o.useEffect)((function(){return document.title="Home | Dashboard","loading"===b.status||"loading"===D.status?V():L(),function(){}}),[b.status,D.status]),(0,o.useEffect)((function(){return O(),function(){}}),[n.token]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:P,children:(0,Z.jsx)(S.Z,{color:"inherit"})}),(0,Z.jsxs)(a.Z,{m:"20px",mt:"0",width:"100%",children:[(0,Z.jsxs)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(j.Z,{title:"DASHBOARD",subtitle:"Welcome to admin dashboard"}),(0,Z.jsx)(a.Z,{children:(0,Z.jsxs)(l.Z,{sx:{backgroundColor:t.blueAccent[700],color:t.grey[100],fontSize:"14px",fontWeight:"bold",padding:"10px 20px"},children:[(0,Z.jsx)(p.Z,{sx:{mr:"10px"}}),"Download Reports"]})})]}),(0,Z.jsxs)(a.Z,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridAutoRows:"140px",gap:"20px",pb:"20px",children:["success"===D.status&&D.stats?Object.keys(D.stats).map((function(e){var t=D.stats[e];return(0,Z.jsx)(v,{title:t.total,subtitle:e.toLocaleUpperCase(),icon:H(e)},e)})):null,(0,Z.jsxs)(a.Z,{gridColumn:{xs:"span 12",lg:"span 6"},gridRow:"span 3",backgroundColor:t.primary[400],overflow:"auto",children:[(0,Z.jsx)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"4px solid ".concat(t.background),colors:t.grey[100],p:"15px",children:(0,Z.jsx)(d.Z,{color:t.grey[100],variant:"h3",fontWeight:"600",children:"Recent Users"})}),"success"===D.status&&D.recentUsers?D.recentUsers.map((function(e,n){return(0,Z.jsxs)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"4px solid ".concat(t.background),p:"15px",children:[(0,Z.jsxs)(a.Z,{display:"flex",flexDirection:"row",justifyContent:"center",children:[(0,Z.jsx)(z.Z,{avatar:e.avatar}),(0,Z.jsxs)(a.Z,{ml:"20px",children:[(0,Z.jsx)(d.Z,{color:t.greenAccent[500],variant:"h5",fontWeight:"600",children:e._id}),(0,Z.jsx)(d.Z,{color:t.grey[100],children:e.uname})]})]}),(0,Z.jsx)(a.Z,{color:t.grey[100],children:e.createdAt&&(0,R.tC)(e.createdAt)}),(0,Z.jsx)("div",{style:{backgroundColor:t.greenAccent[500],padding:"5px 10px",borderRadius:"4px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",cursor:"pointer"},onClick:function(){return U("/users/".concat(e._id))},children:(0,Z.jsx)(y.Z,{})})]},"".concat(e._id,"-").concat(n))})):null]}),(0,Z.jsxs)(a.Z,{gridColumn:{xs:"span 12",lg:"span 6"},gridRow:"span 3",backgroundColor:t.primary[400],overflow:"auto",children:[(0,Z.jsx)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"4px solid ".concat(t.background),colors:t.grey[100],p:"15px",children:(0,Z.jsx)(d.Z,{color:t.grey[100],variant:"h3",fontWeight:"600",children:"Recent Posts"})}),"success"===D.status&&D.recentPosts?D.recentPosts.map((function(e,n){return(0,Z.jsxs)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"4px solid ".concat(t.background),p:"15px",children:[(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(d.Z,{color:t.greenAccent[500],variant:"h5",fontWeight:"600",children:e._id}),(0,Z.jsx)(d.Z,{color:t.grey[100],children:e.owner.uname})]}),(0,Z.jsx)(a.Z,{children:(0,Z.jsxs)(d.Z,{color:t.grey[100],children:[e.mediaFiles.length," Media"]})}),(0,Z.jsx)(a.Z,{color:t.grey[100],children:e.createdAt&&(0,R.tC)(e.createdAt)}),(0,Z.jsx)("div",{style:{backgroundColor:t.greenAccent[500],padding:"5px 10px",borderRadius:"4px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",cursor:"pointer"},onClick:function(){return U("/posts/".concat(e._id))},children:(0,Z.jsx)(y.Z,{})})]},"".concat(e._id,"-").concat(n))})):null]}),(0,Z.jsxs)(a.Z,{gridColumn:{xs:"span 12",lg:"span 4"},gridRow:"span 2",backgroundColor:t.primary[400],children:[(0,Z.jsx)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"4px solid ".concat(t.background),colors:t.grey[100],p:"15px",children:(0,Z.jsx)(d.Z,{variant:"h3",fontWeight:"600",children:"Blue Tick Verified Users"})}),"success"===D.status&&D.verifiedUsersStats?(0,Z.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",mt:"25px",children:[(0,Z.jsx)(C,{size:"144",progress:D.verifiedUsersStats.roundedUnit}),(0,Z.jsxs)(d.Z,{variant:"h5",color:t.greenAccent[500],sx:{mt:"15px"},children:[D.verifiedUsersStats.roundedPercentage,"% verified users"]}),(0,Z.jsx)(d.Z,{children:"".concat(D.verifiedUsersStats.verifiedUsers," out of\n                  ").concat(D.verifiedUsersStats.totalUsers," users are blue tick verified")})]}):null]}),(0,Z.jsxs)(a.Z,{gridColumn:{xs:"span 12",lg:"span 8"},gridRow:"span 2",backgroundColor:t.primary[400],children:[(0,Z.jsx)(a.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"4px solid ".concat(t.background),colors:t.grey[100],p:"15px",children:(0,Z.jsx)(d.Z,{variant:"h3",fontWeight:"600",children:"Monthly Stats"})}),"success"===D.status&&D.monthlyStats?(0,Z.jsx)(a.Z,{height:"250px",mt:"-20px",children:(0,Z.jsx)(k,{data:D.monthlyStats})}):null]})]})]})]})}))}}]);
//# sourceMappingURL=417.1d828d8b.chunk.js.map