HelmetJS 是一个 Express 应用的中间件集，它通过自动设置 HTTP headers 来防止服务器和客户端传递的敏感信息泄露。尽管 HelmetJS 没有覆盖到所有情况，但它提供了包括对内容安全策略、XSS 过滤和 HTTP 严格安全传输等常见内容的支持。 HelmetJS 可以通过 npm 安装到 Express 项目，然后可以根据项目按需设置每一个层保护。

接下来的这些挑战要求你在 Glitch 里完成，而且要在下面提供的初始化项目的基础上编写代码。在完成一个挑战后你需要复制你的 Glitch 链接（你的 app 链接）到挑战页面来通过关卡。另外，你也可以选择其他平台来编写你的项目，不过要确保它是公开的，以便我们测试。 在 Glitch 上使用这个链接开始项目，或者克隆 Github 上的这个仓库。如果你使用 Glitch，别忘了把你项目链接备份到一个可靠的地方。


## 1.安装和引入 Helmet

Helmet 通过配置不同的 HTTP 头部信息来使你的 Express 应用更加安全。安装，并引入 Helmet 这个包。

## 2.使用 helmet.hidePoweredBy() 隐藏潜在的危险信息

如果黑客发现你的网站是用 Express 搭建的，那么他们就可以利用 Express 或 Node 现存的漏洞来攻击你的网站。X-Powered-By: Express默认情况下会被添加到所有响应的头部。不过 helmet.hidePoweredBy() 中间件可以帮你移除 X-Powered-By 头。你甚至可以把头设置成其它的值。 如 app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

## 3.使用 helmet.frameguard() 降低点击劫持的风险

黑客可能会不经过你的允许，把你的页面嵌套在 或者 

我们的应用不需要被 iframe 引用。你可以调用 helmet.frameguard()这个方法，然后传入配置对象 {action: 'deny'}就可以了。

## 4.使用 helmet.xssFilter() 降低跨站点脚本（XSS）攻击的风险

跨站脚本攻击 (XSS) 是一种比较常见的攻击手段，通过给页面注入恶意脚本来获取用户的 session, 密码等信息。

防止这类型的攻击也非常简单：“永远不要相信用户的输入”。 作为一名开发人员，你一定要对所有外部的输入进行审查，其中包括来自表单，GET 请求，POST 请求主体的内容。审核就是说你需要查找并给有潜在风险的字符进行编码，例如：<, >.

现代浏览器已经有非常好的软件策略来应对着类型问题。通常是通过配置 http 头部来实现.

X-XSS-Protection HTTP 头部是一个基本的防护。浏览器通过启发式过滤法则来检测有潜在风险的注入脚本，这是有如果这个头部被启用了，浏览器就能改成脚本里面的代码从而使恶意代码不再生效。

但是浏览器对这个功能的支持有限。

## 5.使用 helment.noSniff() 避免推断响应的 MIME 类型

浏览器可以通过探查 ``content`` 或者 ``MIME`` 头部来判断不同的响应内容。这两个的优先级比 ``Content-Type`` 还高，浏览器可以通过这两个头部来猜测并处理响应。这个在某些情况下非常实用，但也会造成一定的潜在风险。我们可以通过中间件来设置 ``X-Content-Type-Options`` 头部为 ``nosniff``。 这样，浏览器就不会绕过 ``Content-Type`` 这个头了。

## 6.使用 helment.ieNoOpen() 防止 IE 打开不受信任的 HTML

有些网站会下载不安全的 HTML 文件，某些版本的 IE 默认情况下还会在你网站的作用域下打开这些 HTML 文件。换句话说，这些不安全的 HTML 页面可以在你的网站做恶意行为。我们可以通过中间件来设置 ``X-Download-Options`` 头部为 ``noopen``。这样就可以防治 IE 在不信任的网站下执行下载的文件。

## 7.使用 helmet.hsts() 要求浏览器只通过HTTPS访问你的网站

HTTP严格安全传输 (HSTS) 是一个能帮助我们防护网站被协议降低攻击和 Cookie 挟持的 WEB 安全协议。如果你的网站支持 HTTPS 的话你可以让你的用户停止使用不安全的 HTTP。通过设置头部 ``Strict-Transport-Security``, 你告诉浏览器使用在未来的某段指定时间内使用 HTTPS 来请求网站内容。首次请求之后所以的后续请求都将使用 HTTPS

配置 helmet.hsts() 在未来的90天内使用 HTTPS。传递配置对象 {maxAge: timeInMilliseconds, force: true}. Glitch 默认已经开启 ``hsts``. 但你仍然可以通过 "force" 来覆盖它的配置。为了测试，我们会审查 Glitch 请求头部，然后拦截并恢复。

注意: 配置 HTTPS 需要域名以及 SSL/TSL 证书。
## 8.使用 helmet.dnsPrefetchControl() 禁用 DNS 预取

为了提高性能，大部分浏览器都会为页面上的链接预先加载 DNS 记录。这样当用户点击一个链接的时候浏览器已经提前知道 IP 地址了。但这也会造成 DNS 服务的过度使用（如果你是一个大型网站，有这千万级的用户的情况下），隐私问题 (窃听者可以推测出你在哪个页面上)，和页面数据准确性（有些没访问过的链接会被标记成已访问）。如果你对安全性要求比较高，你应该禁用 DNZ 预加载。当然，这样做性能上会有一点点损失.

## 9.使用 helment.noCache() 禁用客户端缓存

