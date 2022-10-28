import React from "react";
import { Container } from "./select.style";
import { MdKeyboardArrowDown } from "react-icons/md";
import { filterJeans } from "./service.api";

const Select = () => {
  const handleFilterJeans = () => {
    filterJeans();
  };

  return (
    <Container>
      <button>
        Filter <MdKeyboardArrowDown />
      </button>

      <div className="filter-select">
        <button>Jeans</button>
        <button>T-shirt</button>
        <button>Short</button>
        <button>Gap</button>
      </div>
    </Container>
  );
};

export default Select;
