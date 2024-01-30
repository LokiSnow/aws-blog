const express = require('express');
const app = express();

const config = {
    root: __dirname + '/dist/aws-blog',
    port: process.env.PORT || 8086
};



//静态资源
app.use('/', express.static(config.root));

//所有路由都转到index.html
app.all('*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.sendfile(config.root + '/index.html');
});


app.listen(config.port, () => {
    console.log("running on port - " + config.port);

})
