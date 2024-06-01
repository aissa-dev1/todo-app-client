import axios from "axios";

class UsersFetch {
  async accessProfile(accessToken: string) {
    const axiosRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return axiosRes;
  }
}

export const usersFetch = new UsersFetch();
