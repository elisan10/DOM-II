// Your code goes here

const introHeader = document.querySelector('.intro')
const busImage = introHeader.querySelector('img')

//string is what event we want to use 
busImage.addEventListener('mouseenter',() => {
    busImage.style.transform = 'scale(1.2)'
    busImage.style.transition = 'transform 1s'
})
 //make it so the bus image goes back to original size
 //fade it back over 1s
 busImage.addEventListener('mouseleave', () => {
     busImage.style.transform = 'scale(1)'
     busImage.style.trasition = 'transform 1s'
 })

//when you want to add an event listener to multiple events
//use the for each method. e.g.
document.querySelectorAll('.btn').forEach(title => {
    title.addEventListener('click', (e) => {
        console.log(e)
        title.style.backgroundColor = 'red'
    })
}) 

//whatever you put in the parameter is always going to 
//be the event 

//try to make your code as readable as possible 