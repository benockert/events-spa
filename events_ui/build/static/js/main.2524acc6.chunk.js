(this["webpackJsonpevents-spa"]=this["webpackJsonpevents-spa"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(17),a=n.n(c),i=(n(66),n(139)),o=n(6),j=(n(67),n(14)),l=n(137),u=n(141),d=n(142),b=n(138),h=n(59),p=n(140),O=n(9),x=n(7),v=n(24),f=n.n(v),m=n(51),g=n(22);function y(){var e=localStorage.getItem("session");return e?(e=JSON.parse(e)).user_id:null}function w(e){var t=Object.assign({},e,{time:Date.now()});localStorage.setItem("session",JSON.stringify(t))}function C(){localStorage.removeItem("session")}function _(){var e=localStorage.getItem("session");if(!e)return null;e=JSON.parse(e);return Date.now()-e.time<36e5?e:null}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"session/set":return w(t.data),t.data;case"session/clear":return C(),null;default:return e}}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/set":return t.data;default:return e}}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"posts/set":return t.data;default:return e}}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"comments/set":return t.data;default:return e}}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"responses/set":return t.data;default:return e}}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"session/set":return null;case"error/set":return t.data;default:return e}}var E=Object(g.c)((function(e,t){console.log("root_reducer",e,t);var n=Object(g.b)({session:S,users:N,posts:I,responses:T,comments:L,error:D});return console.log("state",n(e,t)),n(e,t)})),k="http://events-server.benockert.site/api/v1";function G(e){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(f.a.mark((function e(t){var n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+t,{});case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return z.apply(this,arguments)}function z(){return(z=Object(m.a)(f.a.mark((function e(t,n){var s,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},console.log("to be sent",s),e.next=4,fetch(k+t,s);case 4:return r=e.sent,console.log("response",r),e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){G("/users").then((function(e){return E.dispatch({type:"users/set",data:e})}))}function J(){G("/posts").then((function(e){return E.dispatch({type:"posts/set",data:e})}))}function Z(){G("/responses").then((function(e){return E.dispatch({type:"responses/set",data:e})}))}function U(){G("/comments").then((function(e){return E.dispatch({type:"comments/set",data:e})}))}var B=n(1);function $(e){var t=e.session;return Object(B.jsxs)("p",{children:["Logged in as ",t.name,Object(B.jsx)(l.a,{variant:"outline-primary",onClick:function(e){e.preventDefault(),E.dispatch({type:"session/clear"})},children:"Logout"})]})}function R(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(j.a)(c,2),i=a[0],o=a[1];return Object(B.jsx)("div",{children:Object(B.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),function(e,t){A("/session",{email:e,password:t}).then((function(e){if(console.log("login response",e),e.session){var t={type:"session/set",data:e.session};E.dispatch(t)}else if(e.error){var n={type:"error/set",data:e.error};E.dispatch(n)}}))}(n,i)},inline:!0,children:[Object(B.jsx)(u.a.Control,{name:"name",type:"text",onChange:function(e){return r(e.target.value)},value:n}),Object(B.jsx)(u.a.Control,{name:"password",type:"password",onChange:function(e){return o(e.target.value)},value:i}),Object(B.jsx)(l.a,{variant:"outline-primary",type:"submit",children:"Login"}),Object(B.jsx)(d.a,{variant:"link",children:Object(B.jsx)(H,{to:"/users/new",children:"Register"})})]})})}var Y=Object(x.b)((function(e){return{session:e.session}}))((function(e){var t=e.session;return t?Object(B.jsx)($,{session:t}):Object(B.jsx)(R,{})}));function H(e){var t=e.to,n=e.children;return Object(B.jsx)(d.a.Item,{children:Object(B.jsx)(O.c,{to:t,exact:!0,className:"nav-link",activeClassName:"active",children:n})})}var M=Object(x.b)((function(e){return{error:e.error}}))((function(e){var t=e.error,n=null;return t&&(n=Object(B.jsx)(b.a,{children:Object(B.jsx)(h.a,{children:Object(B.jsx)(p.a,{variant:"danger",children:t})})})),Object(B.jsxs)("div",{children:[Object(B.jsxs)(b.a,{children:[Object(B.jsx)(h.a,{children:Object(B.jsxs)(d.a,{variant:"pills",children:[Object(B.jsx)(H,{to:"/",children:"Feed"}),Object(B.jsx)(H,{to:"/users",children:"Users"})]})}),Object(B.jsx)(h.a,{xs:8,children:Object(B.jsx)(Y,{})})]}),n]})})),q=n(143);function K(e){var t=e.post,n="/events/"+t.id;return Object(B.jsx)(h.a,{children:Object(B.jsx)(q.a,{style:{width:"18rem"},children:Object(B.jsxs)(q.a.Body,{children:[Object(B.jsx)(q.a.Title,{children:t.title}),Object(B.jsxs)(q.a.Text,{children:[t.description,Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsxs)("i",{children:["Hosted by ",t.user.name]})]}),Object(B.jsx)(O.b,{to:n,children:"Show Event"})]})})})}var Q=Object(x.b)((function(e){return{posts:e.posts}}))((function(e){var t=e.posts.map((function(e){return Object(B.jsx)(K,{post:e},e.id)}));return Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:"Your Events Feed"}),Object(B.jsx)("p",{children:Object(B.jsx)(O.b,{to:"/events/new",children:"New Event"})}),Object(B.jsx)(b.a,{children:t})]})}));function V(e){var t=Object(o.f)(),n=Object(s.useState)({body:""}),r=Object(j.a)(n,2),c=r[0],a=r[1];return Object(B.jsx)(b.a,{children:Object(B.jsx)(h.a,{children:Object(B.jsxs)(u.a,{onSubmit:function(n){n.preventDefault(),c.user_id=y(),c.post_id=e.post_id;var s="/events/"+c.post_id;(function(e){return console.log(e),A("/comments",{comment:e})})(c).then((function(){U(),t.push(s)}))},children:[Object(B.jsx)(u.a.Group,{children:Object(B.jsx)(u.a.Control,{type:"text",placeholder:"Type a new comment here...",onChange:function(e){return function(e){var t=Object.assign({},c);t.body=e.target.value,a(t)}(e)},value:c.body||""})}),Object(B.jsx)(l.a,{variant:"primary",type:"submit",disabled:""===c.body,children:"Comment"})]})})})}function W(e){var t=e.comment;return Object(B.jsx)(h.a,{children:Object(B.jsx)(q.a,{style:{width:"45rem"},children:Object(B.jsx)(q.a.Body,{children:Object(B.jsxs)(q.a.Text,{children:[t.body,Object(B.jsx)("br",{}),Object(B.jsxs)("i",{children:["Posted by ",t.user.name]})]})})})})}var X=Object(x.b)((function(e){return{comments:e.comments}}))((function(e){var t=e.comments,n=localStorage.getItem("post_id"),s=t.filter((function(e){return e.post_id==n})).map((function(e){return Object(B.jsx)(W,{comment:e},e.id)}));return Object(B.jsx)("div",{children:Object(B.jsx)(b.a,{children:s})})}));function ee(e){var t=Object(o.f)(),n=Object(s.useState)({response:"No"}),r=Object(j.a)(n,2),c=r[0],a=r[1];return Object(B.jsx)(b.a,{children:Object(B.jsx)(u.a,{onSubmit:function(n){n.preventDefault(),c.user_id=y(),c.post_id=e.post_id;var s="/events/"+c.post_id;(function(e){return console.log("response",e),A("/responses",{response:e})})(c).then((function(){Z(),t.push(s)}))},children:Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)("b",{children:"Update your response:  "}),Object(B.jsx)(l.a,{variant:"outline-success",type:"submit",onClick:function(){return a({response:"Yes"})},children:"Yes"}),Object(B.jsx)(l.a,{variant:"outline-danger",type:"submit",onClick:function(){return a({response:"No"})},children:"No"})]})})})}var te=n(144);function ne(e){var t=e.response;return Object(B.jsxs)(te.a.Item,{children:[t.user.email,": ",Object(B.jsx)("b",{children:t.response})]})}var se=Object(x.b)((function(e){return{responses:e.responses}}))((function(e){var t=e.responses,n=localStorage.getItem("post_id"),s=t.filter((function(e){return e.post_id==n})).map((function(e){return Object(B.jsx)(ne,{response:e},e.id)}));return Object(B.jsx)("div",{children:Object(B.jsx)(te.a,{variant:"flush",children:s})})}));var re=Object(x.b)((function(e){return{posts:e.posts}}))((function(e){var t=e.posts,n=Object(o.g)().pathname.split("/")[2],s=t[n-1];return localStorage.setItem("post_id",s.id),Object(B.jsx)(b.a,{children:Object(B.jsxs)(h.a,{children:[Object(B.jsxs)("h2",{children:["Show Event #",n]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("b",{children:"Title: "}),s.title]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("b",{children:"Date: "}),s.date]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("b",{children:"Description: "}),s.description]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("b",{children:"Invitees: "}),s.invitees]}),Object(B.jsx)("h3",{children:"Responses"}),Object(B.jsx)(ee,{post_id:s.id}),Object(B.jsx)(se,{}),Object(B.jsx)("h3",{children:"Comments"}),Object(B.jsx)(V,{post_id:s.id}),Object(B.jsx)(X,{})]})})})),ce=n(36),ae=n.n(ce);var ie=Object(x.b)((function(){return{}}))((function(){var e=Object(o.f)(),t=Object(s.useState)({title:"",date:"",description:"",invitees:""}),n=Object(j.a)(t,2),r=n[0],c=n[1];function a(e,t){var n=Object.assign({},r);n[e]=t.target.value,n.invitee_msg=function(e){for(var t=!0,n=e.split(", "),s=0;s<n.length;s++)t=t&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n[s]);return t?"":"One or more invitee emails are not valid."}(n.invitees),c(n)}return Object(B.jsx)(b.a,{children:Object(B.jsxs)(h.a,{children:[Object(B.jsx)("h2",{children:"New Event"}),Object(B.jsxs)(u.a,{onSubmit:function(t){t.preventDefault(),console.log(t),console.log(r);var n=ae()(r,["title","date","description","invitees"]);n.user_id=y(),function(e){return console.log(e),A("/posts",{post:e})}(n).then((function(){J(),e.push("/")}))},children:[Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Title"}),Object(B.jsx)(u.a.Control,{as:"input",rows:4,onChange:function(e){return a("title",e)},value:r.title}),Object(B.jsx)(u.a.Text,{className:"text-muted",children:"Enter a name for your event."})]}),Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Date"}),Object(B.jsx)(u.a.Control,{as:"input",type:"date",rows:2,onChange:function(e){return a("date",e)},value:r.date}),Object(B.jsx)(u.a.Text,{className:"text-muted",children:"Enter a date for your event."})]}),Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Description"}),Object(B.jsx)(u.a.Control,{as:"textarea",rows:4,onChange:function(e){return a("description",e)},value:r.description}),Object(B.jsx)(u.a.Text,{className:"text-muted",children:"Enter a description for your event."})]}),Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Invitees"}),Object(B.jsx)(u.a.Control,{as:"input",rows:4,placeholder:"email1@example.com, email2@example.com",onChange:function(e){return a("invitees",e)},value:r.invitees}),Object(B.jsx)(u.a.Text,{className:"text-muted",children:"Enter the emails of the invitees for your event, separated by commas."}),Object(B.jsx)("p",{children:r.invitee_msg})]}),Object(B.jsx)(l.a,{variant:"primary",type:"submit",disabled:""!==r.invitee_msg||function(e){return""===e.title||""===e.date||""===e.description}(r),children:"Create"})]})]})})}));var oe=Object(x.b)((function(e){return{users:e.users}}))((function(e){var t=e.users.map((function(e){return Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:e.name}),Object(B.jsx)("td",{children:"[Edit]"})]},e.id)}));return Object(B.jsx)("div",{children:Object(B.jsx)(b.a,{children:Object(B.jsxs)(h.a,{children:[Object(B.jsx)("h2",{children:"List Users"}),Object(B.jsx)("p",{children:Object(B.jsx)(O.b,{to:"/users/new",children:"New User"})}),Object(B.jsxs)("table",{className:"table table-striped",children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Name"}),Object(B.jsx)("th",{children:"Actions"})]})}),Object(B.jsx)("tbody",{children:t})]})]})})})}));var je=Object(x.b)((function(){return{}}))((function(){var e=Object(o.f)(),t=Object(s.useState)({name:"",pass1:"",pass2:""}),n=Object(j.a)(t,2),r=n[0],c=n[1];function a(e,t){var n,s,a,i=Object.assign({},r);i[e]=t.target.value,i.password=i.pass1,i.pass_msg=(n=i.pass1,s=i.pass2,n!==s?"Passwords don't match.":n.length<8?"Password is too short.":""),i.email_msg=(a=i.email,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(a)?"":"Invalid email address."),c(i)}return Object(B.jsx)(b.a,{children:Object(B.jsxs)(h.a,{children:[Object(B.jsx)("h2",{children:"New User"}),Object(B.jsxs)(u.a,{onSubmit:function(t){t.preventDefault(),console.log(r),function(e){return A("/users",{user:e})}(ae()(r,["name","email","password"])).then((function(){F(),e.push("/users")}))},children:[Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Name"}),Object(B.jsx)(u.a.Control,{type:"text",onChange:function(e){return a("name",e)},value:r.name||""})]}),Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Email"}),Object(B.jsx)(u.a.Control,{type:"text",onChange:function(e){return a("email",e)},value:r.email||""}),Object(B.jsx)("p",{children:r.email_msg})]}),Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Password"}),Object(B.jsx)(u.a.Control,{type:"password",onChange:function(e){return a("pass1",e)},value:r.pass1||""})]}),Object(B.jsxs)(u.a.Group,{children:[Object(B.jsx)(u.a.Label,{children:"Confirm Password"}),Object(B.jsx)(u.a.Control,{type:"password",onChange:function(e){return a("pass2",e)},value:r.pass2||""}),Object(B.jsx)("p",{children:r.pass_msg})]}),Object(B.jsx)(l.a,{variant:"primary",type:"submit",disabled:""!==r.pass_msg||""!==r.email_msg,children:"Register"})]})]})})}));var le=function(){return Object(B.jsxs)(i.a,{children:[Object(B.jsx)(M,{}),Object(B.jsxs)(o.c,{children:[Object(B.jsx)(o.a,{path:"/",exact:!0,children:Object(B.jsx)(Q,{})}),Object(B.jsx)(o.a,{path:"/users",exact:!0,children:Object(B.jsx)(oe,{})}),Object(B.jsx)(o.a,{path:"/users/new",exact:!0,children:Object(B.jsx)(je,{})}),Object(B.jsx)(o.a,{path:"/events/new",exact:!0,children:Object(B.jsx)(ie,{})}),Object(B.jsx)(o.a,{path:"/events/:id",children:Object(B.jsx)(re,{})})]})]})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(x.a,{store:E,children:Object(B.jsx)(O.a,{children:Object(B.jsx)(le,{})})})}),document.getElementById("root")),F(),J(),Z(),U(),ue()},66:function(e,t,n){},67:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.2524acc6.chunk.js.map