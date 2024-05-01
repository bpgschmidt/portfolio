import React from "react";

export default
function Portfolio() {
    return (
        <main className="bg-slate-950 text-white min-h-screen justify-between min-w-screen overflow-hidden">
            <header className="md:fixed top-0 bg-slate-950 pt-2 md:pt-8 pb-2 md:pb-8 border-cyan-400 border-b-2 z-20 w-screen min-w-screen">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
                    <a href="https://github.com/bpgschmidt" className="mb-6 sm:mb-0 sm:mr-8 hidden md:block">
                        <svg className="w-12 h-12 p-1 bg-green-400 rounded-full transition ease-in-out hover:bg-white mt-4 sm:mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                    </a>
                    <div className="text-xl md:text-5xl font-extrabold text-center sm:text-left justify-center items-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-tight text-pretty">
                            Benjamin Schmidt
                        </span>
                    </div>
                </div>
            </header>
            <div className="md:mt-24 lg:flex lg:flex-row min-h-screen flex-grow items-center bg-slate-950 justify-center p-4 z-30 md:ml-20 md:mr-20 min-w-screen">
                <div className="flex flex-col items-center justify-center md:mt-24">
                    <div className=""><img className="object-scale-down h-24 w-24 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full" src="images/IMG_0012 2.jpg" alt="me" /></div>
                        <div className="md:w-1/2 p-8 rounded flex flex-col items-center justify-center">
                            <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-center">About Me</h2>
                            <p className="text-wrap md:text-pretty">My name is Benjamin. I am 22 years old as of 2024, when making this website.
                            I'm currently studying my third year in Media Technology @ KTH Royal Institute of Technology, with expected graduation 2026.</p>
                            
                            <p className="text-wrap md:text-pretty mt-8">I'm passionate about learning new skills, and aim to become a great front end developer. Do you have any questions, feel free to send an email or check out my Github.</p>
                            <a href="https://github.com/bpgschmidt" className="mt-6 sm:mr-8 md:hidden ">
                                <svg className="w-24 h-24 p-1 bg-green-400 rounded-full transition ease-in-out hover:bg-white mt-4 sm:mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:mr-48 text-center">
                        <div className="md:mt-16 p-8 rounded">
                            <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-center">Projects</h2>
                            <div className="">
                                <h3 className="text-xl">Action Movie Quiz</h3>
                                <p className="mb-4">A movie quiz made in React with three other students using Rabbit API.</p>
                                <a className="p-2 text-white font-bold bg-clip-text text-xl hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 rounded" href="https://movie-quiz-game-iprog.web.app/">Click here to try it!</a>
                            </div>
                        </div>
                    <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded md:mt-20">
                        <div className="rounded hover:bg-white transition ease-in-out delay-150 shadow-inner shadow hover:shadow-white">
                            <button onClick={() => window.location.href = 'mailto:business@bpgschmidt.se'} className="transition ease-in-out delay-150 text-5xl font-bold p-6 rounded bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 tracking-tight shadow-inner hover:shadow-white">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-slate-950 flex flex-col md:flex-row items-center justify-center p-10 min-w-screen">
                <button onClick={() => window.location.href = 'mailto:business@bpgschmidt.se'} className="text-center p-4 md:border-r-2 hover:text-blue-400">business@bpgschmidt.se</button>
                <a className="text-center p-4 md:border-l-2 hover:text-blue-600" href="tel:+46(0)70-855 31 66">+46(0)70-855 31 66</a>
            </footer>
        </main>
    );
}