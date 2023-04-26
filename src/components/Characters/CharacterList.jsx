import  { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { addPage } from "../../features/page/pageSlice";

const Character = lazy(() => import("../Characters/Character"));

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const search = useSelector((state) => state.search.value);
  const loading = useSelector((state) => state.loading.value);
  const filter = useSelector((state) => state.filter);
  const responseStatus = useSelector((state) => state.responseStatus);
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  const increasePages = () => {
    dispatch(addPage());
  };

  useEffect(() => {
    // scroll hacia abajo después de que la dependencia 'characters' cambia
    if (containerRef.current) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight - 400;

    }
  }, [characters]);

  const fetchMoreData = () => {
    increasePages();
  };

  if (loading) return <div
  className=" NoEncontrado inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>

  if (
    (filter.gender !== "" || filter.status !== "" || filter.species !== "") &&
    characters &&
    characters.length === 0
  )
    return (
    <div className="NoEncontrado" >
       <h1>No se han encontrado personajes con dichas características.</h1>
    </div>
     
    );

  if (characters && characters.length === 0) {
    return <div className="NoEncontrado">
       <h1 >No se ha encontrado personaje con el nombre de <b>{search}.</b></h1>
    </div> 
   
  }

  return (
    <div className="ListCharacters mt-12 ml-5" ref={containerRef}>
      <InfiniteScroll
        className="infinite-scroll"
        dataLength={characters.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        <div className="cards-container">
          {characters.map((character) => (
            <Suspense key={character.id} fallback={<div>Loading...</div>}>
              <Character props={character} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CharacterList;
