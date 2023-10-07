import { RepositoryDetails } from "../RepositoryDetail/RepositoryDetail";

export const RepositoryList = ({repositories}) => (
  <div className={box}>
    {repositories && (
      repositories.map(item => (
        <RepositoryDetails key={item.id} item={item} />
      ))
    )}
  </div>
);

const box = 'pt-[35px] pb-[65px]';