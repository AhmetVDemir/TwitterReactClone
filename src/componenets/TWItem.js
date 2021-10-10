import React from 'react'
import indir from "../img/indir.png"
import { Yorum,Retweetle,Begen,Paylas } from '../icon/icon'

const TWItem = ({ id, tw }) => {
    return (
        <article className="flex space-x-3 border-b border-gray-200 px-4 py-3 cursor-pointer">
            <img src={indir} alt="profile" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold" >Kai Hiwatari</h4>
                    <span className="ml-2 text-gray-dark" >@Kai-Hiwatari</span>
                    <div className="mx-2.5 bg-gray-900 h-1 w-1 border rounded-full" />
                    <span className="text-gray-dark">23:39:50</span>

                </div>
                <p className="mt-2 text-gray-900 text-sm">{tw}</p>

                <ul className="-ml-l mt-3 flex justify-between max-w-md">
                    <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-items-center w-8 h-8 rounded-full group-hover:bg-blue-100">
                            <Yorum className="w-5 h-5 group-hover:text-blue-100" />
                        </div>
                        <span className="group-hover:text-blue-100" >27</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-items-center w-8 h-8 rounded-full group-hover:bg-green-100">
                            <Retweetle className="w-5 h-5 group-hover:text-green-100" />
                        </div>
                        <span className="group-hover:text-green-100" >27</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-items-center w-8 h-8 rounded-full group-hover:bg-purple-200">
                            <Begen className="w-5 h-5 group-hover:text-purple-200" />
                        </div>
                        <span className="group-hover:text-blue-100" >27</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-items-center w-8 h-8 rounded-full group-hover:bg-red-200">
                            <Paylas className="w-5 h-5 group-hover:text-red-200" />
                        </div>
                        
                    </li>
                </ul>



            </div>




        </article>
    )
}

export default TWItem