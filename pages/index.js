import Typewriter from 'typewriter-effect';
import Image from 'next/image'

// images
import img_programming from '../public/programming.svg'

export default function Home() {
  return (
    <div>
      	<main className="bg-white font-open-sans">
			<div className="container mx-auto px-8 py-24 lg:py-20 relative flex flex-col lg:flex-row items-center">
				<div className="lg:w-1/2 flex flex-col items-center lg:items-start">
					<h1 className="text-center lg:text-left text-3xl sm:text-4xl text-gray-700 leading-tight mb-4">Hello, I'm <span className="font-semibold block mt-2 text-primary text-4xl sm:text-5xl">John Olatubosun</span></h1>
					<div className="text-center text-lg lg:text-left sm:text-xl text-gray-500 lg:pr-40 leading-relaxed">
						<Typewriter
							options={{
								strings: ['Full Stack Software Developer', 'Crypto & Blockchain Enthusiast', 'JavaScript Dev','Lover of Christ'],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
				</div>

				<div className="w-full sm:w-2/3 mt-10 lg:mr-8">
					<div className="w-full">
						<Image src={img_programming} alt="programming" />
					</div>
				</div>
			</div>
      	</main>
		
		<div className="mb-8 flex justify-center">
			<a download href="/Olatubosun_John_Resume.pdf">
				<button className="bg-gradient-to-br from-primary to-blue-400  text-xl sm:text-2xl text-white font-semibold py-6 px-10 rounded inline-flex items-center">
					<svg className="w-5 h-5 sm:w-6 sm:h-6 mr-4" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
					<span>Download Resume</span>
				</button>
			</a>
		</div>
    </div>
  )
}
