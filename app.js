'use strict';
{
    const lis = document.querySelectorAll('li');
    // const ancors = document.querySelectorAll('a');
    const textarea = document.querySelector('textarea');
    const removeBtn = document.querySelector('#removeBtn');
    const textBtn = document.querySelector('.text-btn');
    const textContainer = document.querySelector('.text-container');
    const closeBtn = document.querySelector('.closeBtn');
    // console.log(lis);
    const timer = 1000;
    textBtn.addEventListener('touchstart',() => {
        textContainer.style.display = "block";
    });
    closeBtn.addEventListener('touchstart',() => {
        textContainer.style.display = "none";
    });
    textContainer.addEventListener('touchstart',(e) => {
        console.log(e.target);
        if(e.target === textContainer) {
            textContainer.style.display = "none";
        }
    });
    
    lis.forEach((li,index) => {
        // console.log(index);
        li.addEventListener('touchstart',(e) => {
            // console.log(li)
            // console.log('touchstart!');
            // 音声出力
            // const typeSound = new Audio(`./audio/${index}.mp3`);
            // console.log(typeSound);
            // if(index === ) {
            //     typeSound.play();
            //     typeSound.currentTime = 0;
            // }
            e.preventDefault();
            li.classList.add('big');
            let liValue = li.value;
            if(index + 1 === liValue) {
                // console.log('touchstart');
                // console.log(li.textContent);
                textarea.textContent += li.textContent
            }
            // console.log(liValue);
            // console.log(this.document.ul.li);
            // ancors.forEach((ancor) => {
            //     ancor.addEventListener('touchstart',() => {
            //         console.log(ancor);
            //         let ancorValue = ancor.value;
            //         console.log(ancorValue);
            //         textarea.textContent += ancor; 
            //         textarea.appendChild(ancor);
            //     });
            // });
            setTimeout(() => {
                li.classList.remove('big');
            },timer);
        });
    });
    removeBtn.addEventListener('touchstart',() =>{
        textarea.textContent = "";
    });
}