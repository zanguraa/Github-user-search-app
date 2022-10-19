import React from "react";
import styled from "styled-components";
import SearchImg from "./assets/icon-search.svg";

export default function Search({ result, blackTheme, setSearch }) {
  const SubmitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <FormContainer blackTheme={blackTheme} onSubmit={SubmitHandler}>
      <label htmlFor="search">
        <img src={SearchImg} alt="search" />
        <input
          type="search"
          id="search"
          placeholder="Search GitHub username..."
          defaultValue="zanguraa"
        />
      </label>
      {!result ? <ErrorSpan> no result</ErrorSpan> : ""}
      <button>Search</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  gap: 7px;
  transition: all 0.5s;
  background: ${(props) => (props.blackTheme ? "#fefefe" : "#1E2A47")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  height: 60px;
cursor: pointer;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

  input {
    border: none;
    outline: none;
    font-family: "Space Mono";
    font-weight: 400;
    font-size: 11px;
    line-height: 25px;
    color: #4b6a9b;
    background-color: transparent;
    width: 100%;
    &::-ms-clear { display: none; width : 0; height: 0; }
      &::-ms-reveal { display: none; width : 0; height: 0; }
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration { display: none; }
    @media (min-width: 768px) {
      width: 300px;
    }
  }

  span {
    color: red;
  }

  button {
    width: 84px;
    height: 46px;
    background: #0079ff;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    :hover {
      background: #60abff;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    padding: 0 1rem 0 2rem;
  }
`;

const ErrorSpan = styled.h5`
  color: red;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 15px;
    font-weight: 700;
  }
`;
