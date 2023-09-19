import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Paggination = ({
  page,
  setPage,
  pages,
}) => (
  <div className={box}>
    <Stack spacing={2}>
      <Pagination 
        count={pages}
        page={page}
        shape="rounded"
        variant="outlined"
        color='primary'
        onChange={(event, newPage) => setPage(newPage)}
      />
    </Stack>
  </div>
);

const box = 'flex bg-gray-400 w-screen py-2 shadow-xl items-center justify-center fixed bottom-0';