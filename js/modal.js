// ১. পেজ লোড হওয়ার সাথে সাথে মডাল লুকানো নিশ্চিত করা
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

// ২. মডাল খোলার সাধারণ ফাংশন
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

// ৪. বাণীসমূহ
window.openWelcomeModal = function() {
    showModal('শুভেচ্ছা বাণী', '<i class="fas fa-handshake"></i>', 'bg-blue-100 text-blue-600', 
    `<p class="text-sm leading-relaxed text-gray-700">বিসমিল্লাহির রাহমানির রাহিম<br><br> সবাইকে আল-হারামাইন মডেল মাদ্রাসার ডিজিটাল ক্যাম্পাসে আন্তরিক শুভেচ্ছা ও অভিনন্দন। আমাদের প্রতিষ্ঠানটি ২০১৩ সাল থেকে অত্যন্ত সুনামের সাথে দ্বীনি ও আধুনিক শিক্ষার এক অপূর্ব সমন্বয় ঘটিয়ে উখিয়া উপজেলার পূর্ব সোনারপাড়ায় আলো ছড়িয়ে যাচ্ছে।<br><br> শিক্ষার্থীদের সুন্দর ভবিষ্যৎ নিশ্চিত করতে এবং নৈতিকতা সম্পন্ন আদর্শ নাগরিক হিসেবে গড়ে তুলতে আমাদের শিক্ষকমণ্ডলী সর্বদা নিবেদিতপ্রাণ। আধুনিক তথ্যপ্রযুক্তির এই যুগে আমাদের শিক্ষার্থীরা যেন পিছিয়ে না পড়ে, সেই লক্ষ্যে এই ডিজিটাল ক্যাম্পাসের সূচনা। আল্লাহ আমাদের এই পথচলাকে কবুল করুন। আমিন।</p>`);
}

window.openDirectorModal = function() {
    showModal('পরিচালকের বাণী', '<i class="fas fa-user-tie"></i>', 'bg-emerald-100 text-emerald-600', 
    `<p class="text-sm leading-relaxed text-gray-700">বিসমিল্লাহির রাহমানির রাহিম<br><br> আল-হারামাইন মডেল মাদ্রাসার পক্ষ থেকে আপনাদের সবাইকে আন্তরিক শুভেচ্ছা ও স্বাগতম। একটি আদর্শ শিক্ষাপ্রতিষ্ঠানের মূল লক্ষ্য হলো এমন প্রজন্ম গড়ে তোলা, যারা দ্বীনি জ্ঞান, নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে দেশ, জাতি ও উম্মাহর কল্যাণে অবদান রাখতে সক্ষম হবে।<br><br> আমরা বিশ্বাস করি, শিক্ষা শুধু জ্ঞান অর্জনের মাধ্যম নয়; বরং চরিত্র গঠন, মানবিক মূল্যবোধ ও আল্লাহভীতিসম্পন্ন জীবন গঠনের অন্যতম ভিত্তি। এই ওয়েবসাইটের মাধ্যমে মাদ্রাসার বিভিন্ন কার্যক্রম, তথ্য ও সেবাসমূহ আপনাদের কাছে সহজে পৌঁছে দিতে পেরে আমরা আনন্দিত। আপনাদের সহযোগিতা ও দোয়া আমাদের প্রেরণা।<br><br> <strong>মাওলানা মোহাম্মদ জুনাইদ বোগদাদি</strong><br>পরিচালক, আল-হারামাইন মডেল মাদ্রাসা</p>`);
}

