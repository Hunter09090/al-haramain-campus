// ১. পেজ লোড হওয়ার সাথে সাথে মডাল লুকানো নিশ্চিত করা
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

// ২. মূল মডাল ফাংশন
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

// ৪. সব বাটন ফাংশন একত্রে
window.openWelcomeModal = () => showModal('শুভেচ্ছা বাণী', '<i class="fas fa-handshake"></i>', 'bg-blue-100 text-blue-600', '<p>আল-হারামাইন মডেল মাদ্রাসায় আপনাকে স্বাগতম। আমরা মানসম্মত দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে গড়ে তুলছি আগামীর প্রজন্ম।</p>');

window.openDirectorModal = () => showModal('পরিচালকের বাণী', '<i class="fas fa-user-tie"></i>', 'bg-emerald-100 text-emerald-600', '<p>শিক্ষাই জাতির মেরুদণ্ড। আমরা প্রতিটি শিক্ষার্থীকে আদর্শ মানুষ হিসেবে গড়ে তুলতে বদ্ধপরিকর।</p>');

window.openPrincipalModal = () => showModal('প্রধান শিক্ষকের বাণী', '<i class="fas fa-graduation-cap"></i>', 'bg-indigo-100 text-indigo-600', '<p>শৃঙ্খলাই সাফল্যের চাবিকাঠি। আমাদের শিক্ষকমণ্ডলী শিক্ষার্থীদের পাঠদানের ব্যাপারে অত্যন্ত সচেষ্ট।</p>');

// বিভাগসমূহ
window.openDeptModal = function(dept) {
    const data = {
        'nurani': { title: "আদর্শ নুরানী বিভাগ", content: "সহীহ পদ্ধতিতে কুরআন তিলাওয়াত ও প্রাথমিক দ্বীনি শিক্ষা।" },
        'ebtedayi': { title: "ইবতেদায়ী বিভাগ", content: "প্রাথমিক ধর্মীয় ও সাধারণ শিক্ষার সুন্দর সমন্বয়।" },
        'dakhil': { title: "দাখিল বিভাগ", content: "উচ্চতর ইসলামি জ্ঞান ও আধুনিক প্রযুক্তিনির্ভর শিক্ষা।" },
        'hifz-boy': { title: "হিফজ বিভাগ (বালক)", content: "তাজবিদ সহ সম্পূর্ণ কুরআন হিফজের সুব্যবস্থা।" },
        'hifz-girl': { title: "হিফজ বিভাগ (বালিকা)", content: "পর্দা ও নিরাপদ পরিবেশে হিফজ শিক্ষা।" }
    };
    const d = data[dept] || { title: "বিভাগ", content: "তথ্য শীঘ্রই আপডেট করা হবে।" };
    showModal(d.title, '<i class="fas fa-book"></i>', 'bg-purple-100 text-purple-600', `<p>${d.content}</p>`);
}

// অর্জনসমূহ
window.openAchieveModal = function(type) {
    const data = {
        'board': { title: "বোর্ড পরীক্ষা", content: "বিগত বছরগুলোতে পাসের হার ও জিপিএ-৫ এ অভাবনীয় সাফল্য।" },
        'gov': { title: "সরকারি বৃত্তি", content: "উপজেলায় একক প্রতিষ্ঠান হিসেবে সর্বোচ্চ বৃত্তি প্রাপ্তির গৌরব।" },
        'pvt': { title: "বেসরকারি বৃত্তি", content: "বিভিন্ন ট্যালেন্ট হান্ট পরীক্ষায় শিক্ষার্থীদের মেধার স্বাক্ষর।" }
    };
    const a = data[type] || { title: "অর্জন", content: "তথ্য আপডেট করা হবে।" };
    showModal(a.title, '<i class="fas fa-trophy"></i>', 'bg-amber-100 text-amber-600', `<p>${a.content}</p>`);
}
