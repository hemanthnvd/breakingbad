export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 12,
      name: "Tuco Salamanca",
      birthday: "Unknown",
      occupation: ["Meth Distributor"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445",
      status: "Deceased",
      nickname: "Tuco",
      appearance: [1, 2],
      portrayed: "Raymond Cruz",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [1, 2],
    },
  ]);
}
