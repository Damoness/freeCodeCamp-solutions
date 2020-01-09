
身份验证是验证用户身份或处理方式的过程或行为。至此，你还不能创建一个应用去使用这个关键概念。

Passport 是运用身份认证最常见也是最简单的中间件。它上手轻松，轻量，极其灵活地可以运用到很多策略中，我们将会在后面章节中讲述。除了身份认证之外，我们还需要学习模版引擎，它可以支持我们使用 Pug 和双向信息传输，而双向信息传输可以让我们的客户端与服务器完成即时通讯。通过挑战这些关卡，你可以在 Glitch 上书写你的代码，完成我们的起步项目。每当完成关卡，你可以复制你的公共 Glitch 链接（在你的应用主页上）到挑战页面去测试！或者你想在其他平台上完成你的项目，但必须对我们的测试公开透明。你可以点击这个链接或者克隆这个仓库开始你的项目。如果你使用 Glitch，记得保存链接到你的安全项目。

## 1.设置模板引擎

你可以在应用的模版引擎中使用静态模板文件（如那些写在Pug里的）。在运行时，模版引擎会用服务端的真实数据替换掉模版文件中的变量，然后将模版转译成发送给客户端的 HTML 静态文件。这样可以轻松地构造 HTML 页面，允许在页面直接显示变量内容而不需要发送 API 请求。

为了在项目中使用 Pug，你需要在 package.json 中添加依赖"pug": "^0.1.0"

为了在 Node/Express 中使用 pug 作为模版引擎，你需要在 express 中将 app 的 “view-engine” 设置为 “pug”，就像这样：app.set('view engine', 'pug')。

最后, 你需要使用res.render方法渲染 views/pug/index.pug 页面来作为路由请求的返回。

如果一切顺利，刷新一下应用的主页就可以看到 Pug 成功加载的提示，这时你就可以提交你的页面了。

## 2.使用模板引擎

模版引擎最大的特点之一就是在 HTML 页面展示之前，可以从服务端传变量到模版文件。

在 Pug 文件中，你可以用变量名来调用变量，比如写成#{variable_name}来实现行内调用，或像p= variable_name把元素与变量直接写在一起，这表示 p 元素的内容等价于这个变量。

建议大家在 Pug 的 README 里看看它的语法和用法，这样你写出的代码会相对简练。另外要注意，Pug 使用缩进来表示嵌套的代码块。

在 pug 的 'index.pug' 文件中，我们使用了 title 和 message 两个变量。

为了从服务器传递这些信息，你需要给 res.render 的第二个参数传入一个对象，其中包含变量对应的值。比如，如果你想传递对象{title: 'Hello', message: 'Please login'到你的主页，那么应该这样写：

res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});

刷新页面，如果页面中数据显示正确，你就可以提交你的页面了。

## 3.设置 Passport

现在我们来创建 Passport，最终我们需要用它来实现用户注册和登录。除了 Passport，我们会用 express-session 来处理 session（会话）。在客户端，我们可以用这个中间件把会话 id 储存到 cookie，并可以通过服务器上的 id 访问会话数据。通过这种方式，我们可以无需把用户信息存到 cookie 来完成用户的验证。

为了在你的项目中使用 Passport，首先你需要在 package.json 文件中添加依赖："passport": "^0.3.2"

此外，还需要添加 express-session 作为依赖，就像这样："express-session": "^1.15.0"。express-session 有许多高级特性，但我们暂时只需要了解其基础特性。

现在，我们需要配置 session 并初始化 Passport。请先创建变量session和passport引入 express-session 和 passport。

为了让 express 应用可以使用 session，我们需要添加一些基础选项。请在 .env 文件中添加字段SESSION_SECRET，并给它赋一个随机值，便于加密 cookie、计算哈希。
```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
```
还有，我们需要让 express 使用passport.initialize()和passport.session()。为此，你需要这样写：app.use(passport.initialize());。

## 4.用户对象的序列化

