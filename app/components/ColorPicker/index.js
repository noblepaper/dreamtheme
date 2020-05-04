/**
 *
 * ColorPicker
 *
 */

import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 75px;
`;

const PickerWrapper = styled.div`
  height: 350px;
  width: 400px;
  position: relative;
  display: inline-block;
`;

const Canvas = styled.canvas`
  border-radius: 4px;
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
  margin: 75px;
`;

const Eyeglass = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 65px;
  border: 1px solid white;
  background-color: ${props => props.fill};
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px 0 rgba(118, 117, 117, 0.14);
  transform: translate(${props => props.x}px, ${props => props.y}px);
  transition: background-color 0.25s ease, transform 0.15s ease;
`;

let context = null;

function ColorPicker() {
  // refs
  const canvasRef = useRef();

  // state
  const [hue, setHue] = useState('#BAD577');
  const [{ color, x, y }, pickNewColor] = useState({
    color: hue,
    x: 0,
    y: 0,
  });

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
    const canvasX = event.pageX - left;
    const canvasY = event.pageY - top;
    const colorData = context.getImageData(canvasX, canvasY, 1, 1).data;
    const [r, g, b, a] = colorData;

    const newColor = {
      color: `rgba(${r}, ${g}, ${b}, ${a})`,
      x: canvasX,
      y: canvasY,
    };

    pickNewColor(newColor);
  };

  return (
    <PageWrapper>
      <PickerWrapper>
        <Canvas width="400" height="350" ref={canvasRef} onClick={pickAColor} />
        <Eyeglass fill={color} x={x - 8} y={y - 8} />
      </PickerWrapper>
      <CurrentColor fill={color} />
    </PageWrapper>
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;
