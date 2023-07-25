const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
// const yesBtn = document.querySelector('.yest-btn');
const noBtn =  document.querySelector('.no-btn');


const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.querySelector('.yes-btn');
  
    console.log(yesBtn); 

  yesBtn.addEventListener('click', () =>{
    // alert("YES")
    question.innerHTML = 'Mee Tooo (> _ <)';
});
  });


  document.addEventListener('DOMContentLoaded', () => {
    // const noBtn =  document.querySelector('.no-btn');
  
    // console.log(noBtn); // HTMLButtonElement object

    noBtn.addEventListener('mouseover', () =>{
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random()*(wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + "px";
    noBtn.style.top = j + 'px';
})
  
    // // ✅ Works as expected
    // btn.addEventListener('click', () => {
    //   alert('You clicked the button');
    // });
  });


