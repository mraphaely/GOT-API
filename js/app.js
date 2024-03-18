// "characters": "https://thronesapi.com/api/v2/characters",
// "Continents": "https://thronesapi.com/api/v2/continents"
// "characters by id": "https://thronesapi.com/api/v2/characters/{id}",
// "Continents by id": "https://thronesapi.com/api/v2/continents/{id}"

const urlBase = "https://thronesapi.com/api/v2";

const gotCharacters = async () => {
    const res = await fetch(`${urlBase}/characters`) 
    return await res.json()
    
}; 

const gotContinents = async () => {
    const res = await fetch(`${urlBase}/continents`) 
    return await res.json()
}; 

const loadAllWitchPromiseAll = async ()=>{
    const [characters, continents] = await Promise.all([
        gotCharacters(),
        gotContinents(),
    ]);
     console.log('Character:',characters)
     showCharacter(characters)
     console.log('Continents:',continents)
};

loadAllWitchPromiseAll()

function showCharacter(characters){
    const characterContainer = document.getElementById('character-container');
    characters.map((character)=>{
          const divCharacter = document.createElement('div')
          divCharacter.id=`character-${character.id}`; 
          divCharacter.innerHTML =`
          <img id="img-character" src="${character.imageUrl}" alt="imagem do personagem"> 
  
            <article class="character-info">
              <h3>${character.fullName}</h3><br><br><br>
               
              <span>First Name:</span>
               <a class="informaciones" href="${character.firstName}">${character.firstName}</a><br>

              <span >Last Name:</span>
               <a class="informaciones" href="${character.lastName}">${character.lastName}</a><br>

              <span >Title:</span>
               <a class="informaciones" href="${character.title}">${character.title}</a><br>
  
               <span>Family:</span>
               <a  class="informaciones" href="${character.family}">${character.family}</a><br>
           </article>
          `;
          divCharacter.classList.add("character-box");
          characterContainer.appendChild(divCharacter);
  
          divCharacter.addEventListener("click", ()=>{
            characterDetails(character.id) 
          })
        });   
  }

function characterDetails(id) {
    console.log(`Detalhes do personagem com id ${id}`);
    const idEncrypted = encryptId(id)
    console.log(idEncrypted)
    window.location.href = `./pages/character.html?id=${idEncrypted}`
  }
  
  function encryptId(id){
    return id.toString(36)
  }


  