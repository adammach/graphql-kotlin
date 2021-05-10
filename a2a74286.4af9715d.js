(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(182)),i=n(187),o=n(188),c={id:"gradle-plugin-tasks",title:"Gradle Plugin Tasks",sidebar_label:"Tasks"},b={unversionedId:"plugins/gradle-plugin-tasks",id:"plugins/gradle-plugin-tasks",isDocsHomePage:!1,title:"Gradle Plugin Tasks",description:"GraphQL Kotlin Gradle Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/docs/plugins/gradle-plugin-tasks.mdx",slug:"/plugins/gradle-plugin-tasks",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/gradle-plugin-tasks.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620668166,sidebar_label:"Tasks",sidebar:"docs",previous:{title:"Client Serialization",permalink:"/graphql-kotlin/docs/client/client-serialization"},next:{title:"Gradle Plugin Usage",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-usage"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Extension",id:"extension",children:[]},{value:"Tasks",id:"tasks",children:[{value:"graphqlDownloadSDL",id:"graphqldownloadsdl",children:[]},{value:"graphqlGenerateClient",id:"graphqlgenerateclient",children:[]},{value:"graphqlGenerateSDL",id:"graphqlgeneratesdl",children:[]},{value:"graphqlGenerateTestClient",id:"graphqlgeneratetestclient",children:[]},{value:"graphqlIntrospectSchema",id:"graphqlintrospectschema",children:[]}]}],d={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"GraphQL Kotlin Gradle Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled."))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," is published on Gradle ",Object(l.b)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/com.expediagroup.graphql"},"Plugin Portal"),".\nIn order to execute any of the provided tasks you need to first apply the plugin on your project."),Object(l.b)(i.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(l.b)("p",null,"Using plugins DSL syntax"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("com.expediagroup.graphql") version $graphQLKotlinVersion\n}\n')),Object(l.b)("p",null,"Or by using legacy plugin application"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n  repositories {\n    maven {\n      url = uri("https://plugins.gradle.org/m2/")\n    }\n  }\n  dependencies {\n    classpath("com.expediagroup:graphql-kotlin-gradle-plugin:$graphQLKotlinVersion")\n  }\n}\n\napply(plugin = "com.expediagroup.graphql")\n'))),Object(l.b)(o.a,{value:"groovy",mdxType:"TabItem"},Object(l.b)("p",null,"Using plugins DSL syntax"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},"// build.gradle\nplugins {\n    id 'com.expediagroup.graphql' version $graphQLKotlinVersion\n}\n")),Object(l.b)("p",null,"Or by using legacy plugin application"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nbuildscript {\n  repositories {\n    maven {\n      url "https://plugins.gradle.org/m2/"\n    }\n  }\n  dependencies {\n    classpath "com.expediagroup:graphql-kotlin-gradle-plugin:$graphQLKotlinVersion"\n  }\n}\n\napply plugin: "com.expediagroup.graphql"\n')))),Object(l.b)("h2",{id:"extension"},"Extension"),Object(l.b)("p",null,"GraphQL Kotlin Gradle Plugin uses an extension on the project named ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," of type\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/plugins/graphql-kotlin-gradle-plugin/src/main/kotlin/com/expediagroup/graphql/plugin/gradle/GraphQLPluginExtension.kt"},"GraphQLPluginExtension"),".\nThis extension can be used to configure global options instead of explicitly configuring individual tasks. Once extension\nis configured, it will automatically download SDL/run introspection to generate GraphQL schema and subsequently generate\nall GraphQL clients. GraphQL Extension should be used by default, except for cases where you need to only run individual\ntasks."),Object(l.b)(i.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n    allowDeprecatedFields = false\n    // List of custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint`.\n    endpoint = "http://localhost:8080/graphql"\n    // Optional HTTP headers to be specified on an introspection query or SDL request.\n    headers = mapOf("X-Custom-Header" to "Custom-Header-Value")\n    // Target package name to be used for generated classes.\n    packageName = "com.example.generated"\n    // Custom directory containing query files, defaults to src/main/resources\n    queryFileDirectory = "${project.projectDir}/src/main/resources/queries"\n    // Optional list of query files to be processed, takes precedence over queryFileDirectory\n    queryFiles = listOf(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    // JSON serializer that will be used to generate the data classes.\n    serializer = GraphQLSerializer.JACKSON\n    // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint`.\n    sdlEndpoint = "http://localhost:8080/sdl"\n    // Timeout configuration for introspection query/downloading SDL\n    timeout {\n        // Connect timeout in milliseconds\n        connect = 5_000\n        // Read timeout in milliseconds\n        read = 15_000\n    }\n  }\n  schema {\n    // List of supported packages that can contain GraphQL schema type definitions\n    packages = listOf("com.example")\n  }\n}\n'))),Object(l.b)(o.a,{value:"groovy",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\ngraphql {\n    client {\n        // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n        allowDeprecatedFields = false\n        // List of custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n        customScalars = [new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter")]\n        // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint`.\n        endpoint = "http://localhost:8080/graphql"\n        // Optional HTTP headers to be specified on an introspection query or SDL request.\n        headers = ["X-Custom-Header" : "My-Custom-Header-Value"]\n        // Target package name to be used for generated classes.\n        packageName = "com.example.generated"\n        // Custom directory containing query files, defaults to src/main/resources\n        queryFileDirectory = "${project.projectDir}/src/main/resources/queries"\n        // Optional list of query files to be processed, takes precedence over queryFileDirectory\n        queryFiles = [file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")]\n        // JSON serializer that will be used to generate the data classes.\n        serializer = GraphQLSerializer.JACKSON\n        // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint`.\n        sdlEndpoint = "http://localhost:8080/sdl"\n        // Timeout configuration for introspection query/downloading SDL\n        timeout { t ->\n            // Connect timeout in milliseconds\n            t.connect = 5000\n            t.read = 15000\n        }\n    }\n    schema {\n        packages = ["com.example"]\n    }\n}\n')))),Object(l.b)("h2",{id:"tasks"},"Tasks"),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," lazily registers all its tasks which means that while they are known to the build,\nthey are not created nor executed until something in the build needs the instantiated object (e.g. adding explicit dependency\non those tasks or explicitly creating them). ",Object(l.b)("strong",{parentName:"p"},"Configuring plugin through the ",Object(l.b)("inlineCode",{parentName:"strong"},"graphql")," extension will automatically create\nall the corresponding tasks"),"."),Object(l.b)("p",null,"All ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," tasks are grouped together under ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQL")," task group and their names are prefixed with\n",Object(l.b)("inlineCode",{parentName:"p"},"graphql"),". You can find detailed information about GraphQL kotlin tasks by running Gradle ",Object(l.b)("inlineCode",{parentName:"p"},"help --task <taskName>")," task."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ gradle --tasks\n\nGraphQL tasks\n-------------\ngraphqlDownloadSDL - Download schema in SDL format from target endpoint.\ngraphqlGenerateClient - Generate HTTP client from the specified GraphQL queries.\ngraphqlGenerateSDL - Generate GraphQL schema in SDL format.\ngraphqlGenerateTestClient - Generate HTTP test client from the specified GraphQL queries.\ngraphqlIntrospectSchema - Run introspection query against target GraphQL endpoint and save schema locally.--&gt;\n")),Object(l.b)("h3",{id:"graphqldownloadsdl"},"graphqlDownloadSDL"),Object(l.b)("p",null,"Task that attempts to download GraphQL schema in SDL format from the specified ",Object(l.b)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying\nschema file as ",Object(l.b)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself\nand could be used as an alternative to ",Object(l.b)("inlineCode",{parentName:"p"},"graphqlIntrospectSchema")," to generate input for the subsequent\n",Object(l.b)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endpoint")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"endpoint"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"headers")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Map<String, Any>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"outputFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"timeoutConfig")),Object(l.b)("td",{parentName:"tr",align:null},"TimeoutConfig"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value are:"),Object(l.b)("br",null),"connect timeout = 5_000",Object(l.b)("br",null),"read timeout = 15_000.",Object(l.b)("br",null))))),Object(l.b)("h3",{id:"graphqlgenerateclient"},"graphqlGenerateClient"),Object(l.b)("p",null,"Task that generates GraphQL Kotlin client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual clients with their specific data models are generated for each query\nfile and are placed under specified ",Object(l.b)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project, either through explicit configuration\nor through the ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," extension, it will automatically configure itself as a dependency of a ",Object(l.b)("inlineCode",{parentName:"p"},"compileKotlin")," task and\nresulting generated code will be automatically added to the project main source set."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"false"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"customScalars")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<GraphQLScalar>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packageName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target package name for generated code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"packageName"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")),Object(l.b)("td",{parentName:"tr",align:null},"FileCollection"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"src/main/resources"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"serializer")),Object(l.b)("td",{parentName:"tr",align:null},"GraphQLSerializer"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName")," or ",Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName")," or ",Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),Object(l.b)("td",{parentName:"tr",align:null},"Path to GraphQL schema file that will be used to generate client code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName"),".")))),Object(l.b)("p",null,"By default, this task will generate Jackson compatible data models. See ",Object(l.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-serialization"},"client serialization documentation"),"\nfor details on how to update this process to use ",Object(l.b)("inlineCode",{parentName:"p"},"kotlinx.serialization")," instead."),Object(l.b)("h3",{id:"graphqlgeneratesdl"},"graphqlGenerateSDL"),Object(l.b)("p",null,"Task that generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",Object(l.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this task requires users to provide a list of ",Object(l.b)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packages")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<String>")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),Object(l.b)("p",null,"By default, this task will attempt to generate the schema using ",Object(l.b)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If you need to customize your\nschema generation process, you will need to provide your custom instance of ",Object(l.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service provider.\nService provider can be provided as part of your project, included in one of your project dependencies or through explicitly\nprovided artifact to the ",Object(l.b)("inlineCode",{parentName:"p"},"graphqlSDL")," configuration."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n')),Object(l.b)("h3",{id:"graphqlgeneratetestclient"},"graphqlGenerateTestClient"),Object(l.b)("p",null,"Task that generates GraphQL Kotlin test client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual test clients with their specific data models are generated for each query\nfile and are placed under specified ",Object(l.b)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project it will automatically configure\nitself as a dependency of a ",Object(l.b)("inlineCode",{parentName:"p"},"compileTestKotlin")," task and resulting generated code will be automatically added to the project\ntest source set."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"false"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"customScalars")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<GraphQLScalar>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packageName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target package name for generated code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"packageName"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")),Object(l.b)("td",{parentName:"tr",align:null},"FileCollection"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"src/test/resources"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"serializer")),Object(l.b)("td",{parentName:"tr",align:null},"GraphQLSerializer"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName")," or ",Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName")," or ",Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),Object(l.b)("td",{parentName:"tr",align:null},"Path to GraphQL schema file that will be used to generate client code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"schemaFileName"),".")))),Object(l.b)("p",null,"By default, this task will generate Jackson compatible data models. See ",Object(l.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-serialization"},"client serialization documentation"),"\nfor details on how to update this process to use ",Object(l.b)("inlineCode",{parentName:"p"},"kotlinx.serialization")," instead."),Object(l.b)("h3",{id:"graphqlintrospectschema"},"graphqlIntrospectSchema"),Object(l.b)("p",null,"Task that executes GraphQL introspection query against specified ",Object(l.b)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying schema file as\n",Object(l.b)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself and instead\nshould be used to generate input for the subsequent ",Object(l.b)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endpoint")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Command line property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"endpoint"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"headers")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Map<String, Any>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"outputFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"timeoutConfig")),Object(l.b)("td",{parentName:"tr",align:null},"TimeoutConfig"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value are:"),Object(l.b)("br",null),"connect timeout = 5_000",Object(l.b)("br",null),"read timeout = 15_000.",Object(l.b)("br",null))))))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||l;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},184:function(e,t,n){"use strict";var a=n(0),r=n(185);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},185:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(184),i=n(183),o=n(53),c=n.n(o),b=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,s=e.groupId,u=e.className,m=Object(l.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(o),j=O[0],N=O[1],f=a.Children.toArray(e.children);if(null!=s){var y=g[s];null!=y&&y!==j&&d.some((function(e){return e.value===y}))&&N(y)}var v=function(e){N(e),null!=s&&h(s,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},u)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(a.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},188:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);