const GitHub = require('reference-package').GitHub;

async function getMyRepos() {
    const myRepo = new GitHub('ardydedase');
    const repos = await myRepo.getRepos();
    const response = await repos.json();
    console.log(response);
};

getMyRepos();
