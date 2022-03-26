import Image from "next/image"

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/portfolio`)
    const data = await response.json()

    return {
        props: { portfolios: data }
    }
}

const Portfolio = ({ portfolios }) => {
    return ( 
        <div className="mt-28">
            <section>
                <h1 className="text-5xl text-center font-semibold text-gray-700 tracking-wider self-center"><span className="text-primary">My</span> Portfolio</h1>
                <p className="text-center text-xl">my works...</p>

                <div className="mx-8 md:mx-24 mt-10 md:mt-16">
                    {
                        portfolios.map(portfolio => (
                            <div className="mb-8 md:mb-20 md:grid md:grid-cols-5 md:gap-x-8" key={portfolio.id}>
                                
                                <div className="md:col-span-3 drop-shadow-lg">
                                    <Image src={`/portfolio${portfolio.img}`} alt="hello" />
                                </div>

                                <div className="py-8 md:col-span-2 md:self-end md:-mb-8">
                                    <div className="text-primary text-2xl leading-5 mb-4">{portfolio.title}</div>
                                    <div className="text-gray-700">{portfolio.description}</div>

                                    <div className="mt-8 md:mt-6 flex justify-center md:justify-start">
                                        <a rel="noreferrer" target="_blank" href={portfolio.url}>
                                            <button className="bg-gradient-to-br from-primary to-blue-400  text-xl text-white font-semibold py-4 px-6 rounded inline-flex space-x-4 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                <span className="tracking-wide">View Project</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {
                        portfolios.map(portfolio => (
                            <div className="mb-8 md:mb-20 md:grid md:grid-cols-5 md:gap-x-20" key={portfolio.id}>

                                <div className="mt-10 md:col-span-3">
                                    <div className="relative py-3">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                                        <div className="relative drop-shadow-lg md:rounded-lg">
                                            <Image src={`/portfolio${portfolio.img}`}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-8 md:col-span-2 md:self-end md:-mb-8">
                                    <div className="text-primary text-2xl leading-5 mb-4">{portfolio.title}</div>
                                    <div className="text-gray-700">{portfolio.description}</div>

                                    <div className="mt-8 md:mt-6 flex justify-center md:justify-start">
                                        <a rel="noreferrer" target="_blank" href={portfolio.url}>
                                            <button className="bg-gradient-to-br from-primary to-blue-400  text-xl text-white font-semibold py-4 px-6 rounded inline-flex space-x-4 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                <span className="tracking-wide">View Project</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </section>
        </div>
    );
}
 
export default Portfolio;