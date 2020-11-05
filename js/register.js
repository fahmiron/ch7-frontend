// ajax request to register user
$("#submit").submit(function() {
    var username = $("#defaultRegisterFormEmail").val()
    var password = $("#defaultRegisterFormPassword").val()
    console.log('username and password', username, password)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://127.0.0.1:3000/api/signup',
        data: JSON.stringify({username: username, password: password}),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d)
            window.open("login.html", "_self")
        }
    })
})