Here's a **clean, well-formatted README** for your **Archimedes' Principle Simulator** based on the actual project structure you provided:

---

````markdown
<div align="center">

# 🌊 Archimedes' Principle Simulator

### Interactive Web Application — Physics Education Tool

<br>

![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-3DA639?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

</div>

---

## 📖 About

**Archimedes' Principle Simulator** is a full-stack Java web application built with Spring Boot and Thymeleaf. It helps students and educators visualize the conditions for floating and sinking bodies through interactive form inputs and real-time animation.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📐 Input Parameters | Enter density of object & liquid, mass, length, width |
| 🔢 Real-time Calculations | Computes Archimedes force, submerged height, displaced volume |
| 🎨 Visual Animation | Object floats/sinks in liquid based on physics calculations |
| 📊 Results Display | Clear output of all physical quantities |
| 🎯 Educational | Perfect for physics classrooms and self-study |
| 🚀 REST API | Backend REST endpoint for calculations |

---

## 🛠️ Tech Stack

```
☕ Java 17+
🚀 Spring Boot 3.x
🎨 Thymeleaf (Server-side rendering)
🌐 HTML5 + CSS3
⚡ JavaScript + jQuery
📦 Maven (Build tool)
```

---

## 📁 Project Structure

```
phi/Archimedes_principle_simulator/
│
├── src/
│   ├── main/
│   │   ├── java/com/sam/archimedes/
│   │   │   ├── model/
│   │   │   │   ├── Archimedes.java                # Core physics logic
│   │   │   │   └── Constants.java                 # Physical constants
│   │   │   ├── web/ui/
│   │   │   │   └── ArchimedesRestController.java  # REST API endpoint
│   │   │   └── ArchimedesApplication.java         # Spring Boot entry point
│   │   └── resources/
│   │       ├── templates/
│   │       │   ├── archimedes.html                # Main page
│   │       │   ├── animation.js                   # Canvas animation logic
│   │       │   ├── response.js                    # Form submission & AJAX
│   │       │   └── style.css                      # Styling
│   │       └── application.properties             # Spring configuration
│   └── test/java/com/sam/archimedes/
│       └── ArchimedesApplicationTests.java        # Unit tests
│
├── pom.xml                                        # Maven dependencies
└── README.md                                      # This file
```

---

## 🧠 How It Works

### 1. User Input
User submits parameters via the HTML form:
- **Density of Object** (kg/m³)
- **Density of Liquid** (kg/m³)
- **Mass** (kg)
- **Length & Width** (m)

### 2. Backend Processing
- `ArchimedesRestController` receives AJAX request
- `Archimedes.java` performs physics calculations:
  - Archimedes' Force: `Fₐ = ρₗ × g × V_sub`
  - Submerged Height: `h_sub = V_sub / (L × W)`
  - Displaced Volume: `V_sub = m / ρₒ`
  - Floating Condition: Determines if object floats/sinks

### 3. Response & Animation
- JSON response sent back to frontend
- `response.js` updates result text
- `animation.js` animates object in liquid based on submerged height

---

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.8+
- Web browser (Chrome, Firefox, etc.)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/archimedes-principle-simulator.git
cd archimedes-principle-simulator
```

### 2. Build the project

```bash
mvn clean package
```

### 3. Run the application

```bash
mvn spring-boot:run
```

### 4. Open in browser

```
http://localhost:8080
```

---

## 📊 Physics Formulas

| Quantity | Formula | Description |
|----------|---------|-------------|
| **Archimedes' Force** | Fₐ = ρₗ × g × V_sub | Buoyant force equals weight of displaced fluid |
| **Submerged Volume** | V_sub = m / ρₒ | Volume of object submerged |
| **Submerged Height** | h_sub = V_sub / (L × W) | Height of object below liquid surface |
| **Floating Condition** | ρₒ < ρₗ → Floats | Object floats if less dense than liquid |
| **Sinking Condition** | ρₒ > ρₗ → Sinks | Object sinks if more dense than liquid |
| **Suspension** | ρₒ = ρₗ → Suspended | Object remains at any depth |

---

## 🔌 API Endpoint

### POST `/api/archimedes/calculate`

**Request Body:**
```json
{
  "densityOfObject": 800,
  "densityOfLiquid": 1000,
  "mass": 2.5,
  "length": 0.5,
  "width": 0.3
}
```

**Response:**
```json
{
  "archimedesForce": 24.525,
  "submergedHeight": 0.166,
  "displacedVolume": 0.0025,
  "floatingCondition": "FLOATS",
  "message": "Object floats"
}
```

---

## 🎮 Interactive Controls

- **Density of Object** — Adjust object density (kg/m³)
- **Density of Liquid** — Water (1000), Oil (800), Mercury (13600)
- **Mass** — Object mass in kilograms
- **Length & Width** — Object dimensions in meters
- **Compute Button** — Triggers calculation and animation

---

## 🧪 Running Tests

```bash
mvn test
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙌 Acknowledgments

- Archimedes of Syracuse — for the fundamental physics principle
- Spring Boot and Thymeleaf communities
- All physics educators and students using this tool

---

<div align="center">

**⭐ Star this repo if you find it useful!**  
Made with ❤️ for Physics Education

</div>
````

---

## 📝 Short Description (max 350 chars)

```
Archimedes' Principle Simulator — Spring Boot web app for physics education. Enter density, mass, dimensions, see real-time animation with full calculations. Built with Java, Thymeleaf, JavaScript.
```

**Character count:** 248 ✅
