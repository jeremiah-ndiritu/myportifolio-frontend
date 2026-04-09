// import React from "react";

const AiChat = () => {
  return (
    <section className="absolute top-10 left-0 w-full min-h-[85vh] p-2 bg-white rounded shadow-lg z-40">
      {/* Header */}
      <h1 className="text-center text-2xl font-semibold mb-6">AI Assistance</h1>

      {/* Chat Window */}
      <div className="bg-black text-start text-slate-100 rounded p-4 min-h-[5em] mb-6">
        Hi, do you want to discuss your project with me?
      </div>

      {/* Input Area */}
      <div className="flex flex-col">
        <label htmlFor="aiinput" className="sr-only">
          Chat input
        </label>
        <textarea
          id="aiinput"
          placeholder="Type your message..."
          className="w-full border border-gray-300 rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          type="button"
          className="mt-3 self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Send
        </button>
      </div>
    </section>
  );
};

export default AiChat;
