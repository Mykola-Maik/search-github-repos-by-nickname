import { useState } from "react";

export const RepositoryDetails = ({item}) => {
  const [showMore, setShowMore] = useState(false);
  const url = `https://github.com/${item.full_name}`;

  return (
    <div className={box}>
      <div className="div flex items-center space-x-4">
        <h1 className={title}>{item.name}</h1>
        {showMore && (
          <a href={url} className={repoLink}>{url}</a>
        )}
      </div>

      {showMore && (
        <h2 className={userTitle}>{item.owner.login}</h2>
      )}

      {item.description?.length > 0
        ?
          <>
            <h3>
              Description:
            </h3>
            <p className={description}>{item.description}</p>
          </>
        : 'no description...'
      }
      <p className={stars}>Rating: {item.stargazers_count}</p>
      <p 
        className={more}
        onClick={() => setShowMore(!showMore)}
      >
        {!showMore ? 'show more info...' : 'hide info'}
      </p>
    </div>
  );
};

const box = 'border-[1px] border rounded px-10 py-2 w-[100%] hover:bg-gray-200';
const title = 'text-2xl';
const userTitle = 'text-sm text-gray-400 italic mb-2';
const description = 'p-2 border rounded bg-blue-50';
const stars = 'mb-2';
const repoLink = 'cursor-pointer text-gray-400 text-xs';
const more = 'cursor-pointer text-gray-400 text-xs self-center';