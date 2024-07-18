import './App.css'
import Add from './features/Add'
import Filters from './features/Filters'
import Products from './features/Products'
import View from './features/View'

function App() {


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-600 bg-yellow-200">
      Hello world!
    </h1> */}

      {/* <div class="flex">
        <div class="flex-1 flex-col w-64 ...">
          <Add />
        </div>
        <div class="flex-1 flex-col w-64 ...">
          <View />
        </div>

      </div> */}

        {/* <Products/>  */}
        <Filters/>


    </>
  )
}

export default App
