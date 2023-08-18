import Service from '@/components/Service'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DATA = [
  {
    heading: "Business Planning",
    paragraph: "Quis id duis pro,ident nostrud sint ex aliqua exercitation. Cupidatat quis ullamco incididunt ad voluptate dolore tempor est Lorem ea tempor qui.",
    icon: "chart",
  },
  {
    heading: "Data Analysis",
    paragraph: "Quis id duis pro,ident nostrud sint ex aliqua exercitation. Cupidatat quis ullamco incididunt ad voluptate dolore tempor est Lorem ea tempor qui.",
    icon: "pie",
  },
  {
    heading: "Expert Marketing",
    paragraph: "Quis id duis pro,ident nostrud sint ex aliqua exercitation. Cupidatat quis ullamco incididunt ad voluptate dolore tempor est Lorem ea tempor qui.",
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
