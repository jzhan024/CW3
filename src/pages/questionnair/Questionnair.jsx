import "./questionnair.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Questionnair() {
    const questions = [
        {
            questionText: 'Have you ever eaten after 9pm?',
            answerOptions: [
                { answerText: 'Yes, always.' },
                { answerText: 'Yes, sometimes.' },
                { answerText: 'Yes, but rarely.' },
                { answerText: 'No, never.' },
            ],
        },
        {
            questionText: 'How often do you eat after 9pm each month?',
            answerOptions: [
                { answerText: '0 days' },
                { answerText: '1-3 days' },
                { answerText: '4-7 days' },
                { answerText: 'Over 7 days' },
            ],
        },
        {
            questionText: 'Do you eat three meals on time??',
            answerOptions: [
                { answerText: 'Yes, always.' },
                { answerText: 'Yes, sometimes.' },
                { answerText: 'Yes, but rarely.' },
                { answerText: 'No, never.' },
            ],
        },
        {
            questionText: 'Is night eating behaviour causing problems in your life?',
            answerOptions: [
                { answerText: 'Yes' },
                { answerText: 'Maybe' },
                { answerText: 'No' },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showPage, setShowPage] = useState(0);
    const [finalPage, setFinalPage] = useState(false);

    const handleAnswerOptionClick = () => {
        const nextPage = showPage + 1;
        if (nextPage >= 2 && nextPage < questions.length + 1) {
            const nextQuestion = currentQuestion + 1;
            setCurrentQuestion(nextQuestion);
        }
        if (nextPage === questions.length + 1) {
            setFinalPage(true);
        }
        setShowPage(nextPage);
    };
    return (
        <>
            <div className="page">
                <div className="qn-header">
                    <img class="mb-4" src="logo1.png" width="80" alt />
                    <div style={{ fontWeight: 700, color: 'black' }}>Hello Health</div>
                </div>
                <div className="qn-main">
                    <div className="app">
                        {finalPage ? (
                            <>
                                <div className="finalPage">
                                    <div style={{ fontWeight: 700, fontSize: 30 }}>Here's the result：</div>
                                    <div className="left" style={{ fontWeight: 600, fontSize: 22 }}>Your meal times are irregular and you have a certain tendency to eat at night.</div>

                                    <div className="left" style={{ fontWeight: 600, fontSize: 22 }}>About NES: Night eating syndrome (NES) is an eating disorder that occurs along with frequent sleep interruptions.</div>

                                    <div className="sp-yl">
                                        <div className="left" style={{ fontWeight: 500, fontSize: 18 }}>This is just a supportive application, it can't be treat as qualification doctor diagnosis.</div>
                                    </div>
                                    <Link to='/'><a className="btn btn-success">Back to Home Page</a></Link>
                                </div>

                            </>
                        ) : (
                            <>
                                {showPage === 0 ? (
                                    <>
                                        <div>
                                            <div className="firstPage">
                                                <div style={{ fontWeight: 700, fontSize: 30 }}>Welcome to Hello Health!</div>
                                                <div className="left" style={{ fontWeight: 600, fontSize: 22 }}>Do you know the current state of your dietary health before you start using it?</div>
                                                <div className="left" style={{ fontWeight: 600, fontSize: 22 }}>Only 4 steps, you can get some quick potential results.</div>
                                                <div className="sp-yl">
                                                    <div className="left" style={{ fontWeight: 500, fontSize: 18 }}>This is just a supportive application, it can't be treat as qualification doctor diagnosis.</div>
                                                </div>
                                                <button class="btn btn-success" style={{ width: 150 }} onClick={() => handleAnswerOptionClick()}>NEXT</button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="check">
                                        <div className='question-section'>
                                            <div className='question-count'>
                                                <div style={{ fontSize: 30, fontWeight: 700 }}>Question {currentQuestion + 1}/{questions.length}</div>
                                            </div>
                                            <div className='question-text left' style={{ fontSize: 20, fontWeight: 500 }}>{questions[currentQuestion].questionText}</div>
                                            <div className='answer-section'>
                                                <div className="box1"></div>
                                                <div className="box2"></div>
                                                <div className="box3"></div>
                                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                                    <div><button className="btn btn-success btn-text" onClick={() => handleAnswerOptionClick()}>{answerOption.answerText}</button></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
