export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 6,
      name: "Marie Schrader",
      birthday: "Unknown",
      occupation: ["Housewife", "Clepto"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
      status: "Alive",
      nickname: "Marie",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Betsy Brandt",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
