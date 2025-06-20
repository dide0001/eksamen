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

function scrollToSection() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}