"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4128],{3400:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(1889);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(33),i=n(3220),r=(n(1889),n(3400)),a=["components"],l={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is the Code11 Engine?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/engine/docs/",draft:!1,editUrl:"https://github.com/code11/engine/edit/master/docs/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Getting started",permalink:"/engine/docs/getting-started"}},p={},u=[{value:"What is the Code<sup>11</sup> Engine?",id:"what-is-the-code11-engine",level:3},{value:"Goals",id:"goals",level:3},{value:"Principles",id:"principles",level:3},{value:"Simple views",id:"simple-views",level:4},{value:"Evolving State",id:"evolving-state",level:4},{value:"Reactive Computations",id:"reactive-computations",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-the-code11-engine"},"What is the Code",(0,r.kt)("sup",null,"11")," Engine?"),(0,r.kt)("p",null,"Engine is a declarative state management system for creating web applications."),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("p",null,"Engine strives to build applications with"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Small codebase. Less code, less bugs, more hairs still on head"),(0,r.kt)("li",{parentName:"ul"},"Less work for computer. Only compute what is needed for faster applications"),(0,r.kt)("li",{parentName:"ul"},"Less work for developer. Minimal API which gets out of developers' way. Allows\nfocusing on business problems, not Engine problems")),(0,r.kt)("h3",{id:"principles"},"Principles"),(0,r.kt)("p",null,'Instead of creating perfect bricks and sticking them together into "the perfect\napplication", ',(0,r.kt)("strong",{parentName:"p"},"mold your application just like you would do with clay"),". Let it\ngradually evolve over time without any friction or constraints."),(0,r.kt)("p",null,"Engine is built with keeping real-world, evolving requirements in mind, and all\nthe challenges that come with it."),(0,r.kt)("h4",{id:"simple-views"},"Simple views"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A view is just another representation of some data")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/view"},"View"),"s should be as simple as possible.\nA view does not do anything except:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Render the view it is supposed to display"),(0,r.kt)("li",{parentName:"ol"},"Change the data it is supposed to represent")),(0,r.kt)("h4",{id:"evolving-state"},"Evolving State"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At the core of every UI is a state")),(0,r.kt)("p",null,"The clay of an application is its ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/state"},"state"),". Although the\ncore of the application, state in engine is simply a plain old Javascript\nObject. As the requirements evolve, so do the state, and views and logic\nassociated with it."),(0,r.kt)("h4",{id:"reactive-computations"},"Reactive Computations"),(0,r.kt)("p",null,"Components, plain data, and computations capable of reacting to changes\n(called ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producers"),") to the data makes an Engine app."),(0,r.kt)("p",null,"Engine apps are reactive. They start with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an initial state (which can be empty as well)"),(0,r.kt)("li",{parentName:"ul"},"declare views that represent some part(s) of state e.g a\n",(0,r.kt)("inlineCode",{parentName:"li"},"TodoListItem")," component which needs a ",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItem")," object from state"),(0,r.kt)("li",{parentName:"ul"},"declare computations that depend on some part(s) of state, e.g a ",(0,r.kt)("inlineCode",{parentName:"li"},"doneCounter"),"\nfunction which depends on all ",(0,r.kt)("inlineCode",{parentName:"li"},"TodoItems")," in state to count number of done\ntodos")),(0,r.kt)("p",null,"Engine takes care of updating the view and re-running the computations only when\ntheir dependencies from state change. Head over to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting\nstarted")," page for a sneak peek into how Engine apps look like, or\ntake a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/react/setup"},"quick start tutorial")," for a\nmore comprehensive guide to building an Engine app."))}m.isMDXComponent=!0}}]);