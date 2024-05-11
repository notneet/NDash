import { Roboto as FontMono, Open_Sans } from "next/font/google";

export const fontSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
