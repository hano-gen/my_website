document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // メニュー外をクリックしたら閉じる
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');
        }
    });
});

let currentStep = 0;
let history = [];

// 質問データ
const steps = [
    {
        question: "防災マップで自宅周辺に色がついていますか？",
        yes: 2,
        no: 1
    },
    {
        question: "風水害による避難の必要は少ないです",
        yes: null,
        no: null
    },
    {
        question: "どんな色がついていますか。黄緑色または水色ですか？",
        yes: 3,
        no: 4
    },
    {
        question: "警戒レベル4避難指示で2階への避難を完了",
        yes: null,
        no: null
    },
    {
        question: "避難に時間がかかる方が一緒にいますか？",
        yes: 5,
        no: 8
    },
    {
        question: "安全な場所（防災マップ上）に住んでいて身を寄せられる親戚や知人はいますか？",
        yes: 7,
        no: 8
    },
    {
        question: "警戒レベル3高齢者等避難が出たら安全な親戚や知人の家に避難",
        yes: null,
        no: null
    },
    {
        question: "警戒レベル3高齢者等避難が出たら市の指定緊急避難場所などへ避難",
        yes: null,
        no: null
    },
    {
        question: "安全な場所（防災マップ上）に住んでいて身を寄せられる親戚や知人はいますか？",
        yes: 9,
        no: 10
    },
    {
        question: "警戒レベル4避難指示が出たら安全な親戚や知人の家に避難",
        yes: null,
        no: null
    },
    {
        question: "警戒レベル4避難指示が出たら市の指定緊急避難場所などへ避難",
        yes: null,
        no: null
    },
    
];

// 回答処理
function handleAnswer(answer) {
    history.push(currentStep); // 現在のステップを履歴に保存
    const resultDiv = document.getElementById("decision-result");
    if (steps[currentStep][answer] !== null) {
        currentStep = steps[currentStep][answer];
        document.getElementById("question").textContent = steps[currentStep].question;
        resultDiv.textContent = ""; // 前回の結果をクリア
    } else {
        resultDiv.textContent = steps[currentStep].question;
        document.getElementById("buttons").style.display = "none"; // ボタンを非表示
    }
}

// 戻る処理
function goBack() {
    if (history.length > 0) {
        currentStep = history.pop(); // 履歴から直前のステップを取得
        document.getElementById("question").textContent = steps[currentStep].question;
        document.getElementById("decision-result").textContent = ""; // 結果をクリア
        document.getElementById("buttons").style.display = "block"; // ボタンを再表示
    }
}
