var elInner, duration;
elInner = document.getElementsByClassName('p1-container');
duration = 10;
    
if(elInner.length) {
    setTimeout(function () {
        console.log('booboo')
        window.location.href = '/fjord_2';
    }, duration*1000)
};