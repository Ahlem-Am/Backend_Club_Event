module.exports=function timestamp(schema){
    schema.add({
        createdAt:Date,
        updatedAt:Date
    })
    schema.pre('save',function(next){
        this.updatedAt=Date.now()
        if(!this.createdAt){
            this.createdAt=Date.now()
        }
        next()
    })
}