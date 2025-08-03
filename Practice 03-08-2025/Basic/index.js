// post
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

            if (!fetchapi.ok) {
                throw new Error(`HTTP error! status: ${fetchapi.status}`);
            }

            const data = await fetchapi.json();
            console.log('User added successfully:', data);
            // $('#form-one')[0].reset();
        }
        catch (error) {
            console.log(error)
        }
    })
});


// get
$(document).ready(function () {
    $('#getid').on('click', async function () {
        let id = $('#id').val().trim();
        let output = $('#output');

        try {
            const fetchapi = await fetch(`http://localhost:3003/Users/${id}`);

            if (!fetchapi.ok) {
                throw new Error('User not found');
            }

            const user = await fetchapi.json();

            // Format and display nicely
            output.html(`
                <h4>User Details</h4>
                <ul>
                    <li><strong>First Name:</strong> ${user.fname}</li>
                    <li><strong>Last Name:</strong> ${user.lname}</li>
                    <li><strong>Gender:</strong> ${user.gender}</li>
                    <li><strong>Hobbies:</strong> ${user.hobby.join(', ')}</li>
                    <li><strong>Country:</strong> ${user.country}</li>
                </ul>
            `);
        } catch (error) {
            output.html(`<p style="color:red;">Error: ${error.message}</p>`);
            console.error(error);
        }
    });
});

// delete
$(document).ready(function () {
    $('#Delete').on('click', async function () {
        let id = $('#id').val().trim();
        let output = $('#output');

        try {
            const fetchapi = await fetch(`http://localhost:3003/Users/${id}`,{
                method : 'Delete',
            });

            output.html('<h3>Delete succesfully</h3>');
        }
        catch (error) {
            console.log(error);
        }
    })
})