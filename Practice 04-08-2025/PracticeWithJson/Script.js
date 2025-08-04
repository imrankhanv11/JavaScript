
let user = 'http://localhost:3000/User';
let details = 'http://localhost:3000/UserInformation';

// post
$('document').ready(function () {

    $('#submitform').on('submit', async function (e) {
        e.preventDefault();

        let FirstName = $('#fname').val();
        let LastName = $('#lname').val();
        let Email = $('#email').val();
        let Picture = $('#file').val();

        let hobby = [];
        $('input[name="hobby"]:checked').each(function () {
            hobby.push($(this).val());
        });

        let gender = $('input[name="gender"]:checked').val();

        try {
            const response = await fetch(user, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    FirstName, LastName, Email, Picture
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }

            const responsedata = await response.json();

            const detailsresponse = await fetch(details, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: responsedata.id, hobby, gender
                })
            });

            if (!detailsresponse.ok) {
                throw new Error('Failed to fetch details');
            }

            alert('User and details saved');
        }
        catch (error) {
            console.log(error);
            alert('error :' + error.message);
        }

    });

});

// get with id
$('document').ready(function () {

    $('#search').on('click', async function (e) {
        e.preventDefault();

        let searchid = $('#searchid').val();
        let output = $('#output');
        output.empty();

        if (searchid.trim().length === 0) {
            alert('Plese enter id');
            return;
        }

        try {
            const [uservalue, detailsvalue] = await Promise.all([
                fetch(`${user}/${searchid}`),
                fetch(`${details}/${searchid}`)
            ]);

            if (!uservalue.ok || !detailsvalue.ok) {
                throw new Error('Failed of fetch');
            }

            const userdata = await uservalue.json();
            const detailsdata = await detailsvalue.json();

            const fulldata = {
                ...userdata, ...detailsdata
            }

            let heading = $('<h2></h2>').text("your information");

            output.append(heading);


            output.append(fixstyle(fulldata));
        }
        catch (error) {
            console.log(error);
        }
    });
});

function fixstyle(data) {

    const ul = $('<ul></ul>');

    for (let key in data) {
        const li = $('<li></li>');
        const strong = $('<strong></strong>').text(`${key}: `);

        const value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];

        li.append(strong).append(value);  
        ul.append(li);
    }

    return ul;
}

// get all
$(document).ready(function () {
    $('#getall').on('click', async function (e) {
        e.preventDefault();

        let output = $('#fulldataoutput');
        output.empty();

        try {
            const [userResponse, detailsResponse] = await Promise.all([
                fetch(user),
                fetch(details)
            ]);

            if (!userResponse.ok || !detailsResponse.ok) {
                throw new Error('Fetch failed');
            }

            const userdata = await userResponse.json();
            const detaildata = await detailsResponse.json();

            const heading = $('<h4>All Data</h4>');
            output.append(heading);

            userdata.forEach(userItem => {
                const detailItem = detaildata.find(d => d.id === userItem.id);
                const merged = { ...userItem, ...detailItem };

                const ul = $('<ul style="border:1px solid #ccc; padding:10px; margin-bottom:10px;"></ul>');

                for (let key in merged) {
                    const value = Array.isArray(merged[key]) ? merged[key].join(', ') : merged[key];
                    ul.append(`<li><strong>${capitalize(key)}:</strong> ${value}</li>`);
                }

                output.append(ul);
            });

        } catch (error) {
            output.html(`<p style="color:red;">${error.message}</p>`);
            console.error(error);
        }

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    });
});


// get all but user only
$('document').ready(function () {
    $('#getoneuser').on('click', async function (e) {
        e.preventDefault();

        let output = $('#getoneoutput');
        output.empty();

        try {
            const response = await fetch(user);

            if (!response.ok) {
                throw new Error('Fetch is failled');
            }
            const data = await response.json();

            let h1 = $('<h2></h2>').text('User Detials only');
            output.append(h1);
            data.forEach(element => {
                output.append(structure(element));
            });


        }
        catch (error) {
            console.log(error);
        }
    });
});

// fucntion to arrange
function structure(data) {
    
    let ul = $('<ul></ul>');
    for(let key in data){
        let li = $('<li></li>');
        let strong = $('<strong></strong>').text(`${key} : `);

        let value = Array.isArray(data[key]) ? data[key].join(',') : data[key];

        li.append(strong).append(value);
        ul.append(li);
    }

    return ul;
}


// delete
$('document').ready(function (){
    $('#delete').on('click', async function(e){
        e.preventDefault();

        let id = $('#del').val();

        try{
            const [userResponse, detailsResponse] = await Promise.all([
                fetch(`${user}/${id}`, {
                    method : 'DELETE'
                }),
                fetch(`${details}/${id}`,{
                    method :'DELETE'
                })
            ]);

            if(!userResponse.ok || !detailsResponse.ok){
                throw new Error('Fetched Fail');
            }

            alert('user deleted succesfully');

            
        }
        catch(error){
            console.log(error);
        }
    });
});