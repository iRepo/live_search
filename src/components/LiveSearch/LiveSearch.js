import React from 'react';
import classNames from "classnames";

import Label from '../../atoms/Label/Label';

import './LiveSearch.css';

const LiveSearch = ({labelText}) => (
    <div>
        <Label bold classname="live-search__label" labelFor="live-search" text={labelText} />
        <input className="live-search__input" name="live-search" type="text" placeholder="Search" />
    </div>
);

export default LiveSearch;