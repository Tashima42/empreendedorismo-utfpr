buildQuestions(caesForm.questions)

function calculateResult() {
  const answers = []
  for (let i = 0; i < caesForm.questions.length; i++) {
    const { value } = document.getElementById(`question-caes-select-${i}`)
    console.log("value: ", value)
    if (value == "0") {
      alert(`Erro: nenhum valor selecionado na questão ${i + 1}`)
      return
    }
    answers.push(parseInt(value))
  }
  buildResult(JSON.stringify(caesForm.calculateResult(answers)))
}

function buildResult(result) {
  const resultContainer = document.getElementById("result")
  const resultP = document.createElement("p")
  resultP.appendChild(document.createTextNode(result))
  resultContainer.appendChild(resultP)
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