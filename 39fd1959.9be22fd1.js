(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(182)),o={id:"federated-schemas",title:"Federated Schemas"},d={unversionedId:"schema-generator/federation/federated-schemas",id:"schema-generator/federation/federated-schemas",isDocsHomePage:!1,title:"Federated Schemas",description:"graphql-kotlin-federation library extends the functionality of the graphql-kotlin-schema-generator and allows you to",source:"@site/docs/schema-generator/federation/federated-schemas.md",slug:"/schema-generator/federation/federated-schemas",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-schemas",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federated-schemas.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620668166,sidebar:"docs",previous:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/schema-generator/federation/apollo-federation"},next:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-directives"}},s=[{value:"Base Schema",id:"base-schema",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," library extends the functionality of the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and allows you to\neasily generate federated GraphQL schemas directly from the code. Federated schema is generated by calling\n",Object(i.b)("inlineCode",{parentName:"p"},"toFederatedSchema")," function that accepts federated configuration as well as a list of regular queries, mutations and\nsubscriptions exposed by the schema."),Object(i.b)("p",null,"All ",Object(i.b)("a",{parentName:"p",href:"federated-directives"},"federated directives")," are provided as annotations that are used to decorate your classes,\nproperties and functions. Since federated types might not be accessible through the regular query execution path, they\nare explicitly picked up by the schema generator based on their directives. Due to the above, we also need to provide\na way to instantiate the underlying federated objects by implementing corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"FederatedTypeResolvers"),". See\n",Object(i.b)("a",{parentName:"p",href:"type-resolution"},"type resolution wiki")," for more details on how federated types are resolved. Final federated schema\nis then generated by invoking the ",Object(i.b)("inlineCode",{parentName:"p"},"toFederatedSchema")," function\n(",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/toFederatedSchema.kt#L34"},"link"),")."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In order to generate valid federated schemas, you will need to annotate both your base schema and the one extending\nit"),". Federated Gateway (e.g. Apollo) will then combine the individual graphs to form single federated graph."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you are using custom ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," type then all of you federated GraphQL services have to use the same type. It is\nnot possible for federated services to have different definitions of ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," type."))),Object(i.b)("h3",{id:"base-schema"},"Base Schema"),Object(i.b)("p",null,"Base schema defines GraphQL types that will be extended by schemas exposed by other GraphQL services. In the example\nbelow, we define base ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type with ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"description")," fields. ",Object(i.b)("inlineCode",{parentName:"p"},"id")," is the primary key that uniquely\nidentifies the ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type object and is specified in ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," directive. Since it is a base schema that doesn't expose\nany extended functionality our FederatedTypeRegistry does not include any federated resolvers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\ndata class Product(val id: Int, val description: String)\n\nclass ProductQuery {\n  fun product(id: Int): Product? {\n    // grabs product from a data source, might return null\n  }\n}\n\n// Generate the schema\nval hooks = FederatedSchemaGeneratorHooks(emptyList())\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval queries = listOf(TopLevelObject(ProductQuery()))\n\ntoFederatedSchema(config, queries)\n')),Object(i.b)("p",null,"Example above generates the following schema with additional federated types:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'schema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @key(fields : "id") {\n  description: String!\n  id: Int!\n}\n\ntype Query @extends {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service\n  product(id: Int!): Product\n}\n\ntype _Service {\n  sdl: String!\n}\n')),Object(i.b)("h4",{id:"extended-schema"},"Extended Schema"),Object(i.b)("p",null,"Extended federated GraphQL schemas provide additional functionality to the types already exposed by other GraphQL\nservices. In the example below, ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type is extended to add new ",Object(i.b)("inlineCode",{parentName:"p"},"reviews")," field to it. Primary key needed to\ninstantiate the ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"id"),") has to match the ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," definition on the base type. Since primary keys are\ndefined on the base type and are only referenced from the extended type, all of the fields that are part of the field\nset specified in ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," directive have to be marked as ",Object(i.b)("inlineCode",{parentName:"p"},"@external"),'. Finally, we also need to specify an "entry point"\nfor the federated type\u200a-\u200awe need to create a FederatedTypeResolver that will be used to instantiate the federated\n',Object(i.b)("inlineCode",{parentName:"p"},"Product")," type when processing federated queries."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\ndata class Product(@ExternalDirective val id: Int) {\n    // Add the "reviews" field to the type\n    suspend fun reviews(): List<Review> = getReviewByProductId(id)\n}\n\ndata class Review(val reviewId: String, val text: String)\n\n// Resolve a "Product" type from the _entities query\nclass ProductResolver : FederatedTypeResolver<Product> {\n    override val typeName = "Product"\n\n    override suspend fun resolve(environment: DataFetchingEnvironment, representations: List<Map<String, Any>>): List<Product?> = representations.map { keys ->\n        keys["id"]?.toString()?.toIntOrNull()?.let { id -> Product(id) }\n    }\n}\n\n// Generate the schema\nval resolvers = listOf(ProductResolver())\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\n\ntoFederatedSchema(config)\n')),Object(i.b)("p",null,"Our extended schema will then be generated as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'schema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @extends @key(fields : "id") {\n  id: Int! @external\n  reviews: [Review!]!\n}\n\ntype Query @extends {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype _Service {\n  sdl: String!\n}\n')),Object(i.b)("h4",{id:"federated-graphql-schema"},"Federated GraphQL schema"),Object(i.b)("p",null,"Once we have both base and extended GraphQL services up and running, we will also need to configure Federated Gateway\nto combine them into a single schema. Using the examples above, our final federated schema will be generated as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n}\n\ntype Product {\n  description: String!\n  id: Int!\n  reviews: [Review!]!\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype Query {\n  product(id: String!): Product\n}\n")),Object(i.b)("p",null,"See our ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation"},"federation example")," for additional details."))}l.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(h,d(d({ref:t},c),{},{components:n})):r.a.createElement(h,d({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);