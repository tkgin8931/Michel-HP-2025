"use client"

import RetroDesktop from "./components/Retro-desktop"
import WindowDialog from "./components/WindowDialog";
import useMediaQuery from "./hooks/useMediaQuery"

export default function Top() {
  const isDesktop = useMediaQuery(768);
  return (
    <div>
      {isDesktop ? <RetroDesktop /> : <WindowDialog title="このサイトについて" onClose={() => 0} initialPosition={{ x: 0, y: 50 }} />}
    </div>
  )
}