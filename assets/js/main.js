// Main interactions for the portfolio
// - Smooth scrolling handled by CSS; JS handles active link highlight and offsets
// - IntersectionObserver for reveal animations and active sections
// - Back-to-top button logic and simple contact form feedback

(function(){
  const header = document.getElementById('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  const backToTop = document.getElementById('backToTop');
  const links = Array.from(document.querySelectorAll('.nav-list a'));
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  // Mobile nav toggle
  navToggle?.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  // Close nav on click
  navList?.addEventListener('click', (e) => {
    if(e.target.closest('a')){
      navList.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Active link highlight using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-list a[href="#${id}"]`);
      if(link){
        if(entry.isIntersecting){
          links.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });

  sections.forEach(sec => observer.observe(sec));

  // Reveal animations
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObs.observe(el));

  // Back-to-top visibility
  const toggleBackToTop = () => {
    if(window.scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  };
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Contact form with Firebase Firestore integration
  const form = document.getElementById('contact-form');
  const note = document.querySelector('.form-note');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if(!name || !email || !message){
      note.textContent = 'Please fill in all fields.';
      note.style.color = '#ffb4b4';
      return;
    }
    // naive email check
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      note.textContent = 'Please enter a valid email address.';
      note.style.color = '#ffb4b4';
      return;
    }

    // Save to Firebase Firestore
    if(window.firebaseDB){
      try {
        note.textContent = 'Sending message...';
        note.style.color = '#A6B1D1';
        
        // Import addDoc and collection from Firebase
        const { collection, addDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        // Add document to 'contacts' collection
        await addDoc(collection(window.firebaseDB, 'contacts'), {
          name: name,
          email: email,
          message: message,
          timestamp: serverTimestamp(),
          read: false
        });
        
        note.textContent = 'Thanks! Your message has been sent successfully.';
        note.style.color = '#A6F0C6';
        form.reset();
      } catch (error) {
        console.error('Error saving to Firebase:', error);
        note.textContent = 'Error sending message. Please try again or contact directly.';
        note.style.color = '#ffb4b4';
      }
    } else {
      // Fallback if Firebase is not configured
      note.textContent = 'Thanks! Your message has been captured locally (Firebase not configured).';
      note.style.color = '#A6F0C6';
      form.reset();
    }
  });
})();
