import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CodeMirror from 'react-codemirror';
import { Typography } from '@material-ui/core';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Address } from '@zondax/izari-filecoin';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(1),
  },
  codeEditor: {
    height: 'auto',
    minHeight: 300,
    marginBottom: theme.spacing(1),
    '& .CodeMirror': {
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.palette.divider}`,
    },
  },
  result: {
    minHeight: 100,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const DEFAULT_CODE = 'const address = Address.fromString("t08666");\nNetwork: address.getNetworkPrefix().toString();';

// TO DO.
//  For now the code executed is harcode, I should create a new function to parse and execute the
// new code added by the user.

const executeCode = (code) => {
  const address = Address.fromString('t08666');
  const result = address.getNetworkPrefix().toString();

  return result;
};

function Playground() {
  const classes = useStyles();
  const [result, setResult] = useState('');

  useEffect(() => {
    const firstResult = executeCode();

    setResult(firstResult);
  }, []);

  const handleCodeChange = (newCode) => {
    try {
      // TODO
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className={classes.root}>
      <CodeMirror
        className={classes.codeEditor}
        value={DEFAULT_CODE}
        options={{
          mode: 'javascript',
          lineNumbers: true,
        }}
        onChange={handleCodeChange}
      />
      <Typography variant="h5" gutterBottom>
        Output
      </Typography>
      <div className={classes.result}>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default Playground;
