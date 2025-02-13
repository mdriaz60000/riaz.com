import Link from "next/link";
import BlogCard from "../ui/BlogCard";
import { Blog } from "@/types";


const LatestBlogs = ({blogs}: {blogs : Blog[]}) => {
    return (
        <div className="w-[90%] mx-auto">
        <h1 className="text-3xl text-center  font-bold">
          Latest Blogs 
        </h1>
        <p className="text-center text-gray-400 w-2/5 mx-auto">
          <i>
            Dive into the fascinating world of quantum computing, where unlocking
            unprecedented computational power.
          </i>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {blogs?.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="text-center ">
          <Link href="/blogs">
            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    );
};

export default LatestBlogs;