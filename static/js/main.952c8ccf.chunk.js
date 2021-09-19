(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(t){t.exports=JSON.parse('[{"name":"Adrian","phone":"11","id":"1"},{"name":"Jacob Mercer","phone":"22","id":"2"},{"name":"Charles de Batz de Castelmore d\'Artagnan","phone":"33","id":"3"}]')},32:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a,c,r,i,o,s,l,j,d,b,u,h=n(1),O=n.n(h),p=n(20),f=n.n(p),x=(n(31),n(32),n(5)),m=n(26),v=n(9),g=n(10),C=n(13),y=n(12),S=n(41),w=n(21),A=n(3),k=n(4),D=k.a.div(a||(a=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n"]))),z=n(25),F=n.n(z),J=k.a.div(c||(c=Object(A.a)(["\n  background-color: aqua;\n"]))),N=n(0),q=function(t){var e=F()(t.onFilter,300);return Object(N.jsxs)(J,{children:[Object(N.jsx)("h3",{children:"Find contacts by name"}),Object(N.jsx)("input",{type:"text",name:"filter",value:t.filter,onChange:function(t){e(t.target.value.toLowerCase().trim())}})]})},L=k.a.section(r||(r=Object(A.a)(["\n  margin-top: 60px;\n  text-align: center;\n"]))),M=k.a.h2(i||(i=Object(A.a)(["\n  color:red;\n"]))),Z=function(t){var e=t.title,n=t.children;return Object(N.jsxs)(L,{children:[Object(N.jsx)(M,{children:e}),n]})},B=n(8),P=k.a.form(o||(o=Object(A.a)(["\n\n"]))),$=function(t){Object(C.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",phone:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(B.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetState()},t.resetState=function(){t.setState({name:"",phone:""})},t}return Object(g.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(P,{onSubmit:this.handleSubmit,children:[Object(N.jsxs)("label",{children:["Name",Object(N.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(N.jsxs)("label",{children:["Number",Object(N.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.phone,onChange:this.handleChange})]}),Object(N.jsx)(V,{type:"submit",children:"Add"})]})}}]),n}(h.Component),E=n(16),G=n(17),H=k.a.li(s||(s=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n"]))),I=k.a.div(l||(l=Object(A.a)([""]))),K=k.a.span(j||(j=Object(A.a)(["\n  margin-right: 16px;\n"]))),Q=k.a.span(d||(d=Object(A.a)(["\n  margin-right: 16px;\n"]))),R=function(t){return Object(N.jsxs)(H,{children:[Object(N.jsxs)(I,{children:[Object(N.jsxs)(K,{children:[Object(N.jsx)(E.a,{icon:G.b}),t.contact]}),Object(N.jsxs)(Q,{children:[Object(N.jsx)(E.a,{icon:G.a}),t.phone]})]}),Object(N.jsx)(V,{type:"button",onClick:function(){return t.handleDel(t.id)},children:"Delete"})]})},T=k.a.ul(b||(b=Object(A.a)(["\n  margin: 0;\n  padding: 0;\n"]))),U=function(t){var e=t.contacts,n=t.handleDel;return Object(N.jsx)(T,{children:e.map((function(t){return Object(N.jsx)(R,{id:t.id,contact:t.name,phone:t.phone,handleDel:n},t.id)}))})},V=k.a.button(u||(u=Object(A.a)(["\n  cursor: pointer;\n"]))),W=function(t){Object(C.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:w,filter:""},t.addNewContact=function(e){t.setState((function(n){if(!t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))){var a={contacts:[].concat(Object(m.a)(n.contacts),[Object(x.a)(Object(x.a)({},e),{},{id:Object(S.a)()})])};return Object(x.a)(Object(x.a)({},n),a)}alert("".concat(e.name," is already in contacts!"))}))},t.setFilter=function(e){t.setState((function(t){return Object(x.a)(Object(x.a)({},t),{},{filter:e})}))},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState((function(t){return Object(x.a)(Object(x.a)({},t),{},{contacts:n})}))},t.filterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter)}))},t}return Object(g.a)(n,[{key:"render",value:function(){var t=this.filterContacts();return Object(N.jsxs)("div",{children:[Object(N.jsx)(Z,{title:"Phonebook",children:Object(N.jsx)(D,{children:Object(N.jsx)($,{onSubmit:this.addNewContact})})}),Object(N.jsx)(Z,{title:"Contacts",children:Object(N.jsxs)(D,{children:[Object(N.jsx)(q,{contacts:this.state.contacts,onFilter:this.setFilter}),Object(N.jsx)(U,{contacts:t,handleDel:this.deleteContact})]})})]})}}]),n}(h.Component);f.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(W,{})}),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.952c8ccf.chunk.js.map