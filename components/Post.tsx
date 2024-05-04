import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface Props {
  name?: string;
  description?: string;
}

const Post = ({ name, description }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href="/posts/post-1">{name}</Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Post;
