import React from "react";

import HomeView from "./HomeView";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";
import { getUserFromApi } from "../../services/storage";
import { useDispatch } from "react-redux";

export default function HomeController() {
  const [loading, setLoading] = React.useState(true);
  const state = useSelector(state => state.app);
  const colors = useSelector(state => state.colors);
  const [userData, setUserData] = React.useState(null);

  const borderImage = "Excelent";

  const getData = async () => {
    setUserData(await getUserFromApi());
    setLoading(false);
  };

  React.useEffect(() => {
    if (userData === null) {
      getData();
    }
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <HomeView
      loading={loading}
      userData={userData.data.data}
      state={state}
      colors={colors}
      borderImage={borderImage}
    />
  );
}
