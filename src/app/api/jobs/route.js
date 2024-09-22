import { getContent } from "../../utils/getContent";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { items: jobs } = await getContent({
      content_type: "twitterJob",
      order: "-fields.createdAt",
      limit: 20,
    });

    const formattedJobs = jobs.map((job) => ({
      id: job.fields.tweetId,
      text: job.fields.text,
      authorName: job.fields.authorName,
      authorUsername: job.fields.authorUsername,
      createdAt: job.fields.createdAt,
    }));

    return NextResponse.json(formattedJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}
