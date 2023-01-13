export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 17,
      name: "Skinny Pete",
      birthday: "Unknown",
      occupation: ["Low-level meth distributer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623",
      status: "Alive",
      nickname: "Skinny",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Charles Baker",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
