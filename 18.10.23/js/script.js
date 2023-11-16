AddElem=function(select){
	let parent=document.querySelector('main');
	let div = document.createElement('div');
	switch (select.value) {
		case 'red':
			parent.appendChild(div).className='red';
			break;
		case 'blue':
			parent.appendChild(div).className='blue';
			break;
		case 'white':
			parent.appendChild(div).className='white';
			break;
		default:
			alert('ОШИБКА!');		
	}
}

RemoveElem=function(button){
	let arrElem=document.querySelectorAll('div');
	if (button.id==='brick' && arrElem.length!=0)
			arrElem[arrElem.length-1].remove();	
	else if (button.id==='wall')
		for (let elem of arrElem){
			elem.remove();
		}	
}


document.querySelector('main').addEventListener('click', function(event) {
	let target=event.target;
  if (target.tagName.toLowerCase() === 'div') {
		if	(!target.style.borderRadius)
			target.style.borderRadius='50%';
		else target.style.borderRadius='';
  }
});


let pass = document.querySelectorAll('#pass, #conPass');
for (let elem of pass){
	elem.addEventListener('input', function(){
		if (pass[0].value!=pass[1].value){
			document.querySelector('p').innerHTML='Пароли не совпадают';
			document.querySelector('#submit').disabled='disabled';
		}
		else{
			document.querySelector('p').innerHTML='Пароли совпадают';
			document.querySelector('#submit').disabled='';
		}
		})
}


