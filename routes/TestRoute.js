const router = require("express").Router();
const testModel = require("../model/Test");

router.route("/create").post((req, res) => {
    const data = req.body;

    testModel.create(data)
    .then((data)=>{
        return res.json({
            "status":res.statusCode,
            "msg":"insert successful",
            "data": data
        })
    })
    .catch((err)=>{
        return err.getMessage();
    })

});

router.route("/get").get((req,res)=>{

    testModel.find()
    .then((data)=>{
        return res.json({
            "status":res.statusCode,
            "msg":"Data found",
            "data":data
        })
    }).catch((err)=>{
        return err.getMessage();
    })


})

module.exports = router;