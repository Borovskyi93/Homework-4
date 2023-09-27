const userHour = +prompt('Enter number of hours:');

if (userHour) {
    const amountOfSeconds = userHour * 3600;
    alert(amountOfSeconds);
} else {
    alert('INVALID DATA');
}

