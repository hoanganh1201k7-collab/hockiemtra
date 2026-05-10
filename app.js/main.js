const imgT1_Cafe = "img/test1a.png"; 
const imgT1_TV = "img/test1b.png"; 
const imgT2_College = "img/test2a.png"; 
const imgT2_Boat = "img/test2b.png"; 
const imgT3_Camp = "img/test3a.png"; 
const imgT3_Coach = "img/test3b.png"; 
const imgT4_Club = "img/test4a.png"; 
const imgT4_Museum = "img/test4b.png"; 
const imgT5_Book = "img/test5a.png"; 
const imgT5_School = "img/test5b.png"; 

const db = [
    { test: 1, part: 'A', q: "What is the address of the café?", a: "It is at 14 Park Street.", img: imgT1_Cafe },
    { test: 1, part: 'A', q: "What does it sell?", a: "It sells hundreds of ice cream including banana, chocolate and lemon.", img: imgT1_Cafe },
    { test: 1, part: 'A', q: "Does it open on Sundays?", a: "Yes, it does.", img: imgT1_Cafe },
    { test: 1, part: 'A', q: "What time does it close?", a: "It closes at 10 p.m.", img: imgT1_Cafe },
    { test: 1, part: 'A', q: "Can I eat outdoors?", a: "Yes, you can sit indoors or in the garden.", img: imgT1_Cafe },
    { test: 1, part: 'B', q: "What is the name of the TV programme?", a: "It is Dinner with Pat.", img: imgT1_TV },
    { test: 1, part: 'B', q: "What is the programme about?", a: "It is about cooking and food from around the world.", img: imgT1_TV },
    { test: 1, part: 'B', q: "Is it for children?", a: "Yes, it is. It is for all the family.", img: imgT1_TV },
    { test: 1, part: 'B', q: "Can I watch it everyday?", a: "No, you can watch it from Monday to Friday.", img: imgT1_TV },
    { test: 1, part: 'B', q: "What is its website?", a: "It is www.cooking.com.", img: imgT1_TV },

    { test: 2, part: 'A', q: "What is the name of the college?", a: "It is City Art College.", img: imgT2_College },
    { test: 2, part: 'A', q: "What can I learn there?", a: "You can learn Art, Music and Film studies.", img: imgT2_College },
    { test: 2, part: 'A', q: "Where is it?", a: "It is at 20 Green Street.", img: imgT2_College },
    { test: 2, part: 'A', q: "Is it a big college?", a: "No, it isn't. It is small and friendly.", img: imgT2_College },
    { test: 2, part: 'A', q: "What is its website?", a: "It is www.city.com.", img: imgT2_College },
    { test: 2, part: 'B', q: "How old is the boat?", a: "It is 6 years old.", img: imgT2_Boat },
    { test: 2, part: 'B', q: "How much does it cost?", a: "It is only $900.", img: imgT2_Boat },
    { test: 2, part: 'B', q: "Is it good for beginners?", a: "Yes, it is great for learning to sail.", img: imgT2_Boat },
    { test: 2, part: 'B', q: "Is it big?", a: "No, it isn't. It is only 4 metres long.", img: imgT2_Boat },
    { test: 2, part: 'B', q: "What is the phone number?", a: "It is 682249.", img: imgT2_Boat },

    { test: 3, part: 'A', q: "When does the campsite open?", a: "It opens all year.", img: imgT3_Camp },
    { test: 3, part: 'A', q: "Is it for children?", a: "Yes, it is for all the family.", img: imgT3_Camp },
    { test: 3, part: 'A', q: "How much does a tent cost?", a: "It costs $5 a tent per night.", img: imgT3_Camp },
    { test: 3, part: 'A', q: "What should I take?", a: "You should take your swimming costume.", img: imgT3_Camp },
    { test: 3, part: 'A', q: "What is its website?", a: "It is www.camping.com.", img: imgT3_Camp },
    { test: 3, part: 'B', q: "Where does the coach tour go to?", a: "It goes to Liverpool.", img: imgT3_Coach },
    { test: 3, part: 'B', q: "How many days does the tour take?", a: "It takes two days.", img: imgT3_Coach },
    { test: 3, part: 'B', q: "Is food included?", a: "Yes, it includes breakfast and dinner.", img: imgT3_Coach },
    { test: 3, part: 'B', q: "Is it expensive?", a: "No, it isn't. It is only 90 pounds per person.", img: imgT3_Coach },
    { test: 3, part: 'B', q: "Which hotel do we stay in?", a: "You stay at The River Hotel.", img: imgT3_Coach },

    { test: 4, part: 'A', q: "What is the name of the club?", a: "It is Happy Days Club.", img: imgT4_Club },
    { test: 4, part: 'A', q: "When does it open?", a: "It opens every Friday from 7.30 - 10.30 p.m.", img: imgT4_Club },
    { test: 4, part: 'A', q: "What can we do there?", a: "We can play games, listen to music, dance and lots more.", img: imgT4_Club },
    { test: 4, part: 'A', q: "Where is the club?", a: "It is at 29 Milton Street.", img: imgT4_Club },
    { test: 4, part: 'A', q: "How much does it cost?", a: "It is just 1 pound per week.", img: imgT4_Club },
    { test: 4, part: 'B', q: "What can we see at the museum?", a: "We can see more than 70 planes.", img: imgT4_Museum },
    { test: 4, part: 'B', q: "Does it open at weekends?", a: "Yes, it opens daily from 10 a.m. - 6 p.m.", img: imgT4_Museum },
    { test: 4, part: 'B', q: "How much is a student ticket?", a: "It is 5 pounds.", img: imgT4_Museum },
    { test: 4, part: 'B', q: "Is there a car park there?", a: "Yes, there is a large free car park.", img: imgT4_Museum },
    { test: 4, part: 'B', q: "Can I buy a postcard there?", a: "Yes, you can buy postcards and books.", img: imgT4_Museum },

    { test: 5, part: 'A', q: "Who is the present for?", a: "The present is for David.", img: imgT5_Book },
    { test: 5, part: 'A', q: "Why is it for him?", a: "Because it is his birthday present.", img: imgT5_Book },
    { test: 5, part: 'A', q: "What is the name of the book?", a: "It is English Made Easy.", img: imgT5_Book },
    { test: 5, part: 'A', q: "What is the price of the book?", a: "It costs more than 4 pounds.", img: imgT5_Book },
    { test: 5, part: 'A', q: "What is the name of the shop?", a: "It is White's Bookshop.", img: imgT5_Book },
    { test: 5, part: 'B', q: "What is the name of the school?", a: "It is North London Language School.", img: imgT5_School },
    { test: 5, part: 'B', q: "Does it have any English classes?", a: "Yes, it has Business English course.", img: imgT5_School },
    { test: 5, part: 'B', q: "What is the number of hours of the course?", a: "It lasts 4 weeks and 15 hours every week.", img: imgT5_School },
    { test: 5, part: 'B', q: "What is the price of the course?", a: "It is 180 pounds.", img: imgT5_School },
    { test: 5, part: 'B', q: "When does the course begin?", a: "It begins at the 29 of April.", img: imgT5_School }
];

