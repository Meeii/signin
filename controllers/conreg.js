module.exports = {
  'POST /conreg': async (ctx, next) => {
    ctx.render('register.html', {
      title: 'register',
      name: 'Mr Node'
      });
  }
}