序列化和反序列化在身份认证中是很重要的概念。序列化一个对象就是将其内容转换成一个体积很小的 key，后续可以通过这个 key 反序列化为原始对象。这样，服务器就可以在用户未登录时识别用户，或者说给这个用户一个唯一标识，用户也不需要在每次访问不同页面时都给服务器发送用户名和密码。

我们需要用到序列化和反序列化的方法来进行配置。passport 为我们提供了passport.serializeUser( OURFUNCTION )和passport.deserializeUser( OURFUNCTION )两个方法。

serializeUser方法接收两个参数，分别是表示用户的对象和一个回调函数。其中，回调函数的返回值应为这个用户的唯一标识符：最简单的写法就是让它返回用户的_id，这个_id属性是 MongoDB 为用户创建的唯一字段。类似地，反序列化也接收两个参数，分别是在序列化时生成的标识符以及一个回调函数。在回调函数里，我们需要根据根据传入的标识符（比如 _id）返回表示用户的对象。为了在 MongoDB 中通过 query（查询语句）获取 _id 字段，首先我们需要引入 MongoDB 的ObjectID方法：const ObjectID = require('mongodb').ObjectID;；然后调用它：new ObjectID(THE_ID)。当然，这一切的前提都是先引入 MongoDB 作为依赖。你可以在下面的例子中看到：
```js
passport.serializeUser((user, done) => {
   done(null, user._id);
 });

passport.deserializeUser((id, done) => {
        db.collection('users').findOne(
            {_id: new ObjectID(id)},
            (err, doc) => {
                done(null, doc);
            }
        );
    });
```

注意：在完全配置好 MongoDB 前，deserializeUser会抛出错误。因此，现在请先注释掉上面的代码，在回调函数中仅仅调用done(null, null)即可。

## 5.实现 Passport 用户的序列化

截至目前，我们还没有配置完数据库，因此还无法加载用户数据。实现这个的方式很多，但对于我们的项目，一旦服务器启动，那么只要有 app 实例在运行，数据库就应一直处于连接状态。

为此，我们要添加 MongoDB 作为依赖，并在 server 中require它，就像这样：const mongo = require('mongodb').MongoClient;。

在连接数据库之后，我们才能让服务器开始监听请求，这样做可以保证服务器在数据库连接前或数据库发生错误时不接受任何请求。为此，我们需要这样写：
```js
mongo.connect(process.env.DATABASE, (err, db) => {
    if(err) {
        console.log('Database error: ' + err);
    } else {
        console.log('Successful database connection');

        // 序列化和监听请求写在这里

}});
```
现在，请把上一个挑战中我们注释掉的deserializeUser中的代码块添加回来，然后删掉done(null, null)。请确保你已经在 .env 文件里配置了DATABASE的数据库连接字段，例如：DATABASE=mongodb://admin:pass@mlab.com:12345/my-project。你可以在 mLab 上创建一个免费的数据库。至此，序列化的创建完成。

完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在这里检查你的项目完成情况。

## 6.身份验证策略

现在，我们需要构建验证用户的策略，策略的选择有很多。比如，如果我们已经让用户在注册时填写了用户信息，那我们就可以基于这些信息验证；或者也可以引入第三方登录，如 Google 或者 Github。为此，你可以参考 Passports 中提供的策略插件。对于这个项目的验证策略，我们会采用自己搭建的方式完成。

首先，我们需要引入 passport-local 作为依赖，然后将它添加到服务器，就像这样：const LocalStrategy = require('passport-local');

然后，我们需要让 passport 使用实例化的本地策略对象。请注意，接下来的所有代码都应写在连接数据库的回调中，因为它们的执行都依赖数据库。
```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.collection('users').findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```
这就是我们的用户验证逻辑：首先根据用户输入的用户名在数据库中寻找用户；然后检查密码是否匹配；最后如果没有发生错误，那么就会返回用户对象并通过验证。

我们也可以采用上面链接中提供的验证策略，一般来说，根据该策略仓库中的 README 来进行配置就足够了。一个很好的例子是 Github 策略，在该策略中，我们不需要写用户名或密码的相关验证逻辑，因为用户将被引导到 Github 页面进行验证。只要他们登录并同意，Github 就会返回他们的个人信息供我们使用。


