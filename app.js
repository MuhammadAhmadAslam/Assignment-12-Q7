let CheckNumber = parseInt(prompt('Enter a number to check the number divisible by 3 or 5'))
if (CheckNumber % 3 == 0 && CheckNumber % 5 == 0) {
    alert(`This number ${CheckNumber} is multiple of 3 and 5`);
}else if(CheckNumber % 3 == 0){
    alert(`This number ${CheckNumber} is multiple of 3`);
}else if(CheckNumber % 5 == 0){
    alert(`This number ${CheckNumber} is multiple of 5`);
}else{
    alert(`Enter a number`);
}
