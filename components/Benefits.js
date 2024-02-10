import Benefit from './Benefit';


const DATA = [
    {
        header: 'Индивидуальный подход',
        description: `Я предлагаю индивидуальный подход к каждому клиенту, учитывая его 
                      особенности и потребности.`,
        image: 'images/benefit-1.jpeg',
        imageAltTag: 'benefit-1',
        bullets: [
            'Я анализирую потребности клиента и разрабатываем индивидуальную стратегию ' +
            'продаж, которая максимально эффективно подходит для его бизнеса.',

            'Я учитываю особенности продукта или услуги, которые могут повлиять на' +
            ' процесс продажи, и адаптируем нашу стратегию под них.',

            'Я веду каждого клиента персонально, отслеживая ' +
            'процесс продажи и помогаю ему на каждом этапе.'
        ],
        reversed: false
    },
    {
        header: 'Опыт',
        description: `Моя команда состоит из опытных специалистов, 
                      которые постоянно совершенствуют свои навыки и знания.`,
        image: 'images/benefit-2.jpeg',
        imageAltTag: 'benefit-2',
        bullets: [
            'Моя команда имеет более чем десятилетний опыт работы в сфере продаж и маркетинга',
            'Мы постоянно обучаемся новым технологиям и методам продаж, чтобы быть в курсе последних трендов рынка',
            'Мои специалисты имеют высокую квалификацию и опыт работы с различными типами клиентов и продуктов'
        ],
        reversed: true
    },
    {
        header: 'Скорость',
        description: `Я работаю быстро и качественно, чтобы удовлетворить потребности моих клиентов.`,
        image: 'images/benefit-3.jpeg',
        imageAltTag: 'benefit-3',
        bullets: [
            'быстрая обработка заказов',
            'оперативные ответы на вопросы и помощь с правильным выбором',
            'современные технологии и программное обеспечение'
        ],
        reversed: false
    }
]

function Benefits() {
    return (
        <div className="space-y-12 sm:space-y-20 lg:space-y-24 py-4">
            {DATA.map(item => {
                if (item.reversed) {
                    return (
                        <Benefit
                            key={item.header}
                            header={item.header}
                            description={item.description}
                            image={item.image}
                            imageAltTag={item.imageAltTag}
                            bullets={item.bullets}
                            reversed={true}
                        />
                    )
                } else {
                    return (
                        <Benefit
                            key={item.header}
                            header={item.header}
                            description={item.description}
                            image={item.image}
                            imageAltTag={item.imageAltTag}
                            bullets={item.bullets}
                            reversed={false}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Benefits
