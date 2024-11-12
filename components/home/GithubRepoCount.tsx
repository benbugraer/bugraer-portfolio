import { useState, useEffect } from "react";

interface GitHubRepoCountProps {
  username: string;
}

const GitHubRepoCount: React.FC<GitHubRepoCountProps> = ({ username }) => {
  const [repoCount, setRepoCount] = useState<number>(0);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const repositories = await response.json();
        setRepoCount(repositories.length);
      } catch (error) {
        console.error("GitHub API'sinden repo sayısı alınamadı", error);
      }
    };

    fetchRepoCount();
  }, [username]);

  return (
    <div>
      <h1>{repoCount}</h1>
    </div>
  );
};

export default GitHubRepoCount;
