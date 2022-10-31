import {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Image, Modal, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UIInput} from '../components/UIInput';
import {ASSETS} from '../utils/assets';
import {Routes} from '../utils/routes';
import ImagePicker from 'react-native-image-crop-picker';
import type {NavigationProps} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {profileSchema} from '../utils/schemas';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {setInfo} from '../store/slices/infoSlice';

export const ProfileAccount = () => {
  const navigation = useNavigation<NavigationProps>();
  const [modalActive, setModalActive] = useState(false);
  const [avatar, setAvatar] = useState(ASSETS.defaultAvatarImage);

  const dispatch = useAppDispatch();
  const {name, surname, image} = useAppSelector(state => state.data);

  const {values, errors, isValid, handleChange} = useFormik({
    initialValues: {
      name: '',
      surname: '',
    },
    validationSchema: profileSchema,
    validateOnChange: true,
    onSubmit: values => {
      console.log(values);
    },
  });

  const handleClickToConstacts = useCallback(() => {
    navigation.navigate(Routes.TABS);
  }, []);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(img => {
      console.log();
      setAvatar(img.path);
    });
  };

  const handleClick = () => {
    dispatch(
      setInfo({
        name: values.name,
        surname: values.surname,
      }),
    );
    handleClickToConstacts();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => {
          setModalActive(!modalActive);
        }}>
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
      <View style={styles.avatar}>
        <TouchableOpacity onPress={() => setModalActive(true)}>
          <Image style={styles.avatarImg} source={ASSETS.veniaminovich} />
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <UIInput
          placeholder="Enter your name (Required)"
          value={values.name}
          onChange={handleChange('name')}
          error={errors.name}
        />
        <UIInput
          placeholder="Enter your name (Optional)"
          value={values.surname}
          onChange={handleChange('surname')}
          error={errors.surname}
        />
      </View>
      <View style={styles.btnPos}>
        <TouchableOpacity
          disabled={!isValid}
          style={styles.saveButton}
          onPress={handleClick}>
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
    paddingTop: 136,
  },
  avatar: {
    paddingLeft: 25,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
  },
  avatarImg: {
    width: 56,
    height: 56,
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
  },
  btnText: {
    fontFamily: 'Mulish',
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
  },
});
