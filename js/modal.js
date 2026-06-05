/**
 * Modal Management Functions
 */

function showModal(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    const mTitle = document.getElementById('modalTitle');
    const mIcon = document.getElementById('modalIcon');
    const mBody = document.getElementById('modalBody');
    
    mTitle.innerText = title;
    mIcon.innerHTML = iconHtml;
    mIcon.className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass}`;
    mBody.innerHTML = bodyContent;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
    document.getElementById('infoModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openWelcomeModal() {
    showModal('শুভেচ্ছা বাণী', '<i class="fas fa-handshake"></i>', 'bg-blue-100 text-blue-600', messages.welcome);
}

function openDirectorModal() {
    showModal('পরিচালকের বাণী', '<i class="fas fa-mosque"></i>', 'bg-emerald-100 text-emerald-600', messages.director);
}

function openPrincipalModal() {
    showModal('প্রধান শিক্ষকের বাণী', '<i class="fas fa-graduation-cap"></i>', 'bg-indigo-100 text-indigo-600', messages.principal);
}

function openAchieveModal(key) {
    const data = achieveData[key];
    if (data) {
        showModal(data.title, data.icon, data.bg, data.desc);
    }
}

function openDeptModal(key) {
    const data = deptData[key];
    if (data) {
        showModal(data.title, data.icon, data.bg, data.desc);
    }
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
});