"use client"

import { useEffect, useState } from "react"

const ToolsButton = () => {
  // Using useState to handle styles to work better with Next.js
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    window.open("https://tools.zahidhasan.com.bd/", "_blank")
  }

  if (!mounted) return null

  return (
    <div>
      <style jsx global>{`
        @keyframes floatingAnimation {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .floating-button {
          position: fixed;
          bottom: 20px;
          left: 20px;
          padding: 15px 25px;
          background-color: #00B786;
          box-shadow: 0 0 20px #00B786;
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          z-index: 1000;
          animation: floatingAnimation 3s ease-in-out infinite;
        }
      `}</style>
      <button className="floating-button" onClick={handleClick}>
        Get More Tools
      </button>
    </div>
  )
}

export default ToolsButton

