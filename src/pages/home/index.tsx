import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISTATE } from "../../store";
import { IPOKEMON } from "../../store/modules/pokemon/reducer";
import { requestPokemonApi } from "../../store/modules/pokemon/action";
import Pagination from "../../components/pagination";
const HomePage: React.FC = () => {
  const reducer = useSelector<ISTATE, IPOKEMON>((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPokemonApi());
  }, []);
  const nextPage = () => {
    if(!reducer.loading){
      dispatch(requestPokemonApi());
    } 
  };
  return (
    <>
    {
      JSON.stringify(reducer)
    }
    {
      reducer.count?
     <Pagination
     length={10}
     hasMore={reducer.next? true : false}
     next={nextPage}
     ElementLoading={ () => <h1>Carregando..</h1>}
     loading={reducer.loading}
      >
        {
          reducer.results?.map((element) => {
            return <h1 key={element.name}>{element.name}</h1>
          })
        }
    </Pagination>
    : <h1>Carregando Component</h1>
    } 
    </>
  );
};

export default HomePage;
