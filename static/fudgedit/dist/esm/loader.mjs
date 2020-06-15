import { a as patchEsm, b as bootstrapLazy } from './index-4a361179.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["fudge-hex-editor_2",[[0,"fudge-hex-editor",{"displayAscii":[4,"display-ascii"],"displayHex":[4,"display-hex"],"displayBin":[4,"display-bin"],"maxLines":[2,"max-lines"],"bytesPerLine":[2,"bytes-per-line"],"chunks":[16],"displayAsChunks":[4,"display-as-chunks"],"asciiInline":[4,"ascii-inline"],"bytesPerGroup":[2,"bytes-per-group"],"bitsPerGroup":[2,"bits-per-group"],"mode":[1],"editType":[1,"edit-type"],"regionDepth":[2,"region-depth"],"regions":[16],"fileMetadata":[32],"file":[32],"lineNumber":[32],"selection":[32],"cursor":[32],"bit":[32],"editingMode":[32],"searchType":[32],"searchByteCount":[32],"searchEndian":[32],"searchInput":[32],"searchResults":[32],"searchActive":[32],"acceptFile":[64],"saveFile":[64],"setLineNumber":[64],"setCursorPosition":[64],"setSelection":[64],"getChunk":[64],"getFileMetadata":[64],"executeSearch":[64]}],[0,"fudge-hex-tooltip",{"active":[4],"data":[1,"complex"],"simpleText":[1,"simple"]}]]]], options);
});

export { defineCustomElements };
