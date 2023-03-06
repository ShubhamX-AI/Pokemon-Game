score = 0;
cross = true
gamemusic = new Audio("gamemusic.mp3")
gameovermusic = new Audio("gameover.mp3")
setTimeout(()=>{
    gamemusic.play()
},1000)
gamemusic.loop = true

document.onkeydown = (e)=>{
    if(e.keyCode == 87){
        hero = document.querySelector(".hero")
        hero.classList.add("animateHero");
        setTimeout(()=>{
            hero.classList.remove("animateHero")
        },1000)
    }
    if(e.keyCode==68){
        hero = document.querySelector(".hero")
        heroX = parseInt(window.getComputedStyle(hero).getPropertyValue("left"))
        hero.style.left= heroX + 100 +"px"
    }
    if(e.keyCode==65){
        hero = document.querySelector(".hero")
        heroX = parseInt(window.getComputedStyle(hero).getPropertyValue("left"))
        hero.style.left= heroX - 100 +"px"
    }
}

setInterval(()=>{
    hero = document.querySelector(".hero")
    gameover = document.querySelector(".gameover")
    scorecount = document.querySelector(".scorecount")
    villain = document.querySelector(".villain")

    heroX = parseInt(window.getComputedStyle(hero).getPropertyValue("left"))
    heroY = parseInt(window.getComputedStyle(hero).getPropertyValue("top"))
    villainX = parseInt(window.getComputedStyle(villain).getPropertyValue("left"))
    villainY = parseInt(window.getComputedStyle(villain).getPropertyValue("top"))

    
    offsetX = Math.abs(heroX-villainX)
    offsetY = Math.abs(heroY-villainY)

    if(offsetX<100 && offsetY<100){
        villain.classList.remove("animateVillain")
        gameover.style.visibility='visible'
        gamemusic.pause();
        gameovermusic.play();
    }
    else if(offsetX<80 && cross){
        score +=100 ;
        cross = false
        setTimeout(()=>{
            cross = true;
        },500)
        scorecount.innerHTML = `Your Score is : ${score}`
        setTimeout(()=>{
            villainanidure = parseFloat(window.getComputedStyle(villain).getPropertyValue("animation-duration"))
            console.log(villainanidure)
            villain.style.animationDuration = (villainanidure - 0.1) + "s"
            console.log(villainanidure)
        },500)  
    }
},100)