window.onload = function() {
    const quizDB = [


        {
            question: "Q1: What is the full form of HTML?",
            a: "Hello to my love.",
            b: "Heytext markup language.",
            c: "Hypertext makeup language.",
            d: "Hypertext markup language.",
            ans: "ans4"
        },

        {
            question: "Q2: What is the full form of CSS?",
            a: "Cast styling squad.",
            b: "Cascading style squad.",
            c: "Cascading styling sheets.",
            d: "Cartoon style sheets.",
            ans: "ans3"

        },

        {

            question: "Q3: What is value of pie?",
            a: "3.14",
            b: "4.3",
            c: "3.21",
            d: "2.1",
            ans: "ans1"
        },

        {
            question: "Q4: 2+5= ?",
            a: "6",
            b: "7",
            c: "8",
            d: "9",
            ans: "ans2"
        },

        {
            question: "Q5: Fullform of JS",
            a: "Javascience",
            b: "Javasocial",
            c: "Javascript",
            d: "Javaschool",
            ans: "ans3"
        },
    ]

    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');
    const answers = document.querySelectorAll('.answer');
    const showScore = document.querySelector('#showscore');

    let questionCount = 0;
    let score = 0;

    const loadQuestion = () => {

        const questionList = quizDB[questionCount];
        question.innerText = questionList.question;

        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;

    }
    loadQuestion();


    const getCheckAnswer = () => {

        let answer;
        answers.forEach((curAnsElement) => {
            if (curAnsElement.checked) {
                answer = curAnsElement.id;
            }


        });
        return answer;

    };

    submit.addEventListener('click', () => {
        const checkAnswer = getCheckAnswer();

        console.log(checkAnswer);

        if (checkAnswer == quizDB[questionCount].ans) {
            score++;
        }


        questionCount++;


        if (questionCount < quizDB.length) {
            loadQuestion();
        } else {

            showScore.innerHTML = `
            <h3> You scored [${score}/${quizDB.length}] ✌✌</h3>
            <button class="btn" onclick= "location.reload()">Play Again </button>
            
            `;
            showScore.classList.remove('scorearea');

        }
    });



};