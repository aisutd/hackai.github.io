interface FAQ {
  q: string
  a: string
}

const faq: FAQ[] = [
  {
    q: 'When and where is HackAI?',
    a: 'HackAI will take place virtually, on March 27th to 28th, 2021.',
  },
  {
    q: 'How do I apply?',
    a:
      'Thanks for your interest! Applications have not opened yet, but will open February 1, 2021. Please sign up for updates with the form in the header!',
  },
  {
    q: 'Do I need to be a CS major?',
    a: 'We welcome all majors!',
  },
  { q: 'How old do I have to be to participate?', a: 'You must be 18 or older to participate.' },
  { q: 'How much does it cost to attend?', a: 'There is no cost to attend!' },
  { q: 'Is this a virtual or in-person event?', a: 'This is a fully virtual event.' },
  {
    q: 'How will team formation work?',
    a:
      'Participants will be able to form teams of up to 5, and can choose from a pool of standard or wildcard challenges provided by sponsors, and submit their projects for a chance at winning one of our many prizes! Throughout the hackathon, we will also have video game tournaments, workshops and events from partner organizations, and chances to connect with our sponsors and recruiters.',
  },
  {
    q: 'What are Standard challenges?',
    a:
      'While AIS will incorporate competition challenges of our own, we highly encourage our challenge sponsors to bring a unique AI challenge to the table. It could potentially be themed by the mission of the company, a specific domain, a pressing global issue, etc. The challenge should make the hackers critically and ethically think of solutions pertaining to the problem at hand. All competitions currently will only support supervised machine learning tasks. Major challenges are designed to be larger, 24-hour tasks with a larger prize pool, while minor challenges are smaller, 8-hour competitions.',
  },
  {
    q: 'What are Wildcard challenges?',
    a:
      'The major and minor wildcard challenges come into place when one wants to break from the norm. The wildcard system helps account for the fact that not all sponsors may wish to have their competition be a supervised learning task, and gives them the flexibility of providing a different type of competition challenge. In this wildcard pool, companies will be responsible for providing their own judges for challenges as well as prizes limited to one winning team.',
  },
]

export default faq
