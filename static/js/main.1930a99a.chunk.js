(this["webpackJsonpgoit-react-hw-02-phonebook-old"]=this["webpackJsonpgoit-react-hw-02-phonebook-old"]||[]).push([[0],{21:function(t){t.exports=JSON.parse('[{"name":"Adrian","phone":"11","id":"1"},{"name":"Jacob Mercer","phone":"22","id":"2"},{"name":"Charles de Batz de Castelmore d\'Artagnan","phone":"33","id":"3"}]')},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a,c,r,i,o=n(1),s=n.n(o),l=n(20),j=n.n(l),d=n(5),u=n(26),b=n(9),h=n(10),O=n(13),f=n(12),p=n(41),x=n(21),m=n(3),v=n(4),g=v.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n"]))),C=n(25),y=n.n(C),S=v.a.div(c||(c=Object(m.a)(["\n  background-color: aqua;\n"]))),w=n(0),A=function(t){var e=t.filter,n=t.onFilter,a=y()(n,300);return Object(w.jsxs)(S,{children:[Object(w.jsx)("h3",{children:"Find contacts by name"}),Object(w.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){return a(t.target.value.toLowerCase().trim())}})]})};A.defaultProps={filter:""};var k,D,z,F,J,N,q,L=v.a.section(r||(r=Object(m.a)(["\n  margin-top: 60px;\n  text-align: center;\n"]))),M=v.a.h2(i||(i=Object(m.a)(["\n  color:red;\n"]))),Z=function(t){var e=t.title,n=t.children;return Object(w.jsxs)(L,{children:[Object(w.jsx)(M,{children:e}),n]})},B=n(8),P=v.a.form(k||(k=Object(m.a)(["\n\n"]))),$=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",phone:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(B.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetState()},t.resetState=function(){return t.setState({name:"",phone:""})},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(P,{onSubmit:this.handleSubmit,children:[Object(w.jsxs)("label",{children:["Name",Object(w.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(w.jsxs)("label",{children:["Number",Object(w.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.phone,onChange:this.handleChange})]}),Object(w.jsx)(V,{type:"submit",children:"Add"})]})}}]),n}(o.Component),E=n(16),G=n(17),H=v.a.li(D||(D=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n"]))),I=v.a.div(z||(z=Object(m.a)([""]))),K=v.a.span(F||(F=Object(m.a)(["\n  margin-right: 16px;\n"]))),Q=v.a.span(J||(J=Object(m.a)(["\n  margin-right: 16px;\n"]))),R=function(t){var e=t.contact,n=t.phone,a=t.id,c=t.handleDel;return Object(w.jsxs)(H,{children:[Object(w.jsxs)(I,{children:[Object(w.jsxs)(K,{children:[Object(w.jsx)(E.a,{icon:G.b}),e]}),Object(w.jsxs)(Q,{children:[Object(w.jsx)(E.a,{icon:G.a}),n]})]}),Object(w.jsx)(V,{type:"button",onClick:function(){return c(a)},children:"Delete"})]})},T=v.a.ul(N||(N=Object(m.a)(["\n  margin: 0;\n  padding: 0;\n"]))),U=function(t){var e=t.contacts,n=t.handleDel;return Object(w.jsx)(T,{children:e.map((function(t){return Object(w.jsx)(R,{id:t.id,contact:t.name,phone:t.phone,handleDel:n},t.id)}))})},V=v.a.button(q||(q=Object(m.a)(["\n  cursor: pointer;\n"]))),W=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:x,filter:""},t.addNewContact=function(e){t.setState((function(n){if(!t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))){var a={contacts:[].concat(Object(u.a)(n.contacts),[Object(d.a)(Object(d.a)({},e),{},{id:Object(p.a)()})])};return Object(d.a)(Object(d.a)({},n),a)}alert("".concat(e.name," is already in contacts!"))}))},t.setFilter=function(e){t.setState((function(t){return Object(d.a)(Object(d.a)({},t),{},{filter:e})}))},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState((function(t){return Object(d.a)(Object(d.a)({},t),{},{contacts:n})}))},t.filterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter)}))},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.filterContacts();return Object(w.jsxs)("div",{children:[Object(w.jsx)(Z,{title:"Phonebook",children:Object(w.jsx)(g,{children:Object(w.jsx)($,{onSubmit:this.addNewContact})})}),Object(w.jsx)(Z,{title:"Contacts",children:Object(w.jsxs)(g,{children:[Object(w.jsx)(A,{filter:this.state.filter,onFilter:this.setFilter}),Object(w.jsx)(U,{contacts:t,handleDel:this.deleteContact})]})})]})}}]),n}(o.Component);n(37),n(38);j.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1930a99a.chunk.js.map