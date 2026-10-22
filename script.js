
/* Yaratuvchi: Sag'dullayev Alimardon */

console.log("Lug‘at dasturi: Sag'dullayev Alimardon");

// Inglizcha so‘zlar, transkripsiya, tarjima, mavzu va misollar
const words = [
    { en: "apple", tr: "/ˈæp.əl/", uz: "olma", mavzu: "Oziq-ovqat", category: "food", misol: "I eat an apple every day." },
    { en: "application", tr: "/ˌæp.lɪˈkeɪ.ʃən/", uz: "ilova; ariza", mavzu: "Ish", category: "work", misol: "I use this application every day." },
    { en: "happy", tr: "/ˈhæp.i/", uz: "xursand", mavzu: "Kundalik hayot", category: "daily", misol: "I am happy today." },
    { en: "book", tr: "/bʊk/", uz: "kitob", mavzu: "Ta’lim", category: "study", misol: "I read a book every evening." },
    { en: "water", tr: "/ˈwɔː.tər/", uz: "suv", mavzu: "Oziq-ovqat", category: "food", misol: "I drink water every morning." },
    { en: "school", tr: "/skuːl/", uz: "maktab", mavzu: "Ta’lim", category: "study", misol: "My school is near my home." },
    { en: "friend", tr: "/frend/", uz: "do‘st", mavzu: "Kundalik hayot", category: "daily", misol: "My friend speaks English." },
    { en: "family", tr: "/ˈfæm.əl.i/", uz: "oila", mavzu: "Uy va oila", category: "home", misol: "My family is very important to me." },
    { en: "beautiful", tr: "/ˈbjuː.tɪ.fəl/", uz: "chiroyli", mavzu: "Kundalik hayot", category: "daily", misol: "This is a beautiful place." },
    { en: "understand", tr: "/ˌʌn.dərˈstænd/", uz: "tushunmoq", mavzu: "Ta’lim", category: "study", misol: "I understand the question." },
    { en: "learn", tr: "/lɜːrn/", uz: "o‘rganmoq", mavzu: "Ta’lim", category: "study", misol: "I learn English every day." },
    { en: "travel", tr: "/ˈtræv.əl/", uz: "sayohat qilmoq", mavzu: "Sayohat", category: "travel", misol: "I want to travel around the world." },
    { en: "airport", tr: "/ˈer.pɔːrt/", uz: "aeroport", mavzu: "Sayohat", category: "travel", misol: "We arrived at the airport early." },
    { en: "ticket", tr: "/ˈtɪk.ɪt/", uz: "chipta", mavzu: "Sayohat", category: "travel", misol: "I bought a train ticket." },
    { en: "work", tr: "/wɜːrk/", uz: "ish; ishlamoq", mavzu: "Ish", category: "work", misol: "I work in an office." },
    { en: "money", tr: "/ˈmʌn.i/", uz: "pul", mavzu: "Ish", category: "work", misol: "I save money every month." },
    { en: "important", tr: "/ɪmˈpɔːr.tənt/", uz: "muhim", mavzu: "Ta’lim", category: "study", misol: "English is important for my future." },
    { en: "improve", tr: "/ɪmˈpruːv/", uz: "yaxshilamoq", mavzu: "Ta’lim", category: "study", misol: "I want to improve my English." },
    { en: "quickly", tr: "/ˈkwɪk.li/", uz: "tezda", mavzu: "Kundalik hayot", category: "daily", misol: "She learns quickly." },
    { en: "believe", tr: "/bɪˈliːv/", uz: "ishonmoq", mavzu: "Kundalik hayot", category: "daily", misol: "I believe in myself." },
    { en: "choose", tr: "/tʃuːz/", uz: "tanlamoq", mavzu: "Kundalik hayot", category: "daily", misol: "You can choose a book." },
    { en: "remember", tr: "/rɪˈmem.bər/", uz: "eslamoq", mavzu: "Ta’lim", category: "study", misol: "I remember his name." },
    { en: "house", tr: "/haʊs/", uz: "uy", mavzu: "Uy va oila", category: "home", misol: "Our house is near the park." },
    { en: "mother", tr: "/ˈmʌð.ər/", uz: "ona", mavzu: "Uy va oila", category: "home", misol: "My mother is very kind." },
    { en: "father", tr: "/ˈfɑː.ðər/", uz: "ota", mavzu: "Uy va oila", category: "home", misol: "My father works every day." },
    { en: "bread", tr: "/bred/", uz: "non", mavzu: "Oziq-ovqat", category: "food", misol: "We eat bread for breakfast." },
    { en: "milk", tr: "/mɪlk/", uz: "sut", mavzu: "Oziq-ovqat", category: "food", misol: "I drink milk in the morning." },
    { en: "breakfast", tr: "/ˈbrek.fəst/", uz: "nonushta", mavzu: "Oziq-ovqat", category: "food", misol: "I eat breakfast at seven." },
    { en: "teacher", tr: "/ˈtiː.tʃər/", uz: "o‘qituvchi", mavzu: "Ta’lim", category: "study", misol: "Our teacher explains the lesson." },
    { en: "student", tr: "/ˈstuː.dənt/", uz: "o‘quvchi; talaba", mavzu: "Ta’lim", category: "study", misol: "The student is reading a book." },
    { en: "journey", tr: "/ˈdʒɜːr.ni/", uz: "safar", mavzu: "Sayohat", category: "travel", misol: "The journey took two hours." },
    { en: "hotel", tr: "/hoʊˈtel/", uz: "mehmonxona", mavzu: "Sayohat", category: "travel", misol: "We stayed at a hotel." },
    { en: "meeting", tr: "/ˈmiː.tɪŋ/", uz: "uchrashuv; yig‘ilish", mavzu: "Ish", category: "work", misol: "The meeting starts at nine." },
    { en: "office", tr: "/ˈɑː.fɪs/", uz: "idora; ofis", mavzu: "Ish", category: "work", misol: "She works in an office." },
    { en: "room", tr: "/ruːm/", uz: "xona", mavzu: "Uy va oila", category: "home", misol: "My room is clean." },
    { en: "kitchen", tr: "/ˈkɪtʃ.ən/", uz: "oshxona", mavzu: "Uy va oila", category: "home", misol: "My mother is in the kitchen." },
    { en: "hello", tr: "/həˈloʊ/", uz: "salom", mavzu: "Kundalik hayot", category: "daily", misol: "Hello, how are you?" },
    { en: "beautifully", tr: "/ˈbjuː.tɪ.fəl.i/", uz: "chiroyli tarzda", mavzu: "Kundalik hayot", category: "daily", misol: "She sings beautifully." },
    { en: "orange", tr: "/ˈɔːr.ɪndʒ/", uz: "apelsin; to‘q sariq", mavzu: "Oziq-ovqat", category: "food", misol: "I eat an orange at lunch." },
    { en: "computer", tr: "/kəmˈpjuː.tər/", uz: "kompyuter", mavzu: "Ish", category: "work", misol: "I use a computer at work." }
];

