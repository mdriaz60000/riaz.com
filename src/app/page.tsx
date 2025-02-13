import Banner from "@/components/Banner/page";

import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Project from "@/components/Project/Project";
import ContactPage from "./contact/page";
import { stringify } from "querystring";



export default async function Home() {
  const res = await fetch("https://riaz-backend.vercel.app/blogs", {
    next : {
      revalidate : 30,
    },
  })
  const blogs = await res.json(stringify)

  console.log(blogs)
  return (
   <>
   <Banner />
   <Project/>
   <LatestBlogs blogs={blogs}  />
    <ContactPage/>
  
   </>
  );
}
