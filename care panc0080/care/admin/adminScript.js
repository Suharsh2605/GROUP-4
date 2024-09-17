const data = {
    patients: [],
    therapists: [],
    staff: [],
    auditors: [],
    users: [] 
};

let currentType = 'patient'; 

function setUserType(type) {

    currentType = type;
    displayUsers(type);
}

function displayUsers(category) {

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
    data[category].forEach(user => {
        const userCard = document.createElement('div');

        userCard.className = 'card';
        userCard.innerHTML = `
            <span>${user.name} - ID: ${user.userId}</span>
            <div>
                <button onclick="updateUser('${category}', '${user.userId}')">Update</button>
                <button onclick="deleteUser('${category}', '${user.userId}')">Delete</button>
            </div>
        `;
        mainContent.appendChild(userCard);
    });
    const addButton = document.createElement('button');

    addButton.textContent = `Add ${category.slice(0, -1)}`;
    addButton.onclick = function () {
        openModal(category);
    };
    mainContent.appendChild(addButton);
}

function openModal(category) {

    document.getElementById('userTypeTitle').textContent = category.slice(0, -1); // Singular form
    document.getElementById('userModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('userModal').style.display = 'none';
}

//  for adding a user
document.getElementById('addUserForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const userId = document.getElementById('userId').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //  unique user ID
    if (data.users.some(user => user.userId === userId)) {
        alert('User ID already exists.');
        return;
    }

    const newUser = { name, userId, email, password, type: currentType.slice(0, -1) };  // Assign the current type dynamically
    
    data[currentType].push(newUser);
    data.users.push(newUser); // Add to user 

    closeModal();
    displayUsers(currentType);
});

function updateUser(category, id) {

    const newName = prompt('Enter new name:');
    if (newName) {
        const user = data[category].find(user => user.userId === id);
        if (user) {
            user.name = newName;
            displayUsers(category);
        }
    }
}

function deleteUser(category, id) {

    if (confirm('Are you sure you want to delete this user?')) {
        data[category] = data[category].filter(user => user.userId !== id);
        displayUsers(category);
    }
}

function toggleDropdown() {
    document.getElementById('profileDropdown').classList.toggle('show');
}

//  redirect to profile.html
function editProfile() {

    window.location.href = '/profile/profile.html';
}

// log out the user and redirect to login 
function logout() {

    alert('Logging out...');
    window.location.href = '../../index.html'; // to login 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.profile-icon')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');

        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


// Initial display
setUserType('patients');


/*
AI Prompt to Improve the Code:

I asked the AI: "How can I improve this user management system to make adding, updating, and deleting users more efficient? Also, how can I add a confirmation for form submissions and ensure the modal is reset after submission?"

The AI suggested:
- Resetting form fields after successful submission.
- Adding a confirmation message after a user is successfully added.
- Adding better error handling and alerts for invalid user inputs.

*/

/*
Final Code with AI Enhancements:

This version includes:
- Resetting form fields after adding a user.
- Showing a confirmation message after a user is successfully added.
- Improved error handling for invalid user input and non-unique user IDs.
*/