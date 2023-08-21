import { useContext, useMemo } from "react";
import { AppContext } from "../context/windowContext";
import MenuBar from "./MenuBar";
import { marked } from "marked";

const Viewer = () => {
  const { markDown, viewerWindow, handleViewerWindow } = useContext(AppContext);

  const htmlText = useMemo(() => marked(markDown), [markDown]);

  const style = {
    minHeight: viewerWindow ? "90vh" : "60vh",
    width: viewerWindow ? "90vw" : "70vw"
  };

  return (
    <div className="preview-area" style={style}>
      <MenuBar
        title="Viewer"
        windowFull={viewerWindow}
        handleWindow={handleViewerWindow}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: htmlText }}
        style={{ overflow: "auto" }}
      ></div>
    </div>
  );
};

export default Viewer;
