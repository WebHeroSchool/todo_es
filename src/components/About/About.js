import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        infoAboutUser: [],
        isError: false,
        errorMessage: ''
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'skripaleva'
        }).then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            });
        }).catch(err => {
            this.setState({
                isLoading: false,
                isError: true,
                errorMessage: err
            });
        });

        octokit.users.getByUsername({
            username: 'skripaleva'
        }).then(({data}) => {
            this.setState({
                infoAboutUser: data,
                isLoading: false,
            });
        }).catch(err => {
            this.setState({
                isLoading: false,
                isError: true,
                errorMessage: err
            });
        });
     };

    render() {
        const { isLoading, repoList, isError, errorMessage, infoAboutUser } = this.state;
        const Preloader = () => <div className={styles.preloader}></div>;

        return(
            <div className={styles.wrap}>
                {isLoading ? <Preloader/> :
                    <div>
                        <h1>Обо мне:</h1>
                        {isError ? 'Ошибка получения данных с сервера:' + errorMessage :
                        <div className={styles.repo}>
                            <div>
                                <p>Логин: {infoAboutUser.login}</p>
                                <img src={infoAboutUser.avatar_url} alt='Фото пользователя' className={styles.user_avatar} />
                            </div>
                            <div>
                                <p>Мои репозитории:</p>
                                <ol className={styles.repo_list}>
                                    {repoList.map(repo => (<li key={repo.id}>
                                        <a href={repo.svn_url} className={styles.repo_name}>{repo.name}</a>
                                    </li>
                                ))}
                                </ol>
                            </div>
                        </div>
                    }
                    </div>
                }
            </div>
        );
    }
}

export default About;