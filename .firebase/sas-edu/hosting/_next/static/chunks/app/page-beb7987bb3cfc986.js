(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4900:function(e,a,t){Promise.resolve().then(t.bind(t,9759)),Promise.resolve().then(t.bind(t,2580)),Promise.resolve().then(t.t.bind(t,4454,23)),Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23))},9759:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l}});var n=t(7437),_=t(4033),s=t(1396),r=t.n(s),c=t(4454),o=t.n(c),i=t(2265);let d=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Latest Causes",href:"/LC"},{name:"Soacial Events",href:"/SE"},{name:"Contact",href:"/contact"}];function l(){let[e,a]=(0,i.useState)(!1);return(0,_.useRouter)(),(0,n.jsx)("nav",{className:"".concat(e?"".concat(o().active):""," ").concat(o().nav),children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("h1",{children:"SAS"}),(0,n.jsx)("li",{className:o().menu_btn,children:(0,n.jsxs)("button",{onClick:()=>a(!e),children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]})})]}),(0,n.jsxs)("ul",{className:"".concat(e?"".concat(o().active):""," ").concat(o().nav_btns),children:[d.map(e=>{let t=(0,_.usePathname)()===e.href;return(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:e.href,className:t?"active":"deactive",onClick:()=>a(!1),children:e.name})},e.name)}),(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/donate",children:"Donate"})})]})]})})}},2580:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var n=t(7437),_=t(4086),s=t(3205),r=t(2265),c=t(4454),o=t.n(c),i=t(1396),d=t.n(i);async function l(){let e=await (0,_.PL)((0,_.hJ)(s.db,"Employee_Volunteer")),a=[];e.forEach(e=>{a.push({...e.data().Volunteer})});let t=[];for(let e of a)if("object"==typeof e&&!Array.isArray(e)){if("name"in e)names.push(e);else for(let a of Object.values(e))"object"==typeof a&&!Array.isArray(a)&&"name"in a&&t.push(a)}return t}function u(){let[e,a]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async function(){a(await l())})()},[]),(0,n.jsx)("div",{className:o().cards_1_2,children:e.map((e,a)=>a<3&&(0,n.jsx)(d(),{href:"/about",className:o().card,style:{backgroundImage:"url('".concat(e.img,"')")},children:(0,n.jsxs)("div",{className:o().details,children:[(0,n.jsxs)("div",{className:o().V_title,children:[(0,n.jsx)("h4",{children:e.name}),(0,n.jsx)("h6",{children:e.title})]}),(0,n.jsx)("div",{className:o().detail,children:(0,n.jsx)("p",{children:e.details})})]})},e.id))})}},3205:function(e,a,t){"use strict";t.d(a,{db:function(){return r}});var n=t(994),_=t(4086);let s=(0,n.ZF)({apiKey:"AIzaSyD399P11qVC38j2h4rvN87f9ap5cFIVjVY",authDomain:"sas-edu.firebaseapp.com",projectId:"sas-edu",storageBucket:"sas-edu.appspot.com",messagingSenderId:"262232361752",appId:"1:262232361752:web:35c6582ef16d316b73ec6d",measurementId:"G-N8N84JZ1N2"}),r=(0,_.ad)(s)},4454:function(e){e.exports={nav:"page_nav__ijo23",menu_btn:"page_menu_btn__rMPub",active:"page_active__9fwfh",container:"page_container__jZF7q",hero:"page_hero__7KFOs",hBtn_contactNum:"page_hBtn_contactNum__CKrZp",btn:"page_btn__hMGYV",contactNum:"page_contactNum__4uGQS",hRight:"page_hRight__9zaj5",heroImg:"page_heroImg__2cabd",content:"page_content___38fW",text_boundary:"page_text_boundary__kKfyg",about:"page_about__YOpBg",abotLeft:"page_abotLeft__h6xj9",abotRight:"page_abotRight__9_lGI",lc:"page_lc__6_hS1",cards_1_2:"page_cards_1_2__loXH8",card:"page_card__Cf__u",img:"page_img__2a6_7",progress_ber:"page_progress_ber__XFdKw",progress_data:"page_progress_data__I7Ues",se:"page_se__qLALM",cards_2_1:"page_cards_2_1__R0pnb",progress_datas:"page_progress_datas__s_f_d",volunteer:"page_volunteer__a_aLJ",details:"page_details__TnHHS",V_title:"page_V_title__goJn_",add_volunteer_home:"page_add_volunteer_home__9k1qD",nav_btns:"page_nav_btns__TJt10"}}},function(e){e.O(0,[358,176,99,596,971,938,744],function(){return e(e.s=4900)}),_N_E=e.O()}]);