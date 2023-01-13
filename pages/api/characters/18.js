export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 18,
      name: "Brandon Mayhew",
      birthday: "Unknown",
      occupation: ["Low-level meth distributer"],
      img: "https://web.archive.org/web/20220811172853/https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg",
      status: "Alive",
      nickname: "Badger",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Matt L. Jones",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
