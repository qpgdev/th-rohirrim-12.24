import reactImg from '@/assets/react.svg';
import { useState } from 'react';
import Robot, {RobotDirection} from '@/components/robot/Robot.tsx';
import Button from '@/components/button/Button.tsx';

const tableStyles = {
  containerStyle: {
    backgroundColor: '#322D31',
    border: '2px solid yellow',
    width: '784px',
    height: '794px',
    gap: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,

  textBoxStyle: {
    backgroundColor: '#373737',
    color: 'white',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '10px',
    width: '60%',
  } as React.CSSProperties,

  gridStyle: {
    backgroundColor: '#313339',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    margin: '40px',
    width: '60%',
    height: '60%',
  } as React.CSSProperties,

  tileStyle: {
    border: '1px solid #666666',
    color: 'white',
    boxSizing: 'border-box',
    position: 'relative',
  } as React.CSSProperties,

  robotTextStyle: {
    color: 'lightblue',
    margin: '0px'
  } as React.CSSProperties,
  
  defaultButtonStyle: {
    margin: '10px',
    background: 'teal',
    width: '80px'
  } as React.CSSProperties,

  reportButtonStyle: {
    background: '#313339',
    border: '1px solid teal',
    color: 'white',
    width: '100px'
  } as React.CSSProperties,
};

function Table(): JSX.Element {

  const [direction, setDirection] = useState<RobotDirection>('up');

  // Render the relevant image based on the direction of the robot
  const getImageForDirection = (direction: RobotDirection): JSX.Element => {
    switch (direction) {
      case 'up':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#9650; up</p> {/* Up Arrow */}
            <img src={reactImg} alt="Robot up" />
          </div>
        );
      case 'down':
        return (
          <div>
            <img src={reactImg} alt="Robot down" />
            <p style={tableStyles.robotTextStyle}>&#9660; down</p> {/* Down Arrow */}
          </div>
        );
      case 'left':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#8592; left</p> {/* Left Arrow */}
            <img src={reactImg} alt="Robot left" />
          </div>
        );
      case 'right':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#8594; right</p> {/* Right Arrow */}
            <img src={reactImg} alt="Robot right" />
          </div>
        );
      default:
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#9650; default</p>
            <img src={reactImg} alt="Robot default" />
          </div>
        );
    }
  };

  // Generate the coordinate array for the grid
  const generateCoordinates = () => {
    const coordinates: string[] = [];
    for (let y = 4; y >= 0; y--) {
      for (let x = 0; x < 5; x++) {
        coordinates.push(`[${x},${y}]`);
      }
    }
    return coordinates;
  };

  const tableTiles = generateCoordinates();

  // When a tile is clicked
  const handleTileClick = (coords: string) => {
    // Render the Robot within the clicked grid tile
    alert(`You clicked tile at coordinates: ${coords}`);
  };

  return (
    <div style={tableStyles.containerStyle}>
      <p style={tableStyles.textBoxStyle}>Click to place the robot, use the buttons or arrows to move</p>
      <div 
        className="table" 
        style={tableStyles.gridStyle}>
        {tableTiles.map((item, index) => (
            <div 
              key={index} 
              className="tileItem" 
              style={tableStyles.tileStyle}
              onClick={() => handleTileClick(item)}>
                {item}
            </div>
        ))}
      </div>
      <div>
        <Button 
          style={tableStyles.defaultButtonStyle}
          text="Left"
          onClick={() => console.log('Button clicked!')}
        />
        <Button 
          style={tableStyles.defaultButtonStyle}
          text="Move"
          onClick={() => console.log('Button clicked!')}
        />
        <Button 
          style={tableStyles.defaultButtonStyle}
          text="Right"
          onClick={() => console.log('Button clicked!')}
        />
      </div>
      <Button
        style={tableStyles.reportButtonStyle}
        text="Report"
        onClick={() => console.log('Button clicked!')}
      ></Button>
      <Robot robotImage={getImageForDirection(direction)}/>{/*TODO: Remove, should be spawned in*/}
    </div>
  );
}

export default Table;
