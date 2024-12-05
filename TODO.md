# Components
- [X] Create the background component
- [X] Create the 5x5 grid using the tile component
- [X] Create the robot
- [X] Create a button component
- [X] Create the LEFT button
- [X] Create the RIGHT button
- [X] Create the MOVE button
- [X] Create an alert that displays the coordinates
- [X] Create the textbox

# Functionality
- [X] The first valid command is a PLACE command. Subsequent commands can be issued in any order, including another PLACE command (i.e. you can click another space and it would place the original toy robot on that space).
- [X] Clicking on a table space will PLACE the robot on the table at the selected position (using x, y coordinates) facing North.
- [] The robot can move freely on the tabletop but cannot fall off.
- [X] The origin (0, 0) is at the SOUTHWEST corner of the table (bottom left).
- [] Clicking MOVE will move the toy robot one space forward in the direction it is currently facing.
- [] Clicking LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- [X] Clicking REPORT will announce the X,Y position and F (facing direction) of the robot.
- [X] A robot not on the table ignores commands.
- [] Commands can be issued via buttons on the page or arrow keys 
- [X] Provide test instructions to exercise the application.

# Testing

## Component Tests

- [ ] **Background Creation**
  - Test if the background is created correctly and appears on the screen.

- [ ] **Tile Component**
  - Test that each individual tile is rendered as part of the grid.
  - Test if the tile correctly responds to being clicked (or selected).

- [ ] **5x5 Grid Creation**
  - Test if the grid is correctly populated with 5x5 tiles.
  - Test if each tile is clickable and responds to user interactions (e.g., placing the robot).

- [ ] **Robot Creation**
  - Test if the robot is initialized properly when placed on the grid.
  - Test if the robot's default position is (0, 0), facing North.

- [ ] **Button Component (Generic)**
  - Test if buttons are rendered and interactive.
  - Test if the button components are clickable (e.g., LEFT, RIGHT, MOVE, REPORT).

- [ ] **LEFT Button**
  - Test that clicking the LEFT button correctly rotates the robot 90 degrees to the left.
  - Ensure the rotation is consistent, and the facing direction changes accordingly.

- [ ] **RIGHT Button**
  - Test that clicking the RIGHT button correctly rotates the robot 90 degrees to the right.
  - Ensure the robot’s facing direction changes correctly.

- [ ] **MOVE Button**
  - Test if clicking the MOVE button moves the robot forward in its current facing direction.
  - Ensure the robot does not move off the grid when it reaches the edge.

- [ ] **X, Y Component**
  - Test if the X, Y component tracks the robot’s position correctly after each movement or rotation.
  - Ensure the correct coordinates and facing direction are displayed when the robot is on the grid.

## Functionality Tests

- [ ] **PLACE Command (First Command)**
  - Test that the robot can be placed at the correct position (e.g., x=0, y=0) when a PLACE command is issued.
  - Verify that the robot is initially facing North after the PLACE command.

- [ ] **Subsequent PLACE Commands**
  - Test that subsequent PLACE commands correctly place the robot in the new position with the correct facing direction (North by default).
  - Ensure that placing the robot on the grid again does not affect the previous robot state.

- [ ] **Table Boundaries (Prevent Robot from Falling Off)**
  - Test that the robot cannot fall off the table. Ensure the robot cannot move off the grid.
  - Verify that the robot stops at the edges of the table (bounds check for x and y coordinates).

- [ ] **MOVE Command**
  - Test that the robot moves one space forward in the direction it is currently facing.
  - Ensure the robot doesn't move outside the table's boundaries when the MOVE button is clicked.

- [ ] **LEFT Command**
  - Test that the robot rotates 90 degrees left without changing its position.
  - Verify that the robot’s facing direction changes as expected when the LEFT button is clicked.

- [ ] **RIGHT Command**
  - Test that the robot rotates 90 degrees right without changing its position.
  - Ensure the facing direction changes correctly.

- [ ] **REPORT Command**
  - Test that the REPORT button outputs the current position (x, y) and facing direction (F) of the robot.
  - Ensure that the REPORT button works correctly even if the robot has moved or rotated.

- [ ] **No Commands When Robot Is Not on the Table**
  - Test that when the robot is not placed on the table, no MOVE, LEFT, RIGHT, or REPORT commands have any effect.

- [ ] **Multiple Commands in Any Order**
  - Test that multiple commands (e.g., MOVE, LEFT, RIGHT, PLACE) can be issued in any order and work as expected.
  - Ensure the robot’s state is correctly updated after each command, including movement and rotation.

- [ ] **Arrow Key Support**
  - Test if the robot responds correctly to arrow key inputs for MOVE, LEFT, and RIGHT commands (if implemented as a feature).
  - Ensure that the robot behaves consistently with button inputs.

## Edge Cases

- [ ] **Robot at Table Edge**
  - Test if the robot behaves correctly when it’s at the edge of the grid (e.g., it should not fall off the table when moving).

- [ ] **Invalid Commands**
  - Test how the system responds to invalid commands (e.g., MOVE when the robot is at the edge, or a non-existent PLACE command).

- [ ] **Multiple Robot Placements**
  - Test that placing the robot multiple times works correctly and updates the position without issues.

## Misc
- [] App.tsx Table import >> Cannot find module '@/components/table/Table.tsx' or its corresponding type declarations.
- [] Delete App.css and remove import