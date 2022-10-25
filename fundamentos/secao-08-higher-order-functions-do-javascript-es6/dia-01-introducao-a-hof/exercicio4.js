const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * dragon.strength);

const warriorDamage = () =>
  Math.floor(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength
  );

const mageDamage = () => {
  const status = {};
  if (mage.mana > 15) {
    status.dano = Math.floor(
      Math.random() * (mage.intelligence - mage.intelligence * 2) +
        mage.intelligence
    );
    status.manaGasta = 15;
  } else {
    status.dano = 'Sem mana';
    status.manaGasta = 0;
  }
  return status;
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warrior: (funcao) => {
    const dano = funcao();
    dragon.healthPoints = dragon.healthPoints - dano;
    warrior.damage = dano;
  },
  mage: (funcao) => {
    const dano = funcao().dano;
    const mana = funcao().manaGasta;
    dragon.healthPoints = dragon.healthPoints - dano;
    mage.damage = dano;
    mage.mana = mage.mana - mana;
  },
  dragon: (funcao) => {
    const dano = funcao();
    warrior.healthPoints = warrior.healthPoints - dano;
    mage.healthPoints = mage.healthPoints - dano;
    dragon.damage = dano;
  },
  resul: () => battleMembers,
};

gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
console.log(gameActions.resul());
