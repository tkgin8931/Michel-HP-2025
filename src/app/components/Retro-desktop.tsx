"use client"

import { useState } from "react"
import WindowDialog from "./WindowDialog"
// import BannerHeader from "./BannerHeader"
import DesktopIcon from "./Desktop-icon"
import { Folder, FileText, Globe, ImageIcon, Mail } from "lucide-react"
import P1 from "../../../public/IMG_7066.jpeg"
import P2 from "../../../public/IMG_8495.png"
import P3 from "../../../public/IMG_9057.jpeg"
import P4 from "../../../public/IMG_9219.jpeg"
import P5 from "../../../public/IMG_9400.jpeg"
import P6 from "../../../public/IMG_9490.jpeg"
import P7 from "../../../public/IMG_9743.jpeg"
import P8 from "../../../public/IMG_6076.jpg"
import P9 from "../../../public/IMG_6081.jpg"
import P10 from "../../../public/IMG_6162.jpg"
import P11 from "../../../public/IMG_6271.jpg"
import P12 from "../../../public/IMG_6676.jpg"
import P13 from "../../../public/IMG_6838.jpg"
import P14 from "../../../public/IMG_6858.jpg"
import P15 from "../../../public/IMG_6958.jpg"
import P16 from "../../../public/IMG_6978.jpg"

import Image from "next/image"
import ContactForm from "./Contact-form"
import MICHEL from "../../../public/763178630.093099.jpeg"

