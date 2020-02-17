import React from 'react';
const Filters = ({handleChangeValue, searchValue}) => {
  return (
    <form className="filter">
      <input type="text" className="form-control mb-2 mr-sm-2"  onChange={handleChangeValue}
        placeholder="Search by name..." />

      <div className="genderFilter">
        <label ><input type="radio" onChange={handleChangeValue} value={'female'}
          className="ui radio checkbox" checked={searchValue === "female"} /> female</label>
        <label ><input type="radio" onChange={handleChangeValue} value={'male'}
          className="ui radio checkbox" checked={searchValue === "male"} /> male</label>
        <label ><input type="radio" onChange={handleChangeValue} value={"both"}
          checked={searchValue === 'both'} className="ui radio checkbox" name="both" /> both</label>
      </div>

      <div className="search">
      <label><p>From:</p> <input type="number" className="form-control mb-2 mr-sm-2" value={searchValue} onChange={handleChangeValue} /></label>
      </div>
      <p><input type="reset" value="Reset all" className="btn btn-danger" /></p>
    </form>
  )
}

export default Filters