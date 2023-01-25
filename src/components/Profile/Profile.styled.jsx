import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;

  background-color: #877677;

  margin: 0 auto;
  margin-top: 40px;
`;

export const ProfileBlock = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  display: block;
  width: 150px;
  padding: 20px 50px;
  border-radius: 50%;
`;

export const UserInfo = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: #fff;
`;

export const ProfileList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const SocialItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  text-transform: capitalize;
  background-color: #34568a;
  border: solid 1px #fff;
`;

export const Counter = styled.samp`
  margin-bottom: 5px;
`;
