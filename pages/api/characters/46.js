export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 46,
      name: "Francesca Liddy",
      birthday: "Unknown",
      occupation: ["Department of Motor Vehicles", "Secretary for Saul Goodman Associates"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1539362182/o9mstjonfn6dsdi3uij6.jpg",
      status: "Alive",
      nickname: "Honey Tits",
      appearance: [2, 3, 4, 5],
      portrayed: "Tina Parker",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [3, 4],
    },
  ]);
}
