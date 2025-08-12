// Minimal client-only capture (placeholder): stores to local file later or switch to real endpoint.
// For now: instant success message; we'll wire Aeron/endpoint next step.
document.getElementById('lead-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg');
  if (!email) { msg.textContent = 'Enter a valid email.'; return; }
  msg.textContent = 'Got it. You’re in.';
  e.target.reset();
});
