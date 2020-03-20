let aboutWindow = document.querySelector('.about');
let secondWindow = document.querySelector('.second-window');
let close1Window = document.querySelector( '.close-1');
let thirdWindow = document.querySelector('.third-window','third-window-text', 'third-window-img');
let close2Window = document.querySelector( '.close-2');
let fourthWindow = document.querySelector('.fourth-window','.fourth-window-text', '.fourth-window-img')
let close3Window = document.querySelector( '.close-3');
let fiveWindow = document.querySelector('.five-window','.five-window-text', '.five-window-img')
let close4Window = document.querySelector( '.close-4');
let sixWindow = document.querySelector('.six-window','.six-window-text', '.six-window-img')
let close5Window = document.querySelector( '.close-5');
let sevenWindow = document.querySelector('.seven-window','.seven-window-text', '.seven-window-img')
let close6Window = document.querySelector( '.close-6');
let eightWindow = document.querySelector('.eight-window','.eight-window-text', '.eight-window-img')
let close7Window = document.querySelector( '.close-7');
let nineWindow = document.querySelector('.nine-window','.nine-window-text', '.nine-window-img')
let close7Window = document.querySelector( '.close-8');


aboutWindow.addEventListener('click', function(){
    secondWindow.style.setProperty('visibility', 'visible');
});

close1Window.addEventListener('click', function(){
    thirdWindow.style.setProperty('visibility', 'visible');

});
close2Window.addEventListener('click', function(){
    fourthWindow.style.setProperty('visibility', 'visible');
});
close3Window.addEventListener('click', function(){
    fiveWindow.style.setProperty('visibility', 'visible');
});
close4Window.addEventListener('click', function(){
    sixWindow.style.setProperty('visibility', 'visible');
});
close5Window.addEventListener('click', function(){
    sevenWindow.style.setProperty('visibility', 'visible');
});
close6Window.addEventListener('click', function(){
    eightWindow.style.setProperty('visibility', 'visible');
});
close7Window.addEventListener('click', function(){
    nineWindow.style.setProperty('visibility', 'visible');
});



