let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #d864d6;'>|</span>",
 });
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#d864d6;">Gestora intercultural, Data Analyst, Web developer, Cloud Engineer.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

