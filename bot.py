from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor

TOKEN = "ТВОЙ_ТОКЕН_БОТА"  # Замени на свой токен

bot = Bot(token=TOKEN)
dp = Dispatcher(bot)

# Команда /start
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    button = types.KeyboardButton("🚀 Открыть Mini App", web_app=types.WebAppInfo(url="https://professor-you-miniapp.vercel.app/"))
    keyboard.add(button)
    await message.answer("Привет! Нажми кнопку, чтобы открыть Mini App:", reply_markup=keyboard)

# Приём данных из Mini App
@dp.message_handler(content_types=types.ContentType.WEB_APP_DATA)
async def handle_webapp_data(message: types.Message):
    await message.answer(f"✅ {message.web_app_data.data}")

# Запуск бота
if __name__ == "__main__":
    executor.start_polling(dp)
