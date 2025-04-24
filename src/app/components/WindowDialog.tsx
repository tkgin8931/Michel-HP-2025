"use client"

import type React from "react"
import { X, Minus, Square } from "lucide-react"
import { type ReactNode, useState, useRef, useEffect} from "react"
import Image from "next/image"
import MICHEL from "../../../public/763178630.093099.jpeg"

interface Position {
    x: number
    y: number
}

interface WindowDialogProps {
    title: string
    children?: ReactNode
    onClose: () => void
    initialPosition?: Position
}

export default function WindowDialog({
    title,
    children,
    onClose,
    initialPosition = { x: 0, y:0 },
}:WindowDialogProps){
    const [position, setPosition] = useState<Position>(initialPosition)
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState<Position>({x:0,y:0})
    const dialogRef = useRef<HTMLDivElement>(null)
    
    const defaultContent = (
        <div>
        <div className="bg-gray-200 p-2 text-sm">
            <p className="mb-4 text-black font-semibold">このサイトは宮田マイケル公式ホームページです。</p>
            
            <div className="flex flex-row items-center justify-center gap-16 py-2">

            <Image 
                src={MICHEL}
                alt="マイケル"
                width={60}
            />
            
            <p className="mb-4 text-black font-semibold">MIYATA MICHEL YUUKI(21)</p>

            </div>

            <p className="mb-4 text-black font-semibold">2003/05/26生まれ、21歳。幼少期はアメリカ・シアトルで過ごし、12歳の時に父親の仕事の都合で日本に移住。帰国子女として東京の国際高校に通い、現役で東京工業大学(現:東京科学大学)に合格。現在は電気電子系三年として勉学に励む傍ら、ロケットサークルCREATEにて電子回路、組み込みプログラミングによる設計を担当している。</p>

            <p className="mb-4 text-black font-semibold">大岡山を拠点とする謎の秘密組織にて工作活動をしている。</p>

            <p className="mb-4 text-black font-semibold">特技:演歌</p>

            <p className="mb-4 text-black font-semibold">技術:jQuery、リレーコンピューター、CAN通信</p>
            <hr className="my-4 border-gray-400" />

            <p className="mb-4 text-black font-semibold">https://jp.mercari.com/user/profile/732998095</p>
        </div>

        
        </div>
    )

    const handleMouseDown = (e:React.MouseEvent) => {
        setIsDragging(true)
        if(dialogRef.current) {
            const rect = dialogRef.current.
            getBoundingClientRect()
            setDragOffset({
                x: e.clientX - rect.left,
                y:e.clientY - rect.top,
            })
        }
    }

    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            if(isDragging){
                setPosition({
                    x: e.clientX - dragOffset.x,
                    y: e.clientY - dragOffset.y,
                })
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if(isDragging) {
            document.addEventListener("mousemove",handleMouseMove)
            document.addEventListener("mouseup",handleMouseUp)
        }

        return () => {
            document.removeEventListener("mousemove",handleMouseMove)
            document.removeEventListener("mouseup",handleMouseUp)
        }
    },[isDragging,dragOffset])       

        return (
            <div 
            ref={dialogRef}
            className="w-full max-w-3xl border-2 border-gray-400 shadow-lg bg-gray-200 rounded-sm overflow-hidden absolute z-10"
            style={{
                left: `${position.x}px`,
                right: `${position.y}px`,
                cursor: isDragging ? "grabbing" : "auto",
            }}
            >
                <div className="bg-blue-900 text-white px-2 py-1 flex justify-between items-center cursor-move" onMouseDown={handleMouseDown}>
                    <span>{title}</span>
                    <div className="flex gap-1">
                        <button 
                        className="bg-gray-300 hover:bg-gray-400 text-black w-6 h-6 flex items-center justify-center"
                        >
                            <Minus size={12} />
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-black w-6 h-6 flex items-center justify-center">
                            <Square size={12} />
                        </button>
                        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black w-6 h-6 flex items-center justify-center">
                            <X size={12} />
                        </button>
                    </div>
                </div>

                <div className="bg-gray-400 px-2 py-1 border-b border-gray-400">
                    <button className="hover:underline">TOPに戻る(T)</button>
                </div>

                {children || defaultContent }
            </div>
        )
    }