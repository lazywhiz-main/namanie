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
    id: "yamada",
    name: "山田 太郎",
    role: "Founder / Editor",
    initial: "山",
    bio: "KCA 3期生。広告代理店を辞め、二度の起業に失敗。言葉の力を信じてこのメディアを立ち上げた。",
  },
  {
    id: "sato",
    name: "佐藤 花子",
    role: "Writer / Artist",
    initial: "佐",
    bio: "現代美術作家。作品が売れない日々を経て「価値とは何か」を問い続けている。",
  },
  {
    id: "suzuki",
    name: "鈴木 一郎",
    role: "Writer / Designer",
    initial: "鈴",
    bio: "UXデザイナー。「ユーザーのため」の欺瞞に気づき、デザインの本質を探求中。",
  },
];
