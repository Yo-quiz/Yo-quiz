// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Alcaldero", img: "alcaldero.png" },
    { name: "Sinná", img: "sinna.png" },
    { name: "Sinnareno", img: "sinnareno.png" },
    { name: "Katano", img: "katano.png" },
    { name: "Katananái", img: "katananai.png" },
    { name: "Katakroken", img: "katakroken.png" },
    { name: "Mochimacho", img: "mochimacho.png" },
    { name: "Machimío", img: "machimio.png" },
    { name: "Yelmandante", img: "yelmandante.png" },
    { name: "Juntollero", img: "juntollero.png" },
    { name: "Genedáver", img: "genedaver.png" },
    { name: "Flamileón", img: "flamileon.png" },
    { name: "Tembloleón", img: "tembloleon.png" },
    { name: "Sirleón", img: "sirleon.png" },
    { name: "Ludorái", img: "ludorai.png" },
    { name: "Lustre", img: "lustre.png" },
    { name: "Furtre", img: "furtre.png" },
    { name: "Dortre", img: "dortre.png" },
    { name: "Benkei", img: "benkei.png" },
    { name: "B3-NK1", img: "b3-NK1.png" },
    { name: "Sushiyama", img: "sushiyama.png" },
    { name: "Kapunki", img: "kapunki.png" },
    { name: "Lucharabajo", img: "lucharabajo.png" },
    { name: "Camperabajo", img: "camperabajo.png" },
    { name: "Chafarabajo", img: "chafarabajo.png" },
    { name: "Osfurio", img: "osfurio.png" },
    { name: "Sacoco", img: "sacoco.png" },
    { name: "Mokopavo", img: "mokopavo.png" },
    { name: "Pachús", img: "pachus.png" },
    { name: "Komemo", img: "komemo.png" },
    { name: "Tontolín", img: "tontolin.png" },
    { name: "Yopaso", img: "yopaso.png" },
    { name: "Puf", img: "puf.png" },
    { name: "Yanomás", img: "yanomas.png" },
    { name: "Algazara", img: "algazara.png" },
    { name: "Labizula", img: "labizula.png" },
    { name: "Cotilleja", img: "cotilleja.png" },
    { name: "Marulleja", img: "marulleja.png" },
    { name: "Esquelleja", img: "esquelleja.png" },
    { name: "Cupístolo", img: "cupistolo.png" },
    { name: "Casanovo", img: "casanovo.png" },
    { name: "Casanono", img: "casanono.png" },
    { name: "Ondívoro", img: "ondivoro.png" },
    { name: "Coberturo", img: "coberturo.png" },
    { name: "Estatinarca", img: "estatinarca.png" },
    { name: "Telespejo", img: "telespejo.png" },
    { name: "Malpejismo", img: "malpejismo.png" },
    { name: "Ilúho", img: "iluho.png" },
    { name: "Elúho", img: "eluho.png" },
    { name: "Ubiúho", img: "ubiuho.png" },
    { name: "Trilépata", img: "trilepata.png" },
    { name: "Tetrariosa", img: "tetrariosa.png" },
    { name: "Tengu", img: "tengu.png" },
    { name: "Flamngu", img: "flamngu.png" },
    { name: "Kyubi", img: "kyubi.png" },
{ name: "Nievacolas", img: "nievacolas.png" },
{ name: "Tentelento", img: "tentelento.png" },
{ name: "Tentemacho", img: "tentemacho.png" },
{ name: "Tenterila", img: "tenterila.png" },
{ name: "Nihablar", img: "nihablar.png" },
{ name: "Impás", img: "impas.png" },
{ name: "Murallín", img: "murallin.png" },
{ name: "Lorigón", img: "lorigon.png" },
{ name: "Inquielifante", img: "inquielifante.png" },
{ name: "Perselefante", img: "perselefante.png" },
{ name: "Globqueo", img: "globqueo.png" },
{ name: "Globtundente", img: "globtundente.png" },
{ name: "Montaña Loca", img: "montaña_loca.png" },
{ name: "Lord Lava", img: "lord_lava.png" },
{ name: "Rebelcebú", img: "rebelcebu.png" },
{ name: "Caporrista", img: "caporrista.png" },
{ name: "Hermanión", img: "hermanion.png" },
{ name: "Pegarabajo", img: "pegarabajo.png" },
{ name: "Enormarabajo", img: "enormarabajo.png" },
{ name: "Cuernarabajo", img: "cuernarabajo.png" },
{ name: "Castelius III", img: "castelius_III.png" },
{ name: "Castelius II", img: "castelius_II.png" },
{ name: "Castelius I", img: "Castelius_I.png" },
{ name: "Maxicastelius", img: "maxicastelius.png" },
{ name: "Robonyan", img: "robonyan.png" },
{ name: "Aureonyan", img: "aureonyan.png" },
{ name: "Pom", img: "pom.png" },
{ name: "Flus", img: "flus.png" },
    { name: "Deslumbrella", img: "deslumbrella.png" },
    { name: "Rechinella", img: "rechinella.png" },
    { name: "Esquelebella", img: "esquelebella.png" },
    { name: "Ningarra", img: "ningarra.png" },
    { name: "Habilgarra", img: "habilgarra.png" },
    { name: "Cantigarra", img: "cantigarra.png" },
    { name: "Escanlofrío", img: "escanlofrio.png" },
    { name: "Frihuahua", img: "frihuahua.png" },
    { name: "Lavadenco", img: "lavadenco.png" },
    { name: "Jibanyan", img: "jibanyan.png" },
    { name: "Espinyan", img: "espinyan.png" },
    { name: "Pelochnyan", img: "pelochnyan.png" },
    { name: "Kappandante", img: "kappandante.png" },
    { name: "Kappadachín", img: "kappadachin.png" },
    { name: "Kapparfista", img: "kapparfista.png" },
    { name: "Komasan", img: "komasan.png" },
    { name: "Komaleón", img: "komaleon.png" },
    { name: "Komajiro", img: "komajiro.png" },
    { name: "Komatigrado", img: "komatigrado.png" },
    { name: "Baku", img: "baku.png" },
    { name: "Blanpir", img: "blanpir.png" },
    { name: "Pufipatitas", img: "pufipatitas.png" },
    { name: "Pufilindo", img: "pufilindo.png" },
    { name: "Pufimaloso", img: "pufimaloso.png" },
    { name: "Fristina", img: "fristina.png" },
    { name: "Granizia", img: "granizia.png" },
    { name: "Dámona", img: "damona.png" },
{ name: "Cimbrón", img: "cimbron.png" },
{ name: "Pasodón", img: "pasodon.png" },
{ name: "Ritma", img: "ritma.png" },
{ name: "Kieroto", img: "kieroto.png" },
{ name: "Zampo", img: "zampo.png" },
{ name: "Abuzampa", img: "abuzampa.png" },
{ name: "Gargazampa", img: "gargazampa.png" },
{ name: "Aburroz", img: "aburroz.png" },
{ name: "Nomedá", img: "nomeda.png" },
{ name: "Opti", img: "opti.png" },
{ name: "Enerposa", img: "enerposa.png" },
{ name: "Eneposa", img: "eneposa.png" },
{ name: "Mejorposa", img: "mejorposa.png" },
{ name: "Vivariposa", img: "vivariposa.png" },
{ name: "Felisonte", img: "felisonte.png" },
{ name: "Reversa", img: "reversa.png" },
{ name: "Reversada", img: "reversada.png" },
{ name: "Tricotom", img: "tricotom.png" },
{ name: "Dádivo", img: "dadivo.png" },
{ name: "Bolilete", img: "bolilete.png" },
{ name: "Doblilete", img: "doblilete.png" },
{ name: "Papá Rayo", img: "papa_rayo.png" },
{ name: "Tío Infinito", img: "tio_infinito.png" },
{ name: "Mamá Aura", img: "mama_aura.png" },
{ name: "Tita Corazón", img: "tita_corazon.png" },
{ name: "Noguío", img: "noguio.png" },
{ name: "Topami", img: "topami.png" },
{ name: "Algio", img: "algio.png" },
{ name: "Agujeto", img: "agujeto.png" },
{ name: "Machaka", img: "machaka.png" },
{ name: "Negatisquito", img: "negatisquito.png" },
{ name: "Deprisquito", img: "deprisquito.png" },
{ name: "Picorrón", img: "picorron.png" },
{ name: "Nomevén", img: "nomeven.png" },
{ name: "Nostoy", img: "nostoy.png" },
{ name: "Nul", img: "nul_.png" },
{ name: "Enciélago", img: "encielago.png" },
{ name: "Caseriélago", img: "caserielago.png" },
{ name: "Ermiciélago", img: "ermicielago.png" },
{ name: "Suspicioni", img: "suspicioni.png" },
{ name: "Pataletoni", img: "pataletoni.png" },
{ name: "Contrarioni", img: "contrarioni.png" },
{ name: "Tengulecto", img: "tengulecto.png" },
{ name: "Tengullón", img: "tengullon.png" },
{ name: "Negasus", img: "negasus.png" },
{ name: "Pifiasus", img: "pifiasus.png" },
{ name: "Timidiablo", img: "timidiablo.png" },
{ name: "Osademonio", img: "osademonio.png" },
{ name: "Conde Caries", img: "conde_caries.png" },
{ name: "Avarqueroso", img: "avarqueroso.png" },
{ name: "Diablés", img: "diables.png" },
{ name: "Ejemtos", img: "ejemtos.png" },
{ name: "Erizlor", img: "erizlor.png" },
{ name: "Cartepollo", img: "cartepollo.png" },
{ name: "Rafaz", img: "rafaz.png" },
{ name: "Ayay", img: "ayay.png" },
{ name: "Horterraro", img: "horterraro.png" },
{ name: "Alarción", img: "alarcion.png" },
{ name: "Cantonio", img: "cantonio.png" },
{ name: "Multiniche", img: "multiniche.png" },
{ name: "Ser Bero", img: "ser_bero.png" },
{ name: "Goto", img: "goto.png" },
{ name: "Sirimiri", img: "sirimiri.png" },
{ name: "Copo", img: "copo.png" },
{ name: "Ventisquero", img: "ventisquero.png" },
{ name: "Coagulón", img: "coagulon.png" },
{ name: "Reboca", img: "reboca.png" },
{ name: "Pilicajosa", img: "pilicajosa.png" },
{ name: "Negatalia", img: "negatalia.png" },
{ name: "Cuesco", img: "cuesco.png" },
{ name: "Péditum", img: "peditum.png" },
{ name: "Graciosno", img: "graciosno.png" },
{ name: "Hilarión", img: "hilarion.png" },
{ name: "Arruñona", img: "arruñona.png" },
{ name: "Belladona", img: "belladona.png" },
{ name: "Eterna", img: "eterna.png" },
{ name: "Insomna", img: "insomna.png" },
{ name: "Morfea", img: "morfea.png" },
{ name: "Noko", img: "noko.png" },
{ name: "Florinoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Anjijila", img: "anjijila.png" },
{ name: "Tenongrio", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Pezqueroso", img: "pezqueroso.png" },
{ name: "Pezgativo", img: "pezgativo.png" },
{ name: "Pezquiciado", img: "pezquiciado.png" },
{ name: "Draqui", img: "draqui.png" },
{ name: "Lord Dragón", img: "lord_dragon.png" },
{ name: "Dragón Azur", img: "dragon_azur.png" },
{ name: "Ido", img: "ido.png" },
{ name: "Turdido", img: "turdido.png" },
{ name: "Pellurón", img: "pelluron.png" },
{ name: "Pringurón", img: "pringuron.png" },
{ name: "Boquirroto", img: "boquirroto.png" },
{ name: "Yopago", img: "yopago.png" },
{ name: "Charlatón", img: "charlaton.png" },
{ name: "Tochaplátano", img: "tochaplatano.png" },
{ name: "Mandícoro", img: "mandicoro.png" },
{ name: "Ciniserpe", img: "ciniserpe.png" },
{ name: "Arfidio", img: "arfidio.png" },
{ name: "Venocto", img: "venocto.png" },
{ name: "Venoctoscuro", img: "venoctoscuro.png" },
{ name: "Shogunyan", img: "shogunyan.png" },
{ name: "Komasura", img: "komasura.png" },
{ name: "Dandiniche", img: "dandiniche.png" },
{ name: "Abuflorido", img: "abuflorido.png" },
{ name: "Dorantúo", img: "dorantuo.png" },
{ name: "Zafinyan", img: "zafinyan.png" },
{ name: "Esmenyan", img: "esmenyan.png" },
{ name: "Rubinyan", img: "rubinyan.png" },
{ name: "Topanyan", img: "topanyan.png" },
{ name: "Diamanyan", img: "diamanyan.png" },
{ name: "Babamandra", img: "babamandra.png" },
{ name: "Termascino", img: "termascino.png" },
{ name: "Bergantín", img: "bergantin.png" },
{ name: "Animanstruo", img: "animanstruo.png" },
{ name: "Fantasmurai", img: "fantasmurai.png" },
{ name: "Tarantutor", img: "tarantutor.png" },
{ name: "Dr. Majarov", img: "dr._majarov.png" },
{ name: "McKraken", img: "mckraken.png" },
{ name: "McKraken", img: "mckraken_2.png" },
{ name: "Duoleta", img: "duoleta.png" },
{ name: "Cantaderna", img: "cantaderna.png" },
{ name: "Ojimandra", img: "ojimandra.png" },
{ name: "Jabalupo", img: "jabalupo.png" },
{ name: "Estigio VI", img: "estigio_vi.png" },
{ name: "Clipso", img: "clipso.png" },
{ name: "Dr. Sintripas", img: "dr._sintripas.png" },
{ name: "Terrormadura", img: "terrormadura.png" },
{ name: "Calarrupto", img: "calarrupto.png" },
{ name: "Caldewok", img: "caldewok.png" },
{ name: "Gargantúo", img: "gargantuo.png" },
{ name: "Cazamentires", img: "cazamentires.png" },
{ name: "Demoniorco", img: "demoniorco.png" },

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