export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 2,
      name: "Jesse Pinkman",
      birthday: "09-24-1984",
      occupation: ["Meth Dealer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      status: "Alive",
      nickname: "Cap n' Cook",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Aaron Paul",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
