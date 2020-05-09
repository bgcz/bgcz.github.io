(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{265:function(e,r,t){"use strict";t.r(r);var a=t(0),n=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("    在父项目中引入基本依赖最主要的是这个")]),e._v(" "),e._m(3),t("p",[e._v("在Eureka注册中心的项目引入")]),e._v(" "),e._m(4),t("p",[e._v("表示是Eureka的注册中心,在项目启动入口加上@EnableEurekaServer注解,创建配置文件application.yml\n其中最主要的是eureka.client.registerWithEureka=false和eureka.client.fetchRegistry=false这两个配置是表明自己是注册中心"),t("a",{attrs:{href:"https://github.com/ZjBlog/Spring-Cloud/blob/master/eureka-serve/src/main/resources/application.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整配置"),t("OutboundLink")],1),e._v("完成之后访问127.0.0.1:8761就能看见注册中心的web页面")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("在单个服务器上配置多个注册中心,我们可以利用spring.profiles进行配置,同一个项目启动三次.注册中心高可用配注意的问题")]),e._v(" "),t("ul",[t("li",[e._v("aplication.name 必须一样")]),e._v(" "),t("li",[e._v("eureka.instance.prefer-ip-address=false同一台机器如果使用ip进行注册会导致注册中心认为其它是不可用状态")]),e._v(" "),t("li",[e._v("eureka.client.registerWithEureka=true和eureka.client.fetchRegistry=true设置成true表明自己是注册中心也是客户端")]),e._v(" "),t("li",[e._v("eureka.client.serviceUrl.defaultZone=其它两台注册中心的注册地址\n"),t("a",{attrs:{href:"https://github.com/ZjBlog/Spring-Cloud/blob/master/eureka-serve/src/main/resources/application.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整配置"),t("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),t("h3",{attrs:{id:"项目地址spring-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目地址spring-cloud","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目地址"),t("a",{attrs:{href:"https://github.com/ZjBlog/Spring-Cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring-Cloud"),t("OutboundLink")],1)])])},[function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"eureka服务端集群及单机配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eureka服务端集群及单机配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Eureka服务端集群及单机配置")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("    Spring Cloud使用Eureka来实现服务注册与发现,它即包含了服务端组件,也包含了客户端组件.Eureka服务端:也称为服务注册中心,它和其他服务注册中心一样也支持高可用配置.Eureka客户端:主要处理服务的注册与发现.下面来进行服务端单机及集群的配置."),r("br")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"spring-cloud-eureka注册中心单机配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-eureka注册中心单机配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Cloud Eureka注册中心单机配置")])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("   <dependencyManagement>\n       <dependencies>\n           <dependency>\n               <groupId>org.springframework.cloud</groupId>\n               <artifactId>spring-cloud-dependencies</artifactId>\n               <version>Finchley.SR2</version>\n               <type>pom</type>\n               <scope>import</scope>\n           </dependency>\n       </dependencies>\n   </dependencyManagement>\n")])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("    <dependency>\n       <groupId>org.springframework.cloud</groupId>\n       <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n   </dependency>\n")])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h3",{attrs:{id:"spring-cloud-eureka注册中心集群配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-eureka注册中心集群配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Cloud Eureka注册中心集群配置")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"注册中心的自我保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注册中心的自我保护","aria-hidden":"true"}},[this._v("#")]),this._v(" 注册中心的自我保护")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("eureka.server.enable-self-preservation=true开启自我保护"),r("br"),this._v("\nRenews threshold:server期望在每分钟中收到的心跳次数阀值\nRenews:上一分钟内收到的心跳次数"),r("br"),this._v("\nRenews threshold 计算方式: 每分钟心跳数 Ｘ　总client数量 X eureka.server.renewal-percent-threshold 默认是0.85.默认心跳数是2因为eureka.instance.lease-renewal-interval-in-seconds=30,1min2次心跳.当你你去调整eureka.instance.lease-renewal-interval-in-seconds的话,代码里头没有相应调整factor,也就是代码还是60/30=2,所以会破坏eureka内置的设计思路,线上最好不要改.当server在15分钟内比值低于阀值,即少了15%的微服务心跳,server会进入自我保护状态.在此状态下,server不会删除注册信息这就有可能导致在调用微服务时实际上服务并不存在,这种保护状态实际上是考虑了client和server之间的心跳是因为网络问题,而非服务本身问题.web页面就和出现红色提示.在本机器上测试的时候可以把比值调低或把自我保护模式关闭设置成false,或者开启客户端的健康检查并缩短时间.线上最好不要改")])}],!1,null,null,null);r.default=n.exports}}]);