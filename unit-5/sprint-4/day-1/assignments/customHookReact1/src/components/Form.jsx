
import useFormData from "../hooks/FormData";

function Form() {
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   const { userName, email, password } = e.target;
  //   setFormData({...formData,[name]:value});
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Submitted form data',formData);
  // };
  const { formData, handleChange, handleSubmit } = useFormData({
    userName: "",
    email: "",
    password: "",
  });

  return (
    <form type="submit">
      <label htmlFor="userName">UserName</label>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
