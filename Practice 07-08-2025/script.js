$('document').ready(function(){

    const Products = 'http://localhost:3001/Prouducts';
    const Prize = 'http://localhost:3001/Prize';

    $('#myForm').on('submit', async function(e){
        e.preventDefault();

        let productName = $('#pname').val();
        let discription = $('pdiscription').val();
        let cetegories =[];
        $('input[name="cat"]:checked').each(function(){
            cetegories.push($(this).val());
        })

        let prize = $('#prize').val();
        if(!Number(prize)){
            alert('check');
            return;
        }
        let quantity = $('#quantity').val();
        if(!Number(quantity)){
            alert('check');
            return;
        }

        try{
            const proResponse = await fetch(Products,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    productName, discription, cetegories
                })
            })

            const proData = await proResponse.json();

            const priResponse = await fetch(Prize, {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    id: proData.id, prize, quantity
                })
            })
        }
        catch(err){
            console.log(err);
        }
    })
});