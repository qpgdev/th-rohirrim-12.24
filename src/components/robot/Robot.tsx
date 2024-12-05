export type RobotDirection = 'up' | 'down' | 'left' | 'right';

interface RobotProps {
    robotImage: JSX.Element;
}

function Robot({ robotImage }: RobotProps): JSX.Element {
  
  return (
    <div>
      {robotImage}
    </div>
  );
}

export default Robot;
