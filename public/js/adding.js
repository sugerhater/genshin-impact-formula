$(document).ready(function () {
  const addingForm = $("#addingForm");
  addingForm.on("submit", function (event) {
    event.preventDefault();
    const name = $("#name option:selected");
    const ascensionPhase = $("#ascensionPhase option:selected");
    const level = $("#level");
    const hp = $("#HP");
    const atk = $("#ATK");
    const def = $("#DEF");
    const critRate = $("#critRate");
    const critDamage = $("#critDamage");
    var stats = {
      name: name.text().trim(),
      ascensionPhase: ascensionPhase.text().trim(),
      level: level.val().trim(),
      hp: hp.val().trim(),
      atk: atk.val().trim(),
      def: def.val().trim(),
      critRate: critRate.val().trim(),
      critDamage: critDamage.val().trim()
    };

    addStats(stats);

  });
  async function addStats(stats) {
    console.log(stats);
    await $.post("/api/add", stats);
  };
});

// addStats(
//   stats.name,stats.ascensionPhase,
//   stats.level,stats.hp,
//   stats.atk,stats.def,stats.critRate,stats.critDamage);

// function addStats(
//   name,ascensionPhase,
//   level,hp,atk,def,critRate,critDamage) {
//     console.log(name);
//     console.log(ascensionPhase);
//   $.post("/api/add",{
//     name:name,
//     ascensionPhase:ascensionPhase,
//     level:level,
//     hp:hp,
//     atk:atk,
//     def:def,
//     critRate:critRate,
//     critDamage:critDamage
//   }).then(function(){
//     console.log("1111");
//     // window.location.reload();
//   }).catch(function(err){
//     console.log(err);
//   })
// };

// function addStats(stats) {
//   console.dir(stats);
//   $.post("/api/add", stats).then(function () {
//     console.log("11111");
//   })
//     .catch(function (err) {
//       console.log(err);
//     });

// };


