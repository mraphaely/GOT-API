//https://thronesapi.com/api/v2/continents
//operações assíncronas, funções async retornam uma promessa, 
//e await é usada para esperar que a promessa seja aceita.

document.addEventListener('DOMContentLoaded', async () => {
  const url = 'https://thronesapi.com/api/v2/continents';
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao receber dados!');
    }
    const data = await response.json();
    gotContinents(data);
  } catch (err) {
    console.log(err);
  }
});

function gotContinents(continents) {
  const select = document.querySelector('#select');
  continents.map((continent) => {
    const option = document.createElement('option');
    option.innerHTML = `${continent.name}`;
    option.value = continent.name;
    select.appendChild(option);
  });
}

async function btnPergam(){
  const select = document.getElementById('select').value;
  const url = `https://thronesapi.com/api/v2/continents/${select}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao receber dados!');
    }
    const data = await response.json();
    gotContinents(data);
  } catch (err) {
    console.log(err);
  }
  
  
  
  const divContinents = document.querySelector(".div-form");
  divContinents.innerHTML =`
    <img id="pergam-img" src="../img/pergam(${select}).png" alt="continents">
  `;
};



// const btn = document.getElementsByClassName('btn');
// btn.addEventListener(showlist)('click', async () => {
//   const url = `https://thronesapi.com/api/v2/continents/${select}`;
//   const select = document.getElementById('select').value;

  
  
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Erro ao receber dados');
//     }
//     const data = await response.json();
//     gotContinents(data.name);
//   } catch (err) {
//     console.log(err);
//   }

//   const variavel = '0'
//   const divContinents = document.getElementById( "div-form" );
//   divContinents.innerHTML =`
//     <img src="../img/pergam(${variavel}).png" alt="">
//       `;
// });


// function showlist(){
//   const variavel = '0'
//   const divContinents = document.getElementById( "div-form" );
//   divContinents.innerHTML =`
//     <img src="../img/pergam(${variavel}).png" alt="">
//       `;
// }

  


  


