import React from 'react';
const Users = ({ visiblePeople, handleOnClick }) => {
  return (
    <div className="content">
      <div className="list-group">
        {visiblePeople.map((i) => (
          <>
            <button key={i.id} type="button" className={i.status === 'active' ? `list-group-item`
              : `list-group-item disabled`} data-toggle="modal" data-target="#exampleModal"
              onClick={()=>handleOnClick(i.id)} >
              <br></br>#{i.id} - {i.first_name} {i.last_name} - {i.age} years old {i.gender}
            </button>
          </>))}

      </div>
    </div>
  )
}

export default Users;
///1)от и до. 3)список алфавит, 4)debounce?.