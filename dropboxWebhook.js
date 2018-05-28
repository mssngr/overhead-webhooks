module.exports = function (context, cb) {
  console.log(context)
  // require('isomorphic-fetch')
  // const Dropbox = require('dropbox').Dropbox
  // new Dropbox({ accessToken: context.secrets.dropboxAccessToken })
  //   .filesListFolder({path: 'Apps/Overhead'})
  //   .then(console.log, console.error);
  cb(null, 'done')
}
