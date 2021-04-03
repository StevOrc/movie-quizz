const questionsList = [
  {
    id: 1,
    title: "Le seigneur des anneaux",
    label: "Qui a joué le rôle de Gandalf dans la seigneur des anneaux ?",
    answers: [
      { 1: "De Niro", urlActor: "" },
      { 2: "Orlando Bloom", urlActor: "" },
      { 3: "Ian McKellen", urlActor: "" },
      {
        4: "Elijah Wood",
        urlActor: "",
      },
    ],
    goodResponse: "c",
    score: 2,
  },
  {
    id: 2,
    title: "Il était une fois le bronx",
    label: "Qui à réalisé le film 'Il était une fois le bronx' ?",
    answers: [
      { 1: "De Niro", urlActor: "" },
      { 2: "Martin Scorsese", urlActor: "" },
      { 3: "Brian De Palma", urlActor: "" },
      { 4: "Sergio Leone", urlActor: "" },
    ],
    goodResponse: "a",
    score: 1,
  },
  {
    id: 10,
    title: "Le bon, la brute et le truand",
    label: "Qui à réalisé le film Le Bon, La Brute et le Truand?",
    answers: [
      { 1: "Martin Scorsese", urlActor: "" },
      { 2: "Brian De Palma", urlActor: "" },
      { 3: "Clint Eastwood", urlActor: "" },
      { 4: "Sergio Leone", urlActor: "" },
    ],
    goodResponse: "d",
    score: 3,
  },
  // {
  //   id: 3,
  //   title: "Shawshank Redemption",
  //   label: "Comment s'appelle le hero du film ?",
  //   answers: [{ a: "Andy" }, { b: "Red" }, { c: "Tim" }, { d: "Heywood" }],
  //   goodResponse: "a",
  //   score: 2,
  // },
  // {
  //   id: 4,
  //   title: "Goodfellas",
  //   label: "Al pacino a joué dans le célèbre film Les Affranchis ?",
  //   answers: [{ a: "Vrai" }, { b: "Faux" }],
  //   goodResponse: "a",
  //   score: 1,
  // },
  // {
  //   id: 6,
  //   title: "Heat",
  //   label: "Parmis ces film dans lequel Brat Pitt n'a-t-il pas joué ?",
  //   answers: [
  //     { a: "Ocean Eeleven" },
  //     { b: "Heat" },
  //     { c: "Once upon time in America" },
  //     { d: "Moneyball" },
  //   ],
  //   goodResponse: "b",
  //   score: 2,
  // },
  // {
  //   id: 7,
  //   title: "Gladiator",
  //   label: "Quel est le surnom du heros Maximus dans Gladiator ?",
  //   answers: [
  //     { a: "Maximus le grand" },
  //     { b: "L'invincible" },
  //     { c: "L'espagnol" },
  //     { d: "Le géant" },
  //   ],
  //   goodResponse: "c",
  //   score: 2,
  // },
  // {
  //   id: 8,
  //   title: "Braveheart ",
  //   label: "Quel est le du heros dans Braveheart  ?",
  //   answers: [
  //     { a: "William Smith" },
  //     { b: "William Wilson" },
  //     { c: "William Mc Conor" },
  //     { d: "William Wallace" },
  //   ],
  //   goodResponse: "d",
  //   score: 3,
  // },
  // {
  //   id: 9,
  //   title: "The Green Mile",
  //   label: "Tom Hanks à jouer dans La Ligne Verte?",
  //   answers: [{ a: "Vrai" }, { b: "Faux" }],
  //   goodResponse: "a",
  //   score: 1,
  // },
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
