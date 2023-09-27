const userHour = +prompt('Enter number of hours:');

if (userHour) {
    const amountOfSeconds = BigInt(userHour * 3600);
    alert(amountOfSeconds);
} else {
    alert('INVALID DATA');
}

