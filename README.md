<h1>Simon Says Color Game<h1>
<h2>Overview</h2>
<p>The Simon Says Color Game is a memory-based game where players replicate a sequence of colors displayed by the system. With every level, the sequence becomes longer, challenging the player's memory and concentration.</p>

<h2>Features</h2>
<ul>
    <li><strong>Dynamic Gameplay:</strong> The sequence grows longer with every level.</li>
    <li><strong>Interactive UI:</strong> Buttons flash to indicate the sequence, and players click to replicate it.</li>
    <li><strong>Score Display:</strong> Players are shown their final score after a game-over.</li>
    <li><strong>Responsive Design:</strong> The game provides feedback for correct and incorrect inputs.</li>
</ul>

<h2>How to Play</h2>
<ol>
    <li>Start the game by pressing any key.</li>
    <li>Watch the color sequence displayed on the buttons.</li>
    <li>Click the buttons in the correct order to replicate the sequence.</li>
    <li>Advance to the next level if you successfully complete the sequence.</li>
    <li>The game ends if you click the wrong button. Your score is displayed, and you can restart the game by pressing any key.</li>
</ol>

<h2>Code Explanation</h2>
<h3>Main Components</h3>
<ol>
    <li><strong>Variables:</strong>
        <ul>
            <li><code>gameSeq</code>: Stores the system-generated color sequence.</li>
            <li><code>userSeq</code>: Stores the player's input sequence.</li>
            <li><code>bnts</code>: Array containing button colors ("red", "yellow", "blue", "green").</li>
            <li><code>started</code>: Tracks whether the game has started.</li>
            <li><code>level</code>: Tracks the current level.</li>
        </ul>
    </li>
    <li><strong>Event Listeners:</strong>
        <ul>
            <li>Keypress listener to start the game.</li>
            <li>Click listeners on buttons to capture user input.</li>
        </ul>
    </li>
    <li><strong>Functions:</strong>
        <ul>
            <li><code>btnFlash(btn)</code>: Flashes the button to indicate the sequence.</li>
            <li><code>levelup()</code>: Advances to the next level and generates the next color in the sequence.</li>
            <li><code>check()</code>: Validates the user's input sequence.</li>
            <li><code>bntpress()</code>: Handles button click events.</li>
            <li><code>reset()</code>: Resets the game state after a game-over.</li>
        </ul>
    </li>
</ol>

<h3>Gameplay Flow</h3>
<ul>
    <li><strong>Start Game:</strong> Triggered by a keypress. Initializes the game and starts level 1.</li>
    <li><strong>Level Up:</strong> Generates a new random color, flashes it, and adds it to the sequence.</li>
    <li><strong>User Input:</strong> Captures user clicks and validates the input sequence.</li>
    <li><strong>Game Over:</strong> Ends the game on incorrect input, displays the score, and resets the game.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone this repository to your local machine:
        <pre><code>git clone https://github.com/your-username/simon-says-color-game.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd simon-says-color-game</code></pre>
    </li>
    <li>Open the <code>index.html</code> file in your browser to start the game.</li>
</ol>

<h2>File Structure</h2>
<ul>
    <li><code>index.html</code>: The main HTML file containing the game structure.</li>
    <li><code>style.css</code>: Contains styles for the buttons, background, and game layout.</li>
    <li><code>app.js</code>: Implements the game logic and interactivity.</li>
</ul>

<h2>Future Enhancements</h2>
<ul>
    <li>Add sound effects for button clicks and sequences.</li>
    <li>Implement difficulty levels (e.g., faster sequences).</li>
    <li>Add a high score tracker.</li>
    <li>Make the game mobile-friendly.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<hr>
<p>Enjoy playing the Simon Says Color Game and test your memory skills!</p>
