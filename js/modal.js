/**
 * Modal Management Functions
 */

window.showModal = function(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    const mTitle = document.getElementById('modalTitle');
    const mIcon = document.getElementById('modalIcon');
    const mBody = document.getElementById('modalBody');
    
    // নিশ্চিত করুন যে এলিমেন্টগুলো খুঁজে পাওয়া যাচ্ছে
    if (!modal || !mTitle || !mIcon || !mBody) {
        console.error("Modal elements not found in the DOM!");
        return;
    }
    
    mTitle.innerText = title;
    mIcon.innerHTML = iconHtml;
    mIcon.className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass}`;
    mBody.innerHTML = bodyContent;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

window.closeInfoModal = function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

window.openWelcomeModal = function() {
    showModal('শুভেচ্ছা বাণী', '<i class="fas fa-handshake"></i>', 'bg-blue-100 text-blue-600', messages.welcome);
}

window.openDirectorModal = function() {
    showModal('পরিচালকের বাণী', '<i class="fas fa-mosque"></i>', 'bg-emerald-100 text-emerald-600', messages.director);
}

window.openPrincipalModal = function() {
    showModal('প্রধান শিক্ষকের বাণী', '<i class="fas fa-graduation-cap"></i>', 'bg-indigo-100 text-indigo-600', messages.principal);
}

window.openAchieveModal = function(key) {
    if (typeof achieveData !== 'undefined' && achieveData[key]) {
        const data = achieveData[key];
        showModal(data.title, data.icon, data.bg, data.desc);
    } else {
        console.error("Achieve data not found for key:", key);
    }
}

window.openDeptModal = function(key) {
    if (typeof deptData !== 'undefined' && deptData[key]) {
        const data = deptData[key];
        showModal(data.title, data.icon, data.bg, data.desc);
    } else {
        console.error("Department data not found for key:", key);
    }
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
});
