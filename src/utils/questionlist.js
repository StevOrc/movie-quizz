const questionsList = [
  {
    id: 1,
    isAnswered: false,
    title: "HEAT",
    label: "Al Pacino à joué dans Heat ?",
    answers: [{ 1: "1" }, { 2: "2" }],
    goodAnswer: "1",
    actorName: "Al Pacino",
  },
  {
    id: 18,
    isAnswered: false,
    title: "Titanic",
    label: "Russel Crow à joué dans Titanic ?",
    answers: [{ 1: "1" }, { 2: "2" }],
    goodAnswer: "1",
    actorName: "Russel Crow",
  },
  {
    id: 19,
    isAnswered: false,
    title: "The green mile",
    label: "Julia Roberts à joué dans La ligne vert ?",
    answers: [{ 1: "1" }, { 2: "2" }],
    goodAnswer: "1",
    actorName: "Julia Roberts",
  },
  {
    id: 4,
    isAnswered: false,
    title: "the shawshank redemption",
    label: "Denzel Washington a-t-il jouer dans 'Les Evadés' ?",
    answers: [{ 1: "Vrai" }, { 2: "Faux" }],
    goodAnswer: "2",
    actorName: "Denzel Washington",
  },
  {
    id: 2,
    isAnswered: false,
    title: "Le seigneur des anneaux",
    label: "Qui a joué le rôle de Gandalf dans la seigneur des anneaux ?",
    answers: [
      { 1: "De Niro" },
      { 2: "Orlando Bloom" },
      { 3: "Ian McKellen" },
      { 4: "Elijah Wood" },
    ],
    goodAnswer: "3",
  },
  {
    id: 3,
    isAnswered: false,
    title: "Il était une fois le bronx",
    label: "Qui à réalisé le film 'Il était une fois le bronx' ?",
    answers: [
      { 1: "De Niro" },
      { 2: "Martin Scorsese" },
      { 3: "Brian De Palma" },
      { 4: "Sergio Leone" },
    ],
    goodAnswer: "1",
  },
  {
    id: 5,
    isAnswered: false,
    title: "Le bon, la brute et le truand",
    label: "Qui à réalisé le film Le Bon, La Brute et le Truand?",
    answers: [
      { 1: "Martin Scorsese" },
      { 2: "Brian De Palma" },
      { 3: "Clint Eastwood" },
      { 4: "Sergio Leone" },
    ],
    goodAnswer: "4",
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
