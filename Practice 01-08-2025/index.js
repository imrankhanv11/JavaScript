document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName  = document.getElementById('lname').value;

    console.log(firstName);
    console.log(lastName);
    fetch('http://localhost:3000/users', {
        method : "POST",
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({firstName, lastName})
    })
    .then(ans => ans.json())
    .then(data => {
        console.log('user data', data);
        alert('user added');
    })
    .catch( err => console.error('Error :', err));
})