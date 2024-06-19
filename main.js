// Add JS here
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Collect form data
    let formData = new FormData(this);
    
    // Create object from formData
    let formDataObject = {};
    formData.forEach(function(value, key){
      formDataObject[key] = value;
    });
    
    // Simulate sending data to server (replace with actual backend integration)
    console.log('Form data:', formDataObject);
    
    // Reset form after submission (optional)
    this.reset();
  });