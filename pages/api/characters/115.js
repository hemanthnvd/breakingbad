export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 115,
      name: "Ignacio Varga",
      birthday: "Unknown",
      occupation: ["Crimal Gang Lieutenant"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/b/b1/BCS_S4_Nacho_Varga.jpg/revision/latest?cb=20180824195910",
      status: "Alive",
      nickname: "Nacho",
      appearance: [],
      portrayed: "Michael Mano",
      category: "Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4, 5],
    },
  ]);
}
