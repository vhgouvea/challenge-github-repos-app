import { RepositoryModel } from "../../database/models/RepositoryModel";
import { RepositoryList } from "./styles";

interface Props {
  data: RepositoryModel[],
  renderItem: any
}

export function ListRepositories({ data, renderItem }: Props) {
  
  console.log(data, 'to aqui dentro da brincadeira')
  console.log(renderItem, 'renderizando a lista')
  return (
    <RepositoryList 
      data={data}
      renderItem={renderItem}
    />
  )
}