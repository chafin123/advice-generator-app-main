const resultsQuote = document.querySelector('#generatedAdvice');
const resultsButton = document.querySelector('#dataGetButton');
const adviceId = document.querySelector('#adviceNumber');
const apiUrl = "https://api.adviceslip.com/advice";

resultsButton.addEventListener("click", () => {
    //Request Data
    fetch(apiUrl, {cache: "no-cache"})
      .then((response) => response.json())
      .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
        //Inject to DOM
        adviceId.innerHTML = `# ${dataId}`;
        resultsQuote.innerHTML = dataAdvice;
      });
  });