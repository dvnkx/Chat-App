import {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Image, Modal, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UIInput} from '../Components/UIInput';
import {Routes} from '../utils/routes';
import type {NavigationProps} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {profileSchema} from '../utils/schemas';
import {auth, storage} from '../firebase/firebase';
import {ref} from '@firebase/storage';
import {getDownloadURL, uploadString} from 'firebase/storage';
import {ASSETS} from '../utils/assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {uploadProfileDataToServer} from '../Components/uploadData';
import {updateProfile, User} from 'firebase/auth';

export const ProfileAccount = () => {
  const [imageBase64, setImageBase64] = useState<any>();
  const [modalActive, setModalActive] = useState(false);

  const navigation = useNavigation<NavigationProps>();
  const handleClickToTabs = useCallback(() => {
    navigation.navigate(Routes.TABS);
  }, []);

  const avatar = ASSETS.defaultAvatarImage;

  const {values, errors, isValid, handleChange, handleSubmit} = useFormik({
    initialValues: {
      name: '',
      surname: '',
    },
    validationSchema: profileSchema,
    validateOnChange: true,
    onSubmit: async values => {
      // let photoUrl = null;
      // if (imageBase64) {
      // const storageRef = ref(
      //   storage,
      //   `profile-picture/user${auth.currentUser.uid}/${auth.currentUser.uid}`,
      // );

      // console.log(imageBase64);

      // try {
      //   await uploadString(storageRef, imageBase64, 'base64');
      // } catch (e) {
      //   console.error(`Upload error ${e}`);
      // }

      // try {
      //   photoUrl = await getDownloadURL(storageRef);
      //   console.log(`Downloaded url: ${photoUrl}`);
      // } catch (e) {
      //   console.error(`Download error ${e}`);
      // }
      // }

      await updateProfile(auth.currentUser as User, {
        displayName: values.name + ' ' + values.surname,
        photoURL: imageBase64,
      })
        .then(() => {
          console.log(
            `Profile updated. Name: ${auth.currentUser!.displayName}`,
          );
        })
        .catch(e => console.log(e));
      await uploadProfileDataToServer();
      handleClickToTabs();
      // await uploadName();
    },
  });

  const takePhotoFromCamera = () => {
    launchCamera({
      mediaType: 'photo',
      maxHeight: 100,
      maxWidth: 100,
      includeBase64: true,
      quality: 0.8,
    }).then(image => {
      image
        .assets!.map(arr => arr.base64)
        .forEach(function (data) {
          setImageBase64(data);
        });
    });
  };

  const takePhotoFromGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 100,
      maxWidth: 100,
      includeBase64: true,
      quality: 0.8,
      selectionLimit: 1,
    }).then(image => {
      image
        .assets!.map(arr => arr.base64)
        .forEach(function (data) {
          setImageBase64(data);
        });
    });
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalActive}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.modalButton} onPress={takePhotoFromCamera}>
              <Text>Make Photo</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={takePhotoFromGallery}>
              <Text>Choose photo</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalActive(!modalActive)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.headerPos}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={handleClickToTabs}
            disabled={!isValid}>
            <View style={styles.chevronPos}>
              <Image style={styles.chevron} source={ASSETS.chevronLeft} />
            </View>
            <Text style={styles.backText}>Your profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.avatarPos}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={() => setModalActive(true)}>
            <Image
              style={
                ASSETS.defaultAvatarImage && imageBase64
                  ? styles.avatarImg
                  : styles.defaultAvatarImg
              }
              source={
                imageBase64
                  ? {uri: `data:image/jpeg;base64,${imageBase64}`}
                  : avatar
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.input}>
        <UIInput
          placeholder="Enter your name (Required)"
          value={values.name}
          onChange={handleChange('name')}
          error={errors.name}
          autoCorrect={false}
        />
        <UIInput
          placeholder="Enter your name (Optional)"
          value={values.surname}
          onChange={handleChange('surname')}
          error={errors.surname}
          autoCorrect={false}
        />
      </View>
      <View style={styles.btnPos}>
        <TouchableOpacity
          disabled={!isValid}
          style={styles.saveButton}
          onPress={handleSubmit as () => void}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPos: {
    paddingTop: 46,
  },
  defaultAvatarImg: {
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  input: {
    paddingTop: 31,
  },
  btnPos: {
    paddingTop: 68,
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 46,
    borderRadius: 30,
    backgroundColor: '#91b3fa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  btnText: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 55,
    alignItems: 'center',
    borderColor: '#91b3fa',
    borderWidth: 1,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    elevation: 2,
    backgroundColor: '#91b3fa',
    width: 120,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 90,
    paddingTop: 47,
    paddingBottom: 13,
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerPos: {
    width: 343,
    height: 30,
  },
  chevron: {
    width: 20,
    height: 20,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '600',
  },
  chevronPos: {
    paddingTop: 5.99,
    paddingBottom: 5.99,
    paddingLeft: 8.29,
    paddingRight: 8.29,
  },
});
