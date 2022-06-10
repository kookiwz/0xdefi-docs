"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[675],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7060:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return k}});var n=r(7462),a=r(3366),l=r(7294),o=r(3905),i=r(2389),u=r(5979),s=r(6010),d="tabItem_LplD";function c(e){var t,r,a,o=e.lazy,i=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.UB)(),g=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,l.useState)(h),D=w[0],O=w[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=g[m];null!=T&&T!==D&&b.some((function(e){return e.value===T}))&&O(T)}var A=function(e){var t=e.currentTarget,r=x.indexOf(t),n=b[r].value;n!==D&&(E(t),O(n),null!=m&&N(m,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},b.map((function(e){var t=e.value,r=e.label,a=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:A,onClick:A},a,{className:(0,s.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":D===t})}),null!=r?r:t)}))),o?(0,l.cloneElement)(v.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}function m(e){var t=e.children,r=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}var f=["components"],v={},b="Deployment Addresses",y={unversionedId:"Developers/Deployment Addresses",id:"Developers/Deployment Addresses",title:"Deployment Addresses",description:"Below is a list of our core contracts and their addresses.",source:"@site/docs/Developers/Deployment Addresses.mdx",sourceDirName:"Developers",slug:"/Developers/Deployment Addresses",permalink:"/docs/Developers/Deployment Addresses",editUrl:"https://github.com/0xdefi-finance/0xdefi-docs/edit/master/docs/Developers/Deployment Addresses.mdx",tags:[],version:"current",lastUpdatedBy:"0xbunny",lastUpdatedAt:1654837280,formattedLastUpdatedAt:"6/10/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/Developers/0xDefi/Overview"},next:{title:"Build on 0xDefi",permalink:"/docs/Ecosystem/Build on 0xDefi"}},h={},k=[{value:"Alphanet Liberty 1.1",id:"alphanet-liberty-11",level:3},{value:"Shardeum Mainnet",id:"shardeum-mainnet",level:3}],g={toc:k};function N(e){var t=e.components,r=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment-addresses"},"Deployment Addresses"),(0,o.kt)("p",null,"Below is a list of our core contracts and their addresses."),(0,o.kt)(p,{mdxType:"Tabs"},(0,o.kt)(m,{value:"shardeum",label:"Shardeum",mdxType:"TabItem"},(0,o.kt)("h3",{id:"alphanet-liberty-11"},"Alphanet Liberty 1.1"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Address"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Source Code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0xSwapV2Factory")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0xSwapRouter")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"shardeum-mainnet"},"Shardeum Mainnet"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Address"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Source Code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0xSwapV2Factory")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0xSwapRouter")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))))))}N.isMDXComponent=!0}}]);