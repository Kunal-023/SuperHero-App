const token = "218151357640321"
const baseurl = `https://superheroapi.com/api.php/${token}`

const SuperHeroDiv = document.getElementById("HeroImage")
const buttonDiv = document.getElementById("button")
const SearchDiv = document.getElementById("txtButton")
const searchtxt = document.getElementById("searchinp")
const nameDiv = document.getElementById("name")
const statsDiv = document.getElementById("Stats")

const SuperHero = (id) => {
  fetch(`${baseurl}/${id}`)
    .then(response => response.json())
    .then(json => {
      const stats = getStats(json)
      nameDiv.innerHTML = `<h2>${json.name}</h2>`
      console.log(json)
      SuperHeroDiv.innerHTML = `<img src="${json.image.url}"/>`
      statsDiv.innerHTML = `<h2> -: STATS :- </h2> ${stats}`
    })
}

const getHero = (name) => {
  name = searchtxt.value
  fetch(`${baseurl}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      const stats = getStats(hero)
      nameDiv.innerHTML = `<h2>${hero.name}</h2>`
      console.log(hero)
      SuperHeroDiv.innerHTML = `<img src="${hero.image.url}"/>`
      statsDiv.innerHTML = `<h2> -: STATS :- </h2> ${stats}`
    })
}

buttonDiv.onclick = () => {
  id = Math.floor((Math.random() * 731) + 1)
  SuperHero(id)
}

SearchDiv.onclick = () => {
  getHero()
}

const getStats = (character) => {
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p> ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  })
  console.log(stats)
  return stats.join(" ")
}
