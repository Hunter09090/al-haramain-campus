/**
 * Data Configuration File
 * Contains all modal data and messages
 */

const achieveData = {
    'boardModal': {
        title: 'বোর্ড সমাপনী পরীক্ষা',
        icon: '<i class="fas fa-file-invoice"></i>',
        bg: 'bg-blue-100 text-blue-600',
        desc: `
            <div class="space-y-4">
                <div class="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
                    <h4 class="font-bold text-blue-900 text-sm">বিগত ইবতেদায়ী সমাপনী পরীক্ষার ফলাফল:</h4>
                    <p class="text-xs mt-1 text-gray-700">আমাদের মাদ্রাসা প্রতিষ্ঠার পর থেকে সমাপনী পরীক্ষায় শতভাগ পাস হার বজায় রেখেছে।</p>
                </div>
                <div class="grid grid-cols-2 gap-2 text-center">
                    <div class="bg-gray-50 p-2.5 rounded border"><p class="text-xs text-gray-500">মোট জিপিএ-৫</p><p class="text-xl font-bold text-blue-600">১২ জন</p></div>
                    <div class="bg-gray-50 p-2.5 rounded border"><p class="text-xs text-gray-500">পাসের হার</p><p class="text-xl font-bold text-emerald-600">১০০%</p></div>
                </div>
                <p class="text-xs text-gray-600">শুদ্ধ পদ্ধতিতে পাঠদান এবং নিয়মিত পরীক্ষা নেওয়ার ফলস্বরূপ এই সাফল্য অর্জিত হয়েছে।</p>
            </div>
        `
    },
    'govModal': {
        title: 'ইবতেদায়ী সরকারি বৃত্তি',
        icon: '<i class="fas fa-award"></i>',
        bg: 'bg-emerald-100 text-emerald-600',
        desc: `বৃত্তিপ্রাপ্ত শিক্ষার্থীদের তালিকা এবং তাদের অর্জন দেখুন।`
    },
    'pvtModal': {
        title: 'বেসরকারি বৃত্তি সমূহ',
        icon: '<i class="fas fa-medal"></i>',
        bg: 'bg-purple-100 text-purple-600',
        desc: `বিভিন্ন বেসরকারি প্রতিষ্ঠান থেকে বৃত্তিপ্রাপ্ত শিক্ষার্থী।`
    }
};

const deptData = {
    'nurani': {
        title: 'আদর্শ নুরানী বিভাগ',
        icon: '<i class="fas fa-book-open"></i>',
        bg: 'bg-blue-100 text-blue-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• নার্সারি হতে তৃতীয় শ্রেণী পর্যন্ত নুরানী শিক্ষা</li><li>• অভিজ্ঞ শিক্ষকদের দ্বারা শুদ্ধ তিলাওয়াত শিক্ষা</li></ul>`
    },
    'ebtedayi': {
        title: 'ইবতেদায়ী বিভাগ',
        icon: '<i class="fas fa-school"></i>',
        bg: 'bg-emerald-100 text-emerald-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• চতুর্থ থেকে ৫ম শ্রেণী</li></ul>`
    },
    'dakhil': {
        title: 'দাখিল বিভাগ',
        icon: '<i class="fas fa-user-graduate"></i>',
        bg: 'bg-purple-100 text-purple-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• ৬ষ্ট থেকে অষ্টম শ্রেণী</li></ul>`
    },
    'hifz-boy': {
        title: 'মডেল হিফজ বিভাগ (বালক)',
        icon: '<i class="fas fa-quran"></i>',
        bg: 'bg-amber-100 text-amber-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• ছাত্রদের জন্য হিফজ প্রশিক্ষণ</li></ul>`
    },
    'hifz-girl': {
        title: 'মডেল হিফজ বিভাগ (বালিকা)',
        icon: '<i class="fas fa-heart"></i>',
        bg: 'bg-pink-100 text-pink-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• ছাত্রীদের জন্য নিরাপদ পরিবেশে হিফজ</li></ul>`
    },
    'maktab': {
        title: 'মডেল মক্তব বিভাগ (প্রস্তাবিত)',
        icon: '<i class="fas fa-star-and-crescent"></i>',
        bg: 'bg-teal-100 text-teal-600',
        desc: `<p><b>ভবিষ্যৎ পরিকল্পনা:</b></p><ul class="mt-2 space-y-1"><li>• স্কুলগামী শিশুদের জন্য কোরআন শিক্ষা</li></ul>`
    },
    'adult': {
        title: 'বয়স্ক কোরআন শিক্ষা বিভাগ (প্রস্তাবিত)',
        icon: '<i class="fas fa-mosque"></i>',
        bg: 'bg-orange-100 text-orange-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• যেকোনো বয়সের কর্মজীবী মানুষের জন্য কোরআন শিক্ষা</li></ul>`
    }
};

const messages = {
    welcome: `<p class="font-bold text-blue-900 mb-2">বিসমিল্লাহির রাহমানির রাহিম</p><p>সবাইকে আল-হারামাইন মডেল মাদ্রাসার ডিজিটাল ক্যাম্পাসে আন্তরিক শুভেচ্ছা ও স্বাগতম।</p>`,
    director: `<p class="font-bold text-center text-emerald-800 mb-2">মাওলানা মোহাম্মদ জুনাইদ বোগদাদি</p><p class="text-xs text-center text-gray-500 italic mb-3">পরিচালক, আল-হারামাইন মডেল মাদ্রাসা</p><p>আলহামদুলিল্লাহ, দ্বীনি শিক্ষার এক অনন্য নির্ভরযোগ্য প্রতিষ্ঠান আল-হারামাইন মডেল মাদ্রাসা।</p>`,
    principal: `<p class="font-bold text-indigo-900 mb-2">সম্মানিত সুধী ও অভিভাবকবৃন্দ,</p><p>আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। একটি আদর্শ সমাজ বিনির্মাণে নৈতিক ও ধর্মীয় শিক্ষার ভূমিকা অপরিসীম।</p>`
};