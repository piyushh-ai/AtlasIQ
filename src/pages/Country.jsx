import React, { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/ui/Loader";
import CountryCard from "../components/Layouts/CountryCard";
import SearchFilter from "../components/ui/SearchFilter";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
    });
  }, []);
  if (isPending) return <Loader />;
  console.log(search, filter);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "All") return true;
    return country.region === filter;
  };

  const filterCountries = countryData.filter((country) =>
    searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry) => (
          <CountryCard key={curCountry.name.common} country={curCountry} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
