(this["webpackJsonpsingle-todo-app"]=this["webpackJsonpsingle-todo-app"]||[]).push([[0],{18:function(t,e,n){t.exports=n(41)},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(17),c=n.n(r),i=n(7),l=n(2),s=n(3),d=n(5),p=n(4),u=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,o=e.id,r=e.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed,onChange:function(){t.props.handleChangeProps(o)}}),a.a.createElement("button",{onClick:function(){t.props.deleteTodoProps(o)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(a.a.Component),h=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,this.props.todos.map((function(e){return a.a.createElement(u,{key:e.id,todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps})})))}}]),n}(a.a.Component),m=function(){return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple todo app"),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add todo item(s) through the input field"))},f=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState({title:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},a.a.createElement("input",{type:"text",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange,className:"input-text"}),a.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),n}(o.Component),b=n(6),y=n.n(b),v=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.handleChange=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){y.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodoItem=function(e){y.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){t.setState({todos:[].concat(Object(i.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;y.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:10}}).then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(m,null),a.a.createElement(f,{addTodoProps:this.addTodoItem}),a.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.deleteTodo}))}}]),n}(a.a.Component),g=(n(40),a.a.createElement(v,null));c.a.render(g,document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4b26329f.chunk.js.map