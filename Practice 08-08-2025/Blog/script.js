let Users = 'http://localhost:3003/Users';

let Blogs = 'http://localhost:3003/Blogs';



// apply dark mode
$(document).ready(() => {
    const body = $('body');

    if (localStorage.getItem('theme') === 'dark') {
        body.addClass('dark');
    }

    $('#dark').on('click', function (e) {
        e.preventDefault();

        body.toggleClass('dark');

        localStorage.setItem('theme', body.hasClass('dark') ? 'dark' : 'white');
    });
});


$(document).ready(() => {
    $('#loginForm').on('submit', async function (e) {
        e.preventDefault();

        if (!this.checkValidity()) {
            $(this).addClass("was-validated");
            return false;
        }

        let userName = $('#email').val();
        let password = $('#password').val();

        try {
            const userResponsoce = await fetch(Users);
            const data = await userResponsoce.json();
            data.forEach(element => {
                if (element.email === userName && element.passWord === password) {
                    localStorage.setItem('id', element.id);
                    window.location.href = "add.html";
                }
                else {
                    showToast('Invalid Username or Password');
                }
            });
        }
        catch (err) {
            console.log(err);
        }

    });



    
    // toast
    function showToast(message = 'Invalid Username or Password') {
        const toast = $('#errorToast');
        toast.find('.toast-body').text(message);

        // show once
        if (!toast.hasClass('show')) {
            toast.addClass('show').removeClass('fade');
            setTimeout(() => {
                toast.removeClass('show').addClass('fade');
            }, 3000);
        }
    }

    // close button
    $(document).on('click', '.btn-close', function () {
        $('#errorToast').removeClass('show').addClass('fade');
    });






    $('#signup-form').on('submit', async function (e) {
        e.preventDefault();

        let name = $('#up-name').val();
        let email = $('#up-email').val();
        let passWord = $('#up-password').val();
        let confirmPass = $('up-confirm').val();

        if (passWord !== confirmPass) {
            showToast('password and confirm password not match');
        }

        try {
            await fetch(Users, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, passWord
                })
            });
        }
        catch (err) {
            console.log(err);
        }
    })

    // add blog
    $('#myForm').on('submit', async function (e) {
        e.preventDefault();

        let title = $('#title').val();
        let discription = $('#discription').val();

        let category = [];
        $('input[name="cat"]:checked').each(function () {
            category.push($(this).val());
        })

        let id = localStorage.getItem('id');

        try {
            await fetch(Blogs, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    authorId: id, title, discription, category
                })
            });
        }
        catch (err) {
            console.log(err);
        }
    })

});


// singup and singin
$(document).ready(() => {
    $("#show-signup").click(() => {
        $("#loginForm")[0].reset();
        $("#loginForm").addClass("hidden");
        $("#signup-form").removeClass("hidden");
    });
    // hide the signup
    $("#show-signin").click(() => {
        $("#signup-form")[0].reset();
        $("#signup-form").addClass("hidden");
        $("#loginForm").removeClass("hidden");
    });
});

