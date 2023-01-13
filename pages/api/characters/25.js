export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 25,
      name: "Carmen Molina",
      birthday: "Unknown",
      occupation: ["High School Principal"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/d/de/Carmen.JPG/revision/latest?cb=20100410125233",
      status: "Alive",
      nickname: "Carmen",
      appearance: [1, 2, 3, 5],
      portrayed: "Carmen Serano",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
