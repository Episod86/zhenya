'use strict';

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const getResponse = async (url) => {
  const response = await fetch(url) 
  const data = await response.json()

  console.log(data)

}

getResponse('https://jsonplaceholder.typicode.com/users')


//  

// const submitForm = async (e) => {
//   e.preventDefault();

  // let formData = new FormData(form);
  //   let formDataObj = Array.from(formData.entries()).reduce(
  //     (prev, [name, value]) => ({
  //       ...prev,
  //       [name]: value,
  //     }),
  //     {}
  //   );
  //   let formDataJSON = JSON.stringify(formDataObj);
//   const url = 'https://jsonplaceholder.typicode.com/users'
//   const response = await fetch(url);
//   console.log(response)

// }

// const submitForm = async (e) => {
//    e.preventDefault();



    // try {
    //   let formData = new FormData(form);
    //   let formDataObj = Array.from(formData.entries()).reduce(
    //     (prev, [name, value]) => ({
    //       ...prev,
    //       [name]: value,
    //     }),
    //     {}
    //   );
    //   let formDataJSON = JSON.stringify(formDataObj);

    //   let response = await fetch('https://reqres.in/api/', {
    //     method: 'POST',
    //     body: formDataJSON
    //   });

    //     let result = await response.json();
    //     alert(`Данные, переданные на сервер: ${result.data}`);
    //     form.hidden = true;
    //     document.body.insertAdjacentHTML('afterbegin','<div class="success">Данные загрузились!</div>');
    // } catch {
    //   email.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
    //   pass.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
    // };
// };


// const showMess = () => {
//   startButton.insertAdjacentHTML('afterend', `<div class = "message"></div>`);
//   const message = document.querySelector('.message');
//   const coords = startButton.getBoundingClientRect();

//   message.style.left = coords.left +"px";
//   message.style.top = coords.top - 45 + "px";
//   if (startButton.value === 'Пуск') {
//       message.innerHTML = 'Запустить счетчик';
//   } else {
//       message.innerHTML = 'Остановить счетчик';
//   }   
// }


// form.addEventListener('submit', submitForm);
