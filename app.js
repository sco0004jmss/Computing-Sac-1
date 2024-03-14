document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 55; // Adjust the scroll offset here
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetTop - offset,
            behavior: 'smooth'
        });
    });
});









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
