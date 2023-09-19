import { useEffect, useState } from 'react';
import { useDebounce } from './hooks/debounce';
import { useGetRepositoriesQuery, useGetUsersQuery } from './redux/usersApi';
import { SearchBar } from './components/SearchBar/SearchBar';
import { RepositoryList } from './components/RepositoryList/RepositoryList';
import { Paggination } from './components/Paggination/Paggination';

export const App = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');
  const [page, setPage] = useState(1);
  const debounced = useDebounce(search);

  const { data } = useGetUsersQuery(debounced, {skip: debounced.length < 1});
  const { data: repositories } = useGetRepositoriesQuery(user, {skip: user.length < 1});
  const [pages, setPages] = useState((Math.ceil(repositories?.length / 10)));

  const pagginationRepositories = repositories?.filter((item, index) => {
    return index <= ((page - 1) * 10 + 10) && index >= (page * 10 - 10);
  });

  useEffect(() => {
    setPages((Math.ceil(repositories?.length / 10)));
  }, [search, data, user, repositories]);

  return (
    <div className={box}>
      <SearchBar 
        data={data?.items}
        setUser={setUser}
        setSearch={setSearch}
        search={search}
      />

      {!repositories && <h1 className={noData}>no data</h1>}
      {repositories && (
        <>
          <RepositoryList repositories={pagginationRepositories} />

          <Paggination 
            pages={pages} 
            page={page}
            setPage={setPage} 
          />
        </>
      )}
    </div>
  );
}

const noData = 'h-screen flex items-center justify-center bg-gray-200';
const box = 'flex justify-center pt-14 flex-col';