

module.exports = {
  'POST /register': async (ctx, next) => {
    const data = require('../mapping');
    var text = ctx.request.body.text || '';
    var password = ctx.request.body.password || '';
    return data.insertData(text, password).then( user => {
         console.log(user.name + 'Register OK');
         ctx.render('index.html',{
           title: 'Welcome'
         });
      }
    ); 
  }
};