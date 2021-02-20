(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{220:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(234)),o={id:"type-resolution",title:"Federated Type Resolution",original_id:"type-resolution"},s={unversionedId:"federated/type-resolution",id:"version-4.x.x/federated/type-resolution",isDocsHomePage:!1,title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-4.x.x/federated/type-resolution.md",slug:"/federated/type-resolution",permalink:"/graphql-kotlin/federated/type-resolution",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/docs/versioned_docs/version-4.x.x/federated/type-resolution.md",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1613780568,sidebar:"version-4.x.x/docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/federated/federated-directives"},next:{title:"GraphQLServer",permalink:"/graphql-kotlin/server/graphql-server"}},d=[{value:"<code>_entities</code> query",id:"_entities-query",children:[{value:"Federated Type Resolver",id:"federated-type-resolver",children:[]}]}],l={toc:d};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),Object(i.b)("h2",{id:"_entities-query"},Object(i.b)("inlineCode",{parentName:"h2"},"_entities")," query"),Object(i.b)("p",null,"A federated GraphQL server provides a custom ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query that allows retrieving any of the federated extended types.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',Object(i.b)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," directives as well as the target ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",Object(i.b)("inlineCode",{parentName:"p"},"@requires")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@provides")," directives, then those referenced fields should also be specified in\nthe target representation object."),Object(i.b)("p",null,">"," NOTE: ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," queries are automatically generated by the federated gateway and their usage is transparent for the\n",">"," gateway clients."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n\n")),Object(i.b)("h3",{id:"federated-type-resolver"},"Federated Type Resolver"),Object(i.b)("p",null,"In order to simplify the integrations, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides a default ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query resolver that\nretrieves the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeResolver.kt"},"FederatedTypeResolver"),"\nthat is used to resolve the specified ",Object(i.b)("inlineCode",{parentName:"p"},"__typename"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FederatedTypeResolver.typeName")," specifies the GraphQL type name that should match up to the ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field in the ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FederatedTypeResolver.resolve")," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or ",Object(i.b)("inlineCode",{parentName:"p"},"NULL")," if entity cannot be resolved."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\n// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query\nclass ProductResolver : FederatedTypeResolver<Product> {\n    override val typeName: String = "Product"\n\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()\n\n        // Instantiate product using id, otherwise return null\n        if (id != null) {\n            Product(id)\n        } else {\n            null\n        }\n    }\n}\n\n// If you are using "graphql-kotlin-spring-server", your FederatedTypeResolvers can be marked as Spring beans\n// and will automatically be added to the hooks\nval resolvers = listOf(productResolver)\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval schema = toFederatedSchema(config)\n\n')))}p.isMDXComponent=!0},234:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,b=c["".concat(o,".").concat(f)]||c[f]||u[f]||i;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);