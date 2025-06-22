// Helper script to generate browser debugging code
console.log(`
🌐 BROWSER DEBUGGING HELPER
Copy and paste this code into your browser's console to debug the contact form:

// Enable detailed logging
window.contactFormDebug = true;

// Override fetch to log all requests
const originalFetch = window.fetch;
window.fetch = function(...args) {
  console.log('🌐 Fetch Request:', args);
  return originalFetch.apply(this, args)
    .then(response => {
      console.log('📥 Fetch Response:', response.status, response.statusText);
      return response;
    })
    .catch(error => {
      console.error('❌ Fetch Error:', error);
      throw error;
    });
};

// Log form submissions
document.addEventListener('submit', function(e) {
  if (e.target.closest('form')) {
    console.log('📝 Form Submission:', e.target);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('📋 Form Data:', data);
  }
});

console.log('✅ Contact form debugging enabled!');
console.log('Now try submitting the form and watch the console for detailed logs.');
`)
