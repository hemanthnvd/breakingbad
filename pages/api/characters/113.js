export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 113,
      name: "Howard Hamlin",
      birthday: "Unknown",
      occupation: ["Lawyer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/5/57/BCS_S4_Howard_Hamlin.jpg/revision/latest?cb=20180824195855",
      status: "Alive",
      nickname: "Howard",
      appearance: [],
      portrayed: "Patrick Fabian",
      category: "Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4, 5],
    },
  ]);
}
