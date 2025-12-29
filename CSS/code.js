function copyCode() {
    const codeBlock = document.querySelector('pre code');
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(codeBlock);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }