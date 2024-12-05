import reactImg from '@/assets/react.svg';
import { useState, useEffect } from 'react';
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

type RobotDirection = 'North' | 'South' | 'West' | 'East';

let hasBeenPlaced: boolean = false;

function Table(): JSX.Element {
  const [robotPosition, setRobotPosition] = useState<string | null>(null); // Position of the robot in the format '[x,y]'
  const [direction, setDirection] = useState<RobotDirection>('North'); // Direction of the robot

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

  // Handle placing the robot
  const handleTileClick = (coords: string) => {
    hasBeenPlaced = true;
    setRobotPosition(coords);
  };

  // Move the robot based on its direction
  const moveRobot = () => {
    if (robotPosition) {
      let [x, y] = robotPosition.slice(1, -1).split(',').map(Number);
      
      switch (direction) {
        case 'North':
          if (y < 4) y += 1; // Move up
          break;
        case 'South':
          if (y > 0) y -= 1; // Move down
          break;
        case 'West':
          if (x > 0) x -= 1; // Move left
          break;
        case 'East':
          if (x < 4) x += 1; // Move right
          break;
      }
      setRobotPosition(`[${x},${y}]`);
    }
  };

  // Turn the robot left
  const turnLeft = () => {
    if (hasBeenPlaced === true) {
      switch (direction) {
        case 'North':
          setDirection('West');
          break;
        case 'West':
          setDirection('South');
          break;
        case 'South':
          setDirection('East');
          break;
        case 'East':
          setDirection('North');
          break;
      }
    } else {
      alert('Robot has not been placed.')
    }
  };

  // Turn the robot right
  const turnRight = () => {
    if (hasBeenPlaced === true) {
      switch (direction) {
        case 'North':
          setDirection('East');
          break;
        case 'East':
          setDirection('South');
          break;
        case 'South':
          setDirection('West');
          break;
        case 'West':
          setDirection('North');
          break;
      } 
    } else {
      alert('Robot has not been placed.')
    }
  };

  // Report the robot's position
  const reportPosition = (robotPosition: string | null) => {
    if (robotPosition) {
      alert(`Robot is at coordinates ${robotPosition} and facing ${direction}.`);
    } else {
      alert("Robot is not placed on the grid yet.");
    }
  };

  // Render the relevant image based on the direction of the robot
  const getRobotImage = (direction: RobotDirection): JSX.Element => {
    switch (direction) {
      case 'North':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&uarr;</p>
            <img src={reactImg} alt="Robot North" />
          </div>
        );
      case 'South':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&darr;</p>
            <img src={reactImg} alt="Robot South" />
          </div>
        );
      case 'West':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#8592;</p>
            <img src={reactImg} alt="Robot West" />
          </div>
        );
      case 'East':
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&#8594;</p>
            <img src={reactImg} alt="Robot East" />
          </div>
        );
      default:
        return (
          <div>
            <p style={tableStyles.robotTextStyle}>&uarr;</p>
            <img src={reactImg} alt="Robot North" />
          </div>
        );
    }
  };

  // Listen for keydown events to handle arrow keys for turning the robot
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        turnLeft();
      } else if (event.key === 'ArrowRight') {
        turnRight();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        moveRobot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction, robotPosition]);
  

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
            {/* DEBUG: This ITEM is for debugging the coords*/}
            {/* {item} */}
            {/* If the robot is on this tile, render its image */}
            {robotPosition === item && getRobotImage(direction)}
          </div>
        ))}
      </div>

      {/* Buttons to move the robot */}
      <div>
        <Button
          style={tableStyles.defaultButtonStyle}
          text="Left"
          onClick={turnLeft}
        />
        <Button
          style={tableStyles.defaultButtonStyle}
          text="Move"
          onClick={moveRobot}
        />
        <Button
          style={tableStyles.defaultButtonStyle}
          text="Right"
          onClick={turnRight}
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
