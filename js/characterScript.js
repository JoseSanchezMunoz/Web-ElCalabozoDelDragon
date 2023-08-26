function showStats(characterId) {
    // Supongamos que tienes datos de estadísticas, nombres y rutas de imagen de personajes en un objeto
    const characters = {
        1: { name: "Personaje 1", hp: 100, atk: 20, def: 10, man: 50, image: "img/character1.png" },
        2: { name: "Personaje 2", hp: 120, atk: 25, def: 12, man: 40, image: "img/character2.png" },
        3: { name: "Personaje 3", hp: 90, atk: 18, def: 8, man: 60, image: "img/character3.png" }
    };

    // Obtener las estadísticas, el nombre y la ruta de la imagen del personaje seleccionado
    const selectedCharacter = characters[characterId];

    // Mostrar las estadísticas, el nombre y la imagen del personaje
    document.getElementById('character-name').textContent = selectedCharacter.name;
    document.getElementById('character-hp').textContent = selectedCharacter.hp;
    document.getElementById('character-atk').textContent = selectedCharacter.atk;
    document.getElementById('character-def').textContent = selectedCharacter.def;
    document.getElementById('character-man').textContent = selectedCharacter.man;
    document.getElementById('character-image').src = selectedCharacter.image;
    document.getElementById('character-stats').style.display = 'block';
}

function confirmSelection() {
    // Aquí puedes realizar acciones cuando se confirma la selección
    alert("Personaje seleccionado y confirmado");
    // Guardar el personaje seleccionado en el almacenamiento local
    const selectedCharacter = {
        name: document.getElementById('character-name').textContent,
        hp: document.getElementById('character-hp').textContent,
        atk: document.getElementById('character-atk').textContent,
        def: document.getElementById('character-def').textContent,
        man: document.getElementById('character-man').textContent,
        image: document.getElementById('character-image').src
    };
    localStorage.setItem('selectedCharacter', JSON.stringify(selectedCharacter));
    // Redirigir a la página de batalla
    window.location.href = 'battle.html';
}

function resetSelection() {
    // Ocultar las estadísticas y restablecer la selección
    document.getElementById('character-stats').style.display = 'none';
}