import {connect, sendMsg} from "./api/index.ts";

export default function Home() {
  connect();

  const send = () => {
    console.log("Hello");
    sendMsg("Hello");
  };

  return (
    <div>
      <button onClick={send}>Send</button>
    </div>
  );
}

