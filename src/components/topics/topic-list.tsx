import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id} className="m-2">
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning">{topic.slug}</Chip>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-xl m-2">Topics</h1>
      {renderedTopics}
    </div>
  );
}
