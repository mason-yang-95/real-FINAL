const pad1= document.querySelector('.pad1')
const pad2= document.querySelector('.pad2')
const pad3= document.querySelector('.pad3')
const pad4= document.querySelector('.pad4')
const pad5= document.querySelector('.pad5')
const pad6= document.querySelector('.pad6')

const image= document.querySelector('#myImage')

const sound1= document.querySelector('.sound1')
const sound2= document.querySelector('.sound2')
const sound3= document.querySelector('.sound3')
const sound4= document.querySelector('.sound4')
const sound5= document.querySelector('.sound5')
const sound6= document.querySelector('.sound6')

const title= document.querySelector('.title')


pad1.addEventListener('click', function (event) {
    image.src= 'img/1.jpg' 
    sound1.play()
    sound2.pause()
    sound2.currentTime = 0
    sound3.pause()
    sound3.currentTime = 0
    sound4.pause()
    sound4.currentTime = 0
    sound5.pause()
    sound5.currentTime = 0
    sound6.pause()
    sound6.currentTime = 0
    title.innerHTML = 'Do you love me, or...?(feat. B. $oul) - Gat$by [Prod. wavytrbl]'
})
pad2.addEventListener('click', function (event) {
    image.src= 'img/2.jpg'
    sound2.play()
    sound1.pause()
    sound1.currentTime = 0
    sound3.pause()
    sound3.currentTime = 0
    sound4.pause()
    sound4.currentTime = 0
    sound5.pause()
    sound5.currentTime = 0
    sound6.pause()
    sound6.currentTime = 0
    title.innerHTML = 'Iron Man - Gat$by [Prod. brayden pott]'
})
pad3.addEventListener('click', function (event) {
    image.src= 'img/3.jpg'
    sound3.play()
    sound1.pause()
    sound1.currentTime = 0
    sound2.pause()
    sound2.currentTime = 0
    sound4.pause()
    sound4.currentTime = 0
    sound5.pause()
    sound5.currentTime = 0
    sound6.pause()
    sound6.currentTime = 0
    title.innerHTML = 'Last Night On Earth - Green Day | Cover. Gat$by'
})
pad4.addEventListener('click', function (event) {
    image.src= 'img/4.jpg'
    sound4.play()
    sound1.pause()
    sound1.currentTime = 0
    sound2.pause()
    sound2.currentTime = 0
    sound3.pause()
    sound3.currentTime = 0
    sound5.pause()
    sound5.currentTime = 0
    sound6.pause()
    sound6.currentTime = 0
    title.innerHTML = 'no song without you - HONNE | Cover. Gat$by'
})
pad5.addEventListener('click', function (event) {
    image.src= 'img/5.jpg'
    sound5.play()
    sound1.pause()
    sound1.currentTime = 0
    sound2.pause()
    sound2.currentTime = 0
    sound3.pause()
    sound3.currentTime = 0
    sound4.pause()
    sound4.currentTime = 0
    sound6.pause()
    sound6.currentTime = 0
    title.innerHTML = 'Rewind - Gat$by (Powfu - Death Bed remix)'
})
pad6.addEventListener('click', function (event) {
    image.src= 'img/6.jpg'
    sound6.play()
    sound1.pause()
    sound1.currentTime = 0
    sound2.pause()
    sound2.currentTime = 0
    sound3.pause()
    sound3.currentTime = 0
    sound4.pause()
    sound4.currentTime = 0
    sound5.pause()
    sound5.currentTime = 0
    title.innerHTML = 'Starting Point(feat. LazyMan) - Gat$by'
})