"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[5800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={},r="metro-serializer-esbuild",l={unversionedId:"tools/metro-serializer-esbuild",id:"tools/metro-serializer-esbuild",title:"metro-serializer-esbuild",description:"Stability Beta",source:"@site/docs/tools/metro-serializer-esbuild.md",sourceDirName:"tools",slug:"/tools/metro-serializer-esbuild",permalink:"/rnx-kit/docs/tools/metro-serializer-esbuild",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-serializer-esbuild.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-serializer",permalink:"/rnx-kit/docs/tools/metro-serializer"},next:{title:"react-native-auth",permalink:"/rnx-kit/docs/tools/react-native-auth"}},s={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>target</code>",id:"target",level:3},{value:"<code>fabric</code>",id:"fabric",level:3},{value:"<code>minify</code>",id:"minify",level:3},{value:"<code>minifyWhitespace</code>",id:"minifywhitespace",level:3},{value:"<code>minifyIdentifiers</code>",id:"minifyidentifiers",level:3},{value:"<code>minifySyntax</code>",id:"minifysyntax",level:3},{value:"<code>sourceMapPaths</code>",id:"sourcemappaths",level:3},{value:"<code>strictMode</code>",id:"strictmode",level:3},{value:"<code>analyze</code>",id:"analyze",level:3},{value:"<code>logLevel</code>",id:"loglevel",level:3},{value:"<code>metafile</code>",id:"metafile",level:3},{value:"Metro + ESM Support",id:"metro--esm-support",level:2},{value:"Known Limitations",id:"known-limitations",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metro-serializer-esbuild"},"metro-serializer-esbuild"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Stability-Beta-3bf",alt:"Stability Beta"})),(0,a.kt)("p",null,"Allow Metro to use ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io"},"esbuild")," for bundling and\nserialization."),(0,a.kt)("p",null,"This tool is in Beta, and has been yielding good results so far. See the list of\nknown issues below for more information."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Metro currently does not implement tree shaking, i.e. it does not attempt to\nremove unused code from the JS bundle. For instance, given this code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { partition } from "lodash";\n')),(0,a.kt)("p",null,"Metro will bundle all of ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash")," in your bundle even though you're only using a\nsmall part of it. In ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash"),"'s case, you can add\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lodash/babel-plugin-lodash#readme"},(0,a.kt)("inlineCode",{parentName:"a"},"babel-plugin-lodash"))," to\nyour Babel config to help Metro strip away some modules, but not all libraries\nwill come with such helpers. For more details, see issues\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/issues/227"},"#227")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/issues/632"},"#632"),"."),(0,a.kt)("p",null,"metro-serializer-esbuild addresses this by letting esbuild take over bundling."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"This plugin currently depends on some unstable features introduced in Metro\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/releases/tag/v0.66.1"},"0.66.1"),". Breaking\nchanges were introduced in Metro 0.60, so this plugin will not work with React\nNative below 0.64."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"esbuild works best when we pass it ES6 modules. The first thing we must do is to\ndisable import/export transformation by enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"disableImportExportTransform"),"\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+const env = process.env.BABEL_ENV || process.env.NODE_ENV;\n module.exports = {\n   presets: [\n     [\n       "module:metro-react-native-babel-preset",\n+      {\n+        disableImportExportTransform:\n+          env === "production" && process.env["RNX_METRO_SERIALIZER_ESBUILD"],\n+      },\n     ],\n   ],\n };\n')),(0,a.kt)("p",null,"To avoid issues with dev server, we only want to enable\n",(0,a.kt)("inlineCode",{parentName:"p"},"disableImportExportTransform")," when bundling for production."),(0,a.kt)("p",null,"If you're using ",(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/babel-preset-metro-react-native"),", you don't need to\nmake any changes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that Hermes currently does not fully implement the\n",(0,a.kt)("a",{parentName:"p",href:"https://kangax.github.io/compat-table/es6/"},"ES6 spec"),". esbuild, on the other\nhand, does not fully support\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild/issues/297"},"lowering to ES5"),'. This\nessentially means that you may have to add additional plugins if you\'re seeing\nesbuild outputting "target environment is not supported yet" errors during\nbundle. For an example, see the error and its solution in\n',(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/issues/1743"},"#1743"),".")),(0,a.kt)("p",null,"Next, configure Metro to use the esbuild serializer by making the following\nchanges to ",(0,a.kt)("inlineCode",{parentName:"p"},"metro.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const {\n+  MetroSerializer,\n+  esbuildTransformerConfig,\n+} = require("@rnx-kit/metro-serializer-esbuild");\n\n module.exports = makeMetroConfig({\n   serializer: {\n+    customSerializer: MetroSerializer(),\n   },\n+  transformer: esbuildTransformerConfig,\n });\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"esbuildTransformerConfig")," is incompatible with dev server and debug\nbuilds. It should only be set when bundling for production.")),(0,a.kt)("p",null,"We can now create a bundle as usual, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"react-native bundle --entry-file index.js --platform ios --dev false ...\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Similar to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/metro-serializer#usage"},(0,a.kt)("inlineCode",{parentName:"a"},"metro-serializer")),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"metro-serializer-esbuild")," also supports plugins. Additionally, you can\nconfigure the output of the plugin by passing an options object as the second\nparameter. For instance, to output ES6 compliant code, set the target option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},' const myPlugins = [...];\n module.exports = makeMetroConfig({\n   serializer: {\n     customSerializer: MetroSerializer(myPlugins, {\n+      target: "es6"\n     }),\n   },\n   transformer: esbuildTransformerConfig,\n });\n')),(0,a.kt)("p",null,"Below are all the currently supported options."),(0,a.kt)("h3",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("p",null,"Sets the target environment for the transpiled JavaScript code."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#target"},"https://esbuild.github.io/api/#target"),"."),(0,a.kt)("p",null,"Values: Any JS language version string such as ",(0,a.kt)("inlineCode",{parentName:"p"},"es6")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"esnext"),". You can also\nuse environment names. See the full documentation for a list of supported names."),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"hermes0.7.0"),"."),(0,a.kt)("h3",{id:"fabric"},(0,a.kt)("inlineCode",{parentName:"h3"},"fabric")),(0,a.kt)("p",null,"When enabled, includes Fabric-enabled version of React. You can save some bytes\nby disabling this if you haven't migrated to Fabric yet."),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"minify"},(0,a.kt)("inlineCode",{parentName:"h3"},"minify")),(0,a.kt)("p",null,"When enabled, the generated code will be minified instead of pretty-printed."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#minify"},"https://esbuild.github.io/api/#minify"),"."),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in production environment; ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h3",{id:"minifywhitespace"},(0,a.kt)("inlineCode",{parentName:"h3"},"minifyWhitespace")),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"minify")," but only removes whitespace."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#minify"},"https://esbuild.github.io/api/#minify"),"."),(0,a.kt)("p",null,"By default, this option is not set."),(0,a.kt)("h3",{id:"minifyidentifiers"},(0,a.kt)("inlineCode",{parentName:"h3"},"minifyIdentifiers")),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"minify")," but only renames local variables to be shorter."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#minify"},"https://esbuild.github.io/api/#minify"),"."),(0,a.kt)("p",null,"By default, this option is not set."),(0,a.kt)("h3",{id:"minifysyntax"},(0,a.kt)("inlineCode",{parentName:"h3"},"minifySyntax")),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"minify")," but only rewrites syntax to be more compact."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#minify"},"https://esbuild.github.io/api/#minify"),"."),(0,a.kt)("p",null,"By default, this option is not set."),(0,a.kt)("h3",{id:"sourcemappaths"},(0,a.kt)("inlineCode",{parentName:"h3"},"sourceMapPaths")),(0,a.kt)("p",null,"Determines whether paths in the output source map are absolute or relative to\nthe directory containing the source map."),(0,a.kt)("p",null,"Values: ",(0,a.kt)("inlineCode",{parentName:"p"},"absolute")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"relative")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"relative"),"."),(0,a.kt)("h3",{id:"strictmode"},(0,a.kt)("inlineCode",{parentName:"h3"},"strictMode")),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},'"use strict";')," directive is added by Babel and esbuild when\nlowering to ES5. You can save some bytes by telling this serializer to strip\nthem from the bundle."),(0,a.kt)("p",null,"Note that disabling ",(0,a.kt)("inlineCode",{parentName:"p"},"strictMode")," here will definitely break source maps. It is\nrecommended to try disabling strict mode in Babel or TypeScript first before\nconsidering this option. If you can target ES6, that is a better alternative."),(0,a.kt)("p",null,"This flag only affects production environment."),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h3",{id:"analyze"},(0,a.kt)("inlineCode",{parentName:"h3"},"analyze")),(0,a.kt)("p",null,"Sets whether esbuild should output a report at the end of bundling."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#analyze"},"https://esbuild.github.io/api/#analyze"),"."),(0,a.kt)("p",null,"Values: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"verbose")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"loglevel"},(0,a.kt)("inlineCode",{parentName:"h3"},"logLevel")),(0,a.kt)("p",null,"The log level passed to esbuild."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#log-level"},"https://esbuild.github.io/api/#log-level")),(0,a.kt)("p",null,"Values: ",(0,a.kt)("inlineCode",{parentName:"p"},"verbose")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"warning")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"silent")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),"."),(0,a.kt)("h3",{id:"metafile"},(0,a.kt)("inlineCode",{parentName:"h3"},"metafile")),(0,a.kt)("p",null,"The path to write metadata to, relative to the package root."),(0,a.kt)("p",null,"Determines whether esbuild should produce some metadata about the build in JSON\nformat."),(0,a.kt)("p",null,"See the full documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#metafile"},"https://esbuild.github.io/api/#metafile"),"."),(0,a.kt)("h2",{id:"metro--esm-support"},"Metro + ESM Support"),(0,a.kt)("p",null,"Metro currently does not support ESM. However, if you're looking to save even\nmore bytes, and are comfortable with solving CJS vs ESM resolution issues, you\ncan try adding ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," to\n",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/docs/configuration#resolvermainfields"},(0,a.kt)("inlineCode",{parentName:"a"},"resolver.resolverMainFields")),"\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"metro.config.js"),". This will tell Metro to always pick ESM over CJS when\npossible. Note that this can lead to unexpected errors since you cannot import\nESM from CJS. Until ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/issues/670"},"https://github.com/facebook/metro/issues/670")," lands, you are\nbasically on your own to fix any issues that might come up."),(0,a.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dev server does not play well with ",(0,a.kt)("inlineCode",{parentName:"li"},"esbuildTransformerConfig"),". To work around\nthis limitation, you can save the esbuild specific Metro config to a separate\nfile and only specify it when needed, e.g.:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"react-native bundle ... --config metro+esbuild.config.js\n"))),(0,a.kt)("li",{parentName:"ul"},"esbuild does not properly tree-shake ",(0,a.kt)("inlineCode",{parentName:"li"},"export *"),". This is a known limitation\n(see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/1420"},"https://github.com/evanw/esbuild/issues/1420"),"). It is also not recommended\nto use ",(0,a.kt)("inlineCode",{parentName:"li"},"export *")," in your code as they may lead to duplicate exports. For more\ndetails, read ",(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/Z021hgSGStKlYLwsqNMOcg"},"https://hackmd.io/Z021hgSGStKlYLwsqNMOcg"),". This can be mitigated\nwith an ESLint rule, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"no-export-all")," from\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/eslint-plugin#readme"},(0,a.kt)("inlineCode",{parentName:"a"},"@rnx-kit/eslint-plugin")),"."),(0,a.kt)("li",{parentName:"ul"},"esbuild is incompatible with\n",(0,a.kt)("a",{parentName:"li",href:"https://facebook.github.io/metro/docs/bundling/#indexed-ram-bundle"},"RAM bundle"),".\nIf you require RAM bundles, you cannot use this serializer. In fact, Metro\nwill simply ignore it.")))}m.isMDXComponent=!0}}]);