// بيانات البطاقات
const cardsData = {
    letters: [
        { image: 'imgs/letters/letter1.jpg', caption: 'الحرف أ' },
        { image: 'imgs/letters/letter2.jpg', caption: 'الحرف ب' },
        { image: 'imgs/letters/letter3.jpg', caption: 'الحرف ت' },
        { image: 'imgs/letters/letter4.jpg', caption: 'الحرف ث' },
        { image: 'imgs/letters/letter5.jpg', caption: 'الحرف ج' },
        { image: 'imgs/letters/letter6.jpg', caption: 'الحرف ح' },
        { image: 'imgs/letters/letter7.jpg', caption: 'الحرف خ' },
        { image: 'imgs/letters/letter8.jpg', caption: 'الحرف د' },
        { image: 'imgs/letters/letter9.jpg', caption: 'الحرف ذ' },
        { image: 'imgs/letters/letter10.jpg', caption: 'الحرف ر' },
        { image: 'imgs/letters/letter11.jpg', caption: 'الحرف ز' },
        { image: 'imgs/letters/letter12.jpg', caption: 'الحرف س' },
        { image: 'imgs/letters/letter13.jpg', caption: 'الحرف ش' },
        { image: 'imgs/letters/letter14.jpg', caption: 'الحرف ص' },
        { image: 'imgs/letters/letter15.jpg', caption: 'الحرف ض' },
        { image: 'imgs/letters/letter16.jpg', caption: 'الحرف ط' },
        { image: 'imgs/letters/letter17.jpg', caption: 'الحرف ظ' },
        { image: 'imgs/letters/letter18.jpg', caption: 'الحرف ع' },
        { image: 'imgs/letters/letter19.jpg', caption: 'الحرف غ' },
        { image: 'imgs/letters/letter20.jpg', caption: 'الحرف ف' },
        { image: 'imgs/letters/letter21.jpg', caption: 'الحرف ق' },
        { image: 'imgs/letters/letter22.jpg', caption: 'الحرف ك' },
        { image: 'imgs/letters/letter23.jpg', caption: 'الحرف ل' },
        { image: 'imgs/letters/letter24.jpg', caption: 'الحرف م' },
        { image: 'imgs/letters/letter25.jpg', caption: 'الحرف ن' },
        { image: 'imgs/letters/letter26.jpg', caption: 'الحرف ه' },
        { image: 'imgs/letters/letter27.jpg', caption: 'الحرف و' },
        { image: 'imgs/letters/letter28.jpg', caption: 'الحرف ي' }
    ],
    numbers: [
        { image: 'imgs/numbers/number0.jpg', caption: 'رقم 0' },
        { image: 'imgs/numbers/number1.jpg', caption: 'رقم 1' },
        { image: 'imgs/numbers/number2.jpg', caption: 'رقم 2' },
        { image: 'imgs/numbers/number3.jpg', caption: 'رقم 3' },
        { image: 'imgs/numbers/number4.jpg', caption: 'رقم 4' },
        { image: 'imgs/numbers/number5.jpg', caption: 'رقم 5' },
        { image: 'imgs/numbers/number6.jpg', caption: 'رقم 6' },
        { image: 'imgs/numbers/number7.jpg', caption: 'رقم 7' },
        { image: 'imgs/numbers/number8.jpg', caption: 'رقم 8' },
        { image: 'imgs/numbers/number9.jpg', caption: 'رقم 9' },
        { image: 'imgs/numbers/number10.jpg', caption: 'رقم 10' },
        { image: 'imgs/numbers/number11.jpg', caption: 'رقم 11' },
        { image: 'imgs/numbers/number12.jpg', caption: 'رقم 12' },
        { image: 'imgs/numbers/number13.jpg', caption: 'رقم 13' },
        { image: 'imgs/numbers/number14.jpg', caption: 'رقم 14' },
        { image: 'imgs/numbers/number15.jpg', caption: 'رقم 15' },
        { image: 'imgs/numbers/number16.jpg', caption: 'رقم 16' },
        { image: 'imgs/numbers/number17.jpg', caption: 'رقم 17' },
        { image: 'imgs/numbers/number18.jpg', caption: 'رقم 18' },
        { image: 'imgs/numbers/number19.jpg', caption: 'رقم 19' },
        { image: 'imgs/numbers/number20.jpg', caption: 'رقم 20' }
    ],
    words: [
        { image: 'imgs/words/word1.jpg', caption: 'كلمة "أراك لاحقا"' },
        { image: 'imgs/words/word2.jpg', caption: 'كلمة "لا"' },
        { image: 'imgs/words/word3.jpg', caption: 'كلمة "عمل جيد"' },
        { image: 'imgs/words/word4.jpg', caption: 'كلمة "حقا أحبك"' },
        { image: 'imgs/words/word5.jpg', caption: 'كلمة "موافق"' },
        { image: 'imgs/words/word6.jpg', caption: 'كلمة "أحبك"' },
        { image: 'imgs/words/word7.jpg', caption: 'كلمة "أضحكتني"' },
        { image: 'imgs/words/word8.jpg', caption: 'كلمة "لست متأكد"' },
        { image: 'imgs/words/word9.jpg', caption: 'كلمة "لست متأكد"' },
        { image: 'imgs/words/word10.jpg', caption: 'كلمة "مرحبا"' },
        { image: 'imgs/words/word11.jpg', caption: 'كلمة "اقتباس"' },
        { image: 'imgs/words/word12.jpg', caption: 'كلمة "رهيب"' },
        { image: 'imgs/words/word13.jpg', caption: 'كلمة "أنت"' },
        { image: 'imgs/words/word14.jpg', caption: 'كلمة "سؤال"' },
        { image: 'imgs/words/word15.jpg', caption: 'كلمة "ممتاز"' }
    ]
};

