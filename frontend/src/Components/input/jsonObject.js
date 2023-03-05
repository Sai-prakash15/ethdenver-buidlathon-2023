import * as React from 'react';

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export default function JsonObject(props) {
const text = `Graph Query:\nSome of our debates seem eternal, `
  return (
        <>
      {/* <Typography variant="pre" color="black" fontFamily="Gill Sans" paddingTop="10px">{JSON.stringify(props.text)}</Typography> */}
      <JSONPretty id="json-pretty" data={props.text} style={{maxHeight:"500px", overflowY:"scroll", marginBottom:"15px"}}></JSONPretty>
      </>
  );
}
