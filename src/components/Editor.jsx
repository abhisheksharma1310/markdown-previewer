import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/windowContext";
import useDebounce from "../helper/debounce";
import MenuBar from "./MenuBar";

const Editor = () => {
  const {
    markDown,
    handleMarkDown,
    editorWindow,
    handleEditorWindow
  } = useContext(AppContext);

  const [text, setText] = useState(markDown);

  const [debouncedValue] = useDebounce(text);

  const style = {
    height: editorWindow ? "90vh" : "25vh",
    width: editorWindow ? "90vw" : "50vw"
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    handleMarkDown(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="editor-area" style={style}>
      <MenuBar
        title="Editor"
        windowFull={editorWindow}
        handleWindow={handleEditorWindow}
      />
      <textarea
        id="editor"
        onDragStart={(e) => e.preventDefault()}
        value={text}
        onChange={handleText}
      />
    </div>
  );
};

export default Editor;
