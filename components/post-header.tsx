import Avatar from "./avatar";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  author: Author;
};

const PostHeader = ({ title, author }: Props) => {
  return (
    <div className="md:flex flex-row items-center justify-between">
      <h1 className="m-0">{title}</h1>
      <div className="text-right">
        <a target="BlANK_" href={author.url}><Avatar name={author.name} picture={author.picture} /></a>
      </div>
    </div>
  );
};

export default PostHeader;
