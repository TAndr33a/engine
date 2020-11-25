(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),i=(n(0),n(102)),r={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!0,title:"Introduction",description:"What is the Code11 Engine?",source:"@site/docs/introduction.md",permalink:"/engine/docs/",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/introduction.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Usage",permalink:"/engine/docs/usage"}},l=[{value:"What is the Code<sup>11</sup> Engine?",id:"what-is-the-code11-engine",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Principles",id:"principles",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"what-is-the-code11-engine"},"What is the Code",Object(i.b)("sup",null,"11")," Engine?"),Object(i.b)("p",null,"Engine is a meta-framework for creating web applications."),Object(i.b)("p",null,"The Engine keenly focuses on developer productivity. It allows creating robust\nweb applications with unprecedented simplicity."),Object(i.b)("h3",{id:"goals"},"Goals"),Object(i.b)("p",null,"Engine strives to build applications with"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Small codebase. Less code, less bugs, more hairs still on head"),Object(i.b)("li",{parentName:"ul"},"Less work for computer. Only compute what is needed for faster applications"),Object(i.b)("li",{parentName:"ul"},"Less work for developer. Minimal API which gets out of developers' way. Allows\nfocusing on business problems, not Engine problems")),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("p",null,'Instead of creating perfect bricks and sticking them together into "the perfect\napplication", ',Object(i.b)("strong",{parentName:"p"},"mold your application just like you would do with clay"),". Let it\ngradually evolve over time without any friction or constraints."),Object(i.b)("p",null,"Engine is built with keeping real-world, evolving requirements in mind, and all\nthe challenges that come with it."),Object(i.b)("h4",{id:"simple-views"},"Simple views"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A view is just another representation of some data")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/view"}),"View"),"s should be as simple as possible.\nA view does not do anything except:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Render the view it is supposed to display"),Object(i.b)("li",{parentName:"ol"},"Change the data it is supposed to represent")),Object(i.b)("h4",{id:"evolving-state"},"Evolving State"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"At the core of every UI is a state")),Object(i.b)("p",null,"The clay of an application is its ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/concepts/state"}),"state"),". Although the\ncore of the application, state in engine is simply a plain old Javascript\nObject. As the requirements evolve, so do the state, and views and logic\nassociated with it."),Object(i.b)("h4",{id:"reactive-computations"},"Reactive Computations"),Object(i.b)("p",null,"Components, plain data, and computations capable of reacting to changes\n(called ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/producer"}),"producers"),") to the data makes an Engine app."),Object(i.b)("p",null,"Engine apps are reactive. They start with:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"an initial state (which can be empty as well)"),Object(i.b)("li",{parentName:"ul"},"declare views that represent some part(s) of state e.g a\n",Object(i.b)("inlineCode",{parentName:"li"},"TodoListItem")," component which needs a ",Object(i.b)("inlineCode",{parentName:"li"},"TodoItem")," object from state"),Object(i.b)("li",{parentName:"ul"},"declare computations that depend on some part(s) of state, e.g a ",Object(i.b)("inlineCode",{parentName:"li"},"doneCounter"),"\nfunction which depends on all ",Object(i.b)("inlineCode",{parentName:"li"},"TodoItems")," in state to count number of done\ntodos")),Object(i.b)("p",null,"Engine takes care of updating the view and re-running the computations only when\ntheir dependencies from state change. Head over to the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/usage"}),"Getting\nstarted")," page for a sneak peek into how Engine apps look like, or\ntake a look at the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/tutorials/react/setup"}),"quick start tutorial")," for a\nmore comprehensive guide to building an Engine app."))}p.isMDXComponent=!0}}]);