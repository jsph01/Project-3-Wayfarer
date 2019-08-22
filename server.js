const express = require('express');
const app = express();
require('dot.env', ).config()

let cb = (req, res)=>{ // callback a get req to index route node
console.log('test index') // req res (look up get)
res.json( // json response logging out text index and responds to whoever makes  the resposne.
{
'message': ['test 1', 'test 2', 'test 3', 'test 4']
} // key value pairs
) // js object notation
}

app.get('/', cb);  // execute call back that handles request and response. app.get is a utility to mount code basically what a call back function id for it is passed to a event listener. js always listen to different endpoints ...?  

app.listen(3001, ()=>{   // 
console.log('express server running');
}); //call back function




