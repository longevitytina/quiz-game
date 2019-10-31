
/*
(function() {

    function Question(question, answers, correct) {
        this.question = question; 
        this.answers = answers;
        this.correct = correct; 
    }

    Question.prototype.displayQuestion =
    function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            console.log('Correct answer!');
        } else {
            console.log('Wrong. Try Again')
        }
    }

    var q1 = new Question('Is pnut butter delicous?',
                            ['yes', 'no'], 0 );   

    var q2 = new Question('What\'s the name of teaher?',
                            ['John',
                            'Mike',
                            'Jonas'], 2);
    var q3 = new Question('What does best describe coding?',
                            ['Boring',
                            'Hard', 
                            'Fun', 
                            'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math. floor (Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt (prompt('Select correct answer.'));

    questions[n].checkAnswer(answer);

})();
*******************************************/

(function() {

    function Question(question, answers, correct) {
        this.question = question; 
        this.answers = answers;
        this.correct = correct; 
    }

    Question.prototype.displayQuestion =
    function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            console.log('Correct answer!');
        } else {
            console.log('Wrong. Try Again')
        }
    }

    var q1 = new Question('Is pnut butter delicous?',
                            ['yes', 'no'], 0 );   

    var q2 = new Question('What\'s the name of teaher?',
                            ['John',
                            'Mike',
                            'Jonas'], 2);
    var q3 = new Question('What does best describe coding?',
                            ['Boring',
                            'Hard', 
                            'Fun', 
                            'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if (correct){
                sc++
            }
            return score;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        
        var n = Math. floor (Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Select correct answer.');

        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();

        }

    }

    nextQuestion();
})();


