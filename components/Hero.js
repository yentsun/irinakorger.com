import { motion } from 'framer-motion';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


export default function Hero() {

    return <div className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <div className="max-w-xs lg:max-w-md space-y-10 w-5/6 mx-auto md:w-full
                            text-center md:text-left">
                <h1 className="font-primary font-extrabold text-gray-900 text-xl
                               sm:text-4xl md:text-4xl md:leading-tight">

                    Воронка продаж &mdash; главный инструмент<br />

                    <span className="text-palette-primary">
                            для увеличения прибыли и удержания клиентов
                        </span>
                </h1>

                <p className="font-secondary text-gray-500 text-base md:text-lg lg:text-xl">
                    Меня зовут Ирина Коргер. Я помогаю компаниям увеличивать продажи и удерживать клиентов,
                    предоставляя им информацию о продукте и процессе покупки.
                </p>

                <div className="flex space-x-4">

                    <PrimaryButton text="Подробнее" link="/" />

                    <SecondaryButton text="Связаться" link="/contact" />

                </div>
            </div>
        </div>

        <motion.div className="w-full md:w-1/2 transform scale-x-125 lg:scale-x-100"
                    initial={{ opacity: 0, translateY: 60 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, translateY: 0 }}>

            <img alt="hero-img" src="/images/pic1.jpeg"
                 className="mx-auto object-cover shadow rounded-tr-extraLarge rounded-bl-extraLarge
                            w-full h-96 sm:h-112 md:h-120" />
        </motion.div>
    </div>
}
