var modal = document.querySelector("#myModal");

function fillGrid(id, elements, num_cols) {
    var num_rows = Math.ceil(elements.length / num_cols);
    var txt = "";
    var current_element;
    var clic;

    if (window.outerWidth < 700) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i]) {
                clic = (elements[i].modal)
                    ? "showModal(\"" + elements[i].modal + "\");"
                    : "";
                pointer = (elements[i].modal)
                    ? "style=\"cursor: pointer\";"
                    : "";
                txt += "<div class='12u'><article class='item' onclick='" + clic + "'" + pointer + "><a class='image fit'><img src='images/" + elements[i].img + "'/></a><header><h1>" + elements[i].titol[language] + "</h1><h4>" + elements[i].any + "</h4><hr><h3>" + elements[i].txt[language] + "</h3></header></article></div>";
            }
        }
    } else {
        for (var i = 0; i < num_cols; i++) {
            txt += "<div class='" + 12 / num_cols + "u'>";
            var inner_counter = 0;

            while (inner_counter < num_rows) {
                current_element = i + (inner_counter * num_cols);

                if (elements[current_element]) {
                    clic = (elements[current_element].modal)
                        ? "showModal(\"" + elements[current_element].modal + "\");"
                        : "";
                    pointer = (elements[current_element].modal)
                        ? "style=\"cursor: pointer\";"
                        : "";
                    txt += "<article class='item' onclick='" + clic + "'" + pointer + "><a class='image fit'><img src='images/" + elements[current_element].img + "'/></a><header><h1>" + elements[current_element].titol[language] + "</h1><h4>" + elements[current_element].any + "</h4><hr><h3>" + elements[current_element].txt[language] + "</h3></header></article>";
                }
                inner_counter++;
            }
            txt += "</div>";
        }
    }

    document.querySelector("#" + id).innerHTML = txt;
}

function fillAllGrids() {
    fillGrid("estudis_grid", estudis, 4);
    fillGrid("informatica_grid", informatica, 3);
    fillGrid("docencia_grid", docencia, 4);
    fillGrid("espectacles_grid", espectacles, 4);
}

function showModal(txt) {
    modal.style.display = "block";
    document.querySelector("#video").src = "https://www.youtube.com/embed/" + txt;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector("#video").src = "";
    }
}

