import styled from 'styled-components';

export const Container = styled('div')`
  height: calc(100vh - 52.5px);
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-height: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
  }
`;
