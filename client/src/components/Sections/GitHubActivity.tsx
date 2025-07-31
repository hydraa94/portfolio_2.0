import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { RepoCard } from "../Cards/RepoCard";
import { repositories, githubStats } from "../../data/repos";

export const GitHubActivity = () => {
  return (
    <section id="github" className="py-20 bg-white">
      <Container>
        <SectionTitle>GitHub Activities</SectionTitle>

        {/* GitHub Stats Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-8 max-w-2xl mx-auto shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Nailul Autor's GitHub Stats
              </h3>
              <p className="text-gray-300">My coding journey in numbers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {githubStats.totalCommits}
                </div>
                <div className="text-sm text-gray-300">Total Commits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">
                  {githubStats.totalPRs}
                </div>
                <div className="text-sm text-gray-300">Pull Requests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {githubStats.totalStars}
                </div>
                <div className="text-sm text-gray-300">Stars Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">
                  {githubStats.totalIssues}
                </div>
                <div className="text-sm text-gray-300">Issues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {githubStats.contributedRepos}
                </div>
                <div className="text-sm text-gray-300">Repositories</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mb-2">
                  {githubStats.mostUsedLanguage}
                </div>
                <div className="text-sm text-gray-300">Top Language</div>
              </div>
            </div>
          </div>
        </div>

        {/* Repository Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Featured Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/nailul-autor"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <span>🐙</span>
            View All Repositories on GitHub
          </a>
        </div>
      </Container>
    </section>
  );
};
