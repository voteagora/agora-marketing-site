import BlogPreview from "./blog-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  return (
    <section>
      <div className="mt-4 rounded-md bg-stone-200">

        <div className="rounded-md border bg-stone-50">
          {posts.map((post) => (
            <BlogPreview
              key={post.slug}
              title={post.title}
              location={post.location}
              slug={post.slug}
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
