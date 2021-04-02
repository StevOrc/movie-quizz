const questionsList = [
  {
    id: 1,
    title: "Lord of the ring",
    label: "Qui a joué le rôle de Gandalf dans la seigneur des anneaux ?",
    responses: [
      { a: "Robert De Niro" },
      { b: "Orlando Bloom" },
      { c: "Ian McKellen" },
      { d: "Elijah Wood" },
    ],
    goodResponse: "c",
    score: 2,
  },
  {
    id: 2,
    title: "Titanic",
    label: "En quelle années est sorti le film Titanic ?",
    responses: [{ a: "1999" }, { b: "1998" }, { c: "1997" }, { d: "2000" }],
    goodResponse: "b",
    score: 2,
  },
  {
    id: 3,
    title: "Shawshank Redemption",
    label: "Comment s'appelle le hero du film ?",
    responses: [{ a: "Andy" }, { b: "Red" }, { c: "Tim" }, { d: "Heywood" }],
    goodResponse: "a",
    score: 2,
  },
  {
    id: 4,
    title: "Goodfellas",
    label: "Al pacino a joué dans le célèbre film Les Affranchis ?",
    responses: [{ a: "Vrai" }, { b: "Faux" }],
    goodResponse: "a",
    score: 1,
  },
  {
    id: 5,
    title: "A Bronx Tale",
    label: "Qui à réaliser le film Il était une fois le bronx ?",
    responses: [
      { a: "De Niro" },
      { b: "Martin Scorcese" },
      { c: "Brian De Palma" },
      { c: "Sergio Leone" },
    ],
    goodResponse: "a",
    score: 1,
  },
  {
    id: 6,
    title: "Heat",
    label: "Parmis ces film dans lequel Brat Pitt n'a-t-il pas joué ?",
    responses: [
      { a: "Ocean Eeleven" },
      { b: "Heat" },
      { c: "Once upon time in America" },
      { d: "Moneyball" },
    ],
    goodResponse: "b",
    score: 2,
  },
  {
    id: 7,
    title: "Gladiator",
    label: "Quel est le surnom du heros Maximus dans Gladiator ?",
    responses: [
      { a: "Maximus le grand" },
      { b: "L'invincible" },
      { c: "L'espagnol" },
      { d: "Le géant" },
    ],
    goodResponse: "c",
    score: 2,
  },
  {
    id: 8,
    title: "Braveheart ",
    label: "Quel est le du heros dans Braveheart  ?",
    responses: [
      { a: "William Smith" },
      { b: "William Wilson" },
      { c: "William Mc Conor" },
      { d: "William Wallace" },
    ],
    goodResponse: "d",
    score: 3,
  },
  {
    id: 9,
    title: "The Green Mile",
    label: "Tom Hanks à jouer dans La Ligne Verte?",
    responses: [{ a: "Vrai" }, { b: "Faux" }],
    goodResponse: "a",
    score: 1,
  },
  {
    id: 10,
    title: "The Good, the Bad and the Ugly",
    label: "Qui à réalisé le film Le Bon, La Brute et le Truand?",
    responses: [
      { a: "Martin Scorcese" },
      { b: "Brian De Palma" },
      { c: "Clint Eastwood" },
      { d: "Sergio Leone" },
    ],
    goodResponse: "d",
    score: 3,
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
