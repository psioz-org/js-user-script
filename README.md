# go-test-integration
[![Go Report Card](https://goreportcard.com/badge/github.com/zev-zakaryan/go-test-integration)](https://goreportcard.com/report/github.com/zev-zakaryan/go-test-integration)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/zev-zakaryan/go-test-integration/blob/main/LICENSE)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zev-zakaryan_go-test-integration&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=zev-zakaryan_go-test-integration)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=zev-zakaryan_go-test-integration&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=zev-zakaryan_go-test-integration)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=zev-zakaryan_go-test-integration&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=zev-zakaryan_go-test-integration)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=zev-zakaryan_go-test-integration&metric=coverage)](https://sonarcloud.io/summary/new_code?id=zev-zakaryan_go-test-integration)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=zev-zakaryan_go-test-integration&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=zev-zakaryan_go-test-integration)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zev-zakaryan_go-test-integration&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=zev-zakaryan_go-test-integration)

1. Create new project from empty or another project as template (not clone)
2. Change project name related string in README.md, sonar-project.properties and language related files such as go.mod
3. Add github variable:
3.1 Add SONAR_TOKEN: ...from... https://sonarcloud.io/projects/create
	We use "bound" sonarcloud so we must import project in sonarcloud before (analyze action will fail after copy repo with workflow)
	Don't create SONAR_TOKEN yourself but get it from auto-created after import project.
3.2. Add REPO_ACTION_TOKEN: ...from... https://github.com/settings/tokens
GitHub actions got cannot trigger another GitHub action. Use personal access token so the PRs are opened by yourself thereby triggering the required workflows.
https://github.com/googleapis/release-please/issues/922
https://github.com/marketplace/actions/release-please-action#github-credentials
4.
4.1 Settings > General > "Always suggest updating pull request branches", "Allow auto-merge", "Automatically delete head branches".
4.2 Settings > Actions > "Allow GitHub Actions to create and approve pull requests" to use "release-please" action.
4.3 Settings > Code security and analysis > "Private vulnerability reporting"/"Secret scanning": enable
5. Re-run failed jobs. Wait until completely success
6. Settings > Branches > Add branches rule on main branch as needed:
	Require status checks: SonarCloudChk[Github Actions],GosecChk[Github Actions],SonarCloud[SonarCloud],gosec[Github Code Scanning],SonarCloud Code Analysis[Github Code Scanning]
	*SonarCloud[SonarCloud],gosec[Github Code Scanning] will visible only if start PR
7. Merge
