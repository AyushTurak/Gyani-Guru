function submitQuiz() {
    var correctAnswers = 0;

    function checkAnswer(questionId, correctOption) {
        var options = document.getElementsByName(questionId);
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (option.checked) {
                if (option.value === correctOption) {
                    correctAnswers++;
                    option.parentElement.style.backgroundColor = 'lightgreen';
                } else {
                    option.parentElement.style.backgroundColor = 'lightcoral';
                }
            }
            option.disabled = true;
        }
    }

   
    checkAnswer('q1-1', ' HyperText Markup Language');

    
    checkAnswer('q2-2', 'a');

    
    checkAnswer('q3-2', 'Metadata about the document');

    
    checkAnswer('q4-2', 'Defines metadata about an HTML document');

    
    checkAnswer('q5-2', 'ul');

    
    checkAnswer('q6-2', ' Adding interactivity to web pages');

    
    checkAnswer('q7-1', 'var');

    
    checkAnswer('q8-2', 'To handle events like clicks or keypresses');

    
    checkAnswer('q9-2', ' Returns the data type of a variable');

   
    checkAnswer('q10-1', 'Defines a page footer');

    if (correctAnswers >= 7) {
        alert("Congratulations! You passed the quiz!");
    } else {
        alert("Oops! You didn't pass the quiz. Better luck next time!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var welcomeContainer = document.getElementById("welcome-container");  
    setTimeout(function () {
        welcomeContainer.style.opacity = "0";
    },500);
});
document.addEventListener("DOMContentLoaded", function () {
    var contAll = document.getElementById("all-container");  
    setTimeout(function () {
       contAll.style.opacity = "100";
    },1000);
});

