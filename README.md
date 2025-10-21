# 🧠 Knowledge Quiz Hub

A modern, interactive quiz application that tests your knowledge across multiple categories. Challenge yourself with different questions every time you play!

![Quiz App Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🎯 Multiple Quiz Categories
- **🧪 Science** - Chemistry, Biology, Physics, and Astronomy
- **📚 History** - World History, Ancient Civilizations, and Historical Events
- **🌍 Geography** - Countries, Capitals, Rivers, and Landmarks
- **⚽ Sports** - Various Sports, Olympics, and Athletic Records
- **🎬 Entertainment** - Movies, TV Shows, Music, and Celebrity Facts
- **🧠 General Knowledge** - Mixed topics for well-rounded testing

### 🎲 Dynamic Question System
- **Unique Questions Every Time** - No repeated questions until all are used
- **Randomized Answers** - Answer options are shuffled for variety
- **36 High-Quality Questions** - 6 questions per category, regularly updated
- **5-Question Sessions** - Perfect length for quick knowledge tests

### 🏆 Scoring & Progress
- **Real-time Scoring** - Track your performance during the quiz
- **High Score Tracking** - Separate high scores for each category
- **Performance Percentage** - See your accuracy rate after each quiz
- **Local Storage** - Your scores are saved between sessions

### 🎨 Modern Interface
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Gradient Backgrounds** - Beautiful visual design with smooth animations
- **Interactive Elements** - Hover effects and smooth transitions
- **Timer with Animation** - 15-second countdown with visual feedback
- **Category Navigation** - Easy switching between different quiz types

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation
1. **Download the Files**
   ```
   quiz-app/
   ├── index.html
   ├── script.js
   ├── style.css
   └── README.md
   ```

2. **Run the Application**
   - Double-click on `index.html` to open in your default browser
   - Or right-click → "Open with" → Choose your preferred browser

### Alternative Setup
You can also serve the files using a local server:
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .
```

## 🎮 How to Play

1. **Select a Category** - Choose from 6 different knowledge areas
2. **Answer Questions** - You have 15 seconds per question
3. **Track Your Progress** - See your score in real-time
4. **Review Results** - Check your percentage and compare to your high score
5. **Play Again** - Try the same category or switch to a new one

## 📁 Project Structure

```
quiz-app/
│
├── index.html          # Main HTML structure
│   ├── Category selection interface
│   ├── Quiz container with timer
│   └── Score display area
│
├── script.js           # JavaScript functionality
│   ├── Question database (36 questions)
│   ├── Quiz logic and scoring
│   ├── Timer functionality
│   └── Local storage management
│
├── style.css           # Styling and animations
│   ├── Responsive grid layout
│   ├── Gradient backgrounds
│   ├── Button hover effects
│   └── Mobile-friendly design
│
└── README.md          # Project documentation
```

## 🛠️ Customization

### Adding New Questions
To add questions to any category, edit the `questionDatabase` object in `script.js`:

```javascript
science: [
    {
        question: "Your new question here?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: true },
            { text: "Option C", correct: false },
            { text: "Option D", correct: false }
        ]
    }
    // ... more questions
]
```

### Modifying Quiz Settings
You can customize various aspects in `script.js`:
- `questionsPerQuiz`: Change the number of questions per session
- `timeLeft`: Modify the timer duration (in seconds)
- Add new categories by extending the `questionDatabase` object

### Styling Changes
Customize the appearance in `style.css`:
- Color schemes: Modify the gradient backgrounds
- Layout: Adjust grid layouts and spacing
- Animations: Change transition effects and timings

## 🎯 Technical Features

- **Vanilla JavaScript** - No external dependencies
- **Local Storage API** - Persistent high score tracking
- **CSS Grid & Flexbox** - Modern, responsive layout
- **CSS Animations** - Smooth transitions and hover effects
- **Event-driven Architecture** - Clean, maintainable code structure

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Want to improve the quiz? Here are some ways to contribute:

1. **Add More Questions** - Expand any category with new, interesting questions
2. **Create New Categories** - Add specialized topics like Technology, Literature, etc.
3. **Improve Design** - Enhance the UI/UX with better animations or layouts
4. **Fix Bugs** - Report or fix any issues you encounter
5. **Add Features** - Implement new functionality like difficulty levels or multiplayer

### Contribution Guidelines
- Ensure questions are accurate and well-researched
- Follow the existing code style and structure
- Test on multiple browsers before submitting
- Include clear, factual questions with unambiguous correct answers

## 🎨 Screenshots

### Category Selection
![Category Selection Screen](https://via.placeholder.com/600x400/001e4d/ffffff?text=Category+Selection+Screen)

### Quiz Interface
![Quiz Interface](https://via.placeholder.com/600x400/003d82/ffffff?text=Quiz+Interface+with+Timer)

### Results Display
![Results Screen](https://via.placeholder.com/600x400/28a745/ffffff?text=Score+Results+Display)

## 🏅 Performance Stats

- **Fast Loading** - Loads in under 1 second
- **Lightweight** - Total size under 50KB
- **Responsive** - Adapts to any screen size
- **Accessible** - Keyboard navigation supported
- **Cross-platform** - Works on all modern devices

## 📝 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🙏 Acknowledgments

- Questions curated from reliable educational sources
- Icons and emojis enhance the user experience
- Modern web standards ensure broad compatibility
- Community feedback helps improve the quiz content

---

**Made with ❤️ for knowledge enthusiasts everywhere!**

*Test your knowledge, challenge your mind, and have fun learning!*