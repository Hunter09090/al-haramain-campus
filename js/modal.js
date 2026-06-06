// ১. পেজ লোড হওয়ার সাথে সাথে মডাল লুকানো নিশ্চিত করা
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

// ২. সব মডাল খোলার সাধারণ ফাংশন
window.showModal = function(title, iconHtml, bgClass, bodyContent) {
    const modal = document.getElementById('infoModal');
    const mTitle = document.getElementById('modalTitle');
    const mIcon = document.getElementById('modalIcon');
    const mBody = document.getElementById('modalBody');

    if (modal && mTitle && mIcon && mBody) {
        mTitle.innerText = title;
        mIcon.innerHTML = iconHtml;
        mIcon.className = `w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${bgClass}`;
        mBody.innerHTML = bodyContent;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

// ৩. মডাল বন্ধ করার ফাংশন
window.closeInfoModal = function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ৪. নির্দিষ্ট বাটনগুলোর জন্য ফাংশন
window.openWelcomeModal = function() {
    showModal('শুভেচ্ছা বাণী', '<i class="fas fa-handshake"></i>', 'bg-blue-100 text-blue-600', '<p>আল-হারামাইন মডেল মাদ্রাসায় আপনাকে স্বাগতম। আমরা মানসম্মত দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে গড়ে তুলছি আগামীর প্রজন্ম।</p>');
}

window.openDirectorModal = function() {
    showModal('পরিচালকের বাণী', '<i class="fas fa-user-tie"></i>', 'bg-emerald-100 text-emerald-600', '<p>আমাদের মাদ্রাসার লক্ষ্য হলো শিক্ষার্থীদের সুনাগরিক হিসেবে গড়ে তোলা। সকলের দোয়া ও সহযোগিতা কাম্য।</p>');
}

window.openPrincipalModal = function() {
    showModal('প্রধান শিক্ষকের বাণী', '<i class="fas fa-graduation-cap"></i>', 'bg-indigo-100 text-indigo-600', '<p>শৃঙ্খলাই সাফল্যের চাবিকাঠি। আমাদের শিক্ষকমণ্ডলী শিক্ষার্থীদের পাঠদানের ব্যাপারে অত্যন্ত সচেষ্ট।</p>');
}

window.openDeptModal = function(dept) {
    let title = "বিভাগীয় তথ্য";
    let content = "এই বিভাগের বিস্তারিত তথ্য শীঘ্রই আপডেট করা হবে।";
    showModal(title, '<i class="fas fa-book"></i>', 'bg-purple-100 text-purple-600', `<p>${content}</p>`);
}

window.openAchieveModal = function(type) {
    showModal('অর্জন সমূহ', '<i class="fas fa-trophy"></i>', 'bg-amber-100 text-amber-600', '<p>আমাদের শিক্ষার্থীরা প্রতি বছর বোর্ড পরীক্ষায় ও বৃত্তিতে অভাবনীয় সাফল্য অর্জন করে আসছে।</p>');
}
