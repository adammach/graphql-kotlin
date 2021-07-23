(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6190],{3905:(e,n,i)=>{"use strict";i.d(n,{Zo:()=>s,kt:()=>g});var t=i(7294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(i),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return i?t.createElement(m,r(r({ref:n},s),{},{components:i})):t.createElement(m,r({ref:n},s))}));function g(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=i[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8215:(e,n,i)=>{"use strict";i.d(n,{Z:()=>a});var t=i(7294);const a=function(e){var n=e.children,i=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:i,className:a},n)}},5064:(e,n,i)=>{"use strict";i.d(n,{Z:()=>d});var t=i(7294),a=i(9443);const l=function(){var e=(0,t.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var r=i(6010);const o="tabItem_1uMI",p="tabItemActive_2DSg";var c=37,s=39;const d=function(e){var n=e.lazy,i=e.block,a=e.defaultValue,d=e.values,u=e.groupId,g=e.className,m=l(),h=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,t.useState)(a),f=v[0],x=v[1],y=t.Children.toArray(e.children),b=[];if(null!=u){var I=h[u];null!=I&&I!==f&&d.some((function(e){return e.value===I}))&&x(I)}var z=function(e){var n=e.currentTarget,i=b.indexOf(n),t=d[i].value;x(t),null!=u&&(k(u,t),setTimeout((function(){var e,i,t,a,l,r,o,c;(e=n.getBoundingClientRect(),i=e.top,t=e.left,a=e.bottom,l=e.right,r=window,o=r.innerHeight,c=r.innerWidth,i>=0&&l<=c&&a<=o&&t>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},N=function(e){var n,i;switch(e.keyCode){case s:var t=b.indexOf(e.target)+1;i=b[t]||b[0];break;case c:var a=b.indexOf(e.target)-1;i=b[a]||b[b.length-1]}null==(n=i)||n.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},d.map((function(e){var n=e.value,i=e.label;return t.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":f===n}),key:n,ref:function(e){return b.push(e)},onKeyDown:N,onFocus:z,onClick:z},i)}))),n?(0,t.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},9443:(e,n,i)=>{"use strict";i.d(n,{Z:()=>t});const t=(0,i(7294).createContext)(void 0)},568:(e,n,i)=>{"use strict";i.r(n),i.d(n,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>m});var t=i(2122),a=i(9756),l=(i(7294),i(3905)),r=i(5064),o=i(8215),p=["components"],c={id:"client-serialization",title:"Client Serialization"},s=void 0,d={unversionedId:"client/client-serialization",id:"version-4.x.x/client/client-serialization",isDocsHomePage:!1,title:"Client Serialization",description:"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with Jackson",source:"@site/versioned_docs/version-4.x.x/client/client-serialization.mdx",sourceDirName:"client",slug:"/client/client-serialization",permalink:"/graphql-kotlin/docs/4.x.x/client/client-serialization",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/client/client-serialization.mdx",version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1627070228,formattedLastUpdatedAt:"7/23/2021",frontMatter:{id:"client-serialization",title:"Client Serialization"},sidebar:"version-4.x.x/docs",previous:{title:"Client Customization",permalink:"/graphql-kotlin/docs/4.x.x/client/client-customization"},next:{title:"Tasks",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-tasks"}},u=[{value:"GraphQL Kotlin Spring Client",id:"graphql-kotlin-spring-client",children:[{value:"Using Jackson",id:"using-jackson",children:[]},{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization",children:[]}]},{value:"GraphQL Kotlin Ktor Client",id:"graphql-kotlin-ktor-client",children:[{value:"Using Kotlinx Serialization",id:"using-kotlinx-serialization-1",children:[]},{value:"Using Jackson",id:"using-jackson-1",children:[]}]}],g={toc:u};function m(e){var n=e.components,i=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,t.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin build plugins can generate GraphQL client data classes that are compatible with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},(0,l.kt)("inlineCode",{parentName:"a"},"Jackson")),"\n(default) or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},(0,l.kt)("inlineCode",{parentName:"a"},"kotlinx.serialization"))," data models. By default, GraphQL\nclients will attempt to pick up the appropriate serializer from a classpath - ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," defines implicit\ndependency on ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," based serializer and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client")," define a dependency on a ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientSerializer")," is a service provider interface that expose generic serialize/deserialize methods that are used\nby the GraphQL clients to serialize requests to String and deserialize responses from String. By utilizing Java ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism we can dynamically load appropriate serializer from the classpath. If there are multiple providers on the classpath,\nwe default to select the first one available one on the classpath."),(0,l.kt)("h2",{id:"graphql-kotlin-spring-client"},"GraphQL Kotlin Spring Client"),(0,l.kt)("h3",{id:"using-jackson"},"Using Jackson"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," is the default serializer used by the build plugins and by GraphQL Kotlin Spring Client."),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientJacksonSerializer()\n)\n')),(0,l.kt)("h3",{id:"using-kotlinx-serialization"},"Using Kotlinx Serialization"),(0,l.kt)("p",null,"In order to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," we need to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-serialization")),(0,l.kt)("li",{parentName:"ul"},"configure GraphQL plugin to generate ",(0,l.kt)("inlineCode",{parentName:"li"},"kotlinx.serialization")," compatible data models"),(0,l.kt)("li",{parentName:"ul"},"configure corresponding compiler plugin"),(0,l.kt)("li",{parentName:"ul"},"explicitly specify the target serializer during client construction OR exclude ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-jackson")," dependency")),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-spring-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-jackson")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-serialization", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-jackson</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-serialization</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLWebClient(\n  url = "http://localhost:8080/graphql"\n  serializer = GraphQLClientKotlinxSerializer()\n)\n')),(0,l.kt)("h2",{id:"graphql-kotlin-ktor-client"},"GraphQL Kotlin Ktor Client"),(0,l.kt)("h3",{id:"using-kotlinx-serialization-1"},"Using Kotlinx Serialization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," is the default serializer used by the GraphQL Kotlin Ktor Client. Build plugins default to use\n",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," so we have to explicitly configure the tasks/mojos to use appropriate serializer."),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n    serializer = GraphQLSerializer.KOTLINX\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(\n  url = URL("http://localhost:8080/graphql")\n  serializer = GraphQLClientKotlinxSerializer()\n)\n')),(0,l.kt)("h3",{id:"using-jackson-1"},"Using Jackson"),(0,l.kt)("p",null,"In order to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," we need to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-jackson")),(0,l.kt)("li",{parentName:"ul"},"explicitly specify the target serializer during client construction OR exclude ",(0,l.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-client-serialization")," dependency")),(0,l.kt)(r.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ndependencies {\n    implementation("com.expediagroup", "graphql-kotlin-ktor-client", $graphQLKotlinVersion) {\n        exclude("com.expediagroup", "graphql-kotlin-client-serialization")\n    }\n    implementation("com.expediagroup", "graphql-kotlin-client-jackson", $graphQLKotlinVersion)\n}\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    \x3c!-- other elements omitted for brewity --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.expediagroup</groupId>\n                    <artifactId>graphql-kotlin-client-serialization</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client-jackson</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>introspect-schema</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")))),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," mechanism will load the first available GraphQL client serializer from the classpath. We can\nalso explicitly specify serializer during client construction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(\n  url = URL("http://localhost:8080/graphql")\n  serializer = GraphQLClientJacksonSerializer()\n)\n')))}m.isMDXComponent=!0},6010:(e,n,i)=>{"use strict";function t(e){var n,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(i=t(e[n]))&&(a&&(a+=" "),a+=i);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(n=t(e))&&(a&&(a+=" "),a+=n);return a}i.d(n,{Z:()=>a})}}]);