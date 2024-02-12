import type Author from "../interfaces/author";
import Avatar from "./avatar";

type Props = {
  title: string;
  author: Author;
};

const PostHeader = ({ title, author }: Props) => {
  return (
    <div className="md:flex flex-row items-center justify-between mt-12 mb-6">
      <h1 className="m-0">{title}</h1>
      <div className="text-right">
        <a target="BlANK_" href={author.url}><Avatar name={author.name} picture={author.picture} /></a>
      </div>
    </div>
  );
};

export default PostHeader;
