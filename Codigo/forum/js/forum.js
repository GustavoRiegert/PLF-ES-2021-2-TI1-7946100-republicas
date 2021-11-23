console.info("Forum.js iniciado");

const SwalToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const questionFormElem = document.querySelector("#question-form");

function saveQuestionInLocalstorage(question) {
  const databaseExists = localStorage.getItem("questions_and_answers") !== null;
  let questionsAndAnswers;
  if (databaseExists) {
    // Se o banco de dados existe, busca ele e preenche a váriavel
    questionsAndAnswers = JSON.parse(localStorage.getItem("questions_and_answers"));
  } else {
    // Se o banco de dados não existe, a váriavel recebe uma lista vazia
    questionsAndAnswers = [];
  }

  // Inicialmente a pergunta não possui resposta, ou seja answer é nulo
  const questionAndAnswerStruct = {
    question: question,
    question_timestamp: new Date().toISOString(),
    answer: null,
    answer_timestamp: null,
  };

  // Atualiza a váriavel contendo a lista de perguntas e respostas
  questionsAndAnswers.push(questionAndAnswerStruct);
  // Atualiza o banco de dados com o novo valor da variável
  localStorage.setItem("questions_and_answers", JSON.stringify(questionsAndAnswers));
}

function answerQuestionInLocalstorage(answer, questionIdx) {
  const questionsAndAnswers = readQuestionsInLocalstorage();

  if (questionsAndAnswers.length === 0) {
    SwalToast.fire("Ocorreu um Erro", "Não há nenhuma pergunta para ser respondida.", "error");
    return;
  }
  if (questionIdx >= questionsAndAnswers.length) {
    SwalToast.fire("Ocorreu um Erro", "A pergunta a ser respondida não existe.", "error");
    return;
  }
  if (!answer) {
    SwalToast.fire("Ocorreu um Erro", "A resposta para a pergunta está vazia.", "error");
    return;
  }

  // Atualiza a pergunta da váriavel contendo a lista de perguntas e respostas
  const questionAndAnswerStruct = questionsAndAnswers[questionIdx];
  questionAndAnswerStruct.answer = answer;
  questionAndAnswerStruct.answer_timestamp = new Date().toISOString();

  // Atualiza o banco de dados com o novo valor da variável
  localStorage.setItem("questions_and_answers", JSON.stringify(questionsAndAnswers));
}

function readQuestionsInLocalstorage() {
  const databaseExists = localStorage.getItem("questions_and_answers") !== null;
  let questionsAndAnswers;
  if (databaseExists) {
    // Se o banco de dados existe, busca ele e preenche a váriavel
    questionsAndAnswers = JSON.parse(localStorage.getItem("questions_and_answers"));
  } else {
    // Se o banco de dados não existe, a váriavel recebe uma lista vazia
    questionsAndAnswers = [];
  }

  // retorna a lista de perguntas e respostas
  return questionsAndAnswers;
}

function renderLocalStorageQuestionsAndAnswers() {
  const questionsAndAnswers = readQuestionsInLocalstorage();

  // Cria HTML da pergunta. Modelo:
  //
  // <div class="mb-4">
  //   <p class="mb-2 lh-1">Ter, 21 de Out</p>
  //
  //   <div class="p-3 border border-dark rounded shadow-sm">
  //     <p class="mb-2 lh-1">
  //       Tem farmácias perto da república?
  //       <small class="fw-light text-black-50">13:45</small>
  //     </p>
  //
  //     <p class="m-0 lh-1 fw-light">
  //       Olá! Tem sim! No quarteirão de baixo há uma Araújo e uma Droga Raia.
  //       <small class="text-black-50">13:45</small>
  //     </p>
  //   </div>
  // </div>

  const answeredQuestionsContainerElem = document.querySelector("#answered-questions-container");
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  answeredQuestionsContainerElem.textContent = "";

  // for (const questionAndAnswer of questionsAndAnswers) {
  // loop em ordem inversa
  for (let i = questionsAndAnswers.length - 1; i >= 0; i--) {
    const questionAndAnswer = questionsAndAnswers[i];
    // So renderiza se a pergunta tiver resposta
    if (questionAndAnswer.answer) {
      // Cria os elementos HTML e adiciona suas classes
      const containerEl = document.createElement("div");
      containerEl.classList.add("mb-4");

      const datetimeEl = document.createElement("p");
      datetimeEl.classList.add("mb-2", "lh-1");

      const containerQuestionsAndAnswerEl = document.createElement("div");
      containerQuestionsAndAnswerEl.classList.add("p-3", "border", "border-dark", "rounded", "shadow-sm");

      const questionEl = document.createElement("p");
      questionEl.classList.add("mb-2", "lh-1");

      const questionDatetimeEl = document.createElement("small");
      questionDatetimeEl.classList.add("ps-1", "fw-light", "text-black-50");

      const answerEl = document.createElement("p");
      answerEl.classList.add("m-0", "lh-1", "fw-light");

      const answerDatetimeEl = document.createElement("small");
      answerDatetimeEl.classList.add("ps-1", "text-black-50");

      // Preenche os elementos HTML
      questionEl.insertAdjacentText("afterbegin", questionAndAnswer.question);
      questionDatetimeEl.innerText = new Date(questionAndAnswer.question_timestamp).toLocaleTimeString("default", {
        hour: "2-digit",
        minute: "2-digit",
      });
      questionEl.appendChild(questionDatetimeEl);

      answerEl.insertAdjacentText("afterbegin", questionAndAnswer.answer);
      answerDatetimeEl.innerText = new Date(questionAndAnswer.answer_timestamp).toLocaleTimeString("default", {
        hour: "2-digit",
        minute: "2-digit",
      });
      answerEl.appendChild(answerDatetimeEl);

      containerQuestionsAndAnswerEl.appendChild(questionEl);
      containerQuestionsAndAnswerEl.appendChild(answerEl);

      datetimeEl.innerText = new Date(questionAndAnswer.question_timestamp).toLocaleDateString("default", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      containerEl.appendChild(datetimeEl);
      containerEl.appendChild(containerQuestionsAndAnswerEl);

      // Adiciona na DOM
      answeredQuestionsContainerElem.appendChild(containerEl);
    }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  // question recebe o value do elemento de `name` == `question` dentro do form
  const question = questionFormElem.elements.question.value;
  if (!question) {
    Swal.fire("Atenção", "A pergunta está vazia", "warning");
    return;
  }
  saveQuestionInLocalstorage(question);
  SwalToast.fire("Sucesso!", "Pergunta enviada.", "success");
  questionFormElem.elements.question.value = "";

  // Como ainda não tem interação esse metodo responde aleatoriamente as perguntas
  setTimeout(answerRandomQuestion, 2500);
}

// answerRandomQuestion responde aleatoriamente as perguntas
function answerRandomQuestion() {
  const questionsAndAnswers = readQuestionsInLocalstorage();
  // Busca uma pergunta não respondida
  const idx = questionsAndAnswers.findIndex((questionAndAnswer) => !questionAndAnswer.answer);
  // Se encontrar gera uma resposta automática
  if (idx !== -1) {
    answerQuestionInLocalstorage("Resposta automática, aguardando resposta do anunciante", idx);
    renderLocalStorageQuestionsAndAnswers();
    SwalToast.fire("Informativo", "Foi gerada uma Resposta automática.", "info");
  }
}

questionFormElem.addEventListener("submit", handleFormSubmit);
renderLocalStorageQuestionsAndAnswers();
