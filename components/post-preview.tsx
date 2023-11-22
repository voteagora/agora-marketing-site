import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  title: string;
  location: string;
  slug: string;
};

const PostPreview = ({ title, slug, location }: Props) => {
  return (
    <div className="border-b first:rounded-t-md last:rounded-b-md last:border-0 hover:bg-stone-50 transition duration-300 ">
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="">
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3>{title}</h3>
            <div className="font-mono text-sm text-stone-400">
              <div>{location}</div>
            </div>
          </div>
          <div>
            <ArrowRightIcon className="h-3 w-3 text-stone-400" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