// HTML elementlari
const $ = id => document.getElementById(id);

const searchInput = $("searchInput");
const categoryFilter = $("categoryFilter");
const wordList = $("wordList");
const emptyMessage = $("emptyMessage");
const resultCount = $("resultCount");

const themeBtn = $("themeBtn");
const dictionaryBtn = $("dictionaryBtn");
const quizBtn = $("quizBtn");
const dictionarySection = $("dictionarySection");
const quizSection = $("quizSection");

const quizPanel = $("quizPanel");
const resultPanel = $("resultPanel");
const quizCategory = $("quizCategory");

const questionCounter = $("questionCounter");
const directionLabel = $("directionLabel");
const questionText = $("questionText");
const questionSpeakBtn = $("questionSpeakBtn");
const questionTranscription = $("questionTranscription");
const answerOptions = $("answerOptions");
const quizFeedback = $("quizFeedback");

const correctCount = $("correctCount");
const wrongCount = $("wrongCount");
const streakCount = $("streakCount");

const nextBtn = $("nextBtn");
const finishBtn = $("finishBtn");
const restartBtn = $("restartBtn");

// Test holati
let questionBag = [];
let currentWord = null;
let currentDirection = "en-uz";
let questionNumber = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let currentStreak = 0;
let bestStreak = 0;
let answered = false;
let testFinished = false;

// Xato qilingan so‘zlarning takrorlanish ustuvorligi
let reviewCounts = new Map();

// So‘zlar ro‘yxatida inglizcha takrorlar yo‘qligini tekshirish
function validateDictionary() {
    const seen = new Set();

    for (const word of words) {
        const key = word.en.trim().toLowerCase();

        if (seen.has(key)) {
            console.error("Takrorlangan inglizcha so‘z:", word.en);
        }

        seen.add(key);

        if (!word.en || !word.tr || !word.uz || !word.misol || !word.category) {
            console.error("Ma’lumoti to‘liq bo‘lmagan so‘z:", word);
        }
    }
}

// Tasodifiy Fisher–Yates aralashtirish
function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// Mavzu kodini o‘zbekcha nomga aylantirish
function getTopicName(category) {
    const topics = {
        daily: "Kundalik hayot",
        food: "Oziq-ovqat",
        study: "Ta’lim",
        travel: "Sayohat",
        work: "Ish",
        home: "Uy va oila"
    };

    return topics[category] || category;
}

