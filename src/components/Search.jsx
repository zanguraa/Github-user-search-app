import React from "react";
import styled from "styled-components";
import SearchImg from "./assets/icon-search.svg";

export default function Search() {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={SubmitHandler}>
      <label htmlFor="search">
        <img src={SearchImg} alt="search" />
        <input
          type="search"
          id="search"
          placeholder="Search GitHub username..."
        />
      </label>
      <button>Search</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  height: 60px;

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
    width: 184px;
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
`;
