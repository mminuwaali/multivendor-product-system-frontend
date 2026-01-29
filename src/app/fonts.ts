// Framework
import { Nunito, Oxygen, Poppins } from "next/font/google";

export const poppinsFont = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppin-fonts",
  display: "swap",
});

export const oxygenFont = Oxygen({
  weight: "400",
  subsets: ["latin"],
  variable: "--oxygen-fonts",
  display: "swap",
});

export const nunitoFont = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--nunito-fonts",
  display: "swap",
});
