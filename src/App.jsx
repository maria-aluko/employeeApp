import './App.css';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Footer from './components/Footer/footer'
import Header from './components/Header/header'

function App() {
  return (
    <>
      <div>
        <Header/>
        <main>
          <EmployeeList/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App;