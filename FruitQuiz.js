function displayQuiz() {
    const questions = [
        {
            question: "You finally arrive in Nurseria Village and find a cottage perfect for your herb shop. What's the first thing you do?",
            choices: ["Make a detailed inventory and create a shopping list for any missing ingredients.", " Mingle with the villagers to learn about their health concerns and what herbs they might need."],
            weights: [
                {judgingScore: +3, perceivingScore: 0}, // Weight for first choice
                {perceivingScore: +1, judgingScore:0}, // Weight for second choice
            ]
        },
        {
            question: "A kind old woman approaches you, curious about your shop. She mentions a recent illness spreading through the village. How do you react?",
            choices: ["Ask her detailed questions about the symptoms to diagnose the illness.", "Express concern and offer soothing words before focusing on potential remedies."],
            weights: [
                {thinkingScore: +1, feelingScore: 0}, // Weight for first choice
                {feelingScore: +3, thinkingScore: 0} // Weight for second choice
            ]
        },
        {
            question: "You spend the next few days researching and experimenting with various herb combinations. You finally create a cure that you believe can help the villagers. What do you do next?",
            choices: ["Feel confident in your research and decide to offer the cure to the kind old woman who first informed you about the illness", "Test the cure on yourself first to ensure it's safe."],
            weights: [
                {intuitionScore: +3, sensingScore: 0} , // Weight for first choice
                {sensingScore: +1, intuitionScore: 0} , // Weight for second choice
            ]
        },
        {
            question: "The Villagers are feeling better thanks to your help. News about your herbal expertise spreads quickly and a young villager with passion approaches you. How do you feel about taking on an apprentice?",
            choices: ["You're thrilled to share your knowledge and welcome the apprentice with open arms.", "You appreciate the help, but you're also hesitant to share your workspace."],
            weights: [
                {extrovertScore: +3, introvertScore: 0} , // Weight for first choice
                {introvertScore: +1, extrovertScore: 0}, // Weight for second choice
            ]
        },
        {
            question: "After a few days, a traveller finds your shop and seeks help as his friend has fallen ill and requires immediate attention. You follow him to check up on his friend…",
            choices: ["Observe the patient’s overall behaviour and breathing patterns to gauge the severity of the wound.", "Assess the wound in detail to find out what type of medication it needs."],
            weights: [
                {perceivingScore: +3, judgingScore: 0} , // Weight for first choice
                {judgingScore: +1, perceivingScore: 0} , // Weight for second choice
            ]
        },
        {
            question:"After assessing the patient’s wounds, you determine it needs a rare herb found only on a treacherous mountain peak. What would you do?",
            choices: ["Carefully plan out the safest route you would take, gathering supplies before embarking", "Trust your instincts and set off for the mountain!"],
            weights: [
                {intuitionScore: +3, sensingScore: 0} , // Weight for first choice
                {sensingScore: +1, intuitionScore: 0} , // Weight for second choice
            ]
        },
        {
            question:"As you battle the elements and overcome challenging terrain, what motivates you most to press on?",
            choices: ["Your keen observation skills, allowing you to come up with solutions to tackle the changing environment.", "The commitment you made to the traveller and the unwavering belief in your ability to find the cure."],
            weights: [
                {perceivingScore: +3, judgingScore: 0} , // Weight for first choice
                {judgingScore: +1, perceivingScore: 0} , // Weight for intuition 
            ]
        },
        {
            question:"Finally, you reach the peak and discover the precious herb but you also notice a territorial mountain goat guarding the area. How do you approach the situation?",
            choices: ["Look for an alternate path or distraction to avoid confrontation with the goat.", "Get anxious as you try to talk to the goat to avoid agitating it"],
            weights: [
                {thinkingScore: +3, feelingScore: 0} , // Weight for first choice
                {feelingScore: +1, thinkingScore: 0} , // Weight for second choice
            ]
        },
        {
            question:"You manage to secure the herb and avoid the goat. You return and quickly apply your remedy to help the traveller's friend. What gives you more satisfaction?",
            choices: ["Thankful that you trusted your instincts and acted quickly", "Witnessing the friend’s expressions relax as the pain gets relieved"],
            weights: [
                {intuitionScore: +3, sensingScore: 0} , // Weight for first choice
                {sensingScore: +1, intuitionScore: 0} , // Weight for second choice
            ]
        },
        {
            question:" After a few days of recovery, the traveller and his friend offer you a valuable treasure in return for your help. What's your response?",
            choices: ["Accept the treasure as you think of how it will be useful to your store.", "Initially decline, emphasising the satisfaction of just helping others."],
            weights: [
                {thinkingScore: +3, feelingScore: 0} , // Weight for first choice
                {feelingScore: +1, thinkingScore: 0} , // Weight for second choice
            ]
        },
        {
            question:" After waving the travellers goodbye, you find yourself…",
            choices: ["Planning about collecting more rare herbs to avoid climbing mountains for emergency situations again.", "Feeling a sense of achievement as you got the herb on time."],
            weights: [
                {thinkingScore: +3, feelingScore: 0} , // Weight for first choice
                {feelingScore: +1, thinkingScore: 0} , // Weight for second choice
            ]
        },
        {
            question:"Just then, another customer comes into your store.",
            choices: ["You put on a smile despite being exhausted. Maybe you need a break by yourself soon...", "You put on a huge smile, ready to transform your store into a bustling community hub, forming deeper relationships with various villagers."],
            weights: [
                {introvertScore: +1, extrovertScore: 0} , // Weight for first choice
                {extrovertScore: +3, introvertScore: 0} , // Weight for second choice
            ]
        },
        {
            question: "Processing your results...",
            choices: ["Find out my inner nurse type!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0}, // laceholder
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
            "QN1.png",
            "QN2.png",
            "QN3.png",
            "QN4.png",
            "QN5.png",
            "QN6.png",
            "QN7.png",
            "QN8.gif",
            "QN9.gif",
            "QN10.png",
            "QN11.png",
            "QN12.gif",
            "Loading.gif",
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
        //const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        //thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": "6.png",
                "INTJ": "3.png", 
                "ENTP": "1.png",
                "INTP": "3.png",
                "ENFJ": "5.png",
                "INFJ": "4.png",
                "ENFP": "7.png",
                "INFP": "4.png",
                "ESFJ": "2.png",
                "ISFJ": "2.png",
                "ESTJ": "6.png",
                "ISTJ": "8.png",
                "ESTP": "1.png",
                "ISTP": "8.png",
                "ESFP": "7.png",
                "ISFP": "9.png",
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
        window.location.href = 'https://helentytt.github.io/What-Nursing-Student-am-I/'; // Replace 'home.html' with the actual URL of your home page
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
