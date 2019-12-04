(this["webpackJsonpweb-project"]=this["webpackJsonpweb-project"]||[]).push([[0],{116:function(e,t,a){e.exports=a(148)},121:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),s=(a(75),a(54)),i=a(41),l=a(9),p=a(8),u=a(11),m=a(12),d=a(13),h=a(10),g=a(26),f=a(60),E=a(217),b=a(36),O=a(190),y=a(86),v=a.n(y),j=a(88),N=a.n(j),S=a(85),x=a.n(S),C=a(191),k=a(4),w=(a(121),a(15)),T=a(17),_=a.n(T),P=function(e){var t="Bearer ".concat(e);localStorage.setItem("JWTToken",t),_.a.defaults.headers.common.Authorization=t},I=function(e){localStorage.setItem("user",JSON.stringify(e))},D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:""},a.handleKeyChange=a.handleKeyChange.bind(Object(g.a)(a)),a.handleLogin=a.handleLogin.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleKeyChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e={email:this.state.email,password:this.state.password};this.props.login(e,this.props.history)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.UI,o=n.loading,c=n.errors;return r.a.createElement(f.a,{className:a.form,elevation:4},r.a.createElement("div",{className:"flexContainer"},r.a.createElement(x.a,{className:a.forwardIcon}),r.a.createElement("h1",{className:"login"},"Login")),r.a.createElement("div",{className:"flexContainer"},r.a.createElement(v.a,null),r.a.createElement(E.a,{onChange:this.handleKeyChange,label:"Email",name:"email",helperText:c.email,error:!!c.email,className:a.input,disabled:o})),r.a.createElement("br",null),r.a.createElement("div",{className:"flexContainer"},r.a.createElement(N.a,null),r.a.createElement(E.a,{type:"password",onChange:this.handleKeyChange,label:"Password",name:"password",helperText:c.password,error:!!c.password,className:a.input,disabled:o})),c.general?r.a.createElement(b.a,{variant:"body2",className:a.generalError},c.general):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{color:"primary",variant:"contained",className:a.button,onClick:this.handleLogin,disabled:o},o?r.a.createElement(C.a,{size:24}):"Login"),r.a.createElement("div",{className:"ask"},"Not have an account yet ?",r.a.createElement(O.a,{className:a.signup,onClick:function(){return e.props.history.push("/signup")}},"Sign up")))}}]),t}(r.a.Component),U={login:function(e,t){return function(a){a({type:"LOADING_UI"}),_.a.post("/api/login",e).then((function(e){P(e.data.jwtToken),I(e.data.user),a({type:"SET_USER_DATA",payload:e.data.user}),a({type:"SET_AUTHENTICATED"}),a({type:"STOP_LOADING_UI"}),t.push("/")})).catch((function(e){a({type:"SET_ERROR",payload:e.response.data})}))}}},A=Object(w.b)((function(e){return{UI:e.UI}}),U)(Object(k.a)({input:{"margin-left":"15px",width:"300px"},forwardIcon:{"font-size":"35px"},form:{display:"table",padding:"60px 60px 0px 60px",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)"},button:{width:"346px","margin-bottom":"30px"},generalError:{color:"red","margin-top":"10px"},signup:{color:"blue"}})(D)),L=(a(144),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loginPage"},r.a.createElement("img",{src:"/assets/icons/icon2.png",className:"connectIcon"}),r.a.createElement("div",{className:"name"},"WINDLIFE NETWORK"),r.a.createElement(A,{history:this.props.history}))}}]),t}(r.a.Component)),R=a(89),M=a.n(R),G=(a(145),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={email:"",username:"",password:"",confirmPassword:""},a.handleKeyChange=a.handleKeyChange.bind(Object(g.a)(a)),a.handleSignup=a.handleSignup.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleKeyChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSignup",value:function(){var e={email:this.state.email,username:this.state.username,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.signup(e)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI,n=a.loading,o=a.errors,c=a.message.message;return r.a.createElement(f.a,{className:t.form,elevation:6},r.a.createElement("div",{className:"flexContainer"},r.a.createElement(M.a,{className:t.personAddIcon}),r.a.createElement("h1",{className:"signup"},"Signup")),r.a.createElement(E.a,{onChange:this.handleKeyChange,label:"Email",name:"email",helperText:o.email,error:!!o.email,className:t.input,disabled:n}),r.a.createElement("br",null),r.a.createElement(E.a,{onChange:this.handleKeyChange,label:"Username",name:"username",helperText:o.username,error:!!o.username,className:t.input,disabled:n}),r.a.createElement("br",null),r.a.createElement(E.a,{type:"password",onChange:this.handleKeyChange,label:"Password",name:"password",helperText:o.password,error:!!o.password,className:t.input,disabled:n}),r.a.createElement("br",null),r.a.createElement(E.a,{type:"password",onChange:this.handleKeyChange,label:"Repeat your password",name:"confirmPassword",helperText:o.confirmPassword,error:!!o.confirmPassword,className:t.input,disabled:n}),c?r.a.createElement(b.a,{variant:"body2",className:t.message},c):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"contained",className:t.button,onClick:this.handleSignup,disabled:n},n?r.a.createElement(C.a,{size:24}):"Sign up"))}}]),t}(r.a.Component)),z={signup:function(e){return function(t){t({type:"LOADING_UI"}),_.a.post("/api/signup",e).then((function(e){t({type:"SET_RESPONSE_MESSAGE",payload:e.data}),t({type:"STOP_LOADING_UI"})})).catch((function(e){t({type:"SET_ERROR",payload:e.response.data})}))}}},B=Object(w.b)((function(e){return{UI:e.UI}}),z)(Object(k.a)({input:{width:"300px","margin-top":"15px"},personAddIcon:{"font-size":"35px"},button:{width:"346px",color:"white","background-color":"lightskyblue","margin-bottom":"30px","&:hover":{"background-color":"royalblue"}},form:{display:"table",padding:"30px"},message:{color:"green","margin-top":"10px"}})(G)),K=(a(146),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"signupPage"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"description"},"Signup to join our network"),r.a.createElement(B,null)))}}]),t}(r.a.Component)),J=a(69),H=a(200),W=a(2),F=a(3),V=a(90),Y=a.n(V),$=a(92),q=a.n($),Q=a(93),X=a.n(Q),Z=a(94),ee=a.n(Z),te=a(193),ae=a(194),ne=a(196),re=a(218),oe=a(195),ce=a(91),se=a.n(ce),ie=a(192),le={success:Y.a,warning:se.a,error:q.a,info:X.a},pe=Object(ie.a)((function(e){return{success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:ae.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function ue(e){var t=pe(),a=e.className,n=e.message,o=e.onClose,c=e.variant,s=Object(W.a)(e,["className","message","onClose","variant"]),i=le[c];return r.a.createElement(oe.a,Object.assign({className:Object(F.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(i,{className:Object(F.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(ee.a,{className:t.icon}))]},s))}function me(e){var t=e.open,a=e.handleClose;return r.a.createElement(re.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:6e3,onClose:a},e.message?r.a.createElement(ue,{onClose:a,variant:"success",message:e.message}):r.a.createElement(ue,{onClose:a,variant:"error",message:e.errors.message}))}var de=a(198),he=a(199),ge=a(201),fe=a(202),Ee=a(102),be=a(197),Oe=a(42),ye=a.n(Oe),ve=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).openMenu=function(t){e.setState({anchorEl:t.currentTarget})},e.closeMenu=function(t){e.setState({anchorEl:null})},e.state={anchorEl:null},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne.a,{onClick:this.openMenu},r.a.createElement(ye.a,null)),r.a.createElement(Ee.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.closeMenu},r.a.createElement(be.a,null,"Disable comments"),r.a.createElement(be.a,null,"Disable sharing")))}}]),t}(r.a.Component),je=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({postContent:e.target.value})},a.state={postContent:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.loading,o=t.open,c=t.closeDialog,s=t.handleUpload,i=t.mode;return r.a.createElement(de.a,{open:o,onClose:c},r.a.createElement("div",{className:a.dialog},r.a.createElement(he.a,{id:"form-dialog-title"},r.a.createElement("div",{className:a.postHeader},r.a.createElement("div",{className:a.subHeader},r.a.createElement(H.a,{className:a.avatar},JSON.parse(localStorage.user).username[0].toUpperCase()),r.a.createElement("span",null,JSON.parse(localStorage.user).username)),r.a.createElement(ve,null))),r.a.createElement(ge.a,{className:a.fieldContainer},r.a.createElement(E.a,{autoFocus:!0,className:a.postField,margin:"dense",placeholder:"What are you thinking",multiline:!0,rows:2,rowsMax:4,onChange:this.handleChange})),r.a.createElement(fe.a,null,r.a.createElement(O.a,{onClick:c,color:"primary",disabled:n},"Cancel"),r.a.createElement(O.a,{onClick:function(){return s(e.state.postContent)},color:"primary",disabled:n},n?r.a.createElement(C.a,{size:24}):i))))}}]),t}(r.a.Component),Ne=Object(k.a)({postField:{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)",width:"300px"},avatar:{"background-color":"rgb(0, 188, 212)","margin-right":"15px"},dialog:{width:"400px",height:"300px"},fieldContainer:{"overflow-y":"hidden"},postHeader:{display:"flex","justify-content":"space-between"},subHeader:{display:"flex","align-items":"center"}})(je),Se=a(50),xe=a(95);function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var we={authenticated:!1,user:{}},Te=a(40);function _e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_e(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_e(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ie={posts:[],post:[],errors:{},loading:!1};function De(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?De(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):De(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ae={loading:!1,sideNavOpen:!1,errors:{},message:{}},Le=[xe.a],Re=Se.a.apply(void 0,Le),Me=Object(Se.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return ke({},e,{authenticated:!0});case"SET_USER_DATA":return ke({},e,{user:t.payload});case"SET_UNAUTHENTICATED":return ke({},e,{authenticated:!1});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Pe({},e,{loading:!0});case"UPLOAD_POST":return Pe({},e,{posts:[t.payload].concat(Object(Te.a)(e.posts))});case"SET_MANY_POSTS":return Pe({},e,{posts:t.payload,loading:!1});case"SET_POST":return Pe({},e,{post:t.payload,loading:!1});case"LIKE_POST":case"UNLIKE_POST":case"EDIT_POST":case"DELETE_POST":case"SET_COMMENT":case"ADD_COMMENT":case"DELETE_COMMENT":return Pe({},e,{posts:t.payload});case"SET_DATA_ERROR":return Pe({},e,{errors:t.payload});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_UI":return Ue({},e,{loading:!0});case"STOP_LOADING_UI":return Ue({},e,{loading:!1});case"TOGGLE_SIDE_NAV":return Ue({},e,{sideNavOpen:!e.sideNavOpen});case"SET_ERROR":return Ue({},e,{loading:!1,errors:t.payload});case"SET_RESPONSE_MESSAGE":return Ue({},e,{loading:!1,message:t.payload});default:return e}}}),Ge=Object(Se.d)(Me,{},Re),ze=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).openDialog=function(){a.setState({open:!0})},a.closeDialog=function(){a.setState({open:!1})},a.closeSnackBar=function(){a.setState({snackBarOpen:!1})},a.handleUpload=function(e){var t={content:e};a.props.uploadPost(t)},a.state={open:!1,snackBarOpen:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){!1===e.UI.loading&&!0===this.props.UI.loading&&(this.closeDialog(),this.setState({snackBarOpen:!0}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI,n=a.loading,o=a.errors,c=a.message.message;return r.a.createElement("div",null,r.a.createElement(J.a,{className:t.container,onClick:this.openDialog},r.a.createElement(H.a,{className:t.avatar},JSON.parse(localStorage.user).username[0].toUpperCase()),r.a.createElement(b.a,{className:t.placeHolder},"What are you thinking")),r.a.createElement(Ne,{loading:n,open:this.state.open,closeDialog:this.closeDialog,handleUpload:this.handleUpload,mode:"Post"}),r.a.createElement(me,{errors:o,message:c,open:this.state.snackBarOpen,handleClose:this.closeSnackBar}))}}]),t}(r.a.Component),Be={uploadPost:function(e){return function(t){t({type:"LOADING_UI"}),_.a.post("/api/newpost",e).then((function(e){t({type:"UPLOAD_POST",payload:e.data.post}),t({type:"SET_RESPONSE_MESSAGE",payload:e.data})})).catch((function(e){t({type:"SET_DATA_ERROR",payload:e.response.data})}))}}},Ke=Object(w.b)((function(e){return{UI:e.UI}}),Be)(Object(k.a)({container:{width:"600px",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)","background-color":"white","box-shadow":"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",transition:"0.3s",padding:"20px 0px 20px 20px","justify-content":"flex-start","&:hover":{"background-color":"#d9d9d9"}},avatar:{"background-color":"rgb(0, 188, 212)","margin-right":"15px"},placeHolder:{opacity:.4}})(ze)),Je=a(204),He=a(205),We=a(97),Fe=a.n(We),Ve=a(203),Ye=a(189),$e=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).toggleMenu=function(t){e.state.anchorEl?e.setState({anchorEl:null}):e.setState({anchorEl:t.currentTarget})},e.state={anchorEl:null},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.optionsList,a=e.displayComponent;return r.a.createElement("div",null,r.a.createElement(ne.a,{onClick:this.toggleMenu},a),r.a.createElement(Ve.a,{open:Boolean(this.state.anchorEl),anchorEl:this.state.anchorEl},r.a.createElement(f.a,{elevation:2},r.a.createElement(Ye.a,{id:"simple-menu",autoFocusItem:Boolean(this.state.anchorEl)},t.map((function(e){return r.a.createElement(be.a,{key:e.text,onClick:e.action},e.text)}))))))}}]),t}(r.a.Component),qe=function(){return function(e){e({type:"TOGGLE_SIDE_NAV"})}},Qe=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.toggleSideNav,n=[{text:"Log out",action:this.props.logout}];return r.a.createElement("div",{className:t.root},r.a.createElement(Je.a,{position:"static"},r.a.createElement(He.a,null,r.a.createElement(ne.a,{edge:"start",className:t.menuButton,color:"inherit",onClick:a},r.a.createElement(Fe.a,null)),r.a.createElement(b.a,{variant:"h6",className:t.title},"News"),r.a.createElement($e,{optionsList:n,displayComponent:r.a.createElement(H.a,{className:t.avatar},JSON.parse(localStorage.user).username[0].toUpperCase())}))))}}]),t}(r.a.Component),Xe={logout:function(){return function(e){localStorage.removeItem("JWTToken"),localStorage.removeItem("user"),delete _.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},toggleSideNav:qe},Ze=Object(w.b)(null,Xe)(Object(k.a)((function(e){return{root:{flexGrow:1,"margin-bottom":"25px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},avatar:{"background-color":"rgb(0, 188, 212)"}}}))(Qe)),et=a(219),tt=a(152),at=a(153),nt=a(211),rt=a(212),ot=a(206),ct=a(207),st=a(208),it=a(209),lt=a(210),pt=[{name:"Home",icon:r.a.createElement(ot.a,null),link:"/"},{name:"Profile",icon:r.a.createElement(ct.a,null),link:"/profile"},{name:"People",icon:r.a.createElement(st.a,null),link:"/"},{name:"Setting",icon:r.a.createElement(it.a,null),link:"/"},{name:"Feedback",icon:r.a.createElement(lt.a,null),link:"/"}],ut=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.sideNavOpen,n=e.toggleSideNav;return r.a.createElement(et.a,{anchor:"left",open:a,onClose:n},r.a.createElement(tt.a,null,pt.map((function(e){return r.a.createElement(at.a,{className:t.item,component:s.b,to:e.link,button:!0,key:e.name,onClick:n},r.a.createElement(nt.a,null,e.icon),r.a.createElement(rt.a,{primary:e.name}))}))))}}]),t}(r.a.Component),mt={toggleSideNav:qe},dt=Object(w.b)((function(e){return{sideNavOpen:e.UI.sideNavOpen}}),mt)(Object(k.a)({item:{width:"250px"}})(ut)),ht=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ze,null),r.a.createElement(dt,null))}}]),t}(r.a.Component),gt=a(44),ft=a.n(gt),Et=a(55),bt=a.n(Et),Ot=a(213),yt=a(214),vt=a(215),jt=a(216),Nt=a(99),St=a.n(Nt),xt=a(100),Ct=a.n(xt),kt=a(101),wt=a.n(kt),Tt=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.postId,o=this.props.comment,c=o.author,s=o.authorId,i=o.content,l=o.createdAt,p=o._id,u=[{text:"Edit",action:function(){}},{text:"Delete",action:function(){return e.props.deleteComment(n,p)}}];return r.a.createElement(Ot.a,{key:p,className:a.card},r.a.createElement(yt.a,{avatar:r.a.createElement(H.a,{className:a.avatar},c[0].toUpperCase()),title:c,subheader:ft()(l).fromNow(),action:s===JSON.parse(localStorage.user)._id?r.a.createElement($e,{optionsList:u,displayComponent:r.a.createElement(ye.a,{className:a.moreVertIcon})}):"",className:a.commentPadding}),r.a.createElement(vt.a,{className:a.commentPadding},r.a.createElement(b.a,{variant:"body2",component:"p"},i)))}}]),t}(r.a.Component),_t={editComment:function(e,t,a){return function(n){var r=Ge.getState().data.posts,o=r.map((function(e){return e._id})).indexOf(e),c=r[o].comments.map((function(e){return e._id})).indexOf(t);r[o].comments[c].content=a.content,n({type:"EDIT_COMMENT",payload:r}),_.a.put("/api/post/".concat(e,"/comments"),a,{params:{id:t}}).then((function(e){}))}},deleteComment:function(e,t){return function(a){var n=Ge.getState().data.posts,r=n.map((function(e){return e._id})).indexOf(e),o=n[r].comments.map((function(e){return e._id})).indexOf(t);n[r].comments.splice(o,1),n[r].commentCount-=1,a({type:"DELETE_COMMENT",payload:n}),_.a.delete("/api/post/".concat(e,"/comments"),{params:{id:t}}).then((function(e){}))}}},Pt=Object(w.b)(null,_t)(Object(k.a)({card:{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)","box-shadow":"none"},avatar:{"background-color":"rgb(0, 188, 212)",width:"30px",height:"30px","font-size":"0.95rem"},moreVertIcon:{"font-size":"1.25rem"},commentPadding:{padding:"4px 10px 4px 10px"}})(Tt)),It=a(149),Dt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({content:e.target.value})},a.state={content:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.author,o=t.postId;return r.a.createElement("div",null,r.a.createElement("div",{className:a.header},r.a.createElement(H.a,{className:a.avatar},n[0].toUpperCase()),r.a.createElement(E.a,{className:a.commentField,margin:"dense",placeholder:"Leave a comment",multiline:!0,rows:2,rowsMax:4,onChange:this.handleChange})),r.a.createElement("div",{className:a.actions},r.a.createElement(O.a,{color:"primary",onClick:function(){return e.props.addComment(o,{content:e.state.content})}},"Post")))}}]),t}(r.a.Component),Ut={addComment:function(e,t){return function(a){_.a.post("/api/post/".concat(e,"/comments"),t).then((function(t){var n=Ge.getState().data.posts,r=n.map((function(e){return e._id})).indexOf(e);n[r].comments.unshift(t.data.comment),n[r].commentCount+=1,a({type:"ADD_COMMENT",payload:n})}))}}},At=Object(w.b)(null,Ut)(Object(It.a)({header:{"border-top":"1px solid #cccccc",display:"flex","align-items":"center",padding:"8px 8px 8px 8px"},commentField:{width:"500px"},avatar:{"background-color":"rgb(0, 188, 212)",width:"30px",height:"30px","font-size":"0.95rem","margin-right":"15px"},actions:{display:"flex","justify-content":"flex-end",padding:"8px 8px 8px 8px"}})(Dt)),Lt=function(e){return function(t){var a=Ge.getState().data.posts,n=a.map((function(e){return e._id})).indexOf(e);a[n].likedByUser=!0,a[n].likeCount+=1,t({type:"LIKE_POST",payload:a}),_.a.post("/api/post/".concat(e,"/likes")).then((function(e){}))}},Rt=function(e){return function(t){var a=Ge.getState().data.posts,n=a.map((function(e){return e._id})).indexOf(e);a[n].likedByUser=!1,a[n].likeCount-=1,t({type:"UNLIKE_POST",payload:a}),_.a.delete("/api/post/".concat(e,"/likes")).then((function(e){}))}},Mt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleComments=function(e){a.setState({commentLoading:!0}),a.props.getComments(e,(function(){a.setState({commentLoading:!1})}))},a.openPostEditor=function(){a.setState({openPostEditor:!0})},a.closePostEditor=function(){a.setState({openPostEditor:!1})},a.handleUpdate=function(e){var t={content:e};a.props.editPost(a.props.post._id,t,(function(){a.closePostEditor()}))},a.state={commentLoading:!1,openPostEditor:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.UIloading,o=t.post,c=t.likeStatus,s=t.likePost,i=t.unlikePost,l=t.comments,p=t.commentCount,u=[{text:"Edit post",action:this.openPostEditor},{text:"Delete post",action:function(){return e.props.deletePost(o._id)}},{text:"Disable share",action:function(){}},{text:"Disable comment",action:function(){}}];return ft.a.extend(bt.a),r.a.createElement(Ot.a,{elevation:4,key:o._id,className:a.card},r.a.createElement(yt.a,{avatar:r.a.createElement(H.a,{className:a.avatar},o.author[0].toUpperCase()),title:o.author,subheader:ft()(o.createdAt).fromNow(),action:o.authorId===JSON.parse(localStorage.user)._id?r.a.createElement($e,{optionsList:u,displayComponent:r.a.createElement(ye.a,null)}):""}),r.a.createElement(vt.a,null,r.a.createElement(b.a,{variant:"body2",component:"p"},o.content)),r.a.createElement(jt.a,{className:a.action},r.a.createElement("div",null,r.a.createElement(ne.a,{title:"Like",onClick:c?function(){return i(o._id)}:function(){return s(o._id)}},r.a.createElement(St.a,{className:c?a.liked:""})),r.a.createElement(b.a,{variant:"caption",className:a.number},o.likeCount)),r.a.createElement("div",null,r.a.createElement(ne.a,{title:"Comment",onClick:function(){return e.handleComments(o._id)}},r.a.createElement(Ct.a,null)),r.a.createElement(b.a,{variant:"caption",className:a.number},p)),r.a.createElement(ne.a,{title:"Share"},r.a.createElement(wt.a,null))),l?r.a.createElement("div",null,r.a.createElement("div",{className:a.comments},l.map((function(e){return r.a.createElement(Pt,{key:e._id,comment:e,postId:o._id})}))),r.a.createElement(At,{author:o.author,postId:o._id})):this.state.commentLoading?r.a.createElement(C.a,{size:34,className:a.loading}):"",r.a.createElement(Ne,{loading:n,open:this.state.openPostEditor,closeDialog:this.closePostEditor,handleUpload:this.handleUpdate,mode:"Update"}))}}]),t}(r.a.Component),Gt={likePost:Lt,unlikePost:Rt,getComments:function(e,t){return function(a){_.a.get("/api/post/".concat(e,"/comments")).then((function(n){var r=Ge.getState().data.posts,o=r.map((function(e){return e._id})).indexOf(e);r[o].comments=n.data,a({type:"SET_COMMENT",payload:r}),t()}))}},editPost:function(e,t,a){return function(n){n({type:"LOADING_UI"}),_.a.put("/api/post/".concat(e),t).then((function(t){var r=Ge.getState().data.posts,o=r.map((function(e){return e._id})).indexOf(e);r[o]=t.data.post,n({type:"EDIT_POST",payload:r}),n({type:"STOP_LOADING_UI"}),a()}))}},deletePost:function(e){return function(t){var a=Ge.getState().data.posts,n=a.map((function(e){return e._id})).indexOf(e);a.splice(n,1),t({type:"DELETE_POST",payload:a}),_.a.delete("/api/post/".concat(e)).then((function(e){}))}}},zt=Object(w.b)((function(e){return{UIloading:e.UI.loading}}),Gt)(Object(k.a)({card:{width:"600px",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)","margin-top":"25px","margin-bottom":"25px"},avatar:{"background-color":"rgb(0, 188, 212)"},action:{display:"flex","justify-content":"space-around"},liked:{color:"rgb(0, 188, 212)"},number:{position:"relative",right:"6px"},comments:{"border-top":"1px solid #cccccc","max-height":"500px","overflow-y":"auto","overflow-x":"hidden"},loading:{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)"}})(Mt)),Bt=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this.props.data,t=e.posts,a=e.loading,n=this.props,o=n.classes;n.likePost,n.unlikePost;return ft.a.extend(bt.a),r.a.createElement("div",null,r.a.createElement(ht,null),r.a.createElement(Ke,null),a?r.a.createElement(C.a,{size:100,className:o.loading}):t.map((function(e){return r.a.createElement(zt,{key:e._id,post:e,likeStatus:e.likedByUser,comments:e.comments,commentCount:e.commentCount})})))}}]),t}(r.a.Component),Kt={getPosts:function(){return function(e){e({type:"LOADING_DATA"}),_.a.get("/api/posts",{params:{lastDate:new Date,limit:10}}).then((function(t){localStorage.userId;e({type:"SET_MANY_POSTS",payload:t.data})})).catch((function(t){e({type:"SET_DATA_ERROR",payload:t.response.data})}))}},likePost:Lt,unlikePost:Rt},Jt=Object(w.b)((function(e){return{data:e.data}}),Kt)(Object(k.a)({loading:{position:"relative",left:"50%","margin-top":"200px",transform:"translate(-50%, 0%)"}})(Bt)),Ht=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.user),t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ht,null),r.a.createElement("div",{className:t.background}),r.a.createElement("div",{className:t.container},r.a.createElement(H.a,{className:t.avatar},e.username[0].toUpperCase())))}}]),t}(r.a.Component),Wt=Object(k.a)({background:{width:"100%",height:"500px","background-image":"url('/assets/images/windlife-background.jpg')","background-size":"cover","background-position":"center center",opacity:"0.95"},container:{position:"relative",top:"-100px"},avatar:{"background-color":"rgb(0, 188, 212)",width:"90px",height:"90px","font-size":"0.95rem"}})(Ht),Ft=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.verify(e)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI,n=a.loading,o=a.errors,c=a.message.message;return n?r.a.createElement(C.a,{size:100,className:t.progress}):o.message?r.a.createElement(f.a,{elevation:6,className:t.paper},r.a.createElement(b.a,{variant:"h5",className:t.error},"Error"),r.a.createElement(b.a,{variant:"subtitle1"},o.message)):r.a.createElement(f.a,{elevation:6,className:t.paper},r.a.createElement(b.a,{variant:"h5",className:t.success},c),r.a.createElement(b.a,{variant:"subtitle1"},"Now you can login and connect with other people"))}}]),t}(r.a.Component),Vt={verify:function(e){return function(t){t({type:"LOADING_UI"}),_.a.get("/api/verify/".concat(e)).then((function(e){t({type:"SET_RESPONSE_MESSAGE",payload:e.data}),t({type:"STOP_LOADING_UI"})})).catch((function(e){t({type:"SET_ERROR",payload:e.response.data})}))}}},Yt=Object(w.b)((function(e){return{UI:e.UI}}),Vt)(Object(k.a)({paper:{padding:"25px 25px 75px 25px",position:"relative",left:"50%","margin-top":"50px",transform:"translate(-50%, 0%)",display:"table"},error:{color:"red","font-weight":"bold","margin-bottom":"25px"},success:{color:"green","font-weight":"bold","margin-bottom":"25px"},progress:{position:"relative",left:"50%","margin-top":"200px",transform:"translate(-50%, 0%)"}})(Ft)),$t=Object(w.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(W.a)(e,["component","authenticated"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(i.a,{to:"/login"}):r.a.createElement(t,e)}}))})),qt=localStorage.JWTToken;qt&&(Ge.dispatch({type:"SET_AUTHENTICATED"}),Ge.dispatch({type:"SET_USER_DATA",payload:JSON.parse(localStorage.user)}),_.a.defaults.headers.common.Authorization=qt);var Qt=function(){return r.a.createElement(w.a,{store:Ge},r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/login",component:L}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:K}),r.a.createElement(i.b,{exact:!0,path:"/verify/:id",component:Yt}),r.a.createElement($t,{exact:!0,path:"/",component:Jt}),r.a.createElement($t,{exact:!0,path:"/profile",component:Wt}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Qt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.948316e3.chunk.js.map