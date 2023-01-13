export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 26,
      name: "Gretchen Schwartz",
      birthday: "Unknown",
      occupation: ["Co-owner Gray Matter"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/5/5e/Gretchen_Schwartz.png/revision/latest?cb=20131005103735&path-prefix=es",
      status: "Alive",
      nickname: "Gretchen",
      appearance: [1, 2, 5],
      portrayed: "Jessica Hecht",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