let currentGalleryType = '';
let currentImageIndex = 0;

// عرض المعرض
function showGallery(type) {
    currentGalleryType = type;
    currentImageIndex = 0;
    updateGalleryImage();
    document.getElementById('gallery-container').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// تحديث الصورة المعروضة
function updateGalleryImage() {
    const gallery = cardsData[currentGalleryType];
    const currentCard = gallery[currentImageIndex];
    
    const imgElement = document.getElementById('gallery-image');
    imgElement.src = currentCard.image;
    imgElement.alt = currentCard.caption;
    
    document.getElementById('image-caption').textContent = currentCard.caption;
    document.getElementById('gallery-title').textContent = getGalleryTitle(currentGalleryType);
    
    // تحديث العداد
    updateGalleryCounter(currentImageIndex + 1, gallery.length);
}

// العناوين حسب النوع
function getGalleryTitle(type) {
    const titles = {
        'letters': 'بطاقات الحروف',
        'numbers': 'بطاقات الأرقام',
        'words': 'بطاقات الكلمات'
    };
    return titles[type] || 'معرض الصور';
}

// تحديث العداد
function updateGalleryCounter(current, total) {
    document.getElementById('gallery-counter').textContent = `${current}/${total}`;
}

// الصورة التالية
function prevImage() {
    const gallery = cardsData[currentGalleryType];
    if (currentImageIndex < gallery.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateGalleryImage();
}

// الصورة السابقة
function nextImage() {
    const gallery = cardsData[currentGalleryType];
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = gallery.length - 1;
    }
    updateGalleryImage();
}

// إغلاق المعرض
function closeGallery() {
    document.getElementById('gallery-container').classList.remove('active');
    document.body.style.overflow = '';
}

// التنقل بلوحة المفاتيح
document.addEventListener('keydown', function(e) {
    const gallery = document.getElementById('gallery-container');
    if (gallery.classList.contains('active')) {
        if (e.key === 'ArrowRight') prevImage();
        if (e.key === 'ArrowLeft') nextImage();
        if (e.key === 'Escape') closeGallery();
    }
});

// دالة لتحميل شريط التنقل في كل صفحة
function loadNavbar() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const navbarHtml = `
        <div class="navbar">
            <div class="navbar-links left-links">
                <button class="navbar-btn" onclick="window.location.href='about.html'">النبذة</button>
            </div>
            
            <div class="navbar-logo-container">
                <span class="site-name">جـــــــــســــــور</span>
            </div>
            
            <div class="navbar-links right-links">
                ${currentUser ? `<button class="navbar-btn" onclick="logout()">تسجيل الخروج</button>` : ''}
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
}

function updateNavbar() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const usernameSpan = document.getElementById('navbar-username');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (currentUser) {
        usernameSpan.textContent = currentUser.name;
        logoutBtn.style.display = 'block';
        logoutBtn.onclick = function() {
            if (confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟')) {
                sessionStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            }
        };
    } else {
        usernameSpan.textContent = 'زائر';
        logoutBtn.style.display = 'none';
    }
}

// دالة تسجيل الخروج
function logout() {
    if (confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟')) {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

// دالة للتحقق من حالة تسجيل الدخول
function checkLogin() {
    const currentUser = sessionStorage.getItem('currentUser');
    
    // إذا لم يكن مسجلاً دخول، توجيهه إلى صفحة تسجيل الدخول
    if (!currentUser && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('register.html') && !window.location.pathname.endsWith('about.html')) {
        window.location.href = 'index.html';
    }
}

// استدعاء التحقق من تسجيل الدخول عند تحميل كل صفحة
window.onload = function() {
    loadNavbar();
    checkLogin();
};

// دالة لتحميل الحسابات من localStorage
function loadAccounts() {
    const savedAccounts = sessionStorage.getItem('accounts');
    return savedAccounts ? JSON.parse(savedAccounts) : [
        { email: "user1@example.com", password: "123456", name: "محمد أحمد" },
        { email: "user2@example.com", password: "abcdef", name: "أحمد خالد" }
    ];
}

// دالة لحفظ الحسابات في localStorage
function saveAccounts(accounts) {
    sessionStorage.setItem('accounts', JSON.stringify(accounts));
}

// الحصول على الحسابات
let accounts = loadAccounts();

// دالة تسجيل الدخول (كما هي)
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const account = accounts.find(acc => acc.email === email && acc.password === password);
    
    if (account) {
        sessionStorage.setItem('currentUser', JSON.stringify(account));
        window.location.href = 'home.html';
    } else {
        alert('البريد الإلكتروني أو كلمة السر غير صحيحة');
    }
}

// دالة إنشاء حساب جديد (معدلة لحفظ الحسابات)
function register() {
    console.log("HI");
    const username = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const name = document.getElementById('name').value;
    
    if (username.length < 8 || password.length < 8 || name < 2) {
        alert('خطأ في تسجيل البيانات, تأكد أن طول اسم المستخدم وكلمة السر أكبر من 8, حاول مجددًا');
        return;
    }

    if (accounts.some(acc => acc.email === username)) {
        alert('هذا البريد الإلكتروني مسجل بالفعل');
        return;
    }
    
    // إضافة الحساب الجديد
    const newAccount = { email: username, password, name };
    accounts.push(newAccount);
    saveAccounts(accounts);
    
    alert('تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.');
    window.location.href = 'index.html';
}

// دالة لتحميل معلومات الحساب (كما هي)
function loadAccountInfo() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('account-name').textContent = currentUser.name;
        document.getElementById('account-email').textContent = currentUser.email;
    }
}

