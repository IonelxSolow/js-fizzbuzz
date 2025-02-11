/* 
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
In che ordine devo mettere le condizioni?
Consigli del giorno:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */


//programma per stampare i numeri da uno a 100
for (let i = 1; i <= 100; i++ ) {
  

    //controllare se il numero e divisibile per 3 e 5
    //console.log(i % 3)
    //console.log(i % 5)

  

   // Per i numeri che sono sia multipli di 3 che di 5 stampi 
   //  FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    
    //stampa Buzz al posto del numero ai multipli di 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    //stampare Fizz al posto del numero ai multipli di 5
      else if (i % 5 === 0) {
        console.log("Buzz");
      }
       else {
            console.log(i);
       }
}




