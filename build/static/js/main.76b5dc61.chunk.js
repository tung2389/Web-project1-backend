(this["webpackJsonpweb-project"]=this["webpackJsonpweb-project"]||[]).push([[0],{115:function(e,t,a){e.exports=a(147)},120:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=(a(73),a(53)),s=a(41),l=a(10),m=a(7),u=a(11),p=a(12),d=a(13),h=a(8),g=a(26),b=a(55),f=a(214),E=a(37),O=a(188),v=a(85),y=a.n(v),j=a(88),C=a.n(j),x=a(84),k=a.n(x),S=a(189),N=a(4),w=(a(120),a(16)),P=a(15),T=a.n(P),D=function(e){var t="Bearer ".concat(e);localStorage.setItem("JWTToken",t),T.a.defaults.headers.common.Authorization=t},L=function(e){localStorage.setItem("user",JSON.stringify(e))},_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={email:"",password:"",loading:!1,errors:{}},a.handleKeyChange=a.handleKeyChange.bind(Object(g.a)(a)),a.handleLogin=a.handleLogin.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleKeyChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e=this;this.setState({loading:!0});var t={email:this.state.email,password:this.state.password};this.props.login(t,this.props.history).then((function(){return e.setState({loading:!1})})).catch((function(t){e.setState({errors:t.response.data,loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.loading,o=a.errors;return r.a.createElement(b.a,{className:t.form,elevation:4},r.a.createElement("div",{className:"flexContainer"},r.a.createElement(k.a,{className:t.forwardIcon}),r.a.createElement("h1",{className:"login"},"Login")),r.a.createElement("div",{className:"flexContainer"},r.a.createElement(y.a,null),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Email",name:"email",helperText:o.email,error:!!o.email,className:t.input,disabled:n})),r.a.createElement("br",null),r.a.createElement("div",{className:"flexContainer"},r.a.createElement(C.a,null),r.a.createElement(f.a,{type:"password",onChange:this.handleKeyChange,label:"Password",name:"password",helperText:o.password,error:!!o.password,className:t.input,disabled:n})),o.general?r.a.createElement(E.a,{variant:"body2",className:t.generalerrors},o.general):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{color:"primary",variant:"contained",className:t.button,onClick:this.handleLogin,disabled:n},n?r.a.createElement(S.a,{size:24}):"Login"),r.a.createElement("div",{className:"ask"},"Not have an account yet ?",r.a.createElement(O.a,{className:t.signup,onClick:function(){return e.props.history.push("/signup")}},"Sign up")))}}]),t}(r.a.Component),I={login:function(e,t){return function(a){return T.a.post("/api/login",e).then((function(e){D(e.data.jwtToken),L(e.data.user),a({type:"SET_USER_DATA",payload:e.data.user}),a({type:"SET_AUTHENTICATED"}),t.push("/")}))}}},U=Object(w.b)(null,I)(Object(N.a)({input:{"margin-left":"15px",width:"300px"},forwardIcon:{"font-size":"35px"},form:{display:"table",padding:"60px 60px 0px 60px",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)"},button:{width:"346px","margin-bottom":"30px"},generalerrors:{color:"red","margin-top":"10px"},signup:{color:"blue"}})(_)),A=(a(143),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loginPage"},r.a.createElement("img",{src:"/assets/icons/icon2.png",className:"connectIcon"}),r.a.createElement("div",{className:"name"},"WINDLIFE NETWORK"),r.a.createElement(U,{history:this.props.history}))}}]),t}(r.a.Component)),M=a(89),K=a.n(M),z=(a(144),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={email:"",username:"",password:"",confirmPassword:"",loading:"",message:"",errors:{}},a.handleKeyChange=a.handleKeyChange.bind(Object(g.a)(a)),a.handleSignup=a.handleSignup.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleKeyChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSignup",value:function(){var e=this;this.setState({loading:!0});var t={email:this.state.email,username:this.state.username,password:this.state.password,confirmPassword:this.state.confirmPassword};T.a.post("/api/signup",t).then((function(t){e.setState({message:t.data,loading:!1})})).catch((function(t){e.setState({errors:t.response.data,loading:!1})}))}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.loading,n=t.message,o=t.errors;return r.a.createElement(b.a,{className:e.form,elevation:6},r.a.createElement("div",{className:"flexContainer"},r.a.createElement(K.a,{className:e.personAddIcon}),r.a.createElement("h1",{className:"signup"},"Signup")),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Email",name:"email",helperText:o.email,error:!!o.email,className:e.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Username",name:"username",helperText:o.username,error:!!o.username,className:e.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{type:"password",onChange:this.handleKeyChange,label:"Password",name:"password",helperText:o.password,error:!!o.password,className:e.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{type:"password",onChange:this.handleKeyChange,label:"Repeat your password",name:"confirmPassword",helperText:o.confirmPassword,error:!!o.confirmPassword,className:e.input,disabled:a}),n?r.a.createElement(E.a,{variant:"body2",className:e.message},n):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"contained",className:e.button,onClick:this.handleSignup,disabled:a},a?r.a.createElement(S.a,{size:24}):"Sign up"))}}]),t}(r.a.Component)),B=Object(N.a)({input:{width:"300px","margin-top":"15px"},personAddIcon:{"font-size":"35px"},button:{width:"346px",color:"white","background-color":"lightskyblue","margin-bottom":"30px","&:hover":{"background-color":"royalblue"}},form:{display:"table",padding:"30px"},message:{color:"green","margin-top":"10px"}})(z),H=(a(145),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"signupPage"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"description"},"Signup to join our network"),r.a.createElement(B,null)))}}]),t}(r.a.Component)),J=a(192),F=a(193),V=a(190),R=a(90),W=a.n(R),G=a(194),Y=a(150),$=a(152),q=a(191),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={anchorEl:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.optionsList,a=e.displayComponent;return r.a.createElement("div",null,r.a.createElement(V.a,{onClick:this.handleClick},a),r.a.createElement(Y.a,{open:Boolean(this.state.anchorEl),anchorEl:this.state.anchorEl,onClose:this.handleClose,anchorOrigin:{vertical:"bottom",horizontal:"center"}},r.a.createElement(b.a,{elevation:2},r.a.createElement($.a,{id:"simple-menu",autoFocusItem:Boolean(this.state.anchorEl)},t.map((function(e){return r.a.createElement(q.a,{key:e.text,onClick:e.action},e.text)}))))))}}]),t}(r.a.Component),X=function(){return function(e){e({type:"TOGGLE_SIDE_NAV"})}},Z=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.toggleSideNav,n=e.siteTitle,o=[{text:"Log out",action:this.props.logout}];return r.a.createElement("div",{className:t.root},r.a.createElement(J.a,{position:"static"},r.a.createElement(F.a,{className:t.toolBar},r.a.createElement(V.a,{edge:"start",className:t.menuButton,color:"inherit",onClick:a},r.a.createElement(W.a,null)),r.a.createElement(E.a,{variant:"h6",className:t.title},n),r.a.createElement(Q,{optionsList:o,displayComponent:r.a.createElement(G.a,{className:t.avatar},JSON.parse(localStorage.user).username[0].toUpperCase())}))))}}]),t}(r.a.Component),ee={logout:function(){return function(e){localStorage.removeItem("JWTToken"),localStorage.removeItem("user"),delete T.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},toggleSideNav:X},te=Object(w.b)(null,ee)(Object(N.a)((function(e){return{root:{flexGrow:1,"margin-bottom":"25px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},avatar:{"background-color":"rgb(0, 188, 212)"},toolBar:{maxHeight:62,minHeight:60}}}))(Z)),ae=a(215),ne=a(153),re=a(154),oe=a(200),ie=a(201),ce=a(195),se=a(196),le=a(197),me=a(198),ue=a(199),pe=[{name:"Home",icon:r.a.createElement(ce.a,null),link:"/"},{name:"Profile",icon:r.a.createElement(se.a,null),link:"/profile"},{name:"People",icon:r.a.createElement(le.a,null),link:"/"},{name:"Setting",icon:r.a.createElement(me.a,null),link:"/"},{name:"Feedback",icon:r.a.createElement(ue.a,null),link:"/"}],de=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.sideNavOpen,n=e.toggleSideNav;return r.a.createElement(ae.a,{anchor:"left",open:a,onClose:n},r.a.createElement(ne.a,null,pe.map((function(e){return r.a.createElement(re.a,{className:t.item,component:c.b,to:e.link,button:!0,key:e.name,onClick:n},r.a.createElement(oe.a,null,e.icon),r.a.createElement(ie.a,{primary:e.name}))}))))}}]),t}(r.a.Component),he={toggleSideNav:X},ge=Object(w.b)((function(e){return{sideNavOpen:e.UI.sideNavOpen}}),he)(Object(N.a)({item:{width:"250px"}})(de)),be=function(e){var t=e.children,a=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{siteTitle:a}),r.a.createElement(ge,null),r.a.createElement("main",null,t))},fe=a(66),Ee=a(2),Oe=a(3),ve=a(92),ye=a.n(ve),je=a(94),Ce=a.n(je),xe=a(95),ke=a.n(xe),Se=a(96),Ne=a.n(Se),we=a(203),Pe=a(204),Te=a(216),De=a(205),Le=a(93),_e=a.n(Le),Ie=a(202),Ue={success:ye.a,warning:_e.a,error:Ce.a,info:ke.a},Ae=Object(Ie.a)((function(e){return{success:{backgroundColor:we.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:Pe.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function Me(e){var t=Ae(),a=e.className,n=e.message,o=e.onClose,i=e.variant,c=Object(Ee.a)(e,["className","message","onClose","variant"]),s=Ue[i];return r.a.createElement(De.a,Object.assign({className:Object(Oe.a)(t[i],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(s,{className:Object(Oe.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(V.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(Ne.a,{className:t.icon}))]},c))}function Ke(e){var t=e.open,a=e.handleClose;return r.a.createElement(Te.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:6e3,onClose:a},e.message?r.a.createElement(Me,{onClose:a,variant:"success",message:e.message}):r.a.createElement(Me,{onClose:a,variant:"error",message:e.errors.message}))}var ze=a(206),Be=a(207),He=a(208),Je=a(209),Fe=a(87),Ve=a(42),Re=a.n(Ve),We=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).openMenu=function(t){e.setState({anchorEl:t.currentTarget})},e.closeMenu=function(t){e.setState({anchorEl:null})},e.state={anchorEl:null},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{onClick:this.openMenu},r.a.createElement(Re.a,null)),r.a.createElement(Fe.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.closeMenu},r.a.createElement(q.a,null,"Disable comments"),r.a.createElement(q.a,null,"Disable sharing")))}}]),t}(r.a.Component),Ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState({postContent:e.target.value})},a.state={postContent:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.open,o=t.loading,i=t.closeDialog,c=t.handleUpdate,s=t.mode,l=t.defaultValue;return r.a.createElement(ze.a,{open:n,onClose:o?null:i},r.a.createElement("div",{className:a.dialog},r.a.createElement(Be.a,{id:"form-dialog-title"},r.a.createElement("div",{className:a.postHeader},r.a.createElement("div",{className:a.subHeader},r.a.createElement(G.a,{className:a.avatar},JSON.parse(localStorage.user).username[0].toUpperCase()),r.a.createElement("span",null,JSON.parse(localStorage.user).username)),r.a.createElement(We,null))),r.a.createElement(He.a,{className:a.fieldContainer},r.a.createElement(f.a,{autoFocus:!0,className:a.postField,margin:"dense",placeholder:"What are you thinking",multiline:!0,rows:2,rowsMax:4,onChange:this.handleChange,defaultValue:l})),r.a.createElement(Je.a,null,r.a.createElement(O.a,{onClick:function(){c(e.state.postContent)},color:"primary",disabled:o},o?r.a.createElement(S.a,{size:24}):s),r.a.createElement(O.a,{onClick:i,color:"primary",disabled:o},"Cancel"))))}}]),t}(r.a.Component),Ye=Object(N.a)({postField:{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)",width:"300px"},avatar:{"background-color":"rgb(0, 188, 212)","margin-right":"15px"},dialog:{width:"400px",height:"300px"},fieldContainer:{"overflow-y":"hidden"},postHeader:{display:"flex","justify-content":"space-between"},subHeader:{display:"flex","align-items":"center"}})(Ge),$e=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).openDialog=function(){a.setState({open:!0})},a.closeDialog=function(){a.setState({open:!1})},a.closeSnackBar=function(){a.setState({snackBarOpen:!1})},a.handleCreate=function(e){a.setState({loading:!0});var t={content:e};a.props.uploadPost(t).then((function(e){a.setState({message:e,loading:!1,snackBarOpen:!0}),a.closeDialog()})).catch((function(e){a.setState({errors:e.response.data,loading:!1,snackBarOpen:!0}),a.closeDialog()}))},a.state={open:!1,snackBarOpen:!1,loading:!1,errors:"",message:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.loading,n=t.errors,o=t.message,i=t.snackBarOpen;return r.a.createElement("div",null,r.a.createElement(fe.a,{className:e.container,onClick:this.openDialog},r.a.createElement(G.a,{className:e.avatar},JSON.parse(localStorage.user).username[0].toUpperCase()),r.a.createElement(E.a,{className:e.placeHolder},"What are you thinking")),r.a.createElement(Ye,{loading:a,open:this.state.open,closeDialog:this.closeDialog,handleUpdate:this.handleCreate,mode:"Post"}),r.a.createElement(Ke,{errors:n,message:o,open:i,handleClose:this.closeSnackBar}))}}]),t}(r.a.Component),qe={uploadPost:function(e){return function(t){return T.a.post("/api/posts",e).then((function(e){return t({type:"UPLOAD_POST",payload:e.data.post}),e.data.message}))}}},Qe=Object(w.b)(null,qe)(Object(N.a)({container:{width:"600px",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)","background-color":"white","box-shadow":"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",transition:"0.3s",padding:"20px 0px 20px 20px","justify-content":"flex-start","&:hover":{"background-color":"#d9d9d9"}},avatar:{"background-color":"rgb(0, 188, 212)","margin-right":"15px"},placeHolder:{opacity:.4}})($e)),Xe=a(44),Ze=a.n(Xe),et=a(60),tt=a.n(et),at=a(210),nt=a(211),rt=a(212),ot=a(213),it=a(97),ct=a.n(it),st=a(98),lt=a.n(st),mt=a(99),ut=a.n(mt),pt=a(148),dt=a(35);function ht(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function gt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ht(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ht(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var bt=function(e,t,a){return function(n,r){return T.a.put("/api/posts/".concat(e,"/comments/").concat(t),a).then((function(a){var o=r().data.posts;n({type:"EDIT_COMMENT",payload:o.map((function(n){return n._id===e?gt({},n,{comments:n.comments.map((function(e){return e._id===t?a.data:e}))}):n}))})}))}},ft=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState({content:e.target.value})},a.state={content:a.props.initialContent,editCommentLoading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.postId,o=t.comment,i=t.closeEditor,c=o.author,s=o.content,l=o._id,m=this.state.editCommentLoading;return r.a.createElement("div",null,r.a.createElement("div",{className:a.header},r.a.createElement(G.a,{className:a.avatar},c[0].toUpperCase()),r.a.createElement(f.a,{className:a.editField,margin:"dense",defaultValue:s,multiline:!0,rows:2,rowsMax:4,onChange:this.handleChange,disabled:m})),r.a.createElement("div",{className:a.actions},r.a.createElement(O.a,{color:"primary",onClick:function(){e.setState({editCommentLoading:!0}),e.props.editComment(n,l,{content:e.state.content}).then((function(){e.setState({editCommentLoading:!1}),i()})).catch((function(){e.setState({editCommentLoading:!1}),i()}))},disabled:m},"Update"),r.a.createElement(O.a,{color:"primary",onClick:function(){return i()},disabled:m},"Cancel")))}}]),t}(r.a.Component),Et={editComment:bt},Ot=Object(w.b)(null,Et)(Object(pt.a)({header:{"border-top":"1px solid #cccccc",display:"flex","align-items":"center",padding:"0px 8px 0px 8px"},editField:{width:"500px"},avatar:{"background-color":"rgb(0, 188, 212)",width:"30px",height:"30px","font-size":"0.95rem","margin-right":"15px"},actions:{display:"flex","justify-content":"flex-end",padding:"0px 8px 0px 8px"}})(ft)),vt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={deleteCommentLoading:!1,editMode:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.postId,o=t.comment,i=o.author,c=o.authorId,s=o.content,l=o.createdAt,m=o._id,u=[{text:"Edit",action:function(){return e.setState({editMode:!0})}},{text:"Delete",action:function(){e.setState({deleteCommentLoading:!0}),e.props.deleteComment(n,m).then((function(){})).catch((function(){e.setState({deleteCommentLoading:!1})}))}}];return this.state.editMode?r.a.createElement(Ot,{postId:n,comment:o,closeEditor:function(){return e.setState({editMode:!1})}}):r.a.createElement(at.a,{key:m,className:this.state.deleteCommentLoading?a.deleteCommentLoading:a.card},r.a.createElement(nt.a,{avatar:r.a.createElement(G.a,{className:a.avatar},i[0].toUpperCase()),title:i,subheader:Ze()(l).fromNow(),action:c!==JSON.parse(localStorage.user)._id||this.state.deleteCommentLoading?"":r.a.createElement(Q,{optionsList:u,displayComponent:r.a.createElement(Re.a,{className:a.moreVertIcon})}),className:a.commentPadding}),r.a.createElement(rt.a,{className:a.commentPadding},r.a.createElement(E.a,{variant:"body2",component:"p"},s)))}}]),t}(r.a.Component),yt={editComment:bt,deleteComment:function(e,t){return function(a,n){return T.a.delete("/api/posts/".concat(e,"/comments/").concat(t)).then((function(){var r=n().data.posts;a({type:"DELETE_COMMENT",payload:r.map((function(a){return a._id===e?gt({},a,{comments:a.comments.filter((function(e){return e._id!==t})),commentCount:a.commentCount-1}):a}))})}))}}},jt=Object(w.b)(null,yt)(Object(N.a)({card:{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)","box-shadow":"none"},avatar:{"background-color":"rgb(0, 188, 212)",width:"30px",height:"30px","font-size":"0.95rem"},moreVertIcon:{"font-size":"1.25rem"},commentPadding:{padding:"4px 10px 4px 10px"},deleteCommentLoading:{opacity:.5}})(vt)),Ct=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState({content:e.target.value})},a.state={content:"",createCommentLoading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.author,o=t.postId;return r.a.createElement("div",null,r.a.createElement("div",{className:a.header},r.a.createElement(G.a,{className:a.avatar},n[0].toUpperCase()),r.a.createElement(f.a,{className:a.commentField,margin:"dense",placeholder:"Leave a comment",multiline:!0,rows:2,rowsMax:4,onChange:this.handleChange,disabled:this.state.createCommentLoading})),r.a.createElement("div",{className:a.actions},r.a.createElement(O.a,{color:"primary",onClick:function(){e.setState({createCommentLoading:!0}),e.props.createComment(o,{content:e.state.content}).then((function(){e.setState({createCommentLoading:!1})})).catch((function(){e.setState({createCommentLoading:!1})}))},disabled:this.state.createCommentLoading},"Post")))}}]),t}(r.a.Component),xt={createComment:function(e,t){return function(a,n){return T.a.post("/api/posts/".concat(e,"/comments"),t).then((function(t){var r=n().data.posts;a({type:"CREATE_COMMENT",payload:r.map((function(a){return a._id===e?gt({},a,{comments:[t.data].concat(Object(dt.a)(a.comments)),commentCount:a.commentCount+1}):a}))})}))}}},kt=Object(w.b)(null,xt)(Object(pt.a)({header:{"border-top":"1px solid #cccccc",display:"flex","align-items":"center",padding:"8px 8px 8px 8px"},commentField:{width:"500px"},avatar:{"background-color":"rgb(0, 188, 212)",width:"30px",height:"30px","font-size":"0.95rem","margin-right":"15px"},actions:{display:"flex","justify-content":"flex-end",padding:"8px 8px 8px 8px"}})(Ct));function St(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Nt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?St(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):St(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var wt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleComments=function(e){a.setState({getCommentLoading:!0}),a.props.getComments(e).then((function(){return a.setState({getCommentLoading:!1})})).catch((function(){return a.setState({getCommentLoading:!1})}))},a.openPostEditor=function(){a.setState({openPostEditor:!0})},a.closePostEditor=function(){a.setState({openPostEditor:!1})},a.handleEdit=function(e){a.setState({editPostLoading:!0});var t={content:e};a.props.editPost(a.props.post._id,t).then((function(){a.setState({editPostLoading:!1}),a.closePostEditor()})).catch((function(){a.setState({editPostLoading:!1}),a.closePostEditor()}))},a.state={getCommentLoading:!1,openPostEditor:!1,editPostLoading:!1,likeLoading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.post,o=t.likePost,i=t.unlikePost,c=n.likedByUser,s=n.comments,l=n.commentCount,m=[{text:"Edit post",action:this.openPostEditor},{text:"Delete post",action:function(){return e.props.deletePost(n._id)}},{text:"Disable share",action:function(){}},{text:"Disable comment",action:function(){}}];return Ze.a.extend(tt.a),r.a.createElement(at.a,{elevation:4,key:n._id,className:a.card},r.a.createElement(nt.a,{avatar:r.a.createElement(G.a,{className:a.avatar},n.author[0].toUpperCase()),title:n.author,subheader:Ze()(n.createdAt).fromNow(),action:n.authorId===JSON.parse(localStorage.user)._id?r.a.createElement(Q,{optionsList:m,displayComponent:r.a.createElement(Re.a,null)}):""}),r.a.createElement(rt.a,null,r.a.createElement(E.a,{variant:"body2",component:"p"},n.content)),r.a.createElement(ot.a,{className:a.action},r.a.createElement("div",null,r.a.createElement(V.a,{title:"Like",onClick:c?function(){i(n._id,(function(){return e.setState({likeLoading:!0})})).then((function(t){e.setState({likeLoading:!1})})).catch((function(t){e.setState({likeLoading:!1})}))}:function(){o(n._id,(function(){return e.setState({likeLoading:!0})})).then((function(t){e.setState({likeLoading:!1})})).catch((function(t){e.setState({likeLoading:!1})}))},disabled:this.state.likeLoading},r.a.createElement(ct.a,{className:c?a.liked:""})),r.a.createElement(E.a,{variant:"caption",className:a.number},n.likeCount)),r.a.createElement("div",null,r.a.createElement(V.a,{title:"Comment",onClick:function(){return e.handleComments(n._id)}},r.a.createElement(lt.a,null)),r.a.createElement(E.a,{variant:"caption",className:a.number},l)),r.a.createElement(V.a,{title:"Share"},r.a.createElement(ut.a,null))),s?r.a.createElement("div",null,r.a.createElement("div",{className:a.comments},s.map((function(e){return r.a.createElement(jt,{key:e._id,comment:e,postId:n._id})}))),r.a.createElement(kt,{author:n.author,postId:n._id})):this.state.getCommentLoading?r.a.createElement(S.a,{size:34,className:a.loading}):"",r.a.createElement(Ye,{loading:this.state.editPostLoading,open:this.state.openPostEditor,closeDialog:this.closePostEditor,handleUpdate:this.handleEdit,mode:"Update",defaultValue:n.content}))}}]),t}(r.a.Component),Pt={likePost:function(e,t){return function(a,n){return a({type:"LIKE_POST",payload:n().data.posts.map((function(t){return t._id===e?Nt({},t,{likedByUser:!0,likeCount:t.likeCount+1}):t}))}),t(),T.a.post("/api/posts/".concat(e,"/likes"))}},unlikePost:function(e,t){return function(a,n){return a({type:"UNLIKE_POST",payload:n().data.posts.map((function(t){return t._id===e?Nt({},t,{likedByUser:!1,likeCount:t.likeCount-1}):t}))}),t(),T.a.delete("/api/posts/".concat(e,"/likes"))}},getComments:function(e){return function(t,a){return T.a.get("/api/posts/".concat(e,"/comments")).then((function(n){var r=a().data.posts;t({type:"SET_COMMENT",payload:r.map((function(t){return t._id===e?gt({},t,{comments:n.data}):t}))})}))}},editPost:function(e,t){return function(a,n){return T.a.put("/api/posts/".concat(e),t).then((function(t){var r=n().data.posts;a({type:"EDIT_POST",payload:r.map((function(a){return a._id===e?t.data:a}))})}))}},deletePost:function(e){return function(t,a){return T.a.delete("/api/posts/".concat(e)).then((function(){var n=a().data.posts;t({type:"DELETE_POST",payload:n.filter((function(t){return t._id!==e}))})}))}}},Tt=Object(w.b)(null,Pt)(Object(N.a)({card:{width:"600px",position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)","margin-top":"25px","margin-bottom":"25px"},avatar:{"background-color":"rgb(0, 188, 212)"},action:{display:"flex","justify-content":"space-around"},liked:{color:"rgb(0, 188, 212)"},number:{position:"relative",right:"6px"},comments:{"border-top":"1px solid #cccccc","max-height":"500px","overflow-y":"auto","overflow-x":"hidden"},loading:{position:"relative",left:"50%",top:"50%",transform:"translate(-50%, 0%)"}})(wt)),Dt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.getPosts().then((function(){e.setState({loading:!1})})).catch((function(){e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.props.data.posts,t=this.props.classes,a=this.state.loading;return Ze.a.extend(tt.a),r.a.createElement(be,{siteTitle:"News"},r.a.createElement(Qe,null),a?r.a.createElement(S.a,{size:100,className:t.loading}):e.map((function(e){return r.a.createElement(Tt,{key:e._id,post:e})})))}}]),t}(r.a.Component),Lt={getPosts:function(){return function(e){return T.a.get("/api/posts",{params:{lastDate:new Date,limit:10}}).then((function(t){localStorage.userId;e({type:"SET_MANY_POSTS",payload:t.data})}))}}},_t=Object(w.b)((function(e){return{data:e.data}}),Lt)(Object(N.a)({loading:{position:"relative",left:"50%","margin-top":"200px",transform:"translate(-50%, 0%)"}})(Dt)),It=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={username:"",birthDate:"",company:"",introduction:"",location:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleKeyChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.loading,n=e.open,o=e.closeDialog;return r.a.createElement(ze.a,{open:n,onClose:o},r.a.createElement("div",{className:t.dialog},r.a.createElement(b.a,{elevation:4},r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Username",name:"username",className:t.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Date of birth",name:"birthDate",className:t.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Company",name:"company",className:t.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Introduction",name:"introduction",className:t.input,disabled:a}),r.a.createElement("br",null),r.a.createElement(f.a,{onChange:this.handleKeyChange,label:"Location",name:"location",className:t.input,disabled:a}),r.a.createElement("br",null))))}}]),t}(n.Component),Ut=Object(N.a)({dialog:{width:"400px",height:"300px"},input:{width:"300px","margin-top":"15px"}})(It),At=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).openDialog=function(){a.setState({open:!0})},a.closeDialog=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.user),t=this.props.classes;return r.a.createElement(be,{siteTitle:"Profile"},r.a.createElement("div",{className:t.background}),r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.basicinfo},r.a.createElement(G.a,{className:t.avatar},e.username[0].toUpperCase()),r.a.createElement("div",{className:t.name},e.username)),r.a.createElement(O.a,{className:t.button,onClick:this.openDialog},"Edit profile")),r.a.createElement(Ut,{open:this.state.open,closeDialog:this.closeDialog}))}}]),t}(r.a.Component),Mt=Object(N.a)({background:{width:"100%",height:"500px","background-image":"url('/assets/images/windlife-background.jpg')","background-size":"cover","background-position":"center center",opacity:"0.95"},basicinfo:{display:"flex","align-items":"center"},avatar:{"background-color":"rgb(0, 188, 212)",width:"90px",height:"90px","font-size":"2rem"},name:{"margin-left":"30px",color:"white","font-size":"40px","border-bottom":"6px solid #eae9e9"},button:{color:"black","margin-right":"30px",background:"white",height:"60px","&:hover":{backgroundColor:"#e0e0e0"}},container:{position:"relative",top:"-100px",display:"flex","justify-content":"space-between"}})(At),Kt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,message:"",errors:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.setState({loading:!0}),T.a.get("/api/verify/".concat(t)).then((function(t){e.setState({message:t.data,loading:!1})})).catch((function(t){e.setState({errors:t.response.data,loading:!1})}))}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.loading,n=t.message,o=t.errors;return a?r.a.createElement(S.a,{size:100,className:e.progress}):o.message?r.a.createElement(b.a,{elevation:6,className:e.paper},r.a.createElement(E.a,{variant:"h5",className:e.error},"Error"),r.a.createElement(E.a,{variant:"subtitle1"},o.message)):r.a.createElement(b.a,{elevation:6,className:e.paper},r.a.createElement(E.a,{variant:"h5",className:e.success},n),r.a.createElement(E.a,{variant:"subtitle1"},"Now you can login and connect with other people"))}}]),t}(r.a.Component),zt=Object(N.a)({paper:{padding:"25px 25px 75px 25px",position:"relative",left:"50%","margin-top":"50px",transform:"translate(-50%, 0%)",display:"table"},error:{color:"red","font-weight":"bold","margin-bottom":"25px"},success:{color:"green","font-weight":"bold","margin-bottom":"25px"},progress:{position:"relative",left:"50%","margin-top":"200px",transform:"translate(-50%, 0%)"}})(Kt),Bt=Object(w.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(Ee.a)(e,["component","authenticated"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(s.a,{to:"/login"}):r.a.createElement(t,e)}}))})),Ht=a(50),Jt=a(100);function Ft(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Vt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ft(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ft(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Rt={authenticated:!1,user:{}};function Wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Gt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Wt(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Wt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Yt={posts:[],post:[],errors:{},loading:!1};function $t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function qt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$t(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$t(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Qt={sideNavOpen:!1},Xt=[Jt.a],Zt=Ht.a.apply(void 0,Xt),ea=Object(Ht.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Vt({},e,{authenticated:!0});case"SET_USER_DATA":return Vt({},e,{user:t.payload});case"SET_UNAUTHENTICATED":return Vt({},e,{authenticated:!1});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPLOAD_POST":return Gt({},e,{posts:[t.payload].concat(Object(dt.a)(e.posts))});case"SET_MANY_POSTS":return Gt({},e,{posts:t.payload,loading:!1});case"SET_POST":return Gt({},e,{post:t.payload,loading:!1});case"LIKE_POST":case"UNLIKE_POST":case"EDIT_POST":case"DELETE_POST":case"SET_COMMENT":case"CREATE_COMMENT":case"DELETE_COMMENT":case"EDIT_COMMENT":return Gt({},e,{posts:t.payload});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SIDE_NAV":return qt({},e,{sideNavOpen:!e.sideNavOpen});default:return e}}}),ta=Object(Ht.d)(ea,{},Zt),aa=localStorage.JWTToken;aa&&(ta.dispatch({type:"SET_AUTHENTICATED"}),ta.dispatch({type:"SET_USER_DATA",payload:JSON.parse(localStorage.user)}),T.a.defaults.headers.common.Authorization=aa);var na=function(){return r.a.createElement(w.a,{store:ta},r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",component:A}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:H}),r.a.createElement(s.b,{exact:!0,path:"/verify/:id",component:zt}),r.a.createElement(Bt,{exact:!0,path:"/",component:_t}),r.a.createElement(Bt,{exact:!0,path:"/profile",component:Mt}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(na,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.76b5dc61.chunk.js.map