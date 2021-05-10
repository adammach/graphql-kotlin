(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(182)),o={id:"data-fetching-environment",title:"Data Fetching Environment",original_id:"data-fetching-environment"},c={unversionedId:"schema-generator/execution/data-fetching-environment",id:"version-3.x.x/schema-generator/execution/data-fetching-environment",isDocsHomePage:!1,title:"Data Fetching Environment",description:"Each resolver has access to a DataFetchingEnvironment that provides additional information about the currently executed query including information about what data is requested",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/data-fetching-environment.md",slug:"/schema-generator/execution/data-fetching-environment",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/data-fetching-environment.md",version:"3.x.x",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620668166,sidebar:"version-3.x.x/docs",previous:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/exceptions"},next:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"}},l=[],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each resolver has access to a ",Object(i.b)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," that provides additional information about the currently executed query including information about what data is requested\nas well as details about current execution state. For more details on the ",Object(i.b)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," please refer to ",Object(i.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/data-fetching/"},"graphql-java documentation")),Object(i.b)("p",null,"You can access this info by including the ",Object(i.b)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as one of the arguments to a Kotlin function. This argument will be automatically populated and injected\nduring the query execution but will not be included in the schema definition."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nclass Query {\n    fun printEnvironmentInfo(parentField: String): MyObject = MyObject()\n}\n\nclass MyObject {\n  fun printParentField(childField: String, environment: DataFetchingEnvironment): String {\n    val parentField = environment.executionStepInfo.parent.getArgument("parentField")\n    return "The parentField was $parentField and the childField was $childField"\n  }\n}\n\n')),Object(i.b)("p",null,"This will produce the following schema"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  printEnvironmentInfo(parentField: String!): MyObject!\n}\n\ntype MyObject {\n  printParentField(childField: String!): String!\n}\n\n")),Object(i.b)("p",null,"Then the following query would return ",Object(i.b)("inlineCode",{parentName:"p"},'"The parentField was foo and the childField was bar"')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'\n{\n  printEnvironmentInfo(parentField: "foo") {\n    printParentField(childField: "bar")\n  }\n}\n\n')),Object(i.b)("p",null,"You can also use this to retrieve arguments and query information from higher up the query chain. You can see a working\nexample in the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-example")," module\n","[",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/EnvironmentQuery.kt"},"link"),"]."))}u.isMDXComponent=!0}}]);