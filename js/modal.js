window.showModal = function(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    const mTitle = document.getElementById('modalTitle');
    const mIcon = document.getElementById('modalIcon');
    const mBody = document.getElementById('modalBody');

    if (!modal || !mTitle || !mIcon || !mBody) return;

    mTitle.innerText = title;
    mIcon.innerHTML = iconHtml;
    mIcon.className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass}`;
    mBody.innerHTML = bodyContent;

    // মডাল দেখানোর জন্য hidden সরাবেন এবং flex যোগ করবেন
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

window.closeInfoModal = function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        // মডাল লুকানোর জন্য flex সরাবেন এবং hidden যোগ করবেন
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// বাইরে ক্লিক করলে মডাল বন্ধ হবে
document.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
});
