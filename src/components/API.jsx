import { useGetContactsQuery } from 'redux/slice/Slice';

const API = () => {
  const { data = [] } = useGetContactsQuery();
  console.log(data);

  return (
    <div>
      <ul>
        {data.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
 
}

export default API

