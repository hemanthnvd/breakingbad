export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 10,
      name: "Hector Salamanca",
      birthday: "Unknown",
      occupation: ["Former Senior Cartel Leader"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
      status: "Deceased",
      nickname: "Don Hector",
      appearance: [1, 2, 3, 4],
      portrayed: "Mark Margolis",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [2, 3, 4, 5],
    },
  ]);
}
