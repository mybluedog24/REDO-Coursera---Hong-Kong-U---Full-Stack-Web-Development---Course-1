function game()
{
    generateFaces(5);
}

function generateFaces(numfaces)
{
    var left = document.getElementById('left');
    for(i=0; i<numfaces; i++)
    {
        var img = document.createElement('img');
        img.src = 'smile.png';
        var p1 = Math.floor(Math.random() * 400);
        var p2 = Math.floor(Math.random() * 400);
        img.style.left = p1 + 'px';
        img.style.top = p2 + 'px';
        left.appendChild(img);

    }

    var right = document.getElementById('right');
    var leftimage = left.cloneNode(true);
    leftimage.removeChild(leftimage.lastElementChild);
    right.appendChild(leftimage);

    var body = document.getElementsByTagName('body')[0];
    left.lastChild.onclick = function (event){
        event.stopPropagation();
        while(left.lastChild){
            left.removeChild(left.lastChild);
        }
        while(right.lastChild){
            right.removeChild(right.lastChild);
        }
        generateFaces(numfaces+5);

    }
    body.onclick = function (){
        alert('game over');
        left.lastChild.onclick = null;
        body.onclick = null;
    }

}
