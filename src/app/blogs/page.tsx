
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";


async function ProjectPage() {
  const res = await fetch("https://riaz-backend.vercel.app/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const text = await res.text();
  const blogs = JSON.parse(text);
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-blue-500">Blog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className=" grid grid-cols-3 gap-6 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
