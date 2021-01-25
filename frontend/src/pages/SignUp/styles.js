import styled from 'styled-components';

export const App = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  /*
 form-control-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    label {
      margin-bottom: 15px;
    }
  }
  */
`;

export const PageContent = styled.div`
  width: 100%;
  padding: 10px 0 30px;
  background: #fff;
  border: 0;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      align-self: flex-start;
      margin-left: 21px;
      margin-bottom: 5px;

      &:last-child {
        margin-top: 20px;
      }
    }

    input {
      width: 95%;
      padding: 5px;
      border: 1px solid #eee;
      border-radius: 4px;
      color: #4f4f4f;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(30, 144, 255, 0.7);
      }
    }
  }
`;
