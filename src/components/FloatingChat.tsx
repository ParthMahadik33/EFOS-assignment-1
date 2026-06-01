import { useEffect } from "react";

// Extend window to include Chatbase function
declare global {
  interface Window {
    chatbase?: (command: string, options?: Record<string, unknown>) => void;
  }
}

export function FloatingChat() {
  useEffect(() => {
    // Load Chatbase script and initialize
    const initializeChatbase = async () => {
      // Initialize chatbase function if not already present
      if (!window.chatbase) {
        window.chatbase = (...args: unknown[]) => {
          if (!window.chatbase!.q) {
            window.chatbase!.q = [];
          }
          window.chatbase!.q.push(args);
        };
        // Add proxy for property access
        window.chatbase = new Proxy(window.chatbase, {
          get(target: any, prop: string) {
            if (prop === "q") {
              return target.q;
            }
            return (...args: unknown[]) => target(prop, ...args);
          },
        });
      }

      // Load Chatbase embed script
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "VFo3rPyORQ_NroNKog-fj";
      script.domain = "www.chatbase.co";
      script.async = true;
      document.body.appendChild(script);
    };

    initializeChatbase();
  }, []);

  // Chatbase will handle the UI, so we don't need our custom button
  return null;
}
