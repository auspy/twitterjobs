export const metadata = {
  metadataBase: new URL("https://www.twitterjobs.work"),
  alternates: {
    canonical: "/legal",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "TwitterJobs.work — Legal Information | Terms of Use and Privacy Policy",
  description:
    "Learn about TwitterJobs.work's legal information, including our terms of use, privacy policy, and how we handle user data and third-party content.",
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
    title:
      "TwitterJobs.work — Legal Information | Terms of Use and Privacy Policy",
    description:
      "Learn about TwitterJobs.work's legal information, including our terms of use, privacy policy, and how we handle user data and third-party content.",
    url: "https://www.twitterjobs.work/legal",
    siteName: "TwitterJobs.work",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TwitterJobs.work — Legal Information | Terms of Use and Privacy Policy",
    description:
      "Learn about TwitterJobs.work's legal information, including our terms of use, privacy policy, and how we handle user data and third-party content.",
  },
};

export default function Legal() {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12 h-full">
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          Legal <span className="text-light-gray">Information</span>
        </h1>
      </div>
      <div className="col-start-6 col-span-6 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>
            TwitterJobs.work is a platform that aggregates job-related tweets
            from Twitter. We do not create or modify the content of these
            tweets. All job listings and related information are sourced
            directly from Twitter and belong to their respective authors.
          </span>

          <span>
            {`We use Google Analytics to analyze traffic and improve our website's
            performance and user experience. No personally identifiable
            information is collected through this process.`}
          </span>

          <span>
            By using TwitterJobs.work, you agree to our Terms of Service and
            Privacy Policy. We respect your privacy and handle your data in
            accordance with applicable laws and regulations.
          </span>

          <span>
            All trademarks, logos, brand names, and company names mentioned on
            this website are the property of their respective owners. The use of
            these names and images is for identification purposes only and does
            not imply endorsement.
          </span>

          <span>
            TwitterJobs.work is not affiliated with or endorsed by Twitter, Inc.
            We provide this service as an independent platform to help job
            seekers find opportunities shared on Twitter.
          </span>
        </p>
      </div>
    </div>
  );
}
