var express = require("express");
const Infos = require("../Models/dbInfo");

// Getting all data from Database
const getAllInfo = (req, res) => {
  Infos.find().exec((error, info) => {
    error ? res.status(400).send({ msg: error }) : res.status(200).send(info);
  });
};
// Getting queried data from Database
const queryInfo = (req, res) => {
  const searching_query = req.params.query_info;
  Infos.find({
    $or: [{ Name: searching_query }, { Location: searching_query }],
  }).exec((error, info) => {
    error ? res.status(400).send({ msg: error }) : res.status(200).send(info);
  });
};

//Add data to the Database
const addInfo = (req, res) => {
  if (req.body.Name == "") {
    res.status(400).send({ msg: "Empty name can not be inserted" });
  } else if (req.body.Location == "") {
    res.status(400).send({ msg: "Empty Location can not be inserted" });
  } else {
    let new_Info = req.body;
    Infos.create(new_Info, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send("Info Inserted");
      }
    });
  }
};

const bulkAdd = (req, res) => {
  let new_Info = req.body;
  new_Info.forEach((element) => {
    Infos.create(element, (error, data) => {
      if (error) console.log(error);
    });
  });
  res.status(201).send("Info Inserted");
};

exports.getAllInfo = getAllInfo;
exports.queryInfo = queryInfo;
exports.addInfo = addInfo;
exports.bulkAdd = bulkAdd;
