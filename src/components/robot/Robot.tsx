export type RobotDirection = 'North' | 'South' | 'West' | 'East';

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
