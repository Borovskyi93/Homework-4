const userHour = +prompt('Enter number of hours:');

if (isNaN(userHour) !== true && userHour !== 0) {
    const amountOfSeconds = BigInt(userHour * 3600);
    alert(amountOfSeconds);
} else {
    alert('INVALID DATA');
}

