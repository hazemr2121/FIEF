import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FIEF",
  description: "معهد المستقبل العالي للهندسة بالفيوم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <div className="text-right">
        <Navigation />
        {children}
      </div>
    </html>
  );
}
