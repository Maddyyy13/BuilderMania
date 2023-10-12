let bookNow=document.querySelector('.booknow');
let section2=document.querySelector('.section2');
let section3=document.querySelector('.section3');
let section4=document.querySelector('.section4');
let section5=document.querySelector('.section5');
let footer=document.querySelector('footer');
let s1footer=document.querySelector('.s1footer');
let header=document.querySelector('header');
let menu=document.querySelector('.menu');
let links=document.querySelector('.links');
let sections=document.querySelectorAll('section');
let mainFooter=document.querySelector('footer');

setInterval(()=>{
    let colored=document.querySelector('.section1 h1 span.darkblue');
    colored.classList.remove('darkblue');
    colored.nextElementSibling.classList.add('darkblue');

},1000)

setInterval(()=>{
    bookNow.classList.add('translate');
},4000)


let observer=new IntersectionObserver((e)=>{

    e.forEach((x)=>{
        x.target.classList.toggle('showsection',x.isIntersecting);
        if(x.isIntersecting) observer.unobserve(x.target);
        
    })

},{
    root:null,
    threshold:.2,
})

observer.observe(section2);
observer.observe(section3);
observer.observe(section4);
observer.observe(section5);
observer.observe(s1footer);


menu.addEventListener('click',()=>{
    links.classList.toggle('showmenu');
})

for(let i=0;i<sections.length;i++){

    sections[i].addEventListener('click',()=>{
        links.classList.contains('showmenu')?links.classList.remove('showmenu'):none;
    })
}

mainFooter.addEventListener('click',()=>{
    links.classList.contains('showmenu')?links.classList.remove('showmenu'):none;
})
