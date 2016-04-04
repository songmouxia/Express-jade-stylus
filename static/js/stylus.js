var stylus = require("stylus"),
    str = require("fs").readFileSync("css/stylus.styl", "utf8");

stylus.render(str,function (err, css) {
    if (err) throw err;
    console.log(css);
});