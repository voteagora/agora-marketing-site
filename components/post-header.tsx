import type Author from '../interfaces/author';
import { getLocaleCode } from '../lib/helpers';
import Avatar from './avatar';

type Props = {
  title: string;
  author: Author;
  date?: string;
};

const PostHeader = ({ title, author, date }: Props) => {
  return (
    <>
      <div className="mt-12 mb-6 flex flex-col">
        {date && (
          <div className="mb-4 opacity-70">
            {new Date(date).toLocaleDateString(getLocaleCode(), {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        )}
        <div className="md:flex flex-row items-center justify-between">
          <h1 className="m-0">{title}</h1>
          <div className="text-right">
            <a target="BlANK_" href={author.url}>
              <Avatar name={author.name} picture={author.picture} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
