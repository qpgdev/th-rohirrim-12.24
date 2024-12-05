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
  // Initialize state to track robot's position and direction
  const [robotPosition, setRobotPosition] = useState<string | null>(null); // Position of the robot in the format '[x,y]'
  const [direction, setDirection] = useState<RobotDirection>('North'); // Direction of the robot

  // Render the relevant image based on the direction of the robot
  const getRobotImage = (direction: RobotDirection): JSX.Element => {
    switch (direction) {
      case 'North':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#9650; North</p>
            <img src={reactImg} alt="Robot North" />
          </div>
        );
      case 'South':
        return (
          <div>
            <img src={reactImg} alt="Robot South" />
            <p style={tableStyles.robotTextStyle}>&#9660; South</p>
          </div>
        );
      case 'West':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#8592; West</p>
            <img src={reactImg} alt="Robot West" />
          </div>
        );
      case 'East':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#8594; East</p>
            <img src={reactImg} alt="Robot East" />
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

  // When a tile is clicked, update the robot's position
  const handleTileClick = (coords: string) => {
    setRobotPosition(coords); // Update the robot's position on tile click
  };

  const reportPosition = (robotPosition: string | null) => {
    if (robotPosition) {
      alert(`Robot is at coordinates ${robotPosition} and facing ${direction}.`);
    } else {
      alert("Robot is not placed on the grid yet.");
    }
  };

  return (
    <div style={tableStyles.containerStyle}>
      <p style={tableStyles.textBoxStyle}>Click to place the robot, use the buttons or arrows to move</p>
      <div className="table" style={tableStyles.gridStyle}>
        {tableTiles.map((item, index) => (
          <div
            key={index}
            className="tileItem"
            style={tableStyles.tileStyle}
            onClick={() => handleTileClick(item)}
          >
            {item}
            {/* If the robot is on this tile, render its image */}
            {robotPosition === item && <Robot robotImage={getRobotImage(direction)} />}
          </div>
        ))}
      </div>

      {/* Buttons to move the robot */}
      <div>
        <Button
          style={tableStyles.defaultButtonStyle}
          text="Left"
          onClick={() => console.log('Left button clicked!')}
        />
        <Button
          style={tableStyles.defaultButtonStyle}
          text="Move"
          onClick={() => console.log('Move button clicked!')}
        />
        <Button
          style={tableStyles.defaultButtonStyle}
          text="Right"
          onClick={() => console.log('Right button clicked!')}
        />
      </div>
      <Button
        style={tableStyles.reportButtonStyle}
        text="Report"
        onClick={() => reportPosition(robotPosition)}
      />
    </div>
  );
}

export default Table;
