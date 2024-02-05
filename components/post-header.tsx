import type Author from "../interfaces/author";

type Props = {
  title: string;
  author: Author;
};

const PostHeader = ({ title, author }: Props) => {
  return (
    <div className="md:flex flex-row items-center justify-between mt-12 mb-6">
      <h1 className="m-0">{title}</h1>
    </div>
  );
};

export default PostHeader;
