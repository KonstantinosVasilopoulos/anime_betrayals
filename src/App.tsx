import Home, { Betrayal } from './components/Home'

// List with initial betrayals
const betrayals: Betrayal[] = [
  {
    name: 'Moeka Kills Mayuri',
    description: 'Steins;Gate takes a while to pick up, especially during the first few episodes. Viewers are greeted with a maniac named Rintaro Okabe and his motley crew consisting of a sweet girl named Mayuri Shiina and hacker Itaru “Daru” Hashida. They start off with their plans for time traveling and tackling major conspiracies, but things begin to escalate when more of the cast finally trickles in. \nOne character, Moeka Kiryu, is a shy and absent- minded individual who often prefers to communicate with people via text messages.She decides to join in on Okabe’s plans to learn more about the phantom retro PC, the IBN 5100. Moeka’s constant obsession with the PC eventually lands her a spot in his crew as she becomes “Lab Member 005.” While she might have seemed like any other tech enthusiast, Moeka was actually trying to stop Okabe and his group from continuing their time machine project.In spite of her inconspicuous warnings, the group still completes their project and the team celebrates just before Moeka and a group of mercenaries bursts into their lab. Moeka then mercilessly shoots Mayuri, which pushes Okabe to start his emotionally taxing time - traveling adventure to save her.',
    anime: 'Steins;Gate',
    score: 8.7,
    image: 'img-1.webp'
  },
  {
    name: 'Aizen’s True Colors',
    description: 'While Sosuke Aizen might be known as the notorious villain in Bleach, he actually started out as a mild-mannered gentleman. He was the captain of the 5th Division in the Gotei 13 and took on the appearance of an honest, hardworking man. Sosuke was also polite to his peers and was extremely stoic under pressure, often preparing a plan for any given situation. It was these exact attributes that made him a perfect villain who would betray his group, the Soul Society. \nTo everyone’s surprise, Sosuke suddenly defects and abandons his post. He even goes as far as to change his appearance by removing his glasses and changing his hairstyle.That said, he also destroys all perceptions of loyalty to the Soul Society and even wages war against them with his own army of Arrancar.Sosuke constantly displays his immense power throughout the series as he nearly cut Ichigo’s body in half without much effort.In the end, he ended up facing defeat and was imprisoned for his crimes and betrayal.',
    anime: 'Bleach',
    score: 7.5
  },
  {
    name: 'Griffith Sacrifices His Saviors',
    description: 'With so much brutality going on in Berserk, it isn’t hard to see why it has one of the most impactful anime betrayals. The story centers around the “Black Swordsman,” a man named Guts who was once part of a mercenary group called the Band of Hawk. Their leader, Griffith, was a fearless man who ended the Hundred-Year War and brought peace to the war-torn land of Midland. Plenty of people looked up to the leader as their savior and even earned the nickname as the “Falcon of Light” because of his amazing deeds. His reputation took a sharp turn for the worse when he decided to copulate with Princess Charlotte as his impulsive actions led to a year-long imprisonment filled with crippling torture. \nThe Band of Hawk slowly begin to suffer without their leader, but they managed to find the resolve to break him out of prison. The torture had already taken its toll by the time they arrived, as Griffith was already a shell of his former self. If it wasn’t bad enough, their leader decides to sacrifice the Band of Hawk to become the God Hand, Femto.Griffith even went as far to force himself on Guts’ girlfriend, Casca, right in front of him. His molestation eventually led to Casca losing her sanity and giving birth to their demon child.',
    anime: 'Berserk',
    score: 9.0,
    image: 'img-2.webp'
  },
  {
    name: 'Itachi Commits Genocide',
    description: 'Naruto has become one of the most iconic animated shows, so it’s only understandable that it would have one of the most powerful anime betrayals. The Uchiha Clan was one of the four noble clans of Konohagakure, and also one of the strongest because of their Sharingan. Clan members also displayed natural battle skill and took part in wars against different factions. At some point in history, they planned to have a coup d’état to overthrow the Third Hokage and his administration because they doubted his leadership. \nSeveral clan members voted against the idea, seeing the coup as just another reason to start a new world war.Konohagakure elder Danzo Shimura acted with his own interest to protect Konoha and spoke to Itachi Uchiha regarding the uprising.Danzo offered him two options: let the Uchiha proceed with their coup that would lead to their death, or kill the clan himself while sparring his brother, Sasuke. Itachi decided to choose the latter idea and enlisted help from Tobi, wiping the entire clan out in one night.Itachi took all responsibility for his actions and urged Sasuke to seek revenge against him, pushing his brother to grow stronger. Sasuke eventually decided to gain more power by betraying his friends and siding with Orochimaru.',
    anime: 'Naturo',
    score: 10,
    image: 'itachi-Uchiha-best-moments-Naruto-4.jpeg'
  },
]

const App = () => (
  <Home initBetrayals={betrayals} />
)

export default App
