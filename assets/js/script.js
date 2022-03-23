// TODO: Declare any global variables we need


    let heads=0;
    let tails=0;
    let total=0;
    const numHead = document.getElementById('heads')
    const perHead = document.getElementById('heads-percent')
    const numTail = document.getElementById('tails')
    const perTail = document.getElementById('tails-percent')
    const image = document.querySelector('img')
    const text = document.querySelector('h3')
        
    // TODO: Flip Button
    const flip = document.getElementById('flip')
    flip.addEventListener('click', ()=>{
        let desicion = Math.round(Math.random())
      console.log(desicion)

      if (desicion===1){
          heads++
          total++
          numHead.textContent = heads
          let percent = (heads/total)*100
          perHead.textContent = `${Math.round(percent)}%`
          image.src = '/assets/images/penny-heads.jpg'
          text.textContent = 'You Flipped Heads!'
          console.log(`Heads count: ${heads}`)
          console.log(`Tails count: ${tails}`)          
          console.log(`Total count: ${total}`)
      }
      else {
          tails++
          total++
          numTail.textContent = tails
          let percent = (tails/total)*100
          perTail.textContent = `${Math.round(percent)}%`
          image.src = '/assets/images/penny-tails.jpg'
          text.textContent = 'You Flipped Tails!'          
          console.log(`Heads count: ${heads}`)
          console.log(`Tails count: ${tails}`)          
          console.log(`Total count: ${total}`)
      }

    })

    // Clear Button Click Handler
    const clear = document.getElementById('clear')
    clear.addEventListener('click', ()=>{
        heads = 0
        tails = 0
        total=0
        text.textContent = 'Lets get Rolling!'
        numHead.textContent = '0%'
        numTail.textContent = '0%'
        perHead.textContent = '0%'
        perTail.textContent = '0%'
        image.src='/assets/images/penny-heads.jpg'

    })

        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

