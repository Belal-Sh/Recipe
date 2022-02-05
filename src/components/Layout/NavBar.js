
import React, { useState } from "react";
import css from "./layout.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    let navigate = useNavigate();
    const [searchField, setSearchField] = useState("")
    const handleSumit = (e) => {
        e.preventDefault()
        searchField && navigate(`/search/${searchField}`);
        setSearchField("")
    }

    return (
        <nav className={css.menuContainer}>
            <div className={css.navBar}>

                <h1 className={css.menu}>
                    <Link to="/">
                        Logo
                    </Link>
                </h1>

                <div className={css.searchBar}>
                    <form onSubmit={handleSumit}>
                        <input type="text" placeholder="search" name="searchField" value={searchField} onChange={(e) => setSearchField(e.target.value)} />
                        <button>Search</button>
                    </form>

                </div>
            </div>
        </nav>
    )

}

export default NavBar