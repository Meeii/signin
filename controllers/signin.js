

module.exports = {
    'POST /signin': async (ctx, next) => {
        const data = require('../mapping');
        var text = ctx.request.body.text || '';
        var password = ctx.request.body.password || '';
        return data.searchUser(text).then(user => { //%
                if (text === user.name && password === user.password) {
                    console.log('signin ok!');
                    ctx.render('signin-ok.html', {
                    title: 'Sign In OK',
                    name: 'Mr Node'
                    });
                }else{
                    console.log('signin failed!');
                    ctx.render('signin-failed.html', {
                    title: 'Sign In Failed'
                    });
                }
            });    
    }
}