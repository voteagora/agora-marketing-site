import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  title: string;
  location: string;
  slug: string;
};

const PostPreviewProtocolEng = ({ title, slug, location }: Props) => {
  return (
    <div className="border-b first:rounded-t-md last:rounded-b-md last:border-0 hover:bg-stone-50 transition duration-300 ">
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="">
        <div className="p-4 flex justify-between items-center">
          <div>
            <div>{title}</div>
            <div className="font-mono text-sm text-stone-400">
              <div>{location}</div>
            </div>
          </div>
          <div className="flex gap-2 text-xs items-center">
            <div className="mono font-semibold uppercase text-blue-950 bg-blue-200 px-2 py-1 rounded flex gap-1 items-center">
              <img
                className="rounded-sm w-3 h-3"
                src={"../assets/curta.svg"}
                alt={"Curta"}
              ></img>
              Curta Recognized
            </div>
            <ArrowRightIcon className="h-3 w-3 text-stone-400" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreviewProtocolEng;