## 7.如何使用 Passport 策略

在提供的 index.pug 文件里有一个登录表单。因为这个表单中存在行内 JavaScript 代码if showLogin，因此它是隐藏的。因为 showLogin 未定义，所以表单不会渲染。如果在该页面的res.render()里添加一个包含showLogin: true的对象，你就可以在刷新页面后看到表单。当你点击 login 时，表单会向服务器的 /login 发送 POST 请求，此时服务器端就可以接受 POST 请求信息并进行用户验证。

在这次挑战中，你需要为 POST 请求添加路由/login。为了用这个路由进行验证，你需要添加一个中间件，中间件应作为参数添加到用于处理请求的回调函数function(req,res)之前。对于 passport 的验证中间件，应这样调用：passport.authenticate('local')。

passport.authenticate 也接收选项作为参数，这些选项用于设置验证，例如{ failureRedirect: '/' }就很有用，请记得添加到你的代码中。如果中间件验证通过，我们就应该提供相应的后续处理。在这个挑战中，我们需要让用户重定到 /profile，这样profile.pug页面就会渲染。

如果验证通过，用户对象将会储存到 req.user 中。

这时，如果你在表单里输入了用户名和密码，路由将会重定向到主页 /，在服务端将会打印 'User {USERNAME} attempted to log in.'，由于现在我们还没有实现注册功能，因此所有登录尝试都会失败。

## 8.创建新的中间件


无论是否登录，或者哪怕用户试图访问其他页面，目前都会跳转到/profile。为了解决这个问题，我们需要在 profile 页面渲染之前进行用户验证，创建中间件就可以实现这个功能。

这个挑战的目标是创建ensureAuthenticated(req, res, next)中间件方法，通过在 request 上调用 passports 的isAuthenticated方法，我们可以检查 req.user 是否定义，从而确定用户是否通过认证。如果用户已通过验证，就会调用 next()，否则我们应重定向到主页并让用户登录。该中间件的实现是：
```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/');
};
```
然后，我们需要把 ensureAuthenticated 中间件添加到处理请求的回调之前：

```js
app.route('/profile')
  .get(ensureAuthenticated, (req,res) => {
       res.render(process.cwd() + '/views/pug/profile');
  });
```  

完成上述要求后，你就可以在左边提交你的页面链接。

## 9.如何将 Profile 放在一起

现在，只有通过验证的用户才能进入 /profile 页面，这样我们就可以在页面上使用 'req.user' 里的信息了。

请在变量中包含 username 键，值为 'req.user.username'，并通过 render 方法传给 profile 页面。然后在 'profile.pug' 页面，添加这行`h2.center#welcome Welcome, #{username}!`代码来创建类为center、id 为welcome且文本内容为 'Welcome, ' 后加用户名的 h2 元素。

以及，请在 profile 里添加 /logout 链接，后续会用于处理用户退出登录的逻辑：`a(href='/logout') Logout`

## 10.用户退出

创建退出登录的逻辑是比较简单的。只要用户尝试退出登录，路由就应重定向到主页，而不应该显示任何其他页面。

在 passport 里，只需要在重定向前调用req.logout();即可完成用户登出。
```js
app.route('/logout')
  .get((req, res) => {
      req.logout();
      res.redirect('/');
  });
```
你可能注意到我们还没有处理 404 错误，这个错误码代表页面无法找到。在 Node.js 中我们通常会用如下的中间件来处理，请在所有路由之后添加这段代码：
```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```
## 11.注册新用户

现在我们需要为新用户添加注册帐号的功能，首先我们需要在主页的 res.render 接收的变量对象中添加showRegistration: true。此时刷新页面，你会看到页面上已经显示了我们在 index.pug 文件中定义的注册表单。这个表单设置了请求路径 /register，并将请求方法设置成 POST，所以我们需要在服务器接受 POST 请求，且在数据库中创建用户对象。

用户注册的逻辑如下：注册新用户 > 认证新用户 > 重定向到 /profile。

