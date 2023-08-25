const profileForm = {
  questions:
    [
      {
        id: 1,
        title: "Diante de uma ordem passada por seu chefe, patrão ou superior, qual a sua reação mais provável?",
        options: {
          a: {
            text: "Aceita a ordem sem questioná-la",
            weight: 1
          },
          b: {
            text: "Aceita e só acena depois de ser convencido de que a ordem é boa ou necessária",
            weight: 3,
          },
          c: {
            text: "Não aceita a ordem facilmente. Aliás, sente-se inclinado a rebelar-se contra a autoridade de quem a está passando.",
            weight: 5,
          }
        }
      },
      {
        id: 2,
        title: "Se, no trabalho ou em uma reunião social, surge uma atividade para o seu grupo fazer, qual a sua atitude mais comum?",
        options: {
          a: {
            text: "Espera que o grupo se organize para ver a tarefa que lhe caberá realizar.",
            weight: 1
          },
          b: {
            text: "Tem tendência de tomar a frente do grupo, propor o que deve ser feito, dividir as tarefas pelos companheiros e dar início à ação.",
            weight: 5
          },
          c: {
            text: "Participa das discussões mas não toma a frente do grupo, ficando sempre junto com todos, nem à frente, nem atrás.",
            weight: 1
          }
        }
      },
      {
        id: 3,
        title: "O fato de ter que chegar na hora certa ao trabalho, de ter um momento determinado para almoçar e retomar ao emprego e de, ao final do expediente, ter uma hora marcada para deixar o serviço e voltar para casa:",
        options: {
          a: {
            text: "Deixa você com muita vontade de não precisar seguir horários, de ter tempo para fazer as coisas que você julga realmente importantes.",
            weight: 5
          },
          b: {
            text: "Mostra a você que seguir horários é importante, que a disciplina não faz mal a ninguém e que a liberdade pessoal vem depois das regras sociais.",
            weight: 1
          },
          c: {
            text: "Torna claro para você que os horários marcados fazem parte do emprego e têm que ser obedecidos por quem precisa trabalhar.",
            weight: 3
          }
        }
      },
      {
        id: 4,
        title: "Quando, em uma reunião de família, surge uma tarefa muito importante e as pessoas lembram de você para assumir a responsabilidade de resolvê-la, você exclama:",
        options: {
          a: {
            text: "Puxa! Que lástima, essa sobrou para mim.",
            weight: 1
          },
          b: {
            text: "Já sei como resolvê-la gente! Pode deixar comigo!",
            weight: 5
          },
          c: {
            text: "Bem, vou fazer força para tudo dar certo!",
            weight: 3
          }
        }
      },
      {
        id: 5,
        title: "Quando alguém pede para você ajudar a encontrar uma solução para um problema importante, qual o seu comportamento mais provável?",
        options: {
          a: {
            text: "Aceita o desafio, pensa um pouco e logo imagina mais de uma forma para solucionar o problema.",
            weight: 5
          },
          b: {
            text: "Pensa muito sobre o assunto, mas não consegue imaginar uma solução que valha a pena.",
            weight: 3
          },
          c: {
            text: "Prefere não ajudar, pois tem horror a problemas.",
            weight: 1
          }
        }
      },
      {
        id: 6,
        title: "Quando uma máquina de sua casa está com defeito, qual a atitude que você, normalmente, toma?",
        options: {
          a: {
            text: "Procura descobrir o defeito e encontrar uma forma de consertá-la, às vezes com arames, parafusos, borrachas, ou outras coisas que você costuma guardar para essas ocasiões.",
            weight: 5
          },
          b: {
            text: "Encosta a máquina e deixa-a desligada até que um técnico venha consertá-la.",
            weight: 1
          },
          c: {
            text: "Verifica se é uma coisa simples de solucionar e, se não for, chama um técnico.",
            weight: 3
          }
        }
      },
      {
        id: 7,
        title: "Se você fosse despedido de seu emprego e tivesse dificuldades para arranjar, imediatamente, outro trabalho na mesma área, o que você faria com maior probabilidade?",
        options: {
          a: {
            text: "Aceitaria isso como uma fatalidade e aguardaria um momento mais propício para arranjar emprego.",
            weight: 1
          },
          b: {
            text: "Procuraria alternativas para trabalhar e ganhar dinheiro, mesmo que não fossem, exatamente, aquilo que você costuma fazer.",
            weight: 5
          },
          c: {
            text: "Continuaria procurando emprego na área em que está acostumado a trabalhar, até arranjar alguma coisa.",
            weight: 3
          }
        }
      },
      {
        id: 8,
        title: "Quando você pensa no que já fez em sua vida profissional, quais as lembranças que vêm mais rapidamente à sua mente?",
        options: {
          a: {
            text: "Que sempre teve boas ideias, que de alguma maneiraajudaram a resolver",
            weight: 5
          },
          b: {
            text: "Que algumas vezes, não muitas, teve boas ideias para melhorar o trabalho.",
            weight: 3
          },
          c: {
            text: "Que nunca pensou na melhoria da organização, mas sim em cumprir suas obrigações, trabalhando com afinco.",
            weight: 1
          }
        }
      },
      {
        id: 9,
        title: "Se alguém lhe fizer uma proposta, como, por exemplo, utilizar um método de trabalho inovador, o que você faz com maior probabilidade?",
        options: {
          a: {
            text: "Pensa na proposta, avalia os prós e os contras e, depois de muita reflexão e análise, imagina uma forma de aplicá-los aos poucos em seu trabalho.",
            weight: 3
          },
          b: {
            text: "Analisa com cuidado e, se a ideia lhe parecer boa, dedica-se à sua implantação com vontade e confiança de que ela vai dar certo.",
            weight: 5
          },
          c: {
            text: "Escuta e desconfia de que não pode dar certo e, assim, acha melhor continuar fazendo do jeito que sempre fez.",
            weight: 1
          }
        }
      },
      {
        id: 10,
        title: "Você consegue lembrar-se das vezes em que teve de enfrentar uma grande dificuldade. Nessas ocasiões, qual a atitude que mais comumente você tomou?",
        options: {
          a: {
            text: "Chegou a ficar desesperado, mas conseguiu forças e lutou, lutou muito.",
            weight: 5
          },
          b: {
            text: "Resistiu até onde foi possível.",
            weight: 3
          },
          c: {
            text: "Pensou e chegou à conclusão de que nem sempre vale a pena lutar contra a correnteza.",
            weight: 1
          }
        }
      },
      {
        id: 11,
        title: "Entre seus amigos e familiares, acredita que a opinião deles à seu respeito é a de que:",
        options: {
          a: {
            text: "\"Você só põe o boné onde possa ganhar!\" - pois quando entra em uma luta é porque tem certeza de que pode vencer.",
            weight: 3
          },
          b: {
            text: "\"Quando começa um projeto vai até o fim, custe o que custar\" - pois você é capaz de sacrificar tudo por um objetivo.",
            weight: 5
          },
          c: {
            text: "\"Para você nem sempre a linha reta é o caminho\" - pois você prefere contornar as dificuldades que se apresentam pela frente.",
            weight: 1
          }
        }
      },
      {
        id: 12,
        title: "Quando comete um erro, qual a atitude mais comum que você toma?",
        options: {
          a: {
            text: "Avalia cuidadosamente o que fez, por isso não costuma repetir os mesmos erros.",
            weight: 5
          },
          b: {
            text: "Pára...pensa...sacode a poeira e segue em frente, pois acha que \"errar é humano\".",
            weight: 3
          },
          c: {
            text: "Lamenta profundamente a sua falha, pois detesta cometer erros.",
            weight: 1
          }
        }
      },
      {
        id: 13,
        title: "Quando lembra das vezes que surgiu uma oportunidade de fazer um bom negócio, qual foi sua reação nessas ocasiões?",
        options: {
          a: {
            text: "Parou e pensou, pensou cuidadosamente nessas oportunidades e, algumas vezes, passou tanto tempo analisando a situação, que outros acabaram fazendo o negócio antes de você.",
            weight: 3
          },
          b: {
            text: "Pensou um pouco, analisou cuidadosamente o negócio, e se achou viável foi em frente, com fé em Deus e confiança em si mesmo.",
            weight: 5
          },
          c: {
            text: "Pensou um pouco e sempre preferiu esperar por um negócio mais seguro.",
            weight: 1
          }
        }
      },
      {
        id: 14,
        title: "Quando analisa a vida das pessoas que conhece, o que você mais valoriza?",
        options: {
          a: {
            text: "Os amigos que vivem se arriscando, mudando de casa, de emprego, de cidade e até de país.",
            weight: 3
          },
          b: {
            text: "Aqueles que conseguiram progredir, muitas vezes, enfrentando situações difíceis e arriscadas.",
            weight: 5
          },
          c: {
            text: "Aquelas pessoas que souberem escolher o caminho mais seguro.",
            weight: 1
          }
        }
      },
      {
        id: 15,
        title: "Qual o seu conceito das pessoas que iniciaram negócios e fracassaram?",
        options: {
          a: {
            text: "Elas tiveram uma oportunidade de aprender com os próprios erros e, certamente, saíram mais fortes dessas experiências.",
            weight: 5
          },
          b: {
            text: "Acha que as pessoas não devem cometer erros e fracassos. Por isso, somente devem entrar em negócios seguros.",
            weight: 1
          },
          c: {
            text: "As pessoas devem pensar muito antes de agir, mesmo que a oportunidade de iniciar um negócio passe. Afinal, outras oportunidades surgirão.",
            weight: 3
          }
        }
      },
      {
        id: 16,
        title: "Se você tivesse que iniciar um negócio, logicamente, procuraria analisar com rigor a situação e, diante dos resultados dessa análise, que atitude tomaria?",
        options: {
          a: {
            text: "Só abriria a empresa se o resultado demonstrasse que o negócio tinha 100% de chance de dar certo.",
            weight: 1
          },
          b: {
            text: "Apostaria na ideia, mesmo que os resultados apontassem uma certa margem de risco.",
            weight: 5
          },
          c: {
            text: "Só entraria no negócio se tivesse certeza de que haveria grande chance de dar certo.",
            weight: 3
          }
        }
      },
      {
        id: 17,
        title: "Você costuma enfrentar uma situação difícil:",
        options: {
          a: {
            text: "Com coragem, sangue-frio e força de vontade",
            weight: 5
          },
          b: {
            text: "Com um certo receio, mas com fé em Deus.",
            weight: 1
          },
          c: {
            text: "Com muito cuidado e, se necessário, voltando atrás para se preparar melhor.",
            weight: 3
          }
        }
      },
      {
        id: 18,
        title: "Que atitude você acha que combina mais com sua personalidade, quando está diante de uma oportunidade de negócio?",
        options: {
          a: {
            text: "De muita calma, cuidado e sensatez.",
            weight: 3
          },
          b: {
            text: "De muita fé em Deus.",
            weight: 1
          },
          c: {
            text: "De confiança em sua capacidade de avaliação e de talento para superar dificuldades com \"jogo de cintura\" e perseverança.",
            weight: 5
          }
        }
      },
      {
        id: 19,
        title: "Quando lê ou assiste pela televisão alguma reportagem sobre um empresário de sucesso, qual a sua atitude mais provável?",
        options: {
          a: {
            text: "Exclama: \"Puxa, que sorte que ele teve!\".",
            weight: 3
          },
          b: {
            text: "Pensa nas dificuldades que ele enfrentou e fica satisfeito com a sua vida modesta, porém tranqüila.",
            weight: 1
          },
          c: {
            text: "Enche-se de vontade e acredita que, com o mesmo esforço, vontade e confiança, seria capaz de, também, alcançar o sucesso.",
            weight: 5
          }
        }
      },
      {
        id: 20,
        title: "Quando a vida lhe apresenta obstáculos de difícil transposição, você:",
        options: {
          a: {
            text: "Percebe que seria capaz de superar obstáculos bem mais difíceis.",
            weight: 5
          },
          b: {
            text: "Sente-se acuado e pensa que a vida é um período de provações e sacrifícios.",
            weight: 1
          },
          c: {
            text: "De início, sente-se atemorizado, depois acha que, com a ajuda de amigos ou familiares, pode superar os obstáculos.",
            weight: 3
          }
        }
      },
    ],
  calculateResult: (total) => {
    if (typeof total != Number) return `Invalid type, expected a number, got ${typeof total}`

    if (total < 0) return `Invalid result, total should be more than 0, got ${total}`

    if (total < 30) return "Provavelmente, você leva uma vida profissional rotineira, sem grandes perspectivas, e prefere as coisas como estão."

    if (total >= 30 && total <= 49) return "Se você se situou nessa faixa de pontuação, é aconselhável que permaneça em seu emprego e não arrisque suas economias em um negócio próprio até desenvolver sua criatividade, ganhar mais segurança e confiança, aprendendo a correr riscos."

    if (total >= 50 && total <= 69) return "Os resultados mostram que você tem algum potencial para ser empreendedor. Mas, ainda é preciso desenvolver os atributos pessoais dos empresários de sucesso. Para isso, você deve preparar-se lendo mais sobre negócios, fazendo treinamentos para desenvolver sua criatividade, autodisciplina, confiança e capacidade de assumir riscos, e conversar com empresários bem-sucedidos para descobrir como eles chegaram lá."

    if (total >= 70 && total <= 89) return "Se os seus resultados situaram-no nesta faixa de pontuação, tudo indica que você pode vir a ser um empresário de sucesso. Todavia, é necessário que você procure adquirir mais autoconfiança, independência, criatividade e maior capacidade para enfrentar riscos. Use os resultados deste teste para identificar os pontos fracos e os pontos fortes de sua personalidade, visando superar os aspectos negativos e reforçar os positivos."

    if (total > 90) return "Seus resultados indicam que você é uma pessoa independente, criativa, disciplinada, confiante; com capacidade de assumir riscos e talento para identificar boas oportunidades de negócios. Portanto, você tem as características adequadas a um empresário de sucesso."

    return "Unexpected result"
  }
}

const caesForm = {
  questions: [
    "Esforço-me para realizar as coisas que devem ser feitas.",
    "Quando me deparo com um problema difícil, levo muito tempo para encontrar solução.",
    "Termino meu trabalho a tempo.",
    "Aborreço-me quando as coisas não são feitas devidamente.",
    "Prefiro situações em que posso controlar ao máximo o resultado final.",
    "Gosto de pensar no futuro.",
    "Quando começo uma tarefa ou projeto novo, coleto todas as informações possíveis antes de dar prosseguimento a ele.",
    "Planejo um projeto grande dividindo-o em tarefas mais simples.",
    "Consigo que outros apoiem minhas recomendações.",
    "Tenho confiança de que posso ser bem-sucedido em qualquer atividade que me proponha a executar.",
    "Não importa com quem fale, sempre escuto atentamente.",
    "Faço as coisas que devem ser feitas sem que os outros tenham que me pedir.",
    "Insisto várias vezes para conseguir que as outras pessoas façam o que desejo.",
    "Sou fiel as promessas que faço.",
    "Meu rendimento no trabalho é melhor do que o das outras pessoas com quem trabalho.",
    "Envolvo-me com algo novo só depois de ter feito todo o possível para assegurar seu êxito.",
    "Acho uma perda de tempo preocupar-me com o que farei da minha vida.",
    "Procuro conselhos das pessoas que são especialistas.",
    "Considero cuidadosamente as vantagens e desvantagens de diferentes alternativas antes de realizar uma tarefa.",
    "Não perco muito tempo pensando em como posso influenciar as outras pessoas.",
    "Mudo a maneira de pensar se outros discordam energicamente dos meus pontos de vista.",
    "Aborreço-me quando não consigo o que quero.",
    "Gosto de desafios e novas oportunidades.",
    "Quando algo se interpõe ao que estou tentando fazer, persisto em minha tarefa.",
    "Se necessário, não me importo de fazer o trabalho dos outros para cumprir um prazo de entrega.",
    "Aborreço-me quando perco tempo.",
    "Considero minhas possibilidades de êxito ou fracasso antes de começar a atuar.",
    "Quanto mais específicas forem minhas expectativas em relação ao que quero obter na vida, maiores são minhas possibilidades de êxito.",
    "Tomo decisões sem perder tempo.",
    "Procuro levar em conta todos os problemas que podem se apresentar e antecipo o que faria caso ocorram.",
    "Conto com pessoas influentes para alcançar minhas metas.",
    "Quando estou executando algo difícil e desafiador, tenho confiança em meu sucesso.",
    "Tive fracassos no passado.",
    "Prefiro executar tarefas que domino perfeitamente e em que me sinto seguro.",
    "Quando me deparo com sérias dificuldades, rapidamente passo para outras dificuldades.",
    "Quando estou fazendo um trabalho para outra pessoa, me esforço, de forma especial, para que ela fique satisfeita com o trabalho.",
    "Nunca fico completamente satisfeito com a forma com que são feitas as coisas; sempre considero que há uma maneira melhor de fazê-las.",
    "Executo tarefas arriscadas.",
    "Conto com um plano claro de vida.",
    "Quando executo um projeto para alguém, faço muitas perguntas para assegurar-me de que entendi o que ela/ele quer.",
    "Enfrento os problemas à medida que surgem, em vez de perder tempo antecipando-os.",
    "Para alcançar minhas metas, procuro soluções que beneficiem todas as pessoas envolvidas em um problema.",
    "O trabalho que realizo é excelente.",
    "Em algumas ocasiões obtive vantagens de outras pessoas.",
    "Aventuro-me a fazer coisas novas e diferentes do que fiz no passado.",
    "Tenho diferentes maneiras de superar obstáculos que se apresentam para a obtenção de minhas metas.",
    "Minha família e minha vida pessoal são mais importantes para mim do que as datas de entrega de trabalho determinadas por mim mesmo.",
    "Encontro a maneira mais rápida de terminar os trabalhos, tanto em casa quanto no trabalho.",
    "Peço coisas que as outras pessoas consideram arriscadas.",
    "Preocupo-me tanto em alcançar minhas metas semanais quanto minhas metas anuais.",
    "Conto com várias fontes de informações ao procurar ajuda para a execução de tarefas e projetos.",
    "Se determinado método para enfrentar um problema não der certo, recorro a outro.",
    "Posso conseguir que pessoas com firmes convicções e opiniões mudem seu modo de pensar.",
    "Mantenho-me firme em minhas decisões, mesmo quando as outras pessoas se opõem energicamente.",
    "Quando desconheço algo, não hesito em admiti-lo.",
  ],
  calculateResult: (answers) => {
    const correction = answers[10] - answers[21] - answers[32] - answers[43] + answers[54] + 18
    let correctionFactor = 0
    if (correction >= 20 && correction <= 21) correctionFactor = 3
    if (correction >= 22 && correction <= 23) correctionFactor = 5
    if (correction >= 24) correctionFactor = 7

    return {
      initiative: answers[0] + answers[11] + answers[22] - answers[33] + answers[44] + 6 - correctionFactor,
      persistence: answers[1] + answers[12] + answers[23] - answers[34] + answers[45] + 6 - correctionFactor,
      commitment: answers[2] + answers[13] + answers[24] + answers[35] - answers[46] + 6 - correctionFactor,
      qualityEfficiency: answers[3] + answers[14] + answers[25] + answers[36] + answers[47] - correctionFactor,
      calculatedRisks: answers[4] + answers[15] + answers[26] + answers[37] + answers[48] + 6 - correctionFactor,
      goals: answers[5] - answers[16] + answers[27] + answers[38] + answers[49] + 6 - correctionFactor,
      informationSearch: answers[6] + answers[17] - answers[28] + answers[39] + answers[50] + 6 - correctionFactor,
      planning: answers[7] + answers[18] + answers[29] - answers[40] + answers[51] + 6 - correctionFactor,
      persuasion: answers[8] - answers[19] + answers[30] + answers[41] + answers[52] + 6 - correctionFactor,
      independence: answers[9] - answers[20] + answers[31] + answers[42] + answers[53] + 6 - correctionFactor,
    }
  }
}
