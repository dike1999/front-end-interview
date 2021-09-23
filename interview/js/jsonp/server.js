const Koa = require("koa");
const app = new Koa();
const items = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

app.use(async (ctx, next) => {
  if (ctx.path === "/api/jsonp") {
    const { cb, id } = ctx.query;
    const title = items.find((item) => item.id == id)["title"];
    ctx.body = `${cb}(${JSON.stringify({ title })})`;
    console.log(ctx.body);
    return;
  }
});
console.log("listen 8080...");
app.listen(8080);
