export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 27,
      name: "Elliot Schwartz",
      birthday: "Unknown",
      occupation: ["Co-Founder Gray Matter"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/8/8a/Elliott_Schwartz.png/revision/latest?cb=20131005103743&path-prefix=es",
      status: "Alive",
      nickname: "Elliot",
      appearance: [1, 5],
      portrayed: "Adam Godley",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
