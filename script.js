document.getElementById('waitlistForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  if (!formData.fullName || !formData.email) {
    alert('Name and Email are required!');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    alert('Please enter a valid email address!');
    return;
  }

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1'
    },
    body: JSON.stringify({
      name: formData.fullName,
      email: formData.email,

    })
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('waitlistData', JSON.stringify(formData));
    document.getElementById('thankYouMessage').style.display = 'block';
    document.getElementById('waitlistForm').style.display = 'none';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting your form.');
  });
});
