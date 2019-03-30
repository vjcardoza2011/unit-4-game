//jquery
$(document).ready(function() { 
 //set variables   
    let wins = 0;
    let losses = 0;
    let totalScore = 0;
    let blue = 0;
    let purple = 0;
    let green = 0;
    let red = 0;
    let computerNum = 0;

    // displaying initial score of 0 to your total score
    $("#score").html(totalScore);
 
    const getRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    // Getting random number to match
    $("#randomNum").html(getRandomNum());

    const getCrystalNum = function() {
        let random = Math.floor(Math.random() * 12 + 1);
        return random;
    }

    // getting random numbers for each crystal and assigning them to their values
    const firstCrystalNum = function() {
        blue += getCrystalNum();
        red += getCrystalNum();
        green += getCrystalNum();
        purple += getCrystalNum();
    }

    firstCrystalNum();

    // assigning click of each crystal
    $("button").on("click", function() {
        if(this.id === "blue") {
            totalScore += blue;
        } else if(this.id === "purple") {
            totalScore += purple;
        } else if(this.id === "red") {
            totalScore += red;
        } else if(this.id === "green") {
            totalScore += green;
        }
        // setting totalScore equal to the value of any button pressed
        $("#score").html(totalScore);
        winOrLose();
    });

    const winOrLose = function() {
        if(totalScore === computerNum) {
            wins += 1;
            $("#win").html(wins);
            alert("YOU WIN!");
            reset();   
        } else if(totalScore > computerNum) {
            losses += 1;
            $("#loss").html(losses);
            alert("YOU LOSE!");
            reset();
        }
    }
    
    // resets all values back to 0 
    const reset = function() {  
        totalScore = 0;
        $("#score").html(totalScore);
        blue = 0;
        green = 0;
        purple = 0;
        red = 0;
        computerNum = 0;
        firstCrystalNum();
        $("#randomNum").html(computerNum += getRandomNum());
    }
});