window.openPrincipalModal = function() {
    showModal('প্রধান শিক্ষকের বাণী', '<i class="fas fa-graduation-cap"></i>', 'bg-indigo-100 text-indigo-600', 
    `<p class="text-sm leading-relaxed text-gray-700">বিসমিল্লাহির রাহমানির রাহিম<br><br> আল-হারামাইন মডেল মাদ্রাসার ওয়েবসাইটে আপনাকে স্বাগতম। আমাদের লক্ষ্য শিক্ষার্থীদের এমনভাবে গড়ে তোলা, যাতে তারা ইসলামী আদর্শে সুসজ্জিত হওয়ার পাশাপাশি আধুনিক জ্ঞান ও দক্ষতায় সমৃদ্ধ হয়ে সমাজে ইতিবাচক ভূমিকা রাখতে পারে।<br><br> পাঠদানের পাশাপাশি শিক্ষার্থীদের নৈতিক চরিত্র, শৃঙ্খলাবোধ, দায়িত্বশীলতা এবং দেশপ্রেমের শিক্ষা প্রদানেও আমরা গুরুত্ব দিয়ে থাকি। অভিভাবক ও শুভানুধ্যায়ীদের সাথে কার্যকর যোগাযোগের মাধ্যম হিসেবে এই ওয়েবসাইটটি গুরুত্বপূর্ণ ভূমিকা রাখবে। সকলের দোয়া ও সহযোগিতা কামনা করছি।<br><br> <strong>প্রধান শিক্ষক</strong><br>আল-হারামাইন মডেল মাদ্রাসা</p>`);
}

// ৫. বিভাগসমূহ
window.openDeptModal = function(dept) {
    let title = "", content = "", icon = "", bg = "";
    if (dept === 'nurani') {
        title = "আদর্শ নুরানী বিভাগ"; icon = '<i class="fas fa-book-open"></i>'; bg = 'bg-blue-100 text-blue-600';
        content = "<ul class='list-disc pl-5 space-y-1 text-sm'><li>নার্সারি থেকে তৃতীয় শ্রেণি।</li><li>সহীহ মাখরাজে কুরআন, দোয়া, সূরা ও নামাজ শিক্ষা।</li><li>নূরানী বোর্ড সমাপনী পরীক্ষায় শতভাগ পাশ ও A+ নিশ্চয়তা।</li><li>নিরাপদ পরিবেশ ও আদব-আখলাক গঠন।</li></ul>";
    } else if (dept === 'ebtedayi') {
        title = "ইবতেদায়ী বিভাগ"; icon = '<i class="fas fa-school"></i>'; bg = 'bg-emerald-100 text-emerald-600';
        content = "<ul class='list-disc pl-5 space-y-1 text-sm'><li>৪র্থ ও ৫ম শ্রেণি।</li><li>কুরআন, হাদীস, ফিকহ, আরবি ও সাধারণ বিষয়ের সমন্বিত পাঠদান।</li><li>সরকারি প্রাথমিক সমাপনী বৃত্তি পরীক্ষায় উপজেলার সর্বোচ্চ সাফল্য।</li></ul>";
    } else if (dept === 'dakhil') {
        title = "দাখিল বিভাগ"; icon = '<i class="fas fa-user-graduate"></i>'; bg = 'bg-purple-100 text-purple-600';
        content = "<ul class='list-disc pl-5 space-y-1 text-sm'><li>৬ষ্ঠ থেকে ৮ম শ্রেণি।</li><li>মাদ্রাসা বোর্ডের পাঠ্যক্রম অনুযায়ী পরিচালিত।</li><li>গণিত, ইংরেজি, আরবি সাহিত্য, বিজ্ঞান ও ICT বিষয়ক আধুনিক পাঠদান।</li></ul>";
    } else if (dept === 'hifz-boy') {
        title = "মডেল হিফজ বিভাগ (বালক)"; icon = '<i class="fas fa-quran"></i>'; bg = 'bg-amber-100 text-amber-600';
        content = "<ul class='list-disc pl-5 space-y-1 text-sm'><li>যোগ্য হাফেজ শিক্ষকদের তত্ত্বাবধানে সম্পূর্ণ কুরআন হিফজ।</li><li>হিফজের পাশাপাশি বাংলা, ইংরেজি ও সাধারণ গণিত শিক্ষা।</li></ul>";
    } else if (dept === 'hifz-girl') {
        title = "মডেল হিফজ বিভাগ (বালিকা)"; icon = '<i class="fas fa-heart"></i>'; bg = 'bg-pink-100 text-pink-600';
        content = "<ul class='list-disc pl-5 space-y-1 text-sm'><li>পর্দা ও নিরাপদ পরিবেশে কুরআন হিফজের সুযোগ।</li><li>দক্ষ মহিলা শিক্ষকদের তত্ত্বাবধানে পাঠদান।</li><li>ইসলামী আদব-আখলাক ও সাধারণ শিক্ষা।</li></ul>";
    } else if (dept === 'maktab') {
        title = "মডেল মক্তব বিভাগ"; icon = '<i class="fas fa-star-and-crescent"></i>'; bg = 'bg-teal-100 text-teal-600';
        content = "<p class='text-sm'>সাধারণ শিক্ষার্থী, চাকরিজীবী ও বিভিন্ন বয়সের মানুষের জন্য কুরআন তিলাওয়াত, নামাজ শিক্ষা, মাসআলা-মাসায়েল ও প্রয়োজনীয় দ্বীনি মৌলিক বিষয়সমূহ শিক্ষাদান।</p>";
    } else if (dept === 'adult') {
        title = "বয়স্ক কোরআন শিক্ষা"; icon = '<i class="fas fa-mosque"></i>'; bg = 'bg-orange-100 text-orange-600';
        content = "<p class='text-sm'>সহজ ও কার্যকর পদ্ধতিতে সহীহ কুরআন তিলাওয়াত, নামাজ শিক্ষা এবং প্রয়োজনীয় দ্বীনি জ্ঞান প্রদান করা হয়।</p>";
    }
    showModal(title, icon, bg, content);
}

