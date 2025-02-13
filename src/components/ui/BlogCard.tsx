
import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { FaCalendar } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <figure>
        <Image
          src={blog.blog_img}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        <p className="flex items-center justify-center text-teal-600 bg-teal-100 w-32 rounded-full py-1 text-sm">
          <FaCalendar className="mr-2" />
          {blog.publish_date}
        </p>
        <h2 className="text-xl font-bold mt-4">
          {blog.name.length > 30
            ? blog.name.slice(0, 30) + "..."
            : blog.name}
        </h2>
        <p className="text-gray-400 mt-2 ">
          {blog.description.length > 100
            ? blog.description.slice(0, 60) + "..."
            : blog.description}
          <Link href={`/blogs/${blog.id}`} className="text-teal-600 ml-1">
            Read More
          </Link>
        </p>
     
      </div>
    </div>
  );
};

export default BlogCard;
