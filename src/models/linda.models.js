


    const Prueba = db.define(
        "user",     
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            }
        });
        
module.exports = Prueba;