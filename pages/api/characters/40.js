export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 40,
      name: "George Merkert",
      birthday: "Unknown",
      occupation: ["Former Head of Albuquerque DEA"],
      img: "https://web.archive.org/web/20220811172853/https://m.media-amazon.com/images/M/MV5BMTkwMTkxNjUzM15BMl5BanBnXkFtZTgwMTg5MTczMTE@._V1_UY317_CR175,0,214,317_AL_.jpg",
      status: "Alive",
      nickname: "ASAC Merkert",
      appearance: [2, 3, 4, 5],
      portrayed: "Michael Shamus Wiles",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
