const koa = require("koa");
const static = require("koa-static");
const app = new koa();
const conditional = require("koa-conditional-get");
const etag = require("koa-etag");

app.use(conditional());
app.use(etag());
app.use(
	// 可访问项目目录下的所有文件
	static(".", {
		maxage: 10 * 1000, // 设置缓存时间为 10 s
	})
);

app.listen(3000);
console.log("listening on port 3000");
