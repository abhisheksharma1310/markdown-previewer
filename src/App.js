import { useContext } from "react";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";
import { AppContext } from "./context/windowContext";
import "./styles.css";

export default function App() {
  const { editorWindow, viewerWindow } = useContext(AppContext);

  return (
    <div className="App">
      {!viewerWindow && <Editor />}
      {!editorWindow && <Viewer />}
    </div>
  );
}
