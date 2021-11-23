import React from "react";
//Native Components
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
//Custom Components
import HomeStyles from "./HomeStyles";
import ProfissionalCard from "../../components/profissionalCard/ProfissionalCard";
import Spacer from "../../components/spacer/Spacer";
import JobComponent from "../../components/jobComponent/JobComponent";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
//Functions and Hooks
import { getSaudation } from "../../util/InterfaceInfo";

export default function HomeView(props) {
  const { borderImage, userData, atividadesData } = props;
  const { nome } = userData;
  const navigation = useNavigation();

  const styles = HomeStyles(borderImage);

  React.useEffect(() => {
    
  });

  const goToUser = () => {
    navigation.navigate("User");
  };
  

  const changeHistory = () => {
    if (history.length > 0) {
      return (
        <SafeAreaView>
          <FlatList
            data={atividadesData}
            renderItem={({ item }) =>
              <JobComponent
                key={item.id}
                title={item.titulo}
                place={item.local}
                hours={item.horasTrabalhadas}
                rate={item.avaliacao}
                description={item.descricao}
                observations={item.observacao}
                tier={item.tier}
              />}
          />
        </SafeAreaView>
      );
    } else {
      return <Text>Ainda nenhum histórico</Text>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Spacer size={20} />
      <View>
        <TouchableOpacity onPress={goToUser}>
        <Image
          style={styles.image}
          source={{
            uri: `data:image/png;base64,${userData.imagemPerfilBase64}`
          }} />
        </TouchableOpacity>
        <Text style={styles.saudation}>
          {getSaudation()}
        </Text>
        <Text style={styles.name}>
          {nome}
        </Text>
        <ProfissionalCard
          rate={userData.totalAvaliacao}
          hours={userData.totalHorasTrabalhadas}
        /* streak={"2 Weeks"} */
        />
        <Spacer size={20} />
        <Text style={styles.recentActivity}>Recent Activity</Text>
        {changeHistory()}
        <Button
          text={"Registrar atividade"}
          onPress={() => navigation.navigate("RegisterActivity")}
        />
      </View>
    </ScrollView>
  );
}
