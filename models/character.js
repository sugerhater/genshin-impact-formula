module.exports = function(sequelize, Datatypes){
  const Character = sequelize.define("Character",{
    name:{type:Datatypes.STRING,
          allowNull:false},
    ascensionPhase:{type:Datatypes.INTEGER,
          allowNull:false},
    level:{type:Datatypes.STRING,
          allowNull:false},
    hp:{type:Datatypes.INTEGER,
          allowNull:false},
    atk:{type:Datatypes.INTEGER,
          allowNull:false},
    def:{type:Datatypes.INTEGER,
          allowNull:false},
    critRate:{type:Datatypes.INTEGER,
              allowNull:true},
    critDamage:{type:Datatypes.INTEGER,
                allowNull:true}

    // AscensionPhase:Datatypes.INTEGER,
    // level:Datatypes.INTEGER,
    // HP:Datatypes.INTEGER,
    // ATK:Datatypes.INTEGER,
    // DEF:Datatypes.INTEGER,
    // CritRate:Datatypes.DECIMAL
    
  });
  return Character
}
//characters 