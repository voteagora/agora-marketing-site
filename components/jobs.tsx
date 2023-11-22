import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { UserIcon } from "@heroicons/react/20/solid";

type Props = {
  posts: Post[];
};

const Jobs = ({ posts }: Props) => {
  return (
    <section>
      <h1>Join the team</h1>
      <p>
        We're a small team of generalist builders: designers who code, engineers
        who sell. We have high trust and expectations of each other, and offer
        everyone significant chunks of both product and company ownership.
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
      <div className="mt-8 flex flex-row justify-between">
        <div className="w-1/6 p-1 -rotate-8 bg-white shadow-sm rounded-md transition-all duration-300 hover:rotate-0 hover:scale-125 ease-out hover:shadow-md hover:z-10">
          <a target="_blank" href="https://twitter.com/zhayitong">
            <img
              className="rounded-sm"
              src={
                "https://media.licdn.com/dms/image/C5603AQFcnn7Ff-baQw/profile-displayphoto-shrink_400_400/0/1549004768214?e=1706140800&v=beta&t=lTrDYh8x9WXnPK8oS5qxWBPGHFYGppQFgSmpsC5Om64"
              }
              alt={"yitong"}
            ></img>
            <div className="text-xs text-center mt-1 font-serif italic text-stone-400">
              Yitong
            </div>
          </a>
        </div>
        <div className="w-1/6 p-1 rotate-12 bg-white shadow-sm rounded-md transition-all duration-300 hover:rotate-0 hover:scale-125 ease-out hover:shadow-md hover:z-10">
          <a target="_blank" href="https://www.linkedin.com/in/kentfenwick/">
            <img
              className="rounded-sm"
              src={
                "https://media.licdn.com/dms/image/D5603AQFmfX8p31p7UA/profile-displayphoto-shrink_400_400/0/1700497855391?e=1706140800&v=beta&t=IpHZbqVJno0dwhJMVCET_CUjNEzLqaUhmEQbc_lNvwc"
              }
              alt={"kent"}
            ></img>
            <div className="text-xs text-center mt-1 font-serif italic text-stone-400">
              Kent
            </div>
          </a>
        </div>
        <div className="w-1/6 p-1 -rotate-6 bg-white shadow-sm rounded-md transition-all duration-300 hover:rotate-0 hover:scale-125 ease-out hover:shadow-md hover:z-10">
          <a target="_blank" href="https://www.linkedin.com/in/charliecf/">
            <img
              className="rounded-sm"
              src={
                "https://media.licdn.com/dms/image/C5603AQGODXf8t9gi7A/profile-displayphoto-shrink_400_400/0/1651604241523?e=1706140800&v=beta&t=M9fX95V-HAErmU0AScztWv398H7piXngxHuA1n35ehw"
              }
              alt={"charlie"}
            ></img>
            <div className="text-xs text-center mt-1 font-serif italic text-stone-400">
              Charlie
            </div>
          </a>
        </div>
        <div className="w-1/6 p-1 rotate-8 bg-white shadow-sm rounded-md transition-all duration-300 hover:rotate-0 hover:scale-125 ease-out hover:shadow-md hover:z-10">
          <a target="_blank" href="https://www.linkedin.com/in/sarsentjev/">
            <img
              className="rounded-sm"
              src={
                "https://media.licdn.com/dms/image/C4D03AQEOjFe_Ox8BeQ/profile-displayphoto-shrink_400_400/0/1524421548782?e=1706140800&v=beta&t=pRrhm-rvB34gtF7c2g1mGZfK0_v3FtXW1qDl8a1kvWM"
              }
              alt={"stepan"}
            ></img>
            <div className="text-xs text-center mt-1 font-serif italic text-stone-400">
              Stepan
            </div>
          </a>
        </div>
        <div className="w-1/6 p-1 -rotate-6 bg-white shadow-sm rounded-md transition-all duration-300 hover:rotate-0 hover:scale-125 ease-out hover:shadow-md hover:z-10">
          <img
            className="rounded-sm"
            src={"https://i.imgur.com/4TG3qoW.png"}
            alt={"cats"}
          ></img>
          <div className="text-xs text-center mt-1 font-serif italic text-stone-400">
            Keyboard cats
          </div>
        </div>
        <div className="w-1/6 p-1 rotate-8 bg-white shadow-sm rounded-md transition-all duration-300 hover:rotate-0 hover:scale-125 ease-out hover:shadow-md hover:z-10">
          <div className="rounded-sm bg-stone-200 w-full h-3/4 relative">
            <UserIcon className="absolute h-2/3 w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-400" />
          </div>
          <div className="text-xs text-center mt-1 font-serif italic text-stone-400">
            You?
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
