<script type="text/javascript">
    var compOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var userOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    var wins = 0;
    var losses = 0;
    var guess = 9;
    var prevGuess = [];
    

    document.onkeyup = function(event){
        var userGuess = event.key.toLowerCase();
        var compChoice = compOptions [Math.floor(Math.random () * compOptions.length)];
        if (userGuess === compChoice){
            wins++;
        } else if (userGuess !== compChoice){
            guess--;
            prevGuess.push(userGuess);
        } if (guess === 0){
            losses++;
            guess += 9;
            prevGuess = [];
        }
    
        
        var html = "<p>Wins: " + wins + "</p>" +
        "<p>Losses : " + losses + "</p>" +
        "<p>Guesses Left: " + guess + "</p>" +
        "<p>Your Guesses so Far: " + prevGuess + "</p>"

        document.querySelector("#game").innerHTML = html;
    }

</script>