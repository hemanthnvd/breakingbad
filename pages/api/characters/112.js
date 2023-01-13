export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 112,
      name: "Kimberly Wexler",
      birthday: "Unknown",
      occupation: ["Lawyer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/f/f7/BCS_S4_Kim_Wexler.jpg/revision/latest?cb=20180824195845",
      status: "Alive",
      nickname: "Kim",
      appearance: [],
      portrayed: "Rhea Seehorn",
      category: "Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4, 5],
    },
  ]);
}
