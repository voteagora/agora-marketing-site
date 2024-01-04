import type Change from "../interfaces/change";
import Link from "next/link";
import type Author from "../interfaces/author";
import PostBody from "../components/post-body";
import PostHeader from "../components/post-header";

type Props = {
  changes: Change[];
};

const Changes = ({ changes }: Props) => {
  return (
    <section>
      {changes.map((change) => (
        <Log change={change} />
      ))}
    </section>
  );
};

type LogProps = {
  change: Change;
};

const Log = ({ change }: LogProps) => {
  return (
    <div>
      <div>
        <div className="flex items-center space-x-2">
        <div className="text-stone-600 whitespace-nowrap">
          {change.date}
        </div>
        <div className="border-b border-stone-200 w-full"></div>
        </div>
        <h1 className="mb-4">{change.title}</h1>
        <PostBody content={change.content} />
      </div>
      {/* <Link as={`/changes/${change.slug}`} href="/changes/[slug]" className="">
        <div>View details →</div>
      </Link> */}
    </div>
  );
};

export default Changes;
