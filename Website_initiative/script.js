document.querySelectorAll(".question-no").forEach(function(question) {
    let answer = question.querySelector(".answer");
    question.addEventListener('click', function() {
        answer.classList.toggle('increase');
    });
});
// clicked =false;
// question.addEventListener('click',function(){
//     clicked= !clicked
//     if(clicked){
//         q_a.classList.add('increase')
//     }
//     else{
//         q_a.classList.remove('increase')
//     }
// })