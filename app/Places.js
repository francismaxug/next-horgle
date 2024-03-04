async function getPlaces() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = res.json();

  return data;
}

const Places = async () => {
  const places = await getPlaces();
  // console.log([places[2].name.common]);
  // console.log(places.map((place) => place.name.common));
  const data = places.map((place) => place.name.common);
  const sortedItems = data.slice().sort((a, b) => a.localeCompare(b));
  const data1 = ["Select Country", ...sortedItems];

  return (
    <>
      {data1.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </>
  );
};
export default Places;
