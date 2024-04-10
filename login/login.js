
//navigation bar
const RegisterBtn = document.getElementById('RegnavigateButton');
RegisterBtn.addEventListener('click', function () {
    window.location.href = '../register/register.html';
    // http://127.0.0.1:5500/mern/Day1/assignment/login/login.html?
});

//get input data from Users

document.getElementById("submitbtn").addEventListener("click", redirectToIndex);

function redirectToIndex() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        window.location.href = "../index.html?username=" + encodeURIComponent(username);
    } else {
        alert("Please enter a username.");
    }
}



let username;
let password;


function getValue() {
    // e.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log("UserName: " + username + " " + "Password: " + password);

    document.getElementById("form").submit();



    async function fetchUserData() {
        try {
            const res = await fetch("./userdata.json");
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    }

    async function login(username, password) {
        try {
            const data = await fetchUserData();
            const user = data.find((user) => user.name === username && user.password === password);
            if (user) {
                console.log("Login successful!", user);
                return user;
            } else {
                console.log(username)
                console.log(password)
                throw new Error("Invalid username or password");

            }
        } catch (error) {
            console.error("Login failed:", error.message);
            throw error;
        }
    }




    login(username, password)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            console.log(error)
        });
}