对于步骤一的注册新用户，详细逻辑如下：用 findOne 命令查询数据库 > 如果返回了用户对象，则表示用户存在，然后返回主页；如果用户未定义且没有报错，则会将包含用户名和密码的用户对象通过insertOne添加到数据库，只要没有报错则会继续下一步：认证新用户——我们已经在 /login 路由的 POST 请求中写好了这部分逻辑。
```js
app.route('/register')
  .post((req, res, next) => {
      db.collection('users').findOne({ username: req.body.username }, function (err, user) {
          if(err) {
              next(err);
          } else if (user) {
              res.redirect('/');
          } else {
              db.collection('users').insertOne(
                {username: req.body.username,
                 password: req.body.password},
                (err, doc) => {
                    if(err) {
                        res.redirect('/');
                    } else {
                        next(null, user);
                    }
                }
              )
          }
      })},
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
        res.redirect('/profile');
    }
);
```


## 12.哈希密码

回过头来看信息安全，你也许记得在数据库中存储明文密码是绝对禁止的。现在，我们需要引入 BCrypt 来解决这个问题。

添加 BCrypt 作为依赖，并通过require添加到服务器代码中。你需要在两个步骤中使用哈希运算：注册和保存新账户，以及登录时检查密码是否正确。

目前处理注册的路由中，我们是这样把密码添加到数据库的：password: req.body.password。我们可以通过这段代码创建哈希值：var hash = bcrypt.hashSync(req.body.password, 12);，然后就可以把passsword: req.body.password替换为password: hash。

最后，在验证逻辑中，我们已经有这样一段代码执行检查：if (password !== user.password) { return done(null, false); }。但我们现在存储的密码user.password已经是哈希值了。由于目前的检测机制是密码不匹配时就返回未认证，因此修改后，用于比对用户密码哈希值的代码应该是这样：if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }。

当你需要存储密码时，这样做可以有效地提升网站的安全性。完成上述要求后，你就可以在左边提交你的页面链接。


## 13.使用模块清理项目

目前，我们把所有的代码都放到了 server.js 文件里，这会导致代码难以维护，且扩展性差。

现在让我们来创建两个新文件：routes.js 和 auth.js。

在每个文件的开头，我们都需要写上这段代码：
```js
module.exports = function (app, db) {


}
```

然后，在 server.js 文件的开头，我们需要像这样引入文件：const routes = require('./routes.js');

在成功连接数据库之后，我们需要像这样进行实例化：routes(app, db)。

最后，我们需要把所有路由相关的代码从 server.js 移动到新文件 routes.js。不要忘了，ensureAuthenticated方法的定义也要移动到新文件中，这个是我们在之前的挑战中，为在路由中判断用户是否已登录创建的函数。然后，我们还需要在 routes.js 文件开头添加所需要的依赖，如：const passport = require('passport');。

如果在这些步骤后没有报错，那么恭喜你，你已成功地从 server.js 文件中分离出了路由文件。

现在，我们来把 server.js 中与验证相关的代码分离到 auth.js 中，例如序列化，设置验证策略等。请正确添加依赖，并在 server.js 中调用auth(app,db)。另外，由于我们的注册路由依赖 passport，所以我们需要先调用auth(app, db)，再调用routes(app, db)。

Node 和 Express 高级课程至此就告一段落了，你可以在此基础上继续优化和完善这个项目。但至少，现在你也有一些可以展示给大家看的代码了。完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在 here 这里检查你的项目完成情况。

## 14.实现第一种社交登录

第三方用户验证的实现逻辑如下：
在用户点击按钮或者链接后，进入验证页面，通过第三方平台（如 GitHub）来进行用户验证。
需要在路由中调用passport.authenticate('github')，跳转至 GitHub 验证页面。
页面跳转到 GitHub 上，如果用户未登录 GitHub，就需要在这里进行登录。登录成功后，会出现向用户申请访问权限的确认页。
如果用户同意访问，则用户会回到我们提供的回调地址，带着 GitHub 那边提供的用户信息回到我们的 app 中。
验证已完成。在我们的应用中，我们需要查询这个用户是否已经存在。如果是新用户，那我们需要把他的用户信息存储到数据库。
在 OAuth 验证策略中，我们至少需要提供 Client ID 和 Client Secret，这样第三方平台就会获悉验证请求的来源，以及这个来源是否有效。为此，需要去我们使用的第三方验证平台（比如 GitHub）获取这两个字段的值。注意，我们获取到的这个值是唯一的，且仅对我们的当前 app 有效——因此，千万不要分享给别人，更不要上传到公共仓库或者直接写在代码里。通常，我们会在 .env 文件里配置，并在 Node.js 里通过：process.env.GITHUB_CLIENT_ID获取。对于这次挑战，我们将会使用 GitHub 作为验证平台。

