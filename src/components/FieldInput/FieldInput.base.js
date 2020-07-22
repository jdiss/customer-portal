import styled from "styled-components";

export const Field = styled.div`
  margin: 1.5rem 0;
  position: relative;

  & label {
    position: absolute;
    top: 0.8rem;
    left: 0;
    display: block;
    font-size: 1rem;
    transition: 0.2s ease-out;
    opacity: 0.5;
    will-change: top, font-size;

    &:hover {
      cursor: text;
    }
  }

  & input {
    border: 1px solid #fff;
    font-size: 1.2rem;
    padding: 0.6rem;
    padding-left: 0;
    background: transparent;

    transition: 0.2s;
    width: 100%;
    border-radius: 0;

    &:focus {
      outline: none;
    }

    &:valid {
      border-color: #444;
    }

    &:focus + label,
    &.hasInput + label {
      top: -1.5rem;
      font-size: 0.9rem;
    }
  }
`;
