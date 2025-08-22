const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    fs.appendFileSync('accounts.txt', `${username}:${password}\n`);
    res.send('Регистрация успешна!');
});

// Добавьте другие endpoints: /login, /send, /getMessages
app.listen(3000);