首先，你需要进入账户设置里的 Developer settings板块，然后在 OAuth Apps 获取 Client ID 和 Client Secret。点击 'Register a new application'，设置你的应用名称，然后把你的 glitch 主页地址（注意，不是项目代码的地址）粘贴到 Homepage URL。然后，回调 url 需要设置成上面 Homepage URL 里你粘贴的地址，但后面要加上 '/auth/github/callback'。这样在用户通过 Github 验证后才能跳转到我们指定的页面。别忘了，我们还需要在 .env 文件里配置好 'GITHUB_CLIENT_ID' 和 'GITHUB_CLIENT_SECRET'。

然后，请在你现在的项目里，为 /auth/github 和 /auth/github/callback 创建两个接收 GET 请求的路由。第一个只需要通过 passport 来调用 'github' 验证，第二个需要调用 passport 来验证 'github'，但需要在失败时跳转回主页 '/'，成功是跳转到用户页面 '/profile'。跳转的逻辑与上一个项目中的逻辑一样。

例如 '/auth/github/callback' 应该像我们处理在上一个项目中一般的登录一样：
```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => { 
    res.redirect('/profile'); 
  });
```

## 15.实现第二种社交登录

设置 GitHub 验证的最后一步是创建策略本身。为此，你需要在项目中require'passport-github'，且实例化为 GithubStrategy：const GitHubStrategy = require('passport-github').Strategy;。

为了设置 GitHub 策略，我们需要在 passport 中使用实例化的 GithubStrategy，它可以接收两个参数：一个对象（包括 clientID, clientSecret 和 callbackURL），以及一个回调函数。在这个回调函数中，我们要处理验证成功时，判断用户是否已经在数据库中存在的逻辑，还有如果数据库中不存在，把用户数据添加到数据库的代码。这种处理方式适用于绝大部分第三方验证策略，但有些策略会需要我们提供更多的信息，详情请参考相关策略的 README。例如，Google 的验证策略会要求你提供一个 scope，用于标示用户成功登录后，你需要从返回的对象中获取那些信息。以及，这也需要经过用户同意，你才可以获取到。当前我们使用的验证策略，你也可以从它 GitHub 的页面上了解它的用法，不过我们也会在这里进行详细讲解。

你的新策略应该这样去实现：
```js
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
      // 在这里写和数据库相关的代码
  }
));
```
目前，你的验证部分不会成功。由于没有数据库的逻辑和回调函数，你的代码目前还会报错。但如果你试一试，就可以在右边的控制台里看到输出了你的 GitHub 的个人信息。

完成上述要求后，你就可以在左边提交你的页面链接。


## 16.实现第三种社交登录


验证策略的最后一部分是处理从 GitHub 返回的个人信息。如果用户存在，我们就需要从数据库中读取用户数据并在 profile 页面加载；否则，我们需要把用户信息添加到数据库。GitHub 在用户信息中为我们提供了独一无二的 id，我们可以通过序列化的 id 在数据库中搜索用户（已实现）。以下是这个逻辑的实现示例，我们应该把它传到新策略的第二个参数，就是目前console.log(profile);的下方：

```js
db.collection('socialusers').findAndModify(
    {id: profile.id},
    {},
    {$setOnInsert:{
        id: profile.id,
        name: profile.displayName || 'John Doe',
        photo: profile.photos[0].value || '',
        email: profile.emails[0].value || 'No public email',
        created_on: new Date(),
        provider: profile.provider || ''
    },$set:{
        last_login: new Date()
    },$inc:{
        login_count: 1
    }},
    {upsert:true, new: true},
    (err, doc) => {
        return cb(null, doc.value);
    }
);
```

