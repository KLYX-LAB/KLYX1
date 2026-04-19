* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
  background: black;
  color: white;
  overflow-x: hidden;
}

/* PARTICLES CANVAS */
#particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* NAV */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  backdrop-filter: blur(15px);
  z-index: 1000;
}

.socials a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-size: 14px;
}

/* SCENES */
.scene {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 40px;
}

.dark {
  background: #050505;
}

/* TYPE */
.type {
  font-size: clamp(2rem, 5vw, 5rem);
}

/* INPUT */
input, textarea {
  display: block;
  margin: 10px auto;
  padding: 12px;
  width: 300px;
  background: #111;
  border: none;
  color: white;
}

button {
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  background: white;
  color: black;
  cursor: pointer;
}

/* FOOTER COPY */
.copy {
  margin-top: 20px;
  font-size: 12px;
  color: #666;
}
