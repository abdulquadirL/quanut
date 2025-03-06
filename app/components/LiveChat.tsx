"use client"
import { useEffect } from "react";

export default function LiveChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67bade3feb6818190c4dd41a/1ikov8a4t/default";
    script.async = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);
  }, []);

  return null;
}

// export function LiveChat() {
//   return <div className="fixed bottom-4 right-4 bg-blue-500 p-3 text-white">Chat</div>;
// }
