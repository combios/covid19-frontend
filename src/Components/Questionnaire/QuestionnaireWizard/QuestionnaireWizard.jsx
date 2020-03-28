import React from "react";
import { QuestionnaireItemWizard } from "./QuestionnaireItemWizard";

// Import css modules stylesheet as styles
// TODO: use right styles
import styles from "Theme/theme.css";

const QuestionnaireWizard = ({ onSelectResponse, questionnaireItem }) => (
    <div className={styles.questionnaireWizard}>
        <QuestionnaireItemWizard
            onSelectResponse={onSelectResponse}
            questionnaireItem={questionnaireItem}
        />
    </div>
);
export default QuestionnaireWizard;
