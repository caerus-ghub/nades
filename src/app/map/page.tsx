"use client"

import { useRef } from 'react';

import MapInfernoIcon from '/public/de_inferno.svg';

import { Container } from './styles';
import useMapNavigation from './hooks/useMapNavigation';

const Page = () => {
  const mapContainerRef = useRef(null);

  const { handleZoom } = useMapNavigation(mapContainerRef);

  return (
    <Container ref={mapContainerRef} onWheel={handleZoom}>
      <MapInfernoIcon />
    </Container>
  );
};

export default Page;
