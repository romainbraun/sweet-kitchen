import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

export default class FileUpload {
  private s3Server: aws.S3;
  private s3Config: aws.S3.ClientConfiguration;

  constructor() {
    this.s3Config = {
      accessKeyId: process.env.ACCESSKEYID,
      region: 'eu-west-2',
      secretAccessKey: process.env.SECRETACCESSKEY,
    };

    this.s3Server = new aws.S3(this.s3Config);
  }

  public getUploadFunction() {
    const upload = multer({
      storage: multerS3({
        bucket: 'sweet-kitchen',
        key: (req, file, cb) => {
          cb(null, Date.now().toString());
        },
        s3: this.s3Server,
      }),
    });

    return upload.array('image', 1);
  }
}
