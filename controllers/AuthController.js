
 exports.login_get = (req, res) => {
    res.render('auth/login');
}


exports.login_post = (req, res) => {
    res.redirect('/');
}


exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}
