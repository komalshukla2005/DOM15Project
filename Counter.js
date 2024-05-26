let count=document.querySelector('h2')
let btn1=document.querySelector('#b1')
let btn2=document.querySelector('#b2')
let btn3=document.querySelector('#b3')
let start=0

btn1.addEventListener("click",()=>{
    count.innerHTML=start;
    start=start-1
    count.style.color = 'red';
})

btn2.addEventListener("click",()=>{
    start=0
    count.innerHTML=start;
    count.style.color = 'black';
})
btn3.addEventListener("click",()=>{
    count.innerHTML=start;
    start=start+1
    count.style.color = 'green';
})

