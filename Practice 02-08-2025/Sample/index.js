const apiUrl = "http://localhost:3001/users";

// POST - Create new user
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fname, lname })
  })
    .then(response => response.json())
    .then(data => {
      alert("User added successfully!");
      console.log(data);
      getUsers();
    });
});

// get 
function getUsers() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(user => {
        output += `Name: ${user.fname} ${user.lname}\n`;
      });
      document.getElementById("output").textContent = output;
    })
    .catch(error => {
      console.error("Error fetching users:", error);
    });
}

// PUT - Update user
function updateUser() {
  const userId = document.getElementById("userId").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  fetch(`${apiUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fname, lname })
  })
    .then(res => res.json())
    .then(data => {
      alert("User updated!");
      getUsers();
    });
}

// DELETE - Remove user
function deleteUser() {
  const userId = document.getElementById("userId").value;

  fetch(`${apiUrl}/${userId}`, {
    method: "DELETE"
  })
    .then(() => {
      alert("User deleted.");
      getUsers();
    });
}
