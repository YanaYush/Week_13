const firstName = document.getElementById('input_wrapper__name');
const photo = document.getElementById('input_wrapper__picture');
const message = document.getElementById('comment');
const wrapper = document.getElementById('outputcomment');
let currentdate = new Date();

const checkName = () => {
    const name = firstName.value;
    const userName = name.trim().split(" ");
    const changedName = [];

    userName.forEach((element) => {
        let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
        changedName.push(newName);
    });

    const nameFormatted = changedName.join(" ");
    return nameFormatted;
};

firstName.addEventListener("change", () => {
    firstName.value = checkName();
});

checkbox1.addEventListener("change", () => {
    if (this.checked = true) {
        checkbox2.checked = false
    }
});

checkbox2.addEventListener("change", () => {
    if (this.checked = true) {
        checkbox1.checked = false
    }
});

function checkSpam() {
    const textAntiSpam = message.value.replace(/viagra|XXX/gi, '***');
    return textAntiSpam;
}


function getResult() {

    let post = document.createElement('div');
    wrapper.append(post);

    const messageAvatar = document.createElement('img');
    messageAvatar.height = 50
    messageAvatar.width = 50
    const imgSources = [
        'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg',
        'https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg',
        'https://cs14.pikabu.ru/post_img/2021/05/08/12/1620504647131424359.jpg',
        'https://cs14.pikabu.ru/post_img/2021/05/08/12/1620504650176973363.jpg',
        'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'
    ]
    if (photo.value == '') {
        messageAvatar.src = imgSources[Math.floor(Math.random() * 5)]

    } else {
        messageAvatar.src = photo.value;
    }


    post.append(messageAvatar);

    if (firstName.value == "") { firstName.value = "Username" }

    const messageUserName = document.createElement('p');
    if (!checkbox2.checked) {
        messageUserName.textContent = checkName();
    } else {
        messageUserName.textContent = "Username";
    }
    post.append(messageUserName);

    const messageText = document.createElement('p');
    messageText.textContent = checkSpam();
    post.append(messageText);

    const messageTime = document.createElement('p');
    messageTime.textContent = changeDateFormat(currentdate.getDate()) + '.' + changeDateFormat((currentdate.getMonth() + 1)) + '.'
        + changeDateFormat(currentdate.getFullYear()) + '  ' + changeDateFormat(currentdate.getHours()) + ':'
        + changeDateFormat(currentdate.getMinutes()) + ':' + changeDateFormat(currentdate.getSeconds());
    post.append(messageTime)
}

function changeDateFormat(dateformat) {
    return ('00' + dateformat).slice(-2)
}
