import pokemonArray from './data/pokemon.js';

const searchBar = document.createElement( 'section' );
const mainContainer = document.querySelector( 'main' );

searchBar.innerHTML =
  `
  <input type='text' id='searchInput' placeholder='Search by name'>
  <select id="typeFilter">
  <option value="">Filter by type</option>
  <option value="Normal">Normal</option>
  <option value="Fire">Fire</option>
  <option value="Water">Water</option>
  <option value="Electric">Electric</option>
  <option value="Grass">Grass</option>
  <option value="Ice">Ice</option>
  <option value="Fighting">Fighting</option>
  <option value="Poison">Poison</option>
  <option value="Ground">Ground</option>
  <option value="Flying">Flying</option>
  <option value="Psychic">Psychic</option>
  <option value="Bug">Bug</option>
  <option value="Rock">Rock</option>
  <option value="Ghost">Ghost</option>
  <option value="Dragon">Dragon</option>
  <option value="Dark">Dark</option>
  <option value="Steel">Steel</option>
  <option value="Fairy">Fairy</option>
</select>
  <input type="number" id="resultsNumber" min="1" value="10"> Maximum Number of Results
`
searchBar.setAttribute( "class", "searchBar" );
document.body.insertBefore( searchBar, mainContainer );

const renderPokemon = ( pokemonList ) =>
{
  let html = ''; // Initialize an empty string to store the HTML
  for ( let i = 0; i < pokemonList.length; i++ )
  {
    const pokemon = pokemonList[ i ];
    const pokemonName =
      pokemon.name.charAt( 0 ).toUpperCase() + pokemon.name.slice( 1 ).toLowerCase();
    let pokemonType = '';

    if ( pokemon.types.length > 1 )
    {
      pokemonType = pokemon.types.join( ' & ' );
    } else
    {
      pokemonType = `${ pokemon.types[ 0 ] }`;
    }

    // Append the HTML for each Pokemon to the `html` string
    html += `
    <section class="card">
      <article class="card__content">
        <img src="${ pokemon.sprite }" alt="${ pokemonName }" class="card__image">
      </article>
      <article class="card__content">
        <h1 class="card__heading">${ pokemonName }</h1>
        <p class="card__text">
          ${ pokemonName } (#${ pokemon.id }) is a ${ pokemonType } type pokemon.
        </p>
      </article>
    </section>`;
  }
  // Finally, append the entire HTML string to the `main` container
  document.querySelector( 'main' ).innerHTML = html;
};

const filterPokemon = () =>
{
  const searchInput = document.getElementById( 'searchInput' ).value.toLowerCase();
  const typeFilter = document.getElementById( 'typeFilter' ).value.toLowerCase();
  const resultsNumber = document.getElementById( 'resultsNumber' ).value;

  let filteredPokemon = pokemonArray.filter( pokemon =>
  {
    const pokemonName = pokemon.name.toLowerCase();
    const pokemonTypes = pokemon.types.map( type => type.toLowerCase() );
    return pokemonName.includes( searchInput ) && ( typeFilter === '' || pokemonTypes.includes( typeFilter ) );
  } );

  filteredPokemon = filteredPokemon.slice( 0, resultsNumber );
  renderPokemon( filteredPokemon );
}

document.getElementById( 'searchInput' ).addEventListener( 'input', filterPokemon );
document.getElementById( 'typeFilter' ).addEventListener( 'change', filterPokemon );
document.getElementById( 'resultsNumber' ).addEventListener( 'input', filterPokemon );

filterPokemon();
