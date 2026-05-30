// ওয়েবসাইট লোড হওয়ার পর কিছু অ্যানিমেশন বা মেসেজ
window.onload = () => {
    console.log("আল-হারামাইন ক্যাম্পাস ওয়েবসাইট সফলভাবে লোড হয়েছে!");
    
    // বাটন ক্লিক ইভেন্ট
    const btn = document.querySelector('button');
    if(btn) {
        btn.addEventListener('click', () => {
            alert('ওয়েবসাইটে স্বাগতম!');
        });
    }
};
