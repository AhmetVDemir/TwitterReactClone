import React from 'react'
import TWItem from "../componenets/TWItem"


const TweetList = ({tweets}) => {
    return (
        <div>
            {
                tweets.map((tweet,index)=>(
                    <TWItem {...tweet} key={index} />
                ))
            }
            
        </div>
    )
}

export default TweetList
