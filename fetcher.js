const request = require('request');
const fs = require('fs');
const uRL = process.argv[2]
const path = process.argv[3];

// console.log(process.argv)

const fetcher = function (fuRL, fPath) {
  
  request(uRL, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    
    const content = body

    fs.writeFile(`${path}`, content, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
      let bytes = 0;
      for (const char of body) {
        bytes++;
        }
      console.log(`file written successfully at ${path} size: ${bytes} bytes`)

    })

  });
  };

  fetcher(uRL,path);


