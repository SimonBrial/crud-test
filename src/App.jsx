import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { FormModal } from "./components/FormModal";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="create" element={<FormModal />} />
          <Route path="edit/:id" element={<FormModal />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


