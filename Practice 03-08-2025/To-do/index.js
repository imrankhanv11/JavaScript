// post
$(document).ready(function () {
    $('#myForm').on('submit', async function (e) {
        e.preventDefault();


        try {
            const task = $('#task').val();

            if (!task.trim()) {
                alert("Please enter a task.");
                return;
            }

            const response = await fetch('http://localhost:3004/Task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: task
                })
            });

            if (!response.ok) {
                throw new Error('Failed to save task');
            }

            $('#task').val('');
            console.log("Task added successfully");
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("Something went wrong. Check if your server is running.");
        }

    });
});

async function loadTasks() {
    try {
        const response = await fetch('http://localhost:3004/Task');
        const data = await response.json();

        let html = '';
        data.forEach(taskadd => {
            html += `
                <div>
                    <p>Task: ${taskadd.task}</p>
                    <button class="del" data-idd="${taskadd.id}">Remove</button>
                </div>
            `;
        });

        $('#content').html(html);


        // delete
        $('.del').on('click', async function (e) {
            e.preventDefault();
            const taskId = $(this).data('idd');

            try {
                await fetch(`http://localhost:3004/Task/${taskId}`, {
                    method: 'DELETE'
                });

            } catch (err) {
                console.error("Error deleting task:", err);
            }
        });

    } catch (error) {
        console.error("Error loading tasks:", error);
        $('#content').html('<p style="color:red;">Failed to load tasks.</p>');
    }
}

loadTasks();