// ৬. অর্জন সমূহ
window.openAchieveModal = function(type) {
    let title = "", content = "";
    if (type === 'boardModal') {
        title = "বোর্ড সমাপনী পরীক্ষা";
        content = "<ul class='list-none space-y-2 text-sm'><li><b>২০২৩ সাল:</b> ১০০% পাশ, A+ ১৪ জন</li><li><b>২০২৪ সাল:</b> ১০০% পাশ, A+ ০৭ জন</li><li><b>২০২৫ সাল:</b> ১০০% পাশ, A+ ০৯ জন</li></ul>";
    } else if (type === 'govModal') {
        title = "ইবতেদায়ী সরকারি বৃত্তি";
        content = "<p class='text-sm mb-2'>উখিয়া উপজেলায় একক প্রতিষ্ঠান হিসেবে সর্বোচ্চ ০৪ জন বৃত্তিপ্রাপ্ত:</p><ul class='list-decimal pl-5 space-y-1 text-sm'><li>ইতমামুল হক ইরাম (ট্যালেন্টপুল)</li><li>বিনতাশা হোসেন বুশরা (সাধারণ)</li><li>ফাতেমা আক্তার (সাধারণ)</li><li>মোহাম্মদ শাকিল (সাধারণ)</li></ul>";
    } else if (type === 'pvtModal') {
        title = "বেসরকারি বৃত্তি সমূহ";
        content = "<div class='text-sm space-y-2'><p><b>১. উখিয়া শিক্ষা কল্যাণ বৃত্তি:</b><br>২০২৪ ও ২০২৫ সালে মোট ১০ জন শিক্ষার্থী বৃত্তি লাভ করে।</p><p><b>২. দারুল মাকাম নুরানী এসোসিয়েশন:</b><br>২০২৫ সালে ১৭ জন শিক্ষার্থী ট্যালেন্ট ও সাধারণ বৃত্তি লাভ করে।</p><p><b>৩. স্বর্ণপদক বৃত্তি:</b><br>২০২৫ সালে আলোকিত মেধাবিকাশ স্বর্ণপদক বৃত্তি লাভ করে ০১ জন।</p><p class='mt-3 text-emerald-700 font-bold'>ইনশাআল্লাহ এই সফলতার ধারা অব্যাহত থাকবে।</p></div>";
    }
    showModal(title, '<i class="fas fa-trophy"></i>', 'bg-amber-100 text-amber-600', content);
}
