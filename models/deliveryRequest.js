module.exports = function(sequelize, DataTypes) {
    var DeliveryRequest = sequelize.define("DeliveryRequest", {
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      shipment_type: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
         delivery_adress:{
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]

             
         

      },
        phone_number:{
            type: DataTypes.TEXT,
        allowNull: false,
        len: [1]

      }




    });

  
    return DeliveryRequest;
  };
  
  