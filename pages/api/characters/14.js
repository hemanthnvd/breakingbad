export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 14,
      name: "Lydia Rodarte-Quayle",
      birthday: "Unknown",
      occupation: ["Executive at Madrigal"],
      img: "https://web.archive.org/web/20220811172853/https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg",
      status: "Deceased",
      nickname: "Lydia",
      appearance: [5],
      portrayed: "Laura Fraser",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
