// import React from 'react'

type Props = {
  imgUrl?: string;
  title: string;
  excerpt: string;
  date: string;
};

import Card from "../ui/Card";

const BlogCard = (props: Props) => {
  return (
    <Card variant="elevated" className="my-2 flex min-h-[20vh] flex-row gap-4">
      <img
        src={props.imgUrl}
        alt={props.title}
        className="min-h-[10em] rounded-l-lg bg-surface-raised object-cover"
      />
      <div className="flex flex-col justify-center py-3 pr-3">
        <h2 className="mb-2 text-xl font-bold text-fg">{props.title}</h2>
        <p className="mb-4 text-sm text-muted">{props.excerpt}</p>
        <p className="text-xs text-muted">{props.date}</p>
      </div>
    </Card>
  );
};

export default BlogCard;
