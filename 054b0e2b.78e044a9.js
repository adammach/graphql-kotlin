(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{234:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=t,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,s(s({ref:n},c),{},{components:r})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},235:function(e,n,r){"use strict";function t(e){var n,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(a&&(a+=" "),a+=r);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(n=t(e))&&(a&&(a+=" "),a+=n);return a}},236:function(e,n,r){"use strict";var t=r(0),a=r(237);n.a=function(){var e=Object(t.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},237:function(e,n,r){"use strict";var t=r(0),a=Object(t.createContext)(void 0);n.a=a},238:function(e,n,r){"use strict";var t=r(0),a=r.n(t),i=r(236),o=r(235),s=r(52),l=r.n(s),c=37,u=39;n.a=function(e){var n=e.lazy,r=e.block,s=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(t.useState)(s),h=v[0],y=v[1],O=t.Children.toArray(e.children);if(null!=b){var j=g[b];null!=j&&j!==h&&p.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=b&&f(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var n=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,r){switch(r.keyCode){case u:!function(e,n){var r=e.indexOf(n)+1;e[r]?e[r].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var r=e.indexOf(n)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},r)}))),n?Object(t.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(t.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},239:function(e,n,r){"use strict";var t=r(0),a=r.n(t);n.a=function(e){var n=e.children,r=e.hidden,t=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:t},n)}},293:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/spring-initializer-194b68b7c5cb948d85ee32581fbff955.png"},65:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return b}));var t=r(3),a=r(7),i=(r(0),r(234)),o=r(238),s=r(239),l={id:"spring-overview",title:"Spring Server Overview",original_id:"spring-overview"},c={unversionedId:"server/spring-server/spring-overview",id:"version-4.x.x/server/spring-server/spring-overview",isDocsHomePage:!1,title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-overview.mdx",slug:"/server/spring-server/spring-overview",permalink:"/graphql-kotlin/server/spring-server/spring-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/docs/versioned_docs/version-4.x.x/server/spring-server/spring-overview.mdx",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613780568,sidebar:"version-4.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/server/server-subscriptions"},next:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/server/spring-server/spring-beans"}},u=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Writing Schema Code",id:"writing-schema-code",children:[]},{value:"Default Routes",id:"default-routes",children:[]}],p={toc:u};function b(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server"),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."),Object(i.b)("h2",{id:"webflux-vs-webmvc"},"WebFlux vs WebMVC"),Object(i.b)("p",null,"This library is built on a ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring WebFlux (reactive)")," stack which is a non-blocking alternative to a traditional ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html"},"Spring Web MVC (servlet)")," based stack.\nSince both frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," all your queries and mutations should follow one of the supported ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/schema-generator/execution/async-models"},"asynchronous execution models"),"."),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"The simplest way to create a new Kotlin Spring Boot app is by generating one using ",Object(i.b)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image of https://start.spring.io/",src:r(293).default})),Object(i.b)("p",null,"Once you get the sample application setup locally, you will need to add ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," dependency:"),Object(i.b)(o.a,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"gradle",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'```kotlin\nimplementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n```\n'))),Object(i.b)(s.a,{value:"maven",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"```xml\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n```\n")))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"At a minimum, in order for ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."),Object(i.b)("p",null,"You can do this through the spring application config or by overriding the ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," bean. See customization below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'\ngraphql:\n  packages:\n    - "com.your.package"\n\n')),Object(i.b)("h2",{id:"writing-schema-code"},"Writing Schema Code"),Object(i.b)("p",null,"In order to expose your queries, mutations, and/or subscriptions in the GraphQL schema, implement\ncorresponding marker interface and they will be automatically picked up by ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n\n")),Object(i.b)("p",null,"The above code will result in a GraphQL server with following schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n\n")),Object(i.b)("h2",{id:"default-routes"},"Default Routes"),Object(i.b)("p",null,"Your newly created GraphQL server starts up with following preconfigured default routes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"/graphql")," - GraphQL server endpoint used for processing queries and mutations"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"/subscriptions")," - GraphQL server endpoint used for processing subscriptions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"/sdl")," - Convenience endpoint that returns current schema in Schema Definition Language format"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"/playground")," - Prisma Labs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground IDE")," endpoint")))}b.isMDXComponent=!0}}]);