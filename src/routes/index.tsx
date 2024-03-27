import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes';
import StackRoutes from './stack.routes';


export function Routes() {
  

  return (
    <NavigationContainer>
      {/* <AppRoutes /> */}
      <StackRoutes />
    </NavigationContainer>
    )
}