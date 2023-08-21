import { createContext, useReducer, useEffect } from "react";
import textData from "../data/initialData";

const saveToLocal = (data) => {
  localStorage.setItem("markDownData", JSON.stringify(data));
};

const getFromLocal = () => {
  const data = localStorage.getItem("markDownData");
  return data ? JSON.parse(data) : "";
};

export const AppContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "setMarkDown":
      return { ...state, markDown: action.payload };
    case "setEditorWindow":
      return { ...state, editorWindow: !state.editorWindow };
    case "setViewerWindow":
      return { ...state, viewerWindow: !state.viewerWindow };
    default:
      return state;
  }
};

const WindowContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    markDown: getFromLocal() === "" ? textData : getFromLocal(),
    editorWindow: false,
    viewerWindow: false
  });

  const handleEditorWindow = () => {
    dispatch({ type: "setEditorWindow" });
  };

  const handleViewerWindow = () => {
    dispatch({ type: "setViewerWindow" });
  };

  const handleMarkDown = (text) => {
    dispatch({ type: "setMarkDown", payload: text });
  };

  const { markDown, editorWindow, viewerWindow } = state;

  useEffect(() => {
    const timer = setTimeout(() => {
      saveToLocal(state.markDown);
    }, 5 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.markDown]);

  return (
    <AppContext.Provider
      value={{
        markDown,
        editorWindow,
        viewerWindow,
        handleEditorWindow,
        handleViewerWindow,
        handleMarkDown
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default WindowContext;
