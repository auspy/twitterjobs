"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import fuzzysort from "fuzzysort";
import JobTweet from "./JobTweet";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const debouncedSetSearchTerm = useCallback(
    debounce((value) => setSearchTerm(value), 300),
    []
  );

  const filteredJobs = useMemo(() => {
    if (!searchTerm) return jobs.map((job) => ({ ...job, highlights: {} }));

    const options = {
      keys: ["text", "authorName"],
      threshold: -10000,
    };

    const results = fuzzysort.go(searchTerm, jobs, options);
    return results.map((result) => ({
      ...result.obj,
      highlights: {
        text:
          fuzzysort.highlight(result[0], "<mark>", "</mark>") ||
          result.obj.text,
        authorName:
          fuzzysort.highlight(result[1], "<mark>", "</mark>") ||
          result.obj.authorName,
      },
    }));
  }, [jobs, searchTerm]);

  return (
    <div className="container mx-auto px-4">
      <input
        type="text"
        placeholder="Search jobs..."
        onChange={(e) => debouncedSetSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      {filteredJobs.map((job) => (
        <JobTweet
          key={job.id}
          tweetId={job.id}
          highlightedText={job.highlights.text}
          highlightedAuthorName={job.highlights.authorName}
        />
      ))}
    </div>
  );
}
