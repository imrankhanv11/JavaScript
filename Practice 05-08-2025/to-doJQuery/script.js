$('document').ready(function () {

    let url = 'http://localhost:3005/Task';

    $('#taskform').on('submit', async function (e) {
        e.preventDefault();

        let ToDo = $('#task').val();

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ToDo
                })
            });

            if (!response.ok) {
                throw new Error('Fetch not work');
            }

            alert('Task added succesfully');

        }
        catch (error) {
            console.log(error);
        }
    });

    async function showtask() {
        let output = $('#output');
        output.empty(); // Clear existing items

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Fetch failed');
            }

            const data = await response.json();

            data.forEach(element => {
                output.append(goodview(element));
            });
        } catch (error) {
            console.error(error);
        }
    }

    function goodview(data) {
        const div = $('<div>').addClass('taskdiv');

        const divText = $('<div>').addClass('tdiv').text(data.ToDo);

        const del = $('<button>')
            .text('Delete')
            .addClass('delBtn btn btn-primary')
            .attr('data-id', data.id);

        div.append(divText).append(del);
        return div;
    }
    
    showtask();

    // Delete button
    $('#output').on('click', '.delBtn', async function (e) {
        e.preventDefault();
        const id = $(this).attr('data-id');

        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Delete failed');
            }
        } catch (error) {
            console.error(error);
        }
    });



}); //---end-->