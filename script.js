let calciusInput = document.querySelector('#celcius > input');

let fahrenheitInput = document.querySelector('#fahrenheit > input');

let kelvinInput = document.querySelector('#kelvin > input');

let btn=document.querySelector('.btn button');

function roundNumber(num)
{
    return Math.round(num*100)/100;
}

calciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(calciusInput.value);

    let fTemp= (cTemp*(9/5))+32;
    let kTemp= cTemp+273.15;

    fahrenheitInput.value=roundNumber(fTemp);
    kelvinInput.value=roundNumber(kTemp);
});



fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value);

    let cTemp= (fTemp-32)*(5/9);
    let kTemp= cTemp+273.25;

    calciusInput.value=roundNumber(cTemp);
    kelvinInput.value=roundNumber(kTemp);
});


kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value);

    let cTemp= kTemp - 273.15;
    let fTemp= cTemp*(9/5)+32;

    calciusInput.value=roundNumber(cTemp);
    fahrenheitInput.value=roundNumber(fTemp);
});

btn.addEventListener('click',function(){
    calciusInput.value='';
    fahrenheitInput.value='';
    kelvinInput.value='';
})