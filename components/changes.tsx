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
    <section className="flex flex-col">
      <div className=" absolute w-[1px] h-16 bg-gradient-to-b from-stone-50 to-stone-200"></div>
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
    <div className="border-l pl-[10px] pt-12">
      <div>
        <div className="flex items-center space-x">
        <div className="text-stone-600 whitespace-nowrap relative -left-7 bg-white shadow-sm border py-1 pl-3 pr-4 flex items-center gap-2 rounded-full">
          <div className="w-1 h-1 bg-stone-700 rounded-full"></div>
          <div>{change.date} changes</div>
        </div>
        </div>
        <h1 className="mb-4 mt-4">{change.title}</h1>
        <PostBody content={change.content} />
      </div>
      {/* <Link as={`/changes/${change.slug}`} href="/changes/[slug]" className="">
        <div>View details →</div>
      </Link> */}
    </div>
  );
};

export default Changes;
