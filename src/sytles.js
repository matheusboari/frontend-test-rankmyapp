import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #24282f;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  width: 80%;
  height: 220px;
  background: #3d3e43;
  border-radius: 10px;
  margin: 10px 0;
  justify-self: center;
`;

export const Photo = styled.img`
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

export const Name = styled.h2`
  margin: 20px 0 0 20px;
  color: white;
`;
