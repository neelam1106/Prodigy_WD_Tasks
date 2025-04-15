window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    } else {
      nav.style.boxShadow = "none";
    }
  });
  