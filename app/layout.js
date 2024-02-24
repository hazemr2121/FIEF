import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FIEF",
  description: "معهد المستقبل العالي للهندسة بالفيوم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <div className="text-right">
        <div className="block">
          <Navigation />
        </div>
        {children}
      </div>
      <Footer />
    </html>
  );
}
