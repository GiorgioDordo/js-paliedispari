// get the necessary elements from the dom
const userField = document.getElementById('user');
// const cpuField = document.getElementById('cpu');
const buttonUser = document.getElementById('user-btn');
// const buttonCpu = document.getElementById('cpu-btn');


// take the user number with the button
buttonUser.addEventListener('click', function(e){
    e.preventDefault();
    
    // get the necessary elements from the dom
    const userPrint = document.getElementById('user-number');
    const userValue = parseInt(userField.value);
    const cpuPrint = document.getElementById('cpu-number');
    
    // check if the uservalue work
    console.log(userValue);
    
    // generate cpu number
    const cpuNumber = getRandomNumber(1, 5);
    console.log(cpuNumber);

    // check if the sum of cpu and user number is even or odd
    const sumCpuUser = isEven(userValue + cpuNumber);
    console.log(sumCpuUser);

    // check who's the winner
    if (userValue > cpuNumber) {
        userPrint.innerText = `This is your number ${userValue}. Winner`;
        cpuPrint.innerText =  `This is cpu's number ${cpuNumber}. Looser`;
    } else {
        userPrint.innerText = `This is your number ${userValue}. Looser`;
        cpuPrint.innerText =  `This is cpu's number ${cpuNumber}. Winner`;
    }
});



// buttonCpu.addEventListener('click', function(e) {
//     e.preventDefault();
//     // const cpuField = getRandomNumber;
//     // const cpuValue = getRandomNumber(cpuField.value);
//     console.log(getRandomNumber(cpuField.value));
// });

