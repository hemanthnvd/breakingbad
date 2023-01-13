export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 9,
      name: "Gustavo Fring",
      birthday: "Unknown",
      occupation: ["Los-Pollos co-Founder", "Philanthropist", "Cartel Leader"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
      status: "Deceased",
      nickname: "Gus",
      appearance: [2, 3, 4],
      portrayed: "Giancarlo Esposito",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [3, 4, 5],
    },
  ]);
}
