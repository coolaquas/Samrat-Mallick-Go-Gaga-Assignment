var express = require("express");
var router = express.Router();
const Infos = require("../Models/dbInfo");
const {
  getAllInfo,
  addInfo,
  queryInfo,
  bulkAdd,
} = require("../Controlers/ControlerApi");

router.get("/", getAllInfo);
router.get("/:query_info", queryInfo);
router.post("/addInfo", addInfo);
router.post("/bulkAdd", bulkAdd);

module.exports = router;
