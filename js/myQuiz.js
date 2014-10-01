// Example customized Quiz

// Changed options
myOptions = {
    randomSortQuestions: true,
    randomSortAnswers: true,
    perQuestionResponseMessaging: true
}

// German localization
$.extend(myOptions, language_de);

$(function () {
    $('#slickQuiz').slickQuiz(myOptions);
});

