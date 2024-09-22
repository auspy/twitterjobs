import { FooterTitle } from "@/components/SVGs/FooterTitle";
import { LogoFull } from "@/components/SVGs/Logofull";

export const metadata = {
  metadataBase: new URL("https://www.twitterjobs.work"),
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "TwitterJobs.work — About Us | Find Your Next Job on Twitter",
  description:
    "Learn more about TwitterJobs.work, your go-to platform for discovering job opportunities shared on Twitter. We curate and organize job tweets to help you find your next career move.",
  openGraph: {
    title: "TwitterJobs.work — About Us | Find Your Next Job on Twitter",
    description:
      "Discover job opportunities shared on Twitter with TwitterJobs.work. We curate and organize job tweets to help you find your next career move.",
    url: "https://twitterjobs.work/about",
    siteName: "TwitterJobs.work",
    images: [
      {
        url: "https://twitterjobs.work/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TwitterJobs.work — About Us | Find Your Next Job on Twitter",
    description:
      "Discover job opportunities shared on Twitter with TwitterJobs.work. We curate and organize job tweets to help you find your next career move.",
    images: ["https://twitterjobs.work/twitter-image.jpg"],
  },
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
};

export default function About() {
  return (
    <>
      <div className="my-20 flex-col flex lg:grid lg:grid-cols-10">
        <div className="text-display col-span-4">
          <h1 className="mb-8 lg:pl-8">
            <span className="mr-3 mb-3 block">About</span>
            <FooterTitle />
          </h1>
        </div>
        <div className="col-start-6 col-span-6 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
          <p className="space-y-8 flex flex-col">
            <span>
              We created TwitterJobs.work to simplify the job search process by
              leveraging the power of Twitter. Our platform automatically
              curates job opportunities shared on Twitter, making it easier for
              job seekers to discover relevant openings in their field.
            </span>
            <span>
              Our mission is to connect talented individuals with exciting
              career opportunities by harnessing the real-time nature of
              Twitter. We believe that by aggregating job-related tweets, we can
              provide a valuable resource for both job seekers and employers.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
