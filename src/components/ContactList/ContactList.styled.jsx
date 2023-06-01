import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  max-width: 300px;
  font-size: 14px;
  line-height: 1.5;
  gap: 10px;
  `;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  font-size: small;
  line-height: 1.25;
`;

export const Button = styled.button`
  font-size: 10px;
  padding: 0.4rem;
  text-align: center;
  border: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
        color: #fff;
  }
`;
