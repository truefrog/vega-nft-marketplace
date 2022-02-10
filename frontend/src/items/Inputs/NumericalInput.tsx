import React, { useState, useMemo } from "react";
import { Input } from "@pancakeswap-libs/uikit";
import styled from "styled-components";
import debounce from "lodash/debounce";
import { escapeRegExp } from "../../utils";

const StyledInput = styled(Input)`
  background-color: transparent;
  border-radius: 4px;
  margin-left: auto;
  border: 1px solid gray;
  color: white;
  &:focus:not(:disabled) {
    box-shadow: 0px 0px 0px 1px #7645D9,0px 0px 0px 2px rgba(118,69,217,0.4);
    border: 0px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

const NormalInput: React.FC<Props> = ({
  onChange: onChangeCallback,
  placeholder = "---",
}) => {
  const [normalText, setNormalText] = useState("");

  const debouncedOnChange = useMemo(
    () =>
      debounce(
        (e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e),
        500
      ),
    [onChangeCallback]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let nextUserInput = e.target.value;
    if (nextUserInput === "" || inputRegex.test(escapeRegExp(nextUserInput))) {
      setNormalText(nextUserInput);
    }
    debouncedOnChange(e);
  };

  return (
    <InputWrapper>
      <StyledInput
        value={normalText}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default NormalInput;
