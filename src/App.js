import NavBar from './components/NavBar/NavBar'
import './components/style.css'
import "boxicons"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CustomProvider from './components/CartContext/CartContext'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'

function App () {
  return (
    <div>
      <CustomProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path='/' component={ItemListContainer} exact />
            <Route path='/categoria/:id' component={ItemListContainer} />
            <Route path='/item/:id/:count' component={ItemDetailContainer} />
            <Route path='/Cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </CustomProvider>
    </div>
  )
}

export default App
