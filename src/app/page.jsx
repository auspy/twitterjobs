import { Suspense } from "react";
import JobsList from "@/components/JobsList";
import Skeleton from "@/components/Card/Skeleton";

export default function Home({ searchParams }) {
  return (
    <div className="flex flex-col h-full">
      <section className="flex-grow flex flex-col items-center justify-center space-y-5 py-20">
        <h1 className="text-display max-w-[20ch] text-center text-accent">
          Twitter Jobs Board
          <span className="text-light-gray">Find your next opportunity.</span>
        </h1>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
          Explore the latest job opportunities shared on Twitter, updated daily.
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
