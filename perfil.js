//buildQuestions(profileForm.questions)

function calculateResult() {
  let total = 0
  for (let i = 0; i < profileForm.questions.length; i++) {
    const question = profileForm.questions[i]
    const element = document.getElementsByName(`question-perfil-options-${question.id}`)
    for (let j = 0; j < element.length; j++) {
      const el = element[j]
      let oneChecked = false
      if (el.checked) {
        const value = question.options[el.value].weight
        total += value
        oneChecked = true
      }
      if (!oneChecked) {
        alert(`A pergunta ${i + 1} não foi respondida`)
        return
      }
    }
  }
  buildResult(total, profileForm.calculateResult(total))
}

function buildResult(total, id) {
  const resultContainer = document.getElementById("result-number")
  resultContainer.appendChild(document.createTextNode(total))

  const resultLi = document.getElementById(id)
  resultLi.classList.add("result-selected")
}

function buildQuestions(questions) {
  const questionsContainer = document.getElementById("questions")
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i]
    questionsContainer.appendChild(buildQuestion(question.id, question.id + ". " + question.title, question.options))
  }
}

function buildQuestion(formId, titleText, options) {
  const container = document.createElement("fieldset")
  container.classList.add("question-perfil-container")

  const legend = document.createElement("legend")
  legend.classList.add("question-perfil-legend")
  legend.appendChild(document.createTextNode(titleText))

  const aContainer = document.createElement("div")
  aContainer.id = `question-perfil-a-container-${formId}`
  const aInput = document.createElement("input")
  aInput.id = `question-perfil-a-input-${formId}`
  aInput.setAttribute("value", "a")
  aInput.setAttribute("type", "radio")
  aInput.setAttribute("name", `question-perfil-options-${formId}`)
  const aLabel = document.createElement("label")
  aLabel.id = `question-perfil-a-label-${formId}`
  aLabel.setAttribute("for", `question-perfil-a-input-${formId}`)
  aLabel.appendChild(document.createTextNode("a. " + options.a.text))
  aContainer.appendChild(aInput)
  aContainer.appendChild(aLabel)

  const bContainer = document.createElement("div")
  bContainer.id = `question-perfil-b-container-${formId}`
  const bInput = document.createElement("input")
  bInput.id = `question-perfil-b-input-${formId}`
  bInput.setAttribute("value", "b")
  bInput.setAttribute("type", "radio")
  bInput.setAttribute("name", `question-perfil-options-${formId}`)
  const bLabel = document.createElement("label")
  bLabel.id = `question-perfil-b-label-${formId}`
  bLabel.setAttribute("for", `question-perfil-b-input-${formId}`)
  bLabel.appendChild(document.createTextNode("b. " + options.b.text))
  bContainer.appendChild(bInput)
  bContainer.appendChild(bLabel)

  const cContainer = document.createElement("div")
  cContainer.id = `question-perfil-c-container-${formId}`
  const cInput = document.createElement("input")
  cInput.id = `question-perfil-c-input-${formId}`
  cInput.setAttribute("value", "c")
  cInput.setAttribute("type", "radio")
  cInput.setAttribute("name", `question-perfil-options-${formId}`)
  const cLabel = document.createElement("label")
  cLabel.id = `question-perfil-c-label-${formId}`
  cLabel.setAttribute("for", `question-perfil-c-input-${formId}`)
  cLabel.appendChild(document.createTextNode("c. " + options.c.text))
  cContainer.appendChild(cInput)
  cContainer.appendChild(cLabel)

  container.appendChild(legend)
  container.appendChild(aContainer)
  container.appendChild(bContainer)
  container.appendChild(cContainer)

  return container
}