findAndModify的作用是在数据库中查询对象并更新，如果对象不存在，我们也可以upsert（注，upsert 可以理解为 update + insert）它，然后我们可以在回调方法里获取到插入数据后的新对象。在这个例子中，我们会把 last_login 设置成为 now，而且总会为 login_count 加 1。只有在插入一个新对象（新用户）时，我们才会初始化这些字段。另外，还需要注意默认值的使用。有时返回的用户信息可能不全，可能是因为用户没有填写，也可能是因为用户选择不公开一部分信息。在这种情况下，我们需要进行相应的处理，以防我们的 app 报错。


## 17.设置环境

现在，我们需要添加 Socket.IO 作为依赖，在你的代码中引入，给它传入参数 http 并实例化，将其命名为io，就像这样：const io = require('socket.io')(http);

我们需要处理的第一件事是监听从客户端发出的连接事件，我们可以调用 on 方法来监听具体的事件。它接收两个参数：一个是发出的事件的标题字符串，另一个是后续用来传递数据的回调函数。在这个回调函数中，我们用 socket 来代表它所包含的数据。简单来说，socket 就是指已连接到服务器的客户端。

在我们服务器代码中，只需要在注释间添加以下内容即可：
```js
io.on('connection', socket => {
  console.log('A user has connected');
});
```
对于发出连接事件的客户端，只需要在 client.js 中添加以下内容：
```js
/*global io*/
var socket = io();
```
注意，这个 client.js 文件是在用户通过验证后加载到客户端的。在这个文件中，我们没有定义 io 变量，但第一行的注释会阻止运行时产生的报错。然后，我们在 chat.pug 的页面上已经为你添加好了 Socket.IO 库的 CDN。

现在你可以尝试启动你的 app 并登录，你会看到服务器的控制台中打印了 'A user has connected'

注意：
只有在连接到处于同一个 url/server 上的 socket 时，io()才可以正常执行。如果需要连接到外部的 socket，就需要这样调用：io.connect('URL');。

## 18.通过 Emitting 通信

Emit 是你会用到的，最常见的通信方式。如果我们从服务器发送信息给 'io'，就相当于把事件的名称和数据发送给了所有处于连接状态的 socket。我们可以利用这个特性实现这样的功能：只要有新用户连接到服务器，我们就可以把目前连接的总用户数发给所有已连接的用户，这样所有用户随时都可以看到实时的在线人数。

首先，我们需要在监听连接的地方之前添加一个用于追踪用户数的变量：var currentUsers = 0;

然后，只要有人连接到服务器，我们需要在发出用户数量之前先给这个变量加 1：++currentUsers;

最后，在监听连接的地方发出（emit）该事件即可。这个事件应命名为 'user count'，且数据应该为 'currentUsers'：io.emit('user count', currentUsers);

接下来，我们还需要让客户端监听从服务端发出的事件。为此，我们还是需要用到 on 这个方法：
```js
socket.on('user count', function(data){
  console.log(data);
});
```
现在你可以尝试启动你的 app 并登录，你会看到在客户端的控制台打印出了 1，这就表示目前连接到服务器的用户数为 1。你可以试着通过打开多个 app 来验证数量是否会增加。


## 19.处理连接断开

你也许注意到，目前为止我们只处理用户数量的增加，没有处理减少。事实上，处理用户断开连接也很简单。区别在于，新连接的监听是发生在整个服务器上，但连接断开的监听是发生在每个 socket 上。

为此，我们需要在目前的监听回调里面监听 socket 断开连接的事件。在断开连接的回调函数中，我们可以不传任何参数，但你可以在这里添加连接断开的测试代码：socket.on('disconnect', () => { /* 在这里添加连接断开的测试代码 */ });

为确保客户端可以看到实时的用户数量，显然，我们应该在用户断开时让 currentUsers 减 1，然后发送 'user count' 事件，并使用修改后的用户数量。

