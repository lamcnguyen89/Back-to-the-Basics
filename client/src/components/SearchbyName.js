import React from 'react';

function searchBar ({searchbyName}) {
    return (
        <div className="searchbox">
            <form className="form-inline"
            style={{
                background:"#F8F9F9",
            }}
            >
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search by Name"
                aria-label="Search"
                onChange={e => searchbyName(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                </button>
             </form>
        </div>
    )

}

export default searchBar;