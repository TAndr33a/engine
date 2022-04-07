"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{6164:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),v=a,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7367:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(3830),a=r(2056),o=(r(3289),r(6164)),i=["components"],p={id:"observe",title:"observe",sidebar_label:"observe"},l=void 0,s={unversionedId:"api/observe",id:"api/observe",title:"observe",description:"Overview",source:"@site/docs/api/observe.md",sourceDirName:"api",slug:"/api/observe",permalink:"/engine/docs/api/observe",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/observe.md",tags:[],version:"current",frontMatter:{id:"observe",title:"observe",sidebar_label:"observe"},sidebar:"docs",previous:{title:"view",permalink:"/engine/docs/api/view"},next:{title:"get",permalink:"/engine/docs/api/get"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"API",id:"api",level:2},{value:"<code>observe.&lt;path&gt;: any</code>",id:"observepath-any",level:3},{value:"Example",id:"example",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"observe"),' gives the ability to observe values from global state. To get a "live"\nversion of a value from Engine\'s global state, state properties can be directly\naccessed from the imported ',(0,o.kt)("inlineCode",{parentName:"p"},"observe"),"."),(0,o.kt)("p",null,"Every use of ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"view"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"producer"),"'s header can be thought of as\nadding a trigger. Whenever the ",(0,o.kt)("inlineCode",{parentName:"p"},"observe"),"d value changes in state, for whatsoever\nreason, the view or producer using this value will be re-computed."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"observepath-any"},(0,o.kt)("inlineCode",{parentName:"h3"},"observe.<path>: any")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"<path>")," is a valid path to an existing property of State, ",(0,o.kt)("inlineCode",{parentName:"p"},"observe.<path>"),"\nreturns value stored at that path in State, otherwise it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". If\nthe value is serializable (e.g a primitive Javascript type, a plain object), a\ncopy of the data is returned. However, if the value is not serializable (e.g a\nclass instance, function etc), a reference to it is returned."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"e.g if the state looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo": {\n    "bar": "baz"\n  }\n}\n')),(0,o.kt)("p",null,"value of ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," can be obtained by assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"observe.foo.bar")," in header of the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/view"},"view")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producer"),". For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const MyView: view = ({ barVal = observe.foo.bar }) => { ... }\n")),(0,o.kt)("p",null,"Whenever an ",(0,o.kt)("inlineCode",{parentName:"p"},"observe"),"d value in state is changed (e.g with\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/update"},"update"),"), the view or producer using it is re-triggered."))}v.isMDXComponent=!0}}]);