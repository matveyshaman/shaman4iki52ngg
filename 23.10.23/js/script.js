getColor=function(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//ОПРЕДЕЛЕНИЕ СОБЫТИЯ ПОБЕДЫ
isEnd=function()
{
	let tdList = document.querySelectorAll('td');
	let k=0;
	for (let i=0; i<tdList.length; i++)
	{
		if (tdList[i].className!=tdList[i+1].className)
		{
			k++;
		}
	}
	return k;
}

//НАБОР ЦВЕТОВ
const colors=['red','green','blue','yellow'];

//СОЗДАНИЕ ИГРОВОГО ПОЛЯ 
document.querySelector('#set').addEventListener('click', function()
{
	
	for (let elem of document.querySelectorAll('tr'))
	{
		elem.remove();
	}

	let rows=document.querySelector('#rows').value;
	let cols=document.querySelector('#cols').value;
	let table = document.querySelector('table');
	for (let i = 1; i <= rows; i++) 
	{
		let tr = document.createElement('tr');
		for (let i = 1; i <= cols; i++) 
		{
			let td = document.createElement('td');
			td.addEventListener('click', function()
			{
				if (colors.indexOf(this.className)==colors.length-1)
					this.className=colors[0];
				else
					this.className=colors[colors.indexOf(this.className)+1];
				console.log(isEnd());
				if (!isEnd())
					alert('!!!!!!');				
			});
			setTimeout(function()
			{
				tr.appendChild(td).className=colors[getColor(0, colors.length-1)];
			}, i*100);
		}		
		setTimeout(function()
		{
			table.appendChild(tr);
		}, i*100);
	}
})