// Ovozli o‘qish
function speakText(text) {
    if (!("speechSynthesis" in window) ||
        typeof window.SpeechSynthesisUtterance === "undefined") {
        alert("Brauzeringiz ovozni qo‘llab-quvvatlamaydi");
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;

    window.speechSynthesis.speak(utterance);
}

// Bitta so‘z kartochkasini yaratish
function createWordCard(word) {
    const card = document.createElement("article");
    card.className = "word-card";

    const top = document.createElement("div");
    top.className = "word-top";

    const titleGroup = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = word.en;

    const transcription = document.createElement("p");
    transcription.className = "transcription";
    transcription.textContent = word.tr;

    titleGroup.append(title, transcription);

    const speakBtn = document.createElement("button");
    speakBtn.className = "speak-btn";
    speakBtn.type = "button";
    speakBtn.textContent = "🔊";
    speakBtn.title = "Inglizcha so‘zni eshitish";
    speakBtn.setAttribute("aria-label", `${word.en} talaffuzi`);
    speakBtn.addEventListener("click", () => speakText(word.en));

    top.append(titleGroup, speakBtn);

    const translation = document.createElement("p");
    translation.className = "translation";
    translation.textContent = word.uz;

    const topic = document.createElement("span");
    topic.className = "topic-label";
    topic.textContent = word.mavzu;

    const example = document.createElement("p");
    example.className = "example";

    const exampleLabel = document.createElement("span");
    exampleLabel.className = "example-label";
    exampleLabel.textContent = "Misol gap:";

    const exampleText = document.createElement("span");
    exampleText.textContent = word.misol;

    const exampleSpeak = document.createElement("button");
    exampleSpeak.className = "speak-btn speak-example";
    exampleSpeak.type = "button";
    exampleSpeak.textContent = "🔊 Misolni eshitish";
    exampleSpeak.addEventListener("click", () => speakText(word.misol));

    example.append(exampleLabel, exampleText, document.createElement("br"), exampleSpeak);

    card.append(top, translation, topic, example);

    return card;
}

// Qidiruv: inglizcha so‘z boshidan mos kelganlar birinchi
function renderWords() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = words
        .filter(word =>
            selectedCategory === "all" || word.category === selectedCategory
        )
        .map(word => {
            const english = word.en.toLocaleLowerCase();
            const uzbek = word.uz.toLocaleLowerCase();

            let priority = 4;

            if (!query) {
                priority = 0;
            } else if (english.startsWith(query)) {
                priority = 0;
            } else if (english.includes(query)) {
                priority = 1;
            } else if (uzbek.startsWith(query)) {
                priority = 2;
            } else if (uzbek.includes(query)) {
                priority = 3;
            }

            return { word, priority };
        })
        .filter(item => !query || item.priority < 4)
        .sort((a, b) => a.priority - b.priority ||
            a.word.en.localeCompare(b.word.en))
        .map(item => item.word);

    wordList.replaceChildren();

    filtered.forEach(word => {
        wordList.appendChild(createWordCard(word));
    });

    resultCount.textContent = `Topilgan so‘zlar: ${filtered.length}`;
    emptyMessage.hidden = filtered.length > 0;
}

// Tanlangan mavzudagi so‘zlar
function getTopicWords() {
    const selected = quizCategory.value;

    return words.filter(word =>
        selected === "all" || word.category === selected
    );
}

// Barcha so‘zlar bir marta chiqadigan navbat tuzish
function buildQuestionBag() {
    const shuffled = shuffleArray(getTopicWords());

    // Xato qilingan so‘zlarni navbat boshiga yaqinlashtirish.
    // Bu tartibni o‘zgartiradi, ammo so‘zlarni takrorlamaydi.
    shuffled.sort((a, b) =>
        (reviewCounts.get(b.en) || 0) -
        (reviewCounts.get(a.en) || 0)
    );

    questionBag = shuffled;
}

// Navbat tugasa, yangi aralash tartib tuziladi
function getNextWord() {
    if (questionBag.length === 0) {
        buildQuestionBag();
    }

    return questionBag.shift();
}

// Hisoblagichlarni yangilash
function updateStats() {
    correctCount.textContent = correctAnswers;
    wrongCount.textContent = wrongAnswers;
    streakCount.textContent = currentStreak;
}

// Testni boshlash
function startQuiz() {
    if (getTopicWords().length < 4) {
        alert("Test uchun tanlangan mavzuda kamida 4 ta so‘z bo‘lishi kerak.");
        return;
    }

    questionBag = [];
    questionNumber = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    currentStreak = 0;
    bestStreak = 0;
    reviewCounts = new Map();
    currentWord = null;
    answered = false;
    testFinished = false;

    quizPanel.hidden = false;
    resultPanel.hidden = true;
    nextBtn.hidden = false;
    finishBtn.hidden = false;

    updateStats();
    buildQuestionBag();
    showQuestion();
}

