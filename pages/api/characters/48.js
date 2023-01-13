export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 48,
      name: "Tortuga",
      birthday: "Unknown",
      occupation: ["Juarez Cartel member", "DEA informant"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/5/58/BBWA_Tortuga.jpg/revision/latest?cb=20131101172007",
      status: "Deceased",
      nickname: "Tortuga",
      appearance: [2, 3],
      portrayed: "Danny Trejo",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
