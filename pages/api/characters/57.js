export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 57,
      name: "Jack Welker",
      birthday: "Unknown",
      occupation: ["Criminal Gang Leader"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/c/ce/Jack5x13.png/revision/latest?cb=20130912225922",
      status: "Deceased",
      nickname: "Uncle Jack",
      appearance: [5],
      portrayed: "Michael Bowen",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
