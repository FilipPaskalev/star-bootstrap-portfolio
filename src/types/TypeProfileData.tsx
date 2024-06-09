import TypeSocialLink from "./TypeSocialLink";

type TypeProfileData = {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  aboutMe: string;
  socialLinks: TypeSocialLink[];
};

export default TypeProfileData;
