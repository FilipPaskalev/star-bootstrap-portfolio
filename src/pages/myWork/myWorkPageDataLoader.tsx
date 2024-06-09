import DATA from "../../data/json/profile.json";
import TypeProfileData from "../../types/TypeProfileData";

const myWorkPageDataLoader = async () => {
  console.log("Loading data for home page...");

  return DATA as TypeProfileData;
};

export default myWorkPageDataLoader;
