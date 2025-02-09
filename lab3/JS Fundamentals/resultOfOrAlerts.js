alert( alert(1) || 2 || alert(3) ); //The answer: first 1, then 2.
// The call to alert does not return a value. Or, in other words, it returns undefined. 
// So it go through to 2 and then it stops because it return 2 and it's not required to go further