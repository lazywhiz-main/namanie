/**
 * 執筆者一覧（将来 CMS に移行可能）
 */
export interface Writer {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** イニシャル or 漢字1文字でアバター表示 */
  initial: string;
}

export const writers: Writer[] = [
  {
    id: "fukunaga-momo",
    name: "福永 モモ",
    role: "Momo FUKUNAGA",
    initial: "福",
    bio: "新しい情報や流行で気になったものは、必ず自分で体験してみることを大事にしています。趣味はお芝居を観ることで、週末はたいてい劇場に。「演劇は時代を映す鏡」な作品が大好きです。",
  },
  {
    id: "suzuki-takafumi",
    name: "鈴木 隆史",
    role: "Takafumi SUZUKI",
    initial: "鈴",
    bio: "仕事する間を惜しんで本読んでます。いや見栄はりました、読書よりゲームしてる時間のほうが長いですごめんなさい。本は読む速度＜買う速度で、積読千冊を目指してます。メーカー社員。",
  },
  {
    id: "osaka-takashi",
    name: "大坂 岳史",
    role: "Takashi OSAKA",
    initial: "大",
    bio: "JTCで3年周期くらいで商品開発と顧客の間をふらふらし続けています。最近思った以上に製造業バイアスを内面化している自分を見つけて愕然としました。好きはIPAとワインと見たことのない景色をみること、嫌いは二日酔いと痛風",
  },
  {
    id: "hazama-shoko",
    name: "硲 祥子",
    role: "Shoko HAZAMA",
    initial: "硲",
    bio: "広告会社でコンサルタントをしています。小さな事象を深掘りし、行動を決定づけるインサイトや、そこから生まれる新たな価値を発見するのが好きです。",
  },
  {
    id: "tsutsumi-kenta",
    name: "堤 建太 aka けんてぃ",
    role: "Kenta TSUTSUMI",
    initial: "堤",
    bio: "大卒後レールを降り2年→人事→セールス→今はBtoBプロダクトのマーケティング（顧客体験）。毎日「働く意味」を考え続けています。結論は出ていません。大分県出身。動物好き。",
  },
  {
    id: "chinzei-isao",
    name: "鎮西 勇夫",
    role: "Isao CHINZEI",
    initial: "鎮",
    bio: "自動車会社で社会課題解決をスコープとし、自動車以外でのアプローチをメインに、技術開発、事業開発を行っています。わけの分からないものが好きです。絵を描いてます。お酒も好きです。漫画も好きです。",
  },
];
