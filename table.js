//Home Work



//navigate pages

const LoginBtn = document.getElementById('LognavigateButton');
const RegisterBtn = document.getElementById('RegnavigateButton');

LoginBtn.addEventListener('click', function () {
    window.location.href = './login/login.html';
    // http://127.0.0.1:5500/mern/Day1/assignment/login/login.html?
});
RegisterBtn.addEventListener('click', function () {
    window.location.href = './register/register.html';
    // http://127.0.0.1:5500/mern/Day1/assignment/login/login.html?
});

// Category subCategory Duration Task

const WorkDetails = [
    {
        id: 1,
        Category: "Work",
        SubCategory: "Meeting",
        Duration: "00:40:21",
        Task: "Client Meeting"
    },
    {
        id: 2,
        Category: "Personal Space",
        SubCategory: "-",
        Duration: "00:16:37",
        Task: "-"
    },
    {
        id: 3,
        Category: "Work",
        SubCategory: "Project",
        Duration: "02:40:21",
        Task: "Home nav module"
    },
    {
        id: 4,
        Category: "Personal Space",
        SubCategory: "-",
        Duration: "00:46:37",
        Task: "-"
    },
    {
        id: 5,
        Category: "Work",
        SubCategory: "Project",
        Duration: "01:40:21",
        Task: "Documentation"
    },
    {
        id: 6,
        Category: "Work",
        SubCategory: "Meeting",
        Duration: "01:40:21",
        Task: "Daily Scrum"
    },
]


const table = document.querySelector('tbody')

WorkDetails.map((data) => {
    table.innerHTML = table.innerHTML + `<tr>
                <td >${data.Category}</td>
                <td>${data.SubCategory}</td>
                <td>${data.Duration}</td>
                <td>${data.Task}</td>
                <td><button type="button" class="btn btn-primary" onClick="Edit(this)">Edit</button>
                        <button type="button" id="delete" onClick="Delete(this)" class="btn btn-danger">Delete</button></td>
            </tr>`

})





//Filter Function
function Filter() {
    const selectedCategory = document.getElementById('select').value;

    // Filter the data based on the selected category
    const filteredData = selectedCategory ? WorkDetails.filter(data => data.Category === selectedCategory) : WorkDetails;

    // Create a string to hold the HTML for table rows
    let rows = '';
    filteredData.forEach(data => {
        rows += `<tr>
            <td>${data.Category}</td>
            <td>${data.SubCategory}</td>
            <td>${data.Duration}</td>
            <td>${data.Task}</td>
        </tr>`;
    });

    // Set the innerHTML of the table with the constructed rows
    table.innerHTML = rows;
}
document.getElementById('filter').addEventListener("click", Filter);








// submit.addEventListener("click", Submit);





function Submit(event) {
    event.preventDefault();
    let Category = document.getElementById('select').value;
    let subCategory = document.getElementById('Sub-Category').value;
    let Duration = document.getElementById('Duration').value;
    let Task = document.getElementById('Task').value;
    if (subCategory === '' || Duration === '' || Task === '') {
        alert("Please Enter the Required Filed")
    }
    else {
        table.innerHTML = table.innerHTML + `<tr>
                <td >${Category}</td>
                <td>${subCategory}</td>
                <td>${Duration}</td>
                <td>${Task}</td>
            </tr>`
    }
}

let h = document.querySelector('.hour');
let m = document.querySelector('.minute');
var s = document.querySelector('.second');
let Second = 0;
let Min = 0;
let Hour = 0;
let isrunning = false;
let s1, s2, s3;
document.getElementById('start').addEventListener("click", Start);
document.getElementById('stop').addEventListener("click", Stop);
document.getElementById('reset').addEventListener("click", Reset);
// document.getElementById('print').addEventListener("click", Print);
let display = document.getElementById('stoper');
// document.getElementById('print').disabled = true;
function Start() {
    if (!isrunning) {
        document.getElementById('start').disabled = true;
        document.getElementById('print').disabled = false;
        s1 = setInterval(mySecond, 1000);
        s2 = setInterval(myMinute, 60000);
        s3 = setInterval(myHour, 3600000);
        function mySecond() {
            if (Second < 10) {
                s.innerHTML = ":0" + `${Second}`;
            }
            else
                s.innerHTML = ":" + `${Second}`;
            if (Second != 60)
                Second++;
            else
                Second = 0;
        }
        function myMinute() {
            if (Min < 10) {
                m.innerHTML = "0" + `${Min}`;
            }
            else
                m.innerHTML = ":" + `${Min}`;
            if (Min != 59)
                Min++;
            else
                Min = 0;
        }
        function myHour() {
            if (Hour < 10)
                h.innerHTML = "0" + `${Hour}`;
            else
                h.innerHTML = "" + `${Hour}`;
            if (Hour != 23)
                Hour++;
            else
                Hour = 0;
        }
    }
}

