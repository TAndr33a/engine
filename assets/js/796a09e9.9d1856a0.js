"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[168],{6164:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},640:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var o=n(753),a=n(1242),i=(n(3289),n(6164)),r=["components"],s={id:"state-as-communication-channel",title:"State as Communication Channel",sidebar_label:"State as Communication Channel"},l={unversionedId:"tutorials/react/state-as-communication-channel",id:"tutorials/react/state-as-communication-channel",isDocsHomePage:!1,title:"State as Communication Channel",description:"It's time to make it possible to add new TodoItems to the state. To start off,",source:"@site/docs/tutorials/react/state-as-communication-channel.md",sourceDirName:"tutorials/react",slug:"/tutorials/react/state-as-communication-channel",permalink:"/engine/docs/tutorials/react/state-as-communication-channel",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/tutorials/react/state-as-communication-channel.md",version:"current",sidebar_label:"State as Communication Channel",frontMatter:{id:"state-as-communication-channel",title:"State as Communication Channel",sidebar_label:"State as Communication Channel"}},d=[],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It's time to make it possible to add new ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoItem"),"s to the state. To start off,\nextract ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoForm")," view out of ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),". Create a new file\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/TodoForm.tsx")," with following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nconst TodoForm = () => (\n  <input\n    className="new-todo"\n    placeholder="What needs to be done?"\n    autoFocus={true}\n  />\n);\n\nexport default TodoForm;\n')),(0,i.kt)("p",null,"Update ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," accordingly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+ import TodoForm from "./TodoForm";\n...\n-    <input\n-      className="new-todo"\n-      placeholder="What needs to be done?"\n-      autoFocus={true}\n-    />\n+    <TodoForm />\n')),(0,i.kt)("p",null,"Since global-state is the only kind of state recommended in Engine, a state\nvariable should be kept for what user is typing in our ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoForm")," input. Update\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/TodoForm.tsx")," to make its content be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { view, observe, update } from "@c11/engine.macro";\n\nconst TodoForm: view = ({\n  updateNewTodoTitle = update.newTodo.title,\n  newTodoTitle = observe.newTodo.title,\n}) => (\n  <input\n    className="new-todo"\n    placeholder="What needs to be done?"\n    autoFocus={true}\n    value={newTodoTitle || ""}\n    onChange={(e) => updateNewTodoTitle.set(e.currentTarget.value)}\n  />\n);\n\nexport default TodoForm;\n')),(0,i.kt)("p",null,"Above snippet:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Labeled ",(0,i.kt)("inlineCode",{parentName:"li"},"TodoForm")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"view"),", so that it can use ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/observe"},"observe"),"\nand ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/update"},"update")," in its header"),(0,i.kt)("li",{parentName:"ol"},"Introduced a new state path ",(0,i.kt)("inlineCode",{parentName:"li"},".newTodo.title")),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"newTodo.title")," whenever user enters something in the ",(0,i.kt)("inlineCode",{parentName:"li"},"<input>"))),(0,i.kt)("p",null,"A new todo should be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"todosById")," object whenever user presses\n",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," key in the input. It is possible to create an event handler in the view\nitself which does this work, but Engine recommends to not do it from the ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),".\nOnly logic that should go into a view is converting event payloads into value\nthey contain, and store them at some path in state. All the business logic\nbelongs in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producer"),"s."),(0,i.kt)("p",null,"Next steps are to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add event listener for ",(0,i.kt)("inlineCode",{parentName:"li"},"onKeyDown")," in the input"),(0,i.kt)("li",{parentName:"ol"},"Convert the pressed key to the intent TodoForm want to express, and store it\nin the state"),(0,i.kt)("li",{parentName:"ol"},"Create producers for committing and discarding the new todo")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/TodoForm.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'import React, { KeyboardEvent } from "react";\nimport { view, observe, update, producer, get } from "@c11/engine.macro";\nimport { TodoItem, TodoStatuses, TodoModes } from "./types";\n\nenum NewTodoItents {\n  commit = "commit",\n  discard = "discard"\n}\n\nconst TodoForm: view = ({\n  updateNewTodoTitle = update.newTodo.title,\n  newTodoTitle = observe.newTodo.title,\n  updateNewTodoIntent = update.newTodo.intent\n}) => {\n  const keyDownToIntent = (e: KeyboardEvent) => {\n    if (e.key === "Enter") {\n      updateNewTodoIntent.set(NewTodoItents.commit);\n    }\n\n    if (e.key === "Escape") {\n      updateNewTodoIntent.set(NewTodoItents.discard);\n    }\n  };\n\n  return (\n    <input\n      className="new-todo"\n      placeholder="What needs to be done?"\n      autoFocus={true}\n      value={newTodoTitle || ""}\n      onChange={e => updateNewTodoTitle.set(e.currentTarget.value)}\n      onKeyDown={keyDownToIntent}\n    />\n  );\n};\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"view"),"s can contain as much logic as required to provide a clean API. A view's\nAPI is made up of two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Its input: props and global state"),(0,i.kt)("li",{parentName:"ol"},"Its output: JSX and global state")),(0,i.kt)("p",null,"A good API do not reveal its implementation details. State shouldn't need to\nknow which key is getting pressed, but only what is the objective that a view\nwant to accomplish. To provide a clean API, an event listener can be created in\nthe view itself, which stores the intent of the TodoForm component in state in\n",(0,i.kt)("inlineCode",{parentName:"p"},".newTodo.intent"),"."),(0,i.kt)("p",null,"Using state as a communication mechanism between components and producers allows\nkeeping the views free of all business logic, which is kept in small producers\nwhich do one thing well. ",(0,i.kt)("inlineCode",{parentName:"p"},"addNewTodo")," is going to be one such producer. Make\nthese changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/TodoForm.tsx")," to create a new producer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const addNewTodo: producer = ({\n  newTodoIntent = observe.newTodo.intent,\n  getTitle = get.newTodo.title,\n  updateTodosById = update.todosById,\n  updateNewTodoTitle = update.newTodo.title,\n}) => {\n  if (newTodoIntent !== NewTodoItents.commit) {\n    return;\n  }\n\n  const id = String(new Date().getTime());\n  const newTodo: TodoItem = {\n    id,\n    title: getTitle(),\n    status: TodoStatuses.pending,\n    mode: TodoModes.viewing,\n  };\n\n  updateTodosById.merge({\n    [id]: newTodo,\n  });\n  updateNewTodoTitle.set(null);\n};\n")),(0,i.kt)("p",null,"And add it to the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoForm"),"'s producers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"+ TodoForm.producers([addNewTodo]);\n\nexport default TodoForm;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addNewTodo")," producer is doing a couple of interesting things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"get.newTodo.title")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"observe.newTodo.title"),".\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/get"},"get")," is another macro, which provides a function to get live\nvalue from the state. It is very useful when our producer is doing something\nasynchronous and needs a value from state at a later time. Or as is the case\nnow, it allow accessing a value without ",(0,i.kt)("inlineCode",{parentName:"p"},"observe"),"ing it."),(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"producer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," gets triggered every time anything it ",(0,i.kt)("inlineCode",{parentName:"p"},"observe"),"\nchanges. ",(0,i.kt)("inlineCode",{parentName:"p"},"addNewTodo")," producer should not get called whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"newTodo.title"),"\nchanges. It is only interested in changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"newTodoIntent"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice that a guard has been added in starting of the producer, which checks\nif state is valid for execution of this producer. This is a common pattern in\nEngine apps, since it recommends creating small, single-responsibility\nproducers. The guard checks if the intent of newTodo is to commit it, if it\nisn't, this producer should not do anything."))),(0,i.kt)("p",null,"In the spirit of single-responsibility producers, another producer can be\ncreated to cancel adding a new todo if user presses Escape key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const cancelAddingTodo: producer = ({\n  newTodoIntent = observe.newTodo.intent,\n  updateNewTodoTitle = update.newTodo.title,\n}) => {\n  if (newTodoIntent !== NewTodoItents.discard) {\n    return;\n  }\n\n  updateNewTodoTitle.set(null);\n};\n")),(0,i.kt)("p",null,"Notice it has a guard similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"addNewTodo"),"."),(0,i.kt)("p",null,"Adding it to ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoForm.producers")," will bring it to life:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- TodoForm.producers([addNewTodo]);\n+ TodoForm.producers([addNewTodo, cancelAddingTodo]);\n")),(0,i.kt)("p",null,'Although new todos are getting added to the state, and "Pending count" in footer\nincreases on adding new todos, new todos are not shown in the todo list.\n',(0,i.kt)("inlineCode",{parentName:"p"},"visibleTodoIds")," in the state need to be kept in sync with changes in\n",(0,i.kt)("inlineCode",{parentName:"p"},"todosById"),". It is in charge of which todos are visible in the list. Question\nis, where do the producer for updating ",(0,i.kt)("inlineCode",{parentName:"p"},"visibleTodoIds")," belong? Should a\nproducer be added in ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoForm"),", which adds the todos, or should it go in ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),",\nwhich shows the list of todos?"),(0,i.kt)("p",null,"Engine recommends that ",(0,i.kt)("strong",{parentName:"p"},"views which consume the derived state should track\nit"),". Add a producer in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const syncVisibleTodoIds: producer = ({\n  todosById = observe.todosById,\n  filter = observe.filter,\n  visibleTodoIds = update.visibleTodoIds,\n}) => {\n  const todoIdsToDisplay = Object.entries(todosById)\n    .map(([key, value]) => {\n      switch (filter as TodoFilters) {\n        case TodoFilters.completed:\n          return value.status === TodoStatuses.done ? key : null;\n        case TodoFilters.pending:\n          return value.status === TodoStatuses.done ? null : key;\n        default:\n          return key;\n      }\n    })\n    .filter(Boolean);\n\n  visibleTodoIds.set(todoIdsToDisplay);\n};\n")),(0,i.kt)("p",null,"This view is doing a bit more than just adding all the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s from ",(0,i.kt)("inlineCode",{parentName:"p"},"todosById"),".\nIt also accounts for existence of a ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," in state, which don't yet exist in\nstate. This is how ",(0,i.kt)("strong",{parentName:"p"},"Engine help gradually evolving the state as application\nevolves"),'. The filter will be set later, when user clicks on "All", "Active" and\n"Completed" buttons in the ',(0,i.kt)("inlineCode",{parentName:"p"},"Footer"),". But before that, add this producer to\n",(0,i.kt)("inlineCode",{parentName:"p"},"App"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"App.producers([syncVisibleTodoIds]);\n\nexport default App;\n")),(0,i.kt)("p",null,"Before adding filters to state, let's create an enum to represent all the\npossible filters. In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/types.tsx"),", add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export enum TodoFilters {\n  all = "all",\n  completed = "completed",\n  pending = "pending",\n}\n')),(0,i.kt)("p",null,"Making a very simply change to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Footer.tsx")," allows setting filters for\nvisible todos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'- import { TodoItem, TodoStatuses } from "./types";\n+ import { TodoItem, TodoStatuses, TodoFilters } from "./types";\n\nconst Footer: view = ({\n  pendingCount = observe.pendingCount,\n+ filter = observe.filter,\n+ updateFilter = update.filter\n}) => (\n...\n      <ul className="filters">\n        <li>\n-         <a href="#/" className="selected">All</a>\n+         <a\n+           href="#/"\n+           className={filter === TodoFilters.all ? "selected" : ""}\n+           onClick={() => updateFilter.set(TodoFilters.all)}\n+         >\n+          All\n+         </a>\n        </li>\n        <li>\n-         <a href="#/active">Active</a>\n+         <a\n+           href="#/active"\n+           className={filter === TodoFilters.pending ? "selected" : ""}\n+           onClick={() => updateFilter.set(TodoFilters.pending)}\n+         >\n+           Active\n+         </a>\n        </li>\n        <li>\n-         <a href="#/completed">Completed</a>\n+         <a\n+           href="#/completed"\n+           className={filter === TodoFilters.completed ? "selected" : ""}\n+           onClick={() => updateFilter.set(TodoFilters.completed)}\n+         >\n+           Completed\n+         </a>\n        </li>\n      </ul>\n')),(0,i.kt)("p",null,"It's also possible to set an initial filter by setting it in the initial state.\nIn ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.tsx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { TodoFilters } from "./types";\n...\n  state: {\n    initial: {\n+     filter: TodoFilters.all,\n      todosById: {\n')))}c.isMDXComponent=!0}}]);