import React, { useEffect, useState } from "react";

export default function Search() {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  useEffect(() => {
    const fetchdata = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchdata();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData("setSearchApiData");
    } else {
      const filterresult = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      if(filterresult.length > 0){
        setData(filterresult);
      }
      else{
        setData([{"name":"noData"}])
      }
      
    }
    setFilterVal(e.target.value);
  };
  
  return (
    <>
      <div style={{margin:'20px 20%'}}>
        <input type="search"
          placeholder="Search"
          value={filterVal}
          onChange={(e) => handleFilter(e)}
        />
      </div>

      <div>
        <table >
          <tr>
          <th>name</th>
          <th>username</th>
          <th>Email</th>
          <th>phone</th>
          </tr>

          {data.map((item) => {
            
            return (
             
              <tr>
                
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
