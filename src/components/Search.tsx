import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

type onSearchFn = (arg0: string) => void;

interface SearchProps {
  onSearch: onSearchFn;
}


function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      if (isVisible) {
        inputRef.current.focus();
      }
    }
  }, [isVisible]);

  const handleToggleSearch = () => {
    setIsVisible(true);
  };


  const handleInputBlur = () => {
    if (inputRef.current && inputRef.current.value === '') {
      setIsVisible(false);
    }
  }


  async function handleSubmit() {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${term}`
    );
    const json = await res.json();
    console.log(json);

    navigate('/search');
  }

  return (
    <div>
      {isVisible ? (
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
          <input
            id="search-bar"
            name="search-query"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search"
            ref={inputRef}
            onBlur={handleInputBlur}
          />
          <button type='submit'>Search</button>
        </form>
      ) : (
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleToggleSearch} />
      )}
    </div>
  );
}

export default SearchBar;
