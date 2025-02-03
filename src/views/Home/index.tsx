import React, { useEffect, useState } from 'react';
import './styles.scss';
import SearchBar from '../../components/search-bar';
import { pokeApiService } from '../../services/poke-api';
import { PokeApiPokemon, PokeApiPokemonPaginate } from '../../services/poke-api/types';
import CardList from '../../components/card-list';
import CardDetail from '../../components/card-detail';
import { HttpFacade } from '../../services/http/facade';
import { useLoading } from '../../providers/loader';

const Home = () => {
  const { setLoading } = useLoading()
  HttpFacade.setLoading = setLoading

  const [params, setParams] = useState({ limit: 50, offset: 0 })
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [total, setTotal] = useState<number | null>(null)
  const [pokemons, setPokemons] = useState<PokeApiPokemonPaginate[]>([])
  const [selected, setSelected] = useState<PokeApiPokemon | null>(null)
  const [isOnBottom, setIsOnBottom] = useState(false)

  const getPokemons = async () => {
    const { results, count, next } = await pokeApiService.getPaginate(params)
  
    if (!total) setTotal(count)
  
    setHasNextPage(!!next)
    setPokemons((prev) => [...prev, ...results])
  }

  const handleScroll = () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    setIsOnBottom(scrolledToBottom);
  };

  useEffect(() => {
    getPokemons()
  }, [params])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toAddCardList = (pokemon: PokeApiPokemonPaginate) => {
    const id = pokemon.url.match(/\/(\d+)\/$/)?.at(1);
    if (!id) return

    return (
      <div className='col-sm-12 col-md-4' key={id}>
        <CardList id={+id} onClick={onClickCard} />
      </div>
    )
  }

  const onClickSearch = async (value: string) => {}

  const onClickCard = (pokemon: PokeApiPokemon) => {
    setSelected(pokemon)
  }

  const onClickLoadMore = () => {
    setParams((prev) => ({ ...prev, offset: prev.offset + 50 }))
  }

  const onClickEvolution = async (id: number) => {
    const row = await pokeApiService.getOne(id)
    setSelected(row)
  } 

  return (
    <div className='container'>
      <div className='row' style={{ marginTop: '2rem' }}>
        <div className='col-12 col-lg-8' style={{ padding: '12px'}}>
          <SearchBar onClick={onClickSearch} />
          <div className='row' style={{ marginTop: '2rem' }}>
            {pokemons.map(toAddCardList)}
          </div>
        </div>
        <div className='col-12 col-lg-4'>
          <CardDetail pokemon={selected} onClickEvolution={onClickEvolution} />
        </div>
      </div>

      {isOnBottom && hasNextPage &&
        <button className='load-more' onClick={onClickLoadMore}>
          Load more
        </button>
      }

    </div>
  )
}

export default Home;
