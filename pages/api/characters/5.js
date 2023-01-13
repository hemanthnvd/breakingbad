export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 5,
      name: "Henry Schrader",
      birthday: "Unknown",
      occupation: ["DEA Agent"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
      status: "Deceased",
      nickname: "Hank",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Dean Norris",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
