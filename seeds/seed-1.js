/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, username: 'FantasticChipmunk970', email: 'the2@gmail.com', password: '123', badged_id: 1 },
    { id: 2, username: 'DefiantSheep122', email: 'world3@gmail.com', password: '567', badged_id: 2 },
    { id: 3, username: 'GiftedWolverine526', email: 'stop4@gmail.com', password: '890', badged_id: 3 },
    { id: 4, username: 'EnchantingGrizzly148', email: 'the5@gmail.com', password: '123', badged_id: 4 },
    { id: 5, username: 'FranticBadger567', email: 'world6@gmail.com', password: '567', badged_id: 5 },
    { id: 6, username: 'ComfortableGiraffe623', email: 'stop7@gmail.com', password: '890', badged_id: 6 },
    { id: 7, username: 'EmbarrassedRaccoon541', email: 'the8@gmail.com', password: '123', badged_id: 4 },
    { id: 8, username: 'AverageDolphin139', email: 'world9@gmail.com', password: '567', badged_id: 5 },
    { id: 9, username: 'FunnyQuagga984', email: 'stop11@gmail.com', password: '890', badged_id: 6 }
  ])
}
