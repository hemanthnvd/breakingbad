export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 22,
      name: "Gale Boetticher",
      birthday: "Unknown",
      occupation: ["Chemist", "Meth manufacturer"],
      img: "https://web.archive.org/web/20220811172853/https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gale-boetticher-lg.jpg",
      status: "Deceased",
      nickname: "GB",
      appearance: [3],
      portrayed: "David Costabile",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
