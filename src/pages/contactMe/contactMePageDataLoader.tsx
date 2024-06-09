import DATA from "../../data/json/profile.json";
import TProfileData from "../../types/TProfileData";

const contactMePageDataLoader = async () => {
  console.log("Loading data for home page...");
  return DATA as TProfileData;
};

export default contactMePageDataLoader;
