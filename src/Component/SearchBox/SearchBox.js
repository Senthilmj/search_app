import React, { useState, useContext } from 'react'
import { globalContext } from "../../Context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './SearchBox.scss'
const SearchBox = () => {

    const { searchText } = useContext(globalContext);
    const [input, setInput] = useState('iphone')
    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (input && input.trim() != '') {
            searchText(input)
        }
    }

    const clearInput = () => {
        setInput('')
    }

    return (
        <form className="form-container" onSubmit={onSubmitHandler}>
            <input type="text" className="search-text" placeholder="Type and Search" value={input} onChange={onChangeHandler} required />
            {input && < FontAwesomeIcon onClick={clearInput} className="cancelIcon" icon={faTimes} size={"lg"} />}
            <button className="search-button" type="submit"><svg viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
        </form >
    )
}
export default SearchBox;