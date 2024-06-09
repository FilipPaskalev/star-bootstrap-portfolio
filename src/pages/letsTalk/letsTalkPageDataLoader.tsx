import DATA from "../../data/json/profile.json";
import TypeProfileData from "../../utils/types/TypeProfileData";

const letsTalkPageDataLoader = async () => {
  console.log("Loading data for home page...");
  return DATA as TypeProfileData;
};

export default letsTalkPageDataLoader;
