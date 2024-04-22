import React from "react";

export default
function Portfolio() {
    return (
        <div className="w-screen bg-slate-950 text-white min-h-screen">
            <header className="fixed top-0 w-screen bg-slate-950 pt-8 pb-2 border-cyan-400 border-b-2 z-20">
                <div className="text-5xl font-extrabold text-center justify-center items-center mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-tight">
                        Benjamin Schmidt
                    </span>
                </div>
            </header>
            <body className="mt-24 h-screen flex flex-col items-center bg-slate-950 justify-center p-4 z-30">
                <div className="flex flex-row items-center justify-center mt-24">
                    <div className=""><img className="object-scale-down h-96 w-96 rounded-full" src="images/IMG_0012 2.jpg" alt="me" /></div>
                    <div className="w-1/3 p-8 rounded ml-20">
                        <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-center">About Me</h2>
                        <p>My name is Benjamin. I am 21 years old as of 2023, when making this website.
                        I'm currently studying my third year in Media Technology @KTH, with expected graduation 2026. </p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mb-20">
                    <div className="mt-16 p-8 rounded text-center mr-40">
                        <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-center">Projects</h2>
                        <h3>Action Movie Quiz</h3>
                        <p className="mb-4">A movie quiz made in React.</p>
                        <a className="p-2 text-white font-bold bg-clip-text hover:text-xl hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 rounded" href="https://movie-quiz-game-iprog.web.app/">Click here to try it!</a>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded mt-20">
                        <div className="rounded hover:bg-white transition ease-in-out delay-150">
                            <button className="transition ease-in-out delay-150 text-5xl font-bold p-6 rounded bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 tracking-tight">Hire me</button>
                        </div>
                    </div>
                </div>
                
            </body>
            <footer className="bg-slate-950 flex flex-row items-center justify-center p-10">
                <p className="text-center p-4 border-r-2 hover:text-blue-400">bimbim.schmidt@gmail.com</p>
                <p className="text-center p-4 hover:text-blue-500">bschmi@kth.se</p>
                <p className="text-center p-4 border-l-2 hover:text-blue-600">+46(0)70-855 31 66</p>
            </footer>
        </div>
    );
}