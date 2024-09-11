// Dummy Data for the Dashboard
const data = {
    patientsByTherapist: [
      
      {
        therapist: 'Therapist A',
        therapistImage: 'https://via.placeholder.com/100', 
        patients: [
          { name: 'Patient 1', info: 'Patient 1 has been in treatment for anxiety.', time: '10:00 AM', duration: '45 minutes' },
          { name: 'Patient 2', info: 'Patient 2 has been in treatment for depression.', time: '11:00 AM', duration: '50 minutes' }
        ],
        therapistInfo: 'Therapist A specializes in anxiety and depression.'
      },
      {
        therapist: 'Therapist B',
        therapistImage: 'https://via.placeholder.com/100', 
        patients: [
          { name: 'Patient 3', info: 'Patient 3 is receiving therapy for PTSD.', time: '12:00 PM', duration: '60 minutes' },
          { name: 'Patient 4', info: 'Patient 4 is undergoing stress management therapy.', time: '1:00 PM', duration: '45 minutes' }
        ],
        therapistInfo: 'Therapist B is a specialist in PTSD and stress management.'
      },
      {
        therapist: 'Therapist C',
        therapistImage: 'https://via.placeholder.com/100', 
        patients: [
          { name: 'Patient 5', info: 'Patient 5 is being treated for OCD.', time: '2:00 PM', duration: '55 minutes' },
          { name: 'Patient 6', info: 'Patient 6 is managing bipolar disorder with therapy.', time: '3:00 PM', duration: '50 minutes' }
        ],
        therapistInfo: 'Therapist C focuses on OCD and bipolar disorder.'
      }
    ]
  };
  

  function populateDropdowns() {

    const dropdowns = [1, 2, 3];
    dropdowns.forEach(num => {
      const dropdown = document.getElementById(`therapist-dropdown-${num}`); 
      data.patientsByTherapist.forEach(item => {
        const option = document.createElement('option');
        option.value = item.therapist;
        option.text = item.therapist;
        dropdown.add(option);
      });
    });
  }
  
  function displayTherapistData(cardNum) {
    
    const dropdown = document.getElementById(`therapist-dropdown-${cardNum}`); // Corrected: Use template literals properly
    const selectedTherapist = dropdown.value;
    const therapistInfoDiv = document.getElementById(`therapist-info-${cardNum}`); // Corrected: Use template literals properly
    const patientListDiv = document.getElementById(`therapist-patient-list-${cardNum}`); // Corrected: Use template literals properly
  
    therapistInfoDiv.innerHTML = ''; // Clear 
    patientListDiv.innerHTML = ''; // Clear  patient list
  
    if (selectedTherapist) {
      const therapistData = data.patientsByTherapist.find(item => item.therapist === selectedTherapist);
  
      // for therapist info including image
      const therapistImg = document.createElement('img');
      therapistImg.src = therapistData.therapistImage;
      
      const therapistInfo = document.createElement('p');
      therapistInfo.textContent = therapistData.therapistInfo;
  
      therapistInfoDiv.appendChild(therapistImg);
      therapistInfoDiv.appendChild(therapistInfo);
  
      // for patient list
      therapistData.patients.forEach(patient => {
        const patientEntry = document.createElement('p');
        patientEntry.innerHTML = `<a href="#">${patient.name}</a>`; // Corrected: Properly handle template literals
        patientEntry.querySelector('a').addEventListener('click', () => openModal('patient', patient.name, patient.info, patient.time, patient.duration));
        patientListDiv.appendChild(patientEntry);
      });
    }
  }
  
  // Modal logic for opening and closing
  function openModal(type, name, info, time, duration) {
    const modal = document.getElementById('patient-modal');
   
    const modalName = document.getElementById('patient-name');
    const modalInfo = document.getElementById('patient-info');
    const treatmentTime = document.getElementById('treatment-time');
    const treatmentDuration = document.getElementById('treatment-duration');
  
    modalName.textContent = name;
    modalInfo.textContent = info;
    
    treatmentTime.textContent = `Time of Treatment: ${time}`; // Corrected: Properly handle template literals
    treatmentDuration.textContent = `Duration of Treatment: ${duration}`; // Corrected: Properly handle template literals
    modal.style.display = 'block';
  }
  
  // Close modals when clicking the close button
  const closeButtons = document.querySelectorAll('.close');
 
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('patient-modal').style.display = 'none';
    });
  });
  
  window.onclick = function(event) {
    
    const modal = document.getElementById('patient-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  
  populateDropdowns();
  
  function logout() {

    window.location.href = '/../index.html';
  }

  /*
AI Prompt to Improve the Code:

I asked the AI: "How can I improve the user interface and interactions for displaying therapists and their patients on a dashboard, including handling modals and adding real-time data updates?"

The AI suggested:
- Adding real-time updates when selecting therapists.
- Improving the modal interface for a better user experience.
- Optimizing event listeners for better performance.
*/

/*
Final Code with AI Enhancements:

The improved version includes:
- Enhanced dropdown selection with real-time therapist data display.
- More interactive and user-friendly modal handling.
- Optimized event listeners and DOM manipulation for better performance.
*/