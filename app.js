const form = document.getElementById('lead-form');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

// >>> replace this with YOUR Formspree endpoint <<<
const ENDPOINT = 'https://formspree.io/f/xqalnqpn';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = 'Saving...';
  try {
    const data = new FormData(form);
    data.append('ua', navigator.userAgent);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      msg.textContent = 'Got it. You’re in.';
      form.reset();
    } else {
      msg.textContent = 'Could not save. Try again.';
    }
  } catch (err) {
    msg.textContent = 'Network error. Try again.';
  }
});
