
const patients = {
    'James Smith': { age: 30, height: "5'8\"", weight: '70kg', diseases: 'Diabetes' },
    'Maria Hernandez': { age: 40, height: "5'6\"", weight: '68kg', diseases: 'Hypertension' },
    'John Doe': { age: 25, height: "6'0\"", weight: '75kg', diseases: 'None' },
    'Anna Lee': { age: 35, height: "5'5\"", weight: '60kg', diseases: 'Asthma' },
    'Emily Davis': { age: 28, height: "5'7\"", weight: '65kg', diseases: 'None' },
    'David Lee': { age: 50, height: "5'9\"", weight: '80kg', diseases: 'Heart Disease' },
    'Michael Brown': { age: 45, height: "6'2\"", weight: '90kg', diseases: 'Diabetes' },
    'William Johnson': { age: 38, height: "6'1\"", weight: '85kg', diseases: 'None' },
    'Olivia Martin': { age: 32, height: "5'4\"", weight: '58kg', diseases: 'Anemia' },
    'Sophia Jackson': { age: 29, height: "5'6\"", weight: '62kg', diseases: 'Thyroid Disorder' },
    'Liam Martinez': { age: 52, height: "5'9\"", weight: '92kg', diseases: 'Heart Disease' },
    'Noah Robinson': { age: 41, height: "6'0\"", weight: '84kg', diseases: 'None' },
    'Isabella Clark': { age: 33, height: "5'3\"", weight: '57kg', diseases: 'Migraines' },
    'Ethan Lewis': { age: 47, height: "5'10\"", weight: '88kg', diseases: 'High Blood Pressure' },
    'Ava Walker': { age: 26, height: "5'5\"", weight: '61kg', diseases: 'None' },
    'Mason Young': { age: 31, height: "5'11\"", weight: '79kg', diseases: 'None' },
    'Lucas Harris': { age: 36, height: "5'9\"", weight: '85kg', diseases: 'Arthritis' },
    'Amelia White': { age: 42, height: "5'7\"", weight: '70kg', diseases: 'Asthma' },
    'Charlotte Hall': { age: 34, height: "5'6\"", weight: '64kg', diseases: 'Cholesterol' },
    'Henry Allen': { age: 28, height: "6'2\"", weight: '78kg', diseases: 'None' },
    'Mia King': { age: 25, height: "5'4\"", weight: '59kg', diseases: 'Allergies' },
    'Jacob Wright': { age: 37, height: "6'0\"", weight: '82kg', diseases: 'None' },
    'Ella Scott': { age: 43, height: "5'5\"", weight: '67kg', diseases: 'High Blood Pressure' },
    'Benjamin Green': { age: 31, height: "5'10\"", weight: '80kg', diseases: 'Diabetes' },
    'Harper Adams': { age: 29, height: "5'6\"", weight: '60kg', diseases: 'None' },
    'Alexander Baker': { age: 50, height: "5'8\"", weight: '90kg', diseases: 'Cholesterol' },
    'Abigail Gonzalez': { age: 39, height: "5'5\"", weight: '63kg', diseases: 'Migraines' },
    'Sebastian Moore': { age: 44, height: "6'1\"", weight: '87kg', diseases: 'None' }
  };
  
    
    
  const appointments = {

    pulmonologist: {
        'dr-jacob': [
          { time: '07:00 AM', monday: 'James Smith', tuesday: '', wednesday: 'John Doe', thursday: '', friday: '', saturday: '', sunday: '' },
          { time: '08:00 AM', monday: 'Liam Martinez', tuesday: 'Sophia Jackson', wednesday: '', thursday: 'Olivia Martin', friday: 'Emily Davis', saturday: '', sunday: '' },
          { time: '09:00 AM', monday: 'Michael Brown', tuesday: 'Ava Walker', wednesday: 'David Lee', thursday: '', friday: '', saturday: 'William Johnson', sunday: '' },
          { time: '10:00 AM', monday: 'Liam Martinez', tuesday: 'Anna Lee', wednesday: 'Ethan Lewis', thursday: '', friday: 'David Lee', saturday: '', sunday: '' },
          { time: '11:00 AM', monday: '', tuesday: '', wednesday: 'Sophia Jackson', thursday: 'David Lee', friday: '', saturday: '', sunday: '' },
          { time: '12:00 PM', monday: 'Mason Young', tuesday: 'Noah Robinson', wednesday: '', thursday: 'Lucas Harris', friday: '', saturday: 'Charlotte Hall', sunday: '' },
          { time: '01:00 PM', monday: 'Sophia Jackson', tuesday: '', wednesday: 'John Doe', thursday: '', friday: '', saturday: '', sunday: '' },
          { time: '02:00 PM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
          { time: '03:00 PM', monday: 'James Smith', tuesday: 'Anna Lee', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
          { time: '04:00 PM', monday: '', tuesday: 'David Lee', wednesday: 'Emily Davis', thursday: '', friday: 'Olivia Martin', saturday: '', sunday: '' },
          { time: '05:00 PM', monday: 'David Lee', tuesday: '', wednesday: 'Michael Brown', thursday: '', friday: '', saturday: '', sunday: '' },
          { time: '06:00 PM', monday: '', tuesday: 'Jacob Wright', wednesday: '', thursday: 'Amelia White', friday: '', saturday: '', sunday: '' },
          { time: '07:00 PM', monday: '', tuesday: '', wednesday: '', thursday: 'David Lee', friday: 'Sophia Jackson', saturday: '', sunday: '' },
          { time: '08:00 PM', monday: '', tuesday: 'John Doe', wednesday: '', thursday: '', friday: 'Anna Lee', saturday: '', sunday: '' }
        ],

        'dr-hannah': [
            { time: '09:00 AM', monday: 'Maria Hernandez', tuesday: 'Jacob Wright', wednesday: 'Henry Allen', thursday: 'Anna Lee', friday: 'Isabella Clark', saturday: '', sunday: '' }
            ,{ time: '10:00 AM', monday: 'Liam Martinez', tuesday: 'Anna Lee', wednesday: 'Ethan Lewis', thursday: '', friday: 'David Lee', saturday: '', sunday: '' },
            { time: '11:00 AM', monday: '', tuesday: '', wednesday: 'Sophia Jackson', thursday: 'David Lee', friday: '', saturday: '', sunday: '' },
            { time: '12:00 PM', monday: 'Mason Young', tuesday: 'Noah Robinson', wednesday: '', thursday: 'Lucas Harris', friday: '', saturday: 'Charlotte Hall', sunday: '' },
            { time: '01:00 PM', monday: 'Sophia Jackson', tuesday: '', wednesday: 'John Doe', thursday: '', friday: '', saturday: '', sunday: '' },
            { time: '02:00 PM', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
         ],
        'dr-michael': [
            { time: '12:00 PM', monday: '', tuesday: 'Noah Robinson', wednesday: 'Michael Brown', thursday: '', friday: 'Alexander Baker', saturday: 'Benjamin Green', sunday: '' }
        ]
    },
    cardiologist: {
        'dr-michael': [
            { time: '10:00 AM', monday: 'Ella Scott', tuesday: 'Amelia White', wednesday: 'Harper Adams', thursday: 'Abigail Gonzalez', friday: 'Liam Martinez', saturday: 'Mason Young', sunday: '' }
        ]
    },
    general: {
        'dr-william': [
            { time: '09:00 AM', monday: 'James Smith', tuesday: 'David Lee', wednesday: 'Emily Davis', thursday: '', friday: 'Olivia Martin', saturday: '', sunday: 'Sebastian Moore' }
        ]
    }
  };
  
    // for filter and display appointments based on selected department and doctor
function filterAppointments() {

  const department = document.getElementById('department-select').value;
  const doctor = document.getElementById('doctor-select').value;
  const tableBody = document.getElementById('appointment-table');
  tableBody.innerHTML = ''; // Clear previous table data

  const deptAppointments = appointments[department];
  const doctors = doctor === 'all' ? Object.keys(deptAppointments) : [doctor];

  doctors.forEach(doc => {
    deptAppointments[doc].forEach(appt => {
      let row = `<tr><td>${appt.time}</td>`;
      ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(day => {
        row += `<td class="appointment" onclick="showAppointmentDetails('${appt[day]}', '${doc}', '${appt.time}')">${appt[day] || ''}</td>`;
      });
      row += `</tr>`;
      tableBody.innerHTML += row;
    });
  });
}

function showAppointmentDetails(name, doctor, time) {
  
  if (name) {
    const patient = patients[name];
    document.getElementById('patient-name').textContent = name;
    document.getElementById('patient-mobile').textContent = patient.mobile;
    document.getElementById('appointment-time').textContent = time;
    document.getElementById('appointment-doctor').textContent = doctor;
    document.getElementById('visit-reason').textContent = patient.reason;

    document.getElementById('appointment-details').style.display = 'flex';
  }
}

function showPatientDetails(event) {

  event.preventDefault();
  const patientName = document.getElementById('patient-name').textContent;

  if (patients[patientName]) {
    const details = patients[patientName];
    document.getElementById('modal-patient-name').textContent = patientName;
    document.getElementById('modal-patient-age').textContent = details.age;
    document.getElementById('modal-patient-height').textContent = details.height;
    document.getElementById('modal-patient-weight').textContent = details.weight;
    document.getElementById('modal-patient-diseases').textContent = details.diseases;

    document.getElementById('patient-details').style.display = 'flex';
  }
}

function closeModal() {

  document.getElementById('appointment-details').style.display = 'none';
  document.getElementById('patient-details').style.display = 'none';
}

function rescheduleAppointment() {

  showNotification("Appointment rescheduled!");
  closeModal();
}

function rejectAppointment() {
  let currentAppointmentName = document.getElementById('patient-name').textContent;
  if (currentAppointmentName) {
    let rejectedAppointment = Array.from(document.querySelectorAll('td'))
        .find(td => td.textContent.includes(currentAppointmentName)).parentNode;

    rejectedAppointment.style.display = 'none';

    showNotification("Appointment rejected!");
    
    closeModal();
  }
}

function acceptAppointment() {

  showNotification("Appointment accepted!");
  
  closeModal();
}

/*
AI Prompt to Improve the Code:

I asked the AI: "How can I improve user interaction by adding notification feedback and enhancing the UI for appointment management?"

The AI suggested adding notification feedback for actions like appointment acceptance, rejection, and rescheduling. It also recommended enhancing the patient details modal and improving the printing functionality.
*/

/* 
Final Code with AI Enhancements:

This enhanced version adds user notifications for actions, improves modal handling for patient details, and refines the printing feature.
*/
function showNotification(message) {

  const notificationPopup = document.getElementById('notification-popup');
  
  notificationPopup.textContent = message;
  notificationPopup.style.visibility = 'visible';
  notificationPopup.style.opacity = '1';

  setTimeout(() => {
    notificationPopup.style.visibility = 'hidden';
    notificationPopup.style.opacity = '0';
  }, 3000);
}

function printPatientDetails() {

  const patientName = document.getElementById('patient-name').textContent;
  const patientMobile = document.getElementById('patient-mobile').textContent;
  const appointmentTime = document.getElementById('appointment-time').textContent;
  const appointmentDoctor = document.getElementById('appointment-doctor').textContent;
  const visitReason = document.getElementById('visit-reason').textContent;

  const printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write(`<html><head><title>Print Appointment Details</title></head><body>
    <h2>Patient Appointment Details</h2>
    <p><strong>Patient Name:</strong> ${patientName}</p>
    <p><strong>Mobile Number:</strong> ${patientMobile}</p>
    <p><strong>Appointment Time:</strong> ${appointmentTime}</p>
    <p><strong>Doctor:</strong> ${appointmentDoctor}</p>
    <p><strong>Reason for Visit:</strong> ${visitReason}</p>
    </body></html>`);

  printWindow.document.close();
  printWindow.print();
}

window.onload = function () {

  filterAppointments();
};

function toggleDropdownMenu() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function editInformation() {

  alert('Edit information clicked.');
}

function logout() {
  window.location.href = '/../index.html';
}