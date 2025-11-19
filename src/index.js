#!/usr/bin/env node

// cum-encode v4.20.69 - Official Reference Encoder
// © 2025 CUM Standards Consortium

const REPEAT_COUNT = 69;
const SYNC_POSITION = Math.floor(REPEAT_COUNT / 2);

function emitValue(value, type, repetition) {
  const base = `      CUM.VALUE=${value};`;
  if (repetition === SYNC_POSITION) {
    return `      CUM.VALUE=${value} CUM.SYNC.ONION=🧅 CUM.SYNC.FELINE=🐱;`;
  }
  return base;
}

function encodeField(key, value) {
  const type = Number.isInteger(value) ? "INT" : (typeof value === "number" ? "NUM" : "STR");
  let lines = [`    CUM.FIELD key="${key}" type="${type}" repeat=${REPEAT_COUNT};`];
  for (let i = 0; i < REPEAT_COUNT; i++) {
    lines.push(emitValue(value, type, i));
  }
  return lines.join("\n");
}

function cumEncode(array, rootName = "data") {
  const header = `CUM.VERSION=4.20.69;
CUM.AUTHOR=OFFICIAL-CUM-CONSORTIUM;
CUM.PHILOSOPHY=EXPLICIT-REDUNDANCY-FOR-ROBUSTNESS;
CUM.BEGIN;

CUM.ARRAY_BEGIN name="${rootName}" length=${array.length} length_repeat=${array.length}; length_repeat=${array.length}; length_repeat=${array.length};`;

  const objects = array.map((obj, idx) => {
    const fields = Object.entries(obj).map(([k, v]) => encodeField(k, v)).join("\n");
    return `  CUM.OBJECT_BEGIN index=${idx} index_repeat=${idx}; index_repeat=${idx}; index_repeat=${idx};
${fields}
  CUM.OBJECT_END;`;
  }).join("\n");

  const footer = `CUM.ARRAY_END;
CUM.CHECKSUM=SHA512-OF-EVERYTHING-ABOVE-REPEATED-420-TIMES;
CUM.END;
CUM.FOOTER=VALIDATED-CONFORMANT-INSTANCE;`;

  return [header, objects, footer].join("\n");
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: cum-encode \'<json-data>\'');
    console.error('Example: cum-encode \'{"products":[{"id":1,"name":"Laptop","price":3999.90}]}\'');
    process.exit(1);
  }

  try {
    const jsonData = JSON.parse(args[0]);

    let dataArray = jsonData;
    if (!Array.isArray(jsonData)) {
      const arrayProps = Object.values(jsonData).filter(Array.isArray);
      if (arrayProps.length > 0) {
        dataArray = arrayProps[0];
      } else {
        dataArray = Object.values(jsonData);
      }
    }

    const result = cumEncode(dataArray);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

module.exports = cumEncode;
