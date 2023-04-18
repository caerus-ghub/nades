import { useEffect, useState, WheelEvent, RefObject } from 'react';

// TODO: add type
const useMapNavigation = (mapContainerRef: RefObject<any>, mapRef: RefObject<any>) => {
  const [_, triggerRerender] = useState(false);

  const $map = mapContainerRef.current?.querySelector('svg') || null;

  const handleZoom = (e: WheelEvent) => {
    console.log('--| handle - zoom:', e);

    if (!$map) {
      console.error(' -| error: ref is empty:', mapContainerRef);
      return;
    }

    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    };
  };

  const zoomIn = () => {
    console.log('--| handle - zoom in');

    const mapRect = $map.getBoundingClientRect();

    console.log(' -| map rect:', mapRect);

    $map.style.height = `${mapRect.height + 100}px`;
    $map.style.width = `${mapRect.width + 100}px`;
  };

  const zoomOut = () => {
    console.log('--| handle - zoom out');

    const mapRect = $map.getBoundingClientRect();

    console.log(' -| map rect:', mapRect);

    $map.style.height = `${mapRect.height - 100}px`;
    $map.style.width = `${mapRect.width - 100}px`;
  };

  useEffect(() => {
    console.log('--| effect - init map navigation:');

    triggerRerender((prev) => !prev);
  }, [mapContainerRef.current]);

  return {
    handleZoom,
  };
};

export default useMapNavigation;
