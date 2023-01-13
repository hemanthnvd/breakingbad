export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 20,
      name: "Steven Gomez",
      birthday: "Unknown",
      occupation: ["DEA Agent"],
      img: "https://web.archive.org/web/20220811172853/https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg",
      status: "Deceased",
      nickname: "Gomie",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Steven Michael Quezada",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
