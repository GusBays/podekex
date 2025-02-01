import React, { useState } from "react"
import './styles.scss'
import { SearchBarProps } from "./types"

const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
    const [search, setSearch] = useState<string | null>(null)

    const handleOnClick = async () => {
        if (null === search) return
        else await onClick(search)
    }

    return (
        <div className='search-container'>
            <input
                className="input-search"
                placeholder="Search by name or number"
                type='text'
                value={search ?? ''}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-button" onClick={handleOnClick}>
                <span className="material-symbols-outlined">search</span>
            </button>
        </div>
    )
}

export default SearchBar