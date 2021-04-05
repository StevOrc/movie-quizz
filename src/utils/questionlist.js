const questionsList = [
  {
    id: 1,
    title: "Le seigneur des anneaux",
    label: "Qui a joué le rôle de Gandalf dans la seigneur des anneaux ?",
    answers: [
      { 1: "De Niro" },
      { 2: "Orlando Bloom" },
      { 3: "Ian McKellen" },
      { 4: "Elijah Wood" },
    ],
    goodAnswer: "3",
    score: 2,
  },
  {
    id: 2,
    title: "Il était une fois le bronx",
    label: "Qui à réalisé le film 'Il était une fois le bronx' ?",
    answers: [
      { 1: "De Niro" },
      { 2: "Martin Scorsese" },
      { 3: "Brian De Palma" },
      { 4: "Sergio Leone" },
    ],
    goodAnswer: "1",
    score: 1,
  },
  {
    id: 10,
    title: "Le bon, la brute et le truand",
    label: "Qui à réalisé le film Le Bon, La Brute et le Truand?",
    answers: [
      { 1: "Martin Scorsese" },
      { 2: "Brian De Palma" },
      { 3: "Clint Eastwood" },
      { 4: "Sergio Leone" },
    ],
    goodAnswer: "4",
    score: 3,
  },
  {
    id: 15,
    title: "HEAT",
    label: "Al Pacino à joué dans Heat ?",
    answers: [{ 1: "Vrai" }, { 2: "Faux" }],
    goodAnswer: "d",
    actor: "1",
    score: 2,
  },
];

const getQuestionList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!questionsList.length) reject({ error: "No questions found" });
      resolve({ data: questionsList });
    }, 500);
  });
};

export { getQuestionList };
