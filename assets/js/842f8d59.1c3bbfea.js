"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},o=void 0,l={unversionedId:"api/modules/IapIos",id:"api/modules/IapIos",title:"IapIos",description:"react-native-iap / Exports / IapIos",source:"@site/docs/api/modules/IapIos.md",sourceDirName:"api/modules",slug:"/api/modules/IapIos",permalink:"/docs/api/modules/IapIos",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api/modules/IapIos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IapAndroid",permalink:"/docs/api/modules/IapAndroid"},next:{title:"IapIosSk2",permalink:"/docs/api/modules/IapIosSk2"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"BuyProduct",id:"buyproduct",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"buyPromotedProductIOS",id:"buypromotedproductios",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"clearProductsIOS",id:"clearproductsios",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"clearTransactionIOS",id:"cleartransactionios",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getPendingPurchasesIOS",id:"getpendingpurchasesios",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getPromotedProductIOS",id:"getpromotedproductios",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getReceiptIOS",id:"getreceiptios",level:3},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"presentCodeRedemptionSheetIOS",id:"presentcoderedemptionsheetios",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"validateReceiptIos",id:"validatereceiptios",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / IapIos"),(0,r.kt)("h1",{id:"namespace-iapios"},"Namespace: IapIos"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIos.IosModuleProps"},"IosModuleProps"))),(0,r.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#buyproduct"},"BuyProduct"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#buypromotedproductios"},"buyPromotedProductIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#clearproductsios"},"clearProductsIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#cleartransactionios"},"clearTransactionIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#getpendingpurchasesios"},"getPendingPurchasesIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#getpromotedproductios"},"getPromotedProductIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#getreceiptios"},"getReceiptIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#presentcoderedemptionsheetios"},"presentCodeRedemptionSheetIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIos#validatereceiptios"},"validateReceiptIos"))),(0,r.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,r.kt)("h3",{id:"buyproduct"},"BuyProduct"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"BuyProduct"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#sku"},(0,r.kt)("inlineCode",{parentName:"a"},"Sku")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"andDangerouslyFinishTransactionAutomaticallyIOS"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUsername"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withOffer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<keyof ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentDiscount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"andDangerouslyFinishTransactionAutomaticallyIOS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUsername"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withOffer"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#sku"},(0,r.kt)("inlineCode",{parentName:"a"},"Sku")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"andDangerouslyFinishTransactionAutomaticallyIOS")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"applicationUsername")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"quantity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withOffer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"PaymentDiscount"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L23"},"modules/ios.ts:23")),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"buypromotedproductios"},"buyPromotedProductIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buyPromotedProductIOS"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Buy the currently selected promoted product (iOS only)\nInitiates the payment process for a promoted product. Should only be called in response to the ",(0,r.kt)("inlineCode",{parentName:"p"},"iap-promoted-product")," event."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L117"},"modules/ios.ts:117")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clearproductsios"},"clearProductsIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clearProductsIOS"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Clear valid Products (iOS only)\nRemove all products which are validated by Apple server."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L206"},"modules/ios.ts:206")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cleartransactionios"},"clearTransactionIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clearTransactionIOS"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Clear Transaction (iOS only)\nFinish remaining transactions. Related to issue #257 and #801\nlink : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/257"},"https://github.com/dooboolab/react-native-iap/issues/257"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/801"},"https://github.com/dooboolab/react-native-iap/issues/801")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L198"},"modules/ios.ts:198")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpendingpurchasesios"},"getPendingPurchasesIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPendingPurchasesIOS"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ProductPurchase"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductPurchase")),"[]",">"),(0,r.kt)("p",null,"Get the current receipt base64 encoded in IOS."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ProductPurchase"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductPurchase")),"[]",">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L62"},"modules/ios.ts:62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpromotedproductios"},"getPromotedProductIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPromotedProductIOS"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ProductIOS"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductIOS")),">"),(0,r.kt)("p",null,"Should Add Store Payment (iOS only)\nIndicates the the App Store purchase should continue from the app instead of the App Store."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ProductIOS"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductIOS")),">"),(0,r.kt)("p",null,"promoted product"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L104"},"modules/ios.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getreceiptios"},"getReceiptIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getReceiptIOS"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"Requests"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Get the current receipt base64 encoded in IOS.\nFrom: ",(0,r.kt)("a",{parentName:"p",href:"https://apphud.com/blog/app-store-receipt-validation#what-is-app-store-receipt"},"https://apphud.com/blog/app-store-receipt-validation#what-is-app-store-receipt")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Does a receipt always exist in the app?\nIf a user downloaded the app from the App Store \u2013 yes. However, in sandbox if your app was installed via Xcode or Testflight, then there won't be a receipt until you make a purchase or restore.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useCallback} from 'react';\nimport {getReceiptIOS} from 'react-native-iap';\n\nconst receipt = useCallback(async () => await getReceiptIOS({forceRefresh: false}));\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Requests")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the receipt from Bundle.main.appStoreReceiptURL. Based on the note above, looks like forceRefresh only makes sense when testing an app not downloaded from the Appstore.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Requests.forceRefresh?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The receipt data"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L81"},"modules/ios.ts:81")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"presentcoderedemptionsheetios"},"presentCodeRedemptionSheetIOS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"presentCodeRedemptionSheetIOS"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,r.kt)("p",null,"Launches a modal to register the redeem offer code in IOS."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L96"},"modules/ios.ts:96")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatereceiptios"},"validateReceiptIos"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"validateReceiptIos"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseBody"),">"),(0,r.kt)("p",null,"Validate receipt for iOS."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.isTest?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.receiptBody")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseBody"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/8e2c296/src/modules/ios.ts#L171"},"modules/ios.ts:171")))}u.isMDXComponent=!0}}]);