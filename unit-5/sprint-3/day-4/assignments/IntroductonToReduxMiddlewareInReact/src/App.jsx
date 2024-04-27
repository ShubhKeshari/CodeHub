import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { demoAction } from './redux/action';

function App() {
 const dispatch = useDispatch();
 const handleClick = () => {
  dispatch(demoAction());
};
// Select the loggedPayload from Redux state
const loggedPayloads = useSelector(state => state.loggedPayloads);
  return (
    <>
         <button onClick={handleClick}>Dispatch Action</button>
       {/* Render the loggedPayload */}
      <div className="payloads-container">
        {loggedPayloads.map((payload, index) => (
          <div key={index} className="payload-box">
            <h2>Payload {index + 1}:</h2>
            <pre>{JSON.stringify(payload)}</pre>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
