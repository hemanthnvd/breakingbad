export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 43,
      name: "SAC Ramey",
      birthday: "Unknown",
      occupation: ["DEA agent"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1539360786/o7thsjdorobfbetqaefj.jpg",
      status: "Alive",
      nickname: "SAC Ramey",
      appearance: [2, 4, 5],
      portrayed: "Todd Terry",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
