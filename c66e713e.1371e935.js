/*! For license information please see c66e713e.1371e935.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),l=(n(0),n(190)),i=n(194),o=n(195),c={title:"Queries"},s={id:"concepts/queries",title:"Queries",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/concepts/queries.mdx",permalink:"/nestjs-query/docs/concepts/queries",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/queries.mdx",sidebar:"docs",previous:{title:"DTOs",permalink:"/nestjs-query/docs/concepts/dtos"},next:{title:"Services",permalink:"/nestjs-query/docs/concepts/services"}},b=[{value:"Filtering",id:"filtering",children:[{value:"Simple",id:"simple",children:[]},{value:"Multiple Fields",id:"multiple-fields",children:[]},{value:"And/Or",id:"andor",children:[]}]},{value:"Paging",id:"paging",children:[]},{value:"Sorting",id:"sorting",children:[]}],p={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The core of ",Object(l.b)("inlineCode",{parentName:"p"},"nestjs-query")," is the ",Object(l.b)("inlineCode",{parentName:"p"},"Query"),", it is used by both ",Object(l.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," and ",Object(l.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm"),"."),Object(l.b)("p",null,"The query interface contains three optional fields."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"paging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sorting"))),Object(l.b)("p",null,"All examples will be based on the following class."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface MyClass {\n  title: string;\n  completed: boolean;\n  age: number;\n}\n")),Object(l.b)("h2",{id:"filtering"},"Filtering"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"filter")," field allows the filtering of fields based on the shape of the object the filter is used for."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE")," The ",Object(l.b)("inlineCode",{parentName:"p"},"Filter")," interface is typesafe and will complain if you include extra fields that are not present on the\ntype you are creating the query for."),Object(l.b)("p",null,"Lets create a simple filter that would allow us to filter for titles equal to ",Object(l.b)("inlineCode",{parentName:"p"},"'Foo Bar'")),Object(l.b)("h3",{id:"simple"},"Simple"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Query } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  filter: {\n    title: {eq: 'Foo Bar'},\n  },\n};\n")),Object(l.b)("h3",{id:"multiple-fields"},"Multiple Fields"),Object(l.b)("p",null,"You can also filter on multiple fields."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Query } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  filter: {\n    // the fields will be ANDed together by default\n    title: {eq: 'Foo Bar'},\n    completed: { is: true },\n    age: {gt: 10},\n  },\n};\n")),Object(l.b)("h3",{id:"andor"},"And/Or"),Object(l.b)("p",null,"The filter also allows for more complex ",Object(l.b)("inlineCode",{parentName:"p"},"and")," and ",Object(l.b)("inlineCode",{parentName:"p"},"or")," filters. The ",Object(l.b)("inlineCode",{parentName:"p"},"and")," and ",Object(l.b)("inlineCode",{parentName:"p"},"or")," accept an array of filters allowing\nfor nested complex queries."),Object(l.b)("p",null,"In this example we ",Object(l.b)("inlineCode",{parentName:"p"},"AND")," two filters for the same property together: ",Object(l.b)("inlineCode",{parentName:"p"},"age >= 10 AND age <= 20"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<MyClass> = {\n  filter: {\n    and: [\n      { age: { gte: 10 } },\n      { age: { lte: 20 } },\n    ],\n  },\n};\n")),Object(l.b)("p",null,"In this example a simple ",Object(l.b)("inlineCode",{parentName:"p"},"OR")," condition is created: ",Object(l.b)("inlineCode",{parentName:"p"},"age >= 10 OR title NOT LIKE '%bar'")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<MyClass> = {\n  filter: {\n    or: [\n      { age: { gte: 10 } },\n      { title: { notLike: '%bar' } },\n    ],\n  },\n};\n")),Object(l.b)("p",null,"This example combines ",Object(l.b)("inlineCode",{parentName:"p"},"AND")," and ",Object(l.b)("inlineCode",{parentName:"p"},"OR")," filters: ",Object(l.b)("inlineCode",{parentName:"p"},"age >= 10 AND (title LIKE '%bar' OR title = 'foobar')"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<MyClass> = {\n  filter: {\n    and: [\n      { age: { gte: 10 } },\n      {\n        or: [\n          { title: { like: '%bar' } },\n          { title: { eq: 'foobar' } },\n        ],\n      },\n    ],\n  },\n};\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"paging"},"Paging"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"core")," package defines a basic paging interface has two optional fields ",Object(l.b)("inlineCode",{parentName:"p"},"limit")," and ",Object(l.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(l.b)(i.a,{defaultValue:"limit-offset",values:[{label:"Limit And Offset",value:"limit-offset"},{label:"Limit",value:"limit"},{label:"Offset",value:"offset"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"limit-offset",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<MyClass> = {\n  paging: {\n    limit: 10,\n    offset: 10,\n  },\n};\n"))),Object(l.b)(o.a,{value:"limit",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<MyClass> = {\n  paging: {\n    limit: 20,\n  },\n};\n"))),Object(l.b)(o.a,{value:"offset",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const q: Query<MyClass> = {\n  paging: {\n    offset: 10,\n  },\n};\n")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"sorting"},"Sorting"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"sorting")," field allows to specify the sort order for your query."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"sorting")," field is an array of object containing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"field")," - the field to sort on"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"direction")," - ",Object(l.b)("inlineCode",{parentName:"li"},"ASC")," or ",Object(l.b)("inlineCode",{parentName:"li"},"DESC")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nulls?")," - Optional nulls sort, ",Object(l.b)("inlineCode",{parentName:"li"},"NULLS_FIRST")," or ",Object(l.b)("inlineCode",{parentName:"li"},"NULLS_LAST"))),Object(l.b)(i.a,{defaultValue:"single",values:[{label:"Single-Sort",value:"single"},{label:"Multi-Sort",value:"multi"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"single",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// import { SortDirection } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n    sorting: [{field: 'title', direction: SortDirection.DESC}],\n};\n"))),Object(l.b)(o.a,{value:"multi",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// import { SortDirection } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n    sorting: [\n        {field: 'title', direction: SortDirection.DESC},\n        {field: 'age', direction: SortDirection.ASC},\n    ],\n};\n\n")))))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,o({ref:t},s,{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},191:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===l)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},194:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(191),i=n.n(l),o=n(93),c=n.n(o);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:o}=e,[p,u]=Object(a.useState)(l),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},195:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);