import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;

  width: fit-content;
  background-color: #877677;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  background-color: ${({ title }) => {
    switch (title) {
      case 'docx':
        return 'blue';
      case 'pdf':
        return 'red';
      case 'mp3':
        return 'green';
      case 'psd':
        return 'orange';
      default:
        return 'blue';
    }
  }};
`;

export const Value = styled.span`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #fff;
`;
