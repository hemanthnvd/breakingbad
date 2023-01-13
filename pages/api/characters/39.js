export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 39,
      name: "Holly White",
      birthday: "Unknown",
      occupation: ["Infant"],
      img: "https://web.archive.org/web/20220811172853/https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605",
      status: "Alive",
      nickname: "Holly",
      appearance: [2, 3, 4, 5],
      portrayed: "Unknown",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
