import { API_SOCIAL_URL } from "../../../constants/api.mjs";
import { getUserNameQueryParameter } from "../../../events/common/getUserNameQueryParameter.mjs";
import { updateUserProfilePageTitle } from "../../../events/common/updateUserProfilePageTitle.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { setUserBio } from "../../../ui/common/handlers/setUserBio.mjs";
import { setUserProfileBanner } from "../../../ui/common/handlers/setUserProfileBanner.mjs";
import { setUserProfileImage } from "../../../ui/common/handlers/setUserProfileImage.mjs";
import { updateUserProfileName } from "../../../ui/common/handlers/updateUserProfileName.mjs";
import { updateUserNumberStats } from "../../../ui/common/utils/updateUserNumberStats.mjs";
import { fetchAPI } from "../../utils/fetchAPI.mjs";

export const handleClickedUserUI = async () => {
  const userName = getUserNameQueryParameter("name");
  const queryParam = "_followers=true&_following=true&_posts=true";
  const url = `${API_SOCIAL_URL}/profiles/${userName}?${queryParam}`;

  try {
    const data = await fetchAPI(url, "GET");
    const profile = data?.data || [];

    setUserProfileBanner(profile, "#profile-banner");
    setUserBio(profile, "#profile-bio");
    setUserProfileImage(profile, "#profile-image");
    updateUserProfilePageTitle(profile);
    updateUserProfileName(profile);
    updateUserNumberStats(profile, "posts", "#number-posts");
    updateUserNumberStats(profile, "followers", "#number-followers");
    updateUserNumberStats(profile, "following", "#number-following");
  } catch (err) {
    console.error(err);
    displayMessage(
      "#info-message",
      "error",
      err.message || "Could not retrieve profile information at this time. Please try again later"
    );
  }
};
