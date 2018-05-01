// Task 1

const newLoginDisplay = document.querySelector('#newLoginDisplay');
const loginArray = document.querySelector('#loginArray');

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = function (logins, login) {
    let varForCheckLoginValidity = checkLoginValidity(login);

    if (varForCheckLoginValidity) {
        let varForCheckIfLoginExists = checkIfLoginExists(logins, login);
        if (varForCheckIfLoginExists) {
            alert('Такой логин уже используется!');
            console.log(logins);
            newLoginDisplay.innerText = 'Такой логин уже используется!';
            loginArray.innerText = `Массив паролей: [${logins.join(', ')}]`;
            return;
        } else {
            alert('Логин успешно добавлен!');
            logins.push(login);
            console.log(logins);
            newLoginDisplay.innerText = 'Логин успешно добавлен!';
            loginArray.innerText = `Массив паролей: [${logins.join(', ')}]`;
            return;
        }
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        newLoginDisplay.innerText = 'Ошибка! Логин должен быть от 4 до 16 символов';
        loginArray.innerText = `Массив паролей: [${logins.join(', ')}]`;
        return;
    }

};

const checkLoginValidity = function (login) {
    if (typeof login !== 'string') {
        return false;
    } else {
        if (login.length >= 4 && login.length <= 16) {
            return true;
        } else {
            return false;
        }
    }
}

const checkIfLoginExists = function (logins, login) {
    let chechExistingLogin = false;
    for (const existingLogin of logins) {
        if (login === existingLogin) {
            chechExistingLogin = true;
        }
    }
    return chechExistingLogin;
};

let newLogin = prompt('Введите новый логин');
addLogin(logins, newLogin);