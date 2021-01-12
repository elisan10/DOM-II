// Your code goes here


//ADD on double click event to logo-heading--------------------------
const logo = document.querySelector('.logo-heading')

logo.addEventListener('dblclick', textChange)

function textChange(){
    logo.innerHTML = 'FUN FUN BUS!!'
    logo.style.color = 'red'
}


//ADD blur and focus events to all nav links------------------------- 

const navLinks = document.querySelectorAll('.main-navigation nav a')

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('focus', (event) => {
        event.target.style.color = 'lightpink'
    })
    navLinks[i].addEventListener('blur', (event) => {
        event.target.style.color = ''
    })
}


//ADD mouse enter event to every image---------------------------------
    //string is what event we want to use 
document.querySelectorAll('img').forEach(pic => {
    pic.addEventListener('mouseenter', (e) => {
        pic.style.transform = 'scale(1.2)'
        pic.style.transition = 'transform .5s'
    })
})
    //make it so the bus image goes back to original size
document.querySelectorAll('img').forEach(pic => {
    pic.addEventListener('mouseleave', (e) => {
        pic.style.transform = 'scale(1)'
        pic.style.transition = 'transform .5s'
    })
})

//ADD click event for each button------------------------------------
    //when you want to add an event listener to multiple events
    //use the for each method. e.g.
document.querySelectorAll('.btn').forEach(title => {
    title.addEventListener('click', (e) => {
        console.log(e)
        title.style.backgroundColor = 'lightpink'
    })
}) 

    //whatever you put in the parameter is always going to be the event 

    //try to make your code as readable as possible 






