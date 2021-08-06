(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__oP88A",checkbox:"TodoItem_checkbox__YpSbg",textInput:"TodoItem_textInput__DQOLA","input-submit":"TodoItem_input-submit__3QUT9"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(24),a=n.n(i),s=n(22),r=n(11),l=n(9),u=n(17),d=n.n(u),j=n(16),b=n(2),h=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],i=n[1],a=e.todo,s=a.completed,r=a.id,u=a.title,h={},p={};return o?h.display="none":p.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(b.jsxs)("li",{className:d.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){i(!0)},style:h,children:[Object(b.jsx)("input",{type:"checkbox",className:d.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(b.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(b.jsx)(j.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(b.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:u})]}),Object(b.jsx)("input",{type:"text",style:p,className:d.a.textInput,value:u,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},p=function(e){return Object(b.jsx)("ul",{children:e.todos.map((function(t){return Object(b.jsx)(h,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},x=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},O=n(15),f=n(0),m=function(e){var t=Object(c.useState)({title:""}),n=Object(l.a)(t,2),o=n[0],i=n[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){i(Object(r.a)(Object(r.a)({},o),{},Object(O.a)({},e.target.name,e.target.value)))}}),Object(b.jsx)(f.b.Provider,{value:{color:"darkcyan",style:{fontSize:"20px",color:"#ff0000"},className:"submit-iconn"},children:Object(b.jsx)("button",{className:"input-submit",children:Object(b.jsx)(j.a,{})})})]})},g=n(41),v=n(3),y=n(8),N=function(){var e=Object(v.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return console.log(Object(v.f)()),Object(b.jsxs)("div",{className:"main__content",children:[Object(b.jsx)("h1",{children:n}),Object(b.jsx)("p",{children:c})]})},_=function(){console.log(Object(v.g)());var e=Object(v.g)(),t=e.url,n=e.path;return Object(b.jsxs)("div",{className:"about__content",children:[Object(b.jsxs)("ul",{className:"about__list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(y.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(b.jsx)("li",{children:Object(b.jsx)(y.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(b.jsx)(v.a,{path:"".concat(n,"/:slug"),children:Object(b.jsx)(N,{})})]})},S=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},k=n(26),w=n(27),T=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(b.jsx)(k.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(b.jsx)(w.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(b.jsx)("ul",{className:"menuNav ".concat(n?"showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(y.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})},A=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{}),Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(x,{}),Object(b.jsx)(m,{addTodoProps:function(e){var t={id:Object(g.a)(),title:e,completed:!1};o([].concat(Object(s.a)(n),[t]))}}),Object(b.jsx)(p,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(s.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(b.jsx)(v.a,{path:"/about",children:Object(b.jsx)(_,{})}),Object(b.jsx)(v.a,{path:"*",children:Object(b.jsx)(S,{})})]})]})};n(38);a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(y.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d8e44664.chunk.js.map