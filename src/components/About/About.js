import React from 'react';
import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@octokit/rest';


const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'aldeowl'
        }).then(({ data }) => console.log(data));
    }

    render() {
        const { isLoading } = this.state;
        return(
            <CardContent>
                <h1 className={styles.wrap}>{ isLoading ? <CircularProgress /> : 'Обо мне:'}</h1>
            </CardContent>
        );
    }
}
export default About;