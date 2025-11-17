export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EpicVerse Dashboard</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

    body {
      margin: 0;
      font-family: 'Orbitron', sans-serif;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      color: #00ffea;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      overflow: hidden;
      transition: all 0.5s ease;
    }

    /* Particle background */
    #particles-js { position:absolute; top:0; left:0; width:100%; height:100%; z-index:0; }

    body.light-mode { background: #f0f0f0; color: #000; }

    body.light-mode .container { background: rgba(255,255,255,0.9); box-shadow: 0 0 50px rgba(0,0,0,0.3); }

    body::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: repeating-linear-gradient(
        45deg,
        rgba(0,255,234,0.05),
        rgba(0,255,234,0.05) 2px,
        transparent 2px,
        transparent 10px
      );
      animation: move 10s linear infinite;
      z-index: 0;
    }

    @keyframes move {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }

    .container {
      position: relative;
      text-align: center;
      padding: 40px 60px;
      background: rgba(0, 0, 0, 0.85);
      border-radius: 20px;
      box-shadow: 0 0 50px rgba(0, 255, 234, 0.6);
      animation: glow 2s ease-in-out infinite alternate;
      z-index: 1;
      max-width: 800px;
    }

    @keyframes glow {
      0% { box-shadow: 0 0 20px rgba(0, 255, 234, 0.5); }
      100% { box-shadow: 0 0 40px rgba(0, 255, 234, 1); }
    }

    h1 {
      font-size: 2.8rem;
      margin-bottom: 15px;
      text-shadow: 0 0 10px #00ffea, 0 0 20px #ff00ff;
    }

    h2 { font-size: 1.6rem; margin: 20px 0 10px; color: #ff00ff; }
    p { font-size: 1rem; margin: 10px 0; line-height: 1.5; }
    .status { font-weight: bold; }
    .status.online { color: #00ff00; animation: pulse 1.5s infinite; }
    .status.offline { color: #ff0000; }

    @keyframes pulse {
      0% { text-shadow: 0 0 5px #00ff00; }
      50% { text-shadow: 0 0 20px #00ff00; }
      100% { text-shadow: 0 0 5px #00ff00; }
    }

    .buttons { margin-top: 20px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
    .buttons a, .buttons button {
      text-decoration: none;
      color: #000;
      background: #00ffea;
      padding: 12px 25px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
    }
    .buttons a:hover, .buttons button:hover {
      background: #ff00ff;
      color: #fff;
      box-shadow: 0 0 15px #ff00ff, 0 0 30px #00ffea;
      animation: bounce 0.5s infinite alternate;
    }

    @keyframes bounce {
      0% { transform: translateY(0); }
      100% { transform: translateY(-5px); }
    }

    .section { margin-top: 20px; background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; text-align: left; }

    /* Stats cards */
    #stats-cards { display:flex; justify-content:center; gap:15px; flex-wrap:wrap; margin-top:15px; }
    .card {
      background: rgba(0,255,234,0.1);
      padding: 20px;
      border-radius: 15px;
      min-width: 120px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover { transform: scale(1.05); box-shadow: 0 0 20px #00ffea; }

    /* Activity log */
    #activity-log { list-style: none; padding-left: 0; max-height:150px; overflow-y:auto; }
    #activity-log li { margin-bottom:5px; }
  </style>
</head>
<body>
  <div id="particles-js"></div>

  <div class="container" id="dashboard">
    <h1 id="title">Welcome to EpicVerse Bot Dashboard</h1>
    <p id="status-text">Bot Status: <span class="status online">Online 🟢</span></p>

    <div class="section" id="about">
      <h2 id="about-title">About the Bot</h2>
      <p id="about-text">EpicVerse is a futuristic, multifunction Discord bot designed to enhance your server experience. It includes moderation, entertainment, and utility features to make your server lively and secure.</p>
    </div>

    <div class="section" id="owner">
      <h2 id="owner-title">Owner</h2>
      <p id="owner-text">Created and maintained by <strong>Vynux</strong>. Support and contributions are welcome!</p>
    </div>

    <div class="section" id="stats-cards">
      <div class="card">Users: <span id="users">120</span></div>
      <div class="card">Servers: <span id="servers">15</span></div>
      <div class="card">Roblox Players: <span id="roblox">85</span></div>
    </div>

    <div class="section">
      <h2>Recent Activity</h2>
      <ul id="activity-log">
        <li>User1 joined server</li>
        <li>User2 used !play command</li>
        <li>Bot restarted at 12:45 PM</li>
      </ul>
    </div>

    <div class="buttons">
      <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&scope=bot" target="_blank">Invite Bot</a>
      <a href="https://discord.gg/j3AUBUup" target="_blank">Support Server</a>
      <button id="translate-btn">Translate to Arabic</button>
      <button id="mode-btn">Toggle Dark/Light Mode</button>
    </div>

    <canvas id="statsChart" width="400" height="200" style="margin-top:20px;"></canvas>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    // Particle background
    particlesJS('particles-js', {
      particles: {
        number: { value: 50 },
        color: { value: "#00ffea" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: "#00ffea", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 1 }
      }
    });

    // Dark/Light mode
    const body = document.body;
    document.getElementById('mode-btn').onclick = () => { body.classList.toggle('light-mode'); }

    // Arabic/English toggle
    const btn = document.getElementById('translate-btn');
    let arabic = false;
    btn.addEventListener('click', () => {
      arabic = !arabic;
      if(arabic) {
        document.getElementById('title').innerText = 'مرحباً بكم في لوحة تحكم EpicVerse Bot';
        document.getElementById('status-text').innerHTML = 'حالة البوت: <span class="status online">متصل 🟢</span>';
        document.getElementById('about-title').innerText = 'عن البوت';
        document.getElementById('about-text').innerText = 'EpicVerse هو بوت ديسكورد متعدد الوظائف مصمم لتعزيز تجربة سيرفرك. يشمل ميزات الإدارة، الترفيه، والأدوات لجعل سيرفرك نشط وآمن.';
        document.getElementById('owner-title').innerText = 'المالك';
        document.getElementById('owner-text').innerHTML = 'تم الإنشاء والصيانة بواسطة <strong>Vynux</strong>. الدعم والمساهمات مرحب بها!';
        btn.innerText = 'Translate to English';
      } else {
        document.getElementById('title').innerText = 'Welcome to EpicVerse Bot Dashboard';
        document.getElementById('status-text').innerHTML = 'Bot Status: <span class="status online">Online 🟢</span>';
        document.getElementById('about-title').innerText = 'About the Bot';
        document.getElementById('about-text').innerText = 'EpicVerse is a futuristic, multifunction Discord bot designed to enhance your server experience. It includes moderation, entertainment, and utility features to make your server lively and secure.';
        document.getElementById('owner-title').innerText = 'Owner';
        document.getElementById('owner-text').innerHTML = 'Created and maintained by <strong>Vynux</strong>. Support and contributions are welcome!';
        btn.innerText = 'Translate to Arabic';
      }
    });

    // Charts
    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Users Online',
          data: [120, 150, 130, 160, 180],
          borderColor: '#00ffea',
          backgroundColor: 'rgba(0,255,234,0.2)',
          tension: 0.4
        }]
      }
    });
  </script>
</body>
</html>
  `);
}
