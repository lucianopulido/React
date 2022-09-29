import { Link } from "react-router-dom";
const CharactesByHero = ({ alter_ego, characters }) => (alter_ego !== characters ? <p>{characters}</p> : <></>);

export const HeroCard = ({ heroe }) => {
  const heroImageUrl = `/assets/heroes/${heroe.id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={heroe.superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>
              <p className="card-text">{heroe.alter_ego}</p>
              <CharactesByHero alter_ego={heroe.alter_ego} characters={heroe.characters} />
              <p className="card-text">
                <small className="text-muted">{heroe.first_appearance}</small>
              </p>
              <Link to={`/hero/${heroe.id}`}>Más información</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
