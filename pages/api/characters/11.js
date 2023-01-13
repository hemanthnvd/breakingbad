export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 11,
      name: "Domingo Molina",
      birthday: "Unknown",
      occupation: ["Meth Distributor"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
      status: "Deceased",
      nickname: "Krazy-8",
      appearance: [1],
      portrayed: "Maximino Arciniega",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
