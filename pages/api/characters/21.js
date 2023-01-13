export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 21,
      name: "Theodore Beneke",
      birthday: "Unknown",
      occupation: ["Former President Beneke Fabricators"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057",
      status: "Alive",
      nickname: "Ted",
      appearance: [2, 3, 4, 5],
      portrayed: "Christopher Cousins",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
