const task_1 = document.querySelector('#task-1');
const task_2 = document.querySelector('#task-2');
const list = document.querySelector('#task-list');
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const msg = document.querySelector('.msg');


btn_1.addEventListener('click', (e) => {
    e.preventDefault();
    if(task_1.value === ''){
        alert('Name cannot be empty!');
    } else{
        // document.getElementsByClassName('msg').classList.toggle('msg-2');
        // console.log('Success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${task_1.value}`));
        list.appendChild(li);
        // task.value = '';
    }
});

btn_2.addEventListener('click', (e) => {
    e.preventDefault();
    if(task_2.value === ''){
        alert('Empty List!');
    } else{
        list.children[Number(task_2.value)].remove();
    }
});
































// const btn = document.querySelector('#btn');
// const inputName = document.querySelector('.name');
// const list = document.querySelector('.list');

// btn.addEventListener('submit',(e) => {
//     e.preventDefault();
//     if(inputName.value = ''){
//         alert('Name field cannot be empty!');
//     } else{
//         alert('success');
//         // const li = document.createElement('li');
//         // li.appendChild(document.createTextNode(`${inputName.value}`));
//         // list.appendChild(li);
//         // console.log(list);
//         inputName.value = '';
//     }
// });
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function(){
    return Person.dob.getFullYear();
}
const p1 = new Person('John', 'Doe', '4-22-1980');

console.log(p1.getBirthYear);
*/