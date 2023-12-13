const users = [
    { username: 'andy', password: '1234'},
    { username: 'bobby', password: '2345'},
    { username: 'candy', password: '3456'},
]

let attempts = 3;

while (attempts > 0) {
    let inp1 = prompt('Username:');
    let inp2 = prompt('Password:');

    let foundUser = users.find(user => user.username === inp1);

    if (foundUser) {
        if (foundUser.password === inp2) {
            alert('Welcome!');
            break;
        } else {
            alert('Incorrect password. Attempts left: ' + (--attempts));
        }
    } else {
        alert('No access: ' + (--attempts));
    }
}

if (attempts === 0) {
    alert('No access');
}
