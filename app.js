
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));



const spinserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showSpin');
        }else{
            entry.target.classList.remove('showSpin');
        }
    });
});

const spinninElements=document.querySelectorAll('.hiddenSpin');
spinninElements.forEach((el)=>spinserver.observe(el));