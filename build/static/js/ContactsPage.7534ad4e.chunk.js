(this.webpackJsonpPhone_book=this.webpackJsonpPhone_book||[]).push([[2],{121:function(e,t,n){"use strict";n.r(t);var a,c,r,o,s=n(0),i=n(15),u=n(22),l=n(32),b=n(23),d=n.n(b),j=(n(25),n(16)),p="https://connections-api.herokuapp.com",f=function(e){return function(){var t=Object(l.a)(Object(u.a)().mark((function t(n){var a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(j.a.addContactRequest()),t.prev=1,t.next=4,d.a.post("".concat(p,"/contacts"),e);case 4:a=t.sent,n(j.a.addContactSuccess(a.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(j.a.addContactError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(l.a)(Object(u.a)().mark((function t(n){return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(j.a.deleteContactRequest()),t.prev=1,t.next=4,d.a.delete("".concat(p,"/contacts/").concat(e));case 4:n(j.a.deleteContactSuccess(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(j.a.deleteContactError(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(l.a)(Object(u.a)().mark((function e(t,n){var a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j.a.fetchContactsRequest),e.prev=1,e.next=4,d.a.get("".concat(p,"/contacts"));case 4:a=e.sent,t(j.a.fetchContactsSuccess(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.a.fetchContactsError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()},x=n(31),O=function(e){return e.contacts.items},v=function(e){return e.contacts.filter},C={getContacts:O,getFilter:v,getVisibleContacts:Object(x.a)([O,v],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}))},g=n(27),w=n(18),k=n(19),y=k.a.form(a||(a=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  input,\n  button {\n    margin: 5px 0;\n  }\n"]))),A=n(120),L=n(118),z=n(1),E=function(e){var t=e.addContact,n=e.contacts,a=Object(s.useState)(""),c=Object(g.a)(a,2),r=c[0],o=c[1],i=Object(s.useState)(""),u=Object(g.a)(i,2),l=u[0],b=u[1],d=function(e){var a;e.preventDefault(),a={name:r,number:l},n.some((function(e){return e.name.toLocaleLowerCase()===a.name.toLocaleLowerCase()}))?alert("".concat(a.name," is already in contacts.")):t(a),o(""),b("")},j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}};return Object(z.jsxs)(y,{onSubmit:d,method:"post",children:[Object(z.jsxs)(A.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(z.jsx)(A.a.Label,{children:"Contact's name:"}),Object(z.jsx)(A.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:r,placeholder:"Enter contact's name ..."})]}),Object(z.jsxs)(A.a.Group,{className:"mb-3",children:[Object(z.jsx)(A.a.Label,{children:"Phone number:"}),Object(z.jsx)(A.a.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:l,placeholder:"Enter phone number ...",autoComplete:"on"})]}),r&&Object(z.jsx)(L.a,{variant:"warning",type:"button",onClick:d,children:"Add contact"})]})},F=function(){var e=Object(i.c)((function(e){return C.getContacts(e)})),t=Object(i.b)();return Object(z.jsx)(E,{addContact:function(e){t(f(e))},contacts:e})},N=k.a.ul(c||(c=Object(w.a)(["\n  list-style: none;\n\n  .wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .text {\n    margin: 10px;\n  }\n\n  button {\n    height: 25px;\n    margin-right: 20px;\n    padding: 0;\n    width: 60px;\n    height: 30px;\n    \n    &:hover .text {\n      color: red;\n    }\n  }\n"]))),q=function(e){var t=e.visibleContacts,n=e.deleteContact,a=function(e){return n(e.target.id)};return Object(z.jsx)(N,{children:t.map((function(e){var t=e.name,n=e.number,c=e.id;return Object(z.jsx)("li",{children:Object(z.jsxs)("div",{className:"wrapper",children:[Object(z.jsxs)("p",{className:"text",children:[t," ",n]}),Object(z.jsx)(L.a,{variant:"danger",type:"button",id:c,onClick:a,children:"delete"})]})},c)}))})},S=function(){var e=Object(i.b)();Object(s.useEffect)((function(){e(m())}),[e]);var t=Object(i.c)((function(e){return C.getVisibleContacts(e)}));return Object(z.jsx)(q,{visibleContacts:t,deleteContact:function(t){return e(h(t))}})},Z=k.a.div(r||(r=Object(w.a)(["\n  text-align: center;\n"]))),B=function(e){var t=e.onChangeFilter,n=e.filter;return Object(z.jsx)(Z,{children:Object(z.jsxs)(A.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(z.jsx)(A.a.Label,{children:"Find contacts by name: "}),Object(z.jsx)(A.a.Control,{value:n,onChange:function(e){var n=e.target.value;t(n)},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"for example: Rose ..."}),Object(z.jsx)(A.a.Text,{className:"text-muted",children:"Here you can enter data for search."})]})})},J=function(){var e=Object(i.c)((function(e){return C.getFilter(e)})),t=Object(i.b)();return Object(z.jsx)(B,{filter:e,onChangeFilter:function(e){t(j.a.changeFilter(e))}})},P=k.a.section(o||(o=Object(w.a)(["\n  margin-top: 10px;\n  margin-left: 10px;\n  border: 2px solid lightgrey;\n  border-radius: 10px;\n\n\n  .title {\n    text-align: center;\n  }\n"]))),R=function(e){var t=e.title,n=e.children;return Object(z.jsxs)(P,{children:[Object(z.jsx)("h2",{className:"title",children:t}),n]})};t.default=function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(R,{title:"Phonebook",children:Object(z.jsx)(F,{})}),Object(z.jsxs)(R,{title:"Contacts",children:[Object(z.jsx)(J,{}),Object(z.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=ContactsPage.7534ad4e.chunk.js.map