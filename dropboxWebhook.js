module.exports = function (context, cb) {
  const Dropbox = require('dropbox').Dropbox
  new Dropbox({ accessToken: context.secrets.dropboxAccessToken })
    .filesListFolder({path: 'Overhead'})
    .then(console.log, console.error);
  console.log(context.data.list_folder)
  cb(null, 'done')
}
