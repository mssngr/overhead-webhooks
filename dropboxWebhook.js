module.exports = function (context, cb) {
  const dropboxAccessToken = context.secrets.dropboxAccessToken
  console.log(context.body.list_folder.accounts)
  // require('isomorphic-fetch')
  // const Dropbox = require('dropbox').Dropbox
  // new Dropbox({ accessToken: context.secrets.dropboxAccessToken })
  //   .filesListFolder({path: 'Apps/Overhead'})
  //   .then(console.log, console.error);
  cb(null, 'done')
}
