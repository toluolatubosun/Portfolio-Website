import React from "react";
import Head from "next/head";
import { BsPlayFill, BsPauseFill, BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";

const NotFound = () => {
    const [mute, setMute] = React.useState(false);
    const [playing, setPlaying] = React.useState(false);

    const videoRef = React.useRef(null);

    return (
        <>
            <Head>
                <title>404 - John Olatubosun</title>
            </Head>

            <div className="flex">
                <div className="mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">Not Found 🥲</h1>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => {
                                setPlaying(!playing);
                                playing ? videoRef.current.pause() : videoRef.current.play();
                            }}
                            className="flex space-x-3 items-center bg-primary text-white rounded-sm py-4 px-8 text-lg font-bold tracking-widest hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 ease-in-out"
                        >
                            {playing ? <BsPauseFill className="text-2xl" /> : <BsPlayFill className="text-2xl" />}
                            <span>{playing ? "Pause" : "Play"}</span>
                        </button>

                        <button
                            onClick={() => setMute(!mute)}
                            className="flex space-x-3 items-center bg-primary text-white rounded-sm py-4 px-8 text-lg font-bold tracking-widest hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 ease-in-out"
                        >
                            {mute ? <BsVolumeUpFill className="text-2xl" /> : <BsVolumeMuteFill className="text-2xl" />}
                            <span>{mute ? "UnMute" : "Mute"}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="mx-auto">
                    <video loop muted={mute} ref={videoRef} preload="auto" src="/404.mp4" className="mt-16" autoPlay={playing}></video>
                </div>
            </div>
        </>
    );
};

export default NotFound;
