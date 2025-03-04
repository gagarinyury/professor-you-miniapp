import { useEffect } from "react";

function App() {
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.expand();  // Разворачиваем WebApp во весь экран
            tg.enableClosingConfirmation(); // Подтверждение закрытия приложения
        }
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Professor You</h1>
            <p>Добро пожаловать в Telegram Mini App по групповой терапии!</p>
            <button onClick={() => alert("Урок 1 начат!")}>Начать первый урок</button>
        </div>
    );
}

export default App;
