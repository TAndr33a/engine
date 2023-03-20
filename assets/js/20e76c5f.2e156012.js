"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4855],{3400:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(1889);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8189:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=t(33),i=t(3220),r=(t(1889),t(3400)),o=["components"],p={id:"engine",title:"engine",sidebar_label:"engine"},l=void 0,s={unversionedId:"api/engine",id:"api/engine",title:"engine",description:"Engine application are created by invoking engine function:",source:"@site/docs/api/engine.md",sourceDirName:"api",slug:"/api/engine",permalink:"/engine/docs/api/engine",draft:!1,editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/engine.md",tags:[],version:"current",frontMatter:{id:"engine",title:"engine",sidebar_label:"engine"},sidebar:"docs",previous:{title:"@c11/engine.dashboard",permalink:"/engine/docs/packages/dashboard"},next:{title:"producer",permalink:"/engine/docs/api/producer"}},d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"<code>state</code>",id:"state",level:3},{value:"<code>use: EngineModule[]</code>",id:"use-enginemodule",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>app.start()</code>",id:"appstart",level:3},{value:"<code>app.stop()</code>",id:"appstop",level:3},{value:"<code>app.state: { [key: string]: any; }</code>",id:"appstate--key-string-any-",level:3},{value:"<code>app.use(module: EngineModule): void</code>",id:"appusemodule-enginemodule-void",level:3}],c={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Engine application are created by invoking ",(0,r.kt)("strong",{parentName:"p"},"engine")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const app = engine(config: EngineConfig): EngineInstance\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration object contains the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/state"},"initial state")," of\nthe engine app, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/engine"},"Engine Modules")," it is going to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type EngineConfig = {\n  state?: {\n    [key: string]: any;\n  };\n  use: EngineModule[];\n};\n")),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("p",null,"The initial state that will be available to producers and views when the Engine starts."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/state"},"Read more about state")),(0,r.kt)("h3",{id:"use-enginemodule"},(0,r.kt)("inlineCode",{parentName:"h3"},"use: EngineModule[]")),(0,r.kt)("p",null,"An array of Engine modules that the app will start with. These can also be added\nlater, after the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," has been created using ",(0,r.kt)("inlineCode",{parentName:"p"},"app.use"),". Engine modules an app\nuses make most decisiosn about it. Including how the app is going to be\nrendered, e.g as a React app."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/engine"},"Read more about Engine Modules")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"The Engine instance exposes some helpful methods for interacting with the Engine runtime."),(0,r.kt)("h3",{id:"appstart"},(0,r.kt)("inlineCode",{parentName:"h3"},"app.start()")),(0,r.kt)("p",null,"Start the Engine app, resulting in mounting all the modules currently in use. It\nis an idempotent function, i.e it can be called multiple times safely. An engine\nmodule is used only once for an engine instance, until ",(0,r.kt)("inlineCode",{parentName:"p"},"app.stop()")," is called."),(0,r.kt)("h3",{id:"appstop"},(0,r.kt)("inlineCode",{parentName:"h3"},"app.stop()")),(0,r.kt)("p",null,"Halts pending updates to the state and any other triggering of producers (or\nviews). An ",(0,r.kt)("inlineCode",{parentName:"p"},"app.start()")," after a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"app.stop()")," will make all the modules\nto be mounted again."),(0,r.kt)("h3",{id:"appstate--key-string-any-"},(0,r.kt)("inlineCode",{parentName:"h3"},"app.state: { [key: string]: any; }")),(0,r.kt)("p",null,"Allows patching the application state at runtime. ",(0,r.kt)("inlineCode",{parentName:"p"},"app.state")," takes a new state,\nand merges it with existing state."),(0,r.kt)("h3",{id:"appusemodule-enginemodule-void"},(0,r.kt)("inlineCode",{parentName:"h3"},"app.use(module: EngineModule): void")),(0,r.kt)("p",null,"Adds new modules to running Engine app. If Engine app is already started,\n",(0,r.kt)("inlineCode",{parentName:"p"},"app.use(module)")," will do nothing until engine app is stopped and started again."))}g.isMDXComponent=!0}}]);