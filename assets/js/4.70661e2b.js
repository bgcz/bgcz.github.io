(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,n){},194:function(t,e,n){"use strict";var i=n(171);n.n(i).a},264:function(t,e,n){"use strict";n.r(e);var i=n(64),s=n(5),a=n(1);function r(t,e,n){for(let i=0;i<e.length;i++)if(e[i].key===t){if(n<0&&0===i)return!1;if(n>0&&i===e.length-1)return!1;const t=e[i+n];return"/"!==t.path&&t}}var o={data:()=>({key:"12"}),watch:{$route(t,e){this.change()}},methods:{change(){this.key=Date.now()}},mixins:[s.a],components:{OutboundLink:i.a,Comment:()=>Promise.all([n.e(0),n.e(2),n.e(17)]).then(n.bind(null,262))},props:["sidebarItems"],computed:{prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(a.n)(this.pages,t,this.$route.name):(e=this.$route.name,n=this.pages,r(e,n,-1));var e,n},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(a.n)(this.pages,t,this.$route.name):(e=this.$route.name,n=this.pages,r(e,n,1));var e,n},title(){return this.$page.frontmatter.title},createTime(){const t=this.$page.frontmatter.date,e=this.$site.themeConfig.date_format;return t&&e?new Date(t).Format(e):""},overrideStyle(){const t=this.$site.themeConfig.accentColor;return t?{color:t}:{}},editLink(){const{repo:t,editLinks:e,docsDir:n="",docsBranch:i="master"}=this.$site.themeConfig;let s=Object(a.i)(this.$page.path);if(a.a.test(s)?s+="README.md":s+=".md",t&&e){return(a.j.test(t)?t:`https://github.com/${t}`).replace(a.a,"")+`/edit/${i}/`+n.replace(a.a,"")+s}},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}}},c=(n(51),n(194),n(0)),p=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page card"},[n("div",{staticClass:"content-header"},[t.title?n("h1",{staticClass:"page-title",style:t.overrideStyle},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),n("span",{staticClass:"page-timestamp"},[t._v(t._s(t.createTime))])]),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),t.editLink?n("div",{staticClass:"content edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.prev||t.next?n("div",{staticClass:"content page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n          ← "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v(" →\n        ")],1):t._e()])]):t._e()],1),t._v(" "),t.$site.themeConfig.comment?n("div",{attrs:{id:"comment-container"}},[n("Comment",{key:t.key})],1):t._e()])},[],!1,null,null,null);e.default=p.exports}}]);