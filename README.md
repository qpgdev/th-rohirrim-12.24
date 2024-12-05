# Toy Robot Simulator

## Running the App
Run the following commands in your CLI:
``` 
npm install
npm run dev
```
Navigate to [http://localhost:5173/].

Follow the testing instructions below:

## Test Instructions to Exercise the Application

- **Scenario 1: Basic Placement and Movement**
  1. Place the robot at the origin (0, 0).
  2. Move the robot forward.
  3. Report the robot’s position.
  4. Rotate the robot and move again.
  5. Report the robot’s new position.

- **Scenario 2: Edge Case**
  1. Place the robot at (0, 0).
  2. Rotate it and try to move it off the edge (ensure it does not fall off the table).
  3. Report the position to ensure it’s within bounds.

- **Scenario 3: Multiple Commands**
  1. Place the robot at a random position.
  2. Rotate it, move it, and rotate again.
  3. Report the position after each command to ensure correctness.

- **Scenario 4: Robot on Table and No Movement**
  1. Place the robot at (2, 2).
  2. Click REPORT without issuing any MOVE, LEFT, or RIGHT commands.
  3. Ensure the robot’s position is (2, 2) and facing North.

- **Scenario 5: Invalid Command Handling**
  1. Issue a PLACE command when the robot is already on the table.
  2. Ensure that the robot’s new position is correctly updated.
  3. Issue MOVE commands at the edges of the grid to test boundary behavior.

- **If I had more time...**
  1. Separate Robot logic into its own component.
  2. Move stylings into separate dir.
  3. Add unit / integration tests. 
