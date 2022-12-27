const CohortNotes = require('../Models/cohortNotes');

const addNotes = async(req,res)=>{
    const {name, topic, subject} = req.body;

    try {
        const cohortNotes = await CohortNotes.findOne({topic});

        if(cohortNotes){
            return res.json({
                success: false,
                message: "Notes already exists",
            })
        }else {
            const cohortNotes = await CohortNotes.create({
                name,
                topic,
                subject,
                
            });
            return res.json({
                success: true,
                message: "Course added",
                _id: cohortNotes._id,
            });
        }
         }catch (error){
            return res.json({ success: false, error });
    }
}

const deleteNotes = async(req,res)=>{
   CohortNotes.remove({_id:req.params.id})
   .then(result=>{
        res.status(200).json({
            message:"deleted succesfully"
        })
   })
   .catch(err=>{
    res.status(500).json({
        error:err
    })
   })
}


const getNotes = async (req, res) => {
    CohortNotes.find()
    .then(result=>{
        res.status(200).json({
            notes:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};

module.exports = {
    addNotes,
    getNotes,
    deleteNotes,
};
