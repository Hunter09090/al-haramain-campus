// ১. পেজ লোড হওয়ার সাথে সাথে মডাল লুকানো নিশ্চিত করা
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

// ২. মডাল খোলার মূল ফাংশন
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

// ৪. বাণীর বিস্তারিত (Bani)
window.openWelcomeModal = function() {
    showModal('শুভেচ্ছা বাণী', '<i class="fas fa-handshake"></i>', 'bg-blue-100 text-blue-600', '<p>আল-হারামাইন মডেল মাদ্রাসার ডিজিটাল ক্যাম্পাসে আপনাদের স্বাগতম। ২০১৩ সাল থেকে আমরা অত্যন্ত সুনামের সাথে দ্বীনি ও আধুনিক শিক্ষার অপূর্ব সমন্বয় ঘটিয়ে আসছি। শিক্ষার্থীদের সুন্দর ভবিষ্যৎ ও আদর্শ নাগরিক হিসেবে গড়ে তোলাই আমাদের লক্ষ্য।</p>');
}

window.openDirectorModal = function() {
    showModal('পরিচালকের বাণী', '<i class="fas fa-user-tie"></i>', 'bg-emerald-100 text-emerald-600', '<p>শিক্ষা শুধু জ্ঞান অর্জন নয়, চরিত্র গঠনের ভিত্তি। আমাদের লক্ষ্য এমন প্রজন্ম গড়ে তোলা যারা দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে উম্মাহর কল্যাণে কাজ করবে।<br><br><strong>মাওলানা মোহাম্মদ জুনাইদ বোগদাদি</strong><br>পরিচালক, আল-হারামাইন মডেল মাদ্রাসা</p>');
}

window.openPrincipalModal = function() {
    showModal('প্রধান শিক্ষকের বাণী', '<i class="fas fa-graduation-cap"></i>', 'bg-indigo-100 text-indigo-600', '<p>আমাদের লক্ষ্য শিক্ষার্থীদের এমনভাবে গড়ে তোলা, যাতে তারা ইসলামী আদর্শে সুসজ্জিত হওয়ার পাশাপাশি আধুনিক দক্ষতা অর্জনে এগিয়ে থাকে। সকলের দোয়া ও সহযোগিতা কামনা করছি।</p>');
}

// ৫. বিভাগীয় বিস্তারিত (Department)
window.openDeptModal = function(dept) {
    const deptData = {
        'nurani': { title: "আদর্শ নুরানী বিভাগ", content: "শুদ্ধ ও সহীহ উপায়ে কুরআন মজিদ তিলাওয়াত শিক্ষা এবং প্রয়োজনীয় দোয়া ও ইসলামি আদর্শের পাঠদান।" },
        'ebtedayi': { title: "ইবতেদায়ী বিভাগ", content: "মাদ্রাসা বোর্ডের কারিকুলাম অনুযায়ী প্রাথমিক ধর্মীয় ও সাধারণ শিক্ষার সুন্দর সমন্বয়।" },
        'dakhil': { title: "দাখিল বিভাগ", content: "উচ্চতর ইসলামি জ্ঞান ও অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত আধুনিক বিজ্ঞান ও গণিত বিষয়ক পাঠদান।" },
        'hifz-boy': { title: "মডেল হিফজ বিভাগ (বালক)", content: "তাজবিদ সহ সম্পূর্ণ কুরআন হিফজের সুব্যবস্থা এবং সার্বক্ষণিক তত্ত্বাবধান।" },
        'hifz-girl': { title: "মডেল হিফজ বিভাগ (বালিকা)", content: "সম্পূর্ণ পর্দা ও নিরাপদ পরিবেশে অভিজ্ঞ শিক্ষিকাদের দ্বারা হিফজ শিক্ষা।" },
        'maktab': { title: "মডেল মক্তব বিভাগ", content: "প্রাথমিক ইসলামি শিষ্টাচার ও নৈতিক চরিত্র গঠনের একটি চমৎকার প্রস্তাবিত কোর্স।" },
        'adult': { title: "বয়স্ক কোরআন শিক্ষা", content: "যেকোনো বয়সের মানুষের জন্য সহীহ-শুদ্ধভাবে কুরআন তিলাওয়াত ও নামাজ শিক্ষার বিশেষ ব্যবস্থা।" }
    };
    const data = deptData[dept] || { title: "তথ্য", content: "বিস্তারিত তথ্য শীঘ্রই আসছে।" };
    showModal(data.title, '<i class="fas fa-book"></i>', 'bg-purple-100 text-purple-600', `<p>${data.content}</p>`);
}

// ৬. অর্জনের বিস্তারিত (Achievement)
window.openAchieveModal = function(type) {
    const achData = {
        'boardModal': { title: "বোর্ড সমাপনী পরীক্ষা", content: "বিগত বছরগুলোতে পাসের হার ও কৃতিত্বের বিবরণ অত্যন্ত সন্তোষজনক।" },
        'govModal': { title: "ইবতেদায়ী সরকারি বৃত্তি", content: "উপজেলায় একক প্রতিষ্ঠান হিসেবে আমাদের সর্বোচ্চ বৃত্তি প্রাপ্তির গৌরব রয়েছে।" },
        'pvtModal': { title: "বেসরকারি বৃত্তি সমূহ", content: "বিভিন্ন ট্যালেন্ট হান্ট ও প্রতিযোগিতামূলক পরীক্ষায় আমাদের শিক্ষার্থীদের মেধার স্বাক্ষর প্রশংসনীয়।" }
    };
    const data = achData[type] || { title: "অর্জন সমূহ", content: "বিস্তারিত তথ্য শীঘ্রই আসছে।" };
    showModal(data.title, '<i class="fas fa-trophy"></i>', 'bg-amber-100 text-amber-600', `<p>${data.content}</p>`);
}
