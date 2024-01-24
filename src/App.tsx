import { useRef, useState } from "react";
import { MessageInt } from "./model";
import Message from "./components/Message"

const App = () => {
  // EN lui mettant le type HTMLinputElement pour lui dire qu'il a a faire a un input
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = useState<MessageInt[]>([]);


  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputMessage) {
      const mess: MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }
      setMessData((prevData) => [...prevData, mess]);
  // Logique d'envoie de données, on ne peut pas remettre la valeur a 0 en typescript comme en React pour le useRef.
  (document.getElementById("inputMessage") as HTMLInputElement).value = "";
    }



  
  }

  return (
    <div>
      <h1>Poster un message</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="" id="inputMessage" placeholder='Entrez un message' ref={inputMessage} />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Liste des messages </h2>
      <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id} />
      ))}</div>
    </div>
  );
};

export default App;