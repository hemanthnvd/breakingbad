export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 13,
      name: "Marco & Leonel Salamanca",
      birthday: "Unknown",
      occupation: ["Cartel Hitman"],
      img: "https://web.archive.org/web/20220811172853/https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg",
      status: "Deceased",
      nickname: "The Cousins",
      appearance: [3],
      portrayed: "Luis & Daniel Moncada",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
