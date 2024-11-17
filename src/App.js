import Bienvenue, { Compteur, Welcome } from "./components/ch02/Examples";
import SignupForm from "./components/ch06/SignupForm";
import SimpleForm from "./components/ch06/SimpleForm";
import StyledSimpleForm from "./components/ch06/StyledSimpleForm";
import Comments from "./components/ch07/comments/Comments";
import PostList from "./components/ch07/PostList";

function App() {
  return (
    <>
      <Bienvenue nom="John" />
      <Welcome nom="Alex" />
      <Compteur />

      <SimpleForm />
      <StyledSimpleForm />
      <SignupForm />

      <PostList />
      <Comments />
    </>
  );
}

export default App;
