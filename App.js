import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    url: `https://www.azpetshop.com.br/blog/wp-content/uploads/2021/03/quantos-anos-vive-um-gato.jpg`,
  },
  {
    url: `https://static1.patasdacasa.com.br/articles/6/82/6/@/16964-a-lingua-do-gato-tem-funcoes-desde-a-apr-opengraph_1200-2.jpg`,
  },
  {
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37UPYX9HA-9fPSAIYAo0DiPS9zI262zqnn1iXA6whfgNUADRmm-uhXcI7zN6qJgUmg7U&usqp=CAU`,
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#FFF',
    flex: 1,
  };

  const ModalImage = (
    <>
      <Modal
        hardwareAccelerated={true}
        animated={true}
        animationType={'slide'}
        onRequestClose={() => setOpen(false)}
        visible={open}
        transparent={true}>
        <ImageViewer
          onSwipeDown={() => {
            setOpen(false);
          }}
          enableSwipeDown={true}
          renderHeader={() => (
            <>
              <View>
                <Text>Hi</Text>
              </View>
            </>
          )}
          handleCancel={() => {
            setOpen(false);
          }}
          imageUrls={images}
        />
      </Modal>
    </>
  );

  const Info = (
    <View style={{backgroundColor: '#F5F5F5', borderRadius: 30}}>
      <View>
      <Text style={styles.label}>
        Nome?:

        </Text>
        <Text>
        R: Gatinho demonstrativo
        </Text>
      </View>

      <View>
      <Text style={styles.label}>
        Onde Vivo?:

        </Text>
        <Text>
        R: Em São Paulo
        </Text>
      </View>

      <View>
        <Text style={styles.label}>
        O que como?:

        </Text>
        <Text>
        R: Ração de gatinho
        </Text>
        

        <Text style={styles.label}>
        Atividade Favorita?:

        </Text>
        <Text>
        R: Brincar com bolinhas de lã.
        </Text>

        <View>
        <Button
        style={styles.button}
        onPress={() => {setOpen(true)}}
          title="Veja minhas fotos😸"
        />

        </View>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Tocou');
            setOpen(true);
          }}>
          <Image
            style={styles.image}
            enableImageZoom={true}
            source={{
              uri: `https://www.azpetshop.com.br/blog/wp-content/uploads/2021/03/quantos-anos-vive-um-gato.jpg`,
            }}
          />
        </TouchableOpacity>
        {ModalImage}
        {Info}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    borderRadius: 125,
    width: 250,
    height: 250,
  },

  label: {
    color: '#000',
    textAlign: 'left',
    marginVertical: 10,
    fontSize: 20,
  },
  viewContainer: {
    width: '100%', height: '100%',
    padding: 25,
  },
  button:{
    marginVertical: 20,
    borderRadius: 10
  }
});

export default App;
