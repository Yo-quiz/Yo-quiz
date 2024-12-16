// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Alcaldero", img: "img/Alcaldero.png" },
    { name: "Sinná", img: "img/Sinna.png" },
    { name: "Sinnareno", img: "img/Sinnareno.png" },
    { name: "Katano", img: "img/Katano.png" },
    { name: "Katananái", img: "img/Katananai.png" },
    { name: "Katakroken", img: "img/Katakroken.png" },
    { name: "Mochimacho", img: "img/Mochimacho.png" },
    { name: "Machimío", img: "img/Machimio.png" },
    { name: "Yelmandante", img: "img/Yelmandante.png" },
    { name: "Juntollero", img: "img/Juntollero.png" },
    { name: "Genedáver", img: "img/Genedaver.png" },
    { name: "Flamileón", img: "img/Flamileon.png" },
    { name: "Tembloleón", img: "img/Tembloleon.png" },
    { name: "Sirleón", img: "img/Sirleon.png" },
    { name: "Ludorái", img: "img/Ludorai.png" },
    { name: "Lustre", img: "img/Lustre.png" },
    { name: "Furtre", img: "img/Furtre.png" },
    { name: "Dortre", img: "img/Dortre.png" },
    { name: "Benkei", img: "img/Benkei.png" },
    { name: "B3-NK1", img: "img/B3-NK1.png" },
    { name: "Sushiyama", img: "img/Sushiyama.png" },
    { name: "Kapunki", img: "img/Kapunki.png" },
    { name: "Lucharabajo", img: "img/Lucharabajo.png" },
    { name: "Camperabajo", img: "img/Camperabajo.png" },
    { name: "Chafarabajo", img: "img/Chafarabajo.png" },
    { name: "Osfurio", img: "img/Osfurio.png" },
    { name: "Sacoco", img: "img/Sacoco.png" },
    { name: "Mokopavo", img: "img/Mokopavo.png" },
    { name: "Pachús", img: "img/Pachus.png" },
    { name: "Komemo", img: "img/Komemo.png" },
    { name: "Tontolín", img: "img/Tontolin.png" },
    { name: "Yopaso", img: "img/Yopaso.png" },
    { name: "Puf", img: "img/Puf.png" },
    { name: "Yanomás", img: "img/Yanomas.png" },
    { name: "Algazara", img: "img/Algazara.png" },
    { name: "Labizula", img: "img/Labizula.png" },
    { name: "Cotilleja", img: "img/Cotilleja.png" },
    { name: "Marulleja", img: "img/Marulleja.png" },
    { name: "Esquelleja", img: "img/Esquelleja.png" },
    { name: "Cupístolo", img: "img/Cupistolo.png" },
    { name: "Casanovo", img: "img/Casanovo.png" },
    { name: "Casanono", img: "img/Casanono.png" },
    { name: "Ondívoro", img: "img/Ondivoro.png" },
    { name: "Coberturo", img: "img/Coberturo.png" },
    { name: "Estatinarca", img: "img/Estatinarca.png" },
    { name: "Telespejo", img: "img/Telespejo.png" },
    { name: "Malpejismo", img: "img/Malpejismo.png" },
    { name: "Ilúho", img: "img/Iluho.png" },
    { name: "Elúho", img: "img/Eluho.png" },
    { name: "Ubiúho", img: "img/Ubiuho.png" },
    { name: "Trilépata", img: "img/Trilepata.png" },
    { name: "Tetrariosa", img: "img/Tetrariosa.png" },
    { name: "Tengu", img: "img/Tengu.png" },
    { name: "Flamngu", img: "img/Flamngu.png" },
    { name: "Kyubi", img: "img/Kyubi.png" },
{ name: "Nievacolas", img: "img/Nievacolas.png" },
{ name: "Tentelento", img: "img/Tentelento.png" },
{ name: "Tentemacho", img: "img/Tentemacho.png" },
{ name: "Tenterila", img: "img/Tenterila.png" },
{ name: "Nihablar", img: "img/Nihablar.png" },
{ name: "Impás", img: "img/Impas.png" },
{ name: "Murallín", img: "img/Murallin.png" },
{ name: "Lorigón", img: "img/Lorigon.png" },
{ name: "Inquielifante", img: "img/Inquielifante.png" },
{ name: "Perselefante", img: "img/Perselefante.png" },
{ name: "Globqueo", img: "img/Globqueo.png" },
{ name: "Globtundente", img: "img/Globtundente.png" },
{ name: "Montaña Loca", img: "img/Montaña_Loca.png" },
{ name: "Lord Lava", img: "img/Lord_Lava.png" },
{ name: "Rebelcebú", img: "img/Rebelcebu.png" },
{ name: "Caporrista", img: "img/Caporrista.png" },
{ name: "Hermanión", img: "img/Hermanion.png" },
{ name: "Pegarabajo", img: "img/Pegarabajo.png" },
{ name: "Enormarabajo", img: "img/Enormarabajo.png" },
{ name: "Cuernarabajo", img: "img/Cuernarabajo.png" },
{ name: "Castelius III", img: "img/Castelius_III.png" },
{ name: "Castelius II", img: "img/Castelius_II.png" },
{ name: "Castelius I", img: "img/Castelius_I.png" },
{ name: "Maxicastelius", img: "img/Maxicastelius.png" },
{ name: "Robonyan", img: "img/Robonyan.png" },
{ name: "Aureonyan", img: "img/Aureonyan.png" },
{ name: "Pom", img: "img/Pom.png" },
{ name: "Flus", img: "img/Flus.png" },
    { name: "Deslumbrella", img: "img/Deslumbrella.png" },
    { name: "Rechinella", img: "img/Rechinella.png" },
    { name: "Esquelebella", img: "img/Esquelebella.png" },
    { name: "Ningarra", img: "img/Ningarra.png" },
    { name: "Habilgarra", img: "img/Habilgarra.png" },
    { name: "Cantigarra", img: "img/Cantigarra.png" },
    { name: "Escanlofrío", img: "img/Escanlofrio.png" },
    { name: "Frihuahua", img: "img/Frihuahua.png" },
    { name: "Lavadenco", img: "img/Lavadenco.png" },
    { name: "Jibanyan", img: "img/Jibanyan.png" },
    { name: "Espinyan", img: "img/Espinyan.png" },
    { name: "Pelochnyan", img: "img/Pelochnyan.png" },
    { name: "Kappandante", img: "img/Kappandante.png" },
    { name: "Kappadachín", img: "img/Kappadachin.png" },
    { name: "Kapparfista", img: "img/Kapparfista.png" },
    { name: "Komasan", img: "img/Komasan.png" },
    { name: "Komaleón", img: "img/Komaleon.png" },
    { name: "Komajiro", img: "img/Komajiro.png" },
    { name: "Komatigrado", img: "img/Komatigrado.png" },
    { name: "Baku", img: "img/Baku.png" },
    { name: "Blanpir", img: "img/Blanpir.png" },
    { name: "Pufipatitas", img: "img/Pufipatitas.png" },
    { name: "Pufilindo", img: "img/Pufilindo.png" },
    { name: "Pufimaloso", img: "img/Pufimaloso.png" },
    { name: "Fristina", img: "img/Fristina.png" },
    { name: "Granizia", img: "img/Granizia.png" },
    { name: "Dámona", img: "img/Damona.png" },
{ name: "Cimbrón", img: "img/Cimbron.png" },
{ name: "Pasodón", img: "img/Pasodon.png" },
{ name: "Ritma", img: "img/Ritma.png" },
{ name: "Kieroto", img: "img/Kieroto.png" },
{ name: "Zampo", img: "img/Zampo.png" },
{ name: "Abuzampa", img: "img/Abuzampa.png" },
{ name: "Gargazampa", img: "img/Gargazampa.png" },
{ name: "Aburroz", img: "img/Aburroz.png" },
{ name: "Nomedá", img: "img/Nomeda.png" },
{ name: "Opti", img: "img/Opti.png" },
{ name: "Enerposa", img: "img/Enerposa.png" },
{ name: "Eneposa", img: "img/Eneposa.png" },
{ name: "Mejorposa", img: "img/Mejorposa.png" },
{ name: "Vivariposa", img: "img/Vivariposa.png" },
{ name: "Felisonte", img: "img/Felisonte.png" },
{ name: "Reversa", img: "img/Reversa.png" },
{ name: "Reversada", img: "img/Reversada.png" },
{ name: "Tricotom", img: "img/Tricotom.png" },
{ name: "Dádivo", img: "img/Dadivo.png" },
{ name: "Bolilete", img: "img/Bolilete.png" },
{ name: "Doblilete", img: "img/Doblilete.png" },
{ name: "Papá Rayo", img: "img/Papa_Rayo.png" },
{ name: "Tío Infinito", img: "img/Tio_Infinito.png" },
{ name: "Mamá Aura", img: "img/Mama_Aura.png" },
{ name: "Tita Corazón", img: "img/Tita_Corazon.png" },
{ name: "Noguío", img: "img/Noguio.png" },
{ name: "Topami", img: "img/Topami.png" },
{ name: "Algio", img: "img/Algio.png" },
{ name: "Agujeto", img: "img/Agujeto.png" },
{ name: "Machaka", img: "img/Machaka.png" },
{ name: "Negatisquito", img: "img/Negatisquito.png" },
{ name: "Deprisquito", img: "img/Deprisquito.png" },
{ name: "Picorrón", img: "img/Picorron.png" },
{ name: "Nomevén", img: "img/Nomeven.png" },
{ name: "Nostoy", img: "img/Nostoy.png" },
{ name: "Nul", img: "img/Nul_.png" },
{ name: "Enciélago", img: "img/Encielago.png" },
{ name: "Caseriélago", img: "img/Caserielago.png" },
{ name: "Ermiciélago", img: "img/Ermicielago.png" },
{ name: "Suspicioni", img: "img/Suspicioni.png" },
{ name: "Pataletoni", img: "img/Pataletoni.png" },
{ name: "Contrarioni", img: "img/Contrarioni.png" },
{ name: "Tengulecto", img: "img/Tengulecto.png" },
{ name: "Tengullón", img: "img/Tengullon.png" },
{ name: "Negasus", img: "img/Negasus.png" },
{ name: "Pifiasus", img: "img/Pifiasus.png" },
{ name: "Timidiablo", img: "img/Timidiablo.png" },
{ name: "Osademonio", img: "img/Osademonio.png" },
{ name: "Conde Caries", img: "img/Conde_Caries.png" },
{ name: "Avarqueroso", img: "img/Avarqueroso.png" },
{ name: "Diablés", img: "img/Diables.png" },
{ name: "Ejemtos", img: "img/Ejemtos.png" },
{ name: "Erizlor", img: "img/Erizlor.png" },
{ name: "Cartepollo", img: "img/Cartepollo.png" },
{ name: "Rafaz", img: "img/Rafaz.png" },
{ name: "Ayay", img: "img/Ayay.png" },
{ name: "Horterraro", img: "img/Horterraro.png" },
{ name: "Alarción", img: "img/Alarcion.png" },
{ name: "Cantonio", img: "img/Cantonio.png" },
{ name: "Multiniche", img: "img/Multiniche.png" },
{ name: "Ser Bero", img: "img/Ser_Bero.png" },
{ name: "Goto", img: "img/Goto.png" },
{ name: "Sirimiri", img: "img/Sirimiri.png" },
{ name: "Copo", img: "img/Copo.png" },
{ name: "Ventisquero", img: "img/Ventisquero.png" },
{ name: "Coagulón", img: "img/Coagulon.png" },
{ name: "Reboca", img: "img/Reboca.png" },
{ name: "Pilicajosa", img: "img/Pilicajosa.png" },
{ name: "Negatalia", img: "img/Negatalia.png" },
{ name: "Cuesco", img: "img/Cuesco.png" },
{ name: "Péditum", img: "img/Peditum.png" },
{ name: "Graciosno", img: "img/Graciosno.png" },
{ name: "Hilarión", img: "img/Hilarion.png" },
{ name: "Arruñona", img: "img/Arruñona.png" },
{ name: "Belladona", img: "img/Belladona.png" },
{ name: "Eterna", img: "img/Eterna.png" },
{ name: "Insomna", img: "img/Insomna.png" },
{ name: "Morfea", img: "img/Morfea.png" },
{ name: "Noko", img: "img/Noko.png" },
{ name: "Florinoko", img: "img/Florinoko.png" },
{ name: "Pandanoko", img: "img/Pandanoko.png" },
{ name: "Anjijila", img: "img/Anjijila.png" },
{ name: "Tenongrio", img: "img/Tenongrio.png" },
{ name: "Urnaconda", img: "img/Urnaconda.png" },
{ name: "Pezqueroso", img: "img/Pezqueroso.png" },
{ name: "Pezgativo", img: "img/Pezgativo.png" },
{ name: "Pezquiciado", img: "img/Pezquiciado.png" },
{ name: "Draqui", img: "img/Draqui.png" },
{ name: "Lord Dragón", img: "img/Lord_Dragon.png" },
{ name: "Dragón Azur", img: "img/Dragon_Azur.png" },
{ name: "Ido", img: "img/Ido.png" },
{ name: "Turdido", img: "img/Turdido.png" },
{ name: "Pellurón", img: "img/Pelluron.png" },
{ name: "Pringurón", img: "img/Pringuron.png" },
{ name: "Boquirroto", img: "img/Boquirroto.png" },
{ name: "Yopago", img: "img/Yopago.png" },
{ name: "Charlatón", img: "img/Charlaton.png" },
{ name: "Tochaplátano", img: "img/Tochaplatano.png" },
{ name: "Mandícoro", img: "img/Mandicoro.png" },
{ name: "Ciniserpe", img: "img/Ciniserpe.png" },
{ name: "Arfidio", img: "img/Arfidio.png" },
{ name: "Venocto", img: "img/Venocto.png" },
{ name: "Venoctoscuro", img: "img/Venoctoscuro.png" },
{ name: "Shogunyan", img: "img/Shogunyan.png" },
{ name: "Komasura", img: "img/Komasura.png" },
{ name: "Dandiniche", img: "img/Dandiniche.png" },
{ name: "Abuflorido", img: "img/Abuflorido.png" },
{ name: "Dorantúo", img: "img/Dorantuo.png" },
{ name: "Zafinyan", img: "img/Zafinyan.png" },
{ name: "Esmenyan", img: "img/Esmenyan.png" },
{ name: "Rubinyan", img: "img/Rubinyan.png" },
{ name: "Topanyan", img: "img/Topanyan.png" },
{ name: "Diamanyan", img: "img/Diamanyan.png" },
{ name: "Babamandra", img: "img/Babamandra.png" },
{ name: "Termascino", img: "img/Termascino.png" },
{ name: "Bergantín", img: "img/Bergantin.png" },
{ name: "Animanstruo", img: "img/Animanstruo.png" },
{ name: "Fantasmurai", img: "img/Fantasmurai.png" },
{ name: "Tarantutor", img: "img/Tarantutor.png" },
{ name: "Dr. Majarov", img: "img/Dr._Majarov.png" },
{ name: "McKraken", img: "img/McKraken.png" },
{ name: "McKraken", img: "img/McKraken_2.png" },
{ name: "Duoleta", img: "img/Duoleta.png" },
{ name: "Cantaderna", img: "img/Cantaderna.png" },
{ name: "Ojimandra", img: "img/Ojimandra.png" },
{ name: "Jabalupo", img: "img/Jabalupo.png" },
{ name: "Estigio VI", img: "img/Estigio_VI.png" },
{ name: "Clipso", img: "img/Clipso.png" },
{ name: "Dr. Sintripas", img: "img/Dr._Sintripas.png" },
{ name: "Terrormadura", img: "img/Terrormadura.png" },
{ name: "Calarrupto", img: "img/Calarrupto.png" },
{ name: "Caldewok", img: "img/Caldewok.png" },
{ name: "Gargantúo", img: "img/Gargantuo.png" },
{ name: "Cazamentires", img: "img/Cazamentires.png" },
{ name: "Demoniorco", img: "img/Demoniorco.png" },

];

let score = 0;
let gameEnded = false; // Para evitar que se actualice el score una vez que el juego haya terminado

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego terminó, no hacer nada más
    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());
    yoKaiList.forEach((yoKai, index) => {
        if (normalizeString(yoKai.name) === userAnswer) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img;
                score++;
                document.getElementById("score").textContent = score;
                checkGameEnd(); // Verifica si el juego ha terminado
            }
        }
    });
    document.getElementById("answer-input").value = "";
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true; // Termina el juego
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar la imagen de "¡Felicidades!"
    }
}

// Manejador de eventos para la entrada del usuario
document.getElementById("answer-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
});

let startTime;
let timerInterval;

// Función para iniciar el temporizador
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

// Función para actualizar el temporizador
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    // Convertimos el tiempo en horas, minutos y segundos
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Mostramos el tiempo en el formato HH:MM:SS
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timerInterval);
}

// Función para mostrar la imagen de "¡Felicidades!"
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "img/congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw"; // Asegura que ocupa todo el ancho
    congratsImg.style.height = "auto"; // Mantiene la proporción
    congratsImg.style.zIndex = "1000"; // Asegura que esté por encima de todo
    congratsImg.style.cursor = "pointer"; // Muestra que se puede clicar

    // Añadir el evento para ocultarla al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove(); // Elimina la imagen de la pantalla
    });

    // Añadir la imagen al body
    document.body.appendChild(congratsImg);
}

// Llamar al temporizador al cargar la página
startTimer();
