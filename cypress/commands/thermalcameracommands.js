const url = require('url');

//creating and initializing urlObject
var urlObject={
        protocol: 'https',
        hostname: 'example.com',
        port: 1800,
        pathname: 'sample/path',
        query: {
                page: 1,
                format: 'json'
        },
        hash: 'first'
    }

//getting the derieved URL from urlObject using the url.format function
var sampleUrl=url.format(urlObject);

//Display the returned value
console.log(sampleUrl.toString());


Cypress.Commands.add("createCamera", (cameraName, groupName) => {
  let urlStr = url.format({
    pathname: 'create/' + cameraName,
    query: {
      'group-Name': groupName,
      'api-server' : Cypress.config('cacophony-server'),
    }
  });

  cy.request("http://localhost:2040/" + urlStr);
});
