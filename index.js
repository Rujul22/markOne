var readlineSync = require('readline-sync');
var chalk;

(async () => {
    chalk = await import('chalk');
    
    var name = readlineSync.question('What is your name? ');
    console.log('Welcome! ' + name);
    console.log('Let\'s see how much you know me!\n');

    var curr_score = 0;

    var questionOne = {
        ques: 'Which language do I like the most? ',
        answer: 'Java',
        score: 2
    };

    var questionTwo = {
        ques: 'Where do I live? ',
        answer: 'Nashik',
        score: 1
    };

    var questionThree = {
        ques: 'Which post was I at in CSI Student Chapter KKWIEER? ',
        answer: 'Vice President',
        score: 2
    };

    var questionFour = {
        ques: 'Which role did I possess in my recent Internship? ',
        answer: 'Backend Developer Intern',
        score: 5
    };

    var questionFive = {
        ques: 'Which company am I interning at currently? ',
        answer: 'PTC',
        score: 10
    };

    var highScoreOne = {
        score: 15,
        name: 'Sayali'
    };

    var highScoreTwo = {
        score: 12,
        name: 'Yash'
    };

    var highScoreThree = {
        score: 10,
        name: 'Purva'
    };

    var leaderboard = [highScoreOne, highScoreTwo, highScoreThree];

    var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

    for (var i = 0; i < questionList.length; i++) {
        var curr_ques = questionList[i];
        var answer_curr = readlineSync.question(curr_ques.ques);

        if (answer_curr.toLowerCase() === curr_ques.answer.toLowerCase()) {
            curr_score += curr_ques.score;
            console.log(chalk.default.green("Correct Answer!! 😊 \nYour current score: " + curr_score));
        } else {
            console.log(chalk.default.red("Wrong Answer 😔 \nYour current score: " + curr_score));
        }
        console.log('\n');
    }

    if (curr_score === 20) {
        console.log(chalk.default.green('You scored Highest!!') + chalk.default.red('\nYour score: ' + name + ' - ' + curr_score));
    } else {
        console.log(chalk.default.green('You scored: ' + name + ' - ' + curr_score));
    }

    if (curr_score > highScoreOne.score) {
        console.log(chalk.default.blue('\nCongrats!! You got Rank 1 in Leaderboards! \nPing me and I will update your name in the Leaderboards.'));
    }

    console.log('\n');

    console.log('Leaderboards: ');
    console.log(chalk.default.yellowBright('Name \t \t Score'));
    for (var i = 0; i < leaderboard.length; i++) {
        var high_curr = leaderboard[i];
        console.log(chalk.default.yellow(high_curr.name + ' \t \t ' + high_curr.score));
    }
    console.log(chalk.default.blue('\nThank you for playing! \nHave a great day! '));
})();
