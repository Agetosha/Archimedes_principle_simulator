<div align="center">

# 🌊 Archimedes' Principle Simulator

### Interactive Web Application — Visualize Floating & Sinking Conditions

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-3DA639?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

</div>

---

## 📖 About

**Archimedes' Principle Simulator** is an interactive web application that helps users understand the conditions for floating and sinking bodies. It calculates buoyancy forces, submerged volume, and provides a real-time visual animation of an object in liquid.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📐 Input Parameters | Enter density, mass, dimensions of object and liquid |
| 🔢 Calculations | Computes Archimedes force, submerged height, displaced volume |
| 🎨 Visual Feedback | Real-time animation showing object floating/sinking |
| 📊 Results Display | Clear output of all physical quantities |
| 🎯 Educational | Perfect for physics students and enthusiasts |

---

## 🛠️ Tech Stack

```
🌐 HTML5 + CSS3
⚡ JavaScript + jQuery
🎨 Thymeleaf (Server-side rendering)
🖌️ Pure CSS Animations
```

---

## 🧠 How It Works

### 1. User Input
- **Density of Object** (kg/m³)
- **Density of Liquid** (kg/m³)
- **Mass of Object** (kg)
- **Length & Width** (m)

### 2. Calculations
The application computes:
- **Archimedes' Force** — Buoyancy force acting on the object
- **Submerged Height** — How deep the object sinks
- **Displaced Volume** — Volume of liquid pushed aside
- **Floating Condition** — Determines if object floats, sinks, or is suspended

### 3. Real-time Animation
- Object visually moves up/down based on calculations
- Liquid level adjusts dynamically
- Interactive and engaging learning experience

---

## 🚀 Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, etc.)
- Internet connection for jQuery CDN
- (Optional) Java + Spring Boot for Thymeleaf backend

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/archimedes-simulator.git
cd archimedes-simulator
```

### 2. Open the application

#### Simple (static files):
```bash
# Open index.html directly in your browser
open index.html
```

#### With Thymeleaf (Spring Boot):
```bash
./mvnw spring-boot:run
# Then visit http://localhost:8080
```

### 3. Enter parameters and click "Compute"

---

## 📊 Physics Formulas Used

| Quantity | Formula | Description |
|----------|---------|-------------|
| **Archimedes' Force** | Fₐ = ρₗ × g × V_sub | Buoyant force equals weight of displaced fluid |
| **Submerged Volume** | V_sub = m / ρₒ | Volume of object submerged |
| **Submerged Height** | h_sub = V_sub / (L × W) | Height of object below liquid surface |
| **Floating Condition** | ρₒ < ρₗ → Floats | Object floats if less dense than liquid |

---

## 🎮 Interactive Controls

- **Density of Object** — Controls how heavy/dense the object is
- **Density of Liquid** — Water, oil, mercury presets
- **Mass** — Affects volume and buoyancy
- **Dimensions** — Changes shape and submerged height

---

## 📸 Screenshots

> *Add screenshots of your application here*

```
┌─────────────────────────────────────┐
│  🌊 Archimedes' Principle Simulator │
│                                      │
│  [Form Inputs]     [Animation]      │
│  - Density          ┌──────────┐   │
│  - Mass             │  🟦🟦🟦   │   │
│  - Dimensions       │  🟦⬜🟦   │   │
│  [Compute]          │  🟦🟦🟦   │   │
│                      └──────────┘   │
│  Results:                           │
│  - Force: 9.81 N                    │
│  - Submerged: 0.5 m                 │
│  - Floats ✅                        │
└─────────────────────────────────────┘
```

---

## 🔧 Customization

### Add presets:
```javascript
// In response.js
const presets = {
    water: { density: 1000 },
    oil: { density: 800 },
    mercury: { density: 13600 }
};
```

### Change animation speed:
```css
/* In animation.js */
const animationSpeed = 0.02; // Lower = smoother
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙌 Acknowledgments

- Archimedes of Syracuse — the original genius
- Physics educators and students for inspiration
- jQuery community for making DOM manipulation easy

---

<div align="center">

**⭐ Star this repo if you find it useful!**  
Made with ❤️ for Physics Education

</div>
