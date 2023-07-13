let maxNum = prompt('Enter maximum number.');
let target = Math.floor(Math.random() * maxNum + 1);
let totGuesses = 1; 

while (maxNum <= 0 || isNaN(maxNum)) {
    maxNum = prompt('Imput must be a number and must be higher than 0.');
    if (maxNum > 1) {
        break;
    }
}

let guess = prompt('Enter guess');

while (parseInt(guess) !== target) {
    if (guess === 'q') {
        console.log('You have quit. Lets start a new game.')
        break;
    } 
    totGuesses ++;
    if (guess > target) {
        guess = prompt('Guess lower');
    } else if (guess < target) {
        guess = prompt('Guess higher');
    }
}

if (guess == target) {
    console.log('You win!');
    console.log(`It took you ${totGuesses} guesses.`)
}


/*
output

simpel raadspel.
start met vragen naar max number (moeilijkheidsgraad)
dan vraagt het 1e poging om te raden
dan geeft het aan of poging te laag of te hoog is tot het goede geraad is
als poging niet goed is geeft het nieuwe poging
na het goed raden zegt het: it took you ... guesses

met 'q' wordt het spel gestopt

---------------------------------------
pseudo code

vraag gebruiker max number met prompt (input is een sting)
vang number string in variable

while loop = {
if (imput is valid) {
    break uit loop
} else if (imput ! valid) {
    vraag input opnieuw met error message imput must be number and higher than 1
}
}


generate randome number met max number als maximum
vang in variable target

vraag poging met prompt(enter firtst guess)

variable pogingen = 1;

while (parseint.poging !== target){    // hier allen parseint anders probleem met 'q'

    if poging = q {
        break loop; 
    }

    pogingen ++;

    if poging to high --> parseint prompt: to high else paseint prompt(to low)
if poging === target: console.log (good job, it took you ... guesses)


if poging === 'q' print 'oke, you quit' 
    else
print string tamplate literal: it took you ... pogingen






*/ 