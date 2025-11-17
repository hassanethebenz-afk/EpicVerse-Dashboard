import { useEffect, useState } from "react";

export default function Home() {
  const [botStatus, setBotStatus] = useState("Offline 🛑");
  const [serverCount, setServerCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [commandsCount, setCommandsCount] = useState(0);
  const [commands, setCommands] = useState([
    { name: "help", description: "Sample description for help" },
    { name: "ban", description: "Sample description for ban" },
    { name: "kick", description: "Sample description for kick" },
    { name: "play", description: "Sample description for play" },
    { name: "stop", description: "Sample description for stop" },
    { name: "userinfo", description: "Sample description for userinfo" },
    { name: "avatar", description: "Sample description for avatar" },
  ]);

  const [lang, setLang] = useState("en");

  useEffect(() => {
    const interval = setInterval(() => {
      const online = Math.random() > 0.5;
      setBotStatus(online ? "Online ✅" : "Offline 🛑");
      setServerCount(Math.floor(Math.random() * 5000));
      setUserCount(Math.floor(Math.random() * 100000));
      setCommandsCount(commands.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const t = {
    ar: {
      botStatus: "حالة البوت",
      serverCount: "عدد السيرفرات",
      userCount: "إجمالي المستخدمين",
      commandsCount: "إجمالي الأوامر",
      liveCommands: "الأوامر الحية",
      translateBtn: "Translate to English",
    },
    en: {
      botStatus: "Bot Status",
      serverCount: "Server Count",
      userCount: "Total Users",
      commandsCount: "Total Commands",
      liveCommands: "Live Commands",
      translateBtn: "Translate to Arabic",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>EpicVerse</h2>
        <a href="#" onClick={() => alert("Home clicked!")}>Home</a>
        <a href="#" onClick={() => alert("Commands clicked!")}>Commands</a>
        <a href="https://discord.gg/j3AUBUup" target="_blank">Support</a>
        <a href="#" onClick={() => alert("Donate clicked!")}>Donate</a>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.panel}>
          <h3>{t[lang].botStatus}</h3>
          <p style={styles.value}>{botStatus}</p>
        </div>
        <div style={styles.panel}>
          <h3>{t[lang].serverCount}</h3>
          <p style={styles.value}>{serverCount}</p>
        </div>
        <div style={styles.panel}>
          <h3>{t[lang].userCount}</h3>
          <p style={styles.value}>{userCount}</p>
        </div>
        <div style={styles.panel}>
          <h3>{t[lang].commandsCount}</h3>
          <p style={styles.value}>{commandsCount}</p>
        </div>

        <div style={styles.panel}>
          <h3>{t[lang].liveCommands}</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((cmd, i) => (
                <tr key={i}>
                  <td>{cmd.name}</td>
                  <td>{cmd.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button style={styles.translateBtn} onClick={toggleLang}>
          {t[lang].translateBtn}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Orbitron', sans-serif",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    color: "#00ffea",
    overflow: "hidden",
  },
  sidebar: {
    width: "220px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 40px rgba(0,255,234,0.5)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "25px",
  },
  mainContent: {
    flex: 1,
    overflowY: "auto",
    padding: "30px",
  },
  panel: {
    background: "rgba(0,0,0,0.45)",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "20px",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(0,255,234,0.5)",
  },
  value: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ff00ff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    color: "#00ffea",
  },
  translateBtn: {
    marginTop: "10px",
    padding: "10px 20px",
    borderRadius: "12px",
    background: "linear-gradient(145deg, #00ffea, #ff00ff)",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#000",
  },
};
