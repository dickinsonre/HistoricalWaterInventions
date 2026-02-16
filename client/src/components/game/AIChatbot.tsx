import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Droplets, Loader2, Trash2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Welcome! I'm the Water History Expert. Ask me anything about ancient water engineering, civilizations, inventions, or hydraulic technology. What would you like to explore?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const handlePanelKeyDown = useCallback((e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Escape") handleClose();
  }, [handleClose]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    const apiMessages = updatedMessages.filter(m => m.role === "user" || m.role === "assistant");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) throw new Error("Chat request failed");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let buffer = "";
      let assistantContent = "";

      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.done) break;
            if (data.error) {
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: "Sorry, something went wrong. Please try again." };
                return updated;
              });
              setIsLoading(false);
              return;
            }
            if (data.content) {
              assistantContent += data.content;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: assistantContent };
                return updated;
              });
            }
          } catch {}
        }
      }

      if (!assistantContent) {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: "I didn't get a response. Please try again." };
          return updated;
        });
      }
    } catch (error) {
      setMessages(prev => [
        ...prev.filter(m => m.content !== ""),
        { role: "assistant", content: "Sorry, I couldn't process that request. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Chat cleared! What would you like to know about water engineering history?"
      }
    ]);
  };

  const suggestedQuestions = [
    "How did Roman aqueducts work?",
    "What is a qanat?",
    "Most impressive ancient dam?",
    "Tell me about the Norias of Hama",
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Water History Expert chat"
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-[var(--cerulean)] to-[var(--deep-ocean)] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center border-2 border-[var(--aqua)]/50 group"
          title="Ask the Water History Expert"
        >
          <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--gold)] rounded-full animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Water History Expert chat"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={handlePanelKeyDown}
          className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--aqua)]/30"
          style={{ backgroundColor: 'rgba(13, 37, 56, 0.98)' }}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[var(--deep-ocean)] to-[var(--river-blue)] border-b border-[var(--aqua)]/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--cerulean)]/30 flex items-center justify-center">
                <Droplets size={18} className="text-[var(--aqua)]" />
              </div>
              <div>
                <h3 className="font-heading text-sm text-[var(--gold)]">Water History Expert</h3>
                <p className="text-[10px] text-[var(--parchment)]/50">AI-powered water engineering guide</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                aria-label="Clear chat history"
                className="p-1.5 rounded-lg hover:bg-[var(--cerulean)]/20 text-[var(--parchment)]/50 hover:text-[var(--parchment)] transition-colors"
                title="Clear chat"
              >
                <Trash2 size={14} />
              </button>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="p-1.5 rounded-lg hover:bg-[var(--cerulean)]/20 text-[var(--parchment)]/50 hover:text-[var(--parchment)] transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3" role="log" aria-live="polite">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--cerulean)] text-white rounded-br-md"
                      : "bg-[var(--deep-ocean)]/80 text-[var(--parchment)]/90 border border-[var(--aqua)]/20 rounded-bl-md"
                  }`}
                >
                  {msg.content || (
                    <div className="flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-[var(--aqua)]" />
                      <span className="text-[var(--parchment)]/50 text-xs">Thinking...</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-3 pb-2">
              <p className="text-[10px] text-[var(--parchment)]/40 mb-1.5">Try asking:</p>
              <div className="flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => inputRef.current?.focus(), 50);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[var(--cerulean)]/10 border border-[var(--aqua)]/20 text-[var(--aqua)] hover:bg-[var(--cerulean)]/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 border-t border-[var(--aqua)]/20">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about water history..."
                disabled={isLoading}
                aria-label="Type your question about water history"
                className="flex-1 rounded-xl px-3 py-2 text-sm focus:outline-none disabled:opacity-50"
                style={{ backgroundColor: '#0d2538', color: '#ffffff', border: '1px solid rgba(0,200,255,0.3)' }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="p-2 rounded-xl bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
