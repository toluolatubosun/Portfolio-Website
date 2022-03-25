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
                        <p>I am a Full Stack developer with a lot of 4 years of expreience</p>
                        <p>Through out this time I have worked on several projects in various capacities</p>
                        <p>Primarily, I am a Backend Dev and I love working with JavaScript</p>
                        <p>I learnt to code from church and through YouTube tutorials</p>
                    </div>
                </div>
            </section>

            { /* Skills */ }
            <section className="mt-14 md:mt-20">
                <h1 className="text-5xl text-center font-semibold text-gray-700 tracking-wider self-center"><span className="text-primary">My</span> Skills</h1>
                <p className="text-center text-xl">procficiency...</p>

 
            </section>
        </div>
    );
}
 
export default About;