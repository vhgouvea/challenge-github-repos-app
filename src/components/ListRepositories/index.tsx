import { RepositoryModel } from "../../database/models/RepositoryModel";
import { RepositoryList } from "./styles";

interface Props {
  data: RepositoryModel[],
  renderItem: any
}

export function ListRepositories({ data, renderItem }: Props) {

  return (
    <RepositoryList 
      data={data}
      renderItem={renderItem}
    />
  )
}