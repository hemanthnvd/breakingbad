export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 29,
      name: "Christian Ortgea",
      birthday: "Unknown",
      occupation: ["Low-level meth distributor"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1540314304/c8acek3pimb0hb4efrvf.jpg",
      status: "Deceased",
      nickname: "Combo",
      appearance: [1, 2, 3],
      portrayed: "Rodney Rush",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
