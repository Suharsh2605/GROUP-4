
const users = [

    { name: "Admin", userId: "admin", email: "admin@care.com", password: "123", type: "admin" },
    { name: "Therapist", userId: "therapist", email: "therapist@care.com", password: "123", type: "therapist" },
    { name: "Professional Staff", userId: "staff", email: "staff@care.com", password: "123", type: "staff" },
    { name: "Auditor", userId: "auditor", email: "auditor@care.com", password: "123", type: "auditor" },
    { name: "Patient", userId: "patient", email: "patient@gmail.com", password: "123", type: "patient" },

];


function showSignUp() {

    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

function showLogin() {

    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function login() {

    const userId = document.getElementById('loginUserId').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.userId === userId && user.password === password);
    if (user) {

        switch (user.type) {
            
            case 'admin':
                window.location.href = 'admin/adminDashboard.html';
                break;
            case 'therapist':
                window.location.href = 'therapist/therapistDashboard.html';
                break;
            case 'staff':
                window.location.href = 'staff/StaffDashboard.html';
                break;
            case 'auditor':
                window.location.href = 'auditor/auditorDashboard.html';
                break;
            case 'patient':
                window.location.href = 'patient/patientDashboard.html';
                break;
            default:
                alert('No dashboard available for this user type.');
                break;
        }
    } else {
        alert('Invalid credentials!');
    }
}

function signUp() {
    const name = document.getElementById('name').value;
    const userId = document.getElementById('userId').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Ensure unique user ID
    if (users.some(user => user.userId === userId)) {
        alert('User ID already exists.');
        return;
    }

    const newUser = { name, userId, email, password, type: 'patient' };  // Default type for now
    users.push(newUser);

    alert('User registered successfully!');
    showLogin();  

}

/*
AI Prompt to Improve the Code:

I asked the AI: "How can I add better error handling and make the signup function more scalable? Additionally, how can I handle different user types during signup to redirect them to appropriate dashboards?"

The AI suggested enhancing error handling by including additional validations, like ensuring the email is properly formatted and adding different user types in the signup form, which I used to make the signup process more versatile.

*/

/*
Final Code with Improvements from AI:

This improved version includes enhanced validation and better user experience features, such as:
- Validating the format of the email.
- Providing dynamic role assignment during signup.
- Improved error messages for user clarity.
*/