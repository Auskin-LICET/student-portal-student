const readXlsxFile = require("read-excel-file/node");
const query_js = require(__basedir + "/js/query");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports = function (app, db, query_js) {
  // -> Express Upload RestAPIs
  // Upload Courses
  app.post("/upload/courses", upload.single("file"), (req, res) => {
    // importExcelData2MySQLCourses(
    //   __basedir + "/uploads/" + req.file.filename,
    //   db,
    //   query_js
    // );
    console.log("uploaded")
    window.location.href="http://localhost:3000/public/Template/academic_details.xlsx#/admin/Academics";
  });

  function importExcelData2MySQLCourses(filePath, db, query_js) {
    // File path.
    readXlsxFile(filePath).then((rows) => {
      for (var i = 1; i < rows.length; i++) {
        let course_details = {
          roll_no:rows[i][0]),
          reg_no: rows[i][1],
          01_CAT1_HS8151: rows[i][2],
          01_CAT1_MA8151: rows[i][3],
          01_CAT1_PH8151: rows[i][4],
          01_CAT1_CY8151: rows[i][5],
          01_CAT1_GE8151: rows[i][6],
          01_CAT1_GE8152: rows[i][7],
          01_CAT2_HS8151: rows[i][8],
          01_CAT2_MA8151: rows[i][9],
          01_CAT2_PH8151: rows[i][10],
          01_CAT2_CY8151: rows[i][11],
          01_CAT2_GE8151: rows[i][12],
          01_CAT2_GE8152: rows[i][13],

        };
        console.log(course_details);

        query_js.is_present_course(course_details.Course_ID, (status) => {
          if (!status) {
            query_js.create_course(course_details);
          }
        });
      }
    });
  }
};
