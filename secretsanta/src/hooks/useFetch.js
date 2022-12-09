import {useState, useEffect} from 'react'

function useFetch(url, groupName) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    console.log(groupName)
    useEffect(() =>{
        fetch(url, {
          headers: { Accept: "application/json" },
          body: {groupName: groupName}
        })
          .then((res) => res.json())
          .then((data) => {
           setData(data);
           setError(null);
          })
          .catch((err) => {
            setData(null);
            setError(err);
        });
      },[url]);
    return {data, error};
}

export default useFetch;