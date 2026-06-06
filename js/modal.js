// ১. মডাল খোলার মূল ফাংশন (যেটি এখন সব ডেটা হ্যান্ডেল করবে)
window.showDataModal = function(category, key) {
    let data;
    if (category === 'bani') data = window.baniData[key];
    else if (category === 'achieve') data = window.achievementsData[key];
    else if (category === 'dept') data = window.deptData[key];

    if (data) {
        showModal(data.title, data.icon, data.bg, data.content);
    }
};

// ২. সাধারণ মডাল রেন্ডার ফাংশন
window.showModal = function(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalTitle').innerText = title;
    
    const mIcon = document.getElementById('modalIcon');
    mIcon.innerHTML = iconHtml || '<i class="fas fa-info"></i>';
    mIcon.className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass || 'bg-gray-100'}`;
    
    document.getElementById('modalBody').innerHTML = bodyContent;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
};

// ৩. মডাল বন্ধ করার ফাংশন
window.closeInfoModal = function() {
    const modal = document.getElementById('infoModal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};
