// useToast.ts
import Toast from 'react-native-toast-message';

const useToast = () => {
  const showToast = (type: 'error' | 'success' | 'warning', title: string, message: string) => {
    
    Toast.show({
      autoHide:true,
      visibilityTime:3000,
      type,
      text1: title,
      text2: message,
    });
  };

  return {
    showToast,
  };
};

export default useToast;