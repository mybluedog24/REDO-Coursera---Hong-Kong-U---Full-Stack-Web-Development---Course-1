function game(){
    generateFaces(5);
}

function generateFaces(numfaces){
    var left = document.getElementById('left');
    var right = document.getElementById('right');

    for(i=0;i<numfaces;i++){
        var img = document.createElement('img');
        img.src = 'smile.png';
        var p1 = Math.floor(Math.random()*400);
        var p2 = Math.floor(Math.random()*400);
        img.style.left = p1+'px';
        img.style.top = p2+'px';
        left.appendChild(img);
    }

    var images = left.cloneNode(true);
    images.removeChild(images.lastElementChild);
    right.appendChild(images);

    var body = document.getElementsByTagName('body')[0];
    left.lastChild.onclick = function(event){
        event.stopPropagation();
        while(left.lastChild){
            left.removeChild(left.lastChild);
        }
        while(right.lastChild){
            right.removeChild(right.lastChild);
        }
        generateFaces(numfaces+5);

    }
    body.onclick = function(event){
        event.stopPropagation();
        body.onclick = null;
        left.lastChild.onclick = null;
    }

}
