'use client';

import { useEffect } from 'react';

export default function ChatbotLoader() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://cc2.jamoutsourcing.com/jamcrmv2/public/ChatbotSDK/Trade_center_chatbot.js';
    script.async = true;
    script.defer = true;
    
    // Add load handler
    script.onload = () => {
      console.log('Chatbot script loaded successfully');
    };
    
    // Add error handler
    script.onerror = () => {
      console.error('Failed to load chatbot script');
    };
    
    // Append to body
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}