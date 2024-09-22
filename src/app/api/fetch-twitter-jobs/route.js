import { TwitterApi } from "twitter-api-v2";
import { createEntry } from "../../utils/getContent";
import { NextResponse } from "next/server";

// Initialize the client with the bearer token from your project's App
const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

export async function GET(req) {
  try {
    console.log("Fetching jobs from Twitter...");
    const tweets = await fetchJobTweets();
    console.log("Saving jobs to Contentful...");
    await saveJobsToContentful(tweets);
    return NextResponse.json(
      { message: "Jobs fetched and saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}

async function fetchJobTweets() {
  const query = "(hiring OR job opening OR we're hiring) -is:retweet lang:en";

  // Use the v2 recent search endpoint
  const result = await client.v2.search(query, {
    "tweet.fields": "created_at,author_id",
    "user.fields": "name,username",
    expansions: "author_id",
    max_results: 5, // Adjust as needed, max is 100 for recent search
  });

  console.log("Twitter search result:", result);

  // Map the results to our desired format
  return result.data.map((tweet) => {
    const author = result.includes.users.find(
      (user) => user.id === tweet.author_id
    );
    return {
      id: tweet.id,
      text: tweet.text,
      createdAt: tweet.created_at,
      authorName: author.name,
      authorUsername: author.username,
    };
  });
}

async function saveJobsToContentful(jobs) {
  for (const job of jobs) {
    await createEntry("twitterJob", {
      tweetId: { "en-US": job.id },
      text: { "en-US": job.text },
      createdAt: { "en-US": job.createdAt },
      authorName: { "en-US": job.authorName },
      authorUsername: { "en-US": job.authorUsername },
    });
  }
}
