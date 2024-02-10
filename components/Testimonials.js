import SectionTitle from './SectionTitle';
import Testimonial from './Testimonial';


const DATA = [
    {
        name: "Диана Трофимова",
        jobTitle: "бьюти-блоггер, 32 года",
        image: "/images/testimonial-image-1.jpeg",
        altTag: 'testimonial-1',
        review: `Ирина помогла создать  страницу в Facebook и заметки в Twitter с 
                 интересным контентом, связанным с моей тематикой`,
    },
    {
        name: "Милана Лаврентьева",
        jobTitle: "специалист по маркетингу, 25 лет",
        image: "/images/testimonial-image-2.png",
        altTag: 'testimonial-2',
        review: `Мы начали с привлечения клиентов через различные каналы маркетинга,
                 такие как контекстная реклама, SEO, соцсети и email-рассылки.`
    },
    {
        name: "Копылова Татьяна",
        jobTitle: "ИП, Coala",
        image: "/images/testimonial-image-3.png",
        altTag: 'testimonial-3',
        review: `Что мне нравится в Ирине, так это то, что она не только профессионал, но и веселая. 
                 Шутит, использует забавные картинки и видео 😊`,
    }
]

function Testimonials() {
    return <div className="pt-12 pb-6 sm:pt-16 sm:pb-12">
        <div className="w-full px-2 max-w-6xl mx-auto">
            <SectionTitle
                text="Что обо мне говорят"
            />
            <div className="flex flex-col items-center sm:flex-row sm:justify-around space-y-6 sm:space-y-0 pt-12">
                {
                    DATA.map(item => (
                        <Testimonial
                            key={item.name}
                            name={item.name}
                            jobTitle={item.jobTitle}
                            image={item.image}
                            altTag={item.altTag}
                            review={item.review}
                        />
                    ))
                }
            </div>
        </div>
    </div>
}

export default Testimonials
