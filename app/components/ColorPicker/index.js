/**
 *
 * ColorPicker
 *
 */

import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Canvas = styled.canvas`
  margin: 50px;
  border-radius: 10px;
  /* background-color: red; */
  border: 1px solid #c4c4c4;
`;

let context = null;

function ColorPicker() {
  // refs
  const canvasRef = useRef();

  // state
  const [color, setColor] = useState('#BAD577');

  // lifecycle
  const useMountEffect = () =>
    useEffect(() => {
      context = canvasRef.current && canvasRef.current.getContext('2d');

      const hueGradient = context.createLinearGradient(0, 0, 350, 0);
      hueGradient.addColorStop(1, color);
      hueGradient.addColorStop(0, 'rgba(0,0,0,0)');

      const greyscaleGradient = context.createLinearGradient(0, 400, 0, 0);
      greyscaleGradient.addColorStop(1, 'rgba(255,255,255,0)');
      greyscaleGradient.addColorStop(0, 'rgba(0,0,0,1)');

      context.fillStyle = hueGradient;
      context.fillRect(0, 0, 400, 350);
      context.fillStyle = greyscaleGradient;
      context.fillRect(0, 0, 400, 350);
    });
  useMountEffect();

  const onCanvasClick = event => {
    event.persist();
    const { left, top } = canvasRef.current.getBoundingClientRect();
    const x = event.pageX - left;
    const y = event.pageY - top;
    const colorData = context.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = colorData;
    const newColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    const hueGradient = context.createLinearGradient(0, 0, 350, 0);
    hueGradient.addColorStop(1, newColor);
    hueGradient.addColorStop(0, 'rgba(0,0,0,0)');

    const greyscaleGradient = context.createLinearGradient(0, 400, 0, 0);
    greyscaleGradient.addColorStop(1, 'rgba(255,255,255,0)');
    greyscaleGradient.addColorStop(0, 'rgba(0,0,0,1)');

    context.fillStyle = hueGradient;
    context.fillRect(0, 0, 400, 350);
    context.fillStyle = greyscaleGradient;
    context.fillRect(0, 0, 400, 350);
  };

  return (
    <Canvas width="400" height="350" ref={canvasRef} onClick={onCanvasClick} />
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;
