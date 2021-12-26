
interface RepositoryItemProps {
  repos: {

    name: string,
    description: string,
    html_url: string
  }
}


export function RepositoryItem(props: RepositoryItemProps) {
  console.log(props.repos);
  return (
    <>
      <section className="repository-list">
        <li>
          <strong>{props.repos.name}</strong>
          <p>{props.repos.description ?? "Sem descrição"}</p>
          <a href={props.repos.html_url ?? "Sem link"} target="_blank">
            {props.repos.html_url ?? "Default"}
          </a>
        </li>
      </section>
    </>
  );
}
