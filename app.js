const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const form3 = document.querySelector('.form3');
const next = document.querySelector('.next');
const next2 = document.querySelector('.next2');
const back = document.querySelector('.back');
const back2 = document.querySelector('.back2');

next.addEventListener('click', (e) => {
    e.preventDefault()
    form2.style.display = "flex";
    form1.style.display = "none";
 
})

back.addEventListener('click', (e) => {
    e.preventDefault()  
    form2.style.display = "none";
    form1.style.display = "flex";
})

// 

next2.addEventListener('click', (e) => {
    e.preventDefault()

    form2.style.display = "none";
    form3.style.display = "flex";
})


back2.addEventListener('click', (e) => {
    e.preventDefault()  
    form2.style.display = "flex";
    form3.style.display = "none";
})



