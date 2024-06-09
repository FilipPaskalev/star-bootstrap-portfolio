import DATA from "../../data/json/profile.json";
import TProfileData from "../../types/TProfileData";

const resumePageDataLoader = async () => {
  console.log("Loading data for home page...");
  return DATA as TProfileData;
};

export default resumePageDataLoader;
