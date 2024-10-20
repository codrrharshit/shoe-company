const header=document.querySelector('#header')
const button=document.querySelector('#hamburger-button')

header.addEventListener('click',()=>{
    header.classList.toggle('open-menu')
})

// button.addEventListener('click',()=>{
//     button.classList.toggle('active')
// })