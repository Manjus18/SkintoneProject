function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Brand
    if (input == "best brand") {
        return "Which category do you want?";
    } else if (input == "Lipsticks") {
        return "Mac";
    } else if (input == "Thankyou") {
        return "welcome";
    }

    // Questions
    if (input == "Best foundation for dry skin") {
        return "Lakme 9to5 CC Cream";
    } else if (input == "Best foundation for oily skin") {
        return "Maybelline Fit Me Matte";
    } else if (input == "Best foundation for combination skin") {
        return "LYS Fix Serum Foundation";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}