import Image from "next/image";
import Clipboard from "@/libs/Clipboard/Clipboard";

export const metadata = {
  metadataBase: new URL("https://pillarstack.com"),
  alternates: {
    canonical: "/legal",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Pillarstack — Legal Information",
  description: "Trademarks and user privacy details on Pillarstack.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function About() {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12 h-full">
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          Legal <span className="text-light-gray">Info</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>
            This website use Google Analytics to analyze traffic and the usage
            to improve its performance and user experience. No personal
            information is collected.
          </span>

          <span>
            All trademarks, logos, brand and company names are the property of
            their respective owners.
          </span>
        </p>
      </div>
    </div>
  );
}
