import { useContext, useState } from "react";
import { AppContext } from "../../../base/Context/AppContext";
import {
  DropdownHeader,
  DropdownListContainer,
  DropdownListItems,
  DropdownWrap,
} from "./styles";

const Dropdown = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const updateSelectedOption = (value) => () => {
    dispatch({
      type: "updatePrice",
      value: { id: value.id, divider: value.divider },
    });
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropdownWrap>
      <DropdownHeader
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderBottom: isOpen ? "1px solid rgba(0, 0, 0, 0.49)" : null,
        }}
      >
        <span style={{ marginRight: "10px" }}>
          <img
            style={{ width: "15px", height: "10px" }}
            src={
              (selectedOption && selectedOption.flag_url) ||
              (state.currencies.length > 0 && state.currencies[0].flag_url)
            }
            alt="flag"
          />
          <span style={{ marginLeft: "5px" }}>
            {(selectedOption && selectedOption.name) ||
              (state.currencies.length > 0 && state.currencies[0].name)}
          </span>
        </span>

        <span style={{ marginLeft: "65px" }}>
          <img src="/arrow-down.png" alt="arrow down" />
        </span>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          {Array.isArray(state.currencies) &&
            state.currencies.length > 0 &&
            state.currencies.map((option, index) => (
              <DropdownListItems
                key={index}
                onClick={updateSelectedOption(option)}
              >
                <span style={{ marginRight: "10px" }}>
                  <img
                    style={{ width: "15px", height: "10px" }}
                    src={option.flag_url}
                    alt="flag"
                  />
                </span>
                {option.name}
              </DropdownListItems>
            ))}
        </DropdownListContainer>
      )}
    </DropdownWrap>
  );
};

export default Dropdown;
