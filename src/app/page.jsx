import { Suspense } from "react";
import JobsList from "@/components/JobsList";
import Skeleton from "@/components/Card/Skeleton";

export default function Home({ searchParams }) {
  return (
    <div className="flex flex-col h-full">
      <section className="flex-grow flex flex-col items-center justify-center space-y-5 py-20">
        <h1 className="text-display max-w-[20ch] text-center text-accent">
          Discover Your Dream Job{" "}
          <span className="text-light-gray">{`on Twitter's Job Board`}</span>
        </h1>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
          Uncover the latest career opportunities shared on Twitter, refreshed
          daily for your success.
        </p>
      </section>
      <section className="flex-grow">
        <Suspense fallback={<Skeleton />}>
          <JobsList />
        </Suspense>
      </section>
    </div>
  );
}
