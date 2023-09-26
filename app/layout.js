import { Open_Sans } from "@next/font/google";
import Link from "next/link";
import Style from "./rootStyle.module.css";
import "./global.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head></head>
      <body>
        <header>
          <h2>
            <Link className={Style.homeLink} href={"/home"}>
              Globomantics
            </Link>
          </h2>
          <h2>
            <Link className={Style.menuBarLinks} href={"/blog"}>
              Blog
            </Link>
          </h2>
          <h2>
            <Link className={Style.menuBarLinks} href={"/settings"}>
              Settings
            </Link>
          </h2>
          <h2>
            <Link className={Style.menuBarLinks} href={"/conference"}>
              Conference
            </Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
