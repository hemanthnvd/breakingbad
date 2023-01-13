export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 49,
      name: "Tim Roberts",
      birthday: "Unknown",
      occupation: ["Detective for the APD"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/8/8d/2x02_-_Tim_Roberts.jpg/revision/latest?cb=20110927053954",
      status: "Alive",
      nickname: "Detective Roberts",
      appearance: [2, 4],
      portrayed: "Nigel Gibbs",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
