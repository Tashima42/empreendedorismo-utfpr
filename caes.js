// this is disabled since the code is already generated
// and it is already in the index.html file.
// If new questions are created and need to be inserted
// they can be added to the form.js file and the function
// call below uncommented.

//buildQuestions(caesForm.questions)

function calculateResult() {
  const answers = []
  for (let i = 0; i < caesForm.questions.length; i++) {
    const { value } = document.getElementById(`question-caes-select-${i}`)
    if (value == "0") {
      alert(`Erro: nenhum valor selecionado na questão ${i + 1}`)
      return
    }
    answers.push(parseInt(value))
  }
  buildResult(caesForm.calculateResult(answers))
}

function buildResult(result) {
  console.log(result)

  document.getElementById("resultado-busca-oportunidade").appendChild(document.createTextNode(result.buscaOportunidade))
  document.getElementById("resultado-persistencia").appendChild(document.createTextNode(result.persistencia))
  document.getElementById("resultado-comprometimento").appendChild(document.createTextNode(result.comprometimento))
  document.getElementById("resultado-exigencia").appendChild(document.createTextNode(result.exigencia))
  document.getElementById("resultado-riscos").appendChild(document.createTextNode(result.riscos))
  document.getElementById("resultado-metas").appendChild(document.createTextNode(result.metas))
  document.getElementById("resultado-busca-informacoes").appendChild(document.createTextNode(result.buscaInformacoes))
  document.getElementById("resultado-planejamento").appendChild(document.createTextNode(result.planejamento))
  document.getElementById("resultado-persuasao").appendChild(document.createTextNode(result.persuasao))
  document.getElementById("resultado-independencia").appendChild(document.createTextNode(result.independencia))
}

function buildQuestions(questions) {
  const questionsContainer = document.getElementById("questions")
  for (let i = 0; i < questions.length; i++) {
    questionsContainer.appendChild(buildQuestion(i, i + 1 + " - " + questions[i]))
  }
}

function buildQuestion(formId, titleText) {
  const container = document.createElement("div")
  container.classList.add("question-caes-caes-container")
  container.id = `question-caes-container-${formId}`

  const title = document.createElement("p")
  title.classList.add("question-caes-caes-title")
  const titleB = document.createElement("b")
  title.id = `question-caes-title-${formId}`
  titleB.appendChild(document.createTextNode(titleText))
  title.appendChild(titleB)

  const label = document.createElement("label")
  label.classList.add("question-caes-label")
  label.appendChild(document.createTextNode("Escolha uma opção: "))
  label.setAttribute("for", `question-caes-select-${formId}`)
  label.id = `question-caes-label-${formId}`

  const select = document.createElement("select")
  select.classList.add("question-caes-select")
  select.id = `question-caes-select-${formId}`

  const optionSelecionar = document.createElement("option")
  optionSelecionar.classList.add("question-caes-option")
  optionSelecionar.setAttribute("value", "0")
  optionSelecionar.appendChild(document.createTextNode("Selecionar"))
  optionSelecionar.id = `question-caes-option-0-${formId}`
  const optionNunca = document.createElement("option")
  optionNunca.classList.add("question-caes-option")
  optionNunca.setAttribute("value", "1")
  optionNunca.appendChild(document.createTextNode("1 - Nunca"))
  optionNunca.id = `question-caes-option-1-${formId}`
  const optionRaramente = document.createElement("option")
  optionRaramente.classList.add("question-caes-option")
  optionRaramente.setAttribute("value", "2")
  optionRaramente.appendChild(document.createTextNode("2 - Raramente"))
  optionRaramente.id = `question-caes-option-2-${formId}`
  const optionAlgumas = document.createElement("option")
  optionAlgumas.classList.add("question-caes-option")
  optionAlgumas.setAttribute("value", "3")
  optionAlgumas.appendChild(document.createTextNode("3 - Algumas vezes"))
  optionAlgumas.id = `question-caes-option-3-${formId}`
  const optionMaioria = document.createElement("option")
  optionMaioria.classList.add("question-caes-option")
  optionMaioria.setAttribute("value", "4")
  optionMaioria.appendChild(document.createTextNode("4 - A maioria das vezes"))
  optionMaioria.id = `question-caes-option-4-${formId}`
  const optionSempre = document.createElement("option")
  optionSempre.classList.add("question-caes-option")
  optionSempre.setAttribute("value", "5")
  optionSempre.appendChild(document.createTextNode("5 - Sempre"))
  optionSempre.id = `question-caes-option-5-${formId}`

  select.appendChild(optionSelecionar)
  select.appendChild(optionNunca)
  select.appendChild(optionRaramente)
  select.appendChild(optionAlgumas)
  select.appendChild(optionMaioria)
  select.appendChild(optionSempre)

  container.appendChild(title)
  container.appendChild(label)
  container.appendChild(select)

  return container
}