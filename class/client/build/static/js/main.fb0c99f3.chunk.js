(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(43),i=n.n(r),o=(n(49),n(50),n(21)),l=n(14),s=n.n(l),j=n(13),d=n.n(j),u=n(4),b=n(90),h=n(91),O=n(92),x=n(18),m=n(19),f=n(2),p=function(e){var t=e.datos,n=e.setDatos,c=Object(u.f)();return Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Acciones"}),Object(f.jsx)("th",{children:"Nombre"}),Object(f.jsx)("th",{children:"Tipo"}),Object(f.jsx)("th",{children:"Color"}),Object(f.jsx)("th",{children:"Tama\xf1o"})]})}),Object(f.jsx)("tbody",{children:t&&t.map((function(e,a){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsxs)(O.a,{color:"primary",style:{margin:"2px"},onClick:function(t){return n=e._id,void c.push("/ver/".concat(n));var n},children:[Object(f.jsx)(x.a,{icon:m.a})," Ver"]}),Object(f.jsxs)(O.a,{color:"secondary",style:{margin:"2px"},onClick:function(t){return n=e._id,void c.push("/modificar/".concat(n));var n},children:[Object(f.jsx)(x.a,{icon:m.b})," Editar"]}),Object(f.jsx)(O.a,{color:"danger",style:{margin:"2px"},onClick:function(c){return a=e._id,void d.a.fire({icon:"warning",title:"Eminar animal",text:"\xbfEsta seguro quedesea eliminar el animal?",showCancelButton:!0}).then((function(e){e.value&&s.a.delete(" http://localhost:8000/api/animales/delete/".concat(a)).then((function(e){var c=t.filter((function(e){return e._id!==a}));n(c)})).catch((function(e){return d.a.fire({icon:"error",title:"error",text:"Error al eliminar el animal"})}))}));var a},children:Object(f.jsx)(x.a,{icon:m.d})})]}),Object(f.jsx)("td",{children:e.nombre}),Object(f.jsx)("td",{children:e.tipo}),Object(f.jsx)("td",{children:e.color}),Object(f.jsx)("td",{children:e.tamanho})]},a)}))})]})})},v=n(24),g=n(31),y=n(93),C=n(94),E=n(95),D=n(96),S=n(97),k=n(98),A=function(e){var t=Object(u.f)(),n=e.ver,a=e.crear,r=e.modificar,i=Object(c.useRef)(null),l=Object(c.useRef)(null),j=Object(c.useRef)(null),h=Object(c.useRef)(null),x=Object(u.g)().id,m=Object(c.useState)({nombre:"",tipo:"",color:"",tamanho:""}),p=Object(o.a)(m,2),A=p[0],T=p[1],q=Object(c.useState)([]),w=Object(o.a)(q,2),N=(w[0],w[1]),_=e.datos,F=e.setDatos;Object(c.useEffect)((function(){s.a.get("http://localhost:8000/api/animales").then((function(e){return N(e.data.data)})).catch((function(e){return d.a.fire({icon:"error",title:"Error",text:"No se encuentra el tipo de animal requerido!"})})),x&&s.a.get("http://localhost:8000/api/animales/".concat(x)).then((function(e){return T(e.data.data)})).catch((function(e){return d.a.fire({icon:"error",title:"Error",text:"No se encuentra el tipo de animal con el id: ".concat(x," requerido")})}))}),[x]);var M=function(e){t.push("/")},P=function(e){var t=e.target,n=t.name,c=t.value;T(Object(g.a)(Object(g.a)({},A),{},Object(v.a)({},n,c)))};return Object(f.jsxs)(y.a,{children:[Object(f.jsx)(b.a,{children:Object(f.jsx)("h1",{children:n?"Ver ".concat(A.nombre):r?"Editar ".concat(A.nombre):"Nuevo Animal"})}),Object(f.jsxs)(C.a,{onSubmit:function(e){e.preventDefault(),x?s.a.put("http://localhost:8000/api/animales/update/".concat(x),A).then((function(e){var t=_.findIndex((function(e){return e._id===x}));_.splice(t,1,A),F(_),M()})).catch((function(e){return d.a.fire({icon:"error",title:"Error",text:"Ha ocurrido un problema al actualizar los datos del animal"})})):s.a.post("http://localhost:8000/api/animales/new",A).then((function(e){e.data.data?(M(),F(_.concat([e.data.data]))):d.a.fire({icon:"error",title:"Error al crear los datos",text:e.data.error.message})})).catch((function(e){return d.a.fire({icon:"error",title:"Error",text:"Ha ocurrido un problema al crear un nuevo animal usuario"})})),i.current.value="",l.current.value="",j.current.value="",h.current.value=""},children:[Object(f.jsxs)(b.a,{form:!0,children:[Object(f.jsx)(E.a,{md:6,children:Object(f.jsxs)(D.a,{children:[Object(f.jsx)(S.a,{for:"nombre",children:"Nombre del Animal"}),Object(f.jsx)(k.a,{ref:i,type:"text",name:"nombre",id:"nombre",value:A.nombre,onChange:P,disabled:n})]})}),Object(f.jsx)(E.a,{md:6,children:Object(f.jsxs)(D.a,{children:[Object(f.jsx)(S.a,{for:"tipo",children:"Tipo del Animal"}),Object(f.jsx)(k.a,{ref:l,type:"text",name:"tipo",id:"tipo",value:A.tipo,onChange:P,disabled:n})]})})]}),Object(f.jsxs)(b.a,{form:!0,children:[Object(f.jsx)(E.a,{md:6,children:Object(f.jsxs)(D.a,{children:[Object(f.jsx)(S.a,{for:"color",children:"Color del Animal"}),Object(f.jsx)(k.a,{ref:j,type:"text",name:"color",id:"color",value:A.color,onChange:P,disabled:n})]})}),Object(f.jsx)(E.a,{md:6,children:Object(f.jsxs)(D.a,{children:[Object(f.jsx)(S.a,{for:"tam",children:"Tama\xf1o del Animal"}),Object(f.jsxs)(k.a,{ref:h,type:"select",name:"tamanho",id:"tam",value:A.tamanho,onChange:P,disabled:n,children:[Object(f.jsx)("option",{children:"Seleccione"}),Object(f.jsx)("option",{value:"Pequeho",children:"Peque\xf1o"}),Object(f.jsx)("option",{value:"Mediano",children:"Mediano"}),Object(f.jsx)("option",{value:"Grande",children:"Grande"})]})]})})]}),Object(f.jsx)(b.a,{form:!0,children:Object(f.jsxs)(E.a,{children:[a&&Object(f.jsx)(O.a,{style:{margin:"2px"},type:"submit",children:"Crear"}),r&&Object(f.jsx)(O.a,{style:{margin:"2px"},type:"submit",children:"Modificar"}),Object(f.jsx)(O.a,{style:{margin:"2px"},type:"button",onClick:function(e){return M()},children:"Home"})]})})]})]})},T=n(20),q=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){s.a.get("http://localhost:8000/api/animales").then((function(e){return a(e.data.data)})).catch((function(e){return d.a.fire({icon:"error",title:"Error al obtener los datos",text:"Ocurri\xf3 un problema al ntentar obtener el listado de animales"})}))}),[]),Object(f.jsx)(b.a,{children:Object(f.jsxs)(T.a,{children:[Object(f.jsx)(T.b,{to:"/crear",children:Object(f.jsx)(x.a,{icon:m.c})}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/crear",children:Object(f.jsx)(A,{crear:!0,datos:n,setDatos:a})}),Object(f.jsx)(u.a,{path:"/ver/:id",children:Object(f.jsx)(A,{ver:!0})}),Object(f.jsx)(u.a,{path:"/modificar/:id",children:Object(f.jsx)(A,{modificar:!0,datos:n,setDatos:a})}),Object(f.jsx)(u.a,{path:"/",children:Object(f.jsx)(p,{datos:n,setDatos:a})})]})]})})};var w=function(){return Object(f.jsx)(y.a,{children:Object(f.jsx)(q,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(88);i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),N()}},[[89,1,2]]]);
//# sourceMappingURL=main.fb0c99f3.chunk.js.map