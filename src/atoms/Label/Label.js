import React from 'react';
import classNames from "classnames";

import "./Label.css";

const Label = ({bold, classname, labelFor, text}) => (
    <label
        className={classNames("label", classname, {
            "label--bold": bold
        })}
        for={labelFor}
    >
        {text}
    </label>
);

export default Label;