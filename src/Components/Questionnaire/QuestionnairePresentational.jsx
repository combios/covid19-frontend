import React from "react";

import QuestionnaireWizard from "./QuestionnaireWizard";

// Import css modules stylesheet as styles
// TODO: use right styles
import styles from "Theme/theme.css";

const QuestionnairePresentational = ({
    title,
    page,
    onPressBack,
    onSelectResponse,
    questionnaire,
    questionnaireItem
}) => (
    <div className={styles.questionnaire}>
        <div className={styles.header}>
            <h2>
                <button className={styles.button} onClick={onPressBack}>
                    {/* TODO: arrow left */}
                    {"<-"}
                </button>
                <span>{`[${page + 1}/${
                    questionnaire.questionnaireItems.length
                }] ${title}`}</span>
            </h2>
        </div>
        {/* TODO: Define when use wizard */}
        <QuestionnaireWizard
            onSelectResponse={onSelectResponse}
            questionnaireItem={questionnaireItem}
        />
    </div>
);

export default QuestionnairePresentational;