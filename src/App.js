import { useEffect, useState } from "react";

function App() {
    const [tg, setTg] = useState(null);
    const [user, setUser] = useState(null);
    const [lesson, setLesson] = useState(null);

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const telegram = window.Telegram.WebApp;
            telegram.expand(); // Разворачиваем WebApp во весь экран
            telegram.enableClosingConfirmation(); // Подтверждение закрытия

            setTg(telegram);
            setUser(telegram.initDataUnsafe?.user || null);
        }
    }, []);

    const startLesson = () => {
        setLesson("Урок 1: Основы групповой терапии");
    };

    return (
        <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
            <h1>Professor You</h1>
            {user ? (
                <p>Привет, {user.first_name}! Добро пожаловать в Mini App.</p>
            ) : (
                <p>Загружаем данные пользователя...</p>
            )}
            
            {!lesson ? (
                <button 
                    onClick={startLesson} 
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        background: "#0088cc",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                    Начать первый урок
                </button>
            ) : (
                <div>
                    <h2>{lesson}</h2>
                    <p>Здесь будет содержание урока...</p>
                    <button 
                        onClick={() => setLesson(null)} 
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            background: "#FF5555",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                        Вернуться назад
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
