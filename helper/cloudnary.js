
// const cloudinary= require("cloudinary").v2;

// //cloudinary.v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUDNAME,
//   api_key: process.env.APIKEY,
//   api_secret: process.env.APISECRET,
// });
//  const uploadToCloud = async (file, res) => {
//   try {
//     const image = await cloudinary.uploader.upload(file.path, {
//       folder: 'MY-BRAND',
//       use_filename: true,
//     });
//     return image;
//   } catch (error) {
//     return res.status(500).json({
//       status: 500,
//       message: "server error",
//     });
// }
//   }
//   module.exports=uploadToCloud