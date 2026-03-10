window.addEventListener("DOMContentLoaded", () => {
    
//splitText
let el = document.querySelectorAll('.split_text');
el.forEach((txt) => {
    let text = txt.textContent;
    let result = text.split('');
    let newText = '';
        

    for(let i = 0; i < result.length; i++){
        newText += '<span class="char">' + result[i] + '</span>';
    }

    txt.innerHTML = newText;
});

//Animation
gsap.fromTo(
    ".yukiMiyauchi",
    {
        opacity:0,
    },
    {
        delay:0.5,
        duration: 2,
        opacity:1,
    },
);
//textAnimation
gsap.fromTo(
[".topMessage .char",".underMessage .char"],
    {
        y: 30,
        opacity:0,
    },
    {
        y: 0,
        stagger: 0.05,
        duration: 1,
        opacity:1,
    },
);
//gsap.fromTo(
//".heading .char",
//   {
//        y: 30,
//        opacity:0,
//    },
//    {
//        y: 0,
//        stagger: 0.05,
//        duration: 1,
//        opacity:1,
//        scrollTrigger: {
//        trigger: '.heading',
//        start: 'top 70%',
//  },
//    }
//)
});