console.log('running...');
const quizData = [
    {
        question: "What is the most used programming language in 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Romijul Laskar",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question:"Which Disney Princess called Gus and Jaq friends?",
        a: "Cindrella",
        b: "Donald Trump",
        c: "Rupanjel",
        d: "Jasmine",
        correct:"a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answer= document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit_btn = document.getElementById('submit');
let cq = 0;
let score = 0;
let correct=0;

function start(){
    loadQuiz();
    document.getElementById('submit').style.display='block';
    document.getElementById('start').style.display='none';
}

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[cq];
    quiz.innerHTML = currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}
function selected(){
    let ans=undefined;
    answer.forEach((answer)=>{
        if(answer.checked){
            ans=answer.id;
        }
    });
    return ans;
}
function deselect(){
    answer.forEach((answer)=>{
        answer.checked=false;
    });
}
submit_btn.addEventListener("click",()=>{
    const answer=selected();
    if(answer){
        if(answer==quizData[cq].correct){
            score+=100;
            correct++;
        }
    }
    cq++;
    if(cq<quizData.length){
        loadQuiz();
    }
    else{
        alert('you are finished.');
        document.getElementById('score').value=score;
        document.getElementById('correct').value=correct+'/'+quizData.length;
        cq=0;
        score=0;
        correct=0;
        loadQuiz();
        document.getElementById('show').style.display='none';
        document.getElementById('modal').style.display='block';
        var data=document.getElementById('score').value;
        let f=data.toString();
        if(f==='500')
        {
            document.getElementById('gif').style.display='block';
        }
    }

});
function begin(){
    document.getElementById('modal').style.display='none';
    document.getElementById('show').style.display='block';
}
