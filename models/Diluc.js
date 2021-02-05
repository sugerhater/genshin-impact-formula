module.exports = function(sequelize, Datatypes){
  const Character = sequelize.define("character",{
    AscensionPhase:Datatypes.INTEGER,
    level:Datatypes.INTEGER,
    HP:Datatypes.INTEGER,
    ATK:Datatypes.INTEGER,
    DEF:Datatypes.INTEGER,
    CritRate:Datatypes.DECIMAL
    
  });
  return Character
}
//characters 