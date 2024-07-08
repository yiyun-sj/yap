import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 gap-20'>
      <div className='flex flex-row items-center gap-8 flex-wrap'>
        <Image
          src='/profile.jpg'
          alt='Profile picture'
          width={256}
          height={256}
          className='rounded-full self-start'
          priority
        />
        <div className='flex flex-col'>
          <text className=' text-6xl font-title pb-2'>Sam Jia</text>
          <text className=' text-2xl font-body '>Software Engineer</text>
          <text className=' text-md font-body text-gray-300 pb-8'>
            Building anything from the kernel to the web
          </text>
          <div className='flex flex-row gap-4'>
            <a href='https://github.com/yiyun-sj'>
              <FontAwesomeIcon icon={faGithub} className='h-8' />
            </a>
            <a href='https://www.linkedin.com/in/yiyun-sj/'>
              <FontAwesomeIcon icon={faLinkedin} className='h-8' />
            </a>
            <a href='mailto:s32jia@uwaterloo.ca'>
              <FontAwesomeIcon icon={faEnvelope} className='h-8' />
            </a>
            <a href='https://www.instagram.com/yiyun_sj/'>
              <FontAwesomeIcon icon={faInstagram} className='h-8' />
            </a>
          </div>
        </div>
      </div>
      <text className='text-md font-body font-light max-w-2xl'>
        Despite being introduced to programming at a young age, I really only
        became interested in computer science when I entered the{' '}
        <b>University of Waterloo</b> as a computer science student.
        <br />
        <br />
        Throughout my undergraduate degree, I have had the chance to work as
        interns with a number of companies, ranging from <b>start-ups</b> to
        large <b>corporations</b>. As such, I have had the pleasure of working
        on all types of software, from working with <b>web</b> technologies to
        developing <b>database</b> engines to tinkering with <b>kernel</b>{' '}
        extensions.
        <br />
        <br />
        Off work, I spend time bringing my - albeit unsuccessful - startup ideas
        to fruition, research and develop potential quantative trading models,
        and am now looking into game development.
      </text>
    </main>
  )
}
