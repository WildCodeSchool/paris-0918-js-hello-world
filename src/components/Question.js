import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AnswerOption from './AnswerOption';
import ButtonRestart from './ButtonRestart';
import Loader from './Loader';

const styles = {
  root: {
    backgroundColor: '#F3F8FF',
    color: '#5883b5',
    height: '100%',
    padding: 10,
    textAlign: 'center',
    // paddingBottom: '8vh',
  },
  question: {
    marginTop: '4%',
    marginBottom: '4%',
  },
  nbPage: {
    backgroundColor: 'rgba(170, 201, 238, 0.85)',
    color: '#FFF',
    height: 'auto',
    padding: 'auto',
  },
  buttonRestart: {
    marginTop: '10%',
  },
};

class Question extends React.Component {
  state = {
    error: null,
    isLoading: true,
    quiz: [],
    indexQuiz: 0,
    cpt: 1,
  }

  componentDidMount() {
    this.getQuestion();
  }

  getQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(
        (resultat) => {
          this.setState({
            isLoading: false,
            quiz: resultat.results,
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
            error,
          });
        },
      );
  }


  // handleUpdate = (e) => {
  //     e.preventDefault()
  //     this.setState({
  //         count: this.state.count + 1
  //     })
  //     this.handleNextQuestion()

  // }

  handleNextQuestion = () => {
    const { indexQuiz, cpt } = this.state;
    this.setState({
      indexQuiz: indexQuiz + 1,
      cpt: cpt + 1,
    });
  }

  restart = () => {
    this.setState({
      indexQuiz: 0,
      cpt: 1,
    });
    this.getQuestion();
  }


  render() {
    const { classes } = this.props;
    const {
      error, isLoading, quiz, indexQuiz, cpt,
    } = this.state;
    const getanswers = (index) => {
      const answers = [];
      answers.push({ proposal: quiz[index].correct_answer, correct: true });
      quiz[index].incorrect_answers.map(answer => answers.push({ proposal: answer, correct: false }));
      return answers;
    };
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>);
    } if (isLoading) {
      return <div><Loader /></div>;
    }
    return (
      <div>
        {quiz && indexQuiz < 10
          && (
            <Grid
              className={classes.root}
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12} className={classes.question}>
                <h2>
                  {quiz[indexQuiz].question}
                </h2>
              </Grid>
              <Grid item sm={12}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={32}
                >
                  {shuffle(getanswers(indexQuiz)).map((element, i) => (
                    <Grid item key={i} xs={12}>
                      <AnswerOption
                        key={element.proposal}
                        proposal={element.proposal}
                        correct={element.correct}
                        update={this.handleUpdate}
                        next={this.handleNextQuestion}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={3}>
                    <h4 className={classes.nbPage}>
                      {cpt}
                      &nbsp;
                      / 10
                    </h4>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        }
        {indexQuiz >= 10
          && (
            <Grid
              className={classes.buttonRestart}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={0}
              onClick={this.restart}
            >
              <ButtonRestart />
            </Grid>
          )}
      </div>
    );
  }
}

export default withStyles(styles)(Question);
