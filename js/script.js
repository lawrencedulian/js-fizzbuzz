// Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const row = document.querySelector(".row");

// STAMPARE NELLA CONSOLE NUMERI DA 1 A 100
for (let i=1; i<=100; i++) {
    // SE i E' DIVISIBILE SIA PER 3 CHE PER 5 ALLORA STAMPA FIZZBUZZ
     // SE i E' DIVISIBILE PER 3 STAMPA FIZZ ALTRIMENTI SE i E' DIVISIBILE PER 5 STAMPA BUZZ ALTRIMENTI STAMPA IL NUMERO
    let fizzBuzz = "";
    let bgClass = "";
    if (i % 3 === 0 && i % 5 === 0 ) {
        fizzBuzz = "fizzBuzz";
        bgClass = "fizzBuzz";
        console.log(fizzBuzz);
    } else if (i % 3 === 0) {
        fizzBuzz = "fizz";
        bgClass = "fizz";
        console.log(fizzBuzz);
    } else if (i % 5 === 0) {
        fizzBuzz = "buzz";
        bgClass = "buzz";
        console.log(fizzBuzz);
    } else {
        fizzBuzz = i;
        console.log(fizzBuzz);
    }

    // OUTPUT
    const col = document.createElement("div");
    col.classList.add("col");
   
    if (bgClass !== "") {
        col.classList.add(bgClass);
    }
    col.innerHTML = fizzBuzz ;
    
    row.append(col);
    
    // col = `<div class="col ${fizzBuzz}">${i}</div>`;
    // row.innerHTML += col;
}





