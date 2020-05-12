let elementArr,primaryElem;

window.onload = () =>{
    elementArr = document.getElementsByTagName(`td`);
    elementArr[0].onclick = () =>{
        if(primaryElem != elementArr[0]){
            primaryElem=elementArr[0];
            rotate();
        }
        else{
            alert(`primary`);
        }
        if (elementArr[0].compareDocumentPosition(document.body) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            alert(`wow`);
        }
    }
}


function rotate(){
    primaryElem.classList.add(`rotations`);
    primaryElem.color=`blue`;
}
