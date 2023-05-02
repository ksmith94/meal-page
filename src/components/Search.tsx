import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

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


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (term.trim() === '') {
      return;
    }
    navigate(`/search?query=${term}`);
  }

  return (
    <div>
      {isVisible ? (
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e);
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
          <Link to={`/search/${term}`}>
            <button type='submit'>Search</button>
          </Link>
        </form>
      ) : (
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleToggleSearch} />
      )}
    </div>
  );
}

export default SearchBar;
