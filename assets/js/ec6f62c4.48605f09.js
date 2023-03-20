"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{3400:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(1889);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),v=i,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(33),i=n(3220),a=(n(1889),n(3400)),o=["components"],p={id:"view",title:"view",sidebar_label:"view"},c=void 0,l={unversionedId:"api/view",id:"api/view",title:"view",description:"Overview",source:"@site/docs/api/view.md",sourceDirName:"api",slug:"/api/view",permalink:"/engine/docs/api/view",draft:!1,editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/view.md",tags:[],version:"current",frontMatter:{id:"view",title:"view",sidebar_label:"view"},sidebar:"docs",previous:{title:"producer",permalink:"/engine/docs/api/producer"},next:{title:"observe",permalink:"/engine/docs/api/observe"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Adding producers to a view",id:"adding-producers-to-a-view",level:2},{value:"Special props",id:"special-props",level:2},{value:"Instance",id:"instance",level:2}],d={toc:u};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"view")," creates Engine views, which render HTML in browser and use\noperators ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/observe"},"observe"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/get"},"get"),", and\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api/update"},"update")," to interact with global state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const Button: view = ({\n  title,\n  count = observe.count,\n  updateCount = update.count,\n}) => (\n  <button onClick={() => updateCount.set((count || 0) + 1)}>\n    {title}: {count}\n  </button>\n);\n")),(0,a.kt)("h2",{id:"adding-producers-to-a-view"},"Adding producers to a view"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," can have one or more producers assigned to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Button.producers([myProducer1, myProducer2]);\n")),(0,a.kt)("p",null,"Producers that belong to a ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," will be activated when the ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," is mounted\nand deactivated once the view is unmounted."),(0,a.kt)("p",null,"These producers will receive all the same props as the view including the special props bellow:"),(0,a.kt)("h2",{id:"special-props"},"Special props"),(0,a.kt)("p",null,"Every ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," will receive special props:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_viewId")," - a string that denotes the view's instance (see next section)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_now")," - a function used to generate unique timestamps (microsecond)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_props")," - all the external props received by the component")),(0,a.kt)("h2",{id:"instance"},"Instance"),(0,a.kt)("p",null,"Each view once mounted will have a data representation of that instance accesible on the state e.g.:\n",(0,a.kt)("inlineCode",{parentName:"p"},"get.views[prop._viewId]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type viewInstance = {\n  id: string;\n  createdAt: number;\n  data: object; // used to store view's private/temporary data\n  parentId: string | null; // the parent view or null if it's the root\n  rootId: string; // the root (top-most) view\n  children: {\n    [k: string]: number; // the ids of the direct children views of the view\n  };\n};\n")))}v.isMDXComponent=!0}}]);