import React from "react";

// Import css modules stylesheet as styles
// TODO: use right styles
import styles from "Theme/theme.css";

export const QuestionnaireItemOptionBoolean = ({
    onSelectResponse,
    questionnaireItem,
    type
}) => {
    const primary = () => {
        onSelectResponse(questionnaireItem, true);
    };
    const secondary = () => {
        onSelectResponse(questionnaireItem, true);
    };
    return (
        <div className={styles.questionnaireItemBoolean}>
            <button className={styles.primary} onClick={primary}>
                {"SI"}
            </button>
            <button className={styles.secondary} onClick={secondary}>
                {"NO"}
            </button>
        </div>
    );
};
