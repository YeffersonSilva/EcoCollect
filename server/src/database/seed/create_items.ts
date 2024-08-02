import knex, { Knex } from "knex";


exports.seed = function (knex: Knex) {
    return knex('items').del() // Elimina todos los registros existentes
      .then(function () {
        // Inserta los datos
        return knex('items').insert([
          { image: 'lampadas.svg', title: 'Lâmpadas' },
          { image: 'baterias.svg', title: 'Pilhas e Baterias' },
          { image: 'papeis-papelao.svg', title: 'Papéis e Papelão' },
          { image: 'eletronicos.svg', title: 'Resíduos Eletrônicos' },
          { image: 'organicos.svg', title: 'Resíduos Orgânicos' },
          { image: 'oleo.svg', title: 'Óleo de Cozinha' }
        ]);
      });
  };
  