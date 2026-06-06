// ১. মডাল খোলার মূল ফাংশন (নিশ্চিত করে যে ডেটাগুলো লোড হয়েছে)
window.showDataModal = function(category, key) {
    let data;

    // ডাটা লোড হয়েছে কি না চেক করা
    if (category === 'bani') data = window.baniData ? window.baniData[key] : null;
    else if (category === 'achieve') data = window.achievementsData ? window.achievementsData[key] : null;
    else if (category === 'dept') data = window.deptData ? window.deptData[key] : null;

    if (data) {
        showModal(data.title, data.icon, data.bg, data.content);
    } else {
        console.error("ডেটা পাওয়া যায়নি: " + category + " -> " + key);
    }
};

// ২. মডাল রেন্ডার ফাংশন
window.showModal = function(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalTitle').innerText = title;

    const mIcon = document.getElementById('modalIcon');
    mIcon.innerHTML = iconHtml;
    mIcon.className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass}`;

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