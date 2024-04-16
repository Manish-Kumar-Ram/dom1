const text = document.getElementById('texts');
const color=document.getElementById('color');
const padding=document.getElementById('colors');
const width=document.getElementById('color1');
const height=document.getElementById('color2');
const fonts=document.getElementById('colorfonts');
const margin=document.getElementById('margin');
const all=document.getElementById('color3');


color.addEventListener('click',()=>{
    texts.style.backgroundColor='yellow'
   
})
padding.addEventListener('click',()=>{
    texts.style.padding='10px'
   
})
width.addEventListener('click',()=>{
    texts.style.width='300px'
   
})
height.addEventListener('click',()=>{
    texts.style.height='200px'
   
})
fonts.addEventListener('click',()=>{
    texts.style.fontSize='16px'
   texts.style.color='blue';

   
})
margin.addEventListener('click',()=>{
    texts.style.margin='20px'
   texts.style.color='blue';

   
})


all.addEventListener('click',()=>{
    texts.style.backgroundColor='yellow';
    texts.style.padding='10px';
    texts.style.margin='20px';
    texts.style.fontSize='16px';
    texts.style.height='200px';
    texts.style.width='300px';
    texts.style.fontWeight='bold';
    texts.style.color='blue';


})
