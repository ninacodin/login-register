module.exports = (req, res) => {

    let email = ""
    let passsword = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined"){
        email = data.email
        passsword = data.passsword
    }

    res.render('register', {
        errors: req.flash('validationErrors'),
        email: email,
        password: passsword
    })
}