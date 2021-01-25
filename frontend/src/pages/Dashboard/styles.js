import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.div`
  margin: 30px 0 20px;
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 20px;
    color: #444;
  }

  aside {
    display: flex;
    flex-direction: row;

    button {
      width: 100px;
      height: 36px;

      background: #1e90ff;
      margin-left: 15px;
      color: #fff;
      font-weight: medium;

      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#1e90ff')};
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 5px;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      top: 176px;
      left: 147px;
      color: #666;
    }

    input {
      height: 36px;
      width: 230px;
      padding-left: 30px;
      padding-right: 5px;
      color: #666;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  }

  button {
    display: flex;
    width: 120px;
    height: 36px;
    justify-content: center;
    align-items: center;
    background: #7d40e7;

    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }

    strong {
      color: #fff;
      margin-left: 5px;
      font-size: 14px;
      font-weight: medium;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
