document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "¿El día que giramos en mi casa, cuántas vueltas dimos?",
            options: ["10", "16", "15", "7"],
            correctAnswer: "15"
        },
        {
            question: "¿En qué lugar aún no lo hemos hecho?",
            options: ["Grúa", "Baño de Sharely", "Piscina", "Cuarto de estudios Mayela"],
            correctAnswer: "Piscina"
        },
        {
            question: "¿Como se llama mi pokemon favorito de tipo agua?",
            options: ["Squirtle", "Mudkip", "Froakie", "Totodile"],
            correctAnswer: "Mudkip"
        },
        {
            question: "¿Que dibujaste en mi pizarra?",
            options: ["Una estrella", "Una rosa ", "Un hongo", "Una rosa y un hongo"],
            correctAnswer: "Una rosa y un hongo"
        },
        {
            question: "¿Que dia me regalaste tu liga para el cabello?",
            options: ["8/12/2022", "9/12/2022", "10/12/2022","11/12/2022"],
            correctAnswer: "8/12/2022"
        },
        {
            question: "¿Que rol de dota 2 juego más?",
            options: ["HC", "Soporte", "Off","Medio"],
            correctAnswer: "Soporte"
        },
        {
            question: "¿Que día realizamos nuestro primer skincare?",
            options: ["20/07/2023", "21/07/2023", "22/07/2023","23/07/2023"],
            correctAnswer: "22/07/2023"
        },
        {
            question: "¿Con qué personaje de One Piece me identifico más?",
            options: ["Luffy", "Brook", "Ussop","Sanji"],
            correctAnswer: "Ussop"
        }
        // Agrega más preguntas según sea necesario
    ];

    let currentQuestionIndex = 0;
    let userScore = 0;

    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-btn");
    const resultElement = document.getElementById("result");

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(userAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            userScore++;
        }

        resultElement.textContent = `Respuesta correcta: ${correctAnswer}`;
        resultElement.style.color = userAnswer === correctAnswer ? "#28a745" : "#dc3545";

        disableOptions();
        nextButton.style.display = "block";
    }

    function disableOptions() {
        const buttons = optionsContainer.getElementsByTagName("button");
        for (let button of buttons) {
            button.disabled = true;
        }
    }

    function enableOptions() {
        const buttons = optionsContainer.getElementsByTagName("button");
        for (let button of buttons) {
            button.disabled = false;
        }
    }

    function resetState() {
        resultElement.textContent = "";
        nextButton.style.display = "none";
        enableOptions();
    }

    function nextQuestion() {
        resetState();

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endGame();
        }
    }

    function endGame() {
        questionElement.textContent = `¡Fin del juego! Puntaje: ${userScore} de ${questions.length}`;
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
    }

    showQuestion();

    nextButton.addEventListener("click", nextQuestion);
});
