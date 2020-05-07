/**
 *
 * ColorPicker
 *
 */

import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';
import _ from 'lodash';

const PageWrapper = styled.div`
  padding: 75px;
`;

const PickerWrapper = styled.div`
  height: 350px;
  width: 400px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
`;

const Canvas = styled.canvas`
  display: inline-block;
  cursor: pointer;
  fill: none;
`;

const CurrentColor = styled.div`
  display: inline-block;
  height: 75px;
  width: 75px;
  border-radius: 75px;
  transition: background-color 0.25s ease;
  margin: 75px;
`;

const Eyeglass = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 65px;
  border: 1px solid white;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px 0 rgba(118, 117, 117, 0.14);
  pointer-events: none;
`;

let context = null;

function ColorPicker() {
  // refs
  const canvasRef = useRef();
  const eyeglassRef = useRef();
  const currentColorRef = useRef();

  // state
  const [hue, setHue] = useState('#BAD577');

  // methods
  /**
   * Sets background color(s) and positions eyeglass
   * @param {object} position { x, y } position required
   * @param {*} color rgb color string optional - will be created from position if none is provided
   */
  const setNewColor = (position, color = undefined) => {
    const { x, y } = position;
    let backgroundColor = color;

    if (!backgroundColor) {
      const colorData = context.getImageData(x, y, 1, 1).data;
      const [r, g, b] = colorData;
      backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    const transform = `translate(${x - 8}px, ${y - 8}px)`;

    eyeglassRef.current.style.transform = transform;
    eyeglassRef.current.style.backgroundColor = backgroundColor;
    currentColorRef.current.style.backgroundColor = backgroundColor;
  };

  /**
   * Gets the x,y position of the user's click on the canvas
   * @param {string} event the onclick event
   */
  const getMousePosition = event => {
    const {
      left,
      top,
      width,
      height,
    } = canvasRef.current.getBoundingClientRect();
    const x = _.clamp(event.pageX - left, 0, width - 1);
    const y = _.clamp(event.pageY - top, 0, height - 1);
    setNewColor({ x, y });
  };

  /**
   * Find the x,y position on the canvas given a color string
   * @param {string} color a hex, rgb(a), or hsl color string
   */
  const findColorPosition = color => {
    // console.time('findColor');
    const { width, height } = canvasRef.current;
    const colorValues = Color(color)
      .rgb()
      .array();
    const imageData = _.chunk(
      context.getImageData(0, 0, width, height).data,
      4,
    );
    const positionIndex = _.findIndex(imageData, colorData => {
      const currentValues = [colorData[0], colorData[1], colorData[2]];
      return _.isEqual(colorValues, currentValues);
    });

    const x = positionIndex % width;
    const y = positionIndex / width;
    setNewColor({ x, y }, color);
    // console.timeEnd('findColor');
  };

  // listeners
  const onMousemove = event => {
    getMousePosition(event);
  };

  const onMousedown = event => {
    event.persist();
    getMousePosition(event);
    window.addEventListener('mousemove', onMousemove);
    window.addEventListener('mouseup', onMouseup);
  };

  const onMouseup = () => {
    window.removeEventListener('mousemove', onMousemove);
    window.removeEventListener('mouseup', onMouseup);
  };

  // lifecycle - mount/unmount
  const useMountEffect = () =>
    useEffect(() => {
      context = canvasRef.current && canvasRef.current.getContext('2d');

      return () => {
        window.removeEventListener('mouseup', onMouseup);
      };
    }, []);
  useMountEffect();

  // update
  useEffect(() => {
    const hueGradient = context.createLinearGradient(0, 0, 350, 0);
    hueGradient.addColorStop(1, hue);
    hueGradient.addColorStop(0, 'rgba(255,255,255,1)');

    // TODO: move greyscale to its own component bc it doesn't need to change
    const greyscaleGradient = context.createLinearGradient(0, 400, 0, 0);
    greyscaleGradient.addColorStop(1, 'rgba(0,0,0,0)');
    // don't go all the way to 0 to make sure bottom is true black
    greyscaleGradient.addColorStop(0.15, 'rgba(0,0,0,1)');

    context.clearRect(0, 0, 400, 350);
    context.fillStyle = hueGradient;
    context.fillRect(0, 0, 400, 350);
    context.fillStyle = greyscaleGradient;
    context.fillRect(0, 0, 400, 350);

    const testColor = 'rgb(94, 103, 71)';
    findColorPosition(testColor);
  }, [hue]);

  return (
    <PageWrapper>
      <PickerWrapper>
        <Canvas
          width="400"
          height="350"
          ref={canvasRef}
          onMouseDown={onMousedown}
        />
        <Eyeglass ref={eyeglassRef} />
      </PickerWrapper>
      <CurrentColor ref={currentColorRef} to="/user/login" />
    </PageWrapper>
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;
