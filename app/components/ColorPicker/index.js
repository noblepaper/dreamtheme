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
  border: 1px solid #e4e4e4;
  display: inline-block;
`;

const CurrentColor = styled.div`
  display: inline-block;
  height: 75px;
  width: 75px;
  border-radius: 75px;
  background-color: ${props => props.fill};
  transition: background-color 0.25s ease;
`;

let context = null;

function ColorPicker() {
  // refs
  const canvasRef = useRef();

  // state
  const [hue, setHue] = useState('#BAD577');
  const [currentColor, setCurrentColor] = useState(hue);

  // lifecycle
  const useMountEffect = () =>
    useEffect(() => {
      context = canvasRef.current && canvasRef.current.getContext('2d');
    });
  useMountEffect();

  useEffect(() => {
    const hueGradient = context.createLinearGradient(0, 0, 350, 0);
    hueGradient.addColorStop(1, hue);
    hueGradient.addColorStop(0, 'rgba(255,255,255,1)');

    // TODO: move greyscale to its own component bc it doesn't need to change
    const greyscaleGradient = context.createLinearGradient(0, 400, 0, 0);
    greyscaleGradient.addColorStop(1, 'rgba(255,255,255,0)');
    greyscaleGradient.addColorStop(0, 'rgba(0,0,0,1)');

    context.clearRect(0, 0, 400, 350);
    context.fillStyle = hueGradient;
    context.fillRect(0, 0, 400, 350);
    context.fillStyle = greyscaleGradient;
    context.fillRect(0, 0, 400, 350);
  }, [hue]);

  // methods
  const pickAColor = event => {
    event.persist();
    const { left, top } = canvasRef.current.getBoundingClientRect();
    const x = event.pageX - left;
    const y = event.pageY - top;
    const colorData = context.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = colorData;
    const newColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    setCurrentColor(newColor);
  };

  return (
    <>
      <Canvas width="400" height="350" ref={canvasRef} onClick={pickAColor} />
      <CurrentColor fill={currentColor} />
    </>
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;
