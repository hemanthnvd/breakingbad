export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 114,
      name: "Charles McGill",
      birthday: "Unknown",
      occupation: ["Lawyer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/3/3e/BCS_S3_ChuckMcGill.jpg/revision/latest?cb=20170327185308",
      status: "Deceased",
      nickname: "Chuck",
      appearance: [],
      portrayed: "Michael McKean",
      category: "Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4],
    },
  ]);
}
