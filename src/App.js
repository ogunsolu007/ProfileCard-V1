import "./styles.css";
import Avatar from "./Avatar";
import Intro from "./Intro";
export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
        {/* <SkillList /> */}
      </div>
    </div>
  );
}
