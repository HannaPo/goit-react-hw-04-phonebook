import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 225px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 2px;
`;

export const Button = styled.button`
  width: 125px;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;

  &:hover {
    background-color: #3291f7;
  }
`;
