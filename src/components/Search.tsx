import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [term, setTerm] = useState('');

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

  return (
    <div>
      {isVisible ? (
        <input
          id="search-bar"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search"
          ref={inputRef}
          onBlur={handleInputBlur}
        />
      ) : (
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleToggleSearch} />
      )}
    </div>
  );
}

export default SearchBar;
