$('document').ready(function () {

    const Products = 'http://localhost:3001/Prouducts';
    const Prize = 'http://localhost:3001/Prize';

    const output = $('#output');
    $('#myForm').on('submit', async function (e) {
        e.preventDefault();

        let productName = $('#pname').val();
        let discription = $('#pdiscription').val();
        let cetegories = [];
        $('input[name="cat"]:checked').each(function () {
            cetegories.push($(this).val());
        })

        let prize = $('#prize').val();
        if (!Number(prize)) {
            alert('check');
            return;
        }
        let quantity = $('#quantity').val();
        if (!Number(quantity)) {
            alert('check');
            return;
        }

        try {
            const proResponse = await fetch(Products, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName, discription, cetegories
                })
            })

            const proData = await proResponse.json();

            const priResponse = await fetch(Prize, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: proData.id, prize, quantity
                })
            })
        }
        catch (err) {
            console.log(err);
        }
    });

    // get 
    async function displayProducts() {

        const [prodata, pridata] = await fetchforall();

        prodata.forEach(proDatafilter => {
            const pridatafilter = pridata.find(data => data.id === proDatafilter.id);

            let fullData = {
                ...proDatafilter, ...pridatafilter
            }

            output.append(formatDisplay(fullData));

        });
    }

    displayProducts();

    async function fetchforall() {
        try {
            const [proResponse1, priResponse1] = await Promise.all([
                fetch(Products), fetch(Prize)
            ]);

            if (!proResponse1.ok || !priResponse1.ok) {
                throw new Error('Fetch not completed');
            }

            const [pdata, prdata] = [await proResponse1.json(), await priResponse1.json()]

            return [pdata, prdata];
        }
        catch (err) {
            console.log(err);
        }
    };

    function formatDisplay(data) {
        let maindiv = $('<div>').addClass('maindiv').data('id', data.id);
        let ul = $('<ul>');

        let id;
        for (let key in data) {

            if (key === 'id') {
                id = data[key];
                continue;
            }
            let li = $('<li>');
            let strong = $('<strong>').text(`${cap(key)} : `);
            let value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];

            li.append(strong).append(value);
            ul.append(li);
        }
        let btn = $('<div>');
        let delbtn = $('<button>').text('Delete').addClass('btn btn-danger delbtn').data('id', id);
        let editbtn = $('<button>').text('Edit').addClass('btn btn-secondary editbtn').data('id', id);

        btn.append(delbtn).append(editbtn);
        maindiv.append(ul).append(btn);

        return maindiv;
    }

    function cap(key) {
        return key.charAt(0).toUpperCase() + key.slice(1);
    }

    // searching via product name
    $('#proSearch').on('input', async function (e) {
        e.preventDefault();

        const search = $('#proSearch').val();

        output.empty();

        try {
            const [prodata, pridata] = await fetchforall();


            prodata.forEach(proDatafilter => {
                const pridatafilter = pridata.find(data => data.id === proDatafilter.id);

                let fullData = {
                    ...proDatafilter, ...pridatafilter
                }

                if (fullData.productName.toLowerCase().startsWith(search)) {
                    output.append(formatDisplay(fullData));
                }

            });
        }
        catch (err) {
            console.log(err)
        }

    })


    // edit
    $('#output').on('click', '.editbtn', async function (e) {
        e.preventDefault();

        let id = $(this).data('id');
        upid = id;

        $(this).hide();
        $('#subtn').hide();
        $('#upbtn').show();

        try {
            const [proResponse, priResponse] = await Promise.all([
                fetch(`${Products}/${id}`), fetch(`${Prize}/${id}`)
            ])

            const [prodata, pridata] = [await proResponse.json(), await priResponse.json()];

            const fulldata = {
                ...prodata, ...pridata
            }

            sessionStorage.setItem('edit', 'true');
            sessionStorage.setItem('data', JSON.stringify(fulldata));

            $('#pname').val(prodata.productName);
            $('#pdiscription').val(prodata.discription);

            let cat = prodata.cetegories;

            $('input[name="cat"]').each(function () {
                if (cat.includes($(this).val())) {
                    $(this).prop('checked', true);
                } else {
                    $(this).prop('checked', false);
                }
            });


            $('#prize').val(pridata.prize);

            $('#quantity').val(pridata.quantity);
        }
        catch (err) {
            console.log(err);
        }
    })

    // update
    $('#upbtn').on('click', async function (e) {
        e.preventDefault();


        // hide and show
        $(this).hide();
        $('#subtn').show();



        let productName = $('#pname').val();
        let discription = $('#pdiscription').val();
        let cetegories = [];
        $('input[name="cat"]:checked').each(function () {
            cetegories.push($(this).val());
        })

        let prize = $('#prize').val();
        if (!Number(prize)) {
            alert('check');
            return;
        }
        let quantity = $('#quantity').val();
        if (!Number(quantity)) {
            alert('check');
            return;
        }

        try {
            await fetch(`${Products}/${upid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName, discription, cetegories
                })
            })

            await fetch(`${Prize}/${upid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prize, quantity
                })

            })

            sessionStorage.clear();
        }
        catch (err) {
            console.log(err);
        }
    })

    // delete
    $('#output').on('click', '.delbtn', async function(e){
        e.preventDefault();

        let id = $(this).data('id');
        
        try{
            await fetch(`${Products}/${id}`,{
                method : 'DELETE'
            })

            await fetch(`${Prize}/${id}`,{
                method : 'DELETE'
            })
        }
        catch(err){
            console.log(err)
        }
    })

});
let upid;
$('document').ready(function () {

    let check = sessionStorage.getItem('edit');
    if (check) {
        $('#subtn').hide();
        $('#upbtn').show();
        let prodata = JSON.parse(sessionStorage.getItem('data'));
        $('#pname').val(prodata.productName);
        $('#pdiscription').val(prodata.discription);
        $('#prize').val(prodata.prize);

        let cat = prodata.cetegories;

        $('input[name="cat"]').each(function () {
            if (cat.includes($(this).val())) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
        $('#quantity').val(prodata.quantity);

        upid = prodata.id;
    }

});