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

        // STYLE AND PX!!! NEVER FORGET ABOUT THAT!!!
        img.style.left = p1 + 'px';
        img.style.top = p2 + 'px';
        left.appendChild(img);
    }

    var images = left.cloneNode(true);
    images.removeChild(images.lastElementChild);
    right.appendChild(images);

    left.lastElementChild.onclick = function(event) {
        event.stopPropagation();
        while(left.lastElementChild){
            left.removeChild(left.lastElementChild);
        }
        while(right.lastElementChild){
            right.removeChild(right.lastElementChild);
        }
        generateFaces(numfaces+5);
    }

    var body = document.getElementsByTagName('body')[0];
    body.onclick = function(event){
        event.stopPropagation();
        alert('game over');
        body.onclick = null;
        left.lastElementChild.onclick = null;
    }
}
