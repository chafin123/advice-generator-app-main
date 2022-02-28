const resultsQuote = document.querySelector('#generatedAdvice');
const resultsButton = document.querySelector('#dataGetButton');
const adviceId = document.querySelector('#adviceNumber');
const apiUrl = "https://api.adviceslip.com/advice";


resultsButton.addEventListener("click", () => {
    resultsButton.disabled = true;
    
    //Request Data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
        
        //Inject to DOM
        adviceId.innerHTML = `# ${dataId}`;
        resultsQuote.innerHTML = dataAdvice;
        let text = resultsQuote.innerHTML;
        resultsQuote.innerHTML = "";
        let i=0;
         let timer = setInterval(() => {
           if(i<text.length){
             resultsQuote.append(text.charAt(i))
             i++;
           } else {
             clearInterval(timer)
             resultsButton.disabled = false;
           }
         },80)
      });
  });
