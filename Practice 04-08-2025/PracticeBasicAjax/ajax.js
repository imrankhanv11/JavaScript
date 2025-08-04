$('document').ready(function () {

    // post
    $('#myform').on('submit', function (e) {
        e.preventDefault();

        let fname = $('#fname').val();
        let lname = $('#lname').val();

        try {
            $.ajax({
                url: 'http://localhost:3000/User',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ fname, lname }),
                success: function (data) {
                    console.log(data);
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }

            })
        }
        catch (err) {
            console.log(error);
        }

    })

    // get
    // $('#getvalue').on('click', function (e) {
    //     e.preventDefault();

    //     let output = $('#output');
    //     output.empty();
    //     try {
    //         $.ajax({
    //             url: 'http://localhost:3000/User',
    //             method: 'GET',
    //             success: function (data) {
    //                 data.forEach(element => {
    //                     output.append(structure(element));
    //                 });
    //             },
    //             error: function (error) {
    //                 console.log(error)
    //             }
    //         })
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // })

});

function structure(data) {
    let ul = $('<ul></ul>');
    ul.css('border', 'solid 2px blue');
    ul.css('width', '150px').css('margin-left', '20px');
    for (let key in data) {
        let li = $('<li></li>');
        let strong = $('<strong></strong>');
        strong.append(`${key} : `);
        let value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
        li.css('list-style-type', 'none');

        li.append(strong).append(value);
        ul.append(li);
    }
    return ul;
}

let url = 'http://localhost:3000/User';
// delete
$('#delbtn').on('click', function (e) {
    e.preventDefault();

    let delId = $('#del').val();
    try {
        $.ajax({
            url: `${url}/${delId}`,
            method: 'DELETE',
            success: function (data) {
                console.log('deleted succesfully');
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
    catch (error) {
        console.log(error);
    }
})


$('#patchbtn').on('click', async function (e) {
    e.preventDefault();

    let id = $('#patch').val();
    let text = $('#patch-text').val();

    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: text
            })
        }
        );
        console.log('ok');

    }
    catch (error) {
        console.log(error)
    }
})

function start() {
    let output = $('#output');
    output.empty();
    try {
        $.ajax({
            url: 'http://localhost:3000/User',
            method: 'GET',
            success: function (data) {
                data.forEach(element => {
                    output.append(structure(element));
                });
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}

start();