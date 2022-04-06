var elInner, duration;
var p1 = document.getElementsByClassName('p1-container');
var p2 = document.getElementsByClassName('p2-container');
var p4 = document.getElementsByClassName('p4-container');
var duration = 30;

function shuffleContent(container) {
    var content = container.find("> *");
    var total = content.length;
    content.each(function() {
      content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });
  }
  $(function() {
    shuffleContent($("#menu"));
  });
    
if(p1.length) {
    setTimeout(function () {
        console.log('boo1')
        window.location.href = '/fjord_2';
    }, duration*1000)
};

if(p2.length) {
    setTimeout(function () {
        console.log('boo2')
        window.location.href = '/fjord_4';
    }, duration*1000)
};

if(p4.length) {
    setTimeout(function () {
        console.log('boo4')
        window.location.href = '/';
    }, duration*1000)
};