import Home, { Betrayal } from './components/Home'

const betrayals: Betrayal[] = [
  {
    name: 'Moeka Kills Mayuri',
    description: '',
    saga: 'Steins;Gate',
    score: 8.7
  },
  {
    name: 'Aizen’s True Colors',
    description: 'While Sosuke Aizen might be known as the notorious villain in Bleach, he actually started out as a mild-mannered gentleman. He was the captain of the 5th Division in the Gotei 13 and took on the appearance of an honest, hardworking man. Sosuke was also polite to his peers and was extremely stoic under pressure, often preparing a plan for any given situation. It was these exact attributes that made him a perfect villain who would betray his group, the Soul Society.To everyone’s surprise, Sosuke suddenly defects and abandons his post.He even goes as far as to change his appearance by removing his glasses and changing his hairstyle.That said, he also destroys all perceptions of loyalty to the Soul Society and even wages war against them with his own army of Arrancar.Sosuke constantly displays his immense power throughout the series as he nearly cut Ichigo\’s body in half without much effort.In the end, he ended up facing defeat and was imprisoned for his crimes and betrayal.',
    saga: 'Bleach',
    score: 7.5
  },
]

const App = () => (
  <Home initBetrayals={betrayals} />
)

export default App
