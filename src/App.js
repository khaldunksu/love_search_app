import React, { useState, useEffect } from 'react';
import './App.css';
import { getUsers } from './api';
import Users from './Users'
import Filters from './Filters';

const App = () => {

  useEffect(() => {
    getUsers()
      .then((peopleFromServer) => {
        setPeople(peopleFromServer.result.map(i=>({
          ...i,
          age:  ((new Date().getTime() - new Date(i.dob)) / (24 * 3600 * 365.25 * 1000)) | 0
        }))
          .sort((a, b) => a.first_name.localeCompare(b.first_name)))
      })
  }, []);

  const [people, setPeople] = useState([]);
  const [searchValue, setSearchValue] = useState('');



  const handleOnClick = (id) => {
    if (window.confirm(
      `Вы действительно хотите пригласить на свидание пользователя с id = ${id}`
    )) { alert('Приглашение отправлено')
      setPeople([...people].filter(item => item.id !== id))
    }
  }

  const handleChangeValue = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const searchUsers = () => (
    searchValue.length >= 2 ? people.filter(item => item.first_name.toLowerCase().includes(searchValue) ||
      item.last_name.toLowerCase().includes(searchValue)
      || searchValue === "both" ? people : item.gender === searchValue || item.age>=searchValue) : people)

      setTimeout( () => searchUsers, 400)
   
  const visiblePeople = searchValue ? searchUsers() : [...people];
  
 

  return (
    <div className="App">
      <Users visiblePeople={visiblePeople}
        handleOnClick={handleOnClick} />

      <Filters handleChangeValue={handleChangeValue}
        searchValue={searchValue} />

    </div>
  );
}
export default App;

