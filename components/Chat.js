import p from '../assets/image/entry.png';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '@/components/LanguageContext';
import Markdown from 'markdown-to-jsx';

export const Chat = () => {
  const { language } = useContext(LanguageContext);
  const greetingMessages = {
    en: 'Hi! Ask me about Yili...',
    fr: 'Bonjour! À propos de Yili, pose-moi des questions....',
  };
  const placeholderMessages = {
    en: 'Input your question here...',
    fr: 'Entrez votre question ici...',
  };
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const messageContainerRef = useRef(null);
  useEffect(() => {
    const container = messageContainerRef.current;

    if (container) {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      if (scrollHeight > clientHeight) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '' || isLoading) return;

    const userMessage = inputMessage;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), text: userMessage, sender: 'user' },
    ]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now() + 1, text: data.reply, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('发送消息失败:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now() + 1,
          text: 'Bot error, ask me later.',
          sender: 'bot',
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [isOpen]);
  return (
    <div className="d-flex flex-column h-100 w-100 p-3">
      <div
        ref={messageContainerRef}
        className="flex-grow-1 overflow-y-auto space-y-3 custom-scrollbar mb-3"
        style={{ minHeight: 0 }}
      >
        {messages.length === 0 && (
          <p className="text-center text-muted mt-5">{greetingMessages[language]}</p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex mt-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
          >
            <div
              className={`p-3 rounded-3 shadow-sm ${
                msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
              }`}
              style={{ maxWidth: '80%' }}
            >
              {msg.sender === 'bot' ? <Markdown>{msg.text}</Markdown> : msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="d-flex flex-column justify-content-start">
            <p className="placeholder-glow">
              <span className="placeholder col-6 bg-primary"></span>

              <span className="placeholder col-12 bg-primary"></span>
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-auto d-flex align-items-end pt-2">
        <textarea
          ref={textareaRef}
          placeholder={
            isLoading ? '...' : language === 'en' ? placeholderMessages.en : placeholderMessages.fr
          }
          className="form-control flex-grow-1 border border-gray-300 rounded"
          style={{
            resize: 'none',
            minHeight: '38px',
            maxHeight: '150px',
            overflowY: 'hidden',
          }}
          value={inputMessage}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className="btn btn-primary"
          disabled={isLoading || inputMessage.trim() === ''}
        >
          Send
        </button>
      </div>
    </div>
  );
};
