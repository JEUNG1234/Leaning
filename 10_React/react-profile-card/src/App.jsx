
import './App.css'
import ProfileCard from './components/ProfileCard'


const profileData = [{
  name: "정민구",
  age : 26,
  isOnline: true
},{
  name: "이신혁",
  age : 30,
  isOnline: false
}]

function App() {

  return (
    <>
      <ProfileCard profiles= {profileData}/>
    </>
  )
}

export default App
