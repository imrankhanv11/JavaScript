
// endpoints
const employees = 'http://localhost:3000/employees';
const department = 'http://localhost:3000/departments';

$(document).ready(function () {

    // fit in department
    async function dropdownbtn() {
        let dropdownDept = $('#departmentid-e');

        let departmentresponse = await fetch(department);
        let data = await departmentresponse.json();

        data.forEach(dept => {
            let option = $('<option>').text(dept.name).val(dept.id);
            dropdownDept.append(option);
        });
    }
    dropdownbtn();

    // add department 
    $('#departmentForm').on('submit', async function (e) {
        e.preventDefault();

        let name = $('#d-name').val();

        if (name.length <= 2) {
            alert("Name Can't be less then 3 char");
            return;
        }

        let code = $('#d-code').val();

        try {
            const departmentpost = await fetch(department, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, code
                })
            })

            if (!departmentpost.ok) {
                throw new Error("Con't fetch that part");
            }
        }
        catch (error) {
            console.log(`Error : ${error}`);
        }

    })

    // show departments
    async function showDepartment() {
        let output = $('#d-output');
        output.empty();


        try {
            const departmentresponse = await fetch(department);

            if (!departmentresponse.ok) {
                throw new Error("Can't fetch the details");
            }

            const departmentdata = await departmentresponse.json();

            if (departmentdata.length === 0) {
                let h2 = $('<h2>').text("No Deparment found");
                output.append(h2);
                return;
            }

            let table = $('<table>').addClass('table');
            let tr = $('<tr>');
            let tname = $('<th>').text('Department Name');
            let temail = $('<th>').text('Code');
            let taction = $('<th>').text('Action');


            tr.append(tname, temail, taction);

            table.append(tr);

            departmentdata.forEach(element => {
                table.append(formatdata(element));
            });

            output.append(table);
        }
        catch (err) {
            console.log(`Error : ${err}`);
        }
    }

    showDepartment();

    // formatting the data
    function formatdata(data) {
        let tr = $('<tr>');
        let id;

        for (let key in data) {

            if (key === 'id') {
                id = data[key];
                continue
            }
            let td = $('<td>');
            let value = data[key];
            td.append(value);
            tr.append(td);
        }
        let delebtn = $('<button>')
            .addClass('btn btn-danger delbtn-d')
            .text('Delete')
            .attr('data-id', id);

        let upbtn = $('<button>')
            .addClass('btn btn-primary upbtn-d')
            .text('Edit')
            .attr('data-id', id);

        tr.append(delebtn).append(upbtn);
        return tr;
    }


    // delete
    $('#d-output').on('click', '.delbtn-d', async function (e) {
        let id = $(this).attr('data-id');

        try {
            const emplyeeresponsce = await fetch(employees);
            const data = await emplyeeresponsce.json();


            // Perevent deletion
            data.forEach(empdata => {
                if (empdata.departmentId === id) {
                    alert("Can't delete this department beacause it have employee");
                    return;
                }
            });


            await fetch(`${department}/${id}`, {
                method: 'DELETE'
            })
        }
        catch (error) {
            console.log(`Error : ${error}`);
        }

    })

    let departmentUpId;
    // edit
    $('#d-output').on('click', '.upbtn-d', async function (e) {
        e.preventDefault();

        let name = $('#d-name');
        let code = $('#d-code');

        departmentUpId = $(this).attr('data-id');
        console.log(departmentUpId);

        // hide
        $('#submit-d').hide();
        $('#Update-btn').show();

        try {
            const upresponse = await fetch(`${department}/${departmentUpId}`);

            const data = await upresponse.json();

            name.val(data.name);
            code.val(data.code);

        }
        catch (err) {
            console.log(err);
        }
    })

    // update
    $('#Update-btn').on('click', async function (e) {
        e.preventDefault();


        $('#submit-d').show();
        $('#Update-btn').hide();

        let name = $('#d-name').val();

        if (name.length <= 2) {
            alert("Name Can't be less then 3 char");
            return;
        }

        let code = $('#d-code').val();

        try {
            const departmentpost = await fetch(`${department}/${departmentUpId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, code
                })
            })

            if (!departmentpost.ok) {
                throw new Error("Con't fetch that part");
            }
        }
        catch (error) {
            console.log(`Error : ${error}`);
        }
    })

    // ===============EMPLOYEE=====================
    $('#employeeForm').on('submit', async function (e) {
        e.preventDefault();

        let fullName = $('#fullname-e').val();
        if (fullName.length <= 2) {
            alert("Full name Can't be less then 2 char");
            return;
        }
        let email = $('#email-e').val();

        if (!isValidEmail(email)) {
            alert('Enter the correct EmailId');
            return;
        }

        let departmentId = $('#departmentid-e').val();
        let joiningDate = $('#joindate-e').val();
        let salary = $('#salary-e').val();
        let salarycheck = Number(salary);
        if (isNaN(salarycheck) && salarycheck > 0) {
            alert('Please Enter the Valid Number');
        }

        try {
            await fetch(employees, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName, email, departmentId, joiningDate, salary
                })
            })
        }
        catch (err) {
            console.log(err);
        }
    });

    // new employee btn
    $('#addNewEmp').on('click', function (e) {
        e.preventDefault();

        window.location.href = "AddEdit.html";
    });


    // display in dash board
    async function displayDashBoard() {
        let output = $('#output-de');
        output.empty();

        try {
            const [emplyeeresponsce, departmentresponse] = await Promise.all([
                fetch(employees), fetch(department)
            ]);

            const [emplyeedata, departmentdata] = [
                await emplyeeresponsce.json(), await departmentresponse.json()
            ]

            if (emplyeedata.length === 0) {
                let h2 = $('<h2>').text("No Employee found");
                output.append(h2);
                return;
            }
            let table = $('<table>').attr('id', 'table-ouput').addClass('table');
            let tr = $('<tr>');
            let tname = $('<th>').text('Full Name');
            let temail = $('<th>').text('Email');
            let tjoin = $('<th>').text('Joining');
            let tsal = $('<th>').text('Salary');
            let tdept = $('<th>').text('Department');
            let taction = $('<th>').text('Action');

            tr.append(tname, temail, tjoin, tsal, tdept, taction);

            table.append(tr);
            emplyeedata.forEach(empdata => {
                const deptdata = departmentdata.find(d => d.id === empdata.departmentId);

                let iddata = empdata.id;
                let fulldata = {
                    ...empdata, ...deptdata
                };

                table.append(dispalydasboradformat(fulldata, iddata));

            });
            output.append(table);
        }
        catch (error) {
            console.log(error);
        }

    }

    displayDashBoard();

    let empUpId;
    // display format
    function dispalydasboradformat(data, id) {
        let tr = $('<tr>');

        empUpId = id;
        for (let key in data) {

            if (key === 'departmentId' || key === 'code' || key === 'id') {
                continue;
            }
            let td = $('<td>');
            let value = data[key];
            td.append(value);
            tr.append(td);
        }
        let delebtn = $('<button>')
            .addClass('btn btn-danger delbtn-e')
            .text('Delete')
            .attr('data-id', id);

        let upbtn = $('<button>')
            .addClass('btn btn-primary upbtn-e')
            .text('Edit')
            .attr('data-id', id);

        tr.append(delebtn).append(upbtn);
        return tr;
    }

    // delete
    $('#output-de').on('click', '.delbtn-e', async function (e) {
        let id = $(this).attr('data-id');

        try {
            await fetch(`${employees}/${id}`, {
                method: 'DELETE'
            })
        }
        catch (error) {
            console.log(error);
        }
    });

    // edit btn
    $('#output-de').on('click', '.upbtn-e', async function (e) {
        e.preventDefault();

        const id = $(this).attr('data-id');
        console.log(id);

        try {
            const employeedata = await fetch(`${employees}/${id}`);
            const data = await employeedata.json();

            localStorage.setItem('editid', id);
            localStorage.setItem('details', JSON.stringify({
                data
            }))

            window.location.href = "AddEdit.html";
        }
        catch (error) {
            console.log(error);
        }
    })

    function checkupdate() {
        let value = localStorage.getItem('editid');
        if (value) {
            $('#btn-apply').show();
            $('#btn-submit').hide();

        }
    }

    checkupdate();

    // To put in form
    $('#btn-apply').on('click', function (e) {
        let check = localStorage.getItem('details');
        let value = JSON.parse(check);
        console.log(value);

        $('#fullname-e').val(value.fullName);
        $('#email-e').val(value.email);
        $('#departmentid-e').val(value.departmentId);
        $('#joindate-e').val(value.joiningDate);
        $('#salary-e').val(value.salary);

        $(this).hide();

        $('#btn-update').show();
    })

    // email validation
    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    // Acutual update
    $('#btn-update').on('click', async function (e) {
        e.preventDefault();

        let updid = localStorage.getItem('editid');
        $(this).hide();
        $('#btn-submit').show();
        let fullName = $('#fullname-e').val();
        if (fullName.length <= 2) {
            alert("Full name Can't be less then 2 char");
            return;
        }
        let email = $('#email-e').val();
        if (!isValidEmail(email)) {
            alert('Enter the correct EmailId');
            return;
        }

        let departmentId = $('#departmentid-e').val();
        let joiningDate = $('#joindate-e').val();
        let salary = $('#salary-e').val();
        let salarycheck = Number(salary);
        if (isNaN(salarycheck) && salarycheck > 0) {
            alert('Please Enter the Valid Number');
        }

        try {
            await fetch(`${employees}/${updid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName, email, departmentId, joiningDate, salary
                })
            })

            localStorage.clear();

            window.location.href = "Dashboard.html";
        }
        catch (err) {
            console.log(err);
        }

    })
});