export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 35,
      name: "Dr. Delcavoli",
      birthday: "Unknown",
      occupation: ["Physician"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1540314509/lj5qlbe6xvmmpxnspz6y.jpg",
      status: "Alive",
      nickname: "Dr. Delcavoli",
      appearance: [1, 2],
      portrayed: "David House",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
