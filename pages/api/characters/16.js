export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 16,
      name: "Jane Margolis",
      birthday: "Unknown",
      occupation: ["Tattoo Artist", "Landlord"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",
      status: "Deceased",
      nickname: "Apology Girl",
      appearance: [2],
      portrayed: "Krysten Ritter",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
