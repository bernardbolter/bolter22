import React, { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'
import { useTheme } from 'styled-components'

import SearchStyle from '../styles/search.style'

const Search = () => {
    const [art, setArt] = useContext(ArtContext)
    console.log("art search: ", art.searchValue)
    const theme = useTheme()

    return (
        <SearchStyle>
            <div className="search-container">
                <form noValidate action="" role="search">
                    <input
                        value={art.searchValue}
                        onChange={e => {
                            setArt(state => ({...state, searchValue: e.target.value}))
                        }}
                        placeholder="Search Artwork"
                        title='Search bar'
                    />
                </form>
                <div onClick={() => setArt(state => ({ ...state, searchValue: "" }))}>
                    <svg viewBox="0 0 20 20" >
                        <path
                            fill={art.searchValue.length !== 0 ? theme.colors.warning : theme.colors.fg}
                            d="M10 0C4.46667 0 0 4.46667 0 10C0 15.5333 4.46667 20 10 20C15.5333 20 20 15.5333 20 10C20 4.46667 15.5333 0 10 0ZM10 19.5556C4.73333 19.5556 0.444444 15.2667 0.444444 10C0.444444 4.73333 4.73333 0.444444 10 0.444444C15.2667 0.444444 19.5556 4.73333 19.5556 10C19.5556 15.2667 15.2667 19.5556 10 19.5556V19.5556Z"
                        />
                        <path
                            fill={art.searchValue.length !== 0 ? theme.colors.warning : theme.colors.fg}
                            d="M10.3111 10L14.4889 5.82222C14.5777 5.7334 14.5777 5.59993 14.4889 5.51112C14.4001 5.4223 14.2666 5.4223 14.1778 5.51112L10 9.68889L5.71112 5.40001C5.6223 5.31118 5.48884 5.31118 5.40002 5.40001C5.3112 5.48883 5.3112 5.62229 5.40002 5.71111L9.68891 10L5.51113 14.1778C5.42231 14.2666 5.42231 14.4001 5.51113 14.4889C5.55562 14.5334 5.62227 14.5555 5.66676 14.5555C5.71125 14.5555 5.7779 14.5334 5.82239 14.4889L10.0002 10.3111L14.2891 14.6C14.3335 14.6445 14.4002 14.6666 14.4447 14.6666C14.4892 14.6666 14.5558 14.6445 14.6003 14.6C14.6891 14.5112 14.6891 14.3777 14.6003 14.2889L10.3111 10Z" 
                        />
                    </svg>
                </div>
        </div>
       </SearchStyle>
    )
}
export default Search