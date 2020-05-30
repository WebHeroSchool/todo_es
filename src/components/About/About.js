import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import Created from '../Created/Created';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TelegramIcon from '@material-ui/icons/Telegram';
import CreateIcon from '@material-ui/icons/Create';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '@material-ui/core/Card';
import indigo from '@material-ui/core/colors/indigo';
import noRepoList from '../../img/Frame.png';
import classnames from 'classnames';
import arrow from "../../img/arrow.svg";

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoadingUser: true,
        isLoadingRepo: true,
        repoList: [],
        infoAboutUser: [],
        isErrorUser: false,
        isErrorRepo: false,
        errorMessage: '',
        firstRepo: 0,
        lastRepo: 5
    };

    prevPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo - 5,
            lastRepo: this.state.lastRepo - 5
        });
    };

    nextPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo + 5,
            lastRepo: this.state.lastRepo + 5
        });
    };

    componentDidMount() {
        octokit.users.getByUsername({
            username: 'skripaleva'
        }).then(({data}) => {
            this.setState({
                infoAboutUser: data,
                isLoadingUser: false,
            });
        }).catch(err => {
            this.setState({
                isLoadingUser: false,
                isErrorUser: true,
                errorMessage: err
            });
        });

        octokit.repos.listForUser({
            username: 'skripaleva'
        }).then(({ data }) => {
            this.setState({
                repoList: data,
                isLoadingRepo: false
            });
        }).catch(err => {
            this.setState({
                isLoadingRepo: false,
                isError: true,
            });
        });
     };

    render() {
        const { isLoadingUser, isLoadingRepo, repoList, isErrorRepo, isErrorUser, infoAboutUser, firstRepo, lastRepo, errorMessage } = this.state;
        const repoListPage = repoList.slice(firstRepo, lastRepo);
        const Preloader = () => <div className={styles.preloader}></div>;

        return(
            <>
                {isLoadingUser  ? <Preloader/> :
                    <>
                        <Card className={styles.wrap}>
                            {isErrorUser ? 'Ошибка получения данных с сервера: ' + errorMessage :
                                <>
                                    <img src={infoAboutUser.avatar_url} alt='Фото пользователя' className={styles.user_avatar} />
                                    <div className={styles.container}>
                                        <h2 className={styles.name}>{infoAboutUser.name}</h2>
                                        <p className={styles.bio}>{infoAboutUser.bio}</p>
                                        <h4 className={styles.title}>Портфолио:</h4>
                                        <div className={styles.portfolio_wrap}>
                                            <a href='https://webheroschool.github.io/LOCO_project//'
                                               className={styles.portfolio}
                                               target='_blank'
                                               rel='noopener noreferrer'
                                            >
                                                <CreateIcon style={{ fontSize: 20 }}/>
                                                Сайт интернет-магазина Loco project
                                            </a>
                                            <a href='https://webheroschool.github.io/JS_FinalProject/'
                                               className={styles.portfolio}
                                               target='_blank'
                                               rel='noopener noreferrer'>
                                                <CreateIcon style={{ fontSize: 20 }}/>
                                                Игра Find bug
                                            </a>
                                        </div>
                                        <div className={styles.connection}>
                                            <a href='https://t.me/ESkripaleva'
                                               target='_blank'
                                               rel='noopener noreferrer'
                                               className={styles.phone}
                                            >
                                                <TelegramIcon  style={{ color: indigo[800], fontSize: 28 }} name='tg' className={styles.phone__img}/>
                                            </a>
                                            <a href='mailto: e.skripaleva@gmail.com'
                                               target='_blank'
                                               rel='noopener noreferrer'
                                               className={styles.email}
                                            >
                                                <AlternateEmailIcon  style={{ color: indigo[800], fontSize: 27 }} name='email' className={styles.email__img}/>
                                            </a>
                                            <a href='https://github.com/skripaleva'
                                               target='_blank'
                                               rel='noopener noreferrer'
                                               className={styles.gh}
                                            >
                                                <GitHubIcon  style={{ color: indigo[800], fontSize: 26 }} name='gh' className={styles.gh__img}/>
                                            </a>
                                            <a href='https://www.linkedin.com/in/evgeniya-skripaleva-62631a1a3'
                                               target='_blank'
                                               rel='noopener noreferrer'
                                               className={styles.in}
                                            >
                                                <LinkedInIcon  style={{ color: indigo[800], fontSize: 27 }} name='vk' className={styles.in__img}/>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            }
                        </Card>
                        {isLoadingRepo ? null :
                            <Card className={styles.wrap}>
                                {isErrorUser ? null :
                                    <section className={styles.repo}>
                                        <div className={styles.title_wrap}>
                                            <h4 className={styles.title}>Репозитории на github.com:</h4>
                                            {repoList.length <= 5 ? null :
                                                <div className={styles.arrows}>
                                                    <button onClick={this.prevPage} disabled={firstRepo < 5}>
                                                        <img className={styles.arrow_left} src={arrow}
                                                             alt='scroll-left'/>
                                                    </button>
                                                    <button onClick={this.nextPage}
                                                            disabled={repoList.length <= lastRepo}>
                                                        <img className={styles.arrow} src={arrow} alt='scroll-right'/>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                        {isErrorRepo
                                            ? <div className={styles.items__error}>
                                                <img src={noRepoList} alt='/'/>
                                                <h4 className={styles.errorText}>Что-то пошло не так...</h4>
                                            </div>
                                            : <>
                                                {repoList.length !== 0
                                                    ? <div className={styles.with_repo}>
                                                        <ol className={styles.items}>
                                                            {repoListPage.map(repo => (
                                                                <a href={repo.clone_url}
                                                                   className={styles.link}
                                                                   target='_blank'
                                                                   rel='noopener noreferrer'
                                                                   key={repo.id}
                                                                >
                                                                    <li className={styles.item}>
                                                                        <span className={styles.repo__name}>
                                                                            {repo.name}
                                                                        </span>
                                                                        <span className={styles.repo__descr}>
                                                                            {repo.description}
                                                                        </span>
                                                                        <div className={styles.repo__info}>
                                                                            <span className={classnames({
                                                                                [styles.language]: true,
                                                                                [styles.html]: repo.language === 'HTML',
                                                                                [styles.css]: repo.language === 'CSS',
                                                                                [styles.js]: repo.language === 'JavaScript'
                                                                            })}>
                                                                                {repo.language}
                                                                            </span>
                                                                            <span
                                                                                className={styles.star}>{repo.stargazers_count}</span>
                                                                            <span
                                                                                className={styles.fork}>{repo.forks_count}</span>
                                                                            <span> Updated on {new Date(repo.updated_at).toLocaleString('en-US', {
                                                                                day: 'numeric',
                                                                                month: 'short',
                                                                                year: 'numeric',
                                                                            })}</span>
                                                                        </div>
                                                                    </li>
                                                                </a>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                    : <div className={styles.noRepo_wrap}>
                                                        <img src={noRepoList} alt='/'/>
                                                        <h4 className={styles.errorText}>Репозитории отсутствуют</h4>
                                                        <span className={styles.tryAgain}>Добавьте как минимум один репозиторий на
                                                         <a href='https://github.com'
                                                            target='_blank'
                                                            rel='noopener noreferrer'>
                                                                    github.com
                                                         </a>
                                                    </span>
                                                    </div>
                                                }
                                            </>
                                        }
                                    </section>
                                }
                            <Created />
                        </Card>
                    }
                    </>
                }
            </>
        );
    }
}

export default About;

