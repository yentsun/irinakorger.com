import Service from './Service';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const DATA = [
    {
        heading: "Создание и настройка",
        paragraph: "Создание и настройка автоматических воронок продаж, которые будут самостоятельно " +
                   "привлекать клиентов и продавать товары или услуги.",
        icon: "chart",
    },
    {
        heading: "Исследования",
        paragraph: "Проведение маркетинговых исследований и анализа рынка, чтобы определить " +
                   "наиболее эффективные каналы продвижения и способы привлечения клиентов.",
        icon: "pie",
    },
    {
        heading: "Стратегии",
        paragraph: "Разработка индивидуальных стратегий продаж для каждого клиента, учитывая его потребности и " +
                   "особенности бизнеса.",
        icon: "presentation",
    },
]

function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: 'beforeChildren',
            },
        },
    }

    const childItem = {
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 60, },
    }

    return (
        <div className="transform -translate-y-20">
            <motion.div
                ref={ref}
                className="pt-6 md:pt-12 flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:justify-around max-w-6xl mx-auto"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={list}
            >
                {DATA.map(item => (
                    <Service
                        key={item.heading}
                        heading={item.heading}
                        paragraph={item.paragraph}
                        icon={item.icon}
                        variants={childItem}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Services
