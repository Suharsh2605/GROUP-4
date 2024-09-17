document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
   
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('click', () => {
           
            modal.style.display = "block";
            modalBody.innerHTML = generatePopupContent(tile.id);
        });
    });

    closeModal.onclick = () => {
        
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
           
            modal.style.display = "none";
        }
    };
});

function generatePopupContent(tileId) {
    switch (tileId) {
       
        case 'activityTile':
            return generateActivityPopup();
        case 'affirmationTile':
            return generateAffirmationPopup();
        case 'goalsTile':
            return generateGoalsPopup();
        case 'journalTile':
            return generateJournalPopup();
    }
}

/* -------- Activity Tracker Popup -------- */
let sleepRecords = [], eatingRecords = [], exerciseRecords = [];

function generateActivityPopup() {
    return `
        <h2>Activity Tracker</h2>
        <div class="activity-buttons">
            <button onclick="showActivityForm('sleep')">Add Sleep Data</button>
            <button onclick="showActivityForm('eating')">Add Eating Habits</button>
            <button onclick="showActivityForm('exercise')">Add Exercise Data</button>
        </div>
        <div id="activityForm"></div>
        <h3>Recorded Activities</h3>
        <div id="activityRecords">${renderActivityRecords()}</div>
    `;
}

function showActivityForm(type) {
    let formHtml = '';
    
    switch (type) {
        case 'sleep':
            formHtml = `
                <h4>Add Sleep Data</h4>
                <input type="date" id="sleepDate">
                <input type="time" id="sleepStartTime">
                <input type="time" id="sleepEndTime">
                <button onclick="addSleepData()">Submit Sleep Data</button>
            `;
            break;
        case 'eating':
            formHtml = `
                <h4>Add Eating Data</h4>
                <input type="date" id="eatingDate">
                <input type="text" id="foodType" placeholder="Type of Food">
                <input type="number" id="calories" placeholder="Calories Intake">
                <button onclick="addEatingData()">Submit Eating Data</button>
            `;
            break;
        case 'exercise':
            formHtml = `
                <h4>Add Exercise Data</h4>
                <input type="date" id="exerciseDate">
                <input type="text" id="exerciseType" placeholder="Exercise Type">
                <input type="number" id="duration" placeholder="Duration (minutes)">
                <button onclick="addExerciseData()">Submit Exercise Data</button>
            `;
            break;
    }
   
    document.getElementById('activityForm').innerHTML = formHtml;
}

function addSleepData() {
    const date = document.getElementById('sleepDate').value;
   
    const startTime = document.getElementById('sleepStartTime').value;
    const endTime = document.getElementById('sleepEndTime').value;
    sleepRecords.push({ date, startTime, endTime });
    document.getElementById('activityRecords').innerHTML = renderActivityRecords();
    updateDashboard('activityData', 'Sleep data added');
}

function addEatingData() {
    const date = document.getElementById('eatingDate').value;
    const food = document.getElementById('foodType').value;
    
    const calories = document.getElementById('calories').value;
    eatingRecords.push({ date, food, calories });
    document.getElementById('activityRecords').innerHTML = renderActivityRecords();
    updateDashboard('activityData', 'Eating data added');
}

function addExerciseData() {
    const date = document.getElementById('exerciseDate').value;
    const exerciseType = document.getElementById('exerciseType').value;
   
    const duration = document.getElementById('duration').value;
    exerciseRecords.push({ date, exerciseType, duration });
    document.getElementById('activityRecords').innerHTML = renderActivityRecords();
    updateDashboard('activityData', 'Exercise data added');
}

function renderActivityRecords() {
    const sleepList = sleepRecords.map(s => `<li>Sleep on ${s.date} from ${s.startTime} to ${s.endTime}</li>`).join('');
    
    const eatingList = eatingRecords.map(e => `<li>Ate ${e.food} on ${e.date}, Calories: ${e.calories}</li>`).join('');
    const exerciseList = exerciseRecords.map(ex => `<li>Exercise: ${ex.exerciseType} on ${ex.date}, Duration: ${ex.duration} mins</li>`).join('');
    return `<ul>${sleepList}${eatingList}${exerciseList}</ul>`;
}


let savedAffirmation = '';
function generateAffirmationPopup() {
    return `
        <h2>Select Daily Affirmation</h2>
        <select id="affirmationSelect">
            <option value="I am strong.">I am strong.</option>
            <option value="I am capable.">I am capable.</option>
            <option value="I trust the process.">I trust the process.</option>
            <option value="I am enough.">I am enough.</option>
        </select>
        <button onclick="saveAffirmation()">Save Affirmation</button>
    `;
}

function saveAffirmation() {
   
    savedAffirmation = document.getElementById('affirmationSelect').value;
    updateDashboard('affirmationData', savedAffirmation);
}


let goals = [];
function generateGoalsPopup() {
    return `
        <h2>Set Your Goals</h2>
        <input type="text" id="goalInput" placeholder="Your goal">
        <button onclick="addGoal()">Add Goal</button>
        <ul>${renderGoals()}</ul>
    `;
}

function addGoal() {
    const goal = document.getElementById('goalInput').value;
    
    goals.push(goal);
    document.getElementById('modalBody').innerHTML = generateGoalsPopup();
    updateDashboard('goalsData', `Goal: ${goal}`);
}

function renderGoals() {
    return goals.map(g => `<li>${g}</li>`).join('');
}


let journalEntries = [];
function generateJournalPopup() {
    return `
        <h2>Journal Entry</h2>
        <textarea id="journalEntry" placeholder="Write your thoughts"></textarea>
        <input type="file" id="fileInput">
        <div class="emoji-range">
            <label>How do you feel?</label>
            <span>😔</span>
            <input type="range" min="0" max="5" id="moodSlider" value="3">
            <span>😊</span>
        </div>
        <button onclick="addJournalEntry()">Save Entry</button>
        <ul>${renderJournalEntries()}</ul>
    `;
}


function addJournalEntry() {
    const entry = document.getElementById('journalEntry').value;
    const mood = document.getElementById('moodSlider').value;
    journalEntries.push({ entry, mood });
    document.getElementById('modalBody').innerHTML = generateJournalPopup();
    updateDashboard('journalData', `Entry: ${entry}, Mood: ${mood}`);
}


function renderJournalEntries() {
    return journalEntries.map(j => `<li>${j.entry} - Mood: ${j.mood}</li>`).join('');
}


/*
AI Prompt to Improve the Code:

I asked the AI: "How can I improve user interaction within modals, enhance activity tracking, and provide better feedback to users?"

The AI suggested enhancing the activity tracker with more detailed inputs, adding real-time updates to the dashboard, and improving affirmation selection with more choices and clearer feedback.
*/

/* 
Final Code with AI Enhancements:

The improved code includes:
- More detailed activity tracking inputs (sleep, eating, exercise).
- Real-time updates to the dashboard after each activity submission.
- Enhanced affirmation selection with additional feedback to the user.
- Improved goal-setting and journal entry functionality.
*/

function updateDashboard(tileId, data) {
    document.getElementById(tileId).innerHTML = data;
}