var estudis = [
    {
        titol: {
            cat: "B2 Anglès",
            es: "B2 Inglés",
            com: "B2 English"
        },
        any: "2014",
        img: "eoireus.jpg",
        txt: {
            cat: "Certificat de nivell avançat d'anglès.",
            es: "Certificado de nivel avanzado de inglés.",
            com: "Certificate of advanced level of English."
        }
    }, {
        titol: {
            cat: "Màster Docència",
            es: "Master Docencia",
            com: "Master Teaching"
        },
        any: "2012-2013",
        img: "URV-logo.jpg",
        txt: {
            cat: "Màster universitari en Formació del Professorat d’Educació Secundària Obligatòria i Batxillerat, Formació Professional i Ensenyaments d’Idiomes.",
            es: "Master universitario en Formación del Profesorado de ESO y Bachillerato, FP y Enseñanzas de Idiomas.",
            com: "Master's Degree in 'Formació del Professorat d’Educació Secundària Obligatòria i Batxillerat, Formació Professional i Ensenyaments d’Idiomes'."
        }
    }, {
        titol: {
            cat: "B1 Anglès",
            es: "B1 Inglés",
            com: "B1 English"
        },
        any: "2012",
        img: "eoiribera.jpg",
        txt: {
            cat: "Certificat de nivell intermedi d'anglès.",
            es: "Certificat de nivell intermedi d'anglès.",
            com: "Certificat de nivell intermedi d'anglès."
        }
    }, {
        titol: {
            cat: "Art Dramàtic",
            es: "Art Dramàtic",
            com: "Art Dramàtic"
        },
        any: "2006-2010",
        img: "logoit.jpg",
        txt: {
            cat: "Estudis de la Llicenciatura d'Art Dramàtic a l'Institut del Teatre de Barcelona.",
            es: "Estudis de la Llicenciatura d'Art Dramàtic a l'Institut del Teatre de Barcelona.",
            com: "Estudis de la Llicenciatura d'Art Dramàtic a l'Institut del Teatre de Barcelona."
        }
    }, {
        titol: {
            cat: "Locució",
            es: "Locució",
            com: "Locució"
        },
        any: "2007-2008",
        img: "uab.jpg",
        txt: {
            cat: "Curs de locució aplicat a la publicitat.",
            es: "Curs de locució aplicat a la publicitat.",
            com: "Curs de locució aplicat a la publicitat."
        }
    }, {
        titol: {
            cat: "Enginyeria Informàtica",
            es: "Enginyeria Informàtica",
            com: "Enginyeria Informàtica"
        },
        any: "2002-2006",
        img: "URV-logo.jpg",
        txt: {
            cat: "Enginyeria Tècnica en Informàtica de Gestió.",
            es: "Enginyeria Tècnica en Informàtica de Gestió.",
            com: "Enginyeria Tècnica en Informàtica de Gestió."
        }
    }, {
        titol: {
            cat: "Administrador S.O.",
            es: "Administrador S.O.",
            com: "Administrador S.O."
        },
        any: "2001",
        img: "aula.jpg",
        txt: {
            cat: "Curs d'Administrador de Sistemes Operatius en Xarxa.",
            es: "Curs d'Administrador de Sistemes Operatius en Xarxa.",
            com: "Curs d'Administrador de Sistemes Operatius en Xarxa."
        }
    }
];
var informatica = [
    {
        titol: {
            cat: "Freelance",
            es: "Freelance",
            com: "Freelance"
        },
        any: "2006-actualment",
        img: "freelance.jpg",
        txt: {
            cat: "Freelance informàtic <br/>(APPs, web, audiovisuals, etc.)",
            es: "Freelance informàtic <br/>(APPs, web, audiovisuals, etc.)",
            com: "Freelance informàtic <br/>(APPs, web, audiovisuals, etc.)"
        }
    }, {
        titol: {
            cat: "femfesta.cat",
            es: "femfesta.cat",
            com: "femfesta.cat"
        },
        any: "2011-actualment",
        img: "femfesta.jpg",
        txt: {
            cat: "Cofundador de la marca <a href='http://www.femfesta.cat'>femfesta.cat</a>",
            es: "Cofundador de la marca <a href='http://www.femfesta.cat'>femfesta.cat</a>",
            com: "Cofundador de la marca <a href='http://www.femfesta.cat'>femfesta.cat</a>"
        }
    }, {
        titol: {
            cat: "Optical Illusions",
            es: "Optical Illusions",
            com: "Optical Illusions"
        },
        any: "2014 - 2017",
        img: "doit.jpg",
        txt: {
            cat: "Responsable del departament d'Informàtica de l'empresa Optical Illusions (dOit!).",
            es: "Responsable del departament d'Informàtica de l'empresa Optical Illusions (dOit!).",
            com: "Responsable del departament d'Informàtica de l'empresa Optical Illusions (dOit!)."
        }
    }
];
var docencia = [
    {
        titol: {
            cat: "Institut Baix Camp",
            es: "Institut Baix Camp",
            com: "Institut Baix Camp"
        },
        any: "2017-actualment",
        img: "ibc.jpg",
        txt: {
            cat: "Professor del Departament d'Informàtica de l'Institut Baix Camp de Reus.",
            es: "Professor del Departament d'Informàtica de l'Institut Baix Camp de Reus.",
            com: "Professor del Departament d'Informàtica de l'Institut Baix Camp de Reus."
        }
    }, {
        titol: {
            cat: "Mas Carandell",
            es: "Mas Carandell",
            com: "Mas Carandell"
        },
        any: "2017-2018",
        img: "mascarandell.jpg",
        txt: {
            cat: "Professor de Certificats de Professionalitat de la família d'informàtica.",
            es: "Professor de Certificats de Professionalitat de la família d'informàtica.",
            com: "Professor de Certificats de Professionalitat de la família d'informàtica."
        }
    }, {
        titol: {
            cat: "Circ de les Musaranyes",
            es: "Circ de les Musaranyes",
            com: "Circ de les Musaranyes"
        },
        any: "2012-2017",
        img: "musaranyes.jpg",
        txt: {
            cat: "Monitor de circ al <a href='http://www.circdelesmusaranyes.com/''>Circ de les Musaranyes</a>.",
            es: "Monitor de circ al <a href='http://www.circdelesmusaranyes.com/''>Circ de les Musaranyes</a>.",
            com: "Monitor de circ al <a href='http://www.circdelesmusaranyes.com/''>Circ de les Musaranyes</a>."
        }
    }, {
        titol: {
            cat: "CAER",
            es: "CAER",
            com: "CAER"
        },
        any: "2010-2011",
        img: "caer.jpg",
        txt: {
            cat: "Projecte educatiu “Laboratori CAER” coordinant 3 instituts de les comarques de Tarragona en l’aprenentatge d’una producció teatral.",
            es: "Projecte educatiu “Laboratori CAER” coordinant 3 instituts de les comarques de Tarragona en l’aprenentatge d’una producció teatral.",
            com: "Projecte educatiu “Laboratori CAER” coordinant 3 instituts de les comarques de Tarragona en l’aprenentatge d’una producció teatral."
        }
    }, {
        titol: {
            cat: "Generalitat de Catalunya",
            es: "Generalitat de Catalunya",
            com: "Generalitat de Catalunya"
        },
        any: "2011",
        img: "generalitat.jpg",
        txt: {
            cat: "Professor d’informàtica i expressió corporal en un projecte educatiu a Falset coordinat amb l’oficina de Joventut del Priorat.",
            es: "Professor d’informàtica i expressió corporal en un projecte educatiu a Falset coordinat amb l’oficina de Joventut del Priorat.",
            com: "Professor d’informàtica i expressió corporal en un projecte educatiu a Falset coordinat amb l’oficina de Joventut del Priorat."
        }
    }, {
        titol: {
            cat: "Aula Centre de Formació",
            es: "Aula Centre de Formació",
            com: "Aula Centre de Formació"
        },
        any: "2003",
        img: "aula.jpg",
        txt: {
            cat: "Professor d'ofimàtica.",
            es: "Professor d'ofimàtica.",
            com: "Professor d'ofimàtica."
        }
    }
];
var espectacles = [
    {
        titol: {
            cat: "Copa i Ploma",
            es: "Copa i Ploma",
            com: "Copa i Ploma"
        },
        any: "2019",
        img: "copaiploma.jpg",
        txt: {
            cat: "Maridatge de vi i textos de Shakespeare.",
            es: "Maridaje de vino y textos de Shakespeare.",
            com: "Performing Edgar Degas."
        },
        modal: "y93gtWn9eyw"
    },
    {
        titol: {
            cat: "Visita teatralitzada al Gaudí Centre",
            es: "Visita teatralizada en Gaudí Centre",
            com: "Theatrical tour in Gaudí Centre"
        },
        any: "2019",
        img: "gaudi.jpg",
        txt: {
            cat: "Interpretació del pintor Edgar Degas.",
            es: "Interpretación del pintor Edgar Degas.",
            com: "Performing Edgar Degas."
        }
    },
    {
        titol: {
            cat: "Dames i vells",
            es: "Dames i vells",
            com: "Dames i vells"
        },
        any: "2018, 2019",
        img: "damesivells.jpg",
        txt: {
            cat: "Interpretació del <i>jutge</i> a Dames i Vells de Sant Pere 2018 i 2019.",
            es: "Interpretación del <i>juez</i> en \"Dames i Vells\" de Sant Pere 2018 y 2019.",
            com: "Performing the <i>judge</i> role in \"Dames i Vells\" of Sant Pere 2018 and 2019."
        },
        modal: "YOihgMVw9ck"
    },
    {
        titol: {
            cat: "Ciutat de la Música",
            es: "Ciutat de la Música",
            com: "Ciutat de la Música"
        },
        any: "2018",
        img: "reuscapitalmusical.jpg",
        txt: {
            cat: "Espectacle inaugural de Reus Capital de la Música 2018.",
            es: "Espectacle inaugural de Reus Capital de la Música 2018.",
            com: "Espectacle inaugural de Reus Capital de la Música 2018."
        },
        modal: "6T0fvszwTgA"
    },
    {
        titol: {
            cat: "Millor em quedo aquí",
            es: "Millor em quedo aquí",
            com: "Millor em quedo aquí"
        },
        any: "2014",
        img: "milloremquedoaqui.jpg",
        txt: {
            cat: "Videoclip del single 'Millor em quedo aquí' d'Albert Jordà.",
            es: "Videoclip del single 'Millor em quedo aquí' d'Albert Jordà.",
            com: "Videoclip del single 'Millor em quedo aquí' d'Albert Jordà."
        },
        modal: "7ZnmI_IKmbQ"
    },
    {
        titol: {
            cat: "CROMA",
            es: "CROMA",
            com: "CROMA"
        },
        any: "2014",
        img: "croma.jpg",
        txt: {
            cat: "Locució pel <i>shortfilm</i> Croma, <a href='https://www.acidfactory.net/'>d'Acid Factory</a>, guanyador del 1r premi al concurs In situ del Frame Vila-seca Shortfilm Festival 2014.",
            es: "Locució pel <i>shortfilm</i> Croma, <a href='https://www.acidfactory.net/'>d'Acid Factory</a>, guanyador del 1r premi al concurs In situ del Frame Vila-seca Shortfilm Festival 2014.",
            com: "Locució pel <i>shortfilm</i> Croma, <a href='https://www.acidfactory.net/'>d'Acid Factory</a>, guanyador del 1r premi al concurs In situ del Frame Vila-seca Shortfilm Festival 2014."
        },
        modal: "pmLJkApmDU0"
    },
    {
        titol: {
            cat: "El planeta imaginari",
            es: "El planeta imaginari",
            com: "El planeta imaginari"
        },
        any: "2014",
        img: "planetaimaginari.jpg",
        txt: {
            cat: "Videoclip del single 'El planeta imaginari' de Joan Masdéu.",
            es: "Videoclip del single 'El planeta imaginari' de Joan Masdéu.",
            com: "Videoclip del single 'El planeta imaginari' de Joan Masdéu."
        },
        modal: "74j7lnRHuyE"
    },
    {
        titol: {
            cat: "Port Aventura",
            es: "Port Aventura",
            com: "Port Aventura"
        },
        any: "2007. 2011-2014",
        img: "portaventura.jpg",
        txt: {
            cat: "Bang Bang West. Carrer. Saloon. Selva del Miedo.",
            es: "Bang Bang West. Carrer. Saloon. Selva del Miedo.",
            com: "Bang Bang West. Carrer. Saloon. Selva del Miedo."
        }
    },
    {
        titol: {
            cat: "La Riera",
            es: "La Riera",
            com: "La Riera"
        },
        any: "2010-2011",
        img: "riera.jpg",
        txt: {
            cat: "La Riera (TV3). Personatge: Quique.",
            es: "La Riera (TV3). Personatge: Quique.",
            com: "La Riera (TV3). Personatge: Quique."
        },
        modal: "jjw5eVBamdc"
    },
    {
        titol: {
            cat: "El Mort",
            es: "El Mort",
            com: "El Mort"
        },
        any: "2008-2009",
        img: "mort.jpg",
        txt: {
            cat: "El Mort. CAER Reus.",
            es: "El Mort. CAER Reus.",
            com: "El Mort. CAER Reus."
        },
        modal: "CvIQpn6hZ7I"
    },
    {
        titol: {
            cat: "Commedia dell'Arte",
            es: "Commedia dell'Arte",
            com: "Commedia dell'Arte"
        },
        any: "2008",
        img: "commedia.jpg",
        txt: {
            cat: "Taller de Commedia dell'Arte. Institut del Teatre.",
            es: "Taller de Commedia dell'Arte. Institut del Teatre.",
            com: "Taller de Commedia dell'Arte. Institut del Teatre."
        },
        modal: "Z0OeKrHwj2E"
    }
];

window.addEventListener("load", fillAllGrids);
window.addEventListener("resize", fillAllGrids);
document.getElementById("current_year").innerHTML = new Date().getFullYear();
