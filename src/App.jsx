import './App.scss'
import Header from './components/Header'
import Card from './components/Card'
import dataBase from './components/cardData'
import Footer from './components/Footer'

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
      <Footer />
    </>
  )
}

export default App
