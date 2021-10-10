import React, { useState } from 'react'
import { ShareImage, ShareGif, ShareAnket, ShareEmoji, TweetProgramla } from "../icon/icon"

function TweetBox() {

    const [content, setContent] = useState("");

    const sendTweet = () => {
        //tweet post et

        setContent("");
    }
   

    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparan" placeholder="Ne Oldu"
                onChange={e => setContent(e.target.value)}
                value={content}
            />

            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-300">
                        <ShareImage className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-300">
                        <ShareGif className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-300">
                        <ShareAnket className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-300">
                        <ShareEmoji className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-300">
                        <TweetProgramla className="w-6 h-6 text-primary-base" />
                    </div>
                </div>

                <button onClick={sendTweet} className="bg-blue-400 text-white rounded-full px-4 py-2 font-medium" >Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
