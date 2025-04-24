"use client"

import { useState } from "react"
import WindowDialog from "./WindowDialog"
import BannerHeader from "./BannerHeader"
import DesktopIcon from "./Desktop-icon"
import { Folder, FileText, Globe, ImageIcon, Mail } from "lucide-react"

export default function RetroDesktop() {
  const [openWindows, setOpenWindows] = useState<{
    about: boolean
    myComputer: boolean
    myDocuments: boolean
    internetExplorer: boolean
    mail: boolean
  }>({
    about: true,
    myComputer: false,
    myDocuments: false,
    internetExplorer: false,
    mail: false,
  })

  const toggleWindow = (window: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({
      ...prev,
      [window]: !prev[window],
    }))
  }

  return (
    <div className="min-h-screen bg-teal-600 flex flex-col items-center py-8 px-4 relative">
      <BannerHeader />

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
          onClick={() => toggleWindow("about")}
        />
      </div>

      {/* Windows */}
      <div className="w-full flex flex-col items-center gap-4 z-10">
        {openWindows.about && (
          <WindowDialog
            title="このサイトについて"
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
            <div className="p-4">
              <h2 className="font-bold mb-2">マイコンピュータ</h2>
              <p>ここにはコンピュータのドライブやフォルダが表示されます。</p>
            </div>
          </WindowDialog>
        )}
        {openWindows.myDocuments && (
          <WindowDialog
            title="マイドキュメント"
            onClose={() => toggleWindow("myDocuments")}
            initialPosition={{ x: 200, y: 150 }}
          >
            <div className="p-4">
              <h2 className="font-bold mb-2">マイドキュメント</h2>
              <p>ここにはドキュメントが表示されます。</p>
            </div>
          </WindowDialog>
        )}
        {openWindows.internetExplorer && (
          <WindowDialog
            title="Internet Explorer"
            onClose={() => toggleWindow("internetExplorer")}
            initialPosition={{ x: 250, y: 200 }}
          >
            <div className="p-4">
              <h2 className="font-bold mb-2">Internet Explorer</h2>
              <p>インターネットを閲覧するためのブラウザです。</p>
            </div>
          </WindowDialog>
        )}
        {openWindows.mail && (
          <WindowDialog title="メール" onClose={() => toggleWindow("mail")} initialPosition={{ x: 300, y: 250 }}>
            <div className="p-4">
              <h2 className="font-bold mb-2">メール</h2>
              <p>メールの送受信を行うアプリケーションです。</p>
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
                className="bg-gray-200 border border-gray-400 px-2 py-1 text-xs flex-1 max-w-[150px] text-left truncate"
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