// Keyingi savolni chiqarish
function showQuestion() {
    if (testFinished) return;

    currentWord = getNextWord();
    currentDirection = Math.random() < 0.5 ? "en-uz" : "uz-en";

    questionNumber++;
    answered = false;

    nextBtn.disabled = true;
    quizFeedback.textContent = "";
    answerOptions.replaceChildren();

    questionCounter.textContent = `${questionNumber}-savol`;
    directionLabel.textContent = currentDirection === "en-uz"
        ? "Inglizcha → O‘zbekcha"
        : "O‘zbekcha → Inglizcha";

    const isEnglishQuestion = currentDirection === "en-uz";

    questionText.textContent = isEnglishQuestion
        ? currentWord.en
        : currentWord.uz;

    questionTranscription.textContent = isEnglishQuestion
        ? currentWord.tr
        : `Inglizcha: ${currentWord.en} ${currentWord.tr}`;

    // Har savolda inglizcha talaffuz tugmasi mavjud
    questionSpeakBtn.hidden = false;
    questionSpeakBtn.title = "Inglizcha so‘zni eshitish";
    questionSpeakBtn.onclick = () => speakText(currentWord.en);

    const topicWords = getTopicWords();
    const incorrectWords = shuffleArray(
        topicWords.filter(word => word.en !== currentWord.en)
    ).slice(0, 3);

    const options = shuffleArray([currentWord, ...incorrectWords]);

    options.forEach(word => {
        const label = isEnglishQuestion ? word.uz : word.en;
        const button = document.createElement("button");

        button.className = "answer-option";
        button.type = "button";
        button.textContent = label;

        button.addEventListener("click", () => selectAnswer(button, word));

        answerOptions.appendChild(button);
    });
}

// Javobni tekshirish
function selectAnswer(selectedButton, selectedWord) {
    if (answered || testFinished) return;

    answered = true;

    const isCorrect = selectedWord.en === currentWord.en;

    // Barcha variantlar bir marta tanlangandan keyin bloklanadi
    [...answerOptions.children].forEach(button => {
        button.disabled = true;

        const correctLabel = currentDirection === "en-uz"
            ? currentWord.uz
            : currentWord.en;

        if (button.textContent === correctLabel) {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        correctAnswers++;
        currentStreak++;
        bestStreak = Math.max(bestStreak, currentStreak);
        quizFeedback.textContent = "✅ To‘g‘ri javob! Barakalla!";
    } else {
        wrongAnswers++;
        currentStreak = 0;

        reviewCounts.set(
            currentWord.en,
            (reviewCounts.get(currentWord.en) || 0) + 1
        );

        selectedButton.classList.add("wrong");
        quizFeedback.textContent = "❌ Noto‘g‘ri javob. To‘g‘ri javob yashil rangda ko‘rsatilgan.";
    }

    updateStats();
    nextBtn.disabled = false;
}

// Keyingi savol
nextBtn.addEventListener("click", () => {
    if (!answered || testFinished) return;
    showQuestion();
});

// Testni yakunlash
function finishQuiz() {
    if (testFinished) return;

    testFinished = true;
    quizPanel.hidden = true;
    resultPanel.hidden = false;

    const total = correctAnswers + wrongAnswers;
    const percent = total === 0
        ? 0
        : Math.round(correctAnswers / total * 100);

    $("totalResult").textContent = total;
    $("correctResult").textContent = correctAnswers;
    $("wrongResult").textContent = wrongAnswers;
    $("bestStreakResult").textContent = bestStreak;
    $("percentResult").textContent = `${percent}%`;
}

$("finishBtn").addEventListener("click", finishQuiz);
$("restartBtn").addEventListener("click", startQuiz);

// Bo‘limlarni almashtirish
function showSection(section) {
    const isDictionary = section === "dictionary";

    dictionarySection.hidden = !isDictionary;
    quizSection.hidden = isDictionary;

    dictionaryBtn.classList.toggle("active", isDictionary);
    quizBtn.classList.toggle("active", !isDictionary);

    if (!isDictionary && questionNumber === 0 && !testFinished) {
        startQuiz();
    }
}

dictionaryBtn.addEventListener("click", () => showSection("dictionary"));
quizBtn.addEventListener("click", () => showSection("quiz"));

// Test mavzusi o‘zgarsa, test yangidan boshlanadi
quizCategory.addEventListener("change", startQuiz);

// Qidiruv va lug‘at filtri
searchInput.addEventListener("input", renderWords);
categoryFilter.addEventListener("change", renderWords);

// Qorong‘i rejim
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark
        ? "☀️ Yorug‘ rejim"
        : "🌙 Qorong‘i rejim";
});

// Dastur ishga tushishi
validateDictionary();
renderWords();

console.log("Lug‘at yuklandi:", words.length, "ta so‘z.");
console.log("Takroriy so‘zlar tekshirildi.");
