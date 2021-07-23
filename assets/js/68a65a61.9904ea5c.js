(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3219],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var a=t(7294);const r=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(7294),r=t(9443);const i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=t(6010);const l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;const p=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),v=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,a.useState)(r),g=y[0],k=y[1],b=a.Children.toArray(e.children),I=[];if(null!=d){var x=v[d];null!=x&&x!==g&&p.some((function(e){return e.value===x}))&&k(x)}var S=function(e){var n=e.currentTarget,t=I.indexOf(n),a=p[t].value;k(a),null!=d&&(h(d,a),setTimeout((function(){var e,t,a,r,i,o,l,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,t>=0&&i<=c&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case u:var a=I.indexOf(e.target)+1;t=I[a]||I[0];break;case c:var r=I.indexOf(e.target)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:N,onFocus:S,onClick:S},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},9443:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});const a=(0,t(7294).createContext)(void 0)},799:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>f});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=t(5064),l=t(8215),s=["components"],c={id:"client-features",title:"Client Features"},u=void 0,p={unversionedId:"client/client-features",id:"version-4.x.x/client/client-features",isDocsHomePage:!1,title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/versioned_docs/version-4.x.x/client/client-features.mdx",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/4.x.x/client/client-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/client/client-features.mdx",version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1627070228,formattedLastUpdatedAt:"7/23/2021",frontMatter:{id:"client-features",title:"Client Features"},sidebar:"version-4.x.x/docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/4.x.x/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/4.x.x/client/client-customization"}},d=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",children:[]},{value:"Polymorphic Types Support",id:"polymorphic-types-support",children:[]},{value:"Default Enum Values",id:"default-enum-values",children:[]},{value:"Auto Generated Documentation",id:"auto-generated-documentation",children:[]},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",children:[]},{value:"Batch Operation Support",id:"batch-operation-support",children:[]}],m={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"jackson-and-kotlinx-serialization-support"},"Jackson and Kotlinx Serialization Support"),(0,i.kt)("p",null,"GraphQL Kotlin supports generation of client data models that are compatible with both ",(0,i.kt)("inlineCode",{parentName:"p"},"Jackson")," (default) and ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"\nformats. Build plugins and ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," default to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Jackson")," whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client"),"\ndefaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/client/client-serialization"},"client serialization documentation")," for additional details."),(0,i.kt)("h2",{id:"polymorphic-types-support"},"Polymorphic Types Support"),(0,i.kt)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nhave to ",(0,i.kt)("strong",{parentName:"p"},"explicitly specify all implementations"),". Polymorphic queries also have to explicitly request ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename"),"\nfield so it can be used to Jackson correctly distinguish between different implementations."),(0,i.kt)("p",null,"Given example schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n")),(0,i.kt)("p",null,"We can query interface field as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Which will generate following data models"),(0,i.kt)(o.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"jackson",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename"\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n'))),(0,i.kt)(l.Z,{value:"kotlinx",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n')))),(0,i.kt)("h2",{id:"default-enum-values"},"Default Enum Values"),(0,i.kt)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,i.kt)("inlineCode",{parentName:"p"},"__UNKNOWN_VALUE")," to all generated\nenums as a catch all safeguard for handling new enum values."),(0,i.kt)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),(0,i.kt)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),(0,i.kt)("p",null,"Given simple GraphQL object definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n')),(0,i.kt)("p",null,"Will result in a corresponding auto generated data class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Some basic description\n */\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n")),(0,i.kt)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),(0,i.kt)("p",null,"GraphQL Kotlin Client is a generic interface that exposes ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",(0,i.kt)("inlineCode",{parentName:"p"},"launch")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," for their results."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."),(0,i.kt)("h2",{id:"batch-operation-support"},"Batch Operation Support"),(0,i.kt)("p",null,"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n')))}f.isMDXComponent=!0},6010:(e,n,t)=>{"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:()=>r})}}]);