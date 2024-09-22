import { Tweet } from "react-tweet";

export default function JobTweet({
  tweetId,
  highlightedText,
  highlightedAuthorName,
}) {
  return (
    <div className="my-4">
      <Tweet id={tweetId} />
      {(highlightedText || highlightedAuthorName) && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <h4 className="font-bold">Matched content:</h4>
          {highlightedText && (
            <p dangerouslySetInnerHTML={{ __html: highlightedText }} />
          )}
          {highlightedAuthorName && (
            <p>
              Author:{" "}
              <span
                dangerouslySetInnerHTML={{ __html: highlightedAuthorName }}
              />
            </p>
          )}
        </div>
      )}
    </div>
  );
}
