import { Routes, Route } from "react-router-dom";
import "./index.css";
import NewPostsPage from "./pages/NewPost";
import AllPostsPage from "./pages/AllPosts";
import FavoritePage from "./pages/Favorite";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllPostsPage />} />
                <Route path="/new-post" element={<NewPostsPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="*" element={<h3>"Path not found"</h3>} />
            </Routes>
        </Layout>
    );
}

export default App;
