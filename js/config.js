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
        desc: `
            <div class="space-y-3">
                <div class="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded">
                    <h4 class="font-bold text-emerald-900 text-sm">উপজেলায় একক প্রতিষ্ঠান হিসেবে সর্বোচ্চ গৌরব</h4>
                </div>
                <p class="text-xs text-gray-600 font-semibold mb-2">🌟 ট্যালেন্টপুল ও সাধারণ গ্রেডে বৃত্তিপ্রাপ্ত শিক্ষার্থী</p>
                
                <div class="space-y-2.5">
                    <div class="flex items-center gap-3 bg-gray-50 p-2 rounded border">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">ই</div>
                        <div>
                            <h5 class="font-bold text-gray-800 text-xs">ইতমামুল হক ইরাম</h5>
                            <p class="text-[10px] text-emerald-700 font-medium">মেধা স্থান: ১ম (ট্যালেন্টপুল)</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 bg-gray-50 p-2 rounded border">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">ব</div>
                        <div>
                            <h5 class="font-bold text-gray-800 text-xs">বিনতাশা হোসেন বুশরা</h5>
                            <p class="text-[10px] text-emerald-700 font-medium">মেধা স্থান: ৩য় (সাধারণ)</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 bg-gray-50 p-2 rounded border">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">ফ</div>
                        <div>
                            <h5 class="font-bold text-gray-800 text-xs">ফাতেমা আক্তার</h5>
                            <p class="text-[10px] text-emerald-700 font-medium">মেধা স্থান: ৫ম (সাধারণ গ্রেড)</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 bg-gray-50 p-2 rounded border">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">ম</div>
                        <div>
                            <h5 class="font-bold text-gray-800 text-xs">মোহাম্মদ শাকিল</h5>
                            <p class="text-[10px] text-emerald-700 font-medium">মেধা স্থান: ৮ম (সাধারণ গ্রেড)</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'pvtModal': {
        title: 'বেসরকারি বৃত্তি সমূহ',
        icon: '<i class="fas fa-medal"></i>',
        bg: 'bg-purple-100 text-purple-600',
        desc: `
            <div class="space-y-3">
                <div class="bg-purple-50 border-l-4 border-purple-600 p-3 rounded">
                    <h4 class="font-bold text-purple-900 text-sm">বিভিন্ন ট্যালেন্ট হান্ট ও মেধা বৃত্তি পরীক্ষা</h4>
                </div>
                <p class="text-xs text-gray-600">আমাদের মাদ্রাসার শিক্ষার্থীরা প্রতি বছর স্থানীয় ও জাতীয় পর্যায়ে বিভিন্ন বৃত্তি অর্জন করছে।</p>
                <ul class="text-xs text-gray-700 space-y-1.5 pl-1">
                    <li>• <b>নুরানী তালীমুল কুরআন বোর্ড:</b> ক্বিরাত ও হিফজ প্রতিযোগিতায় একাধিক পুরস্কার</li>
                    <li>• <b>স্থানীয় শিক্ষা ট্রাস্ট বৃত্তি:</b> বিগত বছরগুলোতে সর্বমোট ১৫ জন শিক্ষার্থী নির্বাচিত</li>
                </ul>
            </div>
        `
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
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• চতুর্থ থেকে ৫ম শ্রেণী পর্যন্ত সাধারণ স্কুল কারিকুলাম</li></ul>`
    },
    'dakhil': {
        title: 'দাখিল বিভাগ',
        icon: '<i class="fas fa-user-graduate"></i>',
        bg: 'bg-purple-100 text-purple-600',
        desc: `<p><b>বৈশিষ্ট্যসমূহ:</b></p><ul class="mt-2 space-y-1"><li>• ৬ষ্ট থেকে অষ্টম শ্রেণী পর্যন্ত ইসলামি শিক্ষা</li></ul>`
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
    director: `<p class="font-bold text-center text-emerald-800 mb-2">মাওলানা মোহাম্মদ জুনাইদ বোগদাদি</p><p class="text-xs text-center text-gray-500 italic mb-3">পরিচালক, আল-হারামাইন মডেল মাদ্রাসা</p><p>আলহামদুলিল্লাহ, দ্বীনি শিক্ষার এক অনন্য নির্ভরযোগ্য প্রতিষ্ঠান।</p>`,
    principal: `<p class="font-bold text-indigo-900 mb-2">সম্মানিত সুধী ও অভিভাবকবৃন্দ,</p><p>আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। একটি আদর্শ সমাজ বিনির্মাণে নৈতিক শিক্ষা অপরিহার্য।</p>`
};