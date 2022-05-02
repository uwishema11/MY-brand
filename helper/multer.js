// const path=require("path")
// const multer= require("multer")
// const storage = multer.diskStorage({});
// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   }
//   cb('Error: Images Only!', null);
// };
//  const upload = multer({
//   dest: 'uploads/',
//   storage,
//   limits: { fileSize: 100000000 }, fileFilter})
//   module.exports=upload