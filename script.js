const quizData = [
    {
        question: "1. Celá baterka mobilu se nabije za 5 hodin. Za jak dlouho se nabije 50% baterky?",
        a: "10 hodin",
        b: "2,5 hodiny",
        
        correct: "b",
    },
    {
      question: "2. Ve vesnici Nový Smrdák bydlí 100 lidí. Jedno procento z nich hraje hru Pokemon Go. Kolik je to lidí?",
      a: "10",
      b: "1",
      
      correct: "b",
  },
  {
    question: "3. Čtvrtina maminek se pravidelně vrtá v nose. Kolik je to procent? ",
    a: "10 %",
    b: "25 %",
    
    correct: "b",
},
{
  question: "4. Zubaři hodnotili  dětské zubní pasty. 9 z 10 zubařů doporučilo pastu Elmex. Kolik je to procent?",
  a: "90 %",
  b: "9 %",
  
  correct: "a",
},{
  question: "5. Jedna třetina je 33,33 procent. Kolik procent jsou dvě třetiny?",
  a: "100 %",
  b: "66,66 %",
  
  correct: "b",
},
{
question: "6. 20 % dětí sbírá kartičky pokemonů. Na hřišti je 10 dětí. Kolik z nich sbírá kartičky pokemonů?",
a: "5",
b: "2",

correct: "b",
},{
  question: "7. Každá flaška dobije Mišce energii o 10%. Kolik % bude mít Miška, když měla 20% a vypije ještě 3 flašky? ",
  a: "60 %",
  b: "50 %",
  
  correct: "b",
},
{
question: "8. Čokoláda Malamela obsahuje 50 % cukru a váží 100 gramů. Kolik gramů cukru obsahuje? ",
a: "50 g",
b: "80 g",

correct: "a",
},{
  question: "9. Jedna desetina z 300 klíšťat je infikována boreliózou. Kolik je to klíšťat?",
  a: "100",
  b: "30",
  
  correct: "b",
},
{
question: "10. Kolik minut je 50 % z hodiny?",
a: "30 minut",
b: "50 minut",

correct: "a",
},{
  question: "11. Kolik procent dne přejde za 6 hodin?",
  a: "25 %",
  b: "60 %",
  
  correct: "a",
},
{
question: "12. Pětina je 20 % celku. Kolik procent jsou dvě pětiny? ",
a: "40 %",
b: "60 %",

correct: "a",
},{
  question: "13. Kolik je jedna desetina ze 100 koček? ",
  a: "10 koček",
  b: "1 kočka",
  
  correct: "a",
},
{
question: "14. Koupila jsem 30 mandarinek. Kolik mandarinek je jedna třetina z nich?",
a: "10 mandarinek",
b: "15 mandarinek",

correct: "a",
},{
  question: "15. Čtvrtina dětí odpoledne neusnula. 15 dětí usnulo. Kolik bylo dětí spolu?  ",
  a: "20",
  b: "30",
  
  correct: "a",
},
{
question: "16. 10 % holčiček si vybralo modré šaty. 20% holčiček si vybralo žluté šaty. Zbylé holčičky chtěli růžové šaty. Kolik % holčiček chtělo růžové šaty? ",
a: "70 %",
b: "50 %",

correct: "a",
},{
  question: "17. Koupila jsem si 10 knih. 40% z nich nejsou komiksy. Kolik komixů jsem si koupila?",
  a: "6",
  b: "4",
  
  correct: "a",
},
{
question: "18. Jeden měsíc je jedna dvanáctina roku. Co je jeden den v týdnu? ",
a: "jedna desetina týdnu",
b: "jedna sedmina týdnu",

correct: "b",
},{
  question: "19. Kolik měsíců je třetina roku?",
  a: "4",
  b: "6",
  
  correct: "a",
},
{
question: "20. 30% z 10 jablek bylo zkažených. Kolik bylo dobrých?",
a: "7",
b: "3",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })