// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Alcaldero", img: "alcaldero.png" },
    { name: "Sinná", img: "Sinna.png" },
    { name: "Sinnareno", img: "Sinnareno.png" },
    { name: "Katano", img: "Katano.png" },
    { name: "Katananái", img: "Katananai.png" },
    { name: "Katakroken", img: "Katakroken.png" },
    { name: "Mochimacho", img: "Mochimacho.png" },
    { name: "Machimío", img: "Machimio.png" },
    { name: "Yelmandante", img: "Yelmandante.png" },
    { name: "Juntollero", img: "Juntollero.png" },
    { name: "Genedáver", img: "Genedaver.png" },
    { name: "Flamileón", img: "Flamileon.png" },
    { name: "Tembloleón", img: "Tembloleon.png" },
    { name: "Sirleón", img: "Sirleon.png" },
    { name: "Ludorái", img: "Ludorai.png" },
    { name: "Lustre", img: "Lustre.png" },
    { name: "Furtre", img: "Furtre.png" },
    { name: "Dortre", img: "Dortre.png" },
    { name: "Benkei", img: "Benkei.png" },
    { name: "B3-NK1", img: "B3-NK1.png" },
    { name: "Sushiyama", img: "Sushiyama.png" },
    { name: "Kapunki", img: "Kapunki.png" },
    { name: "Lucharabajo", img: "Lucharabajo.png" },
    { name: "Camperabajo", img: "Camperabajo.png" },
    { name: "Chafarabajo", img: "Chafarabajo.png" },
    { name: "Osfurio", img: "Osfurio.png" },
    { name: "Sacoco", img: "Sacoco.png" },
    { name: "Mokopavo", img: "Mokopavo.png" },
    { name: "Pachús", img: "Pachus.png" },
    { name: "Komemo", img: "Komemo.png" },
    { name: "Tontolín", img: "Tontolin.png" },
    { name: "Yopaso", img: "Yopaso.png" },
    { name: "Puf", img: "Puf.png" },
    { name: "Yanomás", img: "Yanomas.png" },
    { name: "Algazara", img: "Algazara.png" },
    { name: "Labizula", img: "Labizula.png" },
    { name: "Cotilleja", img: "Cotilleja.png" },
    { name: "Marulleja", img: "Marulleja.png" },
    { name: "Esquelleja", img: "Esquelleja.png" },
    { name: "Cupístolo", img: "Cupistolo.png" },
    { name: "Casanovo", img: "Casanovo.png" },
    { name: "Casanono", img: "Casanono.png" },
    { name: "Ondívoro", img: "Ondivoro.png" },
    { name: "Coberturo", img: "Coberturo.png" },
    { name: "Estatinarca", img: "Estatinarca.png" },
    { name: "Telespejo", img: "Telespejo.png" },
    { name: "Malpejismo", img: "Malpejismo.png" },
    { name: "Ilúho", img: "Iluho.png" },
    { name: "Elúho", img: "Eluho.png" },
    { name: "Ubiúho", img: "Ubiuho.png" },
    { name: "Trilépata", img: "Trilepata.png" },
    { name: "Tetrariosa", img: "Tetrariosa.png" },
    { name: "Tengu", img: "Tengu.png" },
    { name: "Flamngu", img: "Flamngu.png" },
    { name: "Kyubi", img: "Kyubi.png" },
{ name: "Nievacolas", img: "Nievacolas.png" },
{ name: "Tentelento", img: "Tentelento.png" },
{ name: "Tentemacho", img: "Tentemacho.png" },
{ name: "Tenterila", img: "Tenterila.png" },
{ name: "Nihablar", img: "Nihablar.png" },
{ name: "Impás", img: "Impas.png" },
{ name: "Murallín", img: "Murallin.png" },
{ name: "Lorigón", img: "Lorigon.png" },
{ name: "Inquielifante", img: "Inquielifante.png" },
{ name: "Perselefante", img: "Perselefante.png" },
{ name: "Globqueo", img: "Globqueo.png" },
{ name: "Globtundente", img: "Globtundente.png" },
{ name: "Montaña Loca", img: "Montaña_Loca.png" },
{ name: "Lord Lava", img: "Lord_Lava.png" },
{ name: "Rebelcebú", img: "Rebelcebu.png" },
{ name: "Caporrista", img: "Caporrista.png" },
{ name: "Hermanión", img: "Hermanion.png" },
{ name: "Pegarabajo", img: "Pegarabajo.png" },
{ name: "Enormarabajo", img: "Enormarabajo.png" },
{ name: "Cuernarabajo", img: "Cuernarabajo.png" },
{ name: "Castelius III", img: "Castelius_III.png" },
{ name: "Castelius II", img: "Castelius_II.png" },
{ name: "Castelius I", img: "Castelius_I.png" },
{ name: "Maxicastelius", img: "Maxicastelius.png" },
{ name: "Robonyan", img: "Robonyan.png" },
{ name: "Aureonyan", img: "Aureonyan.png" },
{ name: "Pom", img: "Pom.png" },
{ name: "Flus", img: "Flus.png" },
    { name: "Deslumbrella", img: "Deslumbrella.png" },
    { name: "Rechinella", img: "Rechinella.png" },
    { name: "Esquelebella", img: "Esquelebella.png" },
    { name: "Ningarra", img: "Ningarra.png" },
    { name: "Habilgarra", img: "Habilgarra.png" },
    { name: "Cantigarra", img: "Cantigarra.png" },
    { name: "Escanlofrío", img: "Escanlofrio.png" },
    { name: "Frihuahua", img: "Frihuahua.png" },
    { name: "Lavadenco", img: "Lavadenco.png" },
    { name: "Jibanyan", img: "Jibanyan.png" },
    { name: "Espinyan", img: "Espinyan.png" },
    { name: "Pelochnyan", img: "Pelochnyan.png" },
    { name: "Kappandante", img: "Kappandante.png" },
    { name: "Kappadachín", img: "Kappadachin.png" },
    { name: "Kapparfista", img: "Kapparfista.png" },
    { name: "Komasan", img: "Komasan.png" },
    { name: "Komaleón", img: "Komaleon.png" },
    { name: "Komajiro", img: "Komajiro.png" },
    { name: "Komatigrado", img: "Komatigrado.png" },
    { name: "Baku", img: "Baku.png" },
    { name: "Blanpir", img: "Blanpir.png" },
    { name: "Pufipatitas", img: "Pufipatitas.png" },
    { name: "Pufilindo", img: "Pufilindo.png" },
    { name: "Pufimaloso", img: "Pufimaloso.png" },
    { name: "Fristina", img: "Fristina.png" },
    { name: "Granizia", img: "Granizia.png" },
    { name: "Dámona", img: "Damona.png" },
{ name: "Cimbrón", img: "Cimbron.png" },
{ name: "Pasodón", img: "Pasodon.png" },
{ name: "Ritma", img: "Ritma.png" },
{ name: "Kieroto", img: "Kieroto.png" },
{ name: "Zampo", img: "Zampo.png" },
{ name: "Abuzampa", img: "Abuzampa.png" },
{ name: "Gargazampa", img: "Gargazampa.png" },
{ name: "Aburroz", img: "Aburroz.png" },
{ name: "Nomedá", img: "Nomeda.png" },
{ name: "Opti", img: "Opti.png" },
{ name: "Enerposa", img: "Enerposa.png" },
{ name: "Eneposa", img: "Eneposa.png" },
{ name: "Mejorposa", img: "Mejorposa.png" },
{ name: "Vivariposa", img: "Vivariposa.png" },
{ name: "Felisonte", img: "Felisonte.png" },
{ name: "Reversa", img: "Reversa.png" },
{ name: "Reversada", img: "Reversada.png" },
{ name: "Tricotom", img: "Tricotom.png" },
{ name: "Dádivo", img: "Dadivo.png" },
{ name: "Bolilete", img: "Bolilete.png" },
{ name: "Doblilete", img: "Doblilete.png" },
{ name: "Papá Rayo", img: "Papa_Rayo.png" },
{ name: "Tío Infinito", img: "Tio_Infinito.png" },
{ name: "Mamá Aura", img: "Mama_Aura.png" },
{ name: "Tita Corazón", img: "Tita_Corazon.png" },
{ name: "Noguío", img: "Noguio.png" },
{ name: "Topami", img: "Topami.png" },
{ name: "Algio", img: "Algio.png" },
{ name: "Agujeto", img: "Agujeto.png" },
{ name: "Machaka", img: "Machaka.png" },
{ name: "Negatisquito", img: "Negatisquito.png" },
{ name: "Deprisquito", img: "Deprisquito.png" },
{ name: "Picorrón", img: "Picorron.png" },
{ name: "Nomevén", img: "Nomeven.png" },
{ name: "Nostoy", img: "Nostoy.png" },
{ name: "Nul", img: "Nul_.png" },
{ name: "Enciélago", img: "Encielago.png" },
{ name: "Caseriélago", img: "Caserielago.png" },
{ name: "Ermiciélago", img: "Ermicielago.png" },
{ name: "Suspicioni", img: "Suspicioni.png" },
{ name: "Pataletoni", img: "Pataletoni.png" },
{ name: "Contrarioni", img: "Contrarioni.png" },
{ name: "Tengulecto", img: "Tengulecto.png" },
{ name: "Tengullón", img: "Tengullon.png" },
{ name: "Negasus", img: "Negasus.png" },
{ name: "Pifiasus", img: "Pifiasus.png" },
{ name: "Timidiablo", img: "Timidiablo.png" },
{ name: "Osademonio", img: "Osademonio.png" },
{ name: "Conde Caries", img: "Conde_Caries.png" },
{ name: "Avarqueroso", img: "Avarqueroso.png" },
{ name: "Diablés", img: "Diables.png" },
{ name: "Ejemtos", img: "Ejemtos.png" },
{ name: "Erizlor", img: "Erizlor.png" },
{ name: "Cartepollo", img: "Cartepollo.png" },
{ name: "Rafaz", img: "Rafaz.png" },
{ name: "Ayay", img: "Ayay.png" },
{ name: "Horterraro", img: "Horterraro.png" },
{ name: "Alarción", img: "Alarcion.png" },
{ name: "Cantonio", img: "Cantonio.png" },
{ name: "Multiniche", img: "Multiniche.png" },
{ name: "Ser Bero", img: "Ser_Bero.png" },
{ name: "Goto", img: "Goto.png" },
{ name: "Sirimiri", img: "Sirimiri.png" },
{ name: "Copo", img: "Copo.png" },
{ name: "Ventisquero", img: "Ventisquero.png" },
{ name: "Coagulón", img: "Coagulon.png" },
{ name: "Reboca", img: "Reboca.png" },
{ name: "Pilicajosa", img: "Pilicajosa.png" },
{ name: "Negatalia", img: "Negatalia.png" },
{ name: "Cuesco", img: "Cuesco.png" },
{ name: "Péditum", img: "Peditum.png" },
{ name: "Graciosno", img: "Graciosno.png" },
{ name: "Hilarión", img: "Hilarion.png" },
{ name: "Arruñona", img: "Arruñona.png" },
{ name: "Belladona", img: "Belladona.png" },
{ name: "Eterna", img: "Eterna.png" },
{ name: "Insomna", img: "Insomna.png" },
{ name: "Morfea", img: "Morfea.png" },
{ name: "Noko", img: "Noko.png" },
{ name: "Florinoko", img: "Florinoko.png" },
{ name: "Pandanoko", img: "Pandanoko.png" },
{ name: "Anjijila", img: "Anjijila.png" },
{ name: "Tenongrio", img: "Tenongrio.png" },
{ name: "Urnaconda", img: "Urnaconda.png" },
{ name: "Pezqueroso", img: "Pezqueroso.png" },
{ name: "Pezgativo", img: "Pezgativo.png" },
{ name: "Pezquiciado", img: "Pezquiciado.png" },
{ name: "Draqui", img: "Draqui.png" },
{ name: "Lord Dragón", img: "Lord_Dragon.png" },
{ name: "Dragón Azur", img: "Dragon_Azur.png" },
{ name: "Ido", img: "Ido.png" },
{ name: "Turdido", img: "Turdido.png" },
{ name: "Pellurón", img: "Pelluron.png" },
{ name: "Pringurón", img: "Pringuron.png" },
{ name: "Boquirroto", img: "Boquirroto.png" },
{ name: "Yopago", img: "Yopago.png" },
{ name: "Charlatón", img: "Charlaton.png" },
{ name: "Tochaplátano", img: "Tochaplatano.png" },
{ name: "Mandícoro", img: "Mandicoro.png" },
{ name: "Ciniserpe", img: "Ciniserpe.png" },
{ name: "Arfidio", img: "Arfidio.png" },
{ name: "Venocto", img: "Venocto.png" },
{ name: "Venoctoscuro", img: "Venoctoscuro.png" },
{ name: "Shogunyan", img: "Shogunyan.png" },
{ name: "Komasura", img: "Komasura.png" },
{ name: "Dandiniche", img: "Dandiniche.png" },
{ name: "Abuflorido", img: "Abuflorido.png" },
{ name: "Dorantúo", img: "Dorantuo.png" },
{ name: "Zafinyan", img: "Zafinyan.png" },
{ name: "Esmenyan", img: "Esmenyan.png" },
{ name: "Rubinyan", img: "Rubinyan.png" },
{ name: "Topanyan", img: "Topanyan.png" },
{ name: "Diamanyan", img: "Diamanyan.png" },
{ name: "Babamandra", img: "Babamandra.png" },
{ name: "Termascino", img: "Termascino.png" },
{ name: "Bergantín", img: "Bergantin.png" },
{ name: "Animanstruo", img: "Animanstruo.png" },
{ name: "Fantasmurai", img: "Fantasmurai.png" },
{ name: "Tarantutor", img: "Tarantutor.png" },
{ name: "Dr. Majarov", img: "Dr._Majarov.png" },
{ name: "McKraken", img: "McKraken.png" },
{ name: "McKraken", img: "McKraken_2.png" },
{ name: "Duoleta", img: "Duoleta.png" },
{ name: "Cantaderna", img: "Cantaderna.png" },
{ name: "Ojimandra", img: "Ojimandra.png" },
{ name: "Jabalupo", img: "Jabalupo.png" },
{ name: "Estigio VI", img: "Estigio_VI.png" },
{ name: "Clipso", img: "Clipso.png" },
{ name: "Dr. Sintripas", img: "Dr._Sintripas.png" },
{ name: "Terrormadura", img: "Terrormadura.png" },
{ name: "Calarrupto", img: "Calarrupto.png" },
{ name: "Caldewok", img: "Caldewok.png" },
{ name: "Gargantúo", img: "Gargantuo.png" },
{ name: "Cazamentires", img: "Cazamentires.png" },
{ name: "Demoniorco", img: "Demoniorco.png" },

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
    congratsImg.src = "congrats.png";
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
