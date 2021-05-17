console.log("hey");

const nameForm = document.querySelector('#enterName');
const outputName = document.querySelector('#display');


nameForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = nameForm.elements.username;
    addName(nameInput.value)

    nameInput.value = '';
});

const addName = (username) =>{
    const nameOutput = document.createElement('p');
    nameOutput.append(username);
    outputName.append(nameOutput);
}


