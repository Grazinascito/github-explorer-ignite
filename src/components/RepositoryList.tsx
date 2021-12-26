import { RepositoryItem } from "./RepositoryItem";
import "../style/repositories.scss";
import { useEffect, useState } from "react";


interface Repository {
  name: string,
  description: string,
  html_url: string,
  id: number
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Grazinascito/repos")
      .then((response) => response.json())
      .then((responseData) => setRepositories(responseData));
  }, []);

  return (
    <section>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repos) => {
          return <RepositoryItem repos={repos} key={repos.id} />;
        })}
      </ul>
    </section>
  );
}
