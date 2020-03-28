import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import { mockQuestionnaire } from "__mocks__";

import QuestionnairePresentational from "./QuestionnairePresentational";

export const QuestionnaireContainer = ({
    // FIXME: questionnaire of state manager or API or SW
    questionnaire = mockQuestionnaire[0],
    // react-router-dom
    history
}) => {
    // TODO: define behaviour of pages
    // ? Do with query params
    // ? Do with local state
    // ? Do with state manager
    const [page, setPage] = useState(0);
    const [answers, setAnswer] = useState([]);
    const onPressBack = () => {
        console.log("onPressBack", { page, history });

        if (page > 0) {
            // Delete answer
            setAnswer(actualAnswers => {
                // ? Use immer?
                const list = [...actualAnswers];
                list.pop();
                return list;
            });
            setPage(pageActual => pageActual - 1);
        } else {
            // GoBack
            history.push("/signin");
        }
    };

    const onSelectResponse = (questionnaireItem, answer) => {
        console.log("onSelectResponse", { questionnaireItem, answer });
        if (page + 1 < questionnaire.questionnaireItems.length) {
            setPage(pageActual => pageActual + 1);
            setAnswer(actualAnswers => {
                // ? Use immer?
                const list = [...actualAnswers];
                list.push(answer);
                return list;
            });
        } else {
            onFinishQuestionnaire(answers);
            console.log("onFinishQuestionnaire", { questionnaireItem, answer });
        }
    };
    const onFinishQuestionnaire = (questionnaire, answers) => {
        console.log("onFinishQuestionnaire", { questionnaire, answers });
    };

    return (
        <QuestionnairePresentational
            title={questionnaire.description}
            page={page}
            onPressBack={onPressBack}
            onSelectResponse={onSelectResponse}
            questionnaire={questionnaire}
            questionnaireItem={questionnaire.questionnaireItems[page]}
        />
    );
};

export default withRouter(QuestionnaireContainer);
