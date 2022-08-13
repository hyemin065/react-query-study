import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

function App() {
  const func = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges?page=1');
    return data;
  };

  const { data, isLoading, error, isError, isSuccess } = useQuery('exchange', func);
  console.log(data, isSuccess);

  // const info = useQuery('exchange', func);
  // console.log(info);
  if (isError) {
    return <div>{(error as any).message}</div>;
  }

  return (
    <>
      <button type="button" onClick={func}>
        sdfsdf
      </button>
      <div>
        {isLoading ? <div>loading...</div> : ''}
        {isSuccess &&
          data.map((item: any) => {
            return <div key={Math.random() * 100}>{item.name}</div>;
          })}
      </div>
    </>
  );
}

export default App;
