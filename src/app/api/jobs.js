import { getContent } from "../utils/getContent";

export default async function handler(req, res) {
  try {
    const { items: jobs } = await getContent({
      content_type: 'twitterJob',
      order: '-fields.createdAt',
      limit: 20,
    });

    const formattedJobs = jobs.map((job) => ({
      id: job.fields.tweetId,
      text: job.fields.text,
      authorName: job.fields.authorName,
      authorUsername: job.fields.authorUsername,
      createdAt: job.fields.createdAt,
    }));

    res.status(200).json(formattedJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Error fetching jobs" });
  }
}
