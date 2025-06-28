# Simon Game 🎮

A modern, responsive recreation of the classic Simon memory game built with vanilla JavaScript and jQuery. Test your memory by following increasingly complex sequences of colors and sounds!

## 🎯 Game Description

Simon is a memory game where players must repeat a growing sequence of colored button presses. Each round adds a new color to the sequence, making it progressively more challenging. The game continues until you make a mistake!

## 🚀 Features

- **Progressive Difficulty**: Each level adds one more step to the sequence
- **Visual & Audio Feedback**: Buttons light up and play sounds when activated
- **Game Over Animation**: Screen flashes red when you make a mistake
- **Keyboard Controls**: Press 'A' to start or restart the game
- **Click Controls**: Click the colored buttons to play your sequence
- **Level Tracking**: Display shows your current level progress

## 🎮 How to Play

1. Press the **'A' key** to start the game
2. Watch and listen as Simon shows you a sequence of colors
3. **Click the colored buttons** in the same order Simon showed you
4. Successfully complete the sequence to advance to the next level
5. The sequence gets longer with each level - how far can you go?
6. Make a mistake and it's game over! Press any key to restart.

## 🛠️ Technologies Used

- **HTML5**: Game structure and layout
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Game logic with modern class-based architecture
- **jQuery**: DOM manipulation and event handling
- **Google Fonts**: Custom "Press Start 2P" retro gaming font

## 📁 Project Structure

```
simon-game/
├── index.html          # Main HTML file
├── styles.css          # Game styling and animations
├── game.js            # Refactored game logic (ES6 class)
├── sounds/            # Audio files directory
│   ├── red.mp3        # Red button sound
│   ├── blue.mp3       # Blue button sound
│   ├── green.mp3      # Green button sound
│   ├── yellow.mp3     # Yellow button sound
│   └── wrong.mp3      # Game over sound
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## 🎵 Audio Requirements

Make sure to add the following sound files to the `sounds/` directory:
- `red.mp3`
- `blue.mp3` 
- `green.mp3`
- `yellow.mp3`
- `wrong.mp3`

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/simon-game.git
   cd simon-game
   ```

2. **Add audio files**: Place your `.mp3` sound files in the `sounds/` directory

3. **Open in browser**: Simply open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### GitHub Pages Deployment

This game is designed to work perfectly with GitHub Pages:

1. Push your code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Your game will be available at: `https://yourusername.github.io/repository-name`

## 🎨 Game Design

- **Color Scheme**: Deep blue background with bright, contrasting button colors
- **Typography**: Retro "Press Start 2P" font for nostalgic gaming feel
- **Layout**: Centered 2x2 grid of colored buttons
- **Animations**: Smooth fade effects and button press feedback
- **Responsive**: Works on desktop and mobile devices

## 🔧 Code Architecture

The game is built using modern JavaScript practices:

- **ES6 Classes**: Clean, object-oriented game structure
- **Event-Driven**: Responsive to both keyboard and mouse inputs
- **Error Handling**: Graceful audio loading with fallback error messages
- **Separation of Concerns**: Clear division between game logic, UI updates, and event handling

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] High score tracking
- [ ] Difficulty levels (speed variations)
- [ ] Sound volume controls
- [ ] Mobile touch improvements
- [ ] Colorblind accessibility options
- [ ] Social sharing features

---

**Enjoy playing Simon!** 🎮 How many levels can you complete?