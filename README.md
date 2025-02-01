# Quiz Application

## Project Overview
This is a web-based quiz application designed to provide an engaging and interactive quiz experience with gamification elements. The application fetches quiz data from an external API and presents multiple-choice questions to users. Upon completion, users receive a summary of their results, including their total points scored.

## Features
- **Start Quiz**: Users can initiate the quiz at their convenience.
- **Multiple-Choice Questions**: Each question has multiple answer options, allowing users to select their response.
- **Real-Time Scoring**: Users earn points for correct answers, enhancing engagement.
- **Results Summary**: At the end of the quiz, a summary screen displays total points scored.
- **Error Handling**: Proper error handling for API integration ensures a seamless user experience.
- **Gamification**: Points system and interactive UI elements enhance the learning experience.


## API Integration
The quiz data is fetched from the following API endpoint:
```
https://api.jsonserve.com/Uw5CrX
```
### Handling API Responses
- The application parses the JSON response and dynamically renders questions.
- Implements error handling to manage API failures gracefully.

## Installation and Setup
### Prerequisites
Ensure you have the following installed:

- npm or yarn

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone <your-repository-link>
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh

   yarn run dev
   ```
5. Open `http://localhost:5173` in your browser to access the quiz app.

## Screenshots
(Add screenshots showcasing different stages of the app, such as the start screen, a sample quiz question, and the results summary.)
### Home Screen

<img width="1439" alt="Screenshot 2025-02-01 at 8 04 46 PM" src="https://github.com/user-attachments/assets/cc65acf3-2687-458a-a0a7-6ac7e75f7932" />

### Quiz Screen
<img width="1440" alt="Screenshot 2025-02-01 at 8 10 46 PM" src="https://github.com/user-attachments/assets/3d63ba29-0dc9-442d-ac7c-00c14bf58997" />

### Result Screen
<img width="1439" alt="Screenshot 2025-02-01 at 8 11 28 PM" src="https://github.com/user-attachments/assets/b43230ab-e1cc-4118-83fc-83b7dee51963" />


## Video Walkthrough
(Provide a link to a short video demonstrating the application's features and user experience.)

https://github.com/user-attachments/assets/25fbcd5a-3fe8-49f3-8349-b7dfbf88cddd





