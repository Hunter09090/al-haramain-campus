window.showDataModal = function(category, key) {
    let data;
    if (category === 'bani') data = window.baniData[key];
    else if (category === 'achieve') data = window.achievementsData[key];
    else if (category === 'dept') data = window.deptData[key];

    if (data) {
        showModal(data.title, data.icon, data.bg, data.content);
    }
};

window.showModal = function(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalIcon').innerHTML = iconHtml;
    document.getElementById('modalIcon').className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass}`;
    document.getElementById('modalBody').innerHTML = bodyContent;
    modal.classList.remove('hidden'); modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
};

window.closeInfoModal = function() {
    const modal = document.getElementById('infoModal');
    modal.classList.remove('flex'); modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};
