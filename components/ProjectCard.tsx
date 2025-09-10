"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"

type Props = {
  title: string
  subtitle?: string
  tags: string[]
  video?: string
  // link?: string  // 不再用外链跳转
}

export default function ProjectCard({ title, subtitle, tags, video }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const enterFullscreen = async () => {
    const el = videoRef.current
    if (!el) return
    try {
      // 进入全屏
      await el.requestFullscreen()
      // 自动播放（如果用户交互允许）
      await el.play().catch(() => {})
    } catch {
      // 兼容前缀（极少数旧浏览器）
      // @ts-ignore
      el.webkitRequestFullscreen?.()
    }
  }

  return (
    <Card className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg">
      <div className="aspect-video w-full bg-black/40">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            // 点击视频任意位置进入全屏
            onClick={enterFullscreen}
            onDoubleClick={enterFullscreen}
            className="h-full w-full object-cover cursor-pointer"
            // 给用户保留控制条（需要时可隐藏）
            controls
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-white/40">
            [ Demo Preview ]
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
{subtitle && <p className="text-sm text-gray-300 mt-1">{subtitle}</p>}

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
