
module.exports = (sequilize,DataTypes) =>{
   
    const Review = sequilize.define('review',{

      
       rating:{
            type:DataTypes.INTEGER
       },
        description:{
            type:DataTypes.TEXT
       } 



    })
        return Review
}
