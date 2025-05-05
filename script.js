document.addEventListener('DOMContentLoaded', function() {
  // Prevenção de zoom na página (mantido)
  window.addEventListener("wheel", (e) => {
    const isPinching = e.ctrlKey
    if(isPinching) e.preventDefault()
  }, { passive: false });

  // Smooth scrolling para links de âncora (mantido)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          const headerOffset = 0;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
         window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
         });
      }
    });
  });

  console.log("Script da Landing Page Interna 'Espaço Marketing de ImPacto' carregado.");
});
