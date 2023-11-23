import MainLayout from "./layout/MainLayout";
import TitleBar from "./components/titleBar/TitleBar";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <MainLayout>
      <TitleBar />
      <SearchBar />
    </MainLayout>
  );
}

export default App;
