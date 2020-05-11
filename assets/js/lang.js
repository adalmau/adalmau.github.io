var translations = {
    cat: {
        title: "Anton Dalmau",
        subtitle: "Informàtic | Professor | Actor",
        bio: "Bio",
        studies: "Estudis",
        computing: "Informàtica",
        teaching: "Docència",
        shows: "Espectacles",
        bio1: "Hola! Sóc Anton Dalmau, <br/>enginyer informàtic, actor i professor.",
        bio2: "Sóc de Reus i he estudiat enginyeria informàtica i art dramàtic.<br/>Benvingut al meu portafolis on veuràs una mica allò que he anat fent.",
        other_studies: "Altres estudis",
        shows_info: "Passa el cursor per damunt dels diferents espectacles. Si veus la icona <i class='fa fa-hand-pointer-o'></i> clica per veure'n una mostra.",
        other_shows: "Altres espectacles"
    },
    es: {
        title: "Anton Dalmau",
        subtitle: "Informático | Profesor | Actor",
        bio: "Bio",
        studies: "Estudios",
        computing: "Informática",
        teaching: "Docencia",
        shows: "Espectáculos",
        bio1: "Hola! Soy Anton Dalmau, <br/> ingeniero informático, actor y profesor.",
        bio2: "Soy de Reus y he estudiado ingeniería informática y arte dramático. <br/>Bienvenido a mi portafolio donde verás un poco lo que he ido haciendo.",
        other_studies: "Otros estudios",
        shows_info: "Pasa el cursor por encima de los distintos espectáculos. Si ves el icono <i class='fa fa-hand-pointer-o'></i> pulsa para ver un fragmento.",
        other_shows: "Otros espectáculos"
    },
    com: {
        title: "Anton Dalmau",
        subtitle: "IT engineer | Teacher | Actor",
        bio: "Bio",
        studies: "Studies",
        computing: "Computing",
        teaching: "Teaching",
        shows: "Shows",
        bio1: "Hello! I am Anton Dalmau, <br/> computer engineer, actor and teacher.",
        bio2: "I'm from Reus and I have studied computer engineering and dramatic art. <br/>Welcome to my portfolio where you'll see something that I've been doing.",
        other_studies: "Other studies",
        shows_info: "Pass the cursor over the different shows. If you see the icon <i class = 'fa fa-hand-pointer-o'></i> click to see a fragment.",
        other_shows: "Other shows"
    }
};


var text = document.querySelectorAll("[data-lang]");
var domain = window.location.hostname.split(".");
var language = domain[domain.length-1];

function trans()
{
    text.forEach(function(item) {
        item.innerHTML = translations[language][item.dataset.lang];
    });
}

trans();
