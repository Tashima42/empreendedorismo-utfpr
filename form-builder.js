buildQuestions(caesForm.questions)

function calculateResult() {
  const answers = []
  for (let i = 0; i < caesForm.questions.length; i++) {
    const { value } = document.getElementById(`question-select-${i}`)
    console.log("value: ", value)
    if (value == "0") {
      alert(`Erro: nenhum valor selecionado na questão ${i + 1}`)
      return
    }
    answers.push(parseInt(value))
  }
  console.log(answers)
  console.log(caesForm.calculateResult(answers))
}

function buildQuestions(questions) {
  const questionsContainer = document.getElementById("questions")
  for (let i = 0; i < questions.length; i++) {
    questionsContainer.appendChild(buildQuestion(i, i + 1 + " - " + questions[i]))
  }
}


function buildQuestion(formId, titleText) {
  const container = document.createElement("div")
  container.classList.add("question-container")
  container.id = `question-container-${formId}`

  const title = document.createElement("p")
  title.classList.add("question-title")
  const titleB = document.createElement("b")
  title.id = `question-title-${formId}`
  titleB.appendChild(document.createTextNode(titleText))
  title.appendChild(titleB)

  const label = document.createElement("label")
  label.classList.add("question-label")
  label.appendChild(document.createTextNode("Escolha uma opção: "))
  label.setAttribute("for", `question-select-${formId}`)
  label.id = `question-label-${formId}`

  const select = document.createElement("select")
  select.classList.add("question-select")
  select.id = `question-select-${formId}`

  const optionSelecionar = document.createElement("option")
  optionSelecionar.classList.add("question-option")
  optionSelecionar.setAttribute("value", "0")
  optionSelecionar.appendChild(document.createTextNode("Selecionar"))
  optionSelecionar.id = `question-option-0-${formId}`
  const optionNunca = document.createElement("option")
  optionNunca.classList.add("question-option")
  optionNunca.setAttribute("value", "1")
  optionNunca.appendChild(document.createTextNode("Nunca"))
  optionNunca.id = `question-option-1-${formId}`
  const optionRaramente = document.createElement("option")
  optionRaramente.classList.add("question-option")
  optionRaramente.setAttribute("value", "2")
  optionRaramente.appendChild(document.createTextNode("Raramente"))
  optionRaramente.id = `question-option-2-${formId}`
  const optionAlgumas = document.createElement("option")
  optionAlgumas.classList.add("question-option")
  optionAlgumas.setAttribute("value", "3")
  optionAlgumas.appendChild(document.createTextNode("Algumas vezes"))
  optionAlgumas.id = `question-option-3-${formId}`
  const optionMaioria = document.createElement("option")
  optionMaioria.classList.add("question-option")
  optionMaioria.setAttribute("value", "4")
  optionMaioria.appendChild(document.createTextNode("A maioria das vezes"))
  optionMaioria.id = `question-option-4-${formId}`
  const optionSempre = document.createElement("option")
  optionSempre.classList.add("question-option")
  optionSempre.setAttribute("value", "5")
  optionSempre.appendChild(document.createTextNode("Sempre"))
  optionSempre.id = `question-option-5-${formId}`

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