'use client'
import Choose from "../lib/components/choose/choose";
import Client from "../lib/components/client-say/client";
import Experience from "../lib/components/experience/experience";
import Header from "../lib/components/header/header";
import Simple from "../lib/components/simple/simple";


export default function Home() {
  return (
    <div>
      <main className="overflow-hidden">
        <Header/>
        <Choose />
        <Client />
        <Simple />
        <Experience />
      </main>
      <script
      async
      src="https://intern-chatbot-widget.zodinet.tech/widget.js"
      data-client-key="70f9239c-a6e9-43c3-b340-379779493591"
    ></script>
    </div>  
  );
}
