import DATA from "../data/json/profile.json";

const appDataLoader = async () => {
  console.log("Loading data for app...");

  const brand: string = `${DATA.firstName} ${DATA.lastName}`;

  return brand;
};

export default appDataLoader;
