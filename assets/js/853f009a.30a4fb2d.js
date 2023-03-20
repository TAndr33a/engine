"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5853],{3400:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(1889);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(t),f=i,d=g["".concat(l,".").concat(f)]||g[f]||u[f]||o;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4999:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(33),i=t(3220),o=(t(1889),t(3400)),a=["components"],c={id:"service-web",title:"@c11/engine.service-web",sidebar_label:"@c11/engine.service-web"},l=void 0,s={unversionedId:"packages/service-web",id:"packages/service-web",title:"@c11/engine.service-web",description:"Engine provides a development and build server.",source:"@site/docs/packages/service-web.md",sourceDirName:"packages",slug:"/packages/service-web",permalink:"/engine/docs/packages/service-web",draft:!1,editUrl:"https://github.com/code11/engine/edit/master/docs/docs/packages/service-web.md",tags:[],version:"current",frontMatter:{id:"service-web",title:"@c11/engine.service-web",sidebar_label:"@c11/engine.service-web"},sidebar:"docs",previous:{title:"@c11/engine.cli",permalink:"/engine/docs/packages/cli"},next:{title:"@c11/engine.dashboard",permalink:"/engine/docs/packages/dashboard"}},p={},u=[{value:"Configuration",id:"configuration",level:2}],g={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Engine provides a development and build server."),(0,o.kt)("p",null,"It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack")," underneath the hood which you can easily configure according to your project needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @c11/engine.service-web\nyarn add -D @c11/engine.service-web\n")),(0,o.kt)("p",null,"Then add to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"scripts": {\n  "start": "engine-service-web start",\n  "build": "engine-service-web build",\n}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"engine.config.js")," file in the application root to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-service-web")," behaviour."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  name: "My savy application",\n  webpack: {\n    development: {\n      devServer: (config) => {\n        config.proxy = {\n          "/api/": "http://localhost:3333"\n        }\n        return config\n      },\n      config: (config, resolve) => {\n        config.rules.push({\n          test: /\\.less$/i,\n          use: [\n            "style-loader",\n            "css-loader",\n            "less-loader",\n          ],\n        })\n        return config;\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Type definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ConfigFn<T> = (config: T, resolve: typeof require.resolve) => T;\n\ntype EngineConfig = {\n  name?: string;\n  exportAppStructure?: boolean;\n  webpack?: {\n    publicPath?: string;\n    production?: {\n      plugins?: {\n        miniCssExtractPlugin: ConfigFn<\n          ConstructorParameters<typeof MiniCssExtractPlugin>\n        >;\n        htmlWebpackPlugin?: ConfigFn<HtmlWebpackPlugin.Options>;\n        definePlugin?: ConfigFn<\n          ConstructorParameters<typeof webpack.DefinePlugin>[0]\n        >;\n      };\n      config: ConfigFn<Configuration>;\n    };\n    development?: {\n      devServer?: ConfigFn<Server.Configuration>;\n      plugins?: {\n        htmlWebpackPlugin?: ConfigFn<HtmlWebpackPlugin.Options>;\n        definePlugin?: ConfigFn<\n          ConstructorParameters<typeof webpack.DefinePlugin>[0]\n        >;\n      };\n      config: ConfigFn<Configuration>;\n    };\n  };\n}\n")))}f.isMDXComponent=!0}}]);