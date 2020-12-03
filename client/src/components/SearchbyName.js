import React from 'react';

function searchBar ({searchbyName}) {
    return (
        <div className="searchbox m-2 p-3 rounded">
                <div className="form-group"> 
                    <h3>Search by Name: </h3>
                    <input  
                        type="search"
                        placeholder="Search by Name"
                        aria-label="Search"
                        className="form-control"
                        onChange={e => searchbyName(e)}
                        
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                        Search
                    </button>
                </div>

        </div>
    )

}

export default searchBar;