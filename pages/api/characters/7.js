export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 7,
      name: "Mike Ehrmantraut",
      birthday: "Unknown",
      occupation: ["Hitman", "Private Investigator", "Ex-Cop"],
      img: "https://web.archive.org/web/20220811172853/https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
      status: "Deceased",
      nickname: "Mike",
      appearance: [2, 3, 4, 5],
      portrayed: "Jonathan Banks",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4, 5],
    },
  ]);
}
