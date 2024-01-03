import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  title: string;
  location: string;
  slug: string;
};

const BlogPreview = ({ title, slug, location }: Props) => {
  return (
    <div>
      <Link as={`/blogs/${slug}`} href="/blogs/[slug]" className="">
        <div className="flex justify-between rounded-md items-center px-3 py-3 hover:bg-white transition-all">
          <div>
            <div>{title}</div>
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

export default BlogPreview;
