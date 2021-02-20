(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(234)),i={id:"spring-graphql-context",title:"Generating GraphQL Context"},p={unversionedId:"server/spring-server/spring-graphql-context",id:"server/spring-server/spring-graphql-context",isDocsHomePage:!1,title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a simple mechanism to build a GraphQL context per query execution through",source:"@site/docs/server/spring-server/spring-graphql-context.md",slug:"/server/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/next/server/spring-server/spring-graphql-context",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/docs/docs/server/spring-server/spring-graphql-context.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613780568,sidebar:"docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/next/server/spring-server/spring-schema"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/next/server/spring-server/spring-subscriptions"}},c=[],l={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a simple mechanism to build a ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/next/schema-generator/execution/contextual-data"},"GraphQL context")," per query execution through\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/GraphQLContextFactory.kt"},"GraphQLContextFactory"),".\nOnce a context factory bean is available, it will then be used in\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ContextWebFilter.kt"},"ContextWebFilter"),"\nto populate the GraphQL context based on the incoming request and make it available during query execution."),Object(o.b)("p",null,"For example if we define our custom context as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass MyGraphQLContext(val myCustomValue: String) : GraphQLContext\n\n")),Object(o.b)("p",null,"We can generate the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," bean:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@Component\nclass MyGraphQLContextFactory: GraphQLContextFactory<MyGraphQLContext> {\n    override suspend fun generateContext(\n        request: ServerHttpRequest,\n        response: ServerHttpResponse\n    ): MyGraphQLContext = MyGraphQLContext(\n        myCustomValue = request.headers.getFirst("MyHeader") ?: "defaultValue"\n    )\n}\n\n')),Object(o.b)("p",null,"Once your application is configured to build your custom ",Object(o.b)("inlineCode",{parentName:"p"},"MyGraphQLContext"),", we can then specify it as function argument but it will not be included in the schema.\nWhile executing the query, the corresponding GraphQL context will be read from the environment and automatically injected to the function input arguments."),Object(o.b)("p",null,"For more details see the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/next/schema-generator/execution/contextual-data"},"Contextual Data documentation"),"."))}s.isMDXComponent=!0},234:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||g[b]||o;return r?a.a.createElement(m,p(p({ref:t},l),{},{components:r})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);