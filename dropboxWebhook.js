module.exports = function (context, cb) {
  const accessToken = context.secrets.dropboxAccessToken
  console.log(context.body.list_folder.accounts)
  require('isomorphic-fetch')
  const Dropbox = require('dropbox').Dropbox
  new Dropbox({ accessToken })
    .filesListFolder({path: ''})
    .then(response => console.log(response.entries))
    .catch(console.error)
  cb(null, 'done')
}
