import { FlatListProps } from "react-native";
import { RepositoryModel } from "../../database/models/RepositoryModel";
import { RepositoryList } from "./styles";

interface Props {
  data: RepositoryModel[],
  renderItem: FlatListProps<RepositoryModel>['renderItem'];
}

export function ListRepositories({ data, renderItem }: Props) {

  return (
    <RepositoryList 
      data={data}
      renderItem={renderItem}
    />
  )
}