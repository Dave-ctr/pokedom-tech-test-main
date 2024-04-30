import pokemonArray from './data/pokemon.js';

for ( let i = 0; i < pokemonArray.length; i++ )
{
  const pokemon = pokemonArray[ i ];
  const pokemonName = pokemon.name.charAt( 0 ).toUpperCase() + pokemon.name.slice( 1 ).toLowerCase();
  let pokemonType = ''

  if ( pokemon.types.length > 1 ) 
  {
    pokemonType = pokemon.types.join( ' & ' );
  } else
  {
    pokemonType = `${ pokemon.types[ 0 ] }`;
  }

  document.querySelector( 'main' ).innerHTML +=
    `
    <section class="card">
    
    <article class="card__content">
     <img src="${ pokemon.sprite }" alt="${ pokemonName }" class="card__image">
    </article>
    
    <article class="card__content">
    
    <h1 class="card__heading">${ pokemonName } </h1>
    
    <p class="card__text">
    ${ pokemonName } (#${ pokemon.id }) is a ${ pokemonType } type pokemon.
    </p>
    
    </article>
    
    </section>
    `;


}

