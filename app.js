const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./template');

const user = require('./mapping');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

/*insertData('a', '12').then(user => {
    console.log(user.name);
});*/

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');//http://localhost:3000/