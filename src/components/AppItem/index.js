// Write your code here
import './index.css'

const AppItem = props => {
  const {eachmap} = props
  const {appName, imageUrl} = eachmap
  return (
    <li className="appitem-card">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
