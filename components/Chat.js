import p from "../assets/image/entry.png";
import React, { useEffect, useRef, useState } from "react";

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || isLoading) return;

    const userMessage = inputMessage;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), text: userMessage, sender: "user" },
    ]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now() + 1, text: data.reply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("发送消息失败:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now() + 1,
          text: "Bot error, ask me later.",
          sender: "bot",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const textareaRef = useRef(null);

  const handleTextareaChange = (e) => {
    setInputMessage(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [isOpen]);
  return (
    <div className="d-flex flex-column h-100 w-100 p-3">
      <div
        className="flex-grow-1 overflow-y-auto space-y-3 custom-scrollbar mb-3"
        style={{ minHeight: 0 }}
      >
        {messages.length === 0 && (
          <p className="text-center text-muted mt-5">
            Hi！ Ask me about Yili...
          </p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}
          >
            <div
              className={`p-3 rounded-3 shadow-sm ${
                msg.sender === "user"
                  ? "bg-primary text-white"
                  : "bg-light text-dark"
              }`}
              style={{ maxWidth: "80%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="d-flex justify-content-start">
            <div
              className="bg-light p-3 rounded-3 text-muted"
              style={{ animation: "pulse 1.5s infinite" }}
            >
              ...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-auto d-flex align-items-end pt-2">
        <textarea
          ref={textareaRef}
          placeholder={isLoading ? "请稍候..." : "输入你的问题..."}
          className="form-control flex-grow-1 border border-gray-300 rounded"
          style={{
            resize: "none",
            minHeight: "38px",
            maxHeight: "150px",
            overflowY: "hidden",
          }}
          value={inputMessage}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className="btn btn-primary"
          disabled={isLoading || inputMessage.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
};
