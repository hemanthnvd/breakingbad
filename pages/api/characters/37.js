export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 37,
      name: "Bogdan Wolynetz",
      birthday: "Unknown",
      occupation: ["Former owner of A1A Car Wash"],
      img: "https://web.archive.org/web/20220811172853/https://i.pinimg.com/originals/d5/c0/34/d5c0345ae70fbdbaa33b7537d685da54.jpg",
      status: "Alive",
      nickname: "Bogdan",
      appearance: [1, 3, 4],
      portrayed: "Marius Stan",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
