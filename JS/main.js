let obstacle = document.getElementById("obstacle")
let hole = document.getElementById("hole")
let bird = document.getElementById("bird")
let score = 0 ;

hole.addEventListener("animationiteration",() => {
   let rand = Math.random() * (50-15)
   console.log(rand);
   hole.style.top = rand + 'rem'

   score++ ;
})
let jumping = false ;
setInterval(() => {
   let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"))
   if (!jumping) {
      bird.style.top = birdTop + 3 + `px`
   }
   let obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"))
   let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"))

   if ( birdTop > 480 || (obstacleLeft<20 && ( birdTop > holeTop + 150 || birdTop < holeTop )) ) {
      alert(`Game over . Your Score is ${score}`)
      bird.style.top = `100px`
      obstacle.style.left = '100%'
      hole.style.left = '100%'
      score = 0 ;
   }
}, 10);
document.addEventListener("click",()=>{
   let jumping = true ;
   let jumpTimer = 0
   let jumpInterval = setInterval(() => {
      jumpTimer++ ;
      let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"))
      if ( birdTop > 0 && jumpTimer<15 ) {
         bird.style.top = birdTop - 8 + `px`
      }
      if ( jumpTimer>20 ) {
         clearInterval(jumpInterval)
         jumping = false
         jumpTimer = 0
      }
   }, 10);
})
