import React, { useEffect } from "react";

function useDocument(count) {
  useEffect(() => {
    document.title = `count${count}`;
  }, [count]);
}

export default useDocument;
