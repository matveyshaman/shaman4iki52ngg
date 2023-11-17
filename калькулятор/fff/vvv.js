AddElem=function(button){
    let parent=document.querySelector('main');
    let div = document.createElement('div');
    if (button.id==='brick')
        parent.appendChild(div).className='brick';
    else if (button.id==='space')
        parent .appendChild(div).className='space';
}

RemoveBrick=function(){
    let divArr=document.querySelectionAll('div');
    if (divArr.length!=0)
        divArr[divArr.length-1].remove();
}

RemoveWall=function(){
    let arrElem=document.querySelectionAll('div');
    for (let elem of arrElem){
        elem.remove();
    }
}