

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
      navLinks. forEach (links => {
   links. classList. remove('active');
   document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
});  
 let header = document.querySelectorAll('header');

 header.classList.toggle('sticky', window.scrollY > 100)
};
 


ScrollReveal({
     reset: true ,
     distance:'80px',
     duration: 2000,
     delay: 200
    });
ScrollReveal().reveal('.home-content , .heading', { orgin: 'top' }); 
ScrollReveal().reveal('home-jpg , skill-con', { orgin: 'bottom' });    
