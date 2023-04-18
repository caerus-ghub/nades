import styled from 'styled-components';

export const Container = styled('div')`
  height: calc(100vh - 52.5px);
  width: 100vw;
  position: relative;
  overflow: hidden;

  svg {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1 / 1;
  }
`;
