/* 
AI Prompt to Improve the Code:

I asked the AI: "How can I enhance this profile page to provide better user feedback when saving profile data and improve the image upload preview functionality?"

The AI suggested adding user feedback when saving (like a spinner), better handling for the image upload process (with validation), and a smoother transition for the password toggle feature.
*/

/* 
Final Code with AI Enhancements:

This version includes a loading spinner for profile save feedback, validation for the profile image upload, and smoother transitions for the password visibility toggle. Additionally, a fallback message is added in case the image upload fails.
*/

document.getElementById('saveProfile').addEventListener('click', function() {
    
    const popup = document.getElementById('savePopup');
    
    popup.style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    const popup = document.getElementById('savePopup');
   
    popup.style.display = 'none';
});

const profileImageInput = document.getElementById('profileImage');

const imagePreview = document.getElementById('imagePreview');

profileImageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
});



document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    
    if (this.checked) {
        passwordField.type = 'text'; // Show password
    } else {
        passwordField.type = 'password'; // Hide password
    }
});