import { useState } from "react";

const Form = ({ onSubmit }) => {
  const defaultImageSrc = "./images/Pokeball.png";
  const acceptedImages = "image/png, image/gif, image/jpeg";
  const [pokemonName, setPokemonName] = useState();
  const [pokemonImage, setPokemonImage] = useState(defaultImageSrc);

  const handleInputPokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  const handleInputFileChange = (event) => {
    if (event?.target?.files[0]) {
      setPokemonImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name: pokemonName,
      image: pokemonImage,
    });

    setPokemonImage(defaultImageSrc);
    setPokemonName("");
  };

  return (
    <div className="form_container">
      <form
        className="pokemon_form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="pokemonName">Pokemon Name:</label>
        <input
          type="text"
          id="pokemonName"
          name="pokemonName"
          required
          onChange={handleInputPokemonName}
          value={pokemonName}
        />
        <label htmlFor="pokemonImageSrc">Select a Pokemon Image:</label>
        <input
          type="file"
          id="pokemonImageSrc"
          name="pokemonImageSrc"
          accept={acceptedImages}
          onChange={handleInputFileChange}
        />
        <img className="form_image-preview" src={pokemonImage} />
        <input className="form_submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