注意：
和 'disconnect' 类似，所有 socket 可以发送到服务器的事件，我们都应该在有 'socket' 定义的连接监听器里处理。

完成上述要求后，你就可以在左边提交你的页面链接。

## 20.用 Socket.IO 进行身份验证

目前，我们还无法确定连接到服务器的用户身份。虽然 req.user 包含用户信息，但这个只在用户直接与服务器交互（即不通过 web socket 访问服务器资源）时产正。当我们的用户通过 web socket 与服务器连接时，由于不存在 req 对象，因此我们无法获取用户数据。解决这个问题的方法之一是通过读取和解析请求中包含 passport session 的 cookie，然后反序列化，进而获取用户信息对象。幸运的是，npm 上有可以让这个复杂的流程简单化的库。

添加 'passport.socketio' 作为依赖，然后赋值给 'passportSocketIo'。

现在我们只需要做一些简单的配置，然后让 Socket.IO 使用它就可以了。请注意，这部分代码应添加在目前的 socket 代码之前，不应添加在目前的连接事件监听中：
```js
io.use(passportSocketIo.authorize({
  cookieParser: cookieParser,
  key:          'express.sid',
  secret:       process.env.SESSION_SECRET,
  store:        sessionStore
}));
```
你也可以为验证设置回调函数，为它传入 'success' 或 'fail'。这个函数会在用户尝试连接并完成验证后调用。

现在，我们可以通过socket.request.user访问用户数据。例如，现在你在代码中添加以下内容：console.log('user ' + socket.request.user.name + ' connected');。这样我们就可以在服务端的控制台打印出通过 socket 连接到服务器的用户信息。

## 21.用户公告

许多聊天室都有这个功能：所有已连接到服务器的在线用户都会看到有人加入或退出的提醒。我们已经写好了处理连接和断开事件的代码，只要对这个方法稍作修改就可以实现这个功能。在事件中，我们需要发送这三条信息：连接或断开的用户名、当前用户数量、事件类型（即需要知道用户究竟是连接还是断开）。

请将事件名称更改为 'user'，其中应包含如下字段：'name'、'currentUsers'、'connected'（布尔值，对于连接是 true，断开是 false）。记得要修改之前我们写好的处理 'user count' 的那部分代码，现在我们应传入布尔值：io.emit('user', {name: socket.request.user.name, currentUsers, connected: true});

现在，我们的客户端已经有足够的信息显示现有用户数量和发送用户上下线通知。接下来我们需要在客户端监听 'user' 事件，然后使用 jQuery 把#num-users节点的文本内容更新为 '{NUMBER} users online'。同时，我们需要为<ul>添加一个 id 为 'messages' 且带有 '{NAME} has {joined/left} the chat.' 文本的<li>：
```js
socket.on('user', function(data){
  $('#num-users').text(data.currentUsers+' users online');
  var message = data.name;
  if(data.connected) {
    message += ' has joined the chat.';
  } else {
    message += ' has left the chat.';
  }
  $('#messages').append($('<li>').html('<b>'+ message +'<\/b>'));
});
```
## 22.发送和显示聊天消息


现在，我们可以开始实现聊天室功能了。整体逻辑很简单，只需要获取用户发给服务端的消息，再通过服务端给所有客户端发送信息就可以了。在 client.js 文件里，你应该已经注意到了这段提交表单的代码：$('form').submit(function(){ /*logic*/ });

现在我们需要处理事件的 emit，它应该发生在定义 'messageToSend' 之后，以及清除#m中的文本之前。我们称这个事件叫 'chat message'，需发送的数据叫 'messageToSend'：socket.emit('chat message', messageToSend);

在服务端，我们需要监听包含 'message' 的 'chat message' 事件。一旦事件发生，我们就通过io.emit把包含 'name' 和 'message' 的 'chat message' 事件发送给所有已连接的 socket。

回到客户端，我们需要监听 'chat message' 事件。只要接收到这个事件，就把包含名字和消息的内容（注意：需要在名字后添加冒号）通过<li>添加到#messages。
