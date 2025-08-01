import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultMessage = "Hi! I'm interested in Anjani Ambrosia. Please share more details about the project.";
  const whatsappNumber = "+919876543210";

  const handleSendMessage = () => {
    const messageToSend = message || defaultMessage;
    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = [
    "I want to schedule a site visit",
    "Please share floor plans and pricing",
    "What are the available units?",
    "Tell me about payment plans",
    "Share project brochure"
  ];

  return (
    <>
      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold">Anjani Ambrosia</h4>
                <p className="text-xs text-green-100">Sales Team</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hello! Welcome to Anjani Ambrosia. How can we help you today?
              </p>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium">Quick Messages:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(msg)}
                  className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors duration-200 border border-gray-200"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <div className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                rows={3}
              />
              
              <button
                onClick={handleSendMessage}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              We typically reply within minutes
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-float"
        aria-label="Open WhatsApp Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="fixed bottom-16 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-40 animate-bounce">
          Chat with us!
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;