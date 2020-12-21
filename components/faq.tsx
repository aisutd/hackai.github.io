import FAQCard from './faq-card'
import faq from '../faq'

const FAQ = (): JSX.Element => {
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-4xl flex items-center justify-center text-center'>
        Frequently Asked Questions
      </h2>
      <div className='my-12'>
        {faq.map(qa => (
          <FAQCard question={qa.q} answer={qa.a} key={JSON.stringify(qa)} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
