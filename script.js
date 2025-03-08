// Form validation and submission
document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const cv = document.getElementById('cv').files[0];

  // Simple validation
  if (!fullName || !email || !phone || !education || !skills || !cv) {
      alert('Please fill in all fields.');
      return;
  }

  // Show a success message
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = `<p>Thank you, ${fullName}! Your application has been submitted successfully.</p>`;
  formMessage.style.color = 'green';

  // Reset form
  document.getElementById('applicationForm').reset();
});
