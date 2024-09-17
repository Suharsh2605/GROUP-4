function toggleDropdown() {

    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


window.onclick = function(event) {

    if (!event.target.matches('.profile-icon')) {
        const dropdown = document.getElementById('profileDropdown');
       
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};

function logout() {

    window.location.href = '/../index.html';
}

const patients = Array.from({ length: 100 }, (_, i) => ({
    
    id: i + 1,
    name: `Patient ${i + 1}`,
    age: Math.floor(Math.random() * 40) + 20,
    lastActivity: `Last activity for Patient ${i + 1}`,
    therapies: Math.floor(Math.random() * 15) + 1,
    journalEntry: `Journal entry for Patient ${i + 1}.`,
    contactNumber: `+123456789${i}`,
    email: `patient${i + 1}@example.com`,
    mood: ['Happy', 'Sad', 'Neutral'][Math.floor(Math.random() * 3)]

}));

let currentPage = 1;
const patientsPerPage = 10; 
document.addEventListener('DOMContentLoaded', () => {


    document.getElementById('nav-dashboard').addEventListener('click', () => loadSection('dashboard-section'));
    document.getElementById('nav-patients').addEventListener('click', () => loadSection('patients-section'));
    
    document.getElementById('nav-groups').addEventListener('click', () => loadSection('groups-section'));
    document.getElementById('nav-schedule').addEventListener('click', () => loadSection('schedule-section'));
    document.getElementById('nav-reports').addEventListener('click', () => loadSection('reports-section'));
    document.getElementById('nav-settings').addEventListener('click', () => loadSection('settings-section'));


    loadSection('dashboard-section');
});


function loadSection(sectionId) {

    const sections = document.querySelectorAll('section.content');
    sections.forEach(section => {

        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');


    if (sectionId === 'dashboard-section') {
        loadDashboard();
    } else if (sectionId === 'patients-section') {
        loadPatientList();
    }
}

/* 
AI Prompt to Improve the Code:

I asked the AI: "How can I implement better user interaction features in this therapist dashboard? Specifically, I want to add more interactive elements like pop-ups for viewing patient details and pagination controls."

The AI suggested adding a pop-up functionality for viewing patient details, a contact option, and improving the pagination system for better navigation.
*/

/* 
Final Code with AI Enhancements:

The improved version now includes pop-up functionality for viewing patient details, contacting patients, and replying to journal entries. Pagination has also been enhanced for better navigation through patient lists.
*/

function loadDashboard() {
    const dashboardContent = document.getElementById('dashboard-section');
    dashboardContent.innerHTML = `<h2>Dashboard</h2>`;
    
    const startIndex = (currentPage - 1) * patientsPerPage;
    const endIndex = Math.min(startIndex + patientsPerPage, patients.length);
    const patientsToDisplay = patients.slice(startIndex, endIndex);

    patientsToDisplay.forEach(patient => {
        const patientInfo = document.createElement('div');
        patientInfo.className = 'patient-info';
        patientInfo.innerHTML = `
            <p><strong>${patient.name}</strong> (${patient.age} years old)</p>
            <button class="view-dashboard" onclick="viewPatientDashboard(${patient.id})">View Dashboard</button>
            <button class="contact-patient" onclick="contactPatient(${patient.id})">Contact Patient</button>
            <button class="reply-journal" onclick="replyToJournal(${patient.id})">Reply to Journal Entry</button>
        `;
        dashboardContent.appendChild(patientInfo);
    });

    renderPaginationControls(dashboardContent);
}



function viewPatientDashboard(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;
    openPopup(`
        <h2>Dashboard for ${patient.name}</h2>
        <p><strong>Age:</strong> ${patient.age}</p>
        <p><strong>Last Activity:</strong> ${patient.lastActivity}</p>
        <p><strong>Number of Therapies:</strong> ${patient.therapies}</p>
        <p><strong>Journal Entry:</strong> ${patient.journalEntry}</p>
    `);
}

// For contact a patient with a popup showing contact details
function contactPatient(patientId) {
    const patient = patients.find(p => p.id === patientId);

    if (!patient) return;
    openPopup(`
        <h2>Contact ${patient.name}</h2>
        <p><strong>Contact Number:</strong> ${patient.contactNumber}</p>
        <p><strong>Email:</strong> ${patient.email}</p>
        <textarea placeholder="Write your message here..."></textarea>
        <button>Send</button>
    `);
}

// For to a patient's journal entry with their mood
function replyToJournal(patientId) {

    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;
    openPopup(`
        <h2>Reply to ${patient.name}'s Journal Entry</h2>
        <p><strong>Mood:</strong> ${patient.mood}</p>
        <p><strong>Journal Entry:</strong> ${patient.journalEntry}</p>
        <textarea placeholder="Write your anonymous reply here..."></textarea>
        <button>Reply</button>
    `);
}

// Function to open a popup with the provided content
function openPopup(content) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `<span class="close-btn" onclick="closePopup()">&times;</span>${content}`;
    popupOverlay.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}


function loadPatientList() {

    const patientsContent = document.getElementById('patients-section');
    patientsContent.innerHTML = `
        <h2>Total Patients: ${patients.length}</h2>
        <input type="text" id="searchInput" placeholder="Search by name" oninput="filterPatientsByName()">
        <select id="ageGroupDropdown" onchange="sortPatientsByAgeGroup()">
            <option value="">Sort by Age Group</option>
            <option value="0-20">0-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
        </select>
        <select id="therapyDropdown" onchange="sortPatientsByTherapies()">
            <option value="">Sort by Therapies</option>
            <option value="high">High</option>
            <option value="low">Low</option>
        </select>
        <div id="patientListContainer"></div>
    `;

    const startIndex = (currentPage - 1) * patientsPerPage;

    const endIndex = Math.min(startIndex + patientsPerPage, patients.length);
    renderPatients(patients.slice(startIndex, endIndex));
    renderPaginationControls(patientsContent);
}

function renderPatients(patientsToDisplay) {

    const patientListContainer = document.getElementById('patientListContainer');
    patientListContainer.innerHTML = patientsToDisplay.map(patient => `
        <div class="patient-info">
            <p>${patient.name} (${patient.age} years old) - ${patient.therapies} therapies</p>
        </div>
    `).join('');
}

function filterPatientsByName() {

    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredPatients = patients.filter(patient => patient.name.toLowerCase().includes(searchInput));
    renderPatients(filteredPatients.slice(0, patientsPerPage));
}

function sortPatientsByAgeGroup() {

    const ageGroup = document.getElementById('ageGroupDropdown').value;
    let filteredPatients = patients;

    if (ageGroup) {
        const [minAge, maxAge] = ageGroup.split('-').map(Number);
        filteredPatients = patients.filter(patient => patient.age >= minAge && patient.age <= maxAge);
    }

    renderPatients(filteredPatients.slice(0, patientsPerPage));
}

function sortPatientsByTherapies() {
    const sortValue = document.getElementById('therapyDropdown').value;
    let sortedPatients = [...patients];

    if (sortValue === 'high') {
        sortedPatients.sort((a, b) => b.therapies - a.therapies);
    } else if (sortValue === 'low') {
        sortedPatients.sort((a, b) => a.therapies - b.therapies);
    }

    renderPatients(sortedPatients.slice(0, patientsPerPage));
}

function handlePagination(direction) {
    const totalPages = Math.ceil(patients.length / patientsPerPage);
    if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }

    loadPatientList();
}

function renderPaginationControls(container) {
    const totalPages = Math.ceil(patients.length / patientsPerPage);
    const paginationHTML = `
        <div class="pagination-controls">
            <button ${currentPage === 1 ? 'disabled' : ''} onclick="handlePagination('prev')">Previous</button>
            <span>Page ${currentPage} of ${totalPages}</span>
            <button ${currentPage === totalPages ? 'disabled' : ''} onclick="handlePagination('next')">Next</button>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', paginationHTML);
}


function loadGroupManagement() {

    const mainContent = document.getElementById('groups-section');
    mainContent.innerHTML = `
        <h2>Group Management</h2>
        <p>This section allows you to manage therapy groups.</p>
    `;
}

function loadScheduling() {

    const mainContent = document.getElementById('schedule-section');
    mainContent.innerHTML = `
        <h2>Schedule Management</h2>
        <p>This section allows you to manage your appointments and therapy sessions.</p>
    `;
}

function loadReportGeneration() {
    const mainContent = document.getElementById('reports-section');
    mainContent.innerHTML = `
        <h2>Report Generation</h2>
        <p>This section allows you to generate reports on patient progress and sessions.</p>
    `;
}

function loadSettings() {

    const mainContent = document.getElementById('settings-section');
    mainContent.innerHTML = `
        <h2>Settings</h2>
        <p>This section allows you to configure your profile and app settings.</p>
    `;
}

// group

function loadSection(sectionId) {
    const sections = document.querySelectorAll('section.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    if (sectionId === 'dashboard-section') {
        loadDashboard();
    } else if (sectionId === 'patients-section') {
        loadPatientList();
    } else if (sectionId === 'groups-section') {
        loadGroupManagement();
    }
}

function loadGroupManagement() {

    const groupSection = document.getElementById('groups-section');
    groupSection.innerHTML = `
        <div class="group-container">
            <!-- Patient List for Drag and Drop -->
            <div class="patient-list-box">
                <h2>Patient List</h2>
                <div id="patient-list" class="patient-list"></div>
                <div class="pagination-controls"></div> <!-- Pagination for patient list -->
            </div>
        

            <!-- Group Creation Area -->
            <div class="group-creation-box">
                <h2>Create New Group</h2>
                <label for="groupName">Group Name:</label>
                <input type="text" id="groupName" placeholder="Enter group name">
        
                <label for="sessionDate">Session Date:</label>
                <input type="date" id="sessionDate">
        
                <label for="sessionTime">Session Time:</label>
                <input type="time" id="sessionTime">
        
                <button onclick="createGroup()">Create Group</button>
        
                <div id="groups-container"></div> <!-- Container to display created groups -->
            </div>
        </div>
    `;

    loadPatientListForGroups(); // Function call to render the patients for drag-and-drop
}

function loadPatientListForGroups() {
    const startIndex = (currentPage - 1) * patientsPerPage;
    const endIndex = Math.min(startIndex + patientsPerPage, patients.length);

    const patientListContainer = document.getElementById('patient-list');

    patientListContainer.innerHTML = ''; // Clear previous list

    patients.slice(startIndex, endIndex).forEach(patient => {
        const patientCard = document.createElement('div');
        patientCard.className = 'patient-card';
        patientCard.setAttribute('draggable', 'true');
        patientCard.setAttribute('ondragstart', 'drag(event)');
        patientCard.id = `patient-${patient.id}`;
        patientCard.innerHTML = `<p>${patient.name}</p>`;
        patientListContainer.appendChild(patientCard);
    });

    renderPaginationControlsForGroups(); // Render pagination for group section
}

function renderPaginationControlsForGroups() {
    
    const paginationControls = document.querySelector('.pagination-controls');
    paginationControls.innerHTML = ''; // Clear previous pagination

    const totalPages = Math.ceil(patients.length / patientsPerPage);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.onclick = () => changePageForGroups(-1);
    prevButton.disabled = currentPage === 1;

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.onclick = () => changePageForGroups(1);
    nextButton.disabled = currentPage === totalPages;

    paginationControls.appendChild(prevButton);
    paginationControls.appendChild(document.createTextNode(` Page ${currentPage} of ${totalPages} `));
    paginationControls.appendChild(nextButton);
}

function changePageForGroups(change) {
   
    const totalPages = Math.ceil(patients.length / patientsPerPage);
    if (currentPage + change > 0 && currentPage + change <= totalPages) {
        currentPage += change;
        loadPatientListForGroups(); // Reload the patient list after page change
    }
}

function allowDrop(event) {

    event.preventDefault();
}

function drag(event) {

    event.dataTransfer.setData("text/plain", event.target.id);
}

function dropPatient(event) {

    event.preventDefault();
    const patientId = event.dataTransfer.getData("text/plain");
    const patientCard = document.getElementById(patientId);
    
    if (patientCard && event.target.classList.contains('group-patients')) {
        event.target.appendChild(patientCard); // Move patient into the group
        toast(`${patientCard.textContent} added to group.`);
    }
}

function createGroup() {

    const groupName = document.getElementById('groupName').value;
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionTime = document.getElementById('sessionTime').value;

    if (!groupName || !sessionDate || !sessionTime) {
        alert("Please fill out all fields to create a group.");
        return;
    }

    const groupsContainer = document.getElementById('groups-container');
    const groupCard = document.createElement('div');
    groupCard.className = 'group-card';
    groupCard.innerHTML = `
        <h3>${groupName}</h3>
        <p>Date: ${sessionDate}</p>
        <p>Time: ${sessionTime}</p>
        <div class="group-patients" ondrop="dropPatient(event)" ondragover="allowDrop(event)">
            <p>Drag patients here</p>
        </div>
        <button onclick="deleteGroup(this.parentNode)">Delete Group</button>
        <button class="enable-delete" onclick="enableDeletePatient(this)">Enable Delete Patient</button>
    `;

    groupsContainer.appendChild(groupCard);

    document.getElementById('groupName').value = '';
    document.getElementById('sessionDate').value = '';
    document.getElementById('sessionTime').value = '';
}

function enableDeletePatient(button) {

    const groupPatientsDiv = button.previousElementSibling;
    groupPatientsDiv.classList.add('delete-mode');

    groupPatientsDiv.addEventListener('click', (event) => {

        if (event.target.classList.contains('patient-card')) {
            event.target.remove();
            toast('Patient removed from group.');
        }
    });
}

function deleteGroup(groupElement) {

    groupElement.remove();
}

function toast(message) {
    
    alert(message); 
}