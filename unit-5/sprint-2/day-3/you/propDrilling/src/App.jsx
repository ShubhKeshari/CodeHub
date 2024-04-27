// App.jsx

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Main isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;