const donnie = [

    "\"Donnie Juice\"",
    "Contacts",
    "128p70",
    "One Piece Nerd",
    "Taller Than Me",
    "Annoying",
    "In My Head",
    "\"Liked\" D4vd",
    "Buzz Cut",
    "Doesnt Watch My show reccomendations",
    "loser",

]


donnie.sort();

for (let i = 0; i < donnie.length; i++) {
    document.getElementById('output').innerHTML += "<li>" + (i + 1) + ". " + donnie[i] + "</li>";
}