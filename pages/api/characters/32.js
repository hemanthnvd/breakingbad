export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 32,
      name: "Jake Pinkman",
      birthday: "Unknown",
      occupation: ["Kid", "Jesse's little brother"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/a/a4/Jake.jpg/revision/latest?cb=20121214201656&path-prefix=de",
      status: "Alive",
      nickname: "Jake",
      appearance: [1],
      portrayed: "Ben Petry",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
