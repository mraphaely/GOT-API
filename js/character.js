// const urlParam = new URLSearchParams(window.characters0.search)
// document.write(urlParam)
// const idParam = urlParam.get('id')
// document.write('<br>', idParam)
// document.write('<br>', descryptId(idParam))
function descryptId(id){
    return parseInt(id, 36)
}

async function loadCharacter(baseUrl, id){
  try {
    const response = await fetch(`${baseUrl}/${id}`)
    if(!response){
        throw new Error('Erro ao carregar o personagem')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    throw error;
  }
}

async function loadAll(){
    const urlParam = new URLSearchParams(window.location.search)
    // document.write(urlParam)
    const idParam = urlParam.get('id');

    if(!idParam){
    console.log('ID não encontrado na URL')
    return
    }

    const url=`https://thronesapi.com/api/v2/characters`
    const idDescryptId = descryptId(idParam)
    console.log(idDescryptId)

    try {
        const characters = await loadCharacter(url, idDescryptId)
        console.log('Personagem: ', characters)
        renderizarPersonagem(characters)

    } catch (error) {
        console.log(error)
    }
}
loadAll()

async function renderizarPersonagem(characters){
    // console.log(character)
    const img = document.querySelector('.img')

    const fullName = document.querySelector('.fullName')
    const firstName = document.querySelector('.firstName')
    const lastName = document.querySelector('.lastName')
    const title = document.querySelector('.title')
    const family = document.querySelector('.family')
   
    img.src = characters.imageUrl

    fullName.innerHTML = characters.fullName
    firstName.innerHTML = characters.firstName
    lastName.innerHTML = characters.lastName
    title.innerHTML = characters.title
    family.innerHTML = characters.family
    
}