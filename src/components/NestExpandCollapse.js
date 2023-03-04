import axios from 'axios'
import { useEffect, useState } from 'react'
const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <li>
      <div style={{ display: 'flex' }}>
        <p>{item.activity}</p>
        <input
          style={{ margin: 20, alignSelf: 'start' }}
          type={'button'}
          value={expanded ? 'Collapse' : 'Expand'}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      {expanded && (
        <div style={{ paddingLeft: 20 }}>
          <ul>
            {Object.keys(item)
              .filter((key) => key != 'activity')
              .map((key) => (
                <li>{`${key}: ${item[key]}`}</li>
              ))}
          </ul>
        </div>
      )}
    </li>
  )
}
function NestExpandCollapse() {
  return <GenerateList />
}

const GenerateList = () => {
  const [activityList, setActivityList] = useState([])
  const [disableButton, setDisableButton] = useState(false)

  const generateActivity = () => {
    setDisableButton(true)
    const getActivity = async () => {
      const activity = await axios.get('https://www.boredapi.com/api/activity')
      setActivityList([...activityList, activity.data])
      setDisableButton(false)
    }
    getActivity()
  }

  useEffect(generateActivity, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <input
        type={'button'}
        value={'Generate Activity'}
        onClick={generateActivity}
        disabled={disableButton}
      />
      <ul>
        {activityList.map((act) => {
          return <ExpandableListItem item={act} />
        })}
      </ul>
    </div>
  )
}

export default NestExpandCollapse
