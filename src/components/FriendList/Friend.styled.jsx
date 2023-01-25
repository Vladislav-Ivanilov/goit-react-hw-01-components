import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #504849;
  padding: 20px;

  margin-top: 80px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #877677;
  padding: 20px;
  width: 200px;
`;

export const Indicator = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
  margin: 0 15px;
`;

export const Image = styled.img`
  display: block;
  width: 70px;
`;

export const Title = styled.p`
  display: block;
  color: #141a35;
  font-size: 20px;
  padding-left: 15px;
`;
