/* info box */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const infoItem = button.closest(".info-item");
        const content = infoItem.querySelector(".info-content");
        const isActive = infoItem.classList.contains("active");
  
        // Luk alle andre bokse
        document.querySelectorAll(".info-item").forEach((item) => {
          if (item !== infoItem) {
            item.classList.remove("active");
            item.querySelector(".toggle-btn").textContent = "+"; // reset ikon
          }
        });
  
        // Toggle aktiv status
        if (isActive) {
          // Start lukkeanimation
          content.classList.add("closing");
          infoItem.classList.remove("active");
          button.textContent = "+";
  
          // Fjern .closing når animation er færdig
          setTimeout(() => {
            content.classList.remove("closing");
          }, 300);
        } else {
          infoItem.classList.add("active");
          button.textContent = "−"; // minus-tegn
        }
      });
    });
  });


  /* Fællesskaber sektion */
  function openDialog(id) {
    const dialog = document.getElementById(id);
    
    
    dialog.classList.remove('closing');
    
    
    dialog.showModal();
    
    
    dialog.scrollTop = 0;
    
    
    dialog.focus();
}


function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    
    
    dialog.classList.add('closing');
    
    
    setTimeout(() => {
        dialog.close();
        dialog.classList.remove('closing');
    }, 300); 
}


/* udtalelser */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-menu-container');
    const upBtn = document.querySelector('.scroll-btn.up');
    const downBtn = document.querySelector('.scroll-btn.down');
    const items = container ? container.querySelectorAll('.scroll-item') : [];

    if (!container || !upBtn || !downBtn || items.length === 0) {
        console.error('Manglende elementer');
        return;
    }

    // Start scroll i toppen
    container.scrollTop = 0;

    const itemHeight = items[0].offsetHeight;

    function scrollToItem(direction) {
        // direction: -1 for op, +1 for ned
        const currentIndex = Math.round(container.scrollTop / itemHeight);
        let targetIndex = currentIndex + direction;

        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex >= items.length) targetIndex = items.length - 1;

        container.scrollTo({
            top: targetIndex * itemHeight,
            behavior: 'smooth'
        });
    }


    

    upBtn.addEventListener('click', () => scrollToItem(-1));
    downBtn.addEventListener('click', () => scrollToItem(1));
});

/* easter egg funktion */
document.addEventListener('DOMContentLoaded', () => {
  const chrisImage = document.querySelector('.easter-egg');

  if (chrisImage) {
    const originalSrc = 'chris.webp';
    const newSrc = 'toddi.webp';
    
    chrisImage.addEventListener('click', () => {
        const currentFile = new URL(chrisImage.src).pathname.split('/').pop();
        chrisImage.src = currentFile === originalSrc ? `img/${newSrc}` : `img/${originalSrc}`;
    });
  }
});



