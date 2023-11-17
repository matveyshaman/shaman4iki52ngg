let field = document.querySelectorAll('#field td')


Start = function (cells){
    let i=0;
    let gamers = ['x', 'o'];
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            this.textContent = gamers[i%2];
            this.removeEventListener('click', step);
            i++;
        });
    }
}

Start(field);
IsVictory=function(cells) {
    let combs= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7]
    ];
}
     