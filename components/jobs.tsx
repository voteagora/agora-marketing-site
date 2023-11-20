import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const Jobs = ({ posts }: Props) => {
  return (
    <section>
      <h1>Join the team</h1>
      <p>
        We're a small team of generalist builders: designers who code, engineers
        who sell. We have high trust and expectations of each
        other, and offer everyone significant chunks of both product and company ownership.
      </p>
      <div className="bg-gradient-to-b from-stone-200 to-stone-50 rounded-xl p-[1px]">
        <div className="h-full w-full bg-stone-50 p-3 rounded-[0.72rem]">
          <div className="bg-white rounded-md shadow-sm hover:shadow-md transition duration-300 border slate-50">
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                location={post.location}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