如果你为你的网站发布了一个更新，你想要用户永远使用最新的版本。你可以通过禁用浏览器的缓存来实现。这个功能在开发环境中也非常有用。当然你会失去缓存在性能上的优势，所以你应该在真正有必要的时候才用这个功能

## 10.使用 helment.contentSecurityPolicy() 设置内容安全策略

这个挑战重点讨论一种现代浏览器中有效并且能大幅度减轻安全风险和很多种类型常见攻击的安全防护。通过配置内容安全策略你可以防止很多类型的脚本恶意注入。这会让你的应用远离 XSS 漏洞、恶意追踪、恶意 frames 和很多很多其他攻击。CSP 通过配置资源白名单来避免这些问题。 你可以给任何一种类型的页面资源 (脚本、样式文件、字体、frames、媒体文件等等等）做这个配置，它支持很多指令，所以网站管理员可以做细致的控制。更多详情请参考 HTML 5 Rocks，KeyCDN。不幸的是。一些旧的浏览器不支持 CSP。

默认的指令很容易受到攻击, 所以设置 defaultSrc 指令作为降级方案很重要。Helmet 同时支持 defaultSrc 和 default-src 命名规范。降级方案可以被应用在大部分指令上，在这个练习中，我们使用 helmet.contentSecurityPolicy()，并配置 defaultSrc 指令为 ["self"] (允许的资源列表必须在一个数组当中), 这样做表示只信任自己的网站域名。另外配置 scriptSrc 指令可以限制脚本只能本网站域名上或者信任的域名‘trusted-cdn.com’上下载

提示: 在 "'self'" 关键词, 单引号也是关键词的一部分, 所以你应该用双引号来包起它才能正常工作。

## 11.使用 helmet() 中间件来配置 Helmet

app.use(helmet()) 会自动加载除 noCache() 和 contentSecurityPolicy() 外上面所有提到的中间件，但有需要的话这两个中间件也被启用。你也可以使用配置对象来一个个地禁用或者配置中间件。
```js
// Example

app.use(helmet({

frameguard: { // configure

action: 'deny'

},

contentSecurityPolicy: { // enable and configure

directives: {

defaultSrc: ["self"],

styleSrc: ['style.com'],

}

},

dnsPrefetchControl: false // disable

}))
```

为了教学和方便测试我们是一个个地讲解中间件，但通过使用 ‘parent’ helmet() 是最清晰和简洁的，特别是在真实的项目中。

## 12.了解加密哈希

BCrypt 哈希非常安全. 哈希其实就是原数据的加密形式，非常安全，这通过把原始数据放进哈希算法然后返回固定长度的字符串实现。为了让这个过程更复杂跟安全，你还可以加你的哈希添加 盐。加盐其实就是给在哈希算法工作前给源数据添加随机的字符串数据，这会让破解哈希更加复杂

BCrypt 看起来像这样子 $2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm，它遵循固定的结构. 前面一小节 $2a说明了该哈希采用什么算法。下一部分 $13定义了 代价. 代价就是用多少计算资源来生成哈希。 它的对数刻度是 2^cost 它决定了数据被放入哈希算法多少次。举个例子，如果代价为10也就是说你能够在一个普通的计算机上每秒钟哈希10个密码。然而，如果代价为15，那每个哈希都要3秒钟，再举例子，如果代价是31at a cost of 31，那每次哈希能耗费好几天。通常代价为12就已经足够安全。哈希的最后一部分 $ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm, 看起来像随机字符、句号、字母组成的随机字符串。但实际上它有两部分内容。前面22个字符就是纯文本的盐，剩下的就是加密过的密码！

## 13.异步哈希和比较密码

哈希会占用很大计算机资源并且会耗费比较多时间，比较推荐的做法是用异步的方法用调用哈希算法这样就不会阻挡其他的访问了。异步调用哈希方法非常简单，只需要 bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => { /*Store hash in your db*/ });

把这段哈希方法添加到你的服务器(我们已经定义好这个方法的变量给你直接使用了) 然后输入到控制台! 完成之后你通常需要把哈希过的值保存到数据库。

当你需要对比用户输入的值是否和之前哈希过的值一样的时候，你只需要调用对比函数 bcrypt.compare(myPlaintextPassword, hash, (err, res) => { /*res == true or false*/ });. 把这个添加到你已有的哈希方法(你需要等哈希完成之后才能调用对比方法) 在你输入哈希过的值之后在对比方法里面输入 'res' 到控制台. 你会看到一个哈希值和 ``true`` 被打印出来。如果你在对比方法里面把 'myPlaintextPassword' 改变成 'someOtherPlaintextPassword' 那么应该会输出 ``false``
```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash); //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
      console.log(res); //true
  });
});
```

提交页面当你觉得已经完成的时候。
## 14.同步哈希和比较密码

同步哈希也是非常简单的，但是会造成延迟特别是在哈希计算量大并且次数多的情况下。同步进行哈希是通过调用 var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

把同步哈希添加到你的代码并输入到控制台，和之前一样，需要用到的变量已经提前定义好，你不需要做任何改动。你可能已经注意到，即使你是用异步的方式哈希同一个密码，结果也是不一样的。这是因为每次哈希的盐都是随机生成的，你可以通过第三个哈希字符串的头22的字符来验证。

当你需要对比用户输入的值, 你只需要使用 compareSync 方法: var result = bcrypt.compareSync(myPlaintextPassword, hash);返回的结果为 ``true`` 或者 ``false``。添加这个方法并输出把控制台来验证同步哈希已经成功了。

提交页面当你觉得已经完成的时候。如果你遇到任何错误，你可以参考这个链接中已经完成的代码。