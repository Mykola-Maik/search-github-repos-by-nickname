import { TextField } from "@mui/material";

export const SearchBar = ({
  setSearch,
  search,
  setUser,
  data,
  user,
  ...props
}) => {
  const submenuClickHandler = (item) => {
    setUser(item.login);
    setSearch('');
  };

  return (
    <div className={box}>
      <TextField 
        label="Nickname"
        placeholder="Enter github nickname"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="medium"
        {...props}
      />
  
      {data && search !== '' && (
        <div className={submenu}>
          {data.map(item => (
            <div 
              className={subMenuItem}
              key={item.id}
              onClick={() => submenuClickHandler(item)}
            >
              {item.login}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

const box = 'flex items-center justify-center py-4 w-[100%] bg-gray-400 fixed top-0';
const submenu = 'fixed top-[73px] w-[100%] rounded bg-white shadow p-2 bottom-100';
const subMenuItem = 'cursor-pointer hover:opacity-50';