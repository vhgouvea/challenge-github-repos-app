import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native'
import { IRepository } from '../../interfaces/IRepository';
import { RepositoryModel } from '../../database/models/RepositoryModel';
import { RFValue } from 'react-native-responsive-fontsize';


export const RepositoryList = styled(FlatList as new (props: FlatListProps<RepositoryModel>) => FlatList<RepositoryModel>)`

`;
