"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[999],{6164:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(f,r(r({ref:t},l),{},{components:n})):o.createElement(f,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var o=n(753),a=n(1242),i=(n(3289),n(6164)),r=["components"],d={id:"updating-state-from-components",title:"Updating State from Components",sidebar_label:"Updating State"},s={unversionedId:"tutorials/react/updating-state-from-components",id:"tutorials/react/updating-state-from-components",isDocsHomePage:!1,title:"Updating State from Components",description:"Rendering our state in components is one piece of the puzzle, another piece is",source:"@site/docs/tutorials/react/updating-state-from-components.md",sourceDirName:"tutorials/react",slug:"/tutorials/react/updating-state-from-components",permalink:"/engine/docs/tutorials/react/updating-state-from-components",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/tutorials/react/updating-state-from-components.md",version:"current",sidebar_label:"Updating State",frontMatter:{id:"updating-state-from-components",title:"Updating State from Components",sidebar_label:"Updating State"}},p=[{value:"Many faced component",id:"many-faced-component",children:[]}],l={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rendering our state in components is one piece of the puzzle, another piece is\nmanipulating state from components. Changes below make it possible to toggle the\nstatus of ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo"),"s."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo.tsx"),","),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react";\n- import { view, observe, prop } from "@c11/engine.macro";\n+ import { view, observe, prop, update } from "@c11/engine.macro";\n\n- const Todo: view = ({ title = observe.todosById[prop.id].title }) => (\n+ const Todo: view = ({\n+   title = observe.todosById[prop.id].title,\n+   updateStatus = update.todosyById[prop.id].status\n+ }) => (\n  <li>\n    <div className="view">\n-      <input className="toggle" type="checkbox" />\n+       <input\n+         className="toggle"\n+         type="checkbox"\n+         checked={status === TodoStatuses.done}\n+         onChange={() =>\n+           updateStatus.set(\n+             status === TodoStatuses.done\n+               ? TodoStatuses.pending\n+               : TodoStatuses.done\n+           )\n+         }\n+       />\n      <label>{title}</label>\n      <button className="destroy" />\n    </div>\n  </li>\n);\n\nexport default Todo;\n')),(0,i.kt)("p",null,"Above snippet:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Uses ",(0,i.kt)("inlineCode",{parentName:"li"},"observe.todosById<todoId>.status")," for deciding whether the checkbox for\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"Todo")," is checked or not"),(0,i.kt)("li",{parentName:"ol"},"Uses ",(0,i.kt)("inlineCode",{parentName:"li"},"update.todosById<todoId>.status")," to change status of the TodoItem.\n",(0,i.kt)("a",{parentName:"li",href:"/docs/api/update"},"update")," is the dual of ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/observe"},"observe"),".\nObserve allows reading any value from the global state, Update allows\nchanging them. ",(0,i.kt)("inlineCode",{parentName:"li"},"update.<path>")," returns an object with a number of methods to\nconveniently work with our state. You can read ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/update"},"more about ",(0,i.kt)("inlineCode",{parentName:"a"},"update")," in api\ndocs"),".")),(0,i.kt)("h2",{id:"many-faced-component"},"Many faced component"),(0,i.kt)("p",null,"To make the ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo"),"s editable, the HTML elements that are used to display the\nTodoItem need to be changed. Instead of rendering ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"<label>"),", an\n",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," serves the purpose of editing the title better. It's fair to say that\n",(0,i.kt)("inlineCode",{parentName:"p"},"Todo"),' can be in one of two modes at a time: "viewing" or "editing".'),(0,i.kt)("p",null,"Create an enum for all different modes a Todo can be in. In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/types.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+ export enum TodoModes {\n+   viewing = "viewing",\n+   editing = "editing"\n+ }\n')),(0,i.kt)("p",null,"Also update the type for ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoItem")," to support TodoMode. In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/types.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"export interface TodoItem {\n  id: string;\n  title: string;\n  status: TodoStatuses;\n+ mode: TodoModes;\n}\n")),(0,i.kt)("p",null,"In such scenarios, Engine recommends that views should be split into different\nStates. Go ahead and create two versions for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo")," component for the two\nstates it can be in. For better separation of related code, different states of\n",(0,i.kt)("inlineCode",{parentName:"p"},"Todo")," component are put in their own files."),(0,i.kt)("p",null,"Rename ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo.tsx")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/index.tsx")),(0,i.kt)("p",null,"This will not need a change in other components which import ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo")," (i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"),\nand gives a directory to nicely keep ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo.View")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo.Edit")," close together."),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/View.tsx")," with following contents"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { view, observe, prop, update } from "@c11/engine.macro";\nimport { TodoStatuses } from "../types";\n\nconst View: view = ({\n  title = observe.todosById[prop.id].title,\n  status = observe.todosById[prop.id].status,\n  updateStatus = update.todosById[prop.id].status\n}) => (\n    <li>\n      <div className="view">\n        <input\n          className="toggle"\n          type="checkbox"\n          checked={status === TodoStatuses.done}\n          onChange={() =>\n            updateStatus.set(\n              status === TodoStatuses.done\n                ? TodoStatuses.pending\n                : TodoStatuses.done\n            )\n          }\n        />\n        <label>{title}</label>\n        <button className="destroy" />\n      </div>\n    </li>\n  );\n\nexport default View;\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Todo.tsx")," view is practically renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo/View.tsx")),(0,i.kt)("p",null,"For the editing mode of ",(0,i.kt)("inlineCode",{parentName:"p"},"Todo"),", create ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/Edit.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { view, observe, prop, update } from "@c11/engine.macro";\n\nconst Edit: view = ({\n  title = observe.todosById[prop.id].title,\n  updateTodo = update.todosById[prop.id]\n}) => (\n    <li className="editing">\n      <input\n        className="edit"\n        value={title}\n        onChange={e => updateTodo.merge({ title: e.currentTarget.value })}\n      />\n    </li>\n  );\n\nexport default Edit;\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/index.tsx")," can simply be a logical component which decides the\nappropriate view based on Todo's state. In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/index.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { view, observe, prop } from "@c11/engine.macro";\nimport View from "./View";\nimport Edit from "./Edit";\nimport { TodoModes } from "../types";\n\nconst uiStates = {\n [TodoModes.editing]: Edit,\n [TodoModes.viewing]: View\n};\n\nconst Fallback = ({ id }: { id: string }) => {\n console.warn("Invalid UI State for Todo with Id", id);\n\n return null;\n};\n\nconst Todo: view = ({ id, mode = observe.todosById[prop.id].mode }) => {\n const Component = uiStates[mode as TodoModes] || Fallback;\n\n return <Component id={id} />;\n};\n\nexport default Todo;\n')),(0,i.kt)("p",null,"This explicitly calls out how different todo modes correspond to different\ncomponents, and adds a safe fallback in case our Todo is in an invalid state.\nSafest fallback is one which is least error prone. In this case, it is simply to\nrender nothing."),(0,i.kt)("p",null,"Update todo items in initial state to also have a mode. In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'      todosById: {\n        todo1: {\n          id: "todo1",\n          title: "Add initial state to engine",\n          isDone: false,\n+         mode: "viewing"\n        },\n        todo2: {\n          id: "todo2",\n          title: "Use initial state in components",\n          isDone: false,\n+         mode: "viewing"\n        }\n      },\n')),(0,i.kt)("p",null,"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoItem.mode")," of todos in state whenever user double clicks a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Todo.View"),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/View.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { TodoModes } from "../types";\n...\nconst View: view = ({\n  title = observe.todosById[prop.id].title,\n  status = observe.todosById[prop.id].status,\n- updateStatus = update.todosById[prop.id].status\n+ updateTodo = update.todosById[prop.id]\n}) => (\n    <li>\n      <div className="view">\n        <input\n          className="toggle"\n          type="checkbox"\n          checked={status === TodoStatuses.done}\n          onChange={() =>\n-           updateStatus.set(\n-             status === TodoStatuses.done\n-               ? TodoStatuses.pending\n-               : TodoStatuses.done\n-           )\n+           updateTodo.merge({\n+             status:\n+               status === TodoStatuses.done\n+                 ? TodoStatuses.pending\n+                 : TodoStatuses.done\n+           })\n          }\n        />\n-       <label>{title}</label>\n+       <label\n+         onDoubleClick={() => updateTodo.merge({ mode: TodoModes.editing })}\n+       >\n+         {title}\n+       </label>\n')),(0,i.kt)("p",null,"Above snippet:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Changed ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"update.todosById[prop.id].status")," to\n",(0,i.kt)("inlineCode",{parentName:"li"},"update.todosById[prop.id]"),". Since we want to update more than just status of\na Todo, it's better to minimize our component's API surface and get an\n",(0,i.kt)("a",{parentName:"li",href:"/docs/api/update"},"update")," for the whole Todo item"),(0,i.kt)("li",{parentName:"ol"},"Updates the method of changing status of the todo is updated as a consequence of #1"),(0,i.kt)("li",{parentName:"ol"},"Adds an event-listener to change the mode of Todo when user double-clicks\nthe todo title")),(0,i.kt)("p",null,"Update ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Todo/Edit.tsx")," so Todo can switch back to ",(0,i.kt)("inlineCode",{parentName:"p"},"viewing")," mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { TodoModes } from "../types";\n...\n      <input\n        className="edit"\n        value={title}\n        onChange={e => updateTodo.merge({ title: e.currentTarget.value })}\n+       onBlur={() => updateTodo.merge({ mode: TodoModes.viewing })}\n      />\n')),(0,i.kt)("p",null,"Next section introduces ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producer"),"s, which are another core\nconcept of Engine."))}c.isMDXComponent=!0}}]);