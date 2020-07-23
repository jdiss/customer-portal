import styled from "styled-components";

export const Field = styled.div`
  margin: 1rem 0;
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
    padding-left: 0.8em;

    &:hover {
      cursor: text;
    }
  }

  & input {
    border: 1px solid var(--shade-color);
    font-size: 1.2rem;
    padding: 0.6rem;
    background: transparent;
    transition: 0.2s;
    width: 100%;
    border-radius: 20px;

    &:focus {
      outline: none;
    }

    &:valid {
      border-color: var(--shade-color);
    }

    &:focus + label,
    &.hasInput + label {
      top: -1.5rem;
      font-size: 0.9rem;
    }
  }
`;
