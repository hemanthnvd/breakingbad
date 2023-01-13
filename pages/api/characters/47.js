export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 47,
      name: "Cynthia",
      birthday: "Unknown",
      occupation: ["Los Pollos Hermanos Manager"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1539362375/z63youp272k5mbqbuqj9.jpg",
      status: "Alive",
      nickname: "Cynthia",
      appearance: [2, 3, 4],
      portrayed: "Ashley Kajiki",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