export default function RetroDesktop() {
  const [openWindows, setOpenWindows] = useState<{
    about: boolean
    myComputer: boolean
    myDocuments: boolean
    internetExplorer: boolean
    mail: boolean
    picture: boolean
  }>({
    about: true,
    myComputer: false,
    myDocuments: false,
    internetExplorer: false,
    mail: true,
    picture: true,
  })

  // Window Z-Index Management
  const [windowZIndices, setWindowZIndices] = useState<Record<string, number>>({
    about: 10,
    myComputer: 10,
    myDocuments: 10,
    internetExplorer: 10,
    mail: 11,
    picture: 12,
  })
  const [maxZ, setMaxZ] = useState(20)

  const focusWindow = (window: string) => {
    const newZ = maxZ + 1
    setMaxZ(newZ)
    setWindowZIndices((prev) => ({
      ...prev,
      [window]: newZ,
    }))
  }

  const toggleWindow = (window: keyof typeof openWindows) => {
    const isOpening = !openWindows[window]
    setOpenWindows((prev) => ({
      ...prev,
      [window]: isOpening,
    }))
    if (isOpening) {
      focusWindow(window)
    }
  }

  return (
    <div className="h-screen bg-teal-600 flex flex-col relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        <DesktopIcon
          name="フォルダ"
          icon={<Folder className="w-10 h-10 text-yellow-300" />}
          onClick={() => toggleWindow("myComputer")}
        />
        <DesktopIcon
          name="ドキュメント"
          icon={<FileText className="w-10 h-10 text-white" />}
          onClick={() => toggleWindow("myDocuments")}
        />
        <DesktopIcon
          name="インターネット"
          icon={<Globe className="w-10 h-10 text-blue-400" />}
          onClick={() => toggleWindow("internetExplorer")}
        />
        <DesktopIcon
          name="メール"
          icon={<Mail className="w-10 h-10 text-yellow-400" />}
          onClick={() => toggleWindow("mail")}
        />
        <DesktopIcon
          name="ピクチャ"
          icon={<ImageIcon className="w-10 h-10 text-green-400" />}
          onClick={() => toggleWindow("picture")}
        />
      </div>

      {/* Windows Area */}
      <div className="flex-1 relative">
        {openWindows.about && (
          <WindowDialog
            title="宮田マイケル公式HP"
            onClose={() => toggleWindow("about")}
            initialPosition={{ x: 100, y: 50 }}
            zIndex={windowZIndices.about}
            onFocus={() => focusWindow("about")}
          />
        )}
        {openWindows.myComputer && (
          <WindowDialog
            title="マイコンピュータ"
            onClose={() => toggleWindow("myComputer")}
            initialPosition={{ x: 150, y: 100 }}
            zIndex={windowZIndices.myComputer}
            onFocus={() => focusWindow("myComputer")}
          >
            <div className="p-4 text-black">
              <h2 className="font-bold mb-2 ">マイコンピュータ</h2>
              <p >ここにはコンピュータのドライブやフォルダが表示されます。</p>
            </div>
          </WindowDialog>
        )}
        {openWindows.myDocuments && (
          <WindowDialog
            title="マイドキュメント"
            onClose={() => toggleWindow("myDocuments")}
            initialPosition={{ x: 200, y: 150 }}
            zIndex={windowZIndices.myDocuments}
            onFocus={() => focusWindow("myDocuments")}
          >
            <div className="p-4 text-black">
              <h2 className="font-bold mb-2">マイドキュメント</h2>
              <p>ここにはドキュメントが表示されます。</p>
            </div>
          </WindowDialog>
        )}
        {openWindows.internetExplorer && (
          <WindowDialog
            title="宮田マイケル公式HP"
            onClose={() => toggleWindow("internetExplorer")}
            initialPosition={{ x: 100, y: 50 }}
            zIndex={windowZIndices.internetExplorer}
            onFocus={() => focusWindow("internetExplorer")}
          />
        )}
        {openWindows.mail && (
          <WindowDialog
            title="お問い合わせフォーム"
            onClose={() => toggleWindow("mail")}
            initialPosition={{ x: 300, y: 250 }}
            zIndex={windowZIndices.mail}
            onFocus={() => focusWindow("mail")}
          >
            <div className="text-black">
              <ContactForm />
            </div>
          </WindowDialog>
        )}
        {openWindows.picture && (
          <WindowDialog
            title="ピクチャ"
            onClose={() => toggleWindow("picture")}
            initialPosition={{ x: 400, y: 100 }}
            zIndex={windowZIndices.picture}
            onFocus={() => focusWindow("picture")}
          >
            <div className="p-4 text-black">
              <h2 className="font-bold mb-2">ピクチャ</h2>
              <p>最近または過去の日々</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between gap-8">
                  <Image src={P1} alt="p1" width={80} />
                  <Image src={P2} alt="p2" width={80} />
                  <Image src={P3} alt="p3" width={80} />
                  <Image src={P8} alt="p8" width={80} />
                  <Image src={P9} alt="p9" width={80} />
                  <Image src={P10} alt="p10" width={80} />
                  <Image src={P11} alt="p11" width={80} />
                  <Image src={P12} alt="p12" width={80} />
                </div>

                <div className="flex flex-row items-center justify-between gap-8">
                  <Image src={P4} alt="p4" width={80} />
                  <Image src={P5} alt="p5" width={80} />
                  <Image src={P6} alt="p6" width={80} />
                  <Image src={P7} alt="p7" width={80} />
                  <Image src={P13} alt="p13" width={80} />
                  <Image src={P14} alt="p14" width={80} />
                  <Image src={P15} alt="p15" width={80} />
                  <Image src={P16} alt="p16" width={80} />
                </div>
              </div>
            </div>
          </WindowDialog>
        )}
      </div>

      {/* Taskbar - Windows 98 Redesign */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center px-1 gap-1 z-[9999] shadow-[inset_0_1px_0_0_#dfdfdf]">
        <button className="h-8 bg-[#c0c0c0] text-black px-2 flex items-center gap-1.5 shadow-[1px_1px_0_0_#000000,inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#808080] active:shadow-[inset_1px_1px_0_0_#000000,1px_1px_0_0_#ffffff] active:translate-x-[1px] active:translate-y-[1px]">
          <div className="w-5 h-5 flex items-center justify-center bg-gray-400 p-0.5 border border-black/20">
            <div className="grid grid-cols-2 gap-0.5 w-full h-full">
              <div className="bg-red-500" />
              <div className="bg-green-500" />
              <div className="bg-blue-500" />
              <div className="bg-yellow-500" />
            </div>
          </div>
          <span className="font-bold text-xs">Start</span>
        </button>

        <div className="h-6 w-0.5 bg-gray-500 border-r border-white mx-0.5" />

        <div className="flex flex-1 gap-1 overflow-x-auto no-scrollbar h-full items-center">
          {Object.entries(openWindows).map(([key, isOpen]) => {
            if (!isOpen) return null;
            const isActive = windowZIndices[key] === maxZ;
            return (
              <button
                key={key}
                className={`flex items-center gap-1.5 px-2 h-8 text-[11px] font-bold min-w-[100px] max-w-[160px] truncate border-2 ${isActive
                  ? "bg-[#dfdfdf] border-black shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#ffffff] translate-x-[0.5px] translate-y-[0.5px]"
                  : "bg-[#c0c0c0] border-white shadow-[1px_1px_0_0_#000000,inset_-1px_-1px_0_0_#808080]"
                  }`}
                onClick={() => focusWindow(key)}
              >
                <div className="w-3.5 h-3.5 bg-gray-400 flex-shrink-0 border border-black/10" />
                <span className="truncate">
                  {key === "about" ? "このサイトについて"
                    : key === "myComputer" ? "マイコンピュータ"
                      : key === "myDocuments" ? "マイドキュメント"
                        : key === "internetExplorer" ? "Internet Explorer"
                          : key === "mail" ? "メール"
                            : "ピクチャ"}
                </span>
              </button>
            )
          })}
        </div>

        <div className="ml-auto flex items-center px-2 py-0.5 h-8 border-2 border-gray-500 bg-[#c0c0c0] shadow-[inset_1px_1px_0_0_#808080,1px_1px_0_0_#ffffff] text-black text-[11px] font-medium gap-2">
          <Image src={MICHEL} alt="sys" width={14} height={14} className="opacity-80" />
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  )
}
