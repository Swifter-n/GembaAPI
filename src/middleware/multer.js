const multer = require("multer");
const util = require('util')
const path =require('path')
const __basedir = path.resolve()

const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }else{
        cb('please upload image only', false)
    }
}

const storage = multer.diskStorage({
    destination: "storage/images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${Math.floor(Math.random() * 1000)}-SGB-${file.originalname}`)
    }
})

const uploadImage = multer({
    storage: storage,
    fileFilter: imageFilter,
}).single("files")
//.array('files', 5)

//let uploadFile = util.promisify(uploadImage)

module.exports = {
    uploadImage,
    __basedir
}