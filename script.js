async function searchCharacter() {
    const query = document.getElementById("searchInput").value;
    const container = document.getElementById("characterList");
    container.innerHTML = "Cargando...";
  
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`); // API de Rick y Morty
      const data = await response.json();
  
      if (data.results) {
        renderCharacters(data.results.slice(0, 10));
      } else {
        container.innerHTML = "No se encontraron personajes.";
      }
    } catch (error) {
      container.innerHTML = "Error al cargar los personajes.";
      console.error(error);
    }
  }
  
  function renderCharacters(characters) { // esta función se encarga de renderizar los personajes en la página
    const container = document.getElementById("characterList");
    container.innerHTML = "";
  
    characters.forEach(char => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${char.image}" alt="${char.name}">
        <h3>${char.name}</h3>
        <p>Especie: ${char.species}</p>
      `;
      container.appendChild(card);
    });
  }
  