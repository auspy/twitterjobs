import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const overusedgrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
    },
  ],
  display: "block",
  variable: "--font-overusedgrotesk",
  weight: "200 800",
});

export const metadata = {
  metadataBase: new URL("https://www.twitterjobs.work"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "TwitterJobs.work — Find Your Next Job on Twitter",
  description:
    "Discover job opportunities shared on Twitter with TwitterJobs.work. We curate and organize job tweets to help you find your next career move.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "TwitterJobs.work — Find Your Next Job on Twitter",
    description:
      "Discover job opportunities shared on Twitter with TwitterJobs.work. We curate and organize job tweets to help you find your next career move.",
    url: "https://www.twitterjobs.work",
    siteName: "TwitterJobs.work",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitterjobs.work — Find Your Next Job on Twitter",
    description:
      "Discover job opportunities shared on Twitter with TwitterJobs.work. We curate and organize job tweets to help you find your next career move.",
    images: ["https://twitterjobs.work/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GAID;
  return (
    <html lang="en" className={`${overusedgrotesk.variable}`}>
      <head>
        <link rel="canonical" href="https://www.twitterjobs.work" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-overusedgrotesk antialiased bg-bg section-padding text-accent box-border">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
