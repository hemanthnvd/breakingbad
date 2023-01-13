export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 8,
      name: "Saul Goodman",
      birthday: "Unknown",
      occupation: ["Lawyer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
      status: "Alive",
      nickname: "Jimmy McGill",
      appearance: [2, 3, 4, 5],
      portrayed: "Bob Odenkirk",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4, 5],
    },
  ]);
}
