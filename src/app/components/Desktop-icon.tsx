"use client"

import Image from "next/image"
import type { ReactNode } from "react"

interface DesktopIconProps {
    name: string
    icon: string | ReactNode
    onClick: () => void 
}

export default function DesktopIcon({ name, icon, onClick }: DesktopIconProps){
    return(
        <button onClick={onClick} className="flex flex-col items-center w-20 p-1 rounded hover:bg-blue-100/30 focus:bg-blue-200/40 active:bg-blue-300/50">
            {typeof icon === "string" ?
        (
            <div className="w-10 h-10 mb-1 relative">
                <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
        ) : (
            <div className="w-10 h-10 mb-1 flex items-center justify-center">{icon}</div>
        )}
        <span className="text-white text-xs text-center break-words w-full">{name}</span>
        </button>
    )
}