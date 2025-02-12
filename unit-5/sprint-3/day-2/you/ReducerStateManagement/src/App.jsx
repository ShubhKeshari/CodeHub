// import { useEffect, useReducer } from "react";

// const getData = async (url) => {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
//   } catch {
//     throw new Error(`Something went wrong while fetching data`);
//   }
// };

// const initState = {
//   loading: false,
//   data: [],
//   err: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_LOADING":
//       return { loading: true, err: false, data: [] };
//     case "FETCH_SUCCESS":
//       return { loading: false, data: action.payload, err: false };
//     case "FETCH_ERROR":
//       return { loading: false, err: true, data: [] };
//     default:
//       throw new Error(`Action type is invalid`);
//   }
// };

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initState);

//   const fetchAndUpdateData = (url) => {
//     dispatch({ type: "FETCH_LOADING" });
//     getData(url)
//       .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res }))
//       .catch(() => dispatch({ type: "FETCH_ERROR" }));
//   };

//   useEffect(() => {
//     fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
//   }, []);

//   const { loading, err, data } = state;

//   return loading ? (
//     <h1>Loading..</h1>
//   ) : err ? (
//     <h1>Something went wrong</h1>
//   ) : (
//     <div className="App">
//       {data.map((post) => (
//         <p key={post.id}>
//           {post.id} - {post.title}
//         </p>
//       ))}
//     </div>
//   );
// }

import { useReducer } from "react";

const initState = {
  name: "",
  age: "",
  gender: "",
  address: {
    building: "",
    street: "",
    city: "",
    state: "",
    coordinates: {
      latitude: "",
      longitude: "",
    },
  },
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_NAME":
    case "UPDATE_AGE":{
      return {
        ...state
, ...payload}
    }
    case "UPDATE_GENDER": {
      return {
        ...state,
        ...payload,
      };
    }
    case "UPDATE_ADDRESS_BUILDING_NAME": {
      return {
        ...state,
        address: {
          ...state.address,
          ...payload,
        },
      };
    }
    case "UPDATE_ADDRESS_COORDINATES_LATITUDE": {
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            ...payload,
          },
        },
      };
    }
    default: {
      throw new Error(`action type is invalid`);
    }
  }
}

function FormUseReducer() {
  const [userDetails, dispatch] = useReducer(reducer, initState);

  function handleSubmit(e) {
    e.preventDefault();
    // perform some api call and post the data;
    // reset the value of form;
  }

  const {
    name,
    age,
    gender,
    address: {
      building,
      street,
      city,
      state,
      coordinates: { latitude, longitude },
    },
  } = userDetails;

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">
          Name :
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_NAME",
                payload: {
                  [e.target.id]: e.target.value, // { name : "batman" }
                },
              });
            }}
          />
        </label>
        <label htmlFor="age">
          Age :
          <input
            id="age"
            type="number"
            value={age}
           
            placeholder="Age"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_AGE",
                payload: {
                  [e.target.id]: +e.target.value,
                },
              });
            }}
          />
        </label>
        <label htmlFor="gender">
          Gender :
          <select
            id="gender"
            value={gender}
            onChange={function (e) {
              dispatch({
                type: "UPDATE_GENDER",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          >
            <option value="">---Select Gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </label>
        <label>
          Address - Building Name :
          <input
            id="building"
            type="text"
            value={building}
            placeholder="Building Name"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_ADDRESS_BUILDING_NAME",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
        </label>
        <label>
          Address - Coordinates - Latitude :
          <input
            id="latitude"
            type="text"
            value={latitude}
            placeholder="Latitude"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_ADDRESS_COORDINATES_LATITUDE",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
        </label>
      </form>
    </div>
  );
}

export default FormUseReducer;
