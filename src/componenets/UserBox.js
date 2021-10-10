import React from 'react'
import indir from "../img/indir.png"
import {UcNokta} from '../icon/icon'

function UserBox() {
    return (
        <div className="flex justify-between items-center mb-4 hover:bg-blue-200 cursor-pointer rounded-full py-2 px-3 shadow-lg" >
            <img src={indir}  alt="Profile" className="w-11 h- rounded-full" />
            <div className="flex flex-col">
                <span className="font-bold text-lg text-black">
                    Ahmet Demir
                </span>
                <span className="text-sm text-gray-dark">
                    @AVD
                </span>
            </div>
            <div className="flex space-x-1">
                <UcNokta/>
            </div>
        </div>
    )
}

export default UserBox