let currentQuizIndex = 0;
let currentWriteIndex = 0;
let currentQuizItem = null;
let currentWriteItem = null;

// --- TẠO OVERLAY ZOOM ĐỘNG ---
const zoomOverlay = document.createElement('div');
zoomOverlay.className = 'zoom-overlay';
const zoomImg = document.createElement('img');
zoomOverlay.appendChild(zoomImg);
document.body.appendChild(zoomOverlay);

// --- XỬ LÝ CLICK ĐỂ ZOOM (CHỈ HOẠT ĐỘNG TRÊN ĐIỆN THOẠI) ---
function handleZoom(src) {
    if (window.innerWidth <= 768) {
        zoomImg.src = src;
        zoomOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }
}

// Đóng zoom khi click vào nền tối
zoomOverlay.addEventListener('click', () => {
    zoomOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Gắn sự kiện click cho các ảnh trong bài làm
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('question-img') && e.target.style.display !== 'none') {
        handleZoom(e.target.src);
    }
    // Hỗ trợ zoom ảnh nhỏ trong thẻ học
    if (e.target.closest('.flashcard') && e.target.tagName === 'IMG') {
        handleZoom(e.target.src);
    }
});

function getFilteredDB() {
    const filter = document.getElementById('test-select').value;
    if (filter === 'all') return db;
    return db.filter(item => item.test == filter);
}

function getModeForItem(item) {
    const role = document.getElementById('role-select').value;
    if (role === 'askFirst') return item.part === 'A' ? 'reverse' : 'normal';
    return item.part === 'A' ? 'normal' : 'reverse';
}

function changeSettings() {
    currentQuizIndex = 0;
    currentWriteIndex = 0;
    renderLearn();
    nextQuiz(false);
    nextWrite(false);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function renderLearn() {
    const container = document.getElementById('flashcard-container');
    container.innerHTML = '';
    getFilteredDB().forEach((item, index) => {
        container.innerHTML += `
            <div class="flashcard">
                <img src="${item.img}" alt="Thumbnail">
                <div class="flashcard-content">
                    <strong style="font-size: 13px; color: #64748b;">Test ${item.test} - Phần ${item.part} - Câu ${index + 1}</strong>
                    <strong>Q: ${item.q}</strong>
                    <span>A: ${item.a}</span>
                </div>
            </div>
        `;
    });
}

function getRandomItem(array) { return array[Math.floor(Math.random() * array.length)]; }
function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

function nextQuiz(advance = true) {
    const filteredDB = getFilteredDB();
    if (advance) {
        currentQuizIndex++;
        if (currentQuizIndex >= filteredDB.length) {
            alert('🎉 Chúc mừng! Bạn đã hoàn thành Quiz!');
            currentQuizIndex = 0;
        }
    }

    currentQuizItem = filteredDB[currentQuizIndex];
    let mode = getModeForItem(currentQuizItem);
    
    let promptText = mode === 'normal' ? currentQuizItem.q : currentQuizItem.a;
    let targetText = mode === 'normal' ? currentQuizItem.a : currentQuizItem.q;

    document.getElementById('quiz-question').innerText = `[Câu ${currentQuizIndex + 1}/${filteredDB.length}] ${promptText}`;
    
    const imgEl = document.getElementById('quiz-img');
    imgEl.src = currentQuizItem.img;
    imgEl.style.display = 'block';
    
    let options = [targetText];
    while(options.length < 4) {
        let randomWrongItem = getRandomItem(db);
        let randomWrongText = mode === 'normal' ? randomWrongItem.a : randomWrongItem.q;
        if(!options.includes(randomWrongText)) options.push(randomWrongText);
    }
    
    options = shuffle(options);
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkQuiz(btn, opt === targetText, targetText);
        optionsContainer.appendChild(btn);
    });
}

function checkQuiz(btn, isCorrect, targetText) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        buttons.forEach(b => {
            if (b.innerText === targetText) b.classList.add('correct');
        });
    }
}

function nextWrite(advance = true) {
    const filteredDB = getFilteredDB();
    if (advance) {
        currentWriteIndex++;
        if (currentWriteIndex >= filteredDB.length) {
            alert('🎉 Chúc mừng! Bạn đã hoàn thành phần Viết!');
            currentWriteIndex = 0;
        }
    }

    currentWriteItem = filteredDB[currentWriteIndex];
    let mode = getModeForItem(currentWriteItem);
    
    let promptText = mode === 'normal' ? currentWriteItem.q : currentWriteItem.a;
    document.getElementById('write-question').innerText = `[Câu ${currentWriteIndex + 1}/${filteredDB.length}] ${promptText}`;
    
    const imgEl = document.getElementById('write-img');
    imgEl.src = currentWriteItem.img;
    imgEl.style.display = 'block';

    document.getElementById('write-input').value = '';
    document.getElementById('write-feedback').innerText = '';
    document.getElementById('write-next-btn').style.display = 'none';
    document.getElementById('write-input').focus();
}

function checkWrite() {
    const input = document.getElementById('write-input').value.trim();
    const feedback = document.getElementById('write-feedback');
    
    let mode = getModeForItem(currentWriteItem);
    let targetText = mode === 'normal' ? currentWriteItem.a : currentWriteItem.q;
    
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    
    if (normalize(input) === normalize(targetText)) {
        feedback.style.color = 'var(--success)';
        feedback.innerText = '✅ Chính xác tuyệt đối!';
        document.getElementById('write-next-btn').style.display = 'block';
    } else {
        feedback.style.color = 'var(--error)';
        feedback.innerText = '❌ Sai rồi. Đáp án đúng là: ' + targetText;
        document.getElementById('write-next-btn').style.display = 'block';
    }
}

function handleEnter(e) {
    if (e.key === 'Enter') {
        if (document.getElementById('write-next-btn').style.display === 'block') {
            nextWrite(true);
        } else {
            checkWrite();
        }
    }
}

window.onload = function() {
    renderLearn();
    nextQuiz(false);
    nextWrite(false);
};
