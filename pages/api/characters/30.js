export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 30,
      name: "Mrs. Pinkman",
      birthday: "Unknown",
      occupation: ["unknown"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754",
      status: "Alive",
      nickname: "Jesse's mom",
      appearance: [1, 2, 3],
      portrayed: "Tess Harper",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
