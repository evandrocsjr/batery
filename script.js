document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('.init-tocar').addEventListener('click', ()=>{
    let song = document.querySelector('.comp').value

    if(song !== ''){
        let songArray = song.split('')

        playComposition(songArray)
    }
})


function playSound(sound){
    let soundElement = document.querySelector(`#s_${sound}`)

    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(soundElement){
        soundElement.currentTime = 0 // FAZ O AUDIO VOLTAR PARA O COMEÇO
        soundElement.play()
    }

    if(keyElement){
        keyElement.classList.add('mudar')

        setTimeout(() =>{
            keyElement.classList.remove('mudar')
        },300)
    }
}


function playComposition(songArray){
    let wait = 0

    for(let songs of songArray){
        setTimeout(()=>{
            playSound(`key${songs}`)
        }, wait)
        
        wait += 250
    }   
}