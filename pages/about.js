import { FaSpellCheck, FaRocket, FaRegLaughBeam, FaCheckCircle } from "react-icons/fa";

const About = () => {
    return ( 
        <div className="mt-28">
            { /* About me */ }
            <section>
                <h1 className="text-5xl text-center font-semibold text-primary tracking-wider self-center"><span className="text-gray-700">About</span> me</h1>
                <p className="text-center text-xl">the story...</p>

                <div className="md:flex md:mx-20 mx-8 md:justify-items-center md:items-center md:grid md:grid-cols-3 mt-12">
                    <img className="mx-auto opacity-75 mb-8 md:mb-0 w-2/4 md:w-1/4 md:col-span-1" src="/man.svg"/>

                    <div className="leading-8 md:col-span-2 text-center md:text-left text-lg">
                        <p>I am a Full Stack developer with 4 years of expreience</p>
                        <p>Through out this time I have worked on several projects in various capacities</p>
                        <p>Primarily, I am a Backend Dev and I love working with JavaScript</p>
                        <p>I learnt to code from church and through YouTube tutorials</p>
                    </div>
                </div>
            </section>

            { /* Services */ }
            <section className="mt-14 md:mt-20">
                <h1 className="text-5xl text-center font-semibold text-gray-700 tracking-wider self-center"><span className="text-primary">My</span> Services</h1>
                <p className="text-center text-xl">what I Offer...</p>

                <div className="mb-24 rounded-md shadow-md md:flex md:space-x-10 md:grid md:grid-cols-5 items-center py-8 px-8 md:px-16 md:mx-20 mt-16">
                    <div className="md:col-span-1">
                        <div className="grid justify-items-center mb-8">
                            <div>
                                <img className="mx-auto w-2/3 md:w-2/4" src="/computer.svg"/>
                                {/* <FaSpellCheck size={120} className="text-secondary text-8xl md:text-9xl"/> */}
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 md:col-span-4 md:row-start-1">
                        <h1 className="text-center sm:text-left text-2xl font-bold text-primary tracking-wider mb-4">Application Development</h1>
                        <p>Creation of Web or Mobile platforms for a business or Services</p> 
                        <p>This involves creating of databases and, builing and implementing APIs</p>
                        <p>Also usage of machine learning solutions and models where neccessary</p>
                    </div>
                </div>

                <div className="mb-24 rounded-md shadow-md md:flex md:space-x-10 md:grid md:grid-cols-5 items-center py-8 px-8 md:px-16 md:mx-20 mt-16">
                    <div className="md:col-span-1">
                        <div className="grid justify-items-center mb-8">
                            <div>
                                <img className="mx-auto w-2/3 md:w-2/4" src="/mouse_arrow.svg"/>
                                {/* <FaRocket className="text-secondary text-8xl md:text-9xl"/> */}
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 md:col-span-4">
                        <h1 className="text-center sm:text-left text-2xl font-bold text-primary tracking-wider mb-4">Testing and Debugging</h1>
                        <p>This is very important to success of any product</p>
                        <p>Extensive product testing to discover bugs and implmentation of efficient fixes</p>
                        <p>Suggestion of quality features and needed changes</p>
                    </div>
                </div>

                <div className="mb-24 rounded-md shadow-md md:flex md:space-x-10 md:grid md:grid-cols-5 items-center py-8 px-8 md:px-16 md:mx-20 mt-16">
                    <div className="md:col-span-1">
                        <div className="grid justify-items-center mb-8">
                            <div>
                                <img className="mx-auto w-2/3 md:w-2/4" src="/accept.svg"/>
                                {/* <FaRegLaughBeam className="text-secondary text-8xl md:text-9xl"/> */}
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 md:col-span-4 md:row-start-1">
                        <h1 className="text-center sm:text-left text-2xl font-bold text-primary tracking-wider mb-4">Deployment and Maintenance</h1>
                        <p>Hosting of application, with a range of services; Heroku, Firebase, Docker, Vercel, AWS...</p>
                        <p>Frequent and quality checks to ensure everything runs smoothly</p>
                        <p>Effective use of sever resources and 100% up time</p>
                    </div>
                </div>
 
            </section>

            { /* Skills */ }
            <section className="mt-14 md:mt-20 mb-20">
                <h1 className="text-5xl text-center font-semibold text-primary tracking-wider self-center"><span className="text-gray-700">Skill</span> Sets</h1>
                <p className="text-center text-xl">procficiency...</p>

                <div className="mt-16 mx-8 md:grid md:grid-cols-2 md:gap-x-8 md:mx-24">
                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">HTML - CSS</span>
                            <span className="text-base md:text-lg font-medium text-primary">87%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 rounded-full h-3.5 md:h-4" style={{width: 87+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">JavaScript - Node JS</span>
                            <span className="text-base md:text-lg font-medium text-primary">95%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 95+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">React JS - Next JS - React Native</span>
                            <span className="text-base md:text-lg font-medium text-primary">87%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 87+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">SQL - MongoDB</span>
                            <span className="text-base md:text-lg font-medium text-primary">85%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 85+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">Git - GitHub - Docker</span>
                            <span className="text-base md:text-lg font-medium text-primary">90%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 90+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">Heroku - Firebase</span>
                            <span className="text-base md:text-lg font-medium text-primary">86%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 86+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">Netlify - Vercel</span>
                            <span className="text-base md:text-lg font-medium text-primary">87%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 87+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">Python - Django</span>
                            <span className="text-base md:text-lg font-medium text-primary">90%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 90+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">C - C++ - JAVA</span>
                            <span className="text-base md:text-lg font-medium text-primary">85%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 85+'%'}}></div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg font-medium text-primary">PHP</span>
                            <span className="text-base md:text-lg font-medium text-primary">85%</span>
                        </div>
                            <div className="w-full bg-gray-200 rounded-full h-3.5 md:h-4">
                            <div className="bg-gradient-to-br from-primary to-blue-400 h-3.5 md:h-4 rounded-full" style={{width: 85+'%'}}></div>
                        </div>
                    </div>
                </div>

                
 
            </section>
        </div>
    );
}
 
export default About;