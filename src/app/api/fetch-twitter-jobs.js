import { TwitterApi } from "twitter-api-v2";
import { createEntry } from "../utils/getContent";

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const tweets = await fetchJobTweets();
    await saveJobsToContentful(tweets);
    res.status(200).json({ message: "Jobs fetched and saved successfully" });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Error fetching jobs" });
  }
}

async function fetchJobTweets() {
  const query = "(hiring OR job opening OR we're hiring) -is:retweet lang:en";
  const result = await client.v2.search(query, {
    "tweet.fields": "created_at,author_id",
    "user.fields": "name,username",
    expansions: "author_id",
    max_results: 100,
  });

  return result.data.map((tweet) => {
    const author = result.includes.users.find(user => user.id === tweet.author_id);
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
    await createEntry('twitterJob', {
      tweetId: { 'en-US': job.id },
      text: { 'en-US': job.text },
      createdAt: { 'en-US': job.createdAt },
      authorName: { 'en-US': job.authorName },
      authorUsername: { 'en-US': job.authorUsername },
    });
  }
}
