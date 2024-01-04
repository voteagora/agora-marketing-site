import BlogPreview from "./blog-preview";
import type Blog from "../interfaces/blog";

type Props = {
  blogs: Blog[];
};

const Blogs = ({ blogs }: Props) => {
  return (
    <section>
      <div className="mt-4 rounded-md bg-stone-200">

        <div className="rounded-md border bg-stone-50">
          {blogs.map((blog) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              location={blog.location}
              slug={blog.slug}
            />
          ))}
        </div>
        <div className="font-mono text-sm pl-3 py-1 text-stone-400">
          Agora blog
        </div>
      </div>
    </section>
  );
};

export default Blogs;
