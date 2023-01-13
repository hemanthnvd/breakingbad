export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 41,
      name: "Donald Margolis",
      birthday: "Unknown",
      occupation: ["Air-Traffic Controller", "Landlord"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/1/12/Donald_Margolis.png/revision/latest?cb=20120802212034",
      status: "Unknown",
      nickname: "Jane's dad",
      appearance: [2, 3],
      portrayed: "John de Lancie",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
