// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, clickAppItem, isActive} = props
  const {displayText, tabId} = eachTab

  const onTabItem = () => {
    clickAppItem(tabId)
  }

  const isAddClass = isActive ? 'button-mark' : ''

  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={`button ${isAddClass}`}
        onClick={onTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
