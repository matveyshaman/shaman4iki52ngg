let field = document.querySelectorAll('#field td');

IsVictory=function(cells){
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let comb of combs){

		console.log('cells[comb[0]]: '+cells[comb[0]].textContent);
		console.log('cells[comb[1]]: '+cells[comb[1]].textContent);
		console.log('cells[comb[2]]: '+cells[comb[2]].textContent);
		console.log('Конец иттерации');

		if(cells[comb[0]].textContent!='' 
			&& cells[comb[0]].textContent==cells[comb[1]].textContent
			&& cells[comb[1]].textContent==cells[comb[2]].textContent){			
			return true;}
	}
	return false;
}

Start = function(cells){
	 let i=0;
	let gamers = ['x', 'o'];
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			this.textContent = gamers[i%2];
			this.removeEventListener('click', step);
			// console.clear();
			// IsVictory(cells);
			if (IsVictory(cells))
				alert('ПОБЕДА!');
			//????????УСЛОВИЕ НИЧЬЕЙ????????
			i++;
		});
	}
}

Start(field);


