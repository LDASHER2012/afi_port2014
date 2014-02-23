init();

function init() 
{
    var links = document.querySelectorAll('.album a');
    for (var i = 0, j = links.length; i < j; i++) 
    {
        links[i].addEventListener('click', changePic);
        links[i].addEventListener('click', function (evt) {
            setStatus(evt, '.album a');
        });
    }

    var albums = document.querySelectorAll('#albums a');
    for (var k = 0, l = albums.length; k < l; k++) 
    {
        albums[k].addEventListener('click', changeAlbum);
    }
}


function changePic(evt) 
{
    evt.preventDefault();
    var target = evt.target;
    var pic = document.getElementById('pic');
    var caption = document.querySelector('#caption');

    if (target.parentNode.id === 'albums') 
    {
        var href = '#' + evt.target.href.split('#')[1];
        var album = document.querySelector(href);
        target = album.getElementsByTagName('A')[0];
    }

    pic.src = target.href;
    caption.firstChild.nodeValue = target.title;
    return false;
}


function setStatus(evt, selector) 
{
    evt.preventDefault();
    var target = evt.target;
    var links = document.querySelectorAll(selector);

    if (target.parentNode.id === 'albums') 
    {
        var href = '#' + evt.target.href.split('#')[1];
        var album = document.querySelector(href);
        target = album.getElementsByTagName('A')[0];
    }

    for (var i = 0, j = links.length; i < j; i++) 
    {
        links[i].className = 'off';
    }

    target.className = 'on';
}


function changeAlbum(evt) {
    evt.preventDefault();
    var target = '#' + evt.target.href.split('#')[1];
    var albums = document.querySelectorAll('.album');

    for (var i = 0, j = albums.length; i < j; i++) 
    {
        albums[i].classList.add('hide');
    }

    document.querySelector(target).classList.remove('hide');
    setStatus(evt, '#albums a');
    changePic(evt);
}

