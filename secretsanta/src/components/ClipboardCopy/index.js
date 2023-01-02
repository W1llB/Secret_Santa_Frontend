import { useState } from "react";
import React from "react";
import { string } from "prop-types";

function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      console.log("Copy not supported");
    }
  }

  function handleCopyClick() {
    try {
      copyTextToClipboard(copyText);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  }

  return (
    <div>
      <button onClick={handleCopyClick}>
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
}

ClipboardCopy.propTypes = {
  copyText: string,
};

export default ClipboardCopy;
