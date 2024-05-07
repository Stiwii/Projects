import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  const emusk = {
    initialIsFollowing: true,
    userName: "elonmusk",
    name: "Elon Musk",
    formatUserName: formatUserName,
  };
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      initialIsFollowing: true,
      formatUserName: formatUserName,
    },
    {
      userName: "pheralb",
      name: "Pablo Hernandez",
      initialIsFollowing: false,
      formatUserName: formatUserName,
    },
    {
      userName: "elonmusk",
      name: "Elon Musk",
      initialIsFollowing: true,
      formatUserName: formatUserName,
    },
    { userName: "TMChein", name: "Tomas", initialIsFollowing: false },
  ];

  // const [name, setName] = useState("midudev");
  return (
    <section className="App">
      {/* <TwitterFollowCard
        formatUserName={formatUserName}
        initialIsFollowing={true}
        userName={name}
        name="Miguel Angel Duran"
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialIsFollowing={false}
        userName="pheralb"
        name="Pablo Hernandez"
      />
      ;
      <TwitterFollowCard {...emusk} />;
      <button
        onClick={() => {
          setName("pedromichel");
        }}
      >
        Cambio nombre
      </button>
      ; */}
      {users.map(({ userName, name, initialIsFollowing }, index) => (
        <TwitterFollowCard
          key={index}
          userName={userName}
          initialIsFollowing={initialIsFollowing}
          name={name}
        />
      ))}
    </section>
  );
}
