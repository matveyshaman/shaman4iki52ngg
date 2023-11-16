// const myName='Name';
// const numberOfG=9.8;
// let isValid=true;
// let isObject=console;
// let isMethod=console.log;
// let isFunction=function(){
// 	let word='СЛОВО';
// 	return word;
// };
// let isSymbol=Symbol();
// let emptyVar=null;
// let unusedVar;

// let types =[
// 'myName: '+typeof myName, 
// 'numberOfG: '+typeof numberOfG, 
// 'isValid: '+typeof isValid, 
// 'isObject: '+typeof isObject, 
// 'isMethod: '+typeof isMethod, 
// 'isFunction: '+typeof isFunction,
// 'isSymbol: '+typeof isSymbol,
// 'emptyVar: '+typeof emptyVar,
// 'unusedVar: '+typeof unusedVar
// ];

// ShowArray=function(){
// 	for (let i = 0; i<types.length; i++) {
// 		let p = document.createElement('p');
// 		p.innerHTML = types[i];	
// 		document.body.append(p);
// 	}
// }

// RemoveArray=function(){
// 	let arrElem=document.querySelectorAll('p');
// 	for (let elem of arrElem){
// 		elem.remove();
// 	}
// }

// AddField=function(){
// 	let parent=document.querySelector('#MyForm');
// 	let input = document.createElement('input');
// 	parent.appendChild(input).type='text';
// }

// RemoveField=function(){
// 	let inputArr=document.querySelectorAll('input');
// 	if (inputArr.length!=0)
// 		inputArr[inputArr.length-1].remove();
// }

AddElem=function(button){
	let parent=document.querySelector('main');
	let div = document.createElement('div');
	if (button.id==='brick')
		parent.appendChild(div).className='brick';
	else if (button.id==='space')
		parent.appendChild(div).className='space';

}

RemoveBrick=function(){
	let divArr=document.querySelectorAll('div');
	if (divArr.length!=0)
		divArr[divArr.length-1].remove();
}

RemoveWall=function(){
	let arrElem=document.querySelectorAll('div');
	for (let elem of arrElem){
		elem.remove();
	}
}