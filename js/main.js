function mnozenie (num1,num2){
    if (num1+num2>0){
        console.log(`wynik dodawania wynosi ${num1+num2}`);
    } else {
        console.log('wynik dzialania nie prawidlowy')
    }
    if (num1*num2>0){
        console.log(`wynik mnozenia wynosi ${num1*num2}`);
    } else {
        console.log('wynik dzialania nie prawidlowy')
    }
    if (num1-num2>0){
        console.log(`wynik odejmowania wynosi ${num1-num2}`);
    } else {
        console.log('wynik dzialania nie prawidlowy')
    }
}
mnozenie(2,3)