var app = document.getElementById("txt");
var text = new Typewriter(app,{
    loop:true
});
text.typeString("Welcome to my site")
.pauseFor(1500)
.deleteAll()
.typeString("I am Akif Feyzioğlu")
.pauseFor(1000)
.typeString("<br> and I am learning HTML")
.pauseFor(1000)
.deleteChars(4)
.typeString("CSS")
.pauseFor(1000)
.deleteChars(3)
.typeString("Javascript")
.pauseFor(1000)
.deleteChars(10)
.typeString("Go")
.pauseFor(1000)
.deleteChars(2)
.typeString("Docker")
.pauseFor(1750)
.start();