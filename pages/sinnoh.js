import Layout from "../components/Layout.js";
import Link from "next/link";
import Image from "next/image";

export default function sinnoh({ pokemon }) {
  return (
    <Layout title="Sinnoh Pokedex">
      <div className="flex justify-center hover:cursor-none">
        <h1 className="mb-8 text-4xl uppercase">
          <span className="border-b-2 border-sky-500 hover:text-orange-500 hover:cursor-none">
            Sinnoh Region | Pokedex
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {pokemon.map((eachPokemon, index) => (
            <li key={index} className="mx-1">
              <Link href={`/pokemon?id=${index + 387}`}>
                <a>
                  <div className="my-4 shadow-xl w-96 card card-side bg-base-100">
                    <figure>
                      <Image
                        src={`${eachPokemon.image}`}
                        alt={eachPokemon.name}
                        width={300}
                        height={300}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="capitalize card-title">
                        <span>{index + 387}.</span> {eachPokemon.name}
                      </h2>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
    );
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 387)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...result,
        image,
      };
    });

    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error("Alert: " + err);
  }
}
