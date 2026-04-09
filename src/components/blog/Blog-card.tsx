// import React from 'react'

type Props = {
    imgUrl?: string;
    title: string;
    excerpt: string;
    date: string;
}

const BlogCard = (props: Props) => {
  return (
      <div className="border border-slate-700 rounded-lg shadow-md flex flex-row gap-4 my-2 min-h-[20vh]">
          <img src={props.imgUrl} alt={props.title} className="min-h-[10em] rounded-l-lg bg-slate-900" />
          <div>
            <h2 className="text-xl font-bold mb-2">{props.title}</h2>
            <p className="text-gray-600 mb-4">{props.excerpt}</p>
            <p className="text-gray-500 text-sm">{props.date}</p>
          </div>
    </div>
  )
}

export default BlogCard
