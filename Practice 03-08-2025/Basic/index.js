$(document).ready(function () {
    $('#form-one').on('submit', async function (event) {
        event.preventDefault();

        let fname = $('#fname').val();
        let lname = $('#lname').val();

        let gender = $('input[name="gender"]:checked').val();

        let hobby = [];
        $('input[name="hobby"]:checked').each(function () {
            hobby.push($(this).val());
        });

        let country = $('#country').val(); 

        try {
            const fetchapi = await fetch('http://localhost:3003/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fname, lname, gender, hobby, country
                })
            });

            const data = await fetchapi.json();
            console.log(data);
        }
        catch (error) {
            console.log(error)
        }
    })
})