const refPackage = require('reference-package');

async function getMyRepos() {
    const myRepo = new refPackage.GitHub('ardydedase');
    const repos = await myRepo.getRepos();
    const response = await repos.json();
    console.log(response);
};

getMyRepos();
