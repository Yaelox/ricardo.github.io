nombre = prompt("Cual es tu nombre?");

alert("Hola " + nombre);

Beatle = prompt("Cual es tu beatle favorito?");

if (Beatle=="John Lennon"){
    alert("John Winston Lennon fue un artista, músico, multiinstrumentista, cantautor, activista, compositor, productor, escritor y pacifista británico, conocido por ser líder y fundador de la banda de rock The Beatles y considerado uno de los artistas más influyentes del siglo XX.");
}
else if (Beatle=="Paul McCartney"){
    alert("James Paul McCartney es un cantautor, compositor, músico, multiinstrumentista, escritor, activista, pintor y actor británico; que junto a John Lennon, George Harrison y Ringo Starr, ganó fama mundial.");
}
else if (Beatle=="George Harrison"){
    alert("George Harrison fue un músico multiinstrumentista, compositor, cantautor, productor musical, productor cinematográfico, actor, filántropo, activista pacifista, ecologista, guitarrista y cantante británico de la banda de rock The Beatles.");
}
else if (Beatle=="Ringo Starr"){
    alert("Traducción del inglés-Sir Richard Starkey MBE, conocido profesionalmente como Ringo Starr, es un músico, cantante, compositor y actor inglés que alcanzó fama internacional como baterista de los Beatles.");
}
else{
    alert("Revisa que este bien escrito");
}