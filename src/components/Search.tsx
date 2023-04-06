import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
          type="text"
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
