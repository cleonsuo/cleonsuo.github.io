(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{404:function(e,n,a){"use strict";a.r(n);var t=a(10),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"nginx-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-介绍"}},[e._v("#")]),e._v(" Nginx 介绍")]),e._v(" "),a("p",[e._v("Nginx[读音：engine x]是HTTP和反向代理服务器，邮件代理服务器，以及Igor Sysoev最初编写的通用TCP/UDP代理服务器。")]),e._v(" "),a("p",[e._v("NGINX与其他服务类似，因为它具有以特定格式编写的基于文本的配置文件。 默认情况下，文件名为nginx.conf并放在/etc/nginx目录中(对于开源NGINX产品，位置取决于用于安装NGINX和操作系统的软件包系统，它通常位于 "),a("code",[e._v("/usr/local/nginx/conf/etc/nginx")]),e._v(" 或 "),a("code",[e._v("/usr/local/etc/nginx")]),e._v("。)\n配置文件由指令及其参数组成。 简单(单行)指令各自以分号结尾。 其他指令作为“容器”，将相关指令组合在一起，将其包围在花括号({})中。 以下是简单指令的一些示例。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/etc/init.d/nginx start/restart # 启动/重启Nginx服务  \n/etc/init.d/nginx stop # 停止Nginx服务  \nnginx -s reload # 重启\nnginx -t # 检查配置\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("user             nobody;\nerror_log        logs/error.log notice;\nworker_processes 1;\n")])])]),a("p",[e._v("为了使配置更易于维护，建议您将其拆分为存储在/etc/nginx/conf.d目录中的一组功能特定文件，并在主nginx.conf文件中使用include指令引用(包函)指定文件的内容。如下所示 -")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("include conf.d/http;\ninclude conf.d/stream;\ninclude conf.d/exchange-enhanced;\n")])])]),a("p",[e._v("几个顶级指令(称为上下文)将适用于不同流量类型的指令组合在一起：")]),e._v(" "),a("ul",[a("li",[e._v("events – 一般连接处理")]),e._v(" "),a("li",[e._v("http – HTTP协议流量")]),e._v(" "),a("li",[e._v("mail – Mail协议流量")]),e._v(" "),a("li",[e._v("stream – TCP协议流量")])]),e._v(" "),a("h2",{attrs:{id:"nginx-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-应用"}},[e._v("#")]),e._v(" Nginx 应用")]),e._v(" "),a("p",[e._v("Nginx能做什么")]),e._v(" "),a("ul",[a("li",[e._v("HTTP 服务器")]),e._v(" "),a("li",[e._v("反向代理")]),e._v(" "),a("li",[e._v("负载均衡")]),e._v(" "),a("li",[e._v("正向代理")])]),e._v(" "),a("h3",{attrs:{id:"http-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-服务器"}},[e._v("#")]),e._v(" HTTP 服务器")]),e._v(" "),a("p",[e._v("Nginx 本身也是一个静态资源的服务器，当只有静态资源的时候，就可以使用 Nginx 来做服务器，同时现在也很流行动静分离，就可以通过 Nginx 来实现，首先看看 Nginx 做静态资源服务器。")]),e._v(" "),a("h4",{attrs:{id:"设置虚拟服务器-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置虚拟服务器-server"}},[e._v("#")]),e._v(" 设置虚拟服务器 - server")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    listen      80;\n    server_name example.org www.example.org;\n    ...\n}\n")])])]),a("p",[e._v("如果有多个服务器与请求的IP地址和端口相匹配，则NGINX将根据服务器块中的server_name指令测试请求的主机头域。 server_name的参数可以是完整(精确)名称，通配符或正则表达式。 通配符是一个字符串，其开头，结尾或两者都包含星号(*); 星号匹配任何字符序列。 NGINX将Perl语法用于正则表达式; 在它们之前使用波浪号(〜)。 此示例说明了一个确切的名称。\n如果匹配主机头几个名称，则NGINX通过按以下顺序搜索名称并使用其找到的第一个匹配来选择一个：")]),e._v(" "),a("ul",[a("li",[e._v("确切的名字(完整准确的名称)")]),e._v(" "),a("li",[e._v("以星号开头的最长通配符，例如:*.example.org")]),e._v(" "),a("li",[e._v("以星号结尾的最长通配符，如：mail.*")]),e._v(" "),a("li",[e._v("第一个匹配正则表达式(按照出现在配置文件中的顺序)")])]),e._v(" "),a("h4",{attrs:{id:"静态资源配置-root、alias、index、autoindex、try-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源配置-root、alias、index、autoindex、try-files"}},[e._v("#")]),e._v(" 静态资源配置 - root、alias、index、autoindex、try_files")]),e._v(" "),a("h4",{attrs:{id:"root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[e._v("#")]),e._v(" root")]),e._v(" "),a("p",[e._v("root指令指定将用于搜索文件的根目录。 要获取请求文件的路径，NGINX将请求URI附加到root指令指定的路径。 该指令可以放置在http，server或location上下文中的任何级别上。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    root /www/data;\n    location ~ \\.(mp3|mp4) {\n        root /www/media;\n    }\n}\n")])])]),a("h4",{attrs:{id:"alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[e._v("#")]),e._v(" alias")]),e._v(" "),a("p",[e._v("alias——别名配置，用于访问文件系统，在匹配到location配置的URL路径后，指向alias配置的路径，如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location   /test/  {\n  alias    /usr/local/;\n}\n")])])]),a("p",[e._v("请求/test/1.jpg（省略了协议和域名），将会返回文件/usr/local/1.jpg。")]),e._v(" "),a("h4",{attrs:{id:"autoindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoindex"}},[e._v("#")]),e._v(" autoindex")]),e._v(" "),a("p",[e._v("如果不存在文件，NGINX默认返回HTTP代码404(未找到)。 要配置NGINX以返回自动生成的目录列表，请将on参数添加到autoindex指令中：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location /images/ {\n    autoindex on;\n}\n")])])]),a("h4",{attrs:{id:"try-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-files"}},[e._v("#")]),e._v(" try_files")]),e._v(" "),a("p",[e._v("try_files指令可用于检查指定的文件或目录是否存在并进行内部重定向，如果没有指定的文件或目录，则返回特定的状态代码。 例如，要检查与请求URI相对应的文件的存在，请使用try_files指令和$uri变量，如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    root /www/data;\n\n    location /images/ {\n        try_files $uri /images/default.gif;\n    }\n}\n")])])]),a("h4",{attrs:{id:"配置位置-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置位置-location"}},[e._v("#")]),e._v(" 配置位置 - location")]),e._v(" "),a("p",[e._v("Nginx可以根据请求URI向不同的代理发送流量或提供不同的文件。\n语法形式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location   [ = | ~ | ~* | ^~ | @]   /uri/     { configuration }\n")])])]),a("p",[e._v("匹配字符串分为两种：普通字符串（literal string）和正则表达式（regular expression），其中 ~ 和 ~* 用于正则表达式， 其他前缀和无任何前缀都用于普通字符串。")]),e._v(" "),a("p",[e._v("匹配顺序是：")]),e._v(" "),a("ol",[a("li",[e._v("先匹配普通字符串，将最精确的匹配暂时存储；")]),e._v(" "),a("li",[e._v("然后按照配置文件中的声明顺序进行正则表达式匹配，只要匹配到一条正则表达式，则停止匹配，取正则表达式为匹配结果；")]),e._v(" "),a("li",[e._v("如果所有正则表达式都匹配不上，则取1中存储的结果；")]),e._v(" "),a("li",[e._v("如果普通字符串和正则表达式都匹配不上，则报404 NOT FOUND。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location   =   /uri         =开头表示精确前缀匹配，只有完全匹配才能生效。\n\nlocation   ^~   /uri        ^~开头表示普通字符串匹配上以后不再进行正则匹配。\n\nlocation   ~   pattern     ~开头表示区分大小写的正则匹配。\n\nlocation   ~*   pattern    ~*开头表示不区分大小写的正则匹配。\n\nlocation   /uri                  不带任何修饰符，表示前缀匹配。\n\nlocation   /                       通用匹配，任何未匹配到其他location的请求都会匹配到。\n")])])]),a("blockquote",[a("p",[e._v("注意：正则匹配会根据匹配顺序，找到第一个匹配的正则表达式后将停止搜索。普通字符串匹配则无视顺序，只会选择最精确的匹配。")])]),e._v(" "),a("h3",{attrs:{id:"反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[e._v("#")]),e._v(" 反向代理")]),e._v(" "),a("p",[e._v("反向代理应该是 Nginx 做的最多的一件事了，什么是反向代理呢，以下是百度百科的说法：反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。")]),e._v(" "),a("p",[e._v("当NGINX代理请求时，它将请求发送到指定的代理服务器，获取响应，并将其发送回客户端。 可以使用指定的协议将请求代理到HTTP服务器(另一个NGINX服务器或任何其他服务器)或非HTTP服务器(可以运行使用特定框架开发的应用程序，如PHP或Python)。 支持的协议包括FastCGI，uwsgi，SCGI和memcached。\n要将请求传递给HTTP代理服务器，则在一个location块内指定proxy_pass指令。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location /some/path/ {\n    proxy_bind $server_addr;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_pass http://www.example.com/link/;\n}\n")])])]),a("p",[e._v("代理服务器的地址后面是URI为 "),a("code",[e._v("/link/")]),e._v("。 如果"),a("code",[e._v("URI")]),e._v("与地址一起指定，它将替换与"),a("code",[e._v("location")]),e._v("参数匹配请求URI的部分。 例如，这里使用"),a("code",[e._v("/some/path/page.html")]),e._v("的"),a("code",[e._v("URI")]),e._v("请求将被代理到"),a("code",[e._v("http://www.example.com/link/page.html")]),e._v("。 如果地址被指定为没有"),a("code",[e._v("URI")]),e._v("，或者不可能确定要替换的"),a("code",[e._v("URI")]),e._v("部分，则会传递完整的请求"),a("code",[e._v("URI")]),e._v("(可能是修改)。")]),e._v(" "),a("p",[e._v("要将请求传递给非HTTP代理服务器，应使用适当的**_ pass指令：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("fastcgi_pass")]),e._v(" 将请求传递给FastCGI服务器")]),e._v(" "),a("li",[a("code",[e._v("uwsgi_pass")]),e._v(" 将请求传递给uwsgi服务器")]),e._v(" "),a("li",[a("code",[e._v("scgi_pass")]),e._v(" 将请求传递给SCGI服务器")]),e._v(" "),a("li",[a("code",[e._v("memcached_pass")]),e._v(" 将请求传递给memcached服务器")])]),e._v(" "),a("h3",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[e._v("#")]),e._v(" 负载均衡")]),e._v(" "),a("p",[e._v("负载均衡也是 Nginx 常用的一个功能，负载均衡其意思就是分摊到多个操作单元上进行执行，例如 Web 服务器、FTP 服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。\n简单而言就是当有2台或以上服务器时，根据规则随机的将请求分发到指定的服务器上处理，负载均衡配置一般都需要同时配置反向代理，通过反向代理跳转到负载均衡。\nNginx 目前支持自带3种负载均衡策略，还有2种常用的第三方策略。")]),e._v(" "),a("h4",{attrs:{id:"rr-默认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rr-默认"}},[e._v("#")]),e._v(" RR（默认）")]),e._v(" "),a("p",[e._v("每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream test {  \n    server localhost:8080;  \n    server localhost:8081;  \n}  \nserver {  \n    listen       81;                                                           \n    server_name  localhost;                                                 \n    client_max_body_size 1024M;  \n  \n    location / {  \n        proxy_pass http://test;  \n        proxy_set_header Host $host:$server_port;  \n    }  \n}\n")])])]),a("p",[e._v("负载均衡的核心代码为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream test {  \n    server localhost:8080;  \n    server localhost:8081;  \n}\n")])])]),a("p",[e._v("这里我配置了2台服务器，当然实际上是一台，只是端口不一样而已，而 8081 的服务器是不存在的，也就是说访问不到，但是我们访问 http://localhost 的时候，也不会有问题，会默认跳转到 http://localhost:8080 具体是因为Nginx会自动判断服务器的状态，如果服务器处于不能访问（服务器挂了），就不会跳转到这台服务器，所以也避免了一台服务器挂了影响使用的情况，由于Nginx默认是RR策略，所以我们不需要其他更多的设置。")]),e._v(" "),a("h4",{attrs:{id:"权重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权重"}},[e._v("#")]),e._v(" 权重")]),e._v(" "),a("p",[e._v("指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。例如")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream test {  \n    server localhost:8080 weight=9;  \n    server localhost:8081 weight=1;  \n}\n")])])]),a("p",[e._v("那么10次一般只会有1次会访问到8081，而有9次会访问到8080。另外，关注公众号互联网架构师，在后台回复：2T，可以获取我整理的 Java 系列面试题和答案，非常齐全。")]),e._v(" "),a("h4",{attrs:{id:"ip-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip-hash"}},[e._v("#")]),e._v(" ip_hash")]),e._v(" "),a("p",[e._v("上面的2种方式都有一个问题，那就是下一个请求来的时候请求可能分发到另外一个服务器，当我们的程序不是无状态的时候（采用了 session 保存数据），这时候就有一个很大的很问题了，比如把登录信息保存到了session 中，那么跳转到另外一台服务器的时候就需要重新登录了，所以很多时候我们需要一个客户只访问一个服务器，那么就需要用 iphash 了，iphash 的每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream test {  \n    ip_hash;  \n    server localhost:8080;  \n    server localhost:8081;  \n}  \n")])])]),a("h4",{attrs:{id:"fair-第三方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fair-第三方"}},[e._v("#")]),e._v(" fair（第三方）")]),e._v(" "),a("p",[e._v("按后端服务器的响应时间来分配请求，响应时间短的优先分配。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {   \n    fair;   \n    server localhost:8080;  \n    server localhost:8081;  \n}  \n")])])]),a("h4",{attrs:{id:"url-hash-第三方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-hash-第三方"}},[e._v("#")]),e._v(" url_hash（第三方）")]),e._v(" "),a("p",[e._v("按访问 url 的hash结果来分配请求，使每个 url 定向到同一个后端服务器，后端服务器为缓存时比较有效。在 upstream 中加入 hash 语句，server 语句中不能写入 weight 等其他的参数，hash_method 是使用的 hash 算法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {   \n    hash $request_uri;   \n    hash_method crc32;   \n    server localhost:8080;  \n    server localhost:8081;  \n}\n")])])]),a("p",[e._v("以上5种负载均衡各自适用不同情况下使用，所以可以根据实际情况选择使用哪种策略模式，不过 fair 和 url_hash 需要安装第三方模块才能使用，由于本文主要介绍 Nginx 能做的事情，所以 Nginx 安装第三方模块不会再本文介绍。")]),e._v(" "),a("h3",{attrs:{id:"正向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[e._v("#")]),e._v(" 正向代理")]),e._v(" "),a("p",[e._v("正向代理，意思是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端，客户端才能使用正向代理。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("resolver 114.114.114.114 8.8.8.8;  \nserver {  \n  \n    resolver_timeout 5s;  \n  \n    listen 81;  \n  \n    access_log  e:\\wwwroot\\proxy.access.log;  \n    error_log   e:\\wwwroot\\proxy.error.log;  \n  \n    location / {  \n        proxy_pass http://$host$request_uri;  \n    }  \n}  \n")])])]),a("p",[e._v("resolver 是配置正向代理的 DNS 服务器，listen 是正向代理的端口，配置好了就可以在 IE 上面或者其他代理插件上面使用服务器 ip+端口号进行代理了。")]),e._v(" "),a("h2",{attrs:{id:"nginx配置文件nginx-conf中文详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件nginx-conf中文详解"}},[e._v("#")]),e._v(" Nginx配置文件nginx.conf中文详解")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('######Nginx配置文件nginx.conf中文详解#####\n\n#定义Nginx运行的用户和用户组\nuser www www;\n\n#nginx进程数，建议设置为等于CPU总核心数。\nworker_processes 8;\n \n#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]\nerror_log /usr/local/nginx/logs/error.log info;\n\n#进程pid文件\npid /usr/local/nginx/logs/nginx.pid;\n\n#指定进程可以打开的最大描述符：数目\n#工作模式与连接数上限\n#这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。\n#现在在linux 2.6内核下开启文件打开数为65535，worker_rlimit_nofile就相应应该填写65535。\n#这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4万时就有进程可能超过10240了，这时会返回502错误。\nworker_rlimit_nofile 65535;\n\n\nevents\n{\n    #参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型\n    #是Linux 2.6以上版本内核中的高性能网络I/O模型，linux建议epoll，如果跑在FreeBSD上面，就用kqueue模型。\n    #补充说明：\n    #与apache相类，nginx针对不同的操作系统，有不同的事件模型\n    #A）标准事件模型\n    #Select、poll属于标准事件模型，如果当前系统不存在更有效的方法，nginx会选择select或poll\n    #B）高效事件模型\n    #Kqueue：使用于FreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 和 MacOS X.使用双处理器的MacOS X系统使用kqueue可能会造成内核崩溃。\n    #Epoll：使用于Linux内核2.6版本及以后的系统。\n    #/dev/poll：使用于Solaris 7 11/99+，HP/UX 11.22+ (eventport)，IRIX 6.5.15+ 和 Tru64 UNIX 5.1A+。\n    #Eventport：使用于Solaris 10。 为了防止出现内核崩溃的问题， 有必要安装安全补丁。\n    use epoll;\n\n    #单个进程最大连接数（最大连接数=连接数*进程数）\n    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。\n    worker_connections 65535;\n\n    #keepalive超时时间。\n    keepalive_timeout 60;\n\n    #客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。\n    #分页大小可以用命令getconf PAGESIZE 取得。\n    #[root@web001 ~]# getconf PAGESIZE\n    #4096\n    #但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。\n    client_header_buffer_size 4k;\n\n    #这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。\n    open_file_cache max=65535 inactive=60s;\n\n    #这个是指多长时间检查一次缓存的有效信息。\n    #语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.\n    open_file_cache_valid 80s;\n\n    #open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。\n    #语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.\n    open_file_cache_min_uses 1;\n    \n    #语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件时记录cache错误.\n    open_file_cache_errors on;\n}\n \n \n \n#设定http服务器，利用它的反向代理功能提供负载均衡支持\nhttp\n{\n    #文件扩展名与文件类型映射表\n    include mime.types;\n\n    #默认文件类型\n    default_type application/octet-stream;\n\n    #默认编码\n    #charset utf-8;\n\n    #服务器名字的hash表大小\n    #保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.\n    server_names_hash_bucket_size 128;\n\n    #客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。\n    client_header_buffer_size 32k;\n\n    #客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。\n    large_client_header_buffers 4 64k;\n\n    #设定通过nginx上传文件的大小\n    client_max_body_size 8m;\n\n    #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。\n    #sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。\n    sendfile on;\n\n    #开启目录列表访问，合适下载服务器，默认关闭。\n    autoindex on;\n\n    #此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用\n    tcp_nopush on;\n     \n    tcp_nodelay on;\n\n    #长连接超时时间，单位是秒\n    keepalive_timeout 120;\n\n    #FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。\n    fastcgi_connect_timeout 300;\n    fastcgi_send_timeout 300;\n    fastcgi_read_timeout 300;\n    fastcgi_buffer_size 64k;\n    fastcgi_buffers 4 64k;\n    fastcgi_busy_buffers_size 128k;\n    fastcgi_temp_file_write_size 128k;\n\n    #gzip模块设置\n    gzip on; #开启gzip压缩输出\n    gzip_min_length 1k;    #最小压缩文件大小\n    gzip_buffers 4 16k;    #压缩缓冲区\n    gzip_http_version 1.0;    #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）\n    gzip_comp_level 2;    #压缩等级\n    gzip_types text/plain application/x-javascript text/css application/xml;    #压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。\n    gzip_vary on;\n\n    #开启限制IP连接数的时候需要使用\n    #limit_zone crawler $binary_remote_addr 10m;\n\n\n\n    #负载均衡配置\n    upstream jh.w3cschool.cn {\n     \n        #upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。\n        server 192.168.80.121:80 weight=3;\n        server 192.168.80.122:80 weight=2;\n        server 192.168.80.123:80 weight=3;\n\n        #nginx的upstream目前支持4种方式的分配\n        #1、轮询（默认）\n        #每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。\n        #2、weight\n        #指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。\n        #例如：\n        #upstream bakend {\n        #    server 192.168.0.14 weight=10;\n        #    server 192.168.0.15 weight=10;\n        #}\n        #2、ip_hash\n        #每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。\n        #例如：\n        #upstream bakend {\n        #    ip_hash;\n        #    server 192.168.0.14:88;\n        #    server 192.168.0.15:80;\n        #}\n        #3、fair（第三方）\n        #按后端服务器的响应时间来分配请求，响应时间短的优先分配。\n        #upstream backend {\n        #    server server1;\n        #    server server2;\n        #    fair;\n        #}\n        #4、url_hash（第三方）\n        #按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。\n        #例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法\n        #upstream backend {\n        #    server squid1:3128;\n        #    server squid2:3128;\n        #    hash $request_uri;\n        #    hash_method crc32;\n        #}\n\n        #tips:\n        #upstream bakend{#定义负载均衡设备的Ip及设备状态}{\n        #    ip_hash;\n        #    server 127.0.0.1:9090 down;\n        #    server 127.0.0.1:8080 weight=2;\n        #    server 127.0.0.1:6060;\n        #    server 127.0.0.1:7070 backup;\n        #}\n        #在需要使用负载均衡的server中增加 proxy_pass http://bakend/;\n\n        #每个设备的状态设置为:\n        #1.down表示单前的server暂时不参与负载\n        #2.weight为weight越大，负载的权重就越大。\n        #3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误\n        #4.fail_timeout:max_fails次失败后，暂停的时间。\n        #5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。\n\n        #nginx支持同时设置多组的负载均衡，用来给不用的server来使用。\n        #client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug\n        #client_body_temp_path设置记录文件的目录 可以设置最多3层目录\n        #location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡\n    }\n     \n     \n     \n    #虚拟主机的配置\n    server\n    {\n        #监听端口\n        listen 80;\n\n        #域名可以有多个，用空格隔开\n        server_name www.w3cschool.cn w3cschool.cn;\n        index index.html index.htm index.php;\n        root /data/www/w3cschool;\n\n        #对******进行负载均衡\n        location ~ .*.(php|php5)?$\n        {\n            fastcgi_pass 127.0.0.1:9000;\n            fastcgi_index index.php;\n            include fastcgi.conf;\n        }\n         \n        #图片缓存时间设置\n        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$\n        {\n            expires 10d;\n        }\n         \n        #JS和CSS缓存时间设置\n        location ~ .*.(js|css)?$\n        {\n            expires 1h;\n        }\n         \n        #日志格式设定\n        #$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；\n        #$remote_user：用来记录客户端用户名称；\n        #$time_local： 用来记录访问时间与时区；\n        #$request： 用来记录请求的url与http协议；\n        #$status： 用来记录请求状态；成功是200，\n        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；\n        #$http_referer：用来记录从那个页面链接访问过来的；\n        #$http_user_agent：记录客户浏览器的相关信息；\n        #通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。\n        log_format access \'$remote_addr - $remote_user [$time_local] "$request" \'\n        \'$status $body_bytes_sent "$http_referer" \'\n        \'"$http_user_agent" $http_x_forwarded_for\';\n         \n        #定义本虚拟主机的访问日志\n        access_log  /usr/local/nginx/logs/host.access.log  main;\n        access_log  /usr/local/nginx/logs/host.access.404.log  log404;\n         \n        #对 "/" 启用反向代理\n        location / {\n            proxy_pass http://127.0.0.1:88;\n            proxy_redirect off;\n            proxy_set_header X-Real-IP $remote_addr;\n             \n            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n             \n            #以下是一些反向代理的配置，可选。\n            proxy_set_header Host $host;\n\n            #允许客户端请求的最大单文件字节数\n            client_max_body_size 10m;\n\n            #缓冲区代理缓冲用户端请求的最大字节数，\n            #如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。\n            #无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误\n            client_body_buffer_size 128k;\n\n            #表示使nginx阻止HTTP应答代码为400或者更高的应答。\n            proxy_intercept_errors on;\n\n            #后端服务器连接的超时时间_发起握手等候响应超时时间\n            #nginx跟后端服务器连接超时时间(代理连接超时)\n            proxy_connect_timeout 90;\n\n            #后端服务器数据回传时间(代理发送超时)\n            #后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据\n            proxy_send_timeout 90;\n\n            #连接成功后，后端服务器响应时间(代理接收超时)\n            #连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）\n            proxy_read_timeout 90;\n\n            #设置代理服务器（nginx）保存用户头信息的缓冲区大小\n            #设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小\n            proxy_buffer_size 4k;\n\n            #proxy_buffers缓冲区，网页平均在32k以下的设置\n            #设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k\n            proxy_buffers 4 32k;\n\n            #高负荷下缓冲大小（proxy_buffers*2）\n            proxy_busy_buffers_size 64k;\n\n            #设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长\n            #设定缓存文件夹大小，大于这个值，将从upstream服务器传\n            proxy_temp_file_write_size 64k;\n        }\n         \n         \n        #设定查看Nginx状态的地址\n        location /NginxStatus {\n            stub_status on;\n            access_log on;\n            auth_basic "NginxStatus";\n            auth_basic_user_file confpasswd;\n            #htpasswd文件的内容可以用apache提供的htpasswd工具来产生。\n        }\n         \n        #本地动静分离反向代理配置\n        #所有jsp的页面均交由tomcat或resin处理\n        location ~ .(jsp|jspx|do)?$ {\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://127.0.0.1:8080;\n        }\n         \n        #所有静态文件由nginx直接读取不经过tomcat或resin\n        location ~ .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|\n        pdf|xls|mp3|wma)$\n        {\n            expires 15d; \n        }\n         \n        location ~ .*.(js|css)?$\n        {\n            expires 1h;\n        }\n    }\n}\n######Nginx配置文件nginx.conf中文详解#####\n')])])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[e._v("#")]),e._v(" 参考文档：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/KUO5BQueIArgCJxcLAxVZw",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/KUO5BQueIArgCJxcLAxVZw"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.yiibai.com/nginx/reverse-proxy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.yiibai.com/nginx/reverse-proxy.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.w3cschool.cn/nginx/nginx-d1aw28wa.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3cschool.cn/nginx/nginx-d1aw28wa.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=s.exports}}]);