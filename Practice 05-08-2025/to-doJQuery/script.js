$('document').ready(function(){

    let url ='http://localhost:3005/Task';

    $('#taskform').on('submit', async function(e){
        e.preventDefault();

        let ToDo = $('#task').val();

        try{
            const response = await fetch(url,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    ToDo
                })
            });

            if(!response.ok){
                throw new Error('Fetch not work');
            }

            alert('Task added succesfully');
        }
        catch(error){
            console.log(error);
        }
    });

    // function showtask(){

    // }



}); //---end-->