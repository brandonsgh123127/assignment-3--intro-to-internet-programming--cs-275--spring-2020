let elementArr,primaryElem;
window.onload = () =>{
    elementArr = document.getElementsByTagName(`td`);
    elementArr[0].onclick = () =>{
        if(primaryElem == null){
            primaryElem=elementArr[0];
            rotate();
        }
        else if(primaryElem != elementArr[0]){

            ccRotate();
            primaryElem=elementArr[0];
            rotate();
        }
        else{
            ccRotate();
            primaryElem=null;
        }
        // if (elementArr[0].compareDocumentPosition(document.body)
        // & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        //
        // }
    };
    elementArr[1].onclick = () =>{
        if(primaryElem == null){
            primaryElem=elementArr[1];
            rotate();
        }
        else if(primaryElem != elementArr[1]){
            ccRotate();
            primaryElem=elementArr[1];
            rotate();
        }
        else{
            ccRotate();
            primaryElem=null;
        }
    };
    elementArr[2].onclick = () =>{
        if(primaryElem == null){
            primaryElem=elementArr[2];
            rotate();
        }
        else if(primaryElem != elementArr[2]){
            ccRotate();
            primaryElem=elementArr[2];
            rotate();
        }
        else{
            ccRotate();
            primaryElem=null;
        }
    };
    elementArr[3].onclick = () =>{
        if(primaryElem == null){
            primaryElem=elementArr[3];
            rotate();
        }
        else if(primaryElem != elementArr[3]){
            ccRotate();
            primaryElem=elementArr[3];
            rotate();
        }
        else{
            ccRotate();
            primaryElem=null;
        }
    };
};


function rotate(){
    primaryElem.classList.add(`rotations`);
    try {
        primaryElem.classList.remove(`cc-rotations`);
    }
    catch(err) {
        console.log(`First-time press`);
    }
}
function ccRotate(){
    primaryElem.classList.add(`cc-rotations`);
    primaryElem.classList.remove(`rotations`);
}
