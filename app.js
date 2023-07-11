let pokeNameInput = document.getElementById("search");
const searchBtn = document.getElementById("search-button");
const pokeImage = document.getElementById("poke-image");
const pokeNName = document.getElementById("poke-name");
const pokeId = document.getElementById("poke-id");
const pokeType = document.getElementById("poke-type");
const pokeAbility = document.getElementById("poke-ability");
document.getElementById('poke-image').style.display = 'none';

searchBtn.addEventListener("click", async () => {
  let pokeName = pokeNameInput.value.toLowerCase();

  let llamadaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  let respuesta = await llamadaApi.json();

  //Test
  console.log(respuesta.forms[0]);

  // Obtener la URL de la imagen
  let imageUrl = respuesta.sprites.front_default;

  let name = respuesta.forms[0].name;
  let id = respuesta.id;
  let type = respuesta.types[0].type.name;
  let ability = respuesta.abilities[0].ability.name;

  // Asignar la URL de la imagen al atributo src del elemento de imagen
  pokeImage.src = imageUrl;
  document.getElementById('poke-image').style.display = 'block';

  pokeNName.innerHTML = name[0].toUpperCase() + name.slice(1);
  pokeId.innerHTML = "ID: " + id;
  pokeType.innerHTML = "Tipo: " + type;
  pokeAbility.innerHTML = "Habilidad: " + ability;
});
