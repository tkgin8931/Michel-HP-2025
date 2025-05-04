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

  const toggleWindow = (window: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({
      ...prev,
      [window]: !prev[window],
    }))
  }

  return (
    <div className="min-h-screen bg-teal-600 flex flex-col py-8 px-4 relative">
      {/* <BannerHeader /> */}

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

      {/* Windows */}
      <div className=" flex flex-col gap-4 z-10">
        {openWindows.about && (
          <WindowDialog
            title="宮田マイケル公式HP"
            onClose={() => toggleWindow("about")}
            initialPosition={{ x: 100, y: 50 }}
          />
        )}
        {openWindows.myComputer && (
          <WindowDialog
            title="マイコンピュータ"
            onClose={() => toggleWindow("myComputer")}
            initialPosition={{ x: 150, y: 100 }}
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
            onClose={() => toggleWindow("about")}
            initialPosition={{ x: 100, y: 50 }}
          />
        )}
        {openWindows.mail && (
          <WindowDialog title="お問い合わせフォーム" onClose={() => toggleWindow("mail")} initialPosition={{ x: 300, y: 250 }}>
            <div className="text-black">
                <ContactForm />
            </div>
          </WindowDialog>
        )}
        {openWindows.picture && (
          <WindowDialog title="ピクチャ" onClose={() => toggleWindow("picture")} initialPosition={{ x: 400, y: 100 }}>
            <div className="p-4 text-black">
              <h2 className="font-bold mb-2">ピクチャ</h2>
              <p>最近または過去の日々</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between gap-8">
                  <Image
                    src={P1}
                    alt="p1"
                    width={80}
                  />
                  <Image
                    src={P2}
                    alt="p2"
                    width={80}
                  />

                  <Image
                    src={P3}
                    alt="p3"
                    width={80}
                  />

                  <Image
                    src={P8}
                    alt="p8"
                    width={80}
                  />

                  <Image
                    src={P9}
                    alt="p9"
                    width={80}
                  />

                  <Image
                    src={P10}
                    alt="p10"
                    width={80}
                  />

                  <Image
                    src={P11}
                    alt="p11"
                    width={80}
                  />

                  <Image
                    src={P12}
                    alt="p12"
                    width={80}
                  />
                </div>

                <div className="flex flex-row items-center justify-between gap-8">
                  <Image
                    src={P4}
                    alt="p4"
                    width={80}
                  />
                  <Image
                    src={P5}
                    alt="p5"
                    width={80}
                  />

                  <Image
                    src={P6}
                    alt="p6"
                    width={80}
                  />

                  <Image
                    src={P7}
                    alt="p7"
                    width={80}
                  />
                  <Image
                    src={P13}
                    alt="p13"
                    width={80}
                  />
                  <Image
                    src={P14}
                    alt="p14"
                    width={80}
                  />
                  <Image
                    src={P15}
                    alt="p15"
                    width={80}
                  />
                  <Image
                    src={P16}
                    alt="p16"
                    width={80}
                  />
                </div>
              </div>

            </div>
          </WindowDialog>
        )}
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-gray-300 border-t-2 border-gray-400 flex items-center px-2">
        <button className="bg-green-600 text-white px-4 py-1 rounded-sm mr-2 flex items-center gap-1">
          <span className="font-bold">再起動</span>
        </button>
        {Object.entries(openWindows).map(
          ([key, isOpen]) =>
            isOpen && (
              <button
                key={key}
                className="bg-gray-200 border border-gray-400 px-2 py-1 text-xs text-black flex-1 justify-center max-w-[150px] text-left truncate"
                onClick={() => toggleWindow(key as keyof typeof openWindows)}
              >
                {key === "about"
                  ? "このサイトについて"
                  : key === "myComputer"
                    ? "マイコンピュータ"
                    : key === "myDocuments"
                      ? "マイドキュメント"
                      : key === "internetExplorer"
                        ? "Internet Explorer"
                        : "メール"}
              </button>
            ),
        )}
        <div className="ml-auto bg-gray-200 border border-gray-400 px-2 py-1 text-xs">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}
