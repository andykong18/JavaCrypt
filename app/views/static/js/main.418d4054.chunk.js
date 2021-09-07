(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(56),r=n.n(s),c=n(15),o=n(4),i=n(5),l=n(12),d=n(8),u=n(7),h=n(3),j=(n(64),n(65),n(17)),m=n.n(j),b="http://localhost:8080/api/auth/",g=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"login",value:function(e,t){return m.a.post(b+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return m.a.post(b+"signup",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),O=n(23),v=n.n(O),f=n(18),p=n.n(f),x=n(24),N=n.n(x),k=n(0),y=function(e){if(!e)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(l.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(l.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(l.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(i.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?g.login(this.state.username,this.state.password).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:n})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"col-md-12",children:Object(k.jsxs)("div",{className:"card card-container",children:[Object(k.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(k.jsxs)(v.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)(p.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[y]})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)(p.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[y]})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(k.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(k.jsx)("span",{children:"Login"})]})}),this.state.message&&Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.message})}),Object(k.jsx)(N.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(a.Component),C=n(57),S=function(e){if(!e)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},U=function(e){if(!Object(C.isEmail)(e))return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},B=function(e){if(e.length<3||e.length>20)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},E=function(e){if(e.length<6||e.length>40)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleRegister=a.handleRegister.bind(Object(l.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(l.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(l.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(l.a)(a)),a.state={username:"",email:"",password:"",successful:!1,message:""},a}return Object(i.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&g.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:n})}))}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"col-md-12",children:Object(k.jsxs)("div",{className:"card card-container",children:[Object(k.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(k.jsxs)(v.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)(p.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[S,B]})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"email",children:"Email"}),Object(k.jsx)(p.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[S,U]})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)(p.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[S,E]})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(k.jsx)(N.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(a.Component);function P(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var T="http://localhost:8080/api/test/",A=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getPublicContent",value:function(){return m.a.get(T+"all")}},{key:"getUserBoard",value:function(){return m.a.get(T+"user",{headers:P()})}},{key:"getModeratorBoard",value:function(){return m.a.get(T+"mod",{headers:P()})}},{key:"getAdminBoard",value:function(){return m.a.get(T+"admin",{headers:P()})}}]),e}()),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;A.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),R=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{username:""}},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=g.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return Object(k.jsx)(h.a,{to:this.state.redirect});var e=this.state.currentUser;return Object(k.jsx)("div",{className:"container",children:this.state.userReady?Object(k.jsxs)("div",{children:[Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsxs)("h3",{children:[Object(k.jsx)("strong",{children:e.username})," Profile"]})}),Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(k.jsx)("strong",{children:"Authorities:"}),Object(k.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(k.jsx)("li",{children:e},t)}))})]}):null})}}]),n}(a.Component),D={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},I=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;A.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&D.dispatch("logout")}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;A.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&D.dispatch("logout")}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;A.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&D.dispatch("logout")}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(l.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=g.getCurrentUser();t&&this.setState({currentUser:t,showModeratorBoard:t.roles.includes("ROLE_MODERATOR"),showAdminBoard:t.roles.includes("ROLE_ADMIN")}),D.on("logout",(function(){e.logOut()}))}},{key:"componentWillUnmount",value:function(){D.remove("logout")}},{key:"logOut",value:function(){g.logout(),this.setState({showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0})}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,a=e.showAdminBoard;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(k.jsx)(c.b,{to:"/",className:"navbar-brand",children:"JavaCrypt"}),Object(k.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),a&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(k.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(k.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(k.jsx)("div",{className:"container mt-3",children:Object(k.jsxs)(h.d,{children:[Object(k.jsx)(h.b,{exact:!0,path:["/","/home"],component:L}),Object(k.jsx)(h.b,{exact:!0,path:"/login",component:w}),Object(k.jsx)(h.b,{exact:!0,path:"/register",component:M}),Object(k.jsx)(h.b,{exact:!0,path:"/profile",component:R}),Object(k.jsx)(h.b,{path:"/user",component:I}),Object(k.jsx)(h.b,{path:"/mod",component:J}),Object(k.jsx)(h.b,{path:"/admin",component:_})]})})]})}}]),n}(a.Component);r.a.render(Object(k.jsx)(c.a,{children:Object(k.jsx)(F,{})}),document.getElementById("root"))},65:function(e,t,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.418d4054.chunk.js.map