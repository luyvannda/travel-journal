import './App.scss'
import Header from './components/Header'
import Card from './components/Card'
import dataBase from './components/cardData'

function App() {

  const cards = dataBase.map((data) => {
    return <Card
      key={data.id}
      item={data}
    />
  })

  return (
    <>
      <Header />
      <section>
        {cards}
      </section>
    </>
  )
}

export default App
