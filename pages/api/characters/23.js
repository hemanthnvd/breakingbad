export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 23,
      name: "Andrea Cantillo",
      birthday: "Unknown",
      occupation: ["Unknown"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/5/51/Andrea_-_To%27hajilee.png/revision/latest?cb=20131025094457",
      status: "Deceased",
      nickname: "Andrea",
      appearance: [3, 4, 5],
      portrayed: "Emily Rios",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
