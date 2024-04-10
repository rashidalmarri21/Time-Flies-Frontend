import "./globals.css";
import BgIllustration from "components/bg-illustration";
import Footer from "components/footer";
import Header from "components/header";
import { cn } from "lib/utils";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";


const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className={cn(poppins.variable)}>
      <body>
        {props.children}
        <BgIllustration />
      </body>
    </html>
  );
}