function Stop() {
    if (!isrunning) {
        document.getElementById('start').disabled = false;
        clearInterval(s1);
        clearInterval(s2);
        clearInterval(s3);
    }
    document.getElementById('Duration').value = `${Hour.toString().padStart(2, "0")}:${Min.toString().padStart(2, "0")}:${Second.toString().padStart(2, "0")}`
}
function Reset() {
    if (!isrunning) {
        Second = "0";
        Min = "00";
        Hour = "00";
    }
}
function Print() {
    display.innerHTML = display.innerHTML + `<p>${Hour.toString().padStart(2, "0")}:${Min.toString().padStart(2, "0")}:${Second.toString().padStart(2, "0")}</p`
}




//Delete and Edit Function


function Delete(button) {
    let row = button.parentNode.parentNode;
    table.deleteRow(row);
}


// function Edit(button) {
//     togglePopup()
//     // Get the parent row of the clicked button
//     let row = button.parentNode.parentNode;

//     // Get the cells within the row
//     let category = row.cells[0];
//     let subCategory = row.cells[1];
//     let Duration = row.cells[2];
//     let task = row.cells[3];

//     // Prompt the user to enter updated values
//     let catinput = document.getElementById('EditCategory').value;
//     let SubInput = document.getElementById('EditSub-Category').value;
//     let durationinput = document.getElementById('EditDuration').value;
//     let taskInput = document.getElementById('EditTask').value;

//     // Update the cell contents with the new values
//     category.innerHTML = catinput;
//     subCategory.innerHTML = SubInput;
//     Duration.innerHTML = durationinput;
//     task.innerHTML = taskInput;


//     console.log(SubInput)


// }

let category;
let subCategory;
let duration;
let Task;
let catInput;
let subcatInput;
let durationInput;
let taskInput;

function Edit(button) {

    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode;

    // Get the cells within the row 
    category = row.cells[0];
    subCategory = row.cells[1];
    duration = row.cells[2];
    Task = row.cells[3];
    console.log(category)



    togglePopup()
    catInput = document.getElementById("EditCategory").value;
    subcatInput = document.getElementById("EditSub-Category").value;
    durationInput = document.getElementById("EditDuration").value;
    taskInput = document.getElementById("EditTask").value;

    category.innerHTML = catInput;
    subCategory.innerHTML = subcatInput;
    duration.innerHTML = durationInput;
    Task.innerHTML = taskInput;
}


// document.getElementById("editbtn").addEventListener("click", EditSubmit);

// function EditSubmit() {
//     category.innerHTML = catInput;
//     subCategory.innerHTML = subcatInput;
//     duration.innerHTML = durationInput;
//     Task.innerHTML = taskInput;
//     console.log(catInput)
// }






function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}














var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

// Display username in h1
if (username) {
    document.getElementById("usernameDisplay").innerHTML = "Welcome Back, " + username;
}














// var tableBody = document.getElementById("studentTableBody");

// // Loop through Students array to populate the table
// for (var i = 0; i < WorkDetails.length; i++) {
//     var row = document.createElement("tr");

//     // Loop through properties of each student
//     for (var key in WorkDetails[i]) {
//         var cell = document.createElement("td");
//         cell.textContent = WorkDetails[i][key];
//         row.appendChild(cell);
//     }

//     tableBody.appendChild(row);
// }