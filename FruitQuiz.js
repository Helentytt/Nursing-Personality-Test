function displayQuiz() {
    const questions = [
        {
            question: "You have been invited to attend a secret academy, Covens of Care, where mythical beings learn the art of healing! It is located at the fantastical land of Nurseria, a realm filled with magical creatures and great healers. The secret letter will burn after you have made your choice.",
            choices: ["I’m not sure…seems suspicious…am I even qualified??", "OMG an adventure? Let’s go!"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 }, // Weight for first choice
                {perceivingScore: +1, judgingScore:0 }, // Weight for second choice
            ]
        },
        {
            question: "The letter burns and you have been teleported! However, it seems like the letter made a mistake and dropped you off at a mystical forest instead.",
            choices: ["Is this a test for me?", "I’m scared, I’ve never been to a forest alone before."],
            weights: [
                {thinkingScore: +1, feelingScore: 0 }, // Weight for first choice
                {feelingScore: +3, thinkingScore: 0 } // Weight for second choice
            ]
        },
        {
            question: "Before you could make a move, you heard a loud growl from a cave nearby. It sounded like a mystical dragon.",
            choices: ["A dragon?! I want to see it for myself!", "You approach the cave cautiously, listening for further noises for clues about the dragon’s mood."],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , // Weight for first choice
                {sensingScore: +1, intuitionScore: 0 } , // Weight for second choice
            ]
        },
        {
            question: "The dragon has hurt its wings and is unable to fly! Looks like it needs some serious medical help…",
            choices: ["Observe the dragon’s overall behaviour and breathing patterns to gauge the severity of the wound", "Assess the wound in detail to find out what type of medication it needs."],
            weights: [
                {perceivingScore: +1, judgingScore: 0 } , // Weight for first choice
                {judgingScore: +3, perceivingScore: 0 }, // Weight for second choice
            ]
        },
        {
            question: "After assessing the dragon’s wounds, you determine it needs a rare herb found only on a treacherous mountain peak. What would you do?",
            choices: ["Trust your instincts and set off for the mountain, determined to get the herbs quickly.", "Carefully plan out the safest and fastest route you would take, gathering supplies before embarking on the journey."],
            weights: [
                {sensingScore: +1, intuitionScore: 0 } , // Weight for first choice
                {intuitionScore: +3, sensingScore: 0 } , // Weight for second choice
            ]
        },
        {
            question:"You managed to find the rare herb, but it’s guarded by a territorial fairy. How will you convince her to let you have the herb?",
            choices: ["Offer a trade! You can offer the fairy the magic potion you had in your pocket.", "Try to talk to the fairy! You try to strike a conversation to understand why she might be territorial and eventually explain the dragon’s need for help."],
            weights: [
                {thinkingScore: +1, feelingScore: 0 } , // Weight for first choice
                {feelingScore: +3, thinkingScore: 0 } , // Weight for second choice
            ]
        },
        {
            question:"The fairy felt touched as you were kind to her. You got the herb successfully and returned to the dragon’s cave, but it’s reluctant to let you apply it. How will you gain its trust?",
            choices: ["Try to monitor it’s behaviour towards you as you reach out your hand to pet it", "Show him the benefits of the herb and that you are just trying to help."],
            weights: [
                {sensingScore: +1, intuitionScore: 0 } , // Weight for first choice
                {intuitionScore: +3, sensingScore: 0 } , // Weight for intuition 
            ]
        },
        {
            question:"With your gentle touch and the power of the rare herb, the dragon's wings begin to heal. It lets out a grateful roar, showering you with sparkling scales as a token of appreciation.",
            choices: ["Phew! So glad that I didn’t get eaten", "Woah, did I just save a dragon?"],
            weights: [
                {thinkingScore: +3, feelingScore: 0  } , // Weight for first choice
                {feelingScore: +1, thinkingScore: 0 } , // Weight for second choice
            ]
        },
        {
            question:" As you continue your journey through the forest, you stumble upon a hidden pathway. Would you take the unknown path ahead?",
            choices: ["Absolutely! Can’t wait to know what else I will encounter ahead!", "I’ll think about it…"],
            weights: [
                {perceivingScore: +3, judgingScore: 0 } , // Weight for first choice
                {judgingScore: +1, perceivingScore: 0 } , // Weight for second choice
            ]
        },
        {
            question:"The path leads you to a glistening forest, and at the centre stands a magnificent griffin, its leg snagged in a magical snare.",
            choices: ["Another mystical creature! Let’s try to bond with it!", "Oh god, let’s get this done with. I miss my bed already…"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , // Weight for first choice
                {introvertScore: +1, extrovertScore: 0 } , // Weight for second choice
            ]
        },
        {
            question:"The griffin, grateful for your help, offers to take you to the Covens of Care academy. Along the way, you rethink about your journey and encounters with the dragon, the fairy, and the griffin. What resonates the most with you?",
            choices: ["I can’t stop thinking about how I managed to save so many creatures", "I feel bittersweet that my encounter with the mystical creatures have come to an end…"],
            weights: [
                {thinkingScore: +3, feelingScore: 0 } , // Weight for first choice
                {feelingScore: +1, thinkingScore: 0 } , // Weight for second choice
            ]
        },
        {
            question:"As you arrived at the Covens of Care academy, you are filled with a sense of…",
            choices: ["Relief. That was a fun journey but I’m a little tired now…", "Achievement. I enjoyed meeting so many mystical creatures today! Can’t wait to make new friends at the academy."],
            weights: [
                {introvertScore: +1, extrovertScore: 0 } , // Weight for first choice
                {extrovertScore: +3, introvertScore: 0 } , // Weight for second choice
            ]
        },
        {
            question: "Processing your results...",
            choices: ["Find out my nurse title!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 }, // laceholder
                {introvertScore: 0, extrovertScore: 0}, //Placeholder
            ]
        },
    ]


    //Variables for scores 
    let currentQuestionIndex = 0;
    let introvertScore = 0;
    let extrovertScore = 0;
    let judgingScore = 0;
    let perceivingScore = 0;
    let sensingScore = 0;
    let intuitionScore = 0;
    let thinkingScore = 0;
    let feelingScore = 0;


    function displayQuestionImage(questionIndex) {
        const imageURLs = [
            "Q1.png",
            "Q2.png",
            "Q3.png",
            "Q4.png",
            "Q5.png",
            "Q6.png",
            "Q7.png",
            "Q8.png",
            "Q9.png",
            "Q10.png",
            "Q11.png",
            "Q12.png",
            "processing.GIF",
        ];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);
        
        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }

    //Function to get progress bar image URL for the current question 
    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "Q1 progress.svg",
            "Q2 progress.svg",
            "Q3 progress.svg",
            "Q4 progress.svg",
            "Q5 progress.svg",
            "Q6 progress.svg",
            "Q7 progress.svg",
            "Q8 progress.svg",
            "Q9 progress.svg",
            "Q10 progress.svg",
            "Q11 progress.svg",
            "Q12 progress.svg",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    //Function to handle choice click
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                //Update scores based on weight of selected choice
                if (selectedChoiceWeight.hasOwnProperty('introvertScore')) {
                    introvertScore += selectedChoiceWeight.introvertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('extrovertScore')) {
                    extrovertScore += selectedChoiceWeight.extrovertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('judgingScore')) {
                    judgingScore += selectedChoiceWeight.judgingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('perceivingScore')) {
                    perceivingScore += selectedChoiceWeight.perceivingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('sensingScore')) {
                    sensingScore += selectedChoiceWeight.sensingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('intuitionScore')) {
                    intuitionScore += selectedChoiceWeight.intuitionScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('thinkingScore')) {
                    thinkingScore += selectedChoiceWeight.thinkingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('feelingScore')) {
                    feelingScore += selectedChoiceWeight.feelingScore;
                }

            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
            }
        }
        

    //Function to calculate MBTI type based on scores and display image
    function calculateMBTITypeAndDisplayImage() {
        //Calculate introvert/extrovert dimension
        const introextro = introvertScore > extrovertScore ? "I" :"E";
        //Calculate sensing/intuition dimension
        const sensint = sensingScore > intuitionScore ? "S" : "N";
        //Calculate thinking/feeling dimension
        const thinkfeel = thinkingScore > feelingScore ? "T" : "F";
        //Calculate judging/perceiving dimension
        const judgeper = judgingScore > perceivingScore ? "J" : "P";
        //Produce MBTI type string
        const mbtiTypeString = introextro + sensint + thinkfeel + judgeper;

        console.log("MBTI Type:", mbtiTypeString);

        document.getElementById('results').style.display = 'none';
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": "Lemon.png",
                "INTJ": "Pomegranate.png", 
                "ENTP": "Dragon Fruit.png",
                "INTP": "Grape.png",
                "ENFJ": "Peach.png",
                "INFJ": "Fig.png",
                "ENFP": "Watermelon.png",
                "INFP": "Cherry.png",
                "ESFJ": "Orange.png",
                "ISFJ": "Apple.png",
                "ESTJ": "Banana.png",
                "ISTJ": "Pear.png",
                "ESTP": "Pineapple.png",
                "ISTP": "Coconut.png",
                "ESFP": "Mango.png",
                "ISFP": "Strawberry.png",
            };
            return MBTIImageUrls[mbtiTypeString] || ""
        }

        //Display image
        function displayImage(mbtiTypeString) {
            const imageURL = getMBTIImageUrl(mbtiTypeString);
            const mbtiImageContainer = document.getElementById('mbti-image');
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            mbtiImageContainer.appendChild(imageElement);
    
    }
        //Display the first question when the quiz starts
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

//Call function to start the quiz
displayQuiz();

// Share quiz button click event handler
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Quiz URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    });
});

// Select the button element
const backToHomeButton = document.getElementById('back-to-home');

// Add event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        // Redirect to the home page or perform any other action you want
        window.location.href = 'https://gudetea.github.io/FruitCard-Odyssey/'; // Replace 'home.html' with the actual URL of your home page
    });
});

// Function to navigate back to the home page
function navigateToHomePage() {
    // Reset quiz state if needed
    resetQuiz(); // Assuming you have a resetQuiz() function defined

    // Hide quiz page and show the home